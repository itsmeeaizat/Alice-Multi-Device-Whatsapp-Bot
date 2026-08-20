// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
//═══════════════════════════════════════════════//
//           Alice Assistent - Recoded & Clean    //
//═══════════════════════════════════════════════//
//
//   Clean connection handler - no more obfuscation
//   Plugin-based architecture - all cases converted to plugins
//   Modular middleware system
//   Pre-pairing auth guard (lib/auth.js)
//
//═══════════════════════════════════════════════//

process.on('uncaughtException', console.error)

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const pino = require('pino')
const {
    makeWASocket,
    useMultiFileAuthState,
    makeInMemoryStore,
    DisconnectReason,
    fetchLatestBaileysVersion,
    PHONENUMBER_MCC,
    BufferJSON,
    proto
} = require('@whiskeysockets/baileys')

const { Boom } = require('@hapi/boom')

// Load settings first
require('./AliceSet')

// Load auth guard
const { authenticate } = require('./lib/auth')

// Load message handler
const AliceHandler = require('./handler')

// ════════════════════════════════════════════════
// STORE
// ════════════════════════════════════════════════
const store = makeInMemoryStore({ logger: pino({ level: 'silent' }).child({ level: 'fatal' }) })

// ════════════════════════════════════════════════
// DATABASE
// ════════════════════════════════════════════════
global.db = {
    data: {
        sticker: {},
        database: {},
        game: {},
        others: {},
        users: {},
        chats: {},
        settings: {},
        changelog: []
    }
}

const DB_FILE = './AliceDatabase/database.json'
if (fs.existsSync(DB_FILE)) {
    try {
        const loaded = JSON.parse(fs.readFileSync(DB_FILE))
        global.db.data = {
            sticker: {},
            database: {},
            game: {},
            others: {},
            users: {},
            chats: {},
            settings: {},
            changelog: [],
            ...loaded
        }
    } catch (e) {
        console.error(chalk.red('Failed to load database.json:'), e)
    }
}

// Debounced save to prevent excessive writes
let saveTimeout = null
global.db.save = function () {
    if (saveTimeout) clearTimeout(saveTimeout)
    saveTimeout = setTimeout(() => {
        fs.writeFileSync(DB_FILE, JSON.stringify(global.db.data, null, 2))
    }, 2000)
}

// ════════════════════════════════════════════════
// CONNECTION MANAGER
// ════════════════════════════════════════════════
let sock = null
let retryCount = 0
const MAX_RETRIES = 10
let isAuthPassed = false

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('./AliceSession')
    const { version, isLatest } = await fetchLatestBaileysVersion()

    console.log(chalk.cyan(`Using Baileys v${version.join('.')}, latest: ${isLatest}`))

    sock = makeWASocket({
        version,
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !global.usePairingCode,
        auth: {
            creds: state.creds,
            keys: state.keys
        },
        browser: ['Alice Assistent', 'Chrome', '1.0.0'],
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        getMessage: async (key) => {
            try {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg?.message || undefined
            } catch {
                return undefined
            }
        }
    })

    store.bind(sock.ev)

    // ════════════════════════════════════════════════
    // PAIRING CODE (with auth guard)
    // ════════════════════════════════════════════════
    if (global.usePairingCode && !sock.authState.creds.registered) {
        // Auth check - only if not already passed
        if (!isAuthPassed) {
            const authOk = await authenticate()
            if (!authOk) {
                console.log(chalk.red('\n  Bot dihentikan. Restart untuk mencoba lagi.\n'))
                process.exit(1)
            }
            isAuthPassed = true
        }

        const phoneNumber = global.AliceBot
        if (PHONENUMBER_MCC && !Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.red('Phone number must start with a valid MCC'))
        } else {
            try {
                const code = await sock.requestPairingCode(phoneNumber)
                console.log(chalk.greenBright(`\n╔══════════════════════════════════════╗`))
                console.log(chalk.greenBright(`║  Pairing Code: ${chalk.white.bold(code)}         ║`))
                console.log(chalk.greenBright(`╚══════════════════════════════════════╝\n`))
            } catch (e) {
                console.error(chalk.red('Failed to get pairing code:'), e)
            }
        }
    }

    // ════════════════════════════════════════════════
    // CONNECTION UPDATE
    // ════════════════════════════════════════════════
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update

        if (qr && !global.usePairingCode) {
            console.log(chalk.yellow('QR code received. Scan it with your WhatsApp.'))
        }

        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error instanceof Boom)
                ? lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut
                : true

            if (shouldReconnect && retryCount < MAX_RETRIES) {
                retryCount++
                console.log(chalk.yellow(`Connection closed. Reconnecting... (${retryCount}/${MAX_RETRIES})`))
                setTimeout(() => connectToWhatsApp(), Math.min(5000 * retryCount, 30000))
            } else {
                console.log(chalk.red('Connection closed permanently. Please restart the bot.'))
            }
        } else if (connection === 'open') {
            retryCount = 0
            isAuthPassed = false // Reset on new session
            console.log(chalk.greenBright(`
╔══════════════════════════════════════╗
║  Alice Assistent Connected!          ║
║  Bot: ${global.botname || 'Alice MD'}              ║
║  Owner: ${global.ownername || 'Aizat'}             ║
╚══════════════════════════════════════╝
            `))
        }
    })

    // ════════════════════════════════════════════════
    // CREDENTIALS UPDATE
    // ════════════════════════════════════════════════
    sock.ev.on('creds.update', saveCreds)

    // ════════════════════════════════════════════════
    // MESSAGE UPSERT - Main message handler
    // ════════════════════════════════════════════════
    sock.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const m = chatUpdate.messages[0]
            if (!m.message) return

            // Process message through handler
            await AliceHandler(sock, m, chatUpdate, store)
        } catch (err) {
            console.error(chalk.red('Message handler error:'), err)
        }
    })

    // ════════════════════════════════════════════════
    // CALL HANDLER (anti-call)
    // ════════════════════════════════════════════════
    if (global.anticall) {
        sock.ev.on('call', async (callData) => {
            try {
                for (const call of callData) {
                    if (call.isGroup) continue
                    await sock.rejectCall(call.id, call.from)
                    await sock.sendMessage(call.from, {
                        text: `Maaf, saya tidak menerima panggilan.\n\nKetik ${global.prefa?.[1] || '.'}menu untuk melihat fitur yang tersedia.`
                    })
                }
            } catch (err) {
                console.error('Anti-call error:', err)
            }
        })
    }

    // ════════════════════════════════════════════════
    // GROUP PARTICIPANTS UPDATE (welcome/leave)
    // ════════════════════════════════════════════════
    sock.ev.on('group-participants.update', async (update) => {
        try {
            const { id, participants, action } = update
            const groupWelcomePath = './AliceDatabase/groupWelcome.json'
            let groupWelcome = []
            if (fs.existsSync(groupWelcomePath)) {
                groupWelcome = JSON.parse(fs.readFileSync(groupWelcomePath))
            }

            if (groupWelcome.includes(id) && global.setwelcome) {
                const metadata = await sock.groupMetadata(id)
                for (const participant of participants) {
                    if (action === 'add') {
                        const welcomeText = `Welcome @${participant.split('@')[0]} to ${metadata.subject}!`
                        await sock.sendMessage(id, {
                            text: welcomeText,
                            mentions: [participant]
                        })
                    } else if (action === 'remove') {
                        const leaveText = `Goodbye @${participant.split('@')[0]}`
                        await sock.sendMessage(id, {
                            text: leaveText,
                            mentions: [participant]
                        })
                    }
                }
            }
        } catch (err) {
            console.error('Group participants update error:', err)
        }
    })

    // ════════════════════════════════════════════════
    // AUTO STATUS/STORY VIEW
    // ════════════════════════════════════════════════
    if (global.autoswview) {
        sock.ev.on('messages.upsert', async (chatUpdate) => {
            try {
                for (const m of chatUpdate.messages) {
                    if (m.key.remoteJid === 'status@broadcast') {
                        await sock.readMessages([m.key])
                    }
                }
            } catch (err) {
                // silent
            }
        })
    }

    return sock
}

// ════════════════════════════════════════════════
// AUTO BIO UPDATE
// ════════════════════════════════════════════════
if (global.autobio) {
    setInterval(async () => {
        try {
            const moment = require('moment-timezone')
            const now = moment().tz('Asia/Jakarta')
            const status = `${global.botname} • ${now.format('HH:mm')} WIB • ${now.format('DD/MM')}`
            await sock.updateProfileStatus(status)
        } catch (err) {
            // silent
        }
    }, 60000)
}

// ════════════════════════════════════════════════
// SEWA EXPIRY CHECK
// ════════════════════════════════════════════════
setInterval(async () => {
    try {
        const sewaPath = './AliceDatabase/sewa.json'
        if (!fs.existsSync(sewaPath)) return
        const sewa = JSON.parse(fs.readFileSync(sewaPath))
        const now = Math.floor(Date.now() / 1000)

        let changed = false
        for (const groupId in sewa) {
            const { expired } = sewa[groupId]
            if (expired !== 0 && expired < now) {
                try {
                    await sock.sendMessage(groupId, {
                        text: 'Masa sewa bot telah *berakhir*. Bot akan keluar dari grup.\n\nHubungi owner untuk perpanjangan.'
                    })
                    await sock.groupLeave(groupId)
                } catch (err) {
                    console.log(`[SEWA] Gagal keluar dari ${groupId}:`, err)
                }
                delete sewa[groupId]
                changed = true
            }
        }

        if (changed) {
            fs.writeFileSync(sewaPath, JSON.stringify(sewa, null, 2))
        }
    } catch (err) {
        console.error('Sewa check error:', err)
    }
}, 60000)

// ════════════════════════════════════════════════
// START
// ════════════════════════════════════════════════
const { printBanner } = require('./lib/auth')
printBanner()
connectToWhatsApp()

// ════════════════════════════════════════════════
// HOT RELOAD
// ════════════════════════════════════════════════
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`File updated: '${__filename}'`))
    delete require.cache[file]
    require(file)
})

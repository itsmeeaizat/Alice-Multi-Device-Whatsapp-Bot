// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
//═══════════════════════════════════════════════//
//        📨 Alice Handler - Message Processor                  //
//   Context builder + Middleware + Plugin Dispatch             //
//═══════════════════════════════════════════════//

const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const axios = require('axios')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const moment = require('moment-timezone')
const chalk = require('chalk')
const { exec } = require('child_process')
const util = require('util')

const {
    WA_DEFAULT_EPHEMERAL,
    getAggregateVotesInPollMessage,
    generateWAMessageContent,
    makeWASocket,
    generateWAMessage,
    downloadContentFromMessage,
    areJidsSameUser,
    getContentType,
    useMultiFileAuthState,
    PHONENUMBER_MCC,
    generateWAMessageFromContent,
    proto,
    prepareWAMessageMedia,
    getDevice
} = require('@whiskeysockets/baileys')

// Library functions
const {
    smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl,
    sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime,
    fetchJson, getBuffer, jsonformat, delay, format, logic,
    generateProfilePicture, parseMention, getRandom, reSize, randomNumber,
    monospace, randomKarakter
} = require('./AliceLibray/myfunction')

const { resize } = require('./AliceLibray/myfunction')
const Fichan = new (require('./AliceLibray/functions'))

// Anti-spam
const { DotGuard } = require('./AliceLibray/antispam')

// ════════════════════════════════════════════════
// PLUGIN LOADER
// ════════════════════════════════════════════════
const plugins = []
const pluginMap = new Map()

function loadPlugins() {
    plugins.length = 0
    pluginMap.clear()

    const pluginDirs = [
        './AlicePlugins/anime', './AlicePlugins/downloader', './AlicePlugins/group',
        './AlicePlugins/ai', './AlicePlugins/converter', './AlicePlugins/rpg',
        './AlicePlugins/owner', './AlicePlugins/stalk', './AlicePlugins/search',
        './AlicePlugins/berita', './AlicePlugins/primbon', './AlicePlugins/audio',
        './AlicePlugins/asupan', './AlicePlugins/game', './AlicePlugins/anonymous',
        './AlicePlugins/menu', './AlicePlugins/nsfw', './AlicePlugins/pushkontak',
        './AlicePlugins/cpanel', './AlicePlugins/ephoto', './AlicePlugins/other',
        './AlicePlugins/fun'
    ]

    for (const dir of pluginDirs) {
        const fullDir = path.resolve(__dirname, dir)
        if (!fs.existsSync(fullDir)) continue
        const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.js'))
        for (const file of files) {
            try {
                const pluginPath = path.join(fullDir, file)
                delete require.cache[require.resolve(pluginPath)]
                const plugin = require(pluginPath)
                if (plugin && plugin.command && plugin.operate) {
                    plugins.push(plugin)
                    const cmds = Array.isArray(plugin.command) ? plugin.command : [plugin.command]
                    for (const cmd of cmds) pluginMap.set(cmd.toLowerCase(), plugin)
                }
            } catch (err) {
                console.error(chalk.red(`Failed to load plugin ${dir}/${file}:`), err.message)
            }
        }
    }
    console.log(chalk.green(`Loaded ${plugins.length} plugins, ${pluginMap.size} commands`))
}

loadPlugins()

// ════════════════════════════════════════════════
// HELPER FUNCTIONS
// ════════════════════════════════════════════════
function totalfitur() { return pluginMap.size }
async function ments(teks = '') { return parseMention(teks) }
function Styles(text) { return text }
function checkPremiumUser(sender, premium) { return premium.includes(sender) }
function pickRandom(arr) {
    if (!Array.isArray(arr)) return arr
    return arr[Math.floor(Math.random() * arr.length)]
}

// ════════════════════════════════════════════════
// MAIN HANDLER
// ════════════════════════════════════════════════
module.exports = async (Alice, m, chatUpdate, store) => {
    try {
        if (!m.message) return

        if (typeof smsg === 'function') {
            try { smsg(Alice, m, store) } catch {}
        }

        // ──────────────────────────────────────────────
        // MESSAGE PARSING
        // ──────────────────────────────────────────────
        const body = (
            m.mtype === 'conversation' ? m.message.conversation :
            m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
            m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
            m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
            m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply?.selectedRowId :
            m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage?.selectedId :
            m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.msg?.nativeFlowResponseMessage?.paramsJson || '{}').id :
            m.mtype === 'messageContextInfo' ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply?.selectedRowId || m.text) :
            ''
        )
        const budy = typeof m.text === 'string' ? m.text : ''

        // ──────────────────────────────────────────────
        // PREFIX & COMMAND
        // ──────────────────────────────────────────────
        const prefixRegex = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/
        const isCmd = prefixRegex.test(body)
        let prefix = isCmd ? body.match(prefixRegex)[0] : ''
        let command = isCmd ? body.slice(1).trim().split(/ +/)[0].toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const text = args.join(' ')
        const q = text

        // ──────────────────────────────────────────────
        // USER/GROUP INFO
        // ──────────────────────────────────────────────
        const senderNumber = m.sender.replace(/@.+/, '')
        const pushname = m.pushName || senderNumber
        const botNumber = global.AliceBot ? global.AliceBot + '@s.whatsapp.net' : (Alice.user?.id?.split(':')[0] || '') + '@s.whatsapp.net'
        const owner = global.owner || []
        const isOwner = [botNumber, ...owner, ...(global.owner || [])].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

        const isGroup = m.isGroup || m.key.remoteJid?.endsWith('@g.us')
        const groupMetadata = isGroup ? await Alice.groupMetadata(m.chat).catch(() => ({})) : {}
        const groupName = isGroup ? groupMetadata.subject || '' : ''
        const participants = isGroup ? (groupMetadata.participants || []).map(p => ({
            jid: p.id || p.jid, admin: p.admin
        })) : []
        const groupOwner = isGroup ? participants.find(p => p.admin === 'superadmin')?.jid || '' : ''
        const groupAdmins = isGroup ? participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.jid) : []
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupOwner = isGroup ? groupOwner === m.sender : false

        // ──────────────────────────────────────────────
        // MEDIA
        // ──────────────────────────────────────────────
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = /image/.test(mime)
        const isVideo = /video/.test(mime)
        const isSticker = /sticker/.test(mime)
        const isAudio = /audio/.test(mime)
        const isXMEDIA = m.mtype
        const qmsg = (quoted.msg || quoted)

        // ──────────────────────────────────────────────
        // PREMIUM & BAN
        // ──────────────────────────────────────────────
        let premiumList = []
        try { premiumList = JSON.parse(fs.readFileSync('./AliceDatabase/premium.json') || '[]') } catch {}
        const isPrem = isOwner || checkPremiumUser(m.sender, premiumList)

        let user_ban = []
        try { user_ban = JSON.parse(fs.readFileSync('./AliceDatabase/ban.json') || '[]') } catch {}
        const isBan = user_ban.includes(m.sender)

        // ──────────────────────────────────────────────
        // TIME
        // ──────────────────────────────────────────────
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        const timestamp = moment().tz('Asia/Jakarta').valueOf()
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')

        let stime
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if (time2 < '06:00:00') stime = Styles('Selamat Pagi 👋🏻')
        else if (time2 < '11:00:00') stime = Styles('Selamat Siang 👋🏻')
        else if (time2 < '16:00:00') stime = Styles('Selamat Sore 👋🏻')
        else if (time2 < '19:00:00') stime = Styles('Selamat Malam 👋🏻')
        else stime = Styles('Selamat Tengah Malam 👋🏻')

        // ──────────────────────────────────────────────
        // DATABASE
        // ──────────────────────────────────────────────
        if (!global.db.data.users[m.sender]) global.db.data.users[m.sender] = {}
        if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {}
        if (!global.db.data.settings[botNumber]) global.db.data.settings[botNumber] = {}

        const user = global.db.data.users[m.sender]
        const chat = global.db.data.chats[m.chat]
        const settings = global.db.data.settings[botNumber]

        // ──────────────────────────────────────────────
        // HELPER FUNCTIONS (available to plugins via context)
        // ──────────────────────────────────────────────
        const reply = async (teks) => {
            return Alice.sendMessage(m.chat, { text: teks, mentions: await ments(teks) }, { quoted: m })
        }
        const XRO = async () => reply('❌ Perintah ini khusus Owner Bot!')
        const XRP = async () => reply('❌ Perintah ini khusus Premium User!')
        const Xban = async () => reply('🚫 Kamu terbanned oleh bot!')
        const XRB = async () => reply('🚫 Kamu terbanned oleh bot!')
        const XRA = async () => reply('❌ Perintah ini khusus Admin Group!')
        const XRG = async () => reply('❌ Perintah ini hanya bisa digunakan di Group!')
        const XRPC = async () => reply('❌ Perintah ini membutuhkan Premium/Koin!')
        const XReaction = async () => {
            try { await Alice.sendMessage(m.chat, { react: { text: '⏳', key: m.key } }) } catch {}
        }

        const xy = m.quoted ? m.quoted : m
        const alice = prefix
        const AliceCmd = prefix + command
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        const isPrivate = !m.key.remoteJid?.includes('@g.us')
        const isPc = m.chat?.endsWith('@s.whatsapp.net')
        const isMute = chat?.mute || false
        const isAfkOn = false
        const isBot = botNumber.includes(senderNumber)
        const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false
        const content = JSON.stringify(m.message)
        const numberQuery = text.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'

        // Anti-feature state
        const ntilinkfb = chat?.antilinkfb || false
        const ntilinktg = chat?.antilinktg || false
        const nttoxic = chat?.antitoxic || false
        const ntilinkdewasa = chat?.antilinkbokep || false
        const ntilinkmediafire = chat?.antilinkmediafire || false
        const welcmm = chat?.welcome || false
        const wlcmm = chat?.welcome || false
        const mute = chat?.mute || false

        // Data
        let changelogs = global.db.data.changelog || []
        let contacts = user?.contacts || []
        global.db_absen = global.db_absen || {}

        // RPG stubs
        const rpgDb = user?.rpg || null
        function initRpgUser() {
            if (!user.rpg) user.rpg = { level: 1, exp: 0, gold: 0, hp: 100, mp: 50 }
            return user.rpg
        }
        function saveRpg() { global.db.save() }

        // ──────────────────────────────────────────────
        // ANTI-SPAM
        // ──────────────────────────────────────────────
        if (isCmd && DotGuard.shouldBlock(m.sender, body)) {
            return reply('⚠️ Terlalu banyak command cepat! Tunggu sebentar.')
        }

        // ──────────────────────────────────────────────
        // PRE-COMMAND CHECKS
        // ──────────────────────────────────────────────
        if (isCmd) {
            if (!isGroup && !isOwner && !isPrem && settings.onlygrub) {
                return reply('⚠️ Bot saat ini hanya bisa digunakan di grup!')
            }
            if (isMute && !isOwner && !isAdmins) return
            if (isBan) return Xban()
        }

        // ──────────────────────────────────────────────
        // BUILD CONTEXT
        // ──────────────────────────────────────────────
        const context = {
            // Core
            Alice, m, chatUpdate, store,
            // Message parsing
            body, budy, isCmd, prefix, command, args, text, q, thePrefix: prefix,
            // User info
            pushname, senderNumber, botNumber, isOwner, isPrem, isBan, sender: m.sender,
            // Group info
            isGroup, groupMetadata, groupName, participants, groupAdmins, groupOwner,
            isBotAdmins, isAdmins, isGroupOwner,
            // Media
            quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio, isXMEDIA, qmsg,
            // Helpers
            reply, xy, XRO, XRP, Xban, XRB, XRA, XRG, XRPC, XReaction,
            alice, Alice,
            // Time
            time, timee, timestamp, salam, tanggal2, hariini, stime,
            // DB
            db: global.db, user, chat, settings, db_absen: global.db_absen,
            // Misc
            mentionUser, isPrivate, isPc, isMute, isAfkOn, isBot, froms, content, numberQuery,
            more, readmore, prefixRegex,
            // Anti-feature state
            ntilinkfb, ntilinktg, nttoxic, ntilinkdewasa, ntilinkmediafire,
            welcmm, wlcmm, mute,
            // Data
            changelogs, contacts,
            // RPG
            rpgDb, initRpgUser, saveRpg,
            // Libraries
            fs, axios, fetch, cheerio, crypto, util, exec, moment, chalk,
            // Baileys exports
            WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent,
            generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType,
            useMultiFileAuthState, generateWAMessageFromContent, proto, prepareWAMessageMedia, getDevice,
            // Library functions
            smsg, getGroupAdmins, formatp, h2k, tanggal, formatDate, getTime, isUrl,
            sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime,
            fetchJson, getBuffer, jsonformat, delay, format, logic,
            generateProfilePicture, parseMention, getRandom, reSize, randomNumber,
            monospace, randomKarakter, resize, Fichan, pickRandom,
            // Constants
            owner: global.owner || [], botname: global.botname || 'Alice',
            version: global.version || 'V25', ownername: global.ownername || 'Aizat',
            channel: global.channel || '', totalfitur, ments, Styles,
            // Premium/limit stubs
            limituser: user?.limit || 0, limitAbis: false, useLimit: () => {},
            registered: user?.registered || false, IsReg: user?.registered || false
        }

        // ──────────────────────────────────────────────
        // MIDDLEWARE (anti-link, anti-toxic, etc.)
        // ──────────────────────────────────────────────
        if (isGroup && !isOwner && !isAdmins) {
            await runMiddleware(Alice, m, context)
        }

        // ──────────────────────────────────────────────
        // PLUGIN DISPATCH
        // ──────────────────────────────────────────────
        if (isCmd && command) {
            const plugin = pluginMap.get(command)
            if (plugin) {
                try {
                    await XReaction()
                    await plugin.operate(context)
                    global.db.save()
                    return
                } catch (err) {
                    console.error(chalk.red(`Plugin error [${command}]:`), err)
                    await reply(`❌ Error: ${err.message}`)
                    return
                }
            }
        }

        // ──────────────────────────────────────────────
        // EVAL (owner only)
        // ──────────────────────────────────────────────
        if (budy.startsWith('=>') && isOwner) {
            try {
                let evaled = await eval(`(async () => { return ${budy.slice(3)} })()`)
                return reply(util.format(evaled))
            } catch (e) { return reply(String(e)) }
        }
        if (budy.startsWith('>') && isOwner) {
            try {
                let evaled = await eval(budy.slice(2))
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                return reply(evaled)
            } catch (err) { return reply(String(err)) }
        }
        if (budy.startsWith('$') && isOwner) {
            exec(budy.slice(2), (err, stdout) => {
                if (err) return reply(err)
                if (stdout) return reply(stdout)
            })
            return
        }

        // ──────────────────────────────────────────────
        // ANONYMOUS CHAT FORWARDING
        // ──────────────────────────────────────────────
        if (m.chat?.endsWith('@s.whatsapp.net')) {
            if (global.menfes) {
                let room = Object.values(global.menfes).find(r =>
                    [r.a, r.b].includes(m.sender) && r.state === 'CHATTING')
                if (room) {
                    if (/^.*(next|leave|start)/.test(budy)) return
                    let other = room.a === m.sender ? room.b : room.a
                    await m.copyNForward(other, true)
                    return
                }
            }
            if (global.anonymous) {
                let room = Object.values(global.anonymous).find(r =>
                    [r.a, r.b].includes(m.sender) && r.state === 'CHATTING')
                if (room) {
                    if (/^.*(start|leave|next)/.test(m.text)) return
                    let other = [room.a, room.b].find(u => u !== m.sender)
                    m.copyNForward(other, true)
                    return
                }
            }
        }

    } catch (err) {
        console.log('====== ERROR DETAIL ======')
        console.log(util.format(err))
        if (err.stack) console.log(err.stack)
        console.log('====== END ERROR ======')
    }
}

// ════════════════════════════════════════════════
// MIDDLEWARE RUNNER
// ════════════════════════════════════════════════
async function runMiddleware(Alice, m, ctx) {
    const { isGroup, isBotAdmins, isAdmins, isOwner, reply } = ctx
    if (!isGroup || !isBotAdmins) return

    const chat = global.db.data.chats[m.chat] || {}
    const isXMEDIA = m.mtype

    // Anti-link
    if (chat.antilink || chat.antilinkall || chat.antilinkgc || chat.antilinktt ||
        chat.antilinkytch || chat.antilinkytvid || chat.antilinkig || chat.antilinkfb ||
        chat.antilinktwit || chat.antilinktg || chat.antilinkwa) {
        const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi
        if (linkRegex.test(m.text || '')) {
            if (!isOwner && !isAdmins) {
                try {
                    await Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                    await Alice.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                    await reply('🚫 Link terdeteksi! User dikeluarkan.')
                } catch {}
                return
            }
        }
    }

    // Anti-toxic
    if (chat.antitoxic) {
        let badwords = []
        try { badwords = JSON.parse(fs.readFileSync('./AliceDatabase/badwords.json') || '[]') } catch {}
        const text = (m.text || '').toLowerCase()
        if (badwords.some(w => text.includes(w))) {
            if (!isOwner && !isAdmins) {
                try {
                    await reply('🚫 Bahasa toxic terdeteksi!')
                    await Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                } catch {}
                return
            }
        }
    }

    // Anti-media
    const antiTypes = {
        antiimage: 'imageMessage', antivideo: 'videoMessage',
        antisticker: 'stickerMessage', antiaudio: 'audioMessage',
        antipoll: 'pollCreationMessage', antidocument: 'documentMessage',
        antilocation: 'locationMessage', anticontact: 'contactMessage'
    }
    for (const [key, msgType] of Object.entries(antiTypes)) {
        if (chat[key] && isXMEDIA === msgType) {
            if (!isOwner && !isAdmins) {
                try {
                    await reply(`🚫 ${msgType.replace('Message', '')} detected! Dihapus.`)
                    await Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
                } catch {}
                return
            }
        }
    }

    // Anti-viewonce
    if (chat.antiviewonce && isXMEDIA === 'viewOnceMessage') {
        if (!isOwner && !isAdmins) {
            try {
                await reply('🚫 ViewOnce detected! Dihapus.')
                await Alice.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
            } catch {}
            return
        }
    }
}

// ════════════════════════════════════════════════
// EXPORTS
// ════════════════════════════════════════════════
module.exports.reloadPlugins = loadPlugins
module.exports.getPlugins = () => ({ plugins, pluginMap })

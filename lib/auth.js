// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
//═══════════════════════════════════════════════//
//           AUTH GUARD - Pre-Pairing Password    //
//═══════════════════════════════════════════════//
//
//   Sistem keamanan sebelum pairing WhatsApp
//   Wajib masukin sandi sebelum bisa pairing
//   3x gagal = lockout 30 menit (anti-spam)
//   File lockout disimpan di lib/.lockout
//
//═══════════════════════════════════════════════//

const chalk = require('chalk')
const readline = require('readline')
const fs = require('fs')
const path = require('path')

// ════════════════════════════════════════════════
// CONFIG - Ubah sandi di sini
// ════════════════════════════════════════════════
const AUTH_CONFIG = {
    password: 'Aizat123',
    maxAttempts: 3,
    lockoutMinutes: 30,
    enableAuth: true
}

const LOCKOUT_FILE = path.join(__dirname, '.lockout')

// ════════════════════════════════════════════════
// GET VERSION FROM package.json
// ════════════════════════════════════════════════
function getVersion() {
    try {
        const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'))
        return pkg.version || '1.0.0'
    } catch {
        return '1.0.0'
    }
}

// ════════════════════════════════════════════════
// LOCKOUT STATE - read/write to file
// ════════════════════════════════════════════════
function getLockout() {
    try {
        if (fs.existsSync(LOCKOUT_FILE)) {
            return JSON.parse(fs.readFileSync(LOCKOUT_FILE, 'utf-8'))
        }
    } catch {}
    return { lockedUntil: 0, totalFailures: 0 }
}

function saveLockout(state) {
    try {
        fs.writeFileSync(LOCKOUT_FILE, JSON.stringify(state, null, 2))
    } catch {}
}

function clearLockout() {
    try {
        if (fs.existsSync(LOCKOUT_FILE)) fs.unlinkSync(LOCKOUT_FILE)
    } catch {}
}

// ════════════════════════════════════════════════
// FORMAT TIME (mm:ss)
// ════════════════════════════════════════════════
function formatTime(seconds) {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

// ════════════════════════════════════════════════
// BANNER DISPLAY
// ════════════════════════════════════════════════
function printBanner() {
    const ver = getVersion()
    console.log(chalk.cyan(`
╔═══════════════════════════════════════════════╗
║                                               ║
║            ALICE MULTI DEVICE                 ║
║                  v${ver}                      ║
║                                               ║
║                     by                        ║
║                   Aizat                       ║
║                                               ║
╚═══════════════════════════════════════════════╝
    `))
}

// ════════════════════════════════════════════════
// AUTH BOX DISPLAY
// ════════════════════════════════════════════════
function printAuthBox() {
    const ver = getVersion()
    console.log(chalk.cyan(`
╔═══════════════════════════════════════════════╗
║                                               ║
║            ALICE MULTI DEVICE                 ║
║                  v${ver}                      ║
║                                               ║
║                     by                        ║
║                   Aizat                       ║
║                                               ║
╠═══════════════════════════════════════════════╣
║                                               ║
║        AUTENTIKASI PAIRING                    ║
║                                               ║
║  Masukkan sandi untuk melanjutkan pairing     ║
║                                               ║
║  Percobaan maksimal: ${AUTH_CONFIG.maxAttempts}x                      ║
║  Gagal ${AUTH_CONFIG.maxAttempts}x = lockout ${AUTH_CONFIG.lockoutMinutes} menit            ║
║                                               ║
╚═══════════════════════════════════════════════╝
    `))
}

// ════════════════════════════════════════════════
// ATTEMPT BOX (wrong password)
// ════════════════════════════════════════════════
function printAttemptBox(remaining) {
    console.log(chalk.yellow(`
┌───────────────────────────────────────────────┐
│  Sandi salah!                                 │
│  Sisa percobaan: ${remaining}x                           │
└───────────────────────────────────────────────┘
    `))
}

// ════════════════════════════════════════════════
// SUCCESS BOX (correct password)
// ════════════════════════════════════════════════
function printSuccessBox() {
    const ver = getVersion()
    console.log(chalk.greenBright(`
╔═══════════════════════════════════════════════╗
║                                               ║
║            ALICE MULTI DEVICE                 ║
║                  v${ver}                      ║
║                                               ║
║                     by                        ║
║                   Aizat                       ║
║                                               ║
╠═══════════════════════════════════════════════╣
║                                               ║
║  Sandi benar! Lanjut ke pairing...            ║
║                                               ║
╚═══════════════════════════════════════════════╝
    `))
}

// ════════════════════════════════════════════════
// LOCKOUT BOX (3x failed - cooldown active)
// ════════════════════════════════════════════════
function printLockoutBox(remainingSeconds) {
    const ver = getVersion()
    const timer = formatTime(remainingSeconds)
    console.log(chalk.red(`
╔═══════════════════════════════════════════════╗
║                                               ║
║            ALICE MULTI DEVICE                 ║
║                  v${ver}                      ║
║                                               ║
║                     by                        ║
║                   Aizat                       ║
║                                               ║
╠═══════════════════════════════════════════════╣
║                                               ║
║        AUTENTIKASI TERKUNCI!                   ║
║                                               ║
║  ${AUTH_CONFIG.maxAttempts}x percobaan gagal.               ║
║  Tunggu ${AUTH_CONFIG.lockoutMinutes} menit sebelum coba lagi.  ║
║                                               ║
║  Sisa waktu: ${timer}                           ║
║                                               ║
╚═══════════════════════════════════════════════╝
    `))
}

// ════════════════════════════════════════════════
// LOCKOUT START BOX
// ════════════════════════════════════════════════
function printLockoutStartBox() {
    const ver = getVersion()
    console.log(chalk.red(`
╔═══════════════════════════════════════════════╗
║                                               ║
║            ALICE MULTI DEVICE                 ║
║                  v${ver}                      ║
║                                               ║
║                     by                        ║
║                   Aizat                       ║
║                                               ║
╠═══════════════════════════════════════════════╣
║                                               ║
║        AUTENTIKASI GAGAL!                      ║
║                                               ║
║  Percobaan habis (${AUTH_CONFIG.maxAttempts}x gagal)             ║
║  Bot terkunci ${AUTH_CONFIG.lockoutMinutes} menit.                 ║
║                                               ║
║  Tunggu cooldown selesai...                   ║
║                                               ║
╚═══════════════════════════════════════════════╝
    `))
}

// ════════════════════════════════════════════════
// PROMPT PASSWORD (hidden input)
// ════════════════════════════════════════════════
function promptPassword(promptText) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: true
        })

        const origWrite = process.stdout.write.bind(process.stdout)
        rl._writeToOutput = function(writeStr) {
            if (writeStr === '\r\n' || writeStr === '\n' || writeStr === '\r') {
                origWrite(writeStr)
            } else if (writeStr.includes(promptText)) {
                origWrite(writeStr)
            } else {
                for (const ch of writeStr) {
                    if (ch === '\b' || ch === '\x7f') {
                        origWrite('\b \b')
                    } else if (ch === '\r' || ch === '\n') {
                        origWrite(ch)
                    } else {
                        origWrite('*')
                    }
                }
            }
        }

        rl.question(promptText, (answer) => {
            rl.close()
            resolve(answer.trim())
        })
    })
}

// ════════════════════════════════════════════════
// SLEEP HELPER
// ════════════════════════════════════════════════
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// ════════════════════════════════════════════════
// CLEAR LINE (for updating timer in-place)
// ════════════════════════════════════════════════
function clearLastLines(n) {
    for (let i = 0; i < n; i++) {
        process.stdout.write('\x1b[1A\x1b[2K')
    }
}

// ════════════════════════════════════════════════
// MAIN AUTH FUNCTION
// ════════════════════════════════════════════════
async function authenticate() {
    // Skip if auth disabled
    if (!AUTH_CONFIG.enableAuth) {
        printBanner()
        return true
    }

    // ════════════════════════════════════════════════
    // CHECK EXISTING LOCKOUT
    // ════════════════════════════════════════════════
    const lockoutState = getLockout()
    const now = Date.now()
    const lockoutMs = AUTH_CONFIG.lockoutMinutes * 60 * 1000

    if (lockoutState.lockedUntil && lockoutState.lockedUntil > now) {
        // Still locked - show countdown
        let remainingMs = lockoutState.lockedUntil - now

        while (remainingMs > 0) {
            const remainingSec = Math.ceil(remainingMs / 1000)
            printLockoutBox(remainingSec)
            await sleep(1000)
            clearLastLines(20) // Clear the box for redraw
            remainingMs -= 1000
        }

        // Lockout expired - clear and continue
        clearLockout()
        console.log(chalk.greenBright(`  Lockout selesai. Silakan coba lagi.\n`))
    } else if (lockoutState.lockedUntil && lockoutState.lockedUntil <= now) {
        // Lockout expired but file still exists
        clearLockout()
    }

    // ════════════════════════════════════════════════
    // AUTH PROMPT
    // ════════════════════════════════════════════════
    printAuthBox()

    let attempts = 0

    while (attempts < AUTH_CONFIG.maxAttempts) {
        const remaining = AUTH_CONFIG.maxAttempts - attempts - 1
        const promptText = chalk.cyan(`  Masukkan sandi > `)

        const input = await promptPassword(promptText)

        if (input === AUTH_CONFIG.password) {
            printSuccessBox()
            clearLockout()
            return true
        }

        attempts++

        if (attempts < AUTH_CONFIG.maxAttempts) {
            printAttemptBox(remaining)
        }
    }

    // ════════════════════════════════════════════════
    // MAX ATTEMPTS REACHED - START LOCKOUT
    // ════════════════════════════════════════════════
    printLockoutStartBox()

    const lockedUntil = Date.now() + lockoutMs
    saveLockout({
        lockedUntil,
        totalFailures: (lockoutState.totalFailures || 0) + 1,
        lockedAt: new Date().toISOString()
    })

    // Live countdown
    let remainingMs = lockoutMs

    while (remainingMs > 0) {
        const remainingSec = Math.ceil(remainingMs / 1000)
        const timer = formatTime(remainingSec)
        process.stdout.write(chalk.red(`\r  Sisa waktu lockout: ${timer}  `))
        await sleep(1000)
        remainingMs -= 1000
    }

    // Lockout finished
    process.stdout.write('\r' + ' '.repeat(40) + '\r')
    console.log(chalk.greenBright(`
┌───────────────────────────────────────────────┐
│  Lockout selesai! Silakan coba lagi.          │
└───────────────────────────────────────────────┘
    `))

    clearLockout()

    // Recursive retry after lockout
    return authenticate()
}

// ════════════════════════════════════════════════
// EXPORT
// ════════════════════════════════════════════════
module.exports = {
    authenticate,
    printBanner,
    AUTH_CONFIG
}

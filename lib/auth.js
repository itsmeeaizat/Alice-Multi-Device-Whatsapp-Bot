// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
//═══════════════════════════════════════════════//
//           AUTH GUARD - Pre-Pairing Password    //
//═══════════════════════════════════════════════//
//
//   Sistem keamanan sebelum pairing WhatsApp
//   Wajib masukin sandi sebelum bisa pairing
//   3x gagal = lockout 30 menit (anti-spam)
//   Sandi hanya diminta saat first-time pairing
//   Setelah connect, session disimpan di AliceSession
//   Restart panel = auto-connect tanpa sandi lagi
//
//═══════════════════════════════════════════════//

const chalk = require('chalk')
const readline = require('readline')
const fs = require('fs')
const path = require('path')
const config = require('./config')

// ════════════════════════════════════════════════
// CONFIG - Ubah sandi di sini
// ════════════════════════════════════════════════
const AUTH_CONFIG = {
    password: config.authPassword,
    maxAttempts: 3,
    lockoutMinutes: 30,
    enableAuth: true
}

const LOCKOUT_FILE = path.join(__dirname, '.lockout')
const AUTH_PASSED_FILE = path.join(__dirname, '.auth-passed')
const SESSION_DIR = path.join(__dirname, '..', 'AliceSession')

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
// AUTH PASSED MARKER - skip auth on restart
// ════════════════════════════════════════════════
function markAuthPassed() {
    try {
        fs.writeFileSync(AUTH_PASSED_FILE, JSON.stringify({
            passedAt: new Date().toISOString(),
            version: getVersion()
        }, null, 2))
    } catch {}
}

function isAuthPassed() {
    try {
        if (!fs.existsSync(AUTH_PASSED_FILE)) return false
        // Check if session also exists
        if (!fs.existsSync(SESSION_DIR)) return false
        const sessionFiles = fs.readdirSync(SESSION_DIR)
        if (sessionFiles.length === 0) return false
        // Both marker and session exist - skip auth
        return true
    } catch {
        return false
    }
}

function clearAuthPassed() {
    try {
        if (fs.existsSync(AUTH_PASSED_FILE)) fs.unlinkSync(AUTH_PASSED_FILE)
    } catch {}
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
// LOCKOUT BOX (cooldown active)
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
║                     by                        �║
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
// SKIP BOX (already authenticated - restart scenario)
// ════════════════════════════════════════════════
function printSkipAuthBox() {
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
║  Session ditemukan!                           ║
║  Skip autentikasi, langsung connect...        ║
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
    // CHECK: ALREADY AUTHENTICATED (session exists + marker file)
    // This handles panel restart - skip auth if already paired before
    // ════════════════════════════════════════════════
    if (isAuthPassed()) {
        printSkipAuthBox()
        return true
    }

    // ════════════════════════════════════════════════
    // CHECK EXISTING LOCKOUT
    // ════════════════════════════════════════════════
    const lockoutState = getLockout()
    const now = Date.now()
    const lockoutMs = AUTH_CONFIG.lockoutMinutes * 60 * 1000

    if (lockoutState.lockedUntil && lockoutState.lockedUntil > now) {
        let remainingMs = lockoutState.lockedUntil - now

        while (remainingMs > 0) {
            const remainingSec = Math.ceil(remainingMs / 1000)
            printLockoutBox(remainingSec)
            await sleep(1000)
            clearLastLines(20)
            remainingMs -= 1000
        }

        clearLockout()
        console.log(chalk.greenBright(`  Lockout selesai. Silakan coba lagi.\n`))
    } else if (lockoutState.lockedUntil && lockoutState.lockedUntil <= now) {
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
            // Save marker - next restart skips auth
            markAuthPassed()
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

    let remainingMs = lockoutMs

    while (remainingMs > 0) {
        const remainingSec = Math.ceil(remainingMs / 1000)
        const timer = formatTime(remainingSec)
        process.stdout.write(chalk.red(`\r  Sisa waktu lockout: ${timer}  `))
        await sleep(1000)
        remainingMs -= 1000
    }

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
// RESET AUTH (for re-pairing with new number)
// Deletes session + auth marker
// ════════════════════════════════════════════════
function resetAuth() {
    clearAuthPassed()
    clearLockout()
    // Also clear session if exists
    try {
        if (fs.existsSync(SESSION_DIR)) {
            fs.rmSync(SESSION_DIR, { recursive: true, force: true })
        }
    } catch {}
}

// ════════════════════════════════════════════════
// EXPORT
// ════════════════════════════════════════════════
module.exports = {
    authenticate,
    printBanner,
    markAuthPassed,
    isAuthPassed,
    resetAuth,
    AUTH_CONFIG
}

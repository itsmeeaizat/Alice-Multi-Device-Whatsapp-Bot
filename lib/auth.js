// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
//═══════════════════════════════════════════════//
//           AUTH GUARD - Pre-Pairing Password    //
//═══════════════════════════════════════════════//
//
//   Sistem keamanan sebelum pairing WhatsApp
//   Wajib masukin sandi sebelum bisa pairing
//   3x gagal = bot disconnect
//
//═══════════════════════════════════════════════//

const chalk = require('chalk')
const readline = require('readline')

// ════════════════════════════════════════════════
// CONFIG - Ubah sandi di sini
// ════════════════════════════════════════════════
const AUTH_CONFIG = {
    password: 'Aizat123',
    maxAttempts: 3,
    enableAuth: true
}

// ════════════════════════════════════════════════
// AUTH BOX DISPLAY
// ════════════════════════════════════════════════
function printAuthBox() {
    console.log(chalk.cyan(`
╔═══════════════════════════════════════════════╗
║                                               ║
║        ALICE MD - AUTHENTICATION              ║
║                                               ║
║  Masukkan sandi untuk melanjutkan pairing     ║
║                                               ║
╠═══════════════════════════════════════════════╣
║                                               ║
║  Percobaan maksimal: ${AUTH_CONFIG.maxAttempts}x                ║
║  Gagal ${AUTH_CONFIG.maxAttempts}x = bot disconnect              ║
║                                               ║
╚═══════════════════════════════════════════════╝
    `))
}

function printAttemptBox(remaining) {
    console.log(chalk.yellow(`
┌───────────────────────────────────────────────┐
│  Sandi salah!                                 │
│  Sisa percobaan: ${remaining}x                           │
└───────────────────────────────────────────────┘
    `))
}

function printSuccessBox() {
    console.log(chalk.greenBright(`
┌───────────────────────────────────────────────┐
│  Sandi benar! Lanjut ke pairing...            │
└───────────────────────────────────────────────┘
    `))
}

function printFailBox() {
    console.log(chalk.red(`
╔═══════════════════════════════════════════════╗
║                                               ║
║        AUTENTIKASI GAGAL!                      ║
║                                               ║
║  Percobaan habis (${AUTH_CONFIG.maxAttempts}x gagal)             ║
║  Bot akan disconnect.                         ║
║                                               ║
║  Restart bot dan coba lagi.                   ║
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

        // Hide input like password
        const stdin = process.stdin
        const isRaw = stdin.isTTY ? stdin.isRaw : false

        let input = ''

        // Override write to mask characters
        const origWrite = process.stdout.write.bind(process.stdout)
        rl._writeToOutput = function(writeStr) {
            if (writeStr === '\r\n' || writeStr === '\n' || writeStr === '\r') {
                origWrite(writeStr)
            } else if (writeStr.includes(promptText)) {
                origWrite(writeStr)
            } else {
                // Mask each char, handle backspace
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
// MAIN AUTH FUNCTION
// ════════════════════════════════════════════════
async function authenticate() {
    // Skip if auth disabled
    if (!AUTH_CONFIG.enableAuth) {
        return true
    }

    printAuthBox()

    let attempts = 0

    while (attempts < AUTH_CONFIG.maxAttempts) {
        const remaining = AUTH_CONFIG.maxAttempts - attempts - 1
        const promptText = chalk.cyan(`  Masukkan sandi > `)

        const input = await promptPassword(promptText)

        if (input === AUTH_CONFIG.password) {
            printSuccessBox()
            return true
        }

        attempts++

        if (attempts < AUTH_CONFIG.maxAttempts) {
            printAttemptBox(remaining)
        }
    }

    printFailBox()
    return false
}

// ════════════════════════════════════════════════
// EXPORT
// ════════════════════════════════════════════════
module.exports = {
    authenticate,
    AUTH_CONFIG
}

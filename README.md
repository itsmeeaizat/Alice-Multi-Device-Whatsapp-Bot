# ALICE MULTI DEVICE - WHATSAPP BOT

> WhatsApp bot modular berbasis Baileys Multi-Device library. Dibangun dengan arsitektur plugin dinamis, hot-reload, dan 1,235+ fitur across 22 kategori.

```
┌─────────────────────────────────────────────────┐
│         ALICE MULTI DEVICE - WHATSAPP BOT       │
│         Modular Plugin Architecture             │
│         Author : Aizat                          │
│         Made in Indonesia                       │
└─────────────────────────────────────────────────┘
```

---

## DAFTAR ISI

- [Tentang Bot](#tentang-bot)
- [Spesifikasi Minimum](#spesifikasi-minimum)
- [Struktur Project](#struktur-project)
- [Total Fitur & Kategori](#total-fitur--kategori)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Bot](#menjalankan-bot)
- [Deploy ke Pterodactyl Panel](#deploy-ke-pterodactyl-panel)
- [Sistem Plugin](#sistem-plugin)
- [Command List](#command-list)
- [Anti-Ban Practices](#anti-ban-practices)
- [Troubleshooting](#troubleshooting)
- [Credits](#credits)

---

## TENTANG BOT

Alice Multi Device adalah WhatsApp bot yang dibangun di atas [Baileys MD](https://github.com/WhiskeyConectors/Baileys) library. Project ini awalnya monolith 32,000+ baris kode yang di-refactor menjadi arsitektur plugin modular untuk maintainability dan scalability.

### Keunggulan

- **Modular** - Setiap fitur dipisah ke file plugin terpisah
- **Hot-Reload** - Tambah/hapus plugin tanpa restart bot
- **1,235+ Fitur** - Dari AI, RPG, Downloader, hingga Primbon
- **22 Kategori** - Organisasi fitur yang rapi dan terstruktur
- **Anti-Ban** - Session handling aman dengan pairing code
- **Multi-Platform** - Bisa jalan di VPS, RDP, Pterodactyl, Termux

---

## SPESIFIKASI MINIMUM

```
┌─────────────────────────────────────────────────┐
│            SPESIFIKASI MINIMUM                  │
├─────────────────────────────────────────────────┤
│  OS         : Ubuntu 20.04+ / Debian 11+       │
│  RAM        : 512 MB (minimum)                  │
│  RAM        : 1 GB (recommended)                 │
│  Storage    : 500 MB (bebas plugin)             │
│  Storage    : 2 GB (dengan sessions + media)    │
│  Node.js    : v18.0.0 atau lebih baru           │
│  npm        : v8.0.0 atau lebih baru           │
│  Internet   : Stabil (untuk Baileys WebSocket)  │
│  WhatsApp  : 1 device terhubung (MD protocol)  │
├─────────────────────────────────────────────────┤
│            RECOMMENDED                          │
├─────────────────────────────────────────────────┤
│  OS         : Ubuntu 22.04 LTS                 │
│  RAM        : 2 GB DDR4                         │
│  Storage    : 5 GB SSD                          │
│  Node.js    : v20.x LTS                         │
│  CPU        : 1 vCore (2+ untuk RPG heavy)     │
│  Internet   : 50 Mbps+ (untuk media download)   │
└─────────────────────────────────────────────────┘
```

### Supported Platform

| Platform | Status | Catatan |
|----------|--------|---------|
| VPS (Ubuntu/Debian) | Fully Supported | Recommended |
| Pterodactyl Panel | Fully Supported | Node.js egg |
| Termux (Android) | Supported | RAM terbatas |
| RDP (Windows) | Supported | Install Node.js manual |
| Docker | Supported | Dockerfile ready |

---

## STRUKTUR PROJECT

```
Alice-Multi-Device-Whatsapp-Bot/
├── index.js                    # Entry point - Baileys connection handler
├── handler.js                  # Plugin dispatcher & context builder
├── package.json                # Dependencies & scripts
├── .gitignore
├── README.md
├── AlicePlugins/               # 200 plugin files, 22 kategori
│   ├── ai/                     # 8 files - AI integrations
│   ├── anime/                  # 6 files - Anime info & reactions
│   ├── anonymous/              # 1 file  - Anonymous chat
│   ├── asupan/                 # 1 file  - Video asupan
│   ├── audio/                  # 4 files - Audio effects & music
│   ├── berita/                 # 22 files - News scraper
│   ├── converter/              # 13 files - Media converter
│   ├── cpanel/                 # 1 file  - Control panel
│   ├── downloader/             # 17 files - Media downloader
│   ├── ephoto/                 # 1 file  - EPhoto effect
│   ├── game/                   # 1 file  - Mini games
│   ├── group/                  # 13 files - Group management
│   ├── menu/                   # 1 file  - Menu display
│   ├── nsfw/                   # 1 file  - NSFW content
│   ├── other/                  # 1 file  - Misc commands
│   ├── owner/                  # 9 files  - Owner tools
│   ├── primbon/                # 40 files - Primbon & Islamic
│   ├── pushkontak/             # 1 file  - Push contacts
│   ├── rpg/                    # 13 files - RPG system
│   ├── search/                 # 37 files - Search tools
│   └── stalk/                  # 9 files  - Social media stalker
├── sessions/                   # Baileys auth session (auto-generated)
└── config.js                   # Bot configuration (not in repo)
```

---

## TOTAL FITUR & KATEGORI

```
┌──────────────────────────────────────────────────────────┐
│           STATISTIK FITUR ALICE MD                       │
├──────────────────────────────────────────────────────────┤
│  Total Plugin Files  : 200                               │
│  Total Fitur         : 1,235                             │
│  Total Command Alias : 1,268                             │
│  Total Kategori      : 22                                │
└──────────────────────────────────────────────────────────┘
```

### Breakdown per Kategori

| Kategori | Files | Fitur | Commands | Deskripsi |
|----------|-------|-------|----------|-----------|
| AI | 8 | 47 | 47 | ChatGPT, Claude, Gemini, DeepSeek, AI image, AI voice |
| Anime | 6 | 80 | 79 | Anime info, Genshin, Otakudesu, Komiku, Waifu/Neko |
| Anonymous | 1 | 37 | 36 | Anonymous chat, confesh, matching |
| Asupan | 1 | 36 | 36 | Video asupan dari berbagai sumber |
| Audio | 4 | 95 | 95 | Audio effects, music player, Spotify, voice changer |
| Berita | 22 | 24 | 82 | News scraper (CNN, Detik, Liputan6, Kontan, dll) |
| Converter | 13 | 75 | 63 | Sticker, ATTP, brat, emojimix, enhance, resize |
| CPanel | 1 | 23 | 23 | Bot control panel (self/public mode, onlygc, dll) |
| Downloader | 17 | 67 | 64 | TikTok, YouTube, Instagram, Facebook, Twitter, dll |
| EPhoto | 1 | 28 | 28 | EPhoto360 text effect |
| Game | 1 | 74 | 50 | Tebak gambar, tebak kata, math, dll |
| Group | 13 | 110 | 109 | Antilink, absen, warn, kick, group settings |
| Menu | 1 | 25 | 25 | Menu display untuk semua kategori |
| NSFW | 1 | 6 | 6 | NSFW content (owner/premium only) |
| Other | 1 | 155 | 137 | Misc commands (tools, text, fun, dll) |
| Owner | 9 | 131 | 135 | Owner tools, plugin management, case/ban, sewa, store |
| Primbon | 40 | 40 | 60 | Primbon jawa, Islamic, Al-Quran, hadist, doa |
| PushKontak | 1 | 6 | 6 | Push kontak untuk broadcast |
| RPG | 13 | 128 | 118 | RPG system (combat, crafting, economy, quests) |
| Search | 37 | 39 | 55 | Google image, Pinterest, meme, quotes, lirik, dll |
| Stalk | 9 | 9 | 14 | Social media stalker (IG, TT, GH, NPM, dll) |

---

## INSTALASI

### 1. Clone Repository

```bash
git clone https://github.com/itsmeeaizat/Alice-Multi-Device-Whatsapp-Bot.git
cd Alice-Multi-Device-Whatsapp-Bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Buat File Konfigurasi

Buat file `config.js` di root folder:

```javascript
module.exports = {
    botname: 'Alice MD',
    ownername: 'Aizat',
    ownerNumber: ['628xxx@s.whatsapp.net'],
    channel: 'https://whatsapp.com/channel/xxx',
    prefix: '.',
    sessionName: 'alice-session',
    autoread: false,
    autorecord: false,
    available: false,
    // API Keys
    github_ai_token: '',   // GitHub AI token untuk GPT-4.1
    api_key_xtreme: '',    // API key untuk ephoto360
    // Database
    mongodb_uri: '',       // MongoDB connection URI (optional)
};
```

### 4. Konfigurasi Environment Variables

Buat file `.env`:

```env
# GitHub AI Token (untuk fitur GPT-4.1)
GITHUB_AI_TOKEN=ghp_xxxxxxxxxxxxxxxx

# API Keys lainnya
XTREME_API_KEY=xxxxxxxx
MONGODB_URI=mongodb://localhost:27017/alice
```

---

## MENJALANKAN BOT

### Mode Standalone

```bash
node index.js
```

### Mode PM2 (Recommended untuk VPS)

```bash
# Install PM2
npm install -g pm2

# Start bot
pm2 start index.js --name alice-md

# Save process list
pm2 save

# Auto-restart on reboot
pm2 startup
```

### Mode Screen/Tmux

```bash
screen -S alice
node index.js
# Ctrl+A+D untuk detach
# screen -r alice untuk reattach
```

---

## DEPLOY KE PTERODACTYL PANEL

### 1. Buat Server

- Egg: **Node.js Generic**
- Runtime: **Node.js 18+**
- Memory: **1024 MB minimum**
- Disk: **2048 MB minimum**

### 2. Upload Files

Upload semua file ke panel (via SFTP atau file manager):
- `index.js`
- `handler.js`
- `package.json`
- `AlicePlugins/` folder
- `config.js`

### 3. Install Dependencies

Di console panel:
```bash
npm install
```

### 4. Start

```bash
node index.js
```

### 5. Pairing

Saat bot start, akan muncul pairing code:
```
┌───────────────────────────┐
│   ALICE MD - PAIRING CODE  │
├───────────────────────────┤
│                           │
│   Code: XXXX-XXXX-XXXX    │
│                           │
│   Ketik di WhatsApp:      │
│   > Link device           │
│   > Paste code            │
│                           │
└───────────────────────────┘
```

---

## SISTEM PLUGIN

### Struktur Plugin

Setiap plugin file mengikuti format ini:

```javascript
// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA

module.exports = {
    command: ['contoh', 'cmd1'],           // Command aliases
    operate: async (ctx) => {
        const { Alice, m, text, q, prefix, command, reply, 
                isOwner, isPrem, isGroup, isBotAdmins, isAdmins,
                axios, fetch, fs, crypto, db, ... } = ctx;
        
        // Logic here
        await reply('Hello!');
    }
};
```

### Context Variables yang Tersedia

| Variable | Type | Deskripsi |
|----------|------|-----------|
| `Alice` | object | Baileys socket instance |
| `m` | object | Message object |
| `text` | string | Pesan tanpa prefix/command |
| `q` | string | Sama dengan text |
| `prefix` | string | Prefix bot (default: `.`) |
| `command` | string | Command yang dipanggil |
| `reply` | function | Reply ke pesan |
| `isOwner` | boolean | Apakah sender adalah owner |
| `isPrem` | boolean | Apakah sender adalah premium user |
| `isGroup` | boolean | Apakah dari grup |
| `isBotAdmins` | boolean | Apakah bot admin di grup |
| `isAdmins` | boolean | Apakah sender admin di grup |
| `fs` | object | File system |
| `axios` | function | HTTP client |
| `fetch` | function | Fetch API |
| `crypto` | object | Crypto module |
| `db` | object | Database |
| `moment` | function | Moment.js |
| `args` | array | Arguments array |
| `pushname` | string | Nama sender |
| `botname` | string | Nama bot |
| `ownername` | string | Nama owner |
| `alice` | string | Prefix variable |

### Menambahkan Plugin Baru

1. Buat file `.js` di folder kategori yang sesuai
2. Ikuti format struktur plugin di atas
3. Bot akan auto-load plugin saat startup
4. Untuk hot-reload, gunakan command `.reload` (owner only)

---

## COMMAND LIST

### AI Commands (47 fitur)
```
.ai <text>          - AI general chat
.gpt <text>         - OpenAI GPT-4.1
.claude <text>      - Claude AI
.gemini <text>      - Google Gemini
.deepseek <text>    - DeepSeek AI
.aiimg <prompt>     - AI image generation
.aivoice <text>     - AI text-to-speech
```

### Downloader (67 fitur)
```
.ytmp3 <url>        - YouTube to MP3
.ytmp4 <url>        - YouTube to MP4
.tiktok <url>       - TikTok download
.ig <url>           - Instagram download
.fb <url>           - Facebook download
.twitter <url>      - Twitter/X download
.mediafire <url>    - Mediafire download
.pinterest <query>  - Pinterest search/download
.soundcloud <url>   - SoundCloud download
.capcut <url>       - CapCut template download
```

### Group Management (110 fitur)
```
.antilink on/off    - Anti link detection
.absen start        - Mulai absensi
.warn @user         - Warn member
.kick @user         - Kick member
.tagall             - Tag semua member
.groupinfo          - Info grup lengkap
.setppgc            - Set profil grup
```

### RPG System (128 fitur)
```
.rpg register       - Daftar RPG
.rpg profile        - Lihat profil RPG
.rpg adventure      - Adventure/EXP
.rpg fight          - Combat
.rpg inventory      - Cek inventory
.rpg craft          - Crafting item
.rpg quest          - Quest list
.rpg guild          - Guild system
```

### Converter (75 fitur)
```
.sticker            - Buat sticker
.toimg              - Sticker to image
.attp <text>        - Animated text sticker
.brat <text>        - Brat sticker
.emojimix 😊+😭     - Mix emoji
.enhance            - Enhance image quality
.resize <size>      - Resize image
```

### Primbon (40 fitur)
```
.artinama <nama>    - Arti nama
.zodiac <zodiac>    - Zodiak harian
.shio <shio>        - Shio
.tafsirmimpi <mimpi>- Tafsir mimpi
.kisahnabi <nama>   - Kisah nabi
.asmaulhusna        - Asmaul Husna
```

### Owner Tools (131 fitur)
```
.setbot <type>      - Setting bot mode
.addcase @user      - Tambah case
.ban @user          - Ban user
.premium add @user  - Tambah premium
.sewa <link> <durasi>- Sewa bot
.store <type>       - Store setting
.upsw <text/img>    - Upload status
.reload             - Reload plugins
```

> Command list lengkap: gunakan `.menu` di bot untuk melihat semua command.

---

## ANTI-BAN PRACTICES

```
┌─────────────────────────────────────────────────┐
│            ANTI-BAN BEST PRACTICES               │
├─────────────────────────────────────────────────┤
│  1. Gunakan pairing code (bukan QR scan)        │
│  2. Jangan spam command terlalu cepat            │
│  3. Set delay antar broadcast                    │
│  4. Jangan kirim message ke nomor tidak dikenal  │
│  5. Gunakan self mode jika untuk personal use    │
│  6. Jangan join grup terlalu banyak sekaligus    │
│  7. Set auto-read dengan delay random            │
│  8. Hindari broadcast >50 msg per menit          │
│  9. Gunakan session yang sudah terverifikasi     │
│ 10. Restart bot tiap 24 jam untuk stabilitas     │
└─────────────────────────────────────────────────┘
```

---

## TROUBLESHOOTING

### Bot tidak connect ke WhatsApp
```bash
# Hapus session lama
rm -rf sessions/

# Restart bot
node index.js

# Gunakan pairing code baru
```

### Plugin tidak ter-load
```bash
# Cek syntax file
node -c AlicePlugins/kategori/file.js

# Pastikan format module.exports benar
# Restart bot
```

### Memory usage tinggi
```bash
# Cek memory
pm2 monit

# Set memory limit di PM2
pm2 start index.js --name alice-md --max-memory-restart 1G
```

### Command tidak respon
- Cek apakah plugin ter-load: `.menu`
- Cek apakah user di-ban: `.banlist`
- Cek apakah bot dalam self mode: `.setbot`
- Cek console log untuk error

---

## CREDITS

```
┌─────────────────────────────────────────────────┐
│              PROJECT CREDITS                     │
├─────────────────────────────────────────────────┤
│  Author      : Aizat                            │
│  Bot Name    : Alice Multi Device               │
│  Base Lib    : Baileys MD (WhatsApp Multi-Device)│
│  Language    : JavaScript (Node.js)             │
│  Architecture: Modular Plugin System            │
│  Origin      : Made in Indonesia                │
│  License     : MIT                              │
└─────────────────────────────────────────────────┘
```

### Acknowledgments

- [Baileys](https://github.com/WhiskeyConectors/Baileys) - WhatsApp Multi-Device library
- [Axios](https://github.com/axios/axios) - HTTP client
- [Cheerio](https://github.com/cheeriojs/cheerio) - HTML parser
- [Moment.js](https://momentjs.com/) - Date formatting

---

## LICENSE

MIT License - Free to use, modify, and distribute.

```
MIT License

Copyright (c) 2026 Aizat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

```
┌─────────────────────────────────────────────────┐
│  Alice Multi Device - WhatsApp Bot              │
│  Built with Baileys MD | By Aizat               │
│  Made in Indonesia                              │
└─────────────────────────────────────────────────┘
```

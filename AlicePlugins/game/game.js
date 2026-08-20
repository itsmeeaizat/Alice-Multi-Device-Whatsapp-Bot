// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['done', 'tunda', 'proses', 'memancing', 'status', 'out', 'leave2', 'iqc', 'koboy', 'catur', 'caturterima', 'caturtolak', 'caturpapan', 'caturlangkah', 'caturmenyerah', 'caturselesai', 'caturhelp', 'caturrank', 'caturstatus', 'caturnilai', 'caturlawan', 'caturgiliran', 'caturrematch', 'caturafk', 'caturwaktu', 'caturreset', 'caturskip', 'caturdraw', 'caturhapus', 'caturnext', 'caturboard', 'caturtimer', 'caturhistory', 'caturskorreset', 'caturanalisa', 'caturtop10', 'caturnotif', 'tebakld', 'tebak', 'susunkata', 'asahotak', 'dadu', 'patroli', 'suitbot', 'gaple', 'uno', 'wwpc', 'ww', 'werewolf', 'judi'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'done': {
if (isBan) return Xban()
await XReaction()
                   
                    let t = text.split(',');
                    if (t.length < 2) return reply(`*Format salah!\nPenggunaan:\n${AliceCmd} barang,jumlah,nominal\nExampel ${AliceCmd} panel,1,10000`);
                    const owned = `${global.owner}@s.whatsapp.net`
                    let barang = t[0];
                    let jumlah = t[1];
                    let nominal = t[2];
                    let don = (`
*TRANSAKSI BERHASIL*🏵️

📆 _*Date* : ${hariini}_
✨ _*Status* : Berhasil_

_• *Barang:* ${barang}_
_• *Jumlah:* ${jumlah}_
_• *Nominal:* Rp${nominal}_

Terima kasih telah order dan mempercayai 
Store Kami
Jangan lupa order lagi ya !!
`)
reply(don)
                }
                    break

case 'tunda': {
if (isBan) return Xban()
await XReaction()
                    
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const owned = `${global.owner}@s.whatsapp.net`
                    const text12 = `
*TRANSAKSI PENDING*🎗️

📆 _*Date* : ${hariini}_
✨ _*Status* : Pending_

Transaksi kamu masih dipending nih
Tunggu konfirmasi selanjutnya ya 
`
            reply(text12)
                }
                    break

case 'proses': {
if (isBan) return Xban()
await XReaction()
                    
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

                    const text12 = `
*TRANSAKSI DIPROSES*🎖️

📆 _*Date* : ${hariini}_
✨ _*Status* :  Proses_

Sekarang transaksi kamu sedang
diproses nihh
Mohon tunggu sebentar ya
`
            reply(text12)
                }
                    break

case 'memancing': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break

case 'status': {
  const fs = require('fs')
  const transPath = './AliceDatabase/transaksi.json'
  if (!fs.existsSync(transPath)) return reply('📂 Tidak ada transaksi aktif saat ini.')

  let transaksi = JSON.parse(fs.readFileSync(transPath))
  let data = transaksi[m.sender]

  if (!data) return reply('🚫 Kamu tidak memiliki transaksi aktif.')

  let info = `📋 *STATUS TRANSAKSI*\n\n`
  info += `📌 Jenis: *${data.jenis === 'buyprem' ? 'Premium' : 'Sewa Grup'}*\n`
  info += `🧾 Nominal: ${formatmoney(data.harga)}\n`
  info += `🕐 Durasi: *${data.durasi || '-'}*\n`
  if (data.link) info += `🔗 Link Grup: ${data.link}\n`
  info += `🔖 Ref ID: #${data.id}\n\n`
  info += `⏳ Status: *Menunggu pembayaran...*\n\n`
  info += `❗Ketik *.cancel* untuk membatalkan transaksi.`

  reply(info)
}
break
//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Gateway Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Owner Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
// install module

case 'out':
case 'leave2': {
if (!isOwner) return XRO()
let gcall = await Object.values(await Alice.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Contoh Cara Penggunaan :*\nKetik *out* Nomor Grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return reply("Grup tidak ditemukan")
let leav = Number(args[0]) - 1
await reply(`Berhasil Keluar Dari Grup :\n*${gcall[leav].subject}*`)
await Alice.groupLeave(`${gcall[leav].id}`)
}}
break

case 'iqc':

break;

case 'koboy': {
  const koboyHandler = require('./AliceSystem/AliceDatabase/Game/koboy.js');

  // Parsing args dan teks
  const teks = m.text || ''; // teks asli dari pesan
  const bagian = teks.trim().split(/\s+/); // pisah dengan spasi
  const args = bagian.slice(1); // hapus kata ".koboy"

  // Debug cek command & argumen
  console.log('[Alice.js] koboy command dipanggil!');
  console.log('[Alice.js] args:', args);

  if (typeof koboyHandler !== 'function') return reply('⚠️ Modul koboy tidak valid.');
  
  // Jalankan handler dengan parameter lengkap
  koboyHandler(m, command, args, reply, db);
  break;
}

case 'catur': {
if (!m.mentionedJid || m.mentionedJid.length === 0)
  return reply('❌ Tag pengguna untuk ditantang!\nContoh: *.catur @user*')

const lawan = m.mentionedJid[0]
if (lawan === sender) return reply('Kamu tidak bisa menantang dirimu sendiri.')

if (caturData[m.chat]) return reply('❌ Masih ada game di chat ini.')

  caturData[m.chat] = {
    player1: sender,
    player2: lawan,
    turn: 'white',
    board: papanAwal(),
    status: 'pending',
    winner: null
  }
  saveCatur()
  return reply(`♟️ Tantangan dikirim ke @${lawan.split('@')[0]}!\n\nBalas dengan *.caturterima* untuk main.\nGunakan *.caturhelp* untuk panduan lengkap.`, m.chat, { mentions: [lawan] })
}
break

case 'caturterima': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'pending') return reply('❌ Tidak ada tantangan aktif.')
  if (game.player2 !== sender) return reply('Kamu bukan yang ditantang.')

  game.status = 'ongoing'
  saveCatur()
  return reply(`♟️ Game dimulai!\nGiliran: *Putih* (${game.player1 == sender ? 'Kamu' : '@' + game.player1.split('@')[0]})\n\n${tampilkanPapan(game.board)}`, m.chat, { mentions: [game.player1, game.player2] })
}
break

case 'caturtolak': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'pending') return reply('❌ Tidak ada tantangan aktif.')
  if (game.player2 !== sender) return reply('Kamu bukan yang ditantang.')

  delete caturData[m.chat]
  saveCatur()
  return reply('❌ Tantangan ditolak.')
}
break

case 'caturpapan': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berjalan.')

  return reply(`♟️ Papan saat ini:\n\n${tampilkanPapan(game.board)}\nGiliran: *${game.turn === 'white' ? 'Putih' : 'Hitam'}*`)
}
break

case 'caturlangkah': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berjalan.')

  const [fromRaw, toRaw] = text.trim().split(" ")
  const from = fromRaw?.toLowerCase()
  const to = toRaw?.toLowerCase()
  if (!from || !to) return reply('Gunakan: *.caturlangkah e2 e4*')

  const col = { a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7 }
  const fx = 8 - parseInt(from[1]), fy = col[from[0]]
  const tx = 8 - parseInt(to[1]), ty = col[to[0]]

  const isWhite = game.turn === 'white'
  const currentPlayer = isWhite ? game.player1 : game.player2
  if (sender !== currentPlayer) return reply('⏳ Bukan giliranmu.')

  if (isNaN(fx) || isNaN(fy) || isNaN(tx) || isNaN(ty)) return reply('❌ Posisi tidak valid.')

  const piece = game.board[fx][fy]
  if (!piece) return reply('❌ Tidak ada bidak di posisi itu.')
  if (isWhite && !'♙♖♘♗♕♔'.includes(piece)) return reply('Itu bukan bidakmu.')
  if (!isWhite && !'♟♜♞♝♛♚'.includes(piece)) return reply('Itu bukan bidakmu.')

  game.board[tx][ty] = piece
  game.board[fx][fy] = ''
  game.turn = isWhite ? 'black' : 'white'
  saveCatur()

   // TIMER GILIRAN OTOMATIS (jika disetel)
  if (global.caturTimer && global.caturTimer[m.chat]) {
  const waktu = global.caturTimer[m.chat]
  clearTimeout(game.timeoutId)
  game.timeoutId = setTimeout(() => {
    let kalah = game.turn === 'white' ? game.player1 : game.player2
    let menang = game.turn === 'white' ? game.player2 : game.player1

    delete caturData[m.chat]
    saveCatur()

    const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
    skor[menang] = skor[menang] || { menang: 0, kalah: 0 }
    skor[kalah] = skor[kalah] || { menang: 0, kalah: 0 }
    skor[menang].menang++
    skor[kalah].kalah++
    fs.writeFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json', JSON.stringify(skor, null, 2))

    Alice.sendMessage(m.chat, {
      text: `⏰ Waktu habis! @${kalah.split('@')[0]} dianggap kalah.\n🏆 Pemenang: @${menang.split('@')[0]}`,
      mentions: [menang, kalah]
    })
  }, waktu * 1000)
}

  return reply(`✅ Langkah berhasil!\n\n${tampilkanPapan(game.board)}\nGiliran: *${game.turn === 'white' ? 'Putih' : 'Hitam'}*`)
}
break

case 'caturmenyerah': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berjalan.')

  if (sender !== game.player1 && sender !== game.player2) return reply('Kamu bukan pemain di game ini.')

// Update skor
const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
skor[pemenang] = skor[pemenang] || { menang: 0, kalah: 0 }
skor[sender] = skor[sender] || { menang: 0, kalah: 0 }
skor[pemenang].menang++
skor[sender].kalah++
fs.writeFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json', JSON.stringify(skor, null, 2))

  const pemenang = sender === game.player1 ? game.player2 : game.player1
  game.status = 'selesai'
  game.winner = pemenang
  saveCatur()

  return reply(`🏳️ Pemain menyerah. Pemenang: @${pemenang.split('@')[0]}`, m.chat, { mentions: [pemenang] })
}
break

case 'caturselesai': {
  if (!isOwner) return reply('❌ Hanya owner yang bisa paksa menyelesaikan.')
  if (caturData[m.chat]) {
    delete caturData[m.chat]
    saveCatur()
    return reply('✅ Game dipaksa selesai.')
  } else return reply('Tidak ada game aktif.')
}
break

case 'caturhelp': {
  let teks = `┌───⌈ *📖 ᴘᴀɴᴅᴜᴀɴ ᴄᴀᴛᴜʀ ᴍᴜʟᴛɪᴘʟᴀʏᴇʀ* ⌋
│
│ ♟️ Bermain catur langsung di grup bersama temanmu!
│ Tersedia sistem papan, giliran, skor, ranking, dan kontrol penuh.
│
│ 🎮 *Cara Memulai:*
│ ➤ .catur@tag
│     Tantang pemain lain untuk memulai permainan.
│
│ ⚙️ *Kontrol Permainan:*
│ ➤ .caturstatus
│     Cek giliran dan papan saat ini.
│ ➤ .caturskip
│     Lewati giliran jika perlu.
│ ➤ .caturdraw
│     Ajukan atau terima hasil seri.
│ ➤ .caturmenyerah
│     Menyerah dan mengakhiri permainan.
│ ➤ .caturhapus
│     (Admin) Hapus pertandingan aktif.
│
│ 📊 *Skor & Ranking:*
│ ➤ .caturnilai
│     Statistik menang, kalah, dan seri kamu.
│ ➤ .caturrank
│     Lihat posisi kamu dalam peringkat.
│ ➤ .caturtop10
│     Top 10 pemain catur terbaik.
│ ➤ .caturskorreset
│     (Owner) Reset skor pemain tertentu.
│
│ ♟️ *Papan & Analisa:*
│ ➤ .caturnext
│     Siapa giliran sekarang?
│ ➤ .caturboard
│     Lihat papan dalam bentuk ASCII.
│ ➤ .caturhistory
│     Lihat langkah-langkah permainan.
│ ➤ .caturanalisa
│     Langkah terakhir yang dilakukan.
│
│ ⏱️ *Timer & Notifikasi:*
│ ➤ .caturtimer
│     Aktifkan timer giliran otomatis (3 menit).
│ ➤ .caturnotif
│     Notif jika pemain diam > 3 menit.
│
│ 📌 *Tambahan:*
│ ➤ .caturhelp
│     Tampilkan menu panduan ini.
│
│ 🔢 *Total fitur catur saat ini:* 17 fitur lengkap
│ 📅 Versi: Multiplayer Turn-based | ASCII Mode
│ 📈 Dukungan: Skor, Ranking, Timer, Analisa, Admin tools
│
└─────⌈ ♟️ Jadilah legenda catur grupmu! ⌋`
  reply(teks)
}
break

case 'caturrank': {
  const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
  if (!Object.keys(skor).length) return reply('❌ Belum ada pemain yang memiliki skor.')

  const urut = Object.entries(skor)
    .sort((a, b) => b[1].menang - a[1].menang)
    .slice(0, 10)
    .map(([id, data], i) => `*${i + 1}.* @${id.split('@')[0]} — 🏆 ${data.menang} menang`)

  return reply(`🏁 *RANKING CATUR TOP 10*\n\n${urut.join('\n')}`, m.chat, {
    mentions: urut.map(v => v.match(/@(\d+)/)[0] + '@s.whatsapp.net')
  })
}
break

case 'caturstatus': {
  const game = caturData[m.chat]
  if (!game) return reply('❌ Tidak ada game catur di chat ini.')

  const status = {
    pending: '🕐 Menunggu lawan menerima...',
    ongoing: '♟️ Sedang berlangsung',
    selesai: `🏁 Selesai — Pemenang: @${game.winner?.split('@')[0] || 'Tidak diketahui'}`
  }[game.status] || '❓ Tidak diketahui'

  const p1 = '@' + game.player1.split('@')[0]
  const p2 = '@' + game.player2.split('@')[0]

  return reply(`♟️ *Status Game Catur:*\n• Pemain 1: ${p1}\n• Pemain 2: ${p2}\n• Status: ${status}`, m.chat, {
    mentions: [game.player1, game.player2, game.winner]
  })
}
break

case 'caturnilai': {
  const skor = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/Game/caturSkor.json'))
  const data = skor[sender] || { menang: 0, kalah: 0 }

  return reply(`📊 *Skor Catur Kamu*\n\n🏆 Menang : ${data.menang}\n💀 Kalah : ${data.kalah}`)
}
break

case 'caturlawan': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game berlangsung.')

  const lawan = sender === game.player1 ? game.player2 : (sender === game.player2 ? game.player1 : null)
  if (!lawan) return reply('Kamu bukan bagian dari game ini.')

  return reply(`🎯 Lawan kamu adalah: @${lawan.split('@')[0]}`, m.chat, {
    mentions: [lawan]
  })
}
break

case 'caturgiliran': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game yang sedang berjalan.')

  const isWhite = game.turn === 'white'
  const giliran = isWhite ? game.player1 : game.player2

  return reply(`⏳ Sekarang giliran: @${giliran.split('@')[0]} (${isWhite ? 'Putih' : 'Hitam'})`, m.chat, {
    mentions: [giliran]
  })
}
break

case 'caturrematch': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'selesai') return reply('❌ Tidak ada game selesai untuk rematch.')

  if (sender !== game.player1 && sender !== game.player2)
    return reply('Kamu bukan bagian dari game sebelumnya.')

  const lawan = sender === game.player1 ? game.player2 : game.player1
  caturData[m.chat] = {
    player1: sender,
    player2: lawan,
    turn: 'white',
    board: papanAwal(),
    status: 'pending',
    winner: null
  }
  saveCatur()

  return reply(`🔁 Rematch dikirim ke @${lawan.split('@')[0]}!\nKetik *caturterima* untuk bermain ulang.`, m.chat, {
    mentions: [lawan]
  })
}
break

case 'caturafk': {
  const game = caturData[m.chat]
  if (!game || game.status !== 'ongoing') return reply('❌ Tidak ada game yang sedang berjalan.')

  if (!isOwner && sender !== game.player1 && sender !== game.player2)
    return reply('Hanya pemain atau owner yang bisa membatalkan.')

  delete caturData[m.chat]
  saveCatur()
  return reply('⚠️ Game dibatalkan karena lawan dianggap AFK.')
}
break

case 'caturwaktu': {
  if (!isOwner) return reply('❌ Hanya owner yang bisa mengatur waktu giliran.')
  let waktu = parseInt(text)
  if (isNaN(waktu) || waktu < 10) return reply('Gunakan contoh: *caturwaktu 60* (detik minimal 10)')

  if (!global.caturTimer) global.caturTimer = {}
  global.caturTimer[m.chat] = waktu
  return reply(`⏱️ Batas waktu giliran disetel ke ${waktu} detik.`)
}
break

case 'caturreset': {
  if (!isOwner) return reply('❌ Hanya owner yang bisa reset data.')

  fs.writeFileSync('./database/catur.json', '{}')
  fs.writeFileSync('./database/caturSkor.json', '{}')
  if (global.caturTimer) global.caturTimer[m.chat] = undefined

  return reply('✅ Semua data catur berhasil direset.')
}
break

case 'caturskip': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan aktif.")
  let game = dbCatur[m.chat]
  if (game.turn === 'white' && m.sender !== game.playerWhite ||
      game.turn === 'black' && m.sender !== game.playerBlack)
    return reply("❌ Bukan giliranmu.")

  game.turn = game.turn === 'white' ? 'black' : 'white'
  reply(`⏩ *${m.pushName}* melewatkan giliran.
🔁 Giliran selanjutnya: *${game.turn === 'white' ? game.nameWhite : game.nameBlack}*`)
  fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
}
break

case 'caturdraw': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  if (!game.drawRequest) {
    game.drawRequest = m.sender
    reply(`🤝 *${m.pushName}* mengajukan hasil seri.  
Jika lawan setuju, ketik *caturdraw* juga untuk menyetujui.`)
  } else if (game.drawRequest !== m.sender) {
    let lawan = game.drawRequest
    reply(`🤝 Pertandingan diakhiri dengan hasil *Seri*.`, m.chat, { mentions: [m.sender, lawan] })
    if (!dbSkor[m.sender]) dbSkor[m.sender] = { menang: 0, kalah: 0, seri: 0 }
    if (!dbSkor[lawan]) dbSkor[lawan] = { menang: 0, kalah: 0, seri: 0 }
    dbSkor[m.sender].seri++
    dbSkor[lawan].seri++
    delete dbCatur[m.chat]
    fs.writeFileSync(caturSkorPath, JSON.stringify(dbSkor, null, 2))
    fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
  } else {
    reply("❌ Kamu sudah mengajukan permintaan seri, tunggu respon lawan.")
  }
}
break

case 'caturhapus': {
  if (!isOwner && !isAdmins) return reply("❌ Hanya admin atau owner yang bisa menghapus pertandingan.")
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan untuk dihapus.")
  delete dbCatur[m.chat]
  fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
  reply("✅ Pertandingan catur dihapus.")
}
break

case 'caturnext': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let giliran = game.turn === 'white' ? game.nameWhite : game.nameBlack
  reply(`🔁 Sekarang giliran: *${giliran}*`)
}
break

case 'caturboard': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let papan = game.board.ascii()
  reply(`♟️ Papan Catur Saat Ini:\n\n${papan}`)
}
break

case 'caturtimer': {
  if (!isOwner && !isAdmins) return reply("❌ Hanya owner/admin yang bisa menyalakan timer.")
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")

  global.caturTimer = global.caturTimer || {}
  if (global.caturTimer[m.chat]) {
    clearTimeout(global.caturTimer[m.chat])
    delete global.caturTimer[m.chat]
    return reply("⏱️ Timer giliran *dimatikan*.")
  } else {
    global.caturTimer[m.chat] = setTimeout(() => {
      let game = dbCatur[m.chat]
      if (!game) return
      let kalah = game.turn === 'white' ? game.playerWhite : game.playerBlack
      let menang = game.turn === 'white' ? game.playerBlack : game.playerWhite
      reply(`⏰ Waktu habis!\n@${kalah.split('@')[0]} kalah karena tidak bergerak.\n🎉 Pemenang: @${menang.split('@')[0]}`, m.chat, { mentions: [kalah, menang] })
      if (!dbSkor[menang]) dbSkor[menang] = { menang: 0, kalah: 0, seri: 0 }
      if (!dbSkor[kalah]) dbSkor[kalah] = { menang: 0, kalah: 0, seri: 0 }
      dbSkor[menang].menang++
      dbSkor[kalah].kalah++
      delete dbCatur[m.chat]
      fs.writeFileSync(caturPath, JSON.stringify(dbCatur, null, 2))
      fs.writeFileSync(caturSkorPath, JSON.stringify(dbSkor, null, 2))
    }, 3 * 60 * 1000) // 3 menit
    reply("⏱️ Timer giliran *dinyalakan* (3 menit per giliran).")
  }
}
break

case 'caturhistory': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let moves = game.board.history()
  if (moves.length === 0) return reply("📜 Belum ada langkah yang dilakukan.")
  reply(`📜 Riwayat Langkah:\n${moves.map((m, i) => `${i + 1}. ${m}`).join('\n')}`)
}
break

case 'caturskorreset': {
  if (!isOwner) return reply("❌ Hanya owner yang bisa reset skor.")
  let target = m.mentionedJid?.[0] || m.sender
  if (!dbSkor[target]) return reply("❌ Pengguna belum punya skor.")
  delete dbSkor[target]
  fs.writeFileSync(caturSkorPath, JSON.stringify(dbSkor, null, 2))
  reply(`✅ Skor catur @${target.split('@')[0]} telah di-reset.`, m.chat, { mentions: [target] })
}
break

case 'caturanalisa': {
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")
  let game = dbCatur[m.chat]
  let langkah = game.board.history()
  if (langkah.length === 0) return reply("📜 Belum ada langkah yang dilakukan.")
  let last = langkah[langkah.length - 1]
  reply(`📊 Langkah terakhir: *${last}*`)
}
break

case 'caturtop10': {
  if (Object.keys(dbSkor).length === 0) return reply('❌ Belum ada skor.')

  let top = Object.entries(dbSkor).map(([jid, skor]) => {
    return {
      jid,
      poin: (skor.menang || 0) * 3 + (skor.seri || 0),
      menang: skor.menang,
      seri: skor.seri,
      kalah: skor.kalah
    }
  }).sort((a, b) => b.poin - a.poin).slice(0, 10)

  let teks = `🏆 *Top 10 Pemain Catur*\n\n`
  top.forEach((p, i) => {
    teks += `${i + 1}. @${p.jid.split('@')[0]} | ${p.poin} pts (W:${p.menang}, D:${p.seri}, L:${p.kalah})\n`
  })
  reply(teks, m.chat, { mentions: top.map(x => x.jid) })
}
break

case 'caturnotif': {
  if (!isOwner && !isAdmins) return reply("❌ Hanya owner/admin yang bisa aktifkan notif.")
  if (!dbCatur[m.chat]) return reply("❌ Tidak ada pertandingan.")

  global.caturTimer = global.caturTimer || {}
  if (global.caturTimer[m.chat]) {
    clearTimeout(global.caturTimer[m.chat])
    delete global.caturTimer[m.chat]
    return reply("🔕 Notifikasi diam *dimatikan*.")
  }

  let game = dbCatur[m.chat]
  global.caturTimer[m.chat] = setTimeout(() => {
    let sekarang = game.turn === 'white' ? game.playerWhite : game.playerBlack
    Alice.sendMessage(m.chat, {
      text: `⏳ @${sekarang.split('@')[0]}, giliranmu belum dimainkan selama 3 menit.`,
      mentions: [sekarang]
    })
  }, 3 * 60 * 1000)

  reply("🔔 Notifikasi diam *dinyalakan* (giliran tidak dimainkan >3 menit).")
}
break
// Catur Features End

case 'tebakld': {
  let leaderboard = loadLeaderboard();

  // Ubah jadi array dan urutkan berdasar score desc
  let sorted = Object.entries(leaderboard)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Top 10

  if (sorted.length === 0) return reply('📊 Leaderboard masih kosong.');

  let teks = '📊 *Leaderboard Tebak-Tebakan*\n\n';
  let rank = 1;
  for (let [userId, score] of sorted) {
    teks += `${rank}. @${userId.split('@')[0]} - ${score} poin\n`;
    rank++;
  }

  return reply(teks, { mentions: sorted.map(([u]) => u) });
}
break;

case 'tebak': {
  try {
    const quizPath = './AliceSystem/AliceDatabase/Game/Alice-TebakGame.json';
    if (!fs.existsSync(quizPath)) return reply('⚠️ File .json tidak ditemukan.');

    const data = JSON.parse(fs.readFileSync(quizPath));

    // kumpulkan semua kategori otomatis dari json
    const kategoriUnik = [...new Set(data.map(item => item.kategori.toLowerCase()))];

    const kategori = args[0]?.toLowerCase();
    if (!kategori) {
      return reply(
        `📚 Gunakan: .tebak [kategori]\n` +
        `Contoh: .tebak lagu\n\n` +
        `Kategori yang tersedia:\n` +
        `${kategoriUnik.filter(k => !['logo','karakter'].includes(k)).join(', ')}`
      );
    }

    // blokir kategori logo & karakter
    if (['logo', 'karakter'].includes(kategori)) {
      return reply(`❌ Kategori *${kategori}* telah dinonaktifkan.`);
    }

    if (!kategoriUnik.includes(kategori)) {
      return reply(
        `❌ Kategori "${kategori}" tidak ditemukan.\n` +
        `Kategori yang tersedia: ${kategoriUnik.filter(k => !['logo','karakter'].includes(k)).join(', ')}`
      );
    }

    // ambil soal sesuai kategori
    const soalKategori = data.filter(item => item.kategori.toLowerCase() === kategori);
    const soal = soalKategori[Math.floor(Math.random() * soalKategori.length)];

    if (!global.tebakGame) global.tebakGame = {};

    global.tebakGame[m.sender] = {
      jawaban: soal.jawaban,
      soal: soal.soal,
      petunjuk: soal.petunjuk || 'Petunjuk tidak tersedia',
      gambar: soal.gambar || null
    };

    if (soal.gambar) {
      return Alice.sendMessage(
        m.chat,
        {
          image: { url: soal.gambar },
          caption:
`🧠 Tebak kategori *${kategori}*
${soal.soal}

💡 Petunjuk: ${soal.petunjuk}`
        }, { quoted: m }
      );
    }

    return reply(
`🧠 Tebak kategori *${kategori}* dari petunjuk ini:

${soal.soal}
💡 Petunjuk: ${soal.petunjuk}`
    );

  } catch (err) {
    console.log(err);
    reply("❌ Terjadi kesalahan saat memproses permainan.");
  }
}
break;

case 'susunkata': {
  try {
    const pathFile = './AliceSystem/AliceDatabase/Game/Alice-SusunKata.json';
    if (!fs.existsSync(pathFile)) return reply('⚠️ File *Alice-SusunKata.json* tidak ditemukan.');

    const data = JSON.parse(fs.readFileSync(pathFile));

    if (!Array.isArray(data) || data.length === 0) {
      return reply('⚠️ Bank soal susun kata masih kosong.');
    }

    // CEK KALO USER MASIH PUNYA SOAL YANG BELUM DIJAWAB
    if (!global.susunKata) global.susunKata = {};
    if (global.susunKata[m.sender]) {
      return reply(
`❗ Kamu masih punya soal *Susun Kata* yang belum dijawab.

Ketik jawabanmu dulu atau ketik *.nyerah* untuk menyerah.`
      );
    }

    // AMBIL KATA RANDOM
    const item = data[Math.floor(Math.random() * data.length)];
    const kata = String(item.jawaban).toLowerCase().trim();

    if (!kata || kata.length < 3) {
      return reply('❌ Terjadi kesalahan pada soal. (kata terlalu pendek)');
    }

    // FUNGSI ACak HURUF
    const shuffle = (str) => str.split('').sort(() => Math.random() - 0.5).join('');

    let acak = shuffle(kata);
    // JANGAN SAMPAI HASIL ACAKAN SAMA DENGAN KATA ASLI
    let limit = 0;
    while (acak === kata && limit < 5) {
      acak = shuffle(kata);
      limit++;
    }

    // SIMPAN SESI GAME UNTUK USER
    global.susunKata[m.sender] = {
      jawaban: kata,
      mulai: Date.now()
      // bisa kak tambahkan: hadiah, nyawa, dsb.
    };

    return reply(
`🔤 *GAME SUSUN KATA*

Acak huruf: *${acak}*

❓ Susun huruf di atas menjadi kata yang benar!
Ketik jawabanmu langsung di chat.

Ketik *.nyerah* kalau mau lihat jawabannya.`
    );

  } catch (e) {
    console.log(e);
    return reply('❌ Terjadi kesalahan pada permainan *Susun Kata*.');
  }
}
break;

case 'asahotak': {
  try {
    const pathFile = './AliceSystem/AliceDatabase/Game/Alice-AsahOtak.json';
    if (!fs.existsSync(pathFile)) return reply('⚠️ File Asah Otak tidak ditemukan.');

    const data = JSON.parse(fs.readFileSync(pathFile));
    const soal = data[Math.floor(Math.random() * data.length)];

    if (!global.asahOtak) global.asahOtak = {};

    global.asahOtak[m.sender] = {
      soal: soal.soal,
      jawaban: soal.jawaban.toLowerCase()
    };

    return reply(
`🧠 *ASAH OTAK!*

Pertanyaan:
❓ ${soal.soal}

Ketik jawabanmu.
Jika kamu tidak tau ketik *.nyerah*`
    );

  } catch (err) {
    console.log(err);
    reply('❌ Terjadi kesalahan saat memulai asah otak.');
  }
}
break;

case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				try {
					await Alice.sendImageAsSticker(m.chat, media.url, m, { packname: packname, author: author, isAvatar: 1 })
				} catch (e) {
					let anu = await fetch(media.url)
					let una = await anu.buffer()
					await Alice.sendImageAsSticker(m.chat, una, m, { packname: packname, author: author, isAvatar: 1 })
				}
			}
			break

case 'patroli': {
if (!m.isGroup) return XRG()
if (isBan) return XRB()
await XReaction()
  const participants = (await Alice.groupMetadata(m.chat)).participants
  if (participants.length < 4) return reply('Minimal 4 member di grup untuk menjalankan game ini!')
  const memberIDs = participants
    .map(p => p.id)
    .filter(id => id !== Alice.user.jid)
  const shuffled = memberIDs.sort(() => Math.random() - 0.5)
  const polisi = shuffled[0]
  const pencuri = shuffled[1]
  const tahun = Math.floor(Math.random() * 3) + 1;
  const hasil = `🚨 *Patroli Berhasil, Maling Telah Ditemukan!!*\n\n` +
    `👮 Polisi: @${polisi.split('@')[0]}\n` +
    `🕵 Pencuri: @${pencuri.split('@')[0]}\n\n` +
    `!!Pencuri Ditangkap! Dan Dipenjara Selama ${tahun} tahun`

  Alice.sendMessage(m.chat, {
    text: hasil,
    mentions: [polisi, pencuri, tahun]
  }, { quoted: m })
}
break

case 'suitbot': {
if (!m.isGroup) return XRG()
if (isBan) return XRB()
await XReaction()
				const userChoice = text.toLowerCase();
				const choices = ['batu', 'gunting', 'kertas'];
				const botChoice = choices[Math.floor(Math.random() * choices.length)];
				if (!choices.includes(userChoice)) {
					return reply(`Pilih antara *batu*, *gunting*, atau *kertas* ya, Kak!\nContoh: ${AliceCmd} batu`);
				}
				let hasil = '';
				if (userChoice === botChoice) {
					hasil = `Kita Seri! kamu Pilih *${botChoice}* Dan aku juga pilih *${botChoice}*`;
				} else if (
					(userChoice === 'batu' && botChoice === 'gunting') ||
					(userChoice === 'gunting' && botChoice === 'kertas') ||
					(userChoice === 'kertas' && botChoice === 'batu')
				) {
					hasil = `😞 ${botname} Kalah, ${pushname} menang 👍\nAku pilih *${botChoice}*`;
				} else {
					hasil = `Yess, ${botname} menang! ${botname} pilih *${botChoice}*`;
				}
    reply(hasil);
}

break;

case 'gaple': {
    if (isBan) return XRB()
    await XReaction()
    if (!m.isGroup) return reply("❌ Perintah ini hanya bisa digunakan di grup.")

    // ===== Helper simpan data di db =====
    function readGapleGameData() {
        global.db = global.db || {}
        global.db.data = global.db.data || {}
        global.db.data.gaple = global.db.data.gaple || {}
        return global.db.data.gaple
    }
    function writeGapleGameData(games) {
        global.db = global.db || {}
        global.db.data = global.db.data || {}
        global.db.data.gaple = games
    }

    // ===== Helper permainan =====
    function createDominoDeck() {
        const deck = []
        for (let i = 0; i <= 6; i++) {
            for (let j = i; j <= 6; j++) deck.push([i, j])
        }
        return deck
    }
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[a[i], a[j]] = [a[j], a[i]]
        }
        return a
    }
    function getNextPlayer(game) {
        return (game.currentPlayer + 1) % game.players.length
    }
    function tryPlaceCard(table, card, side) {
        if (!table.length) { table.push([card[0], card[1]]); return true }
        const left = table[0][0]
        const right = table[table.length - 1][1]
        if (side === "left") {
            if (card[1] === left) { table.unshift([card[1], card[0]]); return true }
            if (card[0] === left) { table.unshift([card[0], card[1]]); return true }
            return false
        } else if (side === "right") {
            if (card[0] === right) { table.push([card[0], card[1]]); return true }
            if (card[1] === right) { table.push([card[1], card[0]]); return true }
            return false
        }
        return false
    }
    async function sendGapleStatus(chat) {
        const mejaText = game.table.length
            ? game.table.map(c => `[${c[0]}|${c[1]}]`).join(" - ")
            : "(kosong)"

        const handsText = game.players
            .map((p, i) => `${i}: @${p.id.split('@')[0]} (${p.hand.length} kartu)`)
            .join("\n")

        const giliranId = game.players[game.currentPlayer]?.id
        const giliranText = giliranId ? `@${giliranId.split('@')[0]}` : "-"

        const statusText =
            `🀄 *Permainan Gaple*\n\n` +
            `Meja: ${mejaText}\n` +
            `Giliran: ${giliranText}\n\n` +
            `📊 Jumlah kartu pemain:\n${handsText}`

        await Alice.sendMessage(chat, { 
            text: statusText,
            contextInfo: { mentionedJid: game.players.map(p => p.id) }
        })
    }

    // ===== Main logic =====
    const games = readGapleGameData()
    const args = text.split(" ")
    const command = args[0] || ""
    const sub = args.slice(1)

    if (!games[m.chat]) {
        games[m.chat] = {
            players: [],
            deck: createDominoDeck(),
            table: [],
            currentPlayer: 0,
            stopVotes: []
        }
        writeGapleGameData(games)
        return reply("🀄 Permainan Gaple dimulai! Ketik `gaple join` untuk bergabung.")
    }

    const game = games[m.chat]

    switch (command) {
        case "join": {
            if (game.players.find(p => p.id === m.sender)) {
                return reply("Kamu sudah bergabung ke permainan ini.")
            }
            game.players.push({ id: m.sender, hand: [] })
            writeGapleGameData(games)
            return reply(`✅ @${m.sender.split('@')[0]} bergabung ke permainan Gaple!`, null, { contextInfo: { mentionedJid: [m.sender] } })
        }

        case "start": {
            if (game.players.length < 2) {
                return reply("❌ Minimal 2 pemain untuk memulai permainan.")
            }
            game.deck = shuffle(createDominoDeck())

            // bagi 7 kartu & kirim ke private
            for (const p of game.players) {
                p.hand = []
                for (let i = 0; i < 7 && game.deck.length; i++) p.hand.push(game.deck.pop())
                const handText = p.hand.map((c, i) => `${i}: [${c[0]}|${c[1]}]`).join("\n") || "(kosong)"
                await Alice.sendMessage(String(p.id), { text: `🀱 *Kartu Awalmu* 🀱\n\n${handText}` })
            }

            // kartu awal di meja
            if (game.deck.length) game.table = [game.deck.pop()]
            game.currentPlayer = 0
            writeGapleGameData(games)
            return sendGapleStatus(m.chat)
        }

        case "info": {
            return reply(`
📘 *Panduan Bermain Gaple (Domino)*

1) Bergabung & Mulai
   • \`gaple join\` → ikut permainan
   • \`gaple start\` → mulai (minimal 2 pemain)

2) Lihat Kartu
   • \`gaple hand\` → kartu milikmu (dikirim via chat pribadi)

3) Main Kartu
   • \`gaple play <nomor_kartu> <left/right>\`
   • Contoh: \`gaple play 2 left\`
   • Kartu hanya bisa ditaruh bila salah satu angkanya sama dengan ujung kiri/kanan di meja.

4) Ambil Kartu
   • \`gaple draw\` → ambil kartu dari deck jika buntu (jika deck masih ada)

5) Lewati Giliran
   • \`gaple pass\` → lewati giliran jika tidak bisa jalan

6) Pemenang
   • Pemain pertama yang habis kartunya adalah pemenang 🎉

7) Hentikan Permainan
   • \`gaple stop\` → hentikan permainan (butuh persetujuan semua pemain atau admin)
`.trim())
        }

        case "hand": {
            const pl = game.players.find(p => p.id === m.sender)
            if (!pl) return reply("❌ Kamu belum bergabung ke permainan.")
            const handText = pl.hand.map((c, i) => `${i}: [${c[0]}|${c[1]}]`).join("\n") || "(kosong)"
            await Alice.sendMessage(String(m.sender), { text: `🀱 *Kartu Milikmu* 🀱\n\n${handText}` }, { quoted: m })
            return reply(`📩 @${m.sender.split('@')[0]} sudah menerima daftar kartunya di chat pribadi.`, null, { contextInfo: { mentionedJid: [m.sender] } })
        }

        case "play": {
            const pl = game.players[game.currentPlayer]
            if (!pl || pl.id !== m.sender) return reply("❌ Sekarang bukan giliranmu!")

            const idx = parseInt(sub[0], 10)
            const side = (sub[1] || "").toLowerCase()
            if (isNaN(idx) || idx < 0 || idx >= pl.hand.length) return reply("❌ Nomor kartu tidak valid.")
            if (!["left", "right"].includes(side)) return reply("❌ Pilih sisi: left/right.")

            const card = pl.hand[idx]
            const placed = tryPlaceCard(game.table, card, side)
            if (!placed) return reply("❌ Kartu itu tidak cocok dengan ujung meja.")

            pl.hand.splice(idx, 1) // buang kartu

            if (pl.hand.length === 0) {
                delete games[m.chat]
                writeGapleGameData(games)
                return reply(`🎉 @${m.sender.split('@')[0]} MENANG permainan Gaple!`, null, { contextInfo: { mentionedJid: [m.sender] } })
            }

            game.currentPlayer = getNextPlayer(game)
            writeGapleGameData(games)
            return sendGapleStatus(m.chat)
        }

        case "draw": {
            const pl = game.players[game.currentPlayer]
            if (!pl || pl.id !== m.sender) return reply("❌ Sekarang bukan giliranmu!")
            if (!game.deck.length) return reply("📦 Deck kosong, tidak bisa draw.")

            const newCard = game.deck.pop()
            pl.hand.push(newCard)
            reply(`📥 @${m.sender.split('@')[0]} mengambil kartu: [${newCard[0]}|${newCard[1]}]`, null, { contextInfo: { mentionedJid: [m.sender] } })

            game.currentPlayer = getNextPlayer(game)
            writeGapleGameData(games)
            return sendGapleStatus(m.chat)
        }

        case "pass": {
            const pl = game.players[game.currentPlayer]
            if (!pl || pl.id !== m.sender) return reply("❌ Sekarang bukan giliranmu!")
            game.currentPlayer = getNextPlayer(game)
            writeGapleGameData(games)
            return sendGapleStatus(m.chat)
        }

        case "stop": {
            const pl = game.players.find(p => p.id === m.sender)
            if (!pl) return reply("❌ Kamu belum bergabung ke permainan.")

            if (isAdmins || isOwner) {
                delete games[m.chat]
                writeGapleGameData(games)
                return reply("⏹ Permainan Gaple dihentikan oleh admin/owner.")
            }

            if (!game.stopVotes.includes(m.sender)) game.stopVotes.push(m.sender)
            if (game.stopVotes.length === game.players.length) {
                delete games[m.chat]
                writeGapleGameData(games)
                return reply("⏹ Permainan Gaple dihentikan dengan persetujuan semua pemain.")
            }
            writeGapleGameData(games)
            return reply(`📢 Permintaan stop diterima. Masih dibutuhkan ${game.players.length - game.stopVotes.length} pemain untuk setuju.`)
        }

        default:
            return reply("❓ Perintah tidak dikenali. Gunakan `gaple info` untuk melihat panduan.")
    }
}
break

case 'uno':
{
if (isBan) return XRB()
await XReaction()
    if (!m.isGroup) {
        return reply("Perintah ini hanya bisa digunakan di grup.");
    }

    const games = readUnoGameData();
    const args = text.split(' ');
    const command = args[0];
    const subCommand = args.slice(1).join(' ');

    if (!games[m.chat]) {
        games[m.chat] = {
            players: [],
            deck: createDeck(),
            discardPile: [],
            currentPlayer: 0,
            direction: 1,
            currentCard: null,
            drawStack: 0,
            blockCardPlayed: false,
            reverseCardPlayed: false,
            stopVotes: new Set(),
            awaitingColorChoice: false
        };
        writeUnoGameData(games);
        return reply("Permainan UNO dimulai! Ketik `uno join` untuk bergabung.");
    }

    const game = games[m.chat];

    switch (command) {
        case "join":
            if (game.players.find(player => player.id === m.sender)) {
                return reply("Kamu sudah bergabung ke permainan.");
            }
            game.players.push({ id: m.sender, hand: [] });
            writeUnoGameData(games);
            return reply("Kamu berhasil bergabung ke permainan UNO!");

        case "start":
            if (game.players.length < 2) {
                return reply("Minimal 2 pemain dibutuhkan untuk memulai permainan.");
            }
            game.deck = shuffle(game.deck);
            game.players.forEach(player => {
                for (let i = 0; i < 7; i++) {
                    player.hand.push(game.deck.pop());
                }
            });
            game.currentCard = game.deck.pop();
            game.discardPile.push(game.currentCard);
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "info":
            return reply(`
📘 Aturan & Cara Bermain UNO:

1. Bergabung ke permainan:
   - Gunakan \`uno join\` untuk bergabung.
   - Gunakan \`uno start\` untuk memulai (minimal 2 pemain).

2. Ambil kartu:
   - Gunakan \`uno draw\` untuk mengambil kartu dari deck. 
   - Jika ada kartu khusus yang memaksamu mengambil kartu, maka kamu akan menarik sesuai jumlah yang ditentukan.

3. Mainkan kartu:
   - Gunakan \`uno play <nomor_kartu>\` untuk menurunkan kartu. Kartu harus sesuai warna atau angka dengan kartu di discard pile, atau gunakan kartu hitam untuk ganti warna.
   - Kartu spesial:
     - \`12\`: Pemain berikutnya ambil 2 kartu & dilewati.
     - \`14\`: Pemain berikutnya ambil 4 kartu & dilewati.
     - \`10\`: Pemain berikutnya dilewati.
     - \`11\`: Arah giliran dibalik.
     - \`wild13\`: Pemain memilih warna baru.
     - \`wild14\`: Pemain berikutnya ambil 4 kartu & dilewati.

4. Lewati giliran:
   - Gunakan \`uno pass\` jika tidak bisa/tidak mau main kartu.

5. Lihat kartu sendiri:
   - Gunakan \`uno hand\` untuk melihat kartu milikmu.

6. Lihat gambar kartu:
   - Gunakan \`uno card <nomor_kartu>\` untuk melihat gambar kartu tertentu.

7. Akhir permainan:
   - Pemain pertama yang habis kartunya adalah pemenang.

8. Hentikan permainan:
   - Gunakan \`uno stop\` untuk meminta berhenti. Semua pemain harus setuju, atau admin/owner bisa langsung menghentikan.
`);

        case "stop":
            const player = game.players.find(p => p.id === m.sender);
            if (!player) {
                return reply("Kamu belum bergabung ke permainan.");
            }

            if (isAdmins || isOwner) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("Permainan UNO dihentikan oleh admin/owner.");
            }

            game.stopVotes.add(m.sender);
            if (game.stopVotes.size === game.players.length) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply("Permainan UNO dihentikan dengan persetujuan semua pemain.");
            }

            writeUnoGameData(games);
            return reply(`Permintaan berhenti diterima. Masih dibutuhkan ${game.players.length - game.stopVotes.size} pemain untuk setuju.`);

        case "hand":
            const playerHand = game.players.find(p => p.id === m.sender);
            if (!playerHand) {
                return reply("Kamu belum bergabung ke permainan.");
            }
            const hand = playerHand.hand.map((card, index) => `${index}: ${card.color} ${card.value}`).join("\n");
            const iniHandText = `*Permainan Uno ${botname}*\n\nKartu milikmu:\n${hand}`;
            await Alice.sendMessage(m.sender, { text: iniHandText }, { quoted: m });
            return reply('Kartu kamu sudah dikirim via chat pribadi!');

        case "card":
            const cardIndex = parseInt(subCommand);
            if (isNaN(cardIndex) || cardIndex < 0 || cardIndex >= game.players.find(p => p.id === m.sender).hand.length) {
                return reply("Nomor kartu tidak valid.");
            }
            const card = game.players.find(p => p.id === m.sender).hand[cardIndex];
            const cardImageUrl = getCardImageUrl(card);
            const cardText = `${card.color} ${card.value}`;
            await Alice.sendMessage(m.sender, { image: { url: cardImageUrl }, caption: cardText }, { quoted: m });
            return reply('Gambar kartu sudah dikirim via chat pribadi!');

        case "draw":
            const drawPlayer = game.players[game.currentPlayer];
            if (drawPlayer.id !== m.sender) {
                return reply("Sekarang bukan giliranmu!");
            }

            if (game.drawStack > 0) {
                for (let i = 0; i < game.drawStack; i++) {
                    if (game.deck.length === 0) {
                        game.deck = shuffle(game.discardPile);
                        game.discardPile = [];
                    }
                    drawPlayer.hand.push(game.deck.pop());
                }
                reply(`Kamu mengambil ${game.drawStack} kartu karena penalti.`);
                game.drawStack = 0;
            } else {
                if (game.deck.length === 0) {
                    game.deck = shuffle(game.discardPile);
                    game.discardPile = [];
                }
                const newCard = game.deck.pop();
                drawPlayer.hand.push(newCard);
                reply(`Kamu mengambil 1 kartu: ${newCard.color} ${newCard.value}`);
            }

            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "play":
            const currentPlayer = game.players[game.currentPlayer];
            if (currentPlayer.id !== m.sender) {
                return reply("Sekarang bukan giliranmu!");
            }

            const playCardIndex = parseInt(subCommand);
            if (isNaN(playCardIndex) || playCardIndex < 0 || playCardIndex >= currentPlayer.hand.length) {
                return reply("Nomor kartu tidak valid.");
            }

            const playCard = currentPlayer.hand[playCardIndex];
            if (!isValidPlay(game.currentCard, playCard)) {
                return reply("Kartu itu tidak bisa dimainkan.");
            }

            if (playCard.value === "12") {
                game.drawStack += 2;
            } else if (playCard.value === "wild14") {
                if (hasPlayableCard(currentPlayer, game.currentCard)) {
                    return reply("Kartu Wild +4 hanya bisa dimainkan jika tidak ada kartu lain yang cocok.");
                }
                game.drawStack += 4;
                game.currentCard.color = "black";
                game.awaitingColorChoice = true;
            } else if (playCard.value === "10") {
                game.currentPlayer = getNextPlayer(game);
            } else if (playCard.value === "11") {
                game.direction *= -1;
            }

            game.currentCard = playCard;
            game.discardPile.push(playCard);
            currentPlayer.hand.splice(playCardIndex, 1);

            if (currentPlayer.hand.length === 0) {
                delete games[m.chat];
                writeUnoGameData(games);
                return reply(`Pemain ${m.sender} menang!`);
            }

            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "pass":
            const passPlayer = game.players[game.currentPlayer];
            if (passPlayer.id !== m.sender) {
                return reply("Sekarang bukan giliranmu!");
            }
            game.currentPlayer = getNextPlayer(game);
            game.reverseCardPlayed = false;
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        case "color":
            if (!game.awaitingColorChoice || game.players[game.currentPlayer].id !== m.sender) {
                return reply("Tidak ada pilihan warna yang perlu dipilih saat ini.");
            }

            const chosenColor = subCommand.trim().toLowerCase();
            if (!["red", "yellow", "green", "blue"].includes(chosenColor)) {
                return reply("Warna tidak valid. Pilih salah satu: red, yellow, green, blue.");
            }

            game.currentCard.color = chosenColor;
            game.awaitingColorChoice = false;
            game.currentPlayer = getNextPlayer(game);
            writeUnoGameData(games);
            return sendGameStatus(m.chat);

        default:
            return reply("Perintah tidak dikenali. Gunakan `uno info` untuk melihat daftar perintah.");
    }

    function createDeck() {
        const colors = ["red", "yellow", "green", "blue"];
        const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        const deck = [];
        colors.forEach(color => {
            values.forEach(value => {
                deck.push({ color, value });
                if (value !== "1") deck.push({ color, value });
            });
        });
        ["wild13", "wild14"].forEach(value => {
            deck.push({ color: "black", value });
            deck.push({ color: "black", value });
        });
        return shuffle(deck);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function isValidPlay(currentCard, playCard) {
        return playCard.color === "black" || currentCard.color === playCard.color || currentCard.value === playCard.value;
    }

    function getNextPlayer(game) {
        const nextIndex = (game.currentPlayer + game.direction + game.players.length) % game.players.length;
        return nextIndex;
    }

    function hasPlayableCard(player, currentCard) {
        return player.hand.some(card => isValidPlay(currentCard, card));
    }

    function getCardImageUrl(card) {
        const baseUrl = "https://raw.githubusercontent.com/abhisheks008/UNO/main/images/";
        if (card.color === "black") {
            return `${baseUrl}${card.value}.png`;
        }
        return `${baseUrl}${card.color}${card.value}.png`;
    }

    async function sendGameStatus(chat) {
        const currentCardText = `Kartu saat ini: ${game.currentCard.color} ${game.currentCard.value}`;
        const currentCardImageUrl = getCardImageUrl(game.currentCard);
        const handsText = game.players.map((player, index) => `${index}: ${player.id} (${player.hand.length} kartu)`).join("\n");
        const iniGameStatusText = `*Permainan UNO*\n\n${currentCardText}\nGiliran: ${game.players[game.currentPlayer].id}\n\nJumlah kartu pemain:\n${handsText}`;
        
        await Alice.sendMessage(chat, { text: iniGameStatusText });
        await Alice.sendMessage(chat, { image: { url: currentCardImageUrl }, caption: `Kartu saat ini: ${game.currentCard.color} ${game.currentCard.value}` });
    }
}
break

case 'wwpc':

break;

case 'ww':

break;

case 'werewolf': {
  try {
    if (isBan) return XRB()
    await XReaction()

    const jimp = require("jimp")
    const resize = async (image, width, height) => {
      const read = await jimp.read(image)
      return await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    }

    // === Import fungsi game dari library
    const {
      emoji_role,
      sesi,
      playerOnGame,
      playerOnRoom,
      playerExit,
      dataPlayer,
      getPlayerById,
      getPlayerById2,
      killWerewolf,
      dreamySeer,
      sorcerer,
      protectGuardian,
      roleGenerator,
      addTimer,
      startGame,
      vote,
      clearAllVote,
      run,
      run_vote,
      run_malam,
      run_pagi
    } = require('./AliceLibray/werewolf.js')

    // === Thumbnail & fallback
    const thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg"
    const promoUrl = (typeof xtele === 'string' && xtele) || "https://example.com"

    // === Selalu pakai chatId string
    const sender = m.sender
    const chatId = (typeof m.chat === "string")
      ? m.chat
      : (m.key?.remoteJid || m.key?.participant || sender)

    Alice.werewolf = Alice.werewolf || {}
    const ww = Alice.werewolf
    const data = ww[chatId]
    const value = (args[0] || '').toLowerCase()
    const targetRaw = args[1]

    // Helper validasi angka target
    const mustNumber = (v) => {
      const n = parseInt(v, 10)
      if (Number.isNaN(n) || n <= 0) return null
      return n
    }

    // === [ CREATE ROOM ]
    if (value === "create") {
      if (ww[chatId]) return reply("Group masih dalam sesi permainan")
      if (playerOnGame(sender, ww)) return reply("Kamu masih dalam sesi game")

      ww[chatId] = {
        room: chatId,
        owner: sender,
        status: false,
        iswin: null,
        cooldown: 0,
        day: 0,
        time: "malem",
        player: [],
        dead: [],
        voting: false,
        seer: false,
        guardian: []
      }
      return reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung")
    }

    // === [ JOIN ]
    else if (value === "join") {
      if (!ww[chatId]) return reply("Belum ada sesi permainan")
      if (ww[chatId].status) return reply("Sesi permainan sudah dimulai")
      if (ww[chatId].player.length >= 15) return reply("Player penuh (maksimal 15)")
      if (playerOnRoom(sender, chatId, ww)) return reply("Kamu sudah join")
      if (playerOnGame(sender, ww)) return reply("Kamu masih dalam sesi lain")

      const pdata = {
        id: sender,
        number: ww[chatId].player.length + 1,
        sesi: chatId,
        status: false,
        role: false,
        effect: [],
        vote: 0,
        isdead: false,
        isvote: false
      }
      ww[chatId].player.push(pdata)

      let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`
      const mentions = []
      for (let i = 0; i < ww[chatId].player.length; i++) {
        const p = ww[chatId].player[i]
        text += `${p.number}) @${p.id.replace("@s.whatsapp.net", "")}\n`
        mentions.push(p.id)
      }
      text += "\nJumlah player minimal 5 dan maksimal 15"

      return Alice.sendMessage(chatId, {
        text: text.trim(),
        contextInfo: {
          externalAdreply: {
            title: "W E R E W O L F",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: await resize(thumb, 300, 175),
            sourceUrl: promoUrl,
            mediaUrl: thumb
          },
          mentionedJid: mentions
        }
      }, { quoted: m })
    }

    // === [ START GAME ]
    else if (value === "start") {
      if (!ww[chatId]) return reply("Belum ada sesi permainan")
      if (ww[chatId].player.length < 5) return reply("Minimal 5 pemain untuk mulai")
      if (!playerOnRoom(sender, chatId, ww)) return reply("Kamu belum join room")
      if (ww[chatId].status) return reply("Game sudah dimulai")
      if (ww[chatId].owner !== sender) return reply(`Hanya @${ww[chatId].owner.split("@")[0]} yang bisa start`)

      // Lanjutkan timer bila ada cooldown
      if ((ww[chatId].cooldown || 0) > 0) {
        clearAllVote(chatId, ww)
        addTimer(chatId, ww)
        if (ww[chatId].time === "voting") return await run_vote(Alice, chatId, ww)
        if (ww[chatId].time === "malem") return await run_malam(Alice, chatId, ww)
        if (ww[chatId].time === "pagi") return await run_pagi(Alice, chatId, ww)
      }

      // Mulai game baru
      roleGenerator(chatId, ww)
      addTimer(chatId, ww)
      startGame(chatId, ww)

      // === Kirim role ke private chat semua player
      for (let p of ww[chatId].player) {
        let teksRole = `*⌂ W E R E W O L F - ROLE*\n\nHalo @${p.id.split("@")[0]}, role kamu adalah *${p.role.toUpperCase()}* ${emoji_role(p.role)}\n\nJangan kasih tau siapapun!`
        await Alice.sendMessage(p.id, {
          text: teksRole,
          mentions: [p.id]
        })
      }

      // Info di group
      await Alice.sendMessage(chatId, {
        text: "*⌂ W E R E W O L F - G A M E*\n\nGame dimulai, cek chat pribadi untuk role!",
        contextInfo: {
          externalAdreply: {
            title: "W E R E W O L F",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: await resize(thumb, 300, 175),
            sourceUrl: promoUrl,
            mediaUrl: thumb
          },
          mentionedJid: ww[chatId].player.map(p => p.id)
        }
      })
      return await run(Alice, chatId, ww)
    }

    // === [ KILL ]
    else if (value === "kill") {
      if (!ww[chatId]) return reply("Belum ada sesi permainan")
      if (dataPlayer(sender, ww).role !== "werewolf") return reply("Hanya werewolf yang bisa kill")
      const n = mustNumber(targetRaw)
      if (!n) return reply("Format: *.ww kill <nomor>*")

      const byId = getPlayerById2(sender, n, ww)
      if (byId === false) return reply("Player tidak terdaftar")
      if (byId.db.isdead) return reply("Player sudah mati")
      if (byId.db.id === sender) return reply("Tidak bisa kill diri sendiri")

      reply("Berhasil membunuh player " + n).then(() => {
        dataPlayer(sender, ww).status = true
        killWerewolf(sender, n, ww)
      })
    }

    // === [ DREAMY SEER ]
    else if (value === "dreamy") {
      if (!ww[chatId]) return reply("Belum ada sesi permainan")
      if (dataPlayer(sender, ww).role !== "seer") return reply("Bukan role kamu")
      const n = mustNumber(targetRaw)
      if (!n) return reply("Format: *.ww dreamy <nomor>*")

      const byId = getPlayerById2(sender, n, ww)
      if (byId === false) return reply("Player tidak terdaftar")
      const result = dreamySeer(sender, n, ww)
      reply(`Identitas player ${n}: ${result}`).then(() => {
        dataPlayer(sender, ww).status = true
      })
    }

    // === [ DEFEND GUARDIAN ]
    else if (value === "deff") {
      if (!ww[chatId]) return reply("Belum ada sesi permainan")
      if (dataPlayer(sender, ww).role !== "guardian") return reply("Bukan role kamu")
      const n = mustNumber(targetRaw)
      if (!n) return reply("Format: *.ww deff <nomor>*")

      protectGuardian(sender, n, ww)
      reply(`Berhasil melindungi player ${n}`).then(() => {
        dataPlayer(sender, ww).status = true
      })
    }

    // === [ SORCERER ]
    else if (value === "sorcerer") {
      if (!ww[chatId]) return reply("Belum ada sesi permainan")
      if (dataPlayer(sender, ww).role !== "sorcerer") return reply("Bukan role kamu")
      const n = mustNumber(targetRaw)
      if (!n) return reply("Format: *.ww sorcerer <nomor>*")

      const result = sorcerer(sender, n, ww)
      reply(`Identitas player ${n}: ${result}`).then(() => {
        dataPlayer(sender, ww).status = true
      })
    }

    // === [ VOTE ]
    else if (value === "vote") {
      if (!ww[chatId]) return reply("Belum ada sesi permainan")
      if (ww[chatId].status === false) return reply("Game belum dimulai")
      const n = mustNumber(targetRaw)
      if (!n) return reply("Format: *.ww vote <nomor>*")

      vote(chatId, n, sender, ww)
      return reply("✅ Vote berhasil")
    }

    // === [ EXIT ROOM ]
    else if (value === "exit") {
      if (!ww[chatId]) return reply("Tidak ada sesi")
      if (ww[chatId].status) return reply("Game sudah dimulai, tidak bisa keluar")
      playerExit(chatId, sender, ww)
      return reply(`${sender.split("@")[0]} keluar dari permainan`)
    }

    // === [ DELETE ROOM ]
    else if (value === "delete") {
      if (!ww[chatId]) return reply("Tidak ada sesi")
      if (ww[chatId].owner !== sender) return reply(`Hanya owner room yang bisa hapus sesi`)
      delete ww[chatId]
      return reply("Sesi permainan dihapus")
    }

    // === [ PLAYER LIST ]
    else if (value === "player") {
      if (!ww[chatId]) return reply("Tidak ada sesi permainan")
      let text = "\n*⌂ W E R E W O L F - LIST PLAYER*\n\n"
      ww[chatId].player.forEach(p => {
        text += `(${p.number}) @${p.id.replace("@s.whatsapp.net", "")} ${p.isdead ? `☠️ ${p.role}` : ""}\n`
      })
      return Alice.sendMessage(chatId, {
        text,
        mentions: ww[chatId].player.map(p => p.id)
      })
    }

    // === [ HELP / DEFAULT ]
    else {
      let text = `\n*⌂ W E R E W O L F - G A M E*\n\nCommand:\n`
      text += ` • .ww create\n`
      text += ` • .ww join\n`
      text += ` • .ww start\n`
      text += ` • .ww exit\n`
      text += ` • .ww delete\n`
      text += ` • .ww player\n`
      text += ` • .ww kill <nomor>\n`
      text += ` • .ww dreamy <nomor>\n`
      text += ` • .ww deff <nomor>\n`
      text += ` • .ww sorcerer <nomor>\n`
      text += ` • .ww vote <nomor>\n`
      text += `\nGame dapat dimainkan oleh 5–15 orang.`
      return Alice.sendMessage(chatId, {
        text: text.trim(),
        contextInfo: {
          externalAdreply: {
            title: "W E R E W O L F",
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnail: await resize(thumb, 300, 175),
            sourceUrl: promoUrl,
            mediaUrl: thumb
          }
        }
      }, { quoted: m })
    }
  } catch (err) {
    console.error(err)
    return reply(`❌ Terjadi error di modul Werewolf.\nDetail: ${err?.message || err}`)
  }
}
break

case 'judi': {
if (isBan) return XRB()
await XReaction()
Alice.jbRooms = Alice.jbRooms || {};
  Alice.jbVotes = Alice.jbVotes || {};

  // Daftar klub yang tersedia
  const clubs = [
    "Real Madrid", "Manchester United", "Inter Milan", "Barcelona",
    "Liverpool", "Paris Saint-Germain", "Chelsea", "Juventus",
    "Borussia Dortmund", "Atletico Madrid", "RB Leipzig", "Porto",
    "Arsenal", "Shakhtar Donetsk", "Red Bull Salzburg", "AC Milan",
    "Braga", "PSV Eindhoven", "Lazio", "Red Star Belgrade", "FC Copenhagen"
  ];

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Fungsi untuk menghitung vote
  const countVotes = (votes) => {
    const voteCount = { "1": 0, "2": 0 };
    Object.values(votes).forEach(vote => {
      if (voteCount[vote] !== undefined) {
        voteCount[vote]++;
      }
    });
    return voteCount;
  };

  // Handle perintah tanpa argumen atau dengan argumen 'help'
  if (!args[0] || args[0] === "help") {
    const message = `*❏ JUDI BOLA⚽*

${emojipick}.judi create (buat room) 
${emojipick}.judi join (player join, taruhan 10)
${emojipick}.judi player (daftar pemain yang bergabung)
${emojipick}.judi mulai (mulai game)
${emojipick}.judi vote 1/2 (vote klub pilihan)
${emojipick}.judi delete (hapus sesi room game)

Buatkan sebuah permainan tebak pertandingan bola, contoh: 1 Braga vs 2 Lazio

Untuk pilihan, gunakan ${alice}jb vote 1 atau 2

Minimal player yang bergabung untuk memulai game adalah 2 pemain.

Taruhan: 10 Limit
Hadiah: 200 Limit`;
    await Alice.sendMessage(m.chat, {
      text: message,
      contextInfo: {
        externalAdreply: {
          title: botname,
          body: 'Ayo ikut dan menangkan hadiahnya!',
          thumbnailUrl: 'https://telegra.ph/file/3463760976052aeac5f21.jpg',
          sourceUrl: ``,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
    return;
  }

  // Logika berdasarkan argumen pertama
  switch (args[0].toLowerCase()) {
    case 'create':
if (isBan) return XRB()
await XReaction()
      // Logika untuk membuat room
      if (Alice.jbRooms[m.chat]) {
        return reply('Room sudah ada.');
      }
      Alice.jbRooms[m.chat] = {
        players: [],
        gameStarted: false,
        clubs: [],
        limit: 0 // Inisialisasi limit untuk taruhan
      };
      reply('Room berhasil dibuat. Pemain sekarang bisa bergabung.');
      break;

    case 'join':
if (isBan) return XRB()
await XReaction()
      // Logika agar pemain bergabung ke room
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (Alice.jbRooms[m.chat].gameStarted) {
        return reply('Game sudah dimulai. Tidak bisa bergabung sekarang.');
      }
      if (Alice.jbRooms[m.chat].players.find(p => p.id === m.sender)) {
        return reply('Anda sudah bergabung di room.');
      }
      const playerName = m.pushName || Alice.getName(m.sender);
      Alice.jbRooms[m.chat].players.push({ id: m.sender, name: playerName });
      Alice.jbRooms[m.chat].limit += 10; // Tambahkan taruhan ke Limit
      reply(`Anda berhasil bergabung di room. Anda telah memasang taruhan sebesar 10. Total taruhan: ${Alice.jbRooms[m.chat].limit}`);
      break;

    case 'player':
if (isBan) return XRB()
await XReaction()
      // Logika untuk daftar pemain yang bergabung
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      const players = Alice.jbRooms[m.chat].players;
      reply(`Pemain yang bergabung: \n${players.map(p => `${p.name} (${p.id})`).join('\n')}`);
      break;

    case 'mulai':
if (isBan) return XRB()
await XReaction()
      // Logika untuk memulai game
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (Alice.jbRooms[m.chat].players.length < 2) {
        return reply('Minimal 2 pemain untuk memulai game.');
      }
      shuffleArray(clubs);
      Alice.jbRooms[m.chat].clubs = [clubs[0], clubs[1]];
      Alice.jbRooms[m.chat].gameStarted = true;
      reply(`Game dimulai! Pertandingan: 1 ${clubs[0]} vs 2 ${clubs[1]}. Silakan vote klub pilihan Anda.`);
      break;

    case 'vote':
if (isBan) return XRB()
await XReaction()
      // Logika untuk vote
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }
      if (!Alice.jbRooms[m.chat].gameStarted) {
        return reply('Game belum dimulai. Gunakan .jb mulai untuk memulai game.');
      }
      if (!args[1] || !['1', '2'].includes(args[1])) {
        return reply('Pilihan tidak valid. Gunakan .jb vote 1 atau 2.');
      }
      const vote = args[1];
      const currentRoom = Alice.jbRooms[m.chat];
      const player = currentRoom.players.find(p => p.id === m.sender);
      if (!player) {
        return reply('Anda belum bergabung dalam room.');
      }
      Alice.jbVotes[m.sender] = vote;
      reply(`Anda memilih klub nomor ${vote}.`);

      // Cek apakah semua pemain sudah melakukan vote
      const voteCount = countVotes(Alice.jbVotes);
      if (Object.keys(Alice.jbVotes).length === currentRoom.players.length) {
        reply('Semua pemain telah vote. Pertandingan akan segera dimulai...');

        // Jeda 25 detik
        setTimeout(() => {
          reply('Pertandingan telah dimulai. Mohon tunggu sampai pertandingan selesai...');

          // Jeda untuk simulasi pertandingan
          setTimeout(() => {
            // Tentukan pemenang berdasarkan vote terbanyak
            const winnerVote = voteCount["1"] > voteCount["2"] ? "1" : "2";
            const winningClub = currentRoom.clubs[winnerVote - 1];
            const winners = currentRoom.players.filter(player => Alice.jbVotes[player.id] === winnerVote);

            reply(`Pertandingan telah selesai.\nPemenang adalah ${winningClub}.\nPemain yang memilih ${winningClub}:\n${winners.map(w => w.name).join('\n')}\n\nSelamat kepada para pemenang mendapatkan 200.`);            
    let users = global.db.data.users
    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[winningClub]) users[winningClub] = { limit: 0 }
    users[winningClub].limit += 200

            // Bersihkan room dan votes setelah pertandingan selesai
            delete Alice.jbRooms[m.chat];
            delete Alice.jbVotes[m.chat];
          }, 25000); // Jeda 25 detik untuk simulasi pertandingan
        }, 25000); // Jeda 25 detik sebelum pertandingan dimulai
      }
      break;

    case 'delete':
if (isBan) return XRB()
await XReaction()
      // Logika untuk menghapus room
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat.');
      }
      delete Alice.jbRooms[m.chat];
      delete Alice.jbVotes[m.chat];
      reply('Room telah dihapus.');
      break;

    default:
      reply('Perintah tidak dikenal. Gunakan .judi untuk melihat daftar perintah.');
  }
};
break
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['kicklog', 'clearkicklog'],
  operate: async (context) => {
    const {
      Alice, m, chatUpdate, store, body, budy, pushname, args, text, q, prefix,
      command, isCmd, isOwner, isPrem, isBan, isBotAdmins, isAdmins, isGroupOwner,
      isGroup, isPrivate, isPc, isMedia, isImage, isVideo, isSticker, isAudio,
      mime, quoted, reply, xy, XRO, XReaction, Xban, alice, AliceCmd, groupMetadata,
      groupName, participants, groupAdmins, groupOwner, sender, senderNumber,
      botNumber, mentionUser, content, numberQuery, froms, time, timee, timestamp,
      salam, tanggal2, hariini, stime, Styles, limituser, limitAbis, useLimit,
      registered, IsReg, isMute, isAfkOn, isXMEDIA, isBot, qmsg, readmore,
      prefixRegex, thePrefix, db, fs, axios, fetch, cheerio, crypto,
      XRG, XRA, XRB, XRPC, AntiLinkFacebook, AntiLinkTelegram, AntiToxic, AntiDewasa,
      ntilinkfb, ntilinktg, nttoxic, ntilinkdewasa, ntilinkmediafire, welcmm, wlcmm,
      mute, rpgDb, initRpgUser, saveRpg, contacts, changelogs, ownername
    } = context;

    switch (command) {
case 'kicklog': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins) return reply('❌ Hanya admin yang bisa mengatur');

  const fs = require('fs')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'

  if (!fs.existsSync(path)) return reply('📭 Tidak ada data kick ditemukan.')

  const kickLog = JSON.parse(fs.readFileSync(path))
  const data = kickLog[m.chat]

  if (!data || data.length === 0) return reply('📭 Tidak ada yang dikick di grup ini.')

  // Format teks log
  let teks = `📄 *LOG ANGGOTA YANG DIKELUARKAN:*\n`
  teks += `Grup: ${groupName}\nTotal: ${data.length} member\n`
  teks += `──────────────────────\n`

  for (let i = 0; i < data.length; i++) {
    let u = data[i]
    teks += `🧍 *${i + 1}.* ${u.nama}\n📱 @${u.id.split('@')[0]}\n🕒 ${u.waktu}\n\n`
  }

  // Kalau terlalu panjang (lebih dari 4000 karakter), kirim sebagai file txt
  if (teks.length > 4000) {
    const filePath = './tmp/kicklog.txt'
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp', { recursive: true })
    fs.writeFileSync(filePath, teks)
    await Alice.sendMessage(m.chat, {
      document: fs.readFileSync(filePath),
      fileName: 'kicklog.txt',
      mimetype: 'text/plain',
      caption: `📎 Kicklog disimpan sebagai file (panjang melebihi batas).`
    }, { quoted: m })
  } else {
    Alice.sendMessage(m.chat, {
      text: teks.trim(),
      mentions: data.map(v => v.id)
    }, { quoted: m })
  }
}


case 'clearkicklog': {
  if (!m.isGroup) return reply('❌ Hanya bisa digunakan di grup.')
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin grup atau owner bot.')

  const fs = require('fs')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'

  if (!fs.existsSync(path)) return reply('📭 Tidak ada file log kick.')

  let kickLog = JSON.parse(fs.readFileSync(path))

  if (!kickLog[m.chat]) return reply('✅ Tidak ada log kick tersimpan untuk grup ini.')

  delete kickLog[m.chat]
  fs.writeFileSync(path, JSON.stringify(kickLog, null, 2))

  reply('🧹 Log kick untuk grup ini berhasil dihapus.')
}

    }
  }
};

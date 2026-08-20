// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['npc', 'savepoint', 'map', 'treasure', 'puzzle', 'travel', 'whereami', 'rift'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'npc': {
  let npcList = {
    'penjaga': '⚔️ Penjaga: Dunia ini berbahaya... simpan koinmu di bank!',
    'penjual': '🛒 Penjual: Aku punya ramuan langka, coba *shop*!'
  }

  if (!text || !npcList[text.toLowerCase()])
    return reply(`NPC tidak ditemukan. Coba: penjaga, penjual`)

  reply(npcList[text.toLowerCase()])
  break
}

case 'savepoint': {
  initRpgUser(sender, pushname)
  rpgDb[sender].savePoint = Date.now()
  saveRpg()
  reply(`💾 Kamu menyentuh *Save Point*. Progresmu disimpan.`)
  break
}

case 'map': {
  let mapText = `
🗺️ *DUNIA RPG WHATSAPP*
• 🌲 Hutan Kabut
• ⛩️ Desa Hilang
• 🏰 Kastil Tua
• 🌋 Gunung Merapi
Gunakan: *travel lokasi*
`
  reply(mapText)
  break
}

case 'treasure': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (!user.inv.includes('kunci')) return reply(`🔐 Kamu butuh *kunci* untuk buka peti.`)

  user.inv = user.inv.filter(i => i !== 'kunci')
  user.inv.push('koin emas')
  saveRpg()
  reply(`🎉 Kamu membuka peti dan mendapatkan *koin emas*!`)
  break
}

case 'puzzle': {
  const teka = `❓ *TEKA-TEKI RPG*
Aku punya wajah tapi tak bisa melihat.
Aku punya tangan tapi tak bisa meraih.
Siapakah aku?`

  reply(teka)
  break
}

case 'travel': {
  initRpgUser(sender, pushname)
  const lokasi = ['hutan', 'desa', 'gunung', 'kuil']
  if (!text || !lokasi.includes(text.toLowerCase())) {
    return reply(`🌍 Lokasi tersedia: ${lokasi.join(', ')}`)
  }
  rpgDb[sender].location = text.toLowerCase()
  saveRpg()
  reply(`🧭 Kamu berpindah ke *${text}*.`)
  break
}

case 'whereami': {
  initRpgUser(sender, pushname)
  let loc = rpgDb[sender].location || 'tidak diketahui'
  reply(`📍 Kamu berada di: *${loc}*`)
  break
}

case 'rift': {
  let efek = ['mendapatkan ramuan langka', 'kehilangan 50 HP']
  let acak = efek[Math.floor(Math.random() * efek.length)]
  reply(`🌀 Kamu memasuki portal...\nEfek: ${acak}`)
  break
}
    }
  }
};

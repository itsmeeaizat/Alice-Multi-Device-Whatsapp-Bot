// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['rpgtop', 'profilerpg', 'roleplay', 'death', 'revive', 'class', 'stat', 'medal'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'rpgtop': {
  let list = Object.entries(rpgDb)
    .map(([id, u]) => ({ name: u.name, coin: u.coin }))
    .sort((a, b) => b.coin - a.coin)
    .slice(0, 10)
    .map((u, i) => `${i + 1}. ${u.name} - 💰 ${u.coin}`)
    .join('\n')

  reply(`🏆 *TOP 10 PEMAIN TERKAYA*\n\n${list}`)
  break
}

case 'profilerpg': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  
  let teks = `
╭───[ *🧍 PROFIL RPG* ]
│ 🎖️ Nama     : ${pushname}
│ 🆔 ID       : ${sender.split('@')[0]}
│ 🧪 Level    : ${user.level || 1}
│ ⚔️ Kelas    : ${user.class || 'Belum dipilih'}
│ 🌀 Elemen   : ${user.element || 'Netral'}
│ 🧠 Skill    : ${user.skill || 'Belum punya'}
│ ✨ Talent   : ${user.talent || 'Belum aktif'}
│ 📦 Pasif    : ${user.passive || 'Belum ada'}
│ 💫 Buff     : ${user.buff || '-'}
│ 🔥 Debuff   : ${user.debuff || '-'}

│ 💰 Coin     : ${user.coin || 0}
│ 🧾 EXP      : ${user.exp || 0}
│ 🎁 Limit    : ${user.limit || 0}
│ 🧤 Equip    : ${user.equip ? user.equip.join(', ') : 'Tidak ada'}
│ 🎒 Barang   : ${user.inv.length > 0 ? user.inv.join(', ') : 'Kosong'}

│ 📍 Lokasi   : ${user.location || 'Kota Awal'}
│ 🐴 Mount    : ${user.mount || 'Tidak ada'}
│ 🧿 Spirit   : ${user.spirit || 'Tidak aktif'}
│ 🧬 Status   : ${user.death ? 'Mati' : 'Hidup'}

│ 🏆 Medal    : ${user.medal || 0}
│ 📜 Prestige : ${user.prestige || 0}
╰───────────────`
  
  reply(teks)
  break
}

case 'roleplay': {
  initRpgUser(sender, pushname)
  if (!text) {
    reply(`Ketik teks RP-mu. Contoh: *roleplay aku memeluk naga yang terluka...*`)
    break
  }

  reply(`🎭 *${pushname} beraksi:*\n_${text}_`)
  break
}

case 'death': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.hp && user.hp <= 0) {
    reply(`☠️ Kamu sudah mati! Gunakan *revive* untuk bangkit.`)
    break
  }

  user.hp = 0
  user.coin = Math.floor(user.coin * 0.5)
  reply(`☠️ Kamu tewas...\nKoinmu berkurang jadi ${user.coin}. Gunakan *revive* untuk hidup kembali.`)
  saveRpg()
  break
}

case 'revive': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.hp > 0) return reply(`❤️ Kamu masih hidup.`)

  if (user.coin < 200) return reply(`💰 Butuh 200 koin untuk hidup kembali.`)

  user.coin -= 200
  user.hp = 100
  saveRpg()
  reply(`💉 Kamu bangkit kembali dengan 100 HP.`)
  break
}

case 'class': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.class) return reply(`🧝‍♂️ Kamu sudah memilih kelas: *${user.class}*`)
  if (!text) return reply(`Kelas tersedia: *knight*, *mage*, *archer*`)

  let pilihan = ['knight', 'mage', 'archer']
  if (!pilihan.includes(text.toLowerCase())) return reply(`Kelas tidak valid.`)

  user.class = text.toLowerCase()
  saveRpg()
  reply(`✅ Kamu kini seorang *${user.class}*!`)
  break
}

case 'stat': {
  initRpgUser(sender, pushname)
  let u = rpgDb[sender]
  reply(`📊 *STAT KARAKTER*
💪 ATK: ${u.weapon ? 30 : 10}
🛡️ DEF: ${u.armor ? 25 : 10}
⚡ SPD: ${u.class === 'archer' ? 20 : 10}
`)
  break
}

case 'medal': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.medal ||= []

  if (!user.medal.length) return reply(`🎖️ Kamu belum punya medali.`)

  reply(`🎖️ *MEDALI-MU:*\n${user.medal.map(m => `🏅 ${m}`).join('\n')}`)
  break
}
    }
  }
};

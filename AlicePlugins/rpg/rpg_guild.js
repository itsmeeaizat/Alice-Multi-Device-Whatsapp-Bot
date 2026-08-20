// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['guild', 'party', 'build', 'kingdom', 'research', 'invasion'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'guild': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  if (!text) {
    reply(`🏰 Guild: ${user.guild || 'Tidak tergabung'}\nKetik *guild buat nama* atau *guild join nama*`)
    break
  }

  const [aksi, ...nama] = text.split(' ')
  const guildName = nama.join(' ')

  if (aksi === 'buat') {
    user.guild = guildName
    saveRpg()
    reply(`🏰 Kamu membuat guild *${guildName}*`)
    break
  }

  if (aksi === 'join') {
    user.guild = guildName
    saveRpg()
    reply(`🤝 Kamu bergabung ke guild *${guildName}*`)
    break
  }

  reply(`Format salah. Ketik *guild buat/join nama*`)
  break
}

case 'party': {
  initRpgUser(sender, pushname)
  global.partyList = global.partyList || {}

  if (!text) {
    let party = global.partyList[sender] || []
    let daftar = party.map((id, i) => `${i + 1}. ${rpgDb[id]?.name || 'Tidak dikenal'}`).join('\n') || 'Belum ada anggota.'
    reply(`👥 *PARTY-MU:*\n${daftar}`)
    break
  }

  if (m.quoted) {
    let target = m.quoted.sender
    initRpgUser(target)
    global.partyList[sender] ||= []
    if (!global.partyList[sender].includes(target)) {
      global.partyList[sender].push(target)
      reply(`✅ ${rpgDb[target].name} telah ditambahkan ke party-mu.`)
    } else {
      reply(`⚠️ Player sudah ada di party.`)
    }
    break
  }

  reply(`reply ke player yang ingin kamu ajak ke party.`)
  break
}

case 'build': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.build) return reply(`🏠 Kamu sudah punya markas: *${user.build}*`)

  user.coin -= 500
  user.build = 'markas kayu'
  saveRpg()
  reply(`🧱 Kamu membangun *markas kayu*. (+rest, +safezone)`)
  break
}

case 'kingdom': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.kingdom) return reply(`👑 Kerajaanmu: *${user.kingdom}*`)

  if (!text) return reply(`Ketik: *kingdom nama_kerajaanmu*`)
  user.kingdom = text
  saveRpg()
  reply(`🏯 Kamu mendirikan kerajaan *${text}*!`)
  break
}

case 'research': {
  initRpgUser(sender, pushname)
  let skill = rpgDb[sender].skill || 'tidak ada'
  rpgDb[sender].skill = skill + '+'
  saveRpg()
  reply(`🔬 Skill *${skill}* meningkat!`)
  break
}

case 'invasion': {
  reply(`⚔️ Kamu memulai invasi ke wilayah musuh! Gunakan *duel* untuk menyerang target.`)
  break
}
    }
  }
};

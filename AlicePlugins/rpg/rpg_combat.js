// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['duel', 'boss', 'bossfight', 'defend', 'trap', 'curse', 'ward', 'huntboss', 'dragonraid', 'aim', 'fortify', 'scout', 'huntwild', 'trapwild', 'arena', 'bet', 'hunt'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'duel': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let targetId = m.quoted ? m.quoted.sender : text?.split('@')[1]?.trim()?.replace(/[^0-9]/g, '')

  if (!targetId) {
    reply(`reply chat musuhmu atau ketik nomor target (tanpa +62). Contoh: *duel 81234567890*`)
    break
  }

  targetId = targetId.includes('@s.whatsapp.net') ? targetId : targetId + '@s.whatsapp.net'
  initRpgUser(targetId)

  let target = rpgDb[targetId]
  if (targetId === sender) {
    reply(`⚔️ Kamu tidak bisa duel dengan dirimu sendiri.`)
    break
  }

  // Hitungan dasar damage
  let weaponBonus = {
    pedang: 20,
    kapak: 25,
    panah: 15
  }
  let armorBonus = {
    armor: 15,
    perisai: 20,
    jubah: 10
  }

  let userPower = 50 + (weaponBonus[user.weapon] || 0)
  let targetPower = 50 + (weaponBonus[target.weapon] || 0)

  let userDefense = (armorBonus[user.armor] || 0)
  let targetDefense = (armorBonus[target.armor] || 0)

  let userTotal = userPower - targetDefense + Math.floor(Math.random() * 30)
  let targetTotal = targetPower - userDefense + Math.floor(Math.random() * 30)

  let winner, loser
  if (userTotal > targetTotal) {
    winner = user
    loser = target
    user.exp += 100
    user.coin += 150
    target.exp += 25
    target.coin = Math.max(0, target.coin - 100)
  } else if (targetTotal > userTotal) {
    winner = target
    loser = user
    target.exp += 100
    target.coin += 150
    user.exp += 25
    user.coin = Math.max(0, user.coin - 100)
  } else {
    reply(`⚔️ Duel antara kamu dan ${target.name} berakhir seri!`)
    break
  }

  saveRpg()

  reply(`⚔️ *DUEL HASIL*\n\n🏆 Pemenang: ${winner.name}\n💀 Kalah: ${loser.name}\n\n🎖️ +100 EXP | +150 Koin untuk Pemenang\n💸 -100 Koin untuk yang kalah`)
  break
}

case 'boss': {
  initRpgUser(sender, pushname)
  let bossHp = 100 + Math.floor(Math.random() * 100)
  let dmg = 30 + Math.floor(Math.random() * 40)

  reply(`👹 *KAMU MENANTANG BOSS!*\n\nBoss HP: ${bossHp}\nKamu serang dengan kekuatan ${dmg}...`)

  if (dmg >= bossHp) {
    rpgDb[sender].coin += 500
    rpgDb[sender].exp += 300
    saveRpg()
    reply(`🏆 Boss dikalahkan!\n+500 💰\n+300 ⭐ EXP`)
  } else {
    reply(`😵 Boss terlalu kuat! Kamu gagal.`)
  }

  break
}

case 'bossfight': {
  global.bossHp = global.bossHp || 500
  let dmg = 100 + Math.floor(Math.random() * 100)
  global.bossHp -= dmg
  if (global.bossHp <= 0) {
    global.bossHp = 0
    reply(`👑 Boss dikalahkan! Semua player +500 EXP`)
    for (let id in rpgDb) rpgDb[id].exp += 500
    saveRpg()
  } else {
    reply(`⚔️ Kamu menyerang boss dan memberi ${dmg} DMG.\nSisa HP Boss: ${global.bossHp}`)
  }
  break
}

case 'defend': {
  initRpgUser(sender, pushname)
  if (!rpgDb[sender].build) return reply(`🧱 Kamu belum punya markas.`)
  let bonus = 50
  rpgDb[sender].def += bonus
  saveRpg()
  reply(`🛡️ Kamu memperkuat markas. DEF bertambah ${bonus}`)
  break
}

case 'trap': {
  initRpgUser(sender, pushname)
  rpgDb[sender].trap = true
  saveRpg()
  reply(`🕳️ Kamu memasang jebakan di lokasi saat ini.`)
  break
}

case 'curse': {
  initRpgUser(sender, pushname)
  if (!m.quoted) return reply(`reply target untuk dikutuk.`)
  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].curse = true
  saveRpg()
  reply(`👻 Target telah dikutuk. Efek negatif akan aktif!`)
  break
}

case 'ward': {
  initRpgUser(sender, pushname)
  rpgDb[sender].ward = true
  saveRpg()
  reply(`🔆 Ward aktif. Lokasimu kini aman dari trap & curse.`)
  break
}

case 'huntboss': {
  initRpgUser(sender, pushname)
  let dmg = Math.floor(Math() * 80) + 70
  global.bossHuntHp = global.bossHuntHp || 1000
  global.bossHuntHp -= dmg

  if (global.bossHuntHp <= 0) {
    global.bossHuntHp = 0
    reply(`🏆 Boss dikalahkan! Semua pemburu +1000 EXP`)
    for (let id in rpgDb) rpgDb[id].exp += 1000
    saveRpg()
  } else {
    reply(`🎯 Kamu serang boss, DMG: ${dmg}. Sisa HP: ${global.bossHuntHp}`)
  }
  break
}

case 'dragonraid': {
  global.dragonHp = global.dragonHp || 3000
  let dmg = 150 + Math.floor(Math.random() * 100)
  global.dragonHp -= dmg

  if (global.dragonHp <= 0) {
    global.dragonHp = 0
    for (let id in rpgDb) rpgDb[id].exp += 2000
    saveRpg()
    reply(`🐉 RAID BERHASIL! Semua player +2000 EXP!`)
  } else {
    reply(`🐉 Kamu serang naga! DMG: ${dmg}, Sisa HP: ${global.dragonHp}`)
  }
  break
}

case 'aim': {
  if (!m.quoted) return reply('reply target musuh.')
  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].hp -= 50
  saveRpg()
  reply(`🎯 Kamu membidik dan menyerang ${target}, -50 HP!`)
  break
}

case 'fortify': {
  initRpgUser(sender, pushname)
  rpgDb[sender].def += 10
  saveRpg()
  reply(`🏗️ Markasmu diperkuat. DEF +10.`)
  break
}

case 'scout': {
  if (!m.quoted) return reply('reply target untuk diintai.')
  let target = m.quoted.sender
  initRpgUser(target)
  let loc = rpgDb[target].location || 'rahasia'
  reply(`🔍 Lokasi musuh: ${loc}`)
  break
}

case 'huntwild': {
  initRpgUser(sender, pushname)
  let hewan = ['rusa', 'kelinci', 'beruang']
  let target = hewan[Math.floor(Math.random() * hewan.length)]
  rpgDb[sender].inv.push(`daging ${target}`)
  saveRpg()
  reply(`🏹 Kamu berburu dan mendapatkan *daging ${target}*`)
  break
}

case 'trapwild': {
  initRpgUser(sender, pushname)
  rpgDb[sender].trapwild = true
  saveRpg()
  reply(`🪤 Jebakan hewan liar telah dipasang.`)
  break
}

case 'arena': {
  reply(`🏟️ *Arena PvP* terbuka!\nGunakan: duel @user\nPemenang mendapat 500 EXP!`)
  break
}

case 'bet': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Masukkan jumlah coin: contoh `bet 500`')
  let jumlah = parseInt(text)
  if (isNaN(jumlah)) return reply('Jumlah tidak valid.')
  rpgDb[sender].coin -= jumlah
  saveRpg()
  reply(`🎲 Kamu bertaruh ${jumlah} coin di arena.`)
  break
}

case 'hunt': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let now = Date.now()
  let cooldown = 1000 * 60 * 60
  let remaining = cooldown - (now - user.huntCooldown)

  if (remaining > 0) {
    reply(`🕒 Kamu butuh istirahat.\nTunggu *${msToTime(remaining)}* lagi.`)
    break
  }

  let drops = ['daging', 'kulit', 'tulang']
  let drop = drops[Math.floor(Math.random() * drops.length)]
  user.inv.push(drop)
  user.exp += 50
  user.huntCooldown = now
  saveRpg()

  reply(`🏹 Kamu berburu dan mendapat:\n+🎒 ${drop}\n+⭐ 50 exp`)
  break
}
    }
  }
};

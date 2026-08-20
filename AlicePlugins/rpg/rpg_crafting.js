// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['craft', 'upgrade', 'alchemy', 'mine', 'farm', 'cook', 'fish', 'forage', 'cookbook'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'craft': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  let bahan = ['tulang', 'kulit']
  let hasil = 'armor'

  // Cek bahan tersedia
  let bahanCukup = bahan.every(b => user.inv.includes(b))
  if (!bahanCukup) {
    reply(`🧪 Untuk membuat *${hasil}*, kamu butuh:\n- tulang\n- kulit`)
    break
  }

  // Buang bahan
  for (let b of bahan) {
    let i = user.inv.indexOf(b)
    if (i !== -1) user.inv.splice(i, 1)
  }

  user.inv.push(hasil)
  saveRpg()
  reply(`🧪 Kamu berhasil membuat *${hasil}*!`)
  break
}

case 'upgrade': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  if (!user.weapon && !user.armor) {
    reply(`🔧 Kamu belum memakai senjata atau armor apa pun.`)
    break
  }

  if (user.coin < 300) {
    reply(`🔧 Butuh 300 koin untuk upgrade. Uangmu kurang!`)
    break
  }

  user.coin -= 300
  user.weapon &&= `${user.weapon}+1`
  user.armor &&= `${user.armor}+1`
  saveRpg()

  reply(`🛠️ Upgrade berhasil!\nSenjatamu menjadi: ${user.weapon}\nArmoremu menjadi: ${user.armor}`)
  break
}

case 'alchemy': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let bahan1 = 'kulit'
  let bahan2 = 'tulang'

  if (!user.inv.includes(bahan1) || !user.inv.includes(bahan2))
    return reply(`Kamu butuh ${bahan1} & ${bahan2}`)

  user.inv = user.inv.filter(i => i !== bahan1 && i !== bahan2)
  user.inv.push('ramuan')
  saveRpg()
  reply(`🧪 Kamu mencampur item dan menciptakan *ramuan*!`)
  break
}

case 'mine': {
  initRpgUser(sender, pushname)
  let item = Math.random() < 0.5 ? 'batu' : 'emas'
  rpgDb[sender].inv.push(item)
  saveRpg()
  reply(`⛏️ Kamu menambang dan mendapatkan *${item}*!`)
  break
}

case 'farm': {
  initRpgUser(sender, pushname)
  let hasil = ['gandum', 'apel'][Math.floor(Math.random() * 2)]
  rpgDb[sender].inv.push(hasil)
  saveRpg()
  reply(`🌾 Kamu memanen *${hasil}*!`)
  break
}

case 'cook': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Masukkan nama resep: contoh `cook supikan`')
  rpgDb[sender].inv.push(`masakan:${text}`)
  saveRpg()
  reply(`🍲 Kamu memasak *${text}*!`)
  break
}

case 'fish': {
  initRpgUser(sender, pushname)
  let hasil = ['ikan biasa', 'ikan langka', 'ikan emas']
  let tangkapan = hasil[Math.floor(Math.random() * hasil.length)]
  rpgDb[sender].inv.push(tangkapan)
  saveRpg()
  reply(`🎣 Kamu memancing dan mendapatkan *${tangkapan}*!`)
  break
}

case 'forage': {
  initRpgUser(sender, pushname)
  let tanaman = ['herba', 'akar ajaib', 'jamur emas']
  let item = tanaman[Math.floor(Math.random() * tanaman.length)]
  rpgDb[sender].inv.push(item)
  saveRpg()
  reply(`🌿 Kamu menemukan *${item}*!`)
  break
}

case 'cookbook': {
  reply(`📖 *Resep Masakan:*\n- supikan = ikan + air\n- nasiherba = nasi + herba`)
  break
}
    }
  }
};

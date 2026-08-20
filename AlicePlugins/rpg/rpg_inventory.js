// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['equip', 'unequip', 'storage', 'stash', 'itemuse', 'loot', 'codex', 'mailbox', 'codexitem', 'stashall', 'recycle', 'inv'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'equip': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Ketik nama item yang ingin kamu equip.')

  let user = rpgDb[sender]
  let index = user.inventory.findIndex(item => item.nama.toLowerCase() === text.toLowerCase())

  if (index === -1) return reply('Item tidak ditemukan di inventory kamu.')

  let item = user.inventory[index]

  if (item.tipe === 'weapon') user.equip.weapon = item.nama
  else if (item.tipe === 'armor') user.equip.armor = item.nama
  else return reply('Item ini tidak bisa di-equip.')

  reply(`✅ ${item.nama} berhasil dipasang!`)
}

case 'unequip': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let removed = []

  if (user.weapon) {
    user.inv.push(user.weapon)
    removed.push(`🗡️ ${user.weapon}`)
    user.weapon = ''
  }
  if (user.armor) {
    user.inv.push(user.armor)
    removed.push(`🛡️ ${user.armor}`)
    user.armor = ''
  }

  if (!removed.length) {
    reply(`Kamu tidak sedang memakai senjata atau armor.`)
    break
  }

  saveRpg()
  reply(`🔧 Kamu melepas:\n${removed.join('\n')}`)
  break
}

case 'storage': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.storage ||= []

  if (!text) {
    reply(`Ketik nama item yang ingin disimpan. Contoh: *storage ramuan*`)
    break
  }

  let idx = user.inv.indexOf(text)
  if (idx === -1) {
    reply(`Item *${text}* tidak ada di inventory.`)
    break
  }

  user.inv.splice(idx, 1)
  user.storage.push(text)
  saveRpg()

  reply(`📦 Kamu menyimpan *${text}* ke dalam gudang.`)
  break
}

case 'stash': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.storage ||= []

  if (!text) {
    let list = user.storage.length ? user.storage.map(i => `- ${i}`).join('\n') : '📭 Kosong'
    reply(`📦 *STORAGE*\n${list}\n\nKetik *stash itemmu* untuk mengambil.`)
    break
  }

  let idx = user.storage.indexOf(text)
  if (idx === -1) {
    reply(`Item *${text}* tidak ada di storage.`)
    break
  }

  user.storage.splice(idx, 1)
  user.inv.push(text)
  saveRpg()

  reply(`📤 Kamu mengambil *${text}* dari storage.`)
  break
}

case 'itemuse': {
  initRpgUser(sender, pushname)
  if (!text) return reply(`Gunakan: *itemuse ramuan*`)

  let user = rpgDb[sender]
  let i = user.inv.indexOf(text)
  if (i === -1) return reply(`Item tidak ditemukan.`)

  if (text === 'ramuan') {
    user.hp = Math.min(user.hp + 50, 100)
    user.inv.splice(i, 1)
    saveRpg()
    reply(`🧪 Kamu meminum ramuan. HP-mu pulih jadi ${user.hp}`)
    break
  }

  reply(`Item *${text}* tidak bisa digunakan.`)
  break
}

case 'loot': {
  initRpgUser(sender, pushname)
  if (!m.quoted) return reply(`reply ke pesan musuh yang mati.`)
  let target = m.quoted.sender
  initRpgUser(target)

  let musuh = rpgDb[target]
  if (musuh.hp > 0) return reply(`🎯 Target masih hidup.`)

  if (musuh.inv.length === 0) return reply(`📭 Tidak ada barang untuk di-loot.`)

  let ambil = musuh.inv.splice(0, 1)[0]
  rpgDb[sender].inv.push(ambil)
  saveRpg()
  reply(`💰 Kamu berhasil mengambil *${ambil}* dari musuh.`)
  break
}

case 'codex': {
  reply(`📜 *KODEX ITEM RPG*

- 🗡️ pedang → +atk
- 🛡️ armor → +def
- 🧪 ramuan → pulih HP
- 💀 tulang + kulit → ramuan (via *alchemy*)`)
  break
}

case 'mailbox': {
  initRpgUser(sender, pushname)
  global.mailbox ||= {}
  global.mailbox[sender] ||= []

  let mails = global.mailbox[sender]
  if (!mails.length) return reply(`📭 Kotak suratmu kosong.`)

  let teks = `💌 *MAILBOX:*\n` + mails.map((m, i) => `${i + 1}. Dari: ${m.from}\n📦: ${m.item}`).join('\n\n')
  reply(teks)
  break
}

case 'codexitem': {
  reply(`📚 *KODEX ITEM:*\n- Ramuan: +50 HP\n- Kunci: Buka peti\n- Tulang: Bahan alchemy`)
  break
}

case 'stashall': {
  initRpgUser(sender, pushname)
  rpgDb[sender].storage = rpgDb[sender].storage || []
  rpgDb[sender].storage.push(...rpgDb[sender].inv)
  rpgDb[sender].inv = []
  saveRpg()
  reply(`📦 Semua item dipindah ke storage.`)
  break
}

case 'recycle': {
  initRpgUser(sender, pushname)
  if (!text || !rpgDb[sender].inv.includes(text)) return reply(`Item *${text}* tidak ada.`)
  rpgDb[sender].inv = rpgDb[sender].inv.filter(i => i !== text)
  rpgDb[sender].inv.push('fragmen')
  saveRpg()
  reply(`♻️ Item *${text}* dihancurkan jadi *fragmen*!`)
  break
}

case 'inv': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (!user.inventory || user.inventory.length === 0) return reply('🎒 Tas kamu kosong.')

  let teks = `🎒 *INVENTORY*

${user.inventory.map((item, i) => `• ${item.nama} x${item.jumlah}`).join('\n')}

Gunakan: *equip [item]* untuk memasang
Gunakan: *sell [item]* untuk menjual
`
  return reply(teks)
}
//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
// Rpg Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// AI Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'storage':

break;
    }
  }
};

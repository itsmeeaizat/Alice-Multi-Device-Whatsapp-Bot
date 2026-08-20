// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['storyquest', 'narrator', 'quest', 'questmap', 'lore', 'riddle', 'rumor', 'finaltrial'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'storyquest': {
  initRpgUser(sender)
  let user = rpgDb[sender]

  let story = user.story || 0
  let list = [
    '🌄 Kamu terbangun di desa terpencil...',
    '🧙 Seorang penyihir tua memanggilmu untuk misi suci...',
    '🐉 Kamu mendengar rumor tentang naga di gunung utara...',
    '🏰 Sebuah kerajaan membutuhkan pertolonganmu...',
    '☠️ Sebuah makhluk gelap mengintai dunia ini...'
  ]
  let teks = `📜 *STORY QUEST*\n\n${list[story % list.length]}\n\nKetik *nextquest* untuk lanjut cerita.`
  return reply(teks)
}

case 'narrator': {
  let teks = `🎙️ *Narator Berbisik...*\n\n“Langkahmu baru saja dimulai. Dunia menantimu.”\n\nGunakan *storyquest* untuk menjelajah kisahmu.`
  return reply(teks)
}

case 'quest': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  // Definisi misi quest harian (bisa kamu ganti tiap hari)
  const misi = {
    item: 'daging',
    jumlah: 2,
    reward: {
      coin: 300,
      exp: 200
    }
  }

  // Hitung jumlah item di inventory
  let count = user.inv.filter(i => i === misi.item).length

  // Sudah klaim hari ini?
  if (user.quest.dailyDone) {
    reply(`📜 Kamu sudah menyelesaikan quest harian hari ini!\nDatang lagi besok.`)
    break
  }

  // Belum cukup item
  if (count < misi.jumlah) {
    reply(`📜 *Misi Harian:*
🎯 Kumpulkan ${misi.jumlah} *${misi.item}*
🎁 Hadiah: ${misi.reward.coin} koin & ${misi.reward.exp} exp

Progress: ${count}/${misi.jumlah}
Gunakan: *quest* saat sudah lengkap.`)
    break
  }

  // Selesaikan quest
  let sisa = misi.jumlah
  user.inv = user.inv.filter(i => {
    if (i === misi.item && sisa > 0) {
      sisa--
      return false
    }
    return true
  })

  user.coin += misi.reward.coin
  user.exp += misi.reward.exp
  user.quest.dailyDone = true
  saveRpg()

  reply(`🎉 *Quest Harian Selesai!*
+${misi.reward.coin} 💰
+${misi.reward.exp} ⭐ EXP

Besok akan ada misi baru!`)
  break
}

case 'questmap': {
  reply(`🗺️ *PETA QUEST DUNIA ALICE*

1. 🌲 Hutan Gelap — Kalahkan 3 serigala
2. 🏰 Kastil Retak — Temukan Pedang Warisan
3. 🌋 Gunung Lava — Bertahan dari Boss Api

Ketik *quest [nama]* untuk memulai (belum aktif sistem interaksinya)`)
  break
}

case 'lore': {
  reply(`📖 *LORE DUNIA RPG*\nDi zaman kuno, 4 elemen bertarung merebut dunia...`)
  break
}

case 'riddle': {
  let soal = `❓ Aku punya kaki tapi tak bisa jalan. Siapa aku?`
  reply(soal)
  break
}

case 'rumor': {
  let r = ['💀 Penjaga Kuil telah bangkit!', '🎁 Event harta akan muncul besok!', '🌪️ Badai di Gunung Utara!']
  reply(`💬 *RUMOR TERSEBAR:*\n${r[Math.floor(Math.random() * r.length)]}`)
  break
}

case 'finaltrial': {
  initRpgUser(sender, pushname)
  if (rpgDb[sender].level < 99) return reply('🚫 Butuh level 99 untuk ikut ujian akhir.')
  reply(`🔥 Ujian Dimulai!\nLawan 3 boss secara beruntun...`)
  break
}
    }
  }
};

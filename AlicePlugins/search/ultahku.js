// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['ultahku'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'ultahku': {
  if (!text) return reply(`Kirim dengan format: .ultahku DD/MM/YYYY\nContoh: .ultahku 15/08/2005`)

  let args = text.split('/')
  if (args.length !== 3) {
    reply(`Format salah!\nGunakan: .ultahku DD/MM/YYYY`)
    break
  }

  let [day, month, year] = args.map(x => parseInt(x))
  if (!day || !month || !year) {
    reply(`Tanggal tidak valid. Gunakan format DD/MM/YYYY.`)
    break
  }

  // Hitung umur & hari menuju ultah berikutnya
  let now = new Date()
  let birthDate = new Date(year, month - 1, day)
  let age = now.getFullYear() - birthDate.getFullYear()

  let nextBirthday = new Date(now.getFullYear(), month - 1, day)
  if (now > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1)
    age++ // kalau sudah lewat ultah, umur bertambah
  }

  let diff = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24))

  reply(`📅 Tanggal lahir: *${day}/${month}/${year}*
🎂 Umur sekarang: *${age} tahun*
⏳ Ulang tahun berikutnya dalam: *${diff} hari*`)
}
break
    }
  }
};

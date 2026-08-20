// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['worldevent', 'zombieevent'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'worldevent': {
  let events = [
    '🌠 Hujan Meteor! Semua player +100 EXP!',
    '🌧️ Banjir besar! Semua bank player -20%',
    '🎁 Harta Karun Muncul! Gunakan *hunt* sekarang untuk dapat item langka!'
  ]
  let event = events[Math.floor(Math.random() * events.length)]

  for (let id in rpgDb) {
    if (event.includes('+100 EXP')) rpgDb[id].exp += 100
    if (event.includes('-20%')) rpgDb[id].bank = Math.floor(rpgDb[id].bank * 0.8)
  }

  saveRpg()
  reply(`🌍 *WORLD EVENT TERJADI!*\n\n${event}`)
  break
}

case 'zombieevent': {
  for (let id in rpgDb) {
    rpgDb[id].hp = Math.max(1, rpgDb[id].hp - 20)
  }
  saveRpg()
  reply(`🧟 Wabah zombie! Semua pemain kehilangan 20 HP!`)
  break
}
    }
  }
};

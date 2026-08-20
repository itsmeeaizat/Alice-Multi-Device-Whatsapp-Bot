// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['mount', 'summon', 'mountfeed'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'mount': {
  initRpgUser(sender, pushname)
  rpgDb[sender].mount = 'kuda'
  saveRpg()
  reply(`🐎 Kamu naik *kuda* dan bisa menjelajah lebih cepat!`)
  break
}

case 'summon': {
  initRpgUser(sender, pushname)
  rpgDb[sender].summon = 'golem batu'
  saveRpg()
  reply(`🧟 Kamu memanggil *golem batu* untuk bertarung bersamamu!`)
  break
}

case 'mountfeed': {
  initRpgUser(sender, pushname)
  reply(`🧲 Tungganganmu diberi makan dan merasa bahagia.`)
  break
}
    }
  }
};

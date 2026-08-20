// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['distortion'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'distortion': {
  let efek = ['🌪️ Kabut misterius mengelilingimu', '🪞 Cermin waktu retak', '🕳️ Lubang ke dimensi lain terbuka']
  let loot = ['potion', 'elixir', 'fabric', 'bone', 'gold']
  let dapat = loot[Math.floor(Math.random() * loot.length)]
  let jumlah = Math.floor(Math.random() * 3 + 1)

  initRpgUser(sender)
  let user = rpgDb[sender]
  for (let i = 0; i < jumlah; i++) user.inv.push(dapat)
  saveRpg()

  return reply(`${efek[Math.floor(Math.random() * efek.length)]}\n\n🎁 Kamu mendapat ${jumlah}x *${dapat}* dari zona distorsi.`)
}
    }
  }
};

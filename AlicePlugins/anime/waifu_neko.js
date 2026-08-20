// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['waifu'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'waifu': {
  if (isBan) return XRB()
await XReaction()
  try {
    let res = await axios.get('https://fastrestapis.fasturl.cloud/sfwnsfw/anime?type=sfw&tag=waifu', {
      responseType: 'arraybuffer'
    });

    Alice.sendMessage(m.chat, {
      image: Buffer.from(res.data),
      caption: 'Nih waifumu~\n\nBuat bacol enak 🤗'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('Lagi error bang, coba lagi nanti.');
  }
}
break
    }
  }
};

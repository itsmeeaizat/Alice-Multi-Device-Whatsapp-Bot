// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['qc'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'qc': {
if (isBan) return XRB()
await XReaction()
    const { quote } = require('./AliceLibray/quote.js');
    const axios = require('axios')
    let text;

    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return reply("Input teks atau reply teks yang ingin di jadikan quote!");
    }

    if (!text) return reply('masukan text');
    if (text.length > 200) return reply('Maksimal 200 Teks!');

    let ppnyauser = await Alice.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/nwvkbt.png');
    const rest = await quote(text, pushname, ppnyauser);
    Alice.sendImageAsSticker(m.chat, rest.result, m, {
        packname: ``,
        author: `${global.author}`
    });
}
break
    }
  }
};

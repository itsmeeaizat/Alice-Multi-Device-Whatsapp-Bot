// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['emojimix'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'emojimix': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Example : 😎+😂 atau 😎|😂`);

    const emojis = text.split(/[\+\|]/);
    if (emojis.length !== 2) return reply('Silakan masukkan dua emoji yang valid, example: 😎+😂 atau 😎|😂');

    const text1 = emojis[0].trim();
    const text2 = emojis[1].trim();
 
    let api = `https://fastrestapis.fasturl.cloud/maker/emojimix?emoji1=${text1}&emoji2=${text2}`;
    await Alice.sendImageAsSticker(m.chat, api, xy, { packname: '', author: `${packname}` });
}
break;
    }
  }
};

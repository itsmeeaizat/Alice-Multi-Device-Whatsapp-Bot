// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['attp', 'attp2', 'attp3', 'attp4', 'ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'attp':

break;

case 'attp2':

break;

case 'attp3':

break;

case 'attp4':

break;

case 'ttp':

break;

case 'ttp2':

break;

case 'ttp3':

break;

case 'ttp4':

break;

case 'ttp5': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: ${AliceCmd} Alice`)

  try {
    let buffer

    if (command.startsWith('attp')) {
      switch (command) {
        case 'attp':
          buffer = await generateAttp(text)
          break
        case 'attp2':
          buffer = await generateAttp_v2(text)
          break
        case 'attp3':
          buffer = await generateAttp_v3(text)
          break
        case 'attp4':
          buffer = await generateAttp_v4(text)
          break
      }
    } else if (command.startsWith('ttp')) {
      switch (command) {
        case 'ttp':
          buffer = await generateTtp(text)
          break
        case 'ttp2':
          buffer = await generateTtp_v2(text)
          break
        case 'ttp3':
          buffer = await generateTtp_v3(text)
          break
        case 'ttp4':
          buffer = await generateTtp_v4(text)
          break
        case 'ttp5':
          buffer = await generateTtp_v5(text)
          break
      }
    }

    await Alice.sendImageAsSticker(m.chat, buffer, m, {
      packname: '',
      author: `${author}`,
    })
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break
    }
  }
};

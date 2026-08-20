// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['s', 'sticker', 'stiker', 'smeme'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 's':

break;

case 'sticker':

break;

case 'stiker':

break;

case 's': {
if (isBan) return XRB()
await XReaction()
if (!quoted) return reply(`Balas Video/Image Dengan Caption ${AliceCmd}`)
await XReaction()
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Alice.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 31) return reply('Maksimal 30 detik!')
let media = await quoted.download()
let encmedia = await Alice.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return reply(`Kirim Gambar/Video Dengan Caption ${AliceCmd}\nDurasi Video 1-9 Detik`)
}
}
break

case 'smeme': {
if (isBan) return XRB()
await XReaction()
  if (quoted) {
    let msg = quoted
    let type = Object.keys(msg)[0]
    if (msg[type].viewOnce && /image/.test(type)) {
      let media = await downloadContentFromMessage(msg[type], 'image')
      let buffer = Buffer.from([])
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
      }

      let awal = text.split('|')[0] || ''
      let akhir = text.split('|')[1] || ''
      const tempFile = `./temp_${Date.now()}.jpg`
      await fs.writeFileSync(tempFile, buffer)

    const { Smeme } = require('./AliceSystem/AliceScraper/smeme')
      let hasil = await Smeme(awal, akhir, tempFile)

      await Alice.sendImageAsSticker(m.chat, hasil, xy, {
      packname: `${pushname}`,
      author: `${author}`
      })

      await fs.unlinkSync(tempFile)
      return
    }
  }

  if (!/webp/.test(mime) && /image/.test(mime)) {
    let awal = text.split('|')[0] || ''
    let akhir = text.split('|')[1] || ''
    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
    
    const { Smeme } = require('./AliceSystem/AliceScraper/smeme')
    let hasil = await Smeme(awal, akhir, mee)

    await Alice.sendImageAsSticker(m.chat, hasil, xy, {
      packname: `${pushname}`,
      author: `${author}`
    })
    await fs.unlinkSync(mee)
  } else {
    reply(`Kirim/kutip gambar dengan caption ${AliceCmd} memek|xyroo`)
  }
}
break
    }
  }
};

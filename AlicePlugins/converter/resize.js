// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['resize'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'resize': {
if (isBan) return XRB()
await XReaction()
  if (!args[0]) return reply(`Contoh ${AliceCmd} 300x300\nPanjangxlebar`)
  
  let panjang = q.split('x')[0]
  let lebar = q.split('x')[1]
  
  let media = await Alice.downloadAndSaveMediaMessage(quoted);
  let ran = getRandom('.jpeg')

  const command = `ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`
  
  exec(command, async (err) => {
    fs.unlinkSync(media)

    try {
      let buffer453 = fs.readFileSync(ran)
      await Alice.sendMessage(
        m.chat, 
        {
          mimetype: 'image/jpeg',
          image: buffer453
        }, 
        { quoted: m }
      );
    } catch (readError) {
      return reply('Terjadi kesalahan: '+readError)
    } finally {
      fs.unlinkSync(ran)
    }
  })
}
break
    }
  }
};

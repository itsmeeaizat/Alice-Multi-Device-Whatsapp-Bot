// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['togift', 'togif', 'tomp4', 'tovideo', 'tovn', 'tomp3', 'toaudio', 'toimage', 'toimg', 'toptv', 'ptv', 'tourl'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'togift':

break;

case 'togif': {
if (isBan) return XRB()
await XReaction()
    if (!isMedia) {
        return reply(`Contoh Pengguna\n${AliceCmd} *dengan reply sticker/gif*`);
    }
    await XReaction();
    try {
        let media = await Alice.downloadAndSaveMediaMessage(quoted);
        await Alice.sendMessage(m.chat, {
            video: media,
            mimetype: 'video/mp4',
            gifPlayback: true
        }, { quoted: m });
    } catch (e) {
       let media = await Alice.downloadAndSaveMediaMessage(quoted)
       let alice = await ShannzCdn(media)
       let jembut = alice.result.url;
       let memek = await Webp2Mp4(jembut); 
        let kontol = memek.convertUrl;
        await Alice.sendMessage(m.chat, { video: { url: kontol }, gifPlayback: true }, { quoted: m });
    }
}
break;

case 'tomp4':

break;

case 'tovideo':

break;

case 'tovn': {
if (isBan) return XRB()
await XReaction()
if (!isMedia) throw reply(`reply video/audio dengan caption ${AliceCmd}`)
if (!quoted) throw reply(`reply video/audio dengan caption ${AliceCmd}`)
await XReaction()
try {
var dl = await m.quoted.download()
Alice.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdreply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: channel,
title: `${global.botname} `,
body: `$${ownername}`,
sourceUrl: `${global.channel}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return XRR()
}
}
break

case 'tomp3':

break;

case 'toaudio': {
if (isBan) return XRB()
await XReaction()
if (!isMedia) throw reply(`reply video/audio dengan caption ${AliceCmd}`)
if (!quoted) throw reply(`reply video/audio dengan caption ${AliceCmd}`)
await XReaction()
try {
var dl = await m.quoted.download()
Alice.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdreply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: channel,
title: `${global.botname}`,
body: `Hai ${pushname}`,
sourceUrl: `${global.channel}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return XRR()
}
}
break

case 'toimage':
case 'toimg': {
if (isBan) return XRB()
await XReaction()
if (!quoted) reply('reply Image')
if (!/webp/.test(mime)) reply(`Balas sticker dengan caption *${AliceCmd}*`)
let media = await Alice.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
Alice.sendMessage(m.chat, { image: buffer }, {quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'toptv':

break;

case 'ptv':
{
if (isBan) return XRB()
await XReaction()
 if (!quoted) return reply('reply video')
 if (!m.quoted) reply(`Balas Video Dengan Caption ${AliceCmd}`)
  if (/video/.test(mime)) {
var ppt = m.quoted
var ptv = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"ptvMessage": ppt
}), { userJid: from, quoted: m})
Alice.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
}
}
break

case 'tourl': {
  if (isBan) return XRB();
  await XReaction();

  try {
    // ambil pesan target (media langsung atau reply)
    const targetMsg = qmsg && qmsg.message ? qmsg : (m.quoted ? m.quoted : m);
    const mimeType = (targetMsg.msg || targetMsg).mimetype || '';

    if (!mimeType) {
      return reply(
        `❌ Silakan kirim atau reply media (gambar, video, atau audio) dengan caption *${prefix + command}*.\n\n` +
        `📌 Contoh:\n1) Kirim gambar, lalu tulis: *${prefix + command}*\n2) Reply ke gambar/video/audio, lalu ketik: *${prefix + command}*`
      );
    }

    if (!/image|video|audio/.test(mimeType)) {
      return reply(`❌ Maaf, hanya gambar, video, atau audio yang dapat diunggah.`);
    }

    // ambil buffer media
    let mediaBuffer = await Alice.downloadMediaMessage(targetMsg);

    // cek ukuran buffer (misal limit 10 MB)
    const MAX_SIZE = 10 * 1024 * 1024;
    if (mediaBuffer.length > MAX_SIZE) {
      if (/image/.test(mimeType)) {
        // compress otomatis kalau gambar
        const sharp = require('sharp');
        mediaBuffer = await sharp(mediaBuffer)
          .jpeg({ quality: 70 }) // kualitas 70%
          .toBuffer();
      } else {
        // kalau video/audio terlalu besar, langsung stop
        return reply("⚠️ File terlalu besar (maks 10MB). Silakan kompres atau kirim file lebih kecil.");
      }
    }

    // fungsi upload ke Alice CDN
    async function uploadToAliceCdn(buffer, fileName) {
      const axios = require('axios');
      const FormData = require('form-data');
      const form = new FormData();
      form.append('cdnFile', buffer, fileName);

      try {
        const response = await axios.post('https://aliceecdn.vercel.app/upload', form, {
          headers: { ...form.getHeaders() },
          maxContentLength: Infinity,
          maxBodyLength: Infinity
        });
        return response.data;
      } catch (error) {
        throw new Error(`Error uploading file: ${error.response?.data?.message || error.message}`);
      }
    }

    // bikin nama file dinamis sesuai mimeType
    const fileName = `${Date.now()}.${mimeType.split('/')[1] || 'bin'}`;

    // upload
    const result = await uploadToAliceCdn(mediaBuffer, fileName);

    // balas dengan URL hasil upload
    reply(
      `✅ Berhasil diupload!\n\n` +
      `🔗 URL: ${result.url}\n` +
      `📌 Expired: Tidak ada batas waktu`
    );

  } catch (err) {
    reply(`⚠️ Error: ${err && err.message ? err.message : err}`);
  }
}
break;
    }
  }
};

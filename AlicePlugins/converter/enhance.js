// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['faceblur', 'blurface', 'hd', 'hdr', 'remini', 'removebg'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'faceblur':

break;

case 'blurface': {
if (isBan) return XRB()
await XReaction()
  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/reply Foto Dengan Caption ${prefix + command}`)

let media = await Alice.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
  await Alice.sendMessage(m.chat, {image: {url: `https://api.siputzx.my.id/api/iloveimg/blurface?image=${response}` }, caption: packname }, {quoted: m})
}
break

case 'hd':

break;

case 'hdr':

break;

case 'remini':

break;

case 'removebg': {
  if (!isPrem) return XRP();
  await XReaction();
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (!/image\/(jpe?g|png)/.test(mime)) {
      return reply('⚠️ Reply gambar dengan command : .removebg');
    }

    const imgBuffer = await q.download();
    if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

    reply('🪄 Menghapus background, tunggu sebentar...');

    // upload dulu ke Alice CDN (biar dapat URL file)
    const form = new FormData();
    form.append("cdnFile", imgBuffer, "image.png");

    const upload = await axios.post("https://aliceecdn.vercel.app/upload", form, {
      headers: { ...form.getHeaders() },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    if (!upload.data?.url) return reply("❌ Gagal upload gambar ke CDN Alice");

    const fileUrl = upload.data.url;

    // panggil endpoint removebg Alice
    const removeRes = await axios.get(
      `https://aliceeapis.vercel.app/tools/removebg?url=${encodeURIComponent(fileUrl)}&apikey=${global.api.alice}`,
      { responseType: "arraybuffer" }
    );

    // kirim hasil langsung ke chat
    await Alice.sendMessage(m.chat, {
      image: Buffer.from(removeRes.data),
      caption: '✅ Background berhasil dihapus!'
    }, { quoted: m });

  } catch (e) {
    console.error("REMOVE-BG ERROR:", e.response?.data || e.message);
    reply(`🚨 Eror kak : ${e.message}`);
  }
}
break;
    }
  }
};

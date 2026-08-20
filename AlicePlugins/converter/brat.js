// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['bratvid', 'bratvidio', 'bratvideo', 'brat'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'bratvid':

break;

case 'bratvidio':

break;

case 'bratvideo': {
  if (isBan) return XRB();
  if (!text) return reply(`Contoh: ${AliceCmd} hai bang`);
  await XReaction();
  if (text.length > 250) return reply(`Karakter terbatas, max 250!`);

  try {
    // ambil video langsung dari API anomali-api.vercel.app
    let res = await axios.get(
      `https://anomali-api.vercel.app/tools/brat2?q=${encodeURIComponent(text)}`,
      { responseType: "arraybuffer" }
    );

    // buat folder sementara
    const tempDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const outputVideoPath = path.join(tempDir, `brat-${Date.now()}.mp4`);
    fs.writeFileSync(outputVideoPath, res.data);

    // kirim sebagai sticker video
    await Alice.sendImageAsSticker(m.chat, outputVideoPath, m, {
      packname: 'AliceBot',
      author: 'Brat Video Maker'
    });

    // hapus file sementara
    setTimeout(() => {
      if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
    }, 5000);

  } catch (err) {
    console.error(err);
    reply('🚫 Gagal membuat Brat Video dari API.');
  }
}
break;

case 'brat': {
if (isBan) return XRB()
XReaction()
if (!q) return reply(`Masukkan teks\n\nContoh: ${AliceCmd} alok hamil`);
let rulz = `https://aqul-brat.hf.space/api/brat?text=${encodeURIComponent(q)}`;
try {
const res = await axios.get(rulz, { responseType: 'arraybuffer' });
const buffer = Buffer.from(res.data, 'binary');
await Alice.sendImageAsSticker(m.chat, buffer, m, { packname: ``, author: `${author}` });
} catch (e) {
console.log(e);
await reply(`Sedang maintenance atau API error`);
    }
}
break
    }
  }
};

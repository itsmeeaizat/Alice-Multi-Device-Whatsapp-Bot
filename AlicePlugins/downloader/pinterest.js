// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['pindl'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, axios, command, content, isBan, m, prefix, quoted, reply, text } = context;

    switch (command) {
case 'pindl': {
if (isBan) return XRB()
await XReaction()
 if (!text) {
 return reply(`\`Example\`: *${prefix + command} https://pin.it/example*`);
 }

 if (!/pinterest\.com|pin\.it/i.test(text)) {
 return reply("❌ URL yang Anda berikan sepertinya bukan URL Pinterest yang valid.");
 }

 try {

 const apiUrl = 'https://api.seaavey.my.id/api/downloader/pinterest';
 
 const apiResponse = await axios.get(apiUrl, {
 params: { url: text },
 headers: { 'Accept': 'application/json' }
 });

 const result = apiResponse.data;
 
 if (result.status !== 200 || !result.data || !result.data.url) {
 throw new Error(result.message || "Gagal mendapatkan link media dari API. Format respons mungkin berbeda.");
 }

 const mediaUrl = result.data.url;

 const mediaResponse = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
 
 const mediaBuffer = Buffer.from(mediaResponse.data, 'binary');
 const contentType = mediaResponse.headers['content-type'];

 if (contentType.includes('image')) {
 await Alice.sendMessage(m.chat, {
 image: mediaBuffer,
 mimetype: contentType,
 caption: "✅ Berhasil mengunduh gambar dari Pinterest!"
 }, { quoted: m });
 } else if (contentType.includes('video')) {
 await Alice.sendMessage(m.chat, {
 video: mediaBuffer,
 mimetype: contentType,
 caption: "✅ Berhasil mengunduh video dari Pinterest!"
 }, { quoted: m });
 } else {
 await Alice.sendMessage(m.chat, {
 document: mediaBuffer,
 mimetype: contentType,
 fileName: "pinterest_media" + (contentType.includes('mp4') ? ".mp4" : ".jpg")
 }, { quoted: m });
 }

 } catch (err) {
 console.error("Pinterest Downloader Error:", err);
 reply(`⚠️ Terjadi kesalahan. API mungkin sedang down atau link tidak valid.\n\n*Error:* ${err.message}`);
 }
};
break;

    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['komiku-search', 'komikusearch', 'komiku-detail', 'komiku'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'komiku-search':

break;

case 'komikusearch':

break;

case 'komiku-detail':

break;

case 'komiku':

break;

case 'komiku-search': {
if (isBan) return XRB()
await XReaction()
 if (!text) return reply(`Ex : ${AliceCmd} manhwa regression`);

 try {
 const res = await fetch(`https://fastrestapis.fasturl.cloud/comic/komikindo/search?name=${encodeURIComponent(text)}`);
 const json = await res.json();
 const result = json.result;

 if (!result || result.length === 0) return reply('❌ Tidak ada hasil ditemukan.');

 const selected = result.slice(0, 10);

 const cards = await Promise.all(selected.map(async (komik, i) => ({
 header: {
 title: `📖 ${komik.title}`,
 hasMediaAttachment: true,
 imageMessage: (await generateWAMessageContent({
 image: { url: komik.image }
 }, { upload: Alice.waUploadToServer })).imageMessage
 },
 body: {
 text: `⭐ *Rating:* ${komik.rating}\n🖇️ *Link:* ${komik.url}`
 },
 footer: {
 text: `🔗 Klik tombol di bawah untuk membaca langsung`
 },
 nativeFlowMessage: {
 buttons: [
 {
 name: 'cta_url',
 buttonParamsJson: JSON.stringify({
 display_text: '📘 Baca Sekarang',
 url: komik.url
 })
 }
 ]
 }
 })));

 const carousel = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 body: {
 text: `🔍 ʜᴀsɪʟ ᴍᴀɴʜᴡᴀ ᴅᴀʀɪ: *"${text}"*`
 },
 footer: {
 text: "Geser buat lihat semua pilihan yang tersedia~"
 },
 carouselMessage: {
 cards
 }
 })
 }
 }
 }, { quoted: m });

 await Alice.relayMessage(m.chat, carousel.message, {
 messageId: carousel.key.id
 });

 } catch (err) {
 console.error('❌ Error fetch manhwa:', err);
 reply('Gagal ngambil data manhwa, coba beberapa saat lagi.');
 }
}
 break
    }
  }
};

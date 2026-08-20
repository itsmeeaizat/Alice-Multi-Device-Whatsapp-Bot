// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['jkt48'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      text,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
  try {
const axios = require("axios");
    const liveRes = await axios.get('https://48intensapi.my.id/api/idnlive/jkt48');
    const liveList = liveRes.data?.data || [];
    if (!Array.isArray(liveList) || liveList.length === 0) {
      return reply('Tidak ada member JKT48 yang sedang live saat ini.');
    }
    for (let i = 0; i < liveList.length; i++) {
      const mbr = liveList[i];
      const nama = mbr.user.name;
      const username = mbr.user.username;
      const judul = mbr.title;
      const viewers = mbr.view_count;
      const waktu = new Date(mbr.live_at).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
      const link = `https://www.idn.app/${username}/live/${mbr.slug}`;
      const img = mbr.image;
      await Alice.sendMessage(m.chat, {
        text: `*${nama} (@${username}) sedang LIVE!*\n\n` +
              `• *Judul:* ${judul}\n` +
              `• *Penonton:* ${viewers}\n` +
              `• *Sejak:* ${waktu}\n\n` +
              `Tonton sekarang:\n${link}`,
        contextInfo: {
          externalAdreply: {
            showAdAttribution: true,
            title: `${nama} sedang LIVE!`,
            body: `Judul: ${judul}`,
            mediaUrl: link,
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnailUrl: img,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    }
  } catch (e) {
    console.error('ERROR JKT48:', e);
    reply(`Gagal mengambil data JKT48: ${e.message}`);
  }
}
  }
};

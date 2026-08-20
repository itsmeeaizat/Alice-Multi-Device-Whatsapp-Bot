// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['samehadakusearch'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      fetch
    } = context;

{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('name?');

    let cari = await (await fetch(`https://api.siputzx.my.id/api/anime/samehadaku/search?query=${text}`)).json();
    if (cari.status) {
        let cap = '_Samehadaku Search From: *' + text + '*_\n\n';
        for (let ciro of cari.data) {
            cap += `*🏷️ TITLE :* ${ciro.title}\n*🃏 RATING :* ${ciro.star}\n*🏯 GENRE :* ${ciro.genre.join(', ')}\n*☃️ STATUS :* ${ciro.type.join(', ')}\n*🔗 LINK :* ${ciro.link}\n*🄄 DESKRIPSI :*\n${ciro.description}\n\n`;
        }
        await Alice.sendMessage(m.chat, { image: { url: cari.data[0].thumbnail }, caption: cap }, { quoted: m });
    } else {
        await reply('Data tidak ditemukan.');
    }
}
  }
};

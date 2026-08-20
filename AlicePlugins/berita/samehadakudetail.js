// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['samehadakudetail'],
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
    if (!text) return reply('Link?');
    
    let cari = await (await fetch(`https://api.siputzx.my.id/api/animesamehadaku/detail?link=${text}`)).json();
    if (cari.status) {
        let cap = '*_LIST ALL EPISODE_*' + '\n\n';
        for (let episode of cari.data.episodes) {
            cap += `*🏷️ TITLE :* ${episode.title}\n*🀄 DATE :* ${episode.date}\n*🔗 LINK :* ${episode.link}\n\n`;
        }
        await Alice.sendMessage(m.chat, { image: { url: cari.data.thumbnail }, caption: cap }, { quoted: m });
    } else {
        await reply('Data tidak ditemukan.');
    }
}
  }
};

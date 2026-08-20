// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['samehadakudl', 'samehadakudetail', 'samehadakusearch'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, command, fetch, isBan, m, quoted, reply, text } = context;

    switch (command) {
case 'samehadakudl': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('Link?..');
    
    // Mengambil data dari API
    let cari = await (await fetch(`https://api.siputzx.my.id/api/anime/samehadaku/download?url=${text}`)).json();
    
    // Memeriksa status respon
    if (cari.status) {
        let title = cari.data.title;
        let cap = `*_PILIH LINK ALTERNATIF untuk ${title}*_` + '\n\n';
        
        // Mengiterasi unduhan
        for (let ciroo of cari.data.downloads) {
            cap += `*🏷️ ALTERNATIF ${ciroo.nume} :* ${ciroo.name}\n*🔗 LINK UNDUH :* ${ciroo.link || 'Tidak tersedia'}\n\n`;
        }
        
        await reply(cap);
    } else {
        await reply('Data tidak ditemukan.');
    }
}
break;


case 'samehadakudetail': {
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
break;


case 'samehadakusearch': {
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
break;

    }
  }
};

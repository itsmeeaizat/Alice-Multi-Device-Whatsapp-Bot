// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['otakudesu', 'otakud', 'otakudesu-search', 'otakudesu-detail'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'otakudesu':

break;

case 'otakud': {
  if (isBan) return XRB()
  await XReaction()

  try {
    const res = await axios.get('https://api.zenzxz.my.id/anime/otakudesu')
    const data = res.data.result
    if (!data || !data.length) return reply('⚠️ Tidak ada data.')

    let teks = '📺 *Otakudesu – Update Terbaru*\n\n'
    data.slice(0, 10).forEach((v, i) => {
      teks += `${i+1}. *${v.title}*\n📅 ${v.published}\n🔗 ${v.url}\n\n`
    })

    await Alice.sendMessage(m.chat, { image: { url: data[0].image }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('otakudesu error:', e.message)
    reply('❌ Gagal mengambil data Otakudesu.')
  }
}
break

case 'otakudesu-search':

break;

case 'otakudesu-detail':

break;
    }
  }
};

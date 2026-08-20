// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['vivagoal-detail'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'vivagoal-detail': {
  if (isBan) return XRB()
  if (!text) return reply('⚠️ Contoh: *.vivagoal-detail https://vivagoal.com/...*')

  try {
    const res = await axios.get(`https://api.zenzxz.my.id/berita/vivagoal/detail?url=${encodeURIComponent(text)}`)
    const v = res.data.result
    if (!v) return reply('🙅 Detail berita tidak ditemukan.')

    let teks = `📰 *${v.title}*\n\n`
    teks += `${v.content?.slice(0, 500)}...\n\n`
    teks += `📅 ${v.date}\n👤 Penulis: ${v.author || '-'}\n🔗 ${text}`

    await Alice.sendMessage(m.chat, { image: { url: v.thumbnail }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('vivagoal-detail error:', e.message)
    reply('❌ Gagal ambil detail berita Vivagoal.')
  }
}
break
    }
  }
};

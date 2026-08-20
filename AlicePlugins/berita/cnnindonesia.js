// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['cnnindonesia', 'cnn'],
  operate: async (context) => {
    const {
      Alice,
      m,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      axios
    } = context;

{
  if (isBan) return XRB()
  await XReaction()

  try {
    const res = await axios.get('https://api.zenzxz.my.id/berita/cnnindonesia')
    const data = res.data.result
    if (!data || !data.length) return reply('🙅 Tidak ada berita CNN.')

    let teks = `📰 *Berita CNN Indonesia*\n\n`
    data.slice(0, 5).forEach((v, i) => {
      teks += `${i+1}. *${v.title}*\n🔗 ${v.link}\n\n`
    })

    await Alice.sendMessage(m.chat, { image: { url: data[0].thumbnail }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('cnnindonesia error:', e.message)
    reply('❌ Gagal mengambil berita CNN Indonesia.')
  }
}
  }
};

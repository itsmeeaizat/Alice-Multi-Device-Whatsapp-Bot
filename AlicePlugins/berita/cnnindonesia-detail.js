// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['cnnindonesia-detail', 'cnn-detail'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isBan,
      quoted,
      reply,
      XRB,
      content,
      axios
    } = context;

{
  if (isBan) return XRB()
  if (!text) return reply('⚠️ Contoh: *.cnnindonesia-detail https://www.cnnindonesia.com/...*')

  try {
    const res = await axios.get(`https://api.zenzxz.my.id/berita/cnnindonesia/detail?url=${encodeURIComponent(text)}`)
    const v = res.data.result
    if (!v) return reply('🙅 Detail berita tidak ditemukan.')

    let teks = `📰 *${v.title}*\n\n`
    teks += `${v.content?.slice(0, 500)}...\n\n`
    teks += `📅 ${v.date}\n👤 Penulis: ${v.author || '-'}\n🔗 ${text}`

    await Alice.sendMessage(m.chat, { image: { url: v.thumbnail }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('cnnindonesia-detail error:', e.message)
    reply('❌ Gagal ambil detail berita CNN Indonesia.')
  }
}
  }
};

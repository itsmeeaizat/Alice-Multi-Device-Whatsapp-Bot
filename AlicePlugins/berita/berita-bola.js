// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['berita-bola', 'vivagoal'],
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
      axios
    } = context;

{
  if (isBan) return XRB()
  await XReaction()

  try {
    const res = await axios.get('https://api.zenzxz.my.id/berita/berita-bola')
    const data = res.data.result
    if (!data || !data.length) return reply('🙅 Tidak ada berita ditemukan.')

    let teks = `⚽ *Berita Bola Terbaru (Vivagoal)*\n\n`
    data.slice(0, 5).forEach((v, i) => {
      teks += `${i+1}. *${v.title}*\n🕒 ${v.published}\n🔗 ${v.link}\n\n`
    })

    await Alice.sendMessage(m.chat, { text: teks }, { quoted: m })
  } catch (e) {
    console.error('berita-bola error:', e.message)
    reply('❌ Gagal mengambil berita bola.')
  }
}
  }
};

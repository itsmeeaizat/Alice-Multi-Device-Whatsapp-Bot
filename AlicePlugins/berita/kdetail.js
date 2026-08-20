// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['komiku-detail', 'kdetail'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isBan,
      quoted,
      reply,
      XRB,
      axios
    } = context;

{
  if (isBan) return XRB()
  if (!text) return reply('⚠️ Contoh: *.komiku-detail https://komiku.id/manga/xxx*')

  try {
    const res = await axios.get(`https://api.zenzxz.my.id/anime/komikudetail?url=${encodeURIComponent(text)}`)
    const v = res.data
    if (!v.status) return reply('🙅 Detail manga tidak ditemukan.')

    let teks = `📖 *${v.manga_title}*\n`
    teks += `📌 Judul Chapter: ${v.title}\n`
    teks += `📅 Rilis: ${v.release_date}\n`
    teks += `📚 Arah Baca: ${v.read_direction}\n\n`
    teks += `📝 Deskripsi:\n${v.description}\n\n`
    teks += `📂 Total Halaman: ${v.baca_komik.length}\n`
    teks += `🔗 Manga URL: ${v.manga_url}`

    // kirim sampel 1 halaman pertama biar lebih menarik
    await Alice.sendMessage(m.chat, { image: { url: v.baca_komik[0] }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('komiku-detail error:', e.message)
    reply('❌ Gagal mengambil detail manga dari Komiku.')
  }
}
  }
};

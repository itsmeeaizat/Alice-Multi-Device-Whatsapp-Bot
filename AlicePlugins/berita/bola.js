// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['jadwalbola', 'jdbola', 'bola'],
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
      time,
      axios
    } = context;

{
  if (isBan) return XRB()
  await XReaction()

  try {
    const res = await axios.get('https://api.zenzxz.my.id/info/jadwalbola')
    const data = res.data
    if (!data.status || !data.data || !data.data.length) 
      return reply('🙅 Tidak ada jadwal bola ditemukan.')

    let teks = `⚽ *Jadwal Pertandingan Sepakbola*\n📅 Tanggal: ${data.date}\n📊 Total: ${data.total} pertandingan\n\n`

    data.data.slice(0, 10).forEach((m, i) => {
      teks += `${i+1}. *${m.team1}* vs *${m.team2}*\n`
      teks += `   🏆 Liga: ${m.liga}\n`
      teks += `   ⏰ Waktu: ${m.time}\n`
      teks += `   📍 Lokasi: ${m.location}\n`
      teks += `   🔗 Detail: ${m.detail}\n\n`
    })

    if (data.data.length > 10) teks += `…dan ${data.data.length - 10} pertandingan lainnya.`

    await Alice.sendMessage(m.chat, { text: teks }, { quoted: m })
  } catch (e) {
    console.error('jadwalbola error:', e.message)
    reply('❌ Gagal mengambil jadwal bola.')
  }
}
  }
};

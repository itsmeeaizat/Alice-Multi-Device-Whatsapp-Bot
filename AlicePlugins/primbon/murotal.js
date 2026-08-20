// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['murotal'],
  operate: async (context) => {
    const {
      Alice,
      m,
      args,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      axios,
      fetch
    } = context;

{
if (isBan) return XRB()
await XReaction()
  if (!args[0]) {
    try {
      let { data } = await axios.get('https://gist.githubusercontent.com/Bell575/382f3dd393f45eaac298d5b845112258/raw/dbcdc554a51e06a13795a2ff1fe15b85f55e8d9d/List%2520Surah')
      return reply(
        `Cara Pakai : murotal [Nomor Surah]\n*Example : .murotal 144*\n\n*List Surah :*\n\n${data}\n\n`
      )
    } catch (e) {
      return reply('Gagal Ambil List Surah')
    }
  }

  try {
    let { data } = await axios.get(`https://cloudku.us.kg/api/murotal/surah?id=${args[0]}`)
    let res = data.result
    if (!res) return reply('Surah Gak Ada')

    let teks =
      `Surah : ${res.name_id}\n\n` +
      `Nomor : ${res.number}\n` +
      `Nama Latin : ${res.name_en}\n` +
      `Nama Arab : ${res.name_long}\n` +
      `Jumlah Ayat : ${res.number_of_verses}\n` +
      `Tempat Turun : ${res.revelation_id} (${res.revelation_en})\n` +
      `Urutan Wahyu : ${res.sequence}\n` +
      `Arti : ${res.translation_id} (${res.translation_en})\n\n` +
      `Tafsir :\n${res.tafsir}`

    await reply(teks)
    await Alice.sendMessage(m.chat, {
      audio: { url: res.audio_url },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m })

  } catch (e) {
    reply('Failed to fetch surah data. Make sure the surah number is correct')
  }
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['texttonote'],
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
      alice,
      Aizat
    } = context;

{
  if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Example : ${AliceCmd} Nama|Kelas|Mata Pelajaran|Tanggal|Isi Catatan`)
  let [name, classroom, subject, date, ...content] = text.split('|')
  if (!name || !classroom || !subject || !date || content.length == 0) {
    return reply(`Format salah!\nContoh:\n${AliceCmd} alice|XII - Bio A|Sexual Organs|2025-01-25|Isi catatan...`)
  }

  let contentEncoded = encodeURIComponent(content.join('|').trim())
  let url = `https://fastrestapis.fasturl.cloud/tool/texttonote?name=${encodeURIComponent(name)}&classroom=${encodeURIComponent(classroom)}&subject=${encodeURIComponent(subject)}&date=${encodeURIComponent(date)}&content=${contentEncoded}`

  try {
    await Alice.sendMessage(m.chat, {
      image: { url },
      caption: `Catatan untuk ${subject} berhasil dibuat!`
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    reply('Gagal membuat catatan, pastikan format dan isi valid.')
  }
}
  }
};

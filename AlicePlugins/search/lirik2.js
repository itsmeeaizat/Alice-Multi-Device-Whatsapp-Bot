// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['lirik2'],
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
      fetch
    } = context;

{
  if (!text) return reply(`Masukkan judul lagu atau keyword lirik.\n\nContoh:\n.lirik new jeans romanized`)
if (isBan) return XRB()
await XReaction()
  try {
    let res = await fetch(`https://api.betabotz.eu.org/api/search/lirik?apikey=beta-gilang&lirik=${encodeURIComponent(text)}`)
    let json = await res.json()

    if (!json.result) return Alice.sendMessage(m.chat, {
      text: `⚠️ Lirik tidak ditemukan untuk: *${text}*`
    }, { quoted: m })

    let r = json.result
    let cap = `🎼 *Lirik Lagu Ditemukan!*\n\n`
    cap += `📌 *Title:* ${r.title}\n`
    cap += `🎤 *Artist:* ${r.artist}\n`
    cap += `🔗 *Link:* ${r.url}\n\n`
    cap += `📝 *Lyrics:*\n${r.lyrics.substring(0, 4000)}` // antisipasi teks panjang

    await Alice.sendMessage(m.chat, {
      image: { url: r.image },
      caption: cap
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    Alice.sendMessage(m.chat, {
      text: `❌ Terjadi error saat mengambil lirik.`
    }, { quoted: m })
  }
}
  }
};

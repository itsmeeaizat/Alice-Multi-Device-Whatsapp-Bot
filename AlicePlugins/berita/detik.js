// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['detik'],
  operate: async (context) => {
    const {
      Alice,
      m,
      isBan,
      quoted,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()

DetikNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
Alice.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted: m })
})
}
  }
};

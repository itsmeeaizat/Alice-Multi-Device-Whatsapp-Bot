// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['cerpen'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isBan,
      quoted,
      XReaction,
      XRB,
      axios,
      cheerio
    } = context;

{
if (isBan) return XRB()
await XReaction()
async function getCerpen() {
try {
const anu = await axios.get("http://cerpenmu.com/100-cerpen-kiriman-terbaru")
const $ = cheerio.load(anu.data)
const dbres = []

$("a[title]").each((a, b) => {
const judul = $(b).attr("title")
const link = $(b).attr("href")
dbres.push({ judul, link })
})

return dbres
} catch (err) {
console.log(err)
}
}

const rs = await getCerpen()
if (rs.length === 0) return Alice.sendMessage(m.chat, { text: "Gagal Mengambil Berita" }, { quoted:m })
await Alice.sendMessage(m.chat, { text: `RESULT\n\n`+rs.map(a => `JUDUL CERPEN: ${a.judul}\nLINK: ${a.link}`).join("\n\n") }, { quoted: m})
}
  }
};

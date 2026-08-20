// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['gimage'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      q,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`gimage Kucing`)
    await XReaction()
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return reply('Tidak ada gambar.')
        }
        let SaannzImage = images[Math.floor(Math.random() * images.length)]
        Alice.sendMessage(m.chat, { image: { url: SaannzImage }, caption: `*Query* : ${text}\n*Media Url* : ${SaannzImage}` }, { quoted: m })
    }).catch(error => {
        reply('Terjadi kesalahan.')
    })
}
  }
};

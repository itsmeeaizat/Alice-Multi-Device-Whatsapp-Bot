// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['alkitab'],
  operate: async (context) => {
    const {
      text,
      q,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      axios,
      cheerio
    } = context;

{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`teksnya mana?\n\ncontoh: ${AliceCmd} kejadian`)
    let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(text)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } })

    let $ = cheerio.load(res.data)
    let result = []
    $('div.vw').each(function (a, b) {
        let teks = $(b).find('p').text().trim()
        let link = $(b).find('a').attr('href')
        let title = $(b).find('a').text().trim()
        result.push({ teks, link, title })
    })

    let caption = result.map(v => `${v.title}\n${v.teks}`).join('\n────────\n')
    reply(caption)
}
  }
};

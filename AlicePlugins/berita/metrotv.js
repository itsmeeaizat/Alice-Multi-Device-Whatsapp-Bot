// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['metrotv'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      content
    } = context;

{
if (isBan) return XRB()
await XReaction()
  try {
    const axios = require('axios')
    const cheerio = require('cheerio')
    const baseURL = 'https://www.metrotvnews.com'
    const { data } = await axios.get(baseURL)
    const $ = cheerio.load(data) 
    const terbaru = []
    const detailList = []
    const links = []
    $('.main-news .big-news-carousel .news-item, .main-news .small-news .news-item').each((i, el) => {
      const title = $(el).find('h1 a, h2 a').text().trim()
      const url = $(el).find('h1 a, h2 a').attr('href')
      const img = $(el).find('img').attr('src') || ''
      const kategori = $(el).find('.news-category').text().trim()
      if (title && url) {
        const fullUrl = url.startsWith('http') ? url : baseURL + url
        terbaru.push({
          title,
          url: fullUrl,
          thumbnail: img.startsWith('http') ? img : baseURL + img,
          kategori
        })
        links.push(fullUrl)
      }
    })
    const url = links[0]
    const detailRes = await axios.get(url)
    const _$ = cheerio.load(detailRes.data)
    let scriptData = ''
    _$('script').each((i, el) => {
      const html = _$(el).html()
      if (html.includes('dimension6')) scriptData = html
    })
    const detail = {
      title: _$('meta[property="og:title"]').attr('content') || '',
      description: _$('meta[property="og:description"]').attr('content') || '',
      image: _$('meta[property="og:image"]').attr('content') || '',
      publishedAt: scriptData.match(/'dimension6':\s*'([^']+)'/)?.[1] || '',
      author: scriptData.match(/'dimension5':\s*'([^']+)'/)?.[1] || '',
      category: scriptData.match(/'dimension7':\s*'([^']+)'/)?.[1] || '',
      content: []
    }
    _$('.news > p').each((i, el) => {
      const text = _$(el).text().trim()
      if (text) detail.content.push(text)
    })
    let teks = `*Berita Terbaru MetroTV*\n\n`
    for (let i = 0; i < terbaru.length; i++) {
      teks += `*${i + 1}. ${terbaru[i].title}*\n`
      teks += `Kategori: ${terbaru[i].kategori}\n`
      teks += `Link: ${terbaru[i].url}\n\n`
    }

    await Alice.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
        externalAdreply: {
          title: "Berita MetroTV",
          body: "Klik untuk baca selengkapnya",
          thumbnailUrl: terbaru[0].thumbnail,
          sourceUrl: terbaru[0].url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
    let teksDetail = `*${detail.title}*\n\n`
    teksDetail += `${detail.description}\n\n`
    teksDetail += `Kategori: ${detail.category}\nPenulis: ${detail.author}\nTanggal: ${detail.publishedAt}\n\n`
    teksDetail += detail.content.slice(0, 5).join('\n\n') + '\n\n_Selengkapnya di link berita._'

    await Alice.sendMessage(m.chat, {
      image: { url: detail.image },
      caption: teksDetail
    }, { quoted: m })
    } catch (error) {
        reply(`eror`);
    }
}
  }
};

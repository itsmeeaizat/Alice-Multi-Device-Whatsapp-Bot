// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['twitter', 'twitterdl', 'x', 'xdl'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, AliceCmd, axios, cheerio, command, isBan, m, q, quoted, reply, text } = context;

    switch (command) {
case 'twitter': case 'twitterdl': case 'x': case 'xdl': {
if (isBan) return XRB()
await XReaction()
if (!text.includes('x.com')) return reply(`• *Example :* ${AliceCmd} https://x.com/xxxx`)
await XReaction()
try {
async function twitterDl(link) {
  try {
    const token = await axios.post('https://x2twitter.com/api/userverify', 'url=' + link)
    const data = qs.stringify({
      q: link,
      lang: 'en',
      cftoken: token.data.token
    })

    const html = await axios.post('https://x2twitter.com/api/ajaxSearch', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    const $ = cheerio.load(html.data.data)
    let result = {}

    if ($('.tw-video').length > 0) {
      result.type = 'video'
      result.title = $('.clearfix h3').text().trim()
      result.duration = $('.clearfix p').text().trim()
      result.thumbnail = $('.image-tw img').attr('src')
      result.download = []

      $('.dl-action a').each((_, el) => {
        const quality = $(el).text().trim()
        if (quality.includes('Download MP4')) {
          result.download.push({
            link: $(el).attr('href'),
            quality
          })
        }
      })
    } else if ($('.video-data').length > 0 || $('.download-items__thumb img').length > 0) {
      result.type = 'photo'
      result.thumb = $('.download-items__thumb img').attr('src')
      result.download = $('.download-items__btn a').attr('href')
    }

    return result
  } catch (err) {
    throw 'Gagal mengunduh media dari Twitter/X. Coba lagi nanti.'
  }
}

    const res = await twitterDl(text)

    if (res.type === 'video' && res.download.length > 0) {
      const videoRes = await axios.get(res.download[0].link, {
        responseType: 'arraybuffer'
      })

      await Alice.sendMessage(m.chat, {
        video: videoRes.data,
        caption: `*Judul:* ${res.title || 'Tidak diketahui'}\n*Durasi:* ${res.duration || '-'}`
      }, { quoted: m })
    } else if (res.type === 'photo' && res.download) {
      const imgRes = await axios.get(res.download, { responseType: 'arraybuffer' })

      await Alice.sendMessage(m.chat, {
        image: imgRes.data,
        caption: 'Foto dari X/Twitter'
      }, { quoted: m })
    } else {
      reply('Media tidak ditemukan atau tidak didukung.')
    }
  } catch (err) {
    reply(typeof err === 'string' ? err : 'Terjadi kesalahan saat mengambil media.')
  }
}
break;

    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['play', 'playvid', 'playvideo', 'ytmp3', 'ytmp4'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, body, command, content, fetch, isBan, m, prefix, q, quoted, reply, text, timestamp, ytmp3, ytmp4, yts } = context;

    switch (command) {
case 'play': {
    if (isBan) return XRB()
    await XReaction()
    if (!text) return reply('Lagu apa yg ingin dicari?')

    try {
        let search = await yts(text)
        let firstVideo = search.all[0]

        let title = firstVideo.title || 'Untitled'
        let url = firstVideo.url
        let durasi = firstVideo.timestamp || 'Unknown'
        let thumb = firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg'

        // ambil data mp3
        let hasil = await ytmp3(url)

        if (!hasil?.download?.url) throw new Error("Download link not found")

        await Alice.sendMessage(m.chat, {
            audio: { url: hasil.download.url },
            mimetype: 'audio/mp4',
            fileName: hasil.download.filename || `${title}.mp3`,
            caption: `🎶 *${title}*\n⏱️ Durasi: ${durasi}\n📥 Source: Youtube`,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: `Durasi: ${durasi}`,
                    thumbnailUrl: thumb,
                    sourceUrl: url,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        await Alice.sendMessage(m.chat, { react: { text: '🚫', key: m.key } })
        reply('Gagal mengambil lagu, coba kata kunci lain.')
    }
}
break;


case 'playvid':
case 'playvideo': {
    if (isBan) return XRB()
    await XReaction()
    if (!text) return reply(`Gunakan contoh: ${prefix + command} serana`)

    try {
        // 1. Cari video YouTube via Alice API Search
        let search = await fetch(`https://aliceeapis.vercel.app/search/youtube?q=${encodeURIComponent(text)}&apikey=aliceezuberg`)
        let data = await search.json()

        if (!data.status || !data.result || data.result.length === 0) {
            return reply('Video tidak ditemukan!')
        }

        // Ambil hasil pertama
        let video = data.result[0]
        let url = video.link
        let title = video.title
        let channel = video.channel
        let durasi = video.duration
        let thumb = video.imageUrl

        // 2. Convert & Download MP4 via Alice API
        let dlRes = await fetch(`https://aliceeapis.vercel.app/downloader/ytmp4?url=${encodeURIComponent(url)}&format=720p&apikey=aliceezuberg`)
        let hasil = await dlRes.json()

        if (!hasil.status || !hasil.result?.dlink) {
            return reply("Gagal mendapatkan URL download video.")
        }

        let downloadUrl = hasil.result.dlink

        // 3. Kirim info + video
        await Alice.sendMessage(m.chat, {
            image: { url: thumb },
            caption: `🎬 *${title}*\n👤 Channel: ${channel}\n⏱️ Durasi: ${durasi}\n\n📥 Sedang mengirim video...`
        }, { quoted: m })

        await Alice.sendMessage(m.chat, {
            video: { url: downloadUrl },
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
            caption: `🎬 *${title}*\n👤 Channel: ${channel}\n⏱️ ${durasi}`,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: "YouTube Video",
                    mediaUrl: url,
                    mediaType: 2,
                    thumbnailUrl: thumb,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

    } catch (error) {
        console.error('PLAYVID ERROR:', error)
        reply(`Error: ${error.message || error}`)
    }
}
break;


case 'ytmp3': {
    if (isBan) return XRB()
    await XReaction()
    if (!text) return reply('Masukin judul atau link YouTube')

    try {
        let search = await yts(text)
        if (!search.all.length) throw new Error('Video tidak ditemukan')

        let firstVideo = search.all[0]

        let title = firstVideo.title || 'Untitled'
        let url = firstVideo.url
        let durasi = firstVideo.timestamp || 'Unknown'
        let thumb = firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg'

        // ambil data mp3
        let hasil = await ytmp3(url)
        if (!hasil?.download?.url) throw new Error("Download link not found")

        await Alice.sendMessage(m.chat, {
            audio: { url: hasil.download.url },
            mimetype: 'audio/mpeg',
            fileName: hasil.download.filename || `${title}.mp3`,
            caption: `🎶 *${title}*\n⏱️ Durasi: ${durasi}\n📥 Source: Youtube`,
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: `Durasi: ${durasi}`,
                    thumbnailUrl: thumb,
                    sourceUrl: url,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })

    } catch (e) {
        console.log(e)
        await Alice.sendMessage(m.chat, { react: { text: '🚫', key: m.key } })
        reply(`Gagal mengambil mp3: ${e.message}`)
    }
}
break;


case 'ytmp4': {
  if (isBan) return XRB()
  await XReaction()

  const yt = {
    get baseUrl() {
      return { origin: 'https://ssvid.net' }
    },
    get baseHeaders() {
      return {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': this.baseUrl.origin,
        'referer': this.baseUrl.origin + '/youtube-to-mp3'
      }
    },
    validateFormat(userFormat) {
      const validFormat = ['360p', '720p', '1080p']
      if (!validFormat.includes(userFormat)) throw Error(`invalid format!. available formats: ${validFormat.join(', ')}`)
    },
    handleFormat(userFormat, searchJson) {
      this.validateFormat(userFormat)
      let result
      const allFormats = Object.entries(searchJson.links.mp4)
      let selectedFormat = userFormat
      const quality = allFormats.map(v => v[1].q).filter(v => /\d+p/.test(v)).map(v => parseInt(v)).sort((a, b) => b - a).map(v => v + 'p')
      if (!quality.includes(userFormat)) selectedFormat = quality[0]
      const find = allFormats.find(v => v[1].q == selectedFormat)
      result = find?.[1]?.k
      if (!result) throw Error(`${userFormat} gak ada`)
      return result
    },
    hit: async function(path, payload) {
      try {
        const body = new URLSearchParams(payload)
        const r = await fetch(`${this.baseUrl.origin}${path}`, { method: 'POST', headers: this.baseHeaders, body })
        if (!r.ok) throw Error(`${r.status} ${r.statusText}\n${await r.text()}`)
        return await r.json()
      } catch (e) {
        throw Error(`${path}\n${e.message}`)
      }
    },
    download: async function(queryOrYtUrl, userFormat='720p') {
      this.validateFormat(userFormat)
      let search = await this.hit('/api/ajax/search', { query: queryOrYtUrl, cf_token:'', vt:'youtube' })
      if (search.p=='search') {
        if (!search?.items?.length) throw Error(`hasil pencarian ${queryOrYtUrl} tidak ada`)
        const { v } = search.items[0]
        const videoUrl = 'https://www.youtube.com/watch?v='+v
        search = await this.hit('/api/ajax/search', { query: videoUrl, cf_token:'', vt:'youtube' })
      }
      const vid = search.vid
      const k = this.handleFormat(userFormat, search)
      const convert = await this.hit('/api/ajax/convert', { k, vid })
      if (convert.c_status=='CONVERTING') {
        let convert2
        const limit = 5
        let attempt = 0
        do {
          attempt++
          convert2 = await this.hit('/api/convert/check?hl=en', { vid, b_id: convert.b_id })
          if (convert2.c_status=='CONVERTED') return convert2
          await new Promise(r=>setTimeout(r,5000))
        } while (attempt<limit && convert2.c_status=='CONVERTING')
        throw Error('file belum siap / status belum diketahui')
      } else return convert
    }
  }

  try {
    if (!text) throw Error('Masukin url youtube')
    let res = await yt.download(text, '720p')

    await Alice.sendMessage(
      m.chat,
      { video: { url: res.dlink }, mimetype: 'video/mp4' },
      { quoted: m }
    )

  } catch (err) {
    reply(`Eror kak : ${err.message}`)
  }
}
break;

    }
  }
};

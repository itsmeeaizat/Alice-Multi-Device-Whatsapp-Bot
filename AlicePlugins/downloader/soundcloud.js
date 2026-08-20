// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['soundcloud-download', 'soundcloud-search', 'soundcloud-play', 'playsc'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, AliceCmd, axios, body, command, fetch, isBan, m, prefix, q, quoted, reply, text } = context;

    switch (command) {
case 'soundcloud-download': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Ex? ${AliceCmd} https://soundcloud.com/xxxxxxx/xxxx/xxx`);
 
  try {
 
    const res = await fetch(`https://zenz.biz.id/downloader/SoundCloud?url=${encodeURIComponent(text)}`);
    const json = await res.json();
 
    if (!json.status || !json.audio_url) {
      return reply('pastiin url SoundCloud lu bener ya dek');
    }
 
    const caption = `
🎵 *Judul:* ${json.title}
👤 *Author:* ${json.author}
🕒 *Durasi:* ${json.duration}
🔗 *Source:* ${json.source_url}
`.trim();
 
    await Alice.sendMessage(m.chat, {
      audio: { url: json.audio_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${json.title}.mp3`,
      contextInfo: {
        externalAdreply: {
          title: json.title,
          body: `Author: ${json.author}`,
          thumbnailUrl: json.thumbnail,
          mediaType: 2,
          mediaUrl: json.source_url,
          sourceUrl: json.source_url,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
 
    await reply(caption);
 
  } catch (err) {
    console.error(err);
    reply('eror nih bre.');
  }
};
break;


case 'soundcloud-search': {
if (isBan) return XRB()
await XReaction()
  const cache = { version: '', id: '' }

  async function getClientID() {
    const { data: html } = await axios.get('https://soundcloud.com/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Exonity/1.0' }
    })

    const version = html.match(/<script>window\.__sc_version="(\d{10})"<\/script>/)?.[1]
    if (!version) return

    if (cache.version === version) return cache.id

    const scriptMatches = [...html.matchAll(/<script.*?src="(https:\/\/a-v2\.sndcdn\.com\/assets\/[^"]+)"/g)]
    for (const [, scriptUrl] of scriptMatches) {
      const { data: js } = await axios.get(scriptUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Exonity/1.0' }
      })
      const idMatch = js.match(/client_id:"([a-zA-Z0-9]{32})"/)
      if (idMatch) {
        cache.version = version
        cache.id = idMatch[1]
        return idMatch[1]
      }
    }
  }

  function formatDuration(ms) {
    const sec = Math.floor(ms / 1000)
    const min = Math.floor(sec / 60)
    const sisa = sec % 60
    return `${min}:${sisa.toString().padStart(2, '0')}`
  }

  function formatNumber(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
    return n.toString()
  }

  function formatDate(dateStr) {
    if (!dateStr) return null
    const d = new Date(dateStr)
    return d.toISOString().split('T')[0]
  }

  try {
    if (!text) return reply(`Ex? : ${AliceCmd} dj stecu x nana buang muka`)
    
    const client_id = await getClientID()

    const { data } = await axios.get('https://api-v2.soundcloud.com/search/tracks', {
      params: { q: text, client_id, limit: 10 },
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Exonity/1.0' }
    })

    const results = data.collection.map(track => `
*°${track.title}*
Author : ${track.user.username}
Durasi : ${formatDuration(track.full_duration)}
Like : ${formatNumber(track.likes_count || 0)}
Play : ${formatNumber(track.playback_count || 0)}
Rilis : ${formatDate(track.release_date || track.created_at)}
Link : ${track.permalink_url}
`).join('\n')

    await Alice.sendMessage(m.chat, { 
      image: { url: data.collection[0]?.artwork_url }, 
      caption: results 
    }, { quoted: m })

  } catch (e) {
    reply(e.message)
  }
}
break;


case 'soundcloud-play':
case 'playsc': {
if (isBan) return XRB()
await XReaction()
 if (!text) return reply(`Silakan berikan judul lagu.\n\n*Contoh:* ${prefix + command} Avenged Sevenfold Dear God`);
 
 try {
 const searchUrl = `https://xyro.site/search/soundcloud?q=${encodeURIComponent(text)}`;
 const searchResponse = await fetchJson(searchUrl);

 if (!searchResponse.status || searchResponse.result.length === 0) {
 await react('❌');
 return reply(`❌ Maaf, lagu dengan judul "${text}" tidak dapat ditemukan.`);
 }

 const songDetails = searchResponse.result[0]; 
 const downloadApiUrl = `https://xyro.site/download/soundcloud?url=${encodeURIComponent(songDetails.url)}`;
 const downloadResponse = await fetchJson(downloadApiUrl);

 if (!downloadResponse.status || !downloadResponse.result.download_url) {
 await react('❌');
 return reply('❌ Gagal mendapatkan link unduhan untuk lagu ini. Coba lagi nanti.');
 }

 const audioUrl = downloadResponse.result.download_url;

 const caption = `
🥳 *LAGU SEDANG DIPUTAR!* 🎉

📀 *Judul:* ${songDetails.title}
🎤 *Artis:* ${songDetails.author.name}
⏰ *Durasi:* ${songDetails.duration}
👀 *Diputar:* ${songDetails.plays}
💖 *Suka:* ${songDetails.likes}
🗓️ *Tanggal Rilis:* ${songDetails.release_date}

⏬ *File audio akan segera dikirim... Sabar ya!* 🙏
`;

 // Mengirim pesan informasi dengan gambar thumbnail
 await Alice.sendMessage(m.chat, {
 image: { url: songDetails.thumbnail },
 caption: caption
 }, { quoted: m });
 
 // Mengirim file audio secara terpisah
 await Alice.sendMessage(m.chat, {
 audio: { url: audioUrl },
 mimetype: 'audio/mpeg',
 // Menambahkan ptt: true jika ingin dikirim sebagai Voice Note
 // ptt: true 
 }, { quoted: m });

 } catch (error) {
 console.error('Error pada perintah play:', error);
 await react('❌'); // Memberi reaksi gagal
 reply('Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi.');
 }
}
break;

    }
  }
};

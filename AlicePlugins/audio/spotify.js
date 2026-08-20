// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['spotify-download', 'spdown', 'spotifydown', 'spotifydl', 'buatlagu', 'searchspotify', 'spotifysearch', 'spotifys', 'ssp'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'spotify-download':

break;

case 'spdown':

break;

case 'spotifydown':

break;

case 'spotifydl': {
    if (isBan) return XRB();
    await XReaction();
    if (!text) return reply(`Example: ${prefix}spotifydown url_spotify`);

    try {
        const axios = require('axios');
        const { data } = await axios.get(
            `https://aliceeapis.vercel.app/downloader/spotify?url=${encodeURIComponent(text)}&apikey=${global.api.alice}`
        );

        if (data?.status && data?.result) {
            const song = data.result;
            const dlUrl = song.download_url; // ✅ ambil dari dalam result

            let caption = `*🎶 SPOTIFY DOWNLOADER*\n\n`;
            caption += `◦ *Judul* : ${song.name || '-'}\n`;
            caption += `◦ *Artis* : ${(song.artists && song.artists[0]?.name) || '-'}\n`;
            caption += `◦ *Durasi* : ${song.duration_ms ? 
                `${Math.floor(song.duration_ms / 60000)}:${String(Math.floor((song.duration_ms % 60000) / 1000)).padStart(2, '0')}` 
                : '-'}\n`;
            caption += `◦ *Spotify* : ${song.external_urls?.spotify || '-'}\n`;
            caption += `◦ *Status* : ✅ Berhasil\n`;

            // cover album
            if (song.album?.images?.length) {
                await Alice.sendMessage(m.chat, { 
                    image: { url: song.album.images[0].url }, 
                    caption: caption 
                }, { quoted: m });
            } else {
                await Alice.sendMessage(m.chat, { text: caption }, { quoted: m });
            }

            // audio file
            if (dlUrl) {
                let safeName = (song.name || "unknown").replace(/[\\/:*?"<>|]/g, "");
                await Alice.sendMessage(m.chat, {
                    audio: { url: dlUrl },
                    mimetype: 'audio/mpeg',
                    fileName: `${safeName}.mp3`
                }, { quoted: m });
            } else {
                reply("❌ Download URL tidak ditemukan di result!");
            }

        } else {
            reply(`❌ API tidak memberi hasil!\n\nResponse: ${JSON.stringify(data, null, 2)}`);
        }
    } catch (error) {
        console.error(error);
        reply(`❌ Error: ${error.message}`);
    }
}
break;

case 'buatlagu': {
if (!isPrem) return XRP();
 if (!text) return reply(`❌ Contoh:\n${prefix + command} lagu sedih berbahasa Indonesia, tentang kisah cinta`);

 const axios = require("axios");
 const { v4: uuidv4 } = require("uuid");

 function randomHex(length) {
 const chars = "abcdef0123456789";
 return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
 }

 function gieneticTrace() {
 return `${randomHex(32)}-${randomHex(16)}`;
 }

 // login otomatis
 async function login(deviceId) {
 const res = await axios.post("https://api.sunora.mavtao.com/api/auth/login", {
 device_id: deviceId
 }, {
 headers: {
 "user-agent": "Dart/3.4 (gienetic_build)",
 "version": "2.2.2",
 "accept-encoding": "gzip",
 "content-type": "application/json",
 "buildnumber": "105",
 "platform": "android",
 "sentry-trace": gieneticTrace()
 }
 });
 return res.data?.data?.token || null;
 }

 // cek status generate
 async function polling(xAuth, maxAttempts = 20, delayMs = 15000) {
 for (let attempt = 1; attempt <= maxAttempts; attempt++) {
 try {
 const res = await axios.get("https://api.sunora.mavtao.com/api/music/music_page?page=1&pagesize=50", {
 headers: {
 "user-agent": "Dart/3.4 (gienetic_build)",
 "version": "2.2.2",
 "accept-encoding": "gzip",
 "x-auth": xAuth,
 "buildnumber": "105",
 "platform": "android",
 "sentry-trace": gieneticTrace()
 }
 });

 const records = res.data?.data?.records || [];
 const doneSongs = records.filter(r => r.status === "complete");

 if (doneSongs.length > 0) {
 return doneSongs[0]; // ambil 1 lagu aja
 }
 } catch (err) {
 console.error("⚠️ Polling error:", err.response?.data || err.message);
 }
 await new Promise(r => setTimeout(r, delayMs));
 }
 return null;
 }

 // mulai generate
 async function generateSong(prompt) {
 const deviceId = uuidv4();
 const token = await login(deviceId);
 if (!token) throw new Error("⚠️ Error: gagal login ke API.");

 await axios.post("https://api.sunora.mavtao.com/api/music/advanced_custom_generate", {
 description: prompt,
 instrumental_only: false
 }, {
 headers: {
 "user-agent": "Dart/3.4 (gienetic_build)",
 "version": "2.2.2",
 "accept-encoding": "gzip",
 "x-auth": token,
 "content-type": "application/json",
 "buildnumber": "105",
 "platform": "android",
 "sentry-trace": gieneticTrace()
 }
 });

 return await polling(token);
 }

 try {
 reply(`🎶 Lagi bikin lagu untuk prompt:\n\n"${text}"\n⏳ Mohon tunggu sekitar 2-3 menit...`);
 const result = await generateSong(text);

 if (!result) return reply("❌ Gagal generate lagu, coba lagi nanti.");

 await Alice.sendMessage(m.chat, {
 audio: { url: result.audio_url },
 mimetype: 'audio/mpeg',
 ptt: false
 }, { quoted: m });

 reply(`✅ Lagu berhasil dibuat!\n\n🎵 Judul: ${result.title}\n📌 Prompt: ${result.meta_prompt || text}\n🔗 Audio: ${result.audio_url}`);
 } catch (e) {
 console.error(e);
 reply("❌ Error saat generate lagu, coba ulang lagi.");
 }
}
break

case 'searchspotify':
case 'spotifysearch':
case 'spotifys':
case 'ssp': {
    if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Example: ${AliceCmd} judul lagu`);
  
  try {
    let api = await fetch(`https://api-ghostx.biz.id/api/search/spotifysearch?q=${text}`);
    let data = await api.json();
    
    if (!data.status) return reply('Search failed! Try again later.');
    
    let hasil = `*HASIL PENCARIAN SPOTIFY*\n\n`;
    for (let i = 0; i < Math.min(10, data.result.length); i++) {
      let lagu = data.result[i];
      hasil += `*${i + 1}.* ${lagu.trackName}\n`;
      hasil += `*Artis* : ${lagu.artistName}\n`;
      hasil += `*URL* : ${lagu.externalUrl}\n\n`;
    }
    hasil += `Ketik ${prefix}spotify-download <url> untuk download music Spotify!`;
    
    await Alice.sendMessage(m.chat, { text: hasil });
  } catch (e) {
    console.log(e);
    reply('Error occurred while searching!');
  }
}
break
    }
  }
};

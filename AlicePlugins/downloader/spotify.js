// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['spotify', 'spotifyplay'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, axios, command, isBan, m, prefix, q, quoted, reply, text } = context;

    switch (command) {
case 'spotify':
case 'spotifyplay': {
    if (isBan) return XRB();
    await XReaction();
    
    if (!text) return reply(`Masukkan judul lagu!\n\nContoh: ${prefix}${command} Laskar Pelangi`);
    

    try {
        // Endpoint AliceeApis
        const apiUrl = `https://aliceeapis.vercel.app/search/spotifyplay?q=${encodeURIComponent(text)}&apikey=${global.api.alice}`;
        const { data: response } = await axios.get(apiUrl);

        if (!response.status || !response.data) {
            throw new Error('Lagu tidak ditemukan atau API bermasalah.');
        }

        const song = response.data;

        const caption = `
🎵 *Spotify Play* 🎵

🎶 *Judul:* ${song.title}
🎤 *Artis:* ${song.artist}
⏰ *Durasi:* ${song.duration}
📈 *Popularitas:* ${song.popularity}
        `.trim();

        // Kirim cover + info
        await Alice.sendMessage(m.chat, {
            image: { url: song.thumbnail },
            caption: caption
        }, { quoted: m });

        // Kirim audio (stream dari API AliceeApis)
        await Alice.sendMessage(m.chat, {
            audio: { url: `https://aliceeapis.vercel.app/search/spotifyplay?q=${encodeURIComponent(text)}&type=mp3&apikey=aliceeapis` },
            mimetype: 'audio/mpeg',
            fileName: `${song.title}.mp3`
        }, { quoted: m });

    } catch (error) {
        console.error('SpotifyPlay Error:', error);
        reply(`❌ Terjadi kesalahan saat memutar lagu.\n\n*Pesan:* ${error.message}`);
    }
}
break;

    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['narrator', 'narrate', 'mood'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'narrator': {
  let teks = `🎙️ *Narator Berbisik...*\n\n“Langkahmu baru saja dimulai. Dunia menantimu.”\n\nGunakan *storyquest* untuk menjelajah kisahmu.`
  return reply(teks)
}

case 'narrate': {
    if (!text) return reply('Masukkan teks narasi yang ingin dibacakan.\n\nContoh:\nnarrate Dunia ini dulunya dipenuhi keajaiban...');
    
    let ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=id&client=tw-ob`;
    
    await Alice.sendMessage(m.chat, {
        audio: { url: ttsUrl },
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            externalAdreply: {
                title: `🎙️ Narasi Suara Aktif`,
                body: `📜 ${text.length > 40 ? text.slice(0, 40) + '...' : text}`,
                mediaType: 2,
                thumbnailUrl: 'https://i.ibb.co/YTk8NZL/narrate-thumb.jpg', // ganti dengan AliceMedia/image/Alice-1.jpg jika pakai lokal
                sourceUrl: ''
            }
        }
    }, { quoted: m });
}
break;

case 'mood': {
  let teksMood = args.join(" ");
  if (!teksMood && m.quoted?.text) teksMood = m.quoted.text;
  if (!teksMood) return reply("Ketik sesuatu atau reply chat seseorang untuk mendeteksi mood-nya!");

  let moodList = [
    { keyword: ['bosan', 'gabut', 'jenuh', 'bete'], mood: 'Bosan 😐', saran: 'Coba cari hiburan ringan. Mau tebak-tebakan atau denger cerita lucu?' },
    { keyword: ['sedih', 'kecewa', 'hampa', 'patah', 'menangis', 'nangis'], mood: 'Sedih 😢', saran: 'Nggak apa-apa kok merasa sedih. Mau aku temani dengan cerita atau lagu penenang?' },
    { keyword: ['senang', 'bahagia', 'hepi', 'gembira', 'ceria'], mood: 'Bahagia 😊', saran: 'Wah seru! Bagi semangatnya dong, atau mau share cerita kamu?' },
    { keyword: ['marah', 'kesal', 'emosi', 'ngamuk'], mood: 'Marah 😠', saran: 'Tarik napas dulu ya... mau aku bantu tenangkan pikiran lewat cerita lucu atau game ringan?' },
    { keyword: ['malas', 'mager', 'ngantuk'], mood: 'Lelah / Mager 😴', saran: 'Kayaknya butuh recharge. Coba tidur sebentar atau dengerin lagu tenang.' },
    { keyword: ['semangat', 'motivasi', 'on fire'], mood: 'Termotivasi 🔥', saran: 'Waktunya action! Mau aku bantu kasih tantangan kecil atau saran aktivitas?' },
    { keyword: ['takut', 'cemas', 'khawatir', 'panik'], mood: 'Cemas 😟', saran: 'Tenang, kamu nggak sendiri. Mau dengar kata-kata penyemangat?' },
    { keyword: ['rindu', 'kangen'], mood: 'Rindu 💔', saran: 'Kadang rindu memang berat. Mau tulis surat virtual atau kirim pesan ke dia?' },
    { keyword: ['jatuh cinta', 'sayang', 'baper', 'geer'], mood: 'Jatuh Cinta 💘', saran: 'Aduh manis banget~ Mau aku bantu kirim pesan cinta rahasia?' },
  ];

  teksMood = teksMood.toLowerCase();
  let hasil = moodList.find(m => m.keyword.some(k => teksMood.includes(k)));

  if (!hasil) return reply(`Mood kamu agak sulit ditebak 😅\nCoba gunakan kata-kata yang lebih jelas atau langsung cerita aja~`);

  let teksBalasan = `✨ *Deteksi Mood: ${hasil.mood}*\n\n💬 *Kamu nulis:* _${teksMood}_\n📌 *Saran:* ${hasil.saran}`;
  reply(teksBalasan);
}
break;
    }
  }
};

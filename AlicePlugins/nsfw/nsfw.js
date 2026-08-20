// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['x-vision', 'removeclothes', 'gimg18+', 'dalle3', 'hentais', 'hentai'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'x-vision': {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${AliceCmd} Nomor`)
let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, 50)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `Done Send Bug To Target\n*© Aizat 2025*`})
}
break

case 'removeclothes': {
  if (!isPrem) return XRP();
  await XReaction();
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (!/image\/(jpe?g|png)/.test(mime)) {
      return reply('⚠️ Reply gambar dengan command : .removeclothes');
    }

    const imgBuffer = await q.download();
    if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

    reply('🪄 Memproses gambar, tunggu sebentar...');

    // Upload ke CDN untuk mendapatkan URL
    const form = new FormData();
    form.append("cdnFile", imgBuffer, "image.jpg");

    const upload = await axios.post("https://aliceecdn.vercel.app/upload", form, {
      headers: { ...form.getHeaders() },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    if (!upload.data?.url) return reply("❌ Gagal upload gambar ke CDN");

    const fileUrl = upload.data.url;

    // Panggil API remove clothes VelynAPIs dengan API key dari global
    const removeRes = await axios.get(
      `https://www.velyn.mom/api/tools/remove?url=${encodeURIComponent(fileUrl)}&apikey=${global.api.velyn}`
    );

    // Response berupa JSON dengan URL hasil, bukan gambar langsung
    if (!removeRes.data?.status || !removeRes.data?.result?.url) {
      return reply('❌ API gagal memproses gambar');
    }

    const resultUrl = removeRes.data.result.url;

    // Download gambar hasil dari URL yang diberikan
    const imageResponse = await axios.get(resultUrl, {
      responseType: 'arraybuffer'
    });

    // Kirim hasil ke chat
    await Alice.sendMessage(m.chat, {
      image: Buffer.from(imageResponse.data),
      caption: '✅ Pakaian berhasil dihapus!'
    }, { quoted: m });

  } catch (e) {
    console.error("REMOVE-CLOTHES ERROR:", e.response?.data || e.message);
    reply(`🚨 Error: ${e.message}`);
  }
}
break

case 'gimg18+': {
    if (!isPrem) return XRP();
    await XReaction();
    try {
        if (!text) return reply(`⚠️ Masukkan prompt.\nContoh: .${command} neko girl`);

        const API_URL = 'https://velyn.mom/api/ai/arting';
        const API_KEY = 'velynapis';

        reply('🎨 Sedang membuat gambar...');

        let res = await axios.get(
            `${API_URL}?apikey=${API_KEY}&prompt=${encodeURIComponent(text)}`
        );

        if (!res.data || !res.data.success) {
            return reply("❌ API tidak mengembalikan hasil valid");
        }

        // Ambil hanya gambar pertama
        let images = res.data.results;
        if (!Array.isArray(images) || images.length === 0) {
            return reply("❌ API tidak mengembalikan gambar.");
        }

        let url = images[0]; // ambil gambar pertama
        let imgRes = await axios.get(url, { responseType: 'arraybuffer' });
        let buffer = Buffer.from(imgRes.data);

        await Alice.sendMessage(m.chat, {
            image: buffer,
            caption: `✅ Gambar selesai!\n\n📌 Prompt: *${text}*`
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        reply(`🚨 Eror kak : ${e.message}`);
    }
}
break;

case 'dalle3': {
if (!isPrem) return XRP()
  if(!text) return reply("Harap sertakan promptnya!")
  await await XReaction()
  await Alice.sendMessage(m.chat, { image: { url: apii.xterm.url + "/api/text2img/dalle3?prompt="+text + "&key=" + apii.xterm.key } }, { quoted: m })
}
break

case 'hentais':

break;

case 'hentai': {
if (isBan) return XRB()
await XReaction()
  if (!args.length) return reply(`Masukkan judul yang ingin dicari!\nContoh: ${AliceCmd} hinata`)

async function searchHentai(query) {
  try {
    const { data } = await axios.get("https://hentai.tv/?s=" + encodeURIComponent(query))
    const $ = cheerio.load(data)
    const result = []
    
    $('div.flex > div.crsl-slde').each((i, el) => {
      const thumbnail = $(el).find('img').attr('src')
      const title = $(el).find('a').text().trim()
      const views = $(el).find('p').text().trim()
      const url = $(el).find('a').attr('href')
      result.push({ thumbnail, title, views, url })
    })

    return {
      coder: 'SaaOfc',
      warning: 'failed',
      result
    }
  } catch (err) {
    return { error: 'error', message: err.message }
  }
}

  const res = await searchHentai(args.join(" "))
  if (!res || res.result.length === 0) return reply('Tidak ditemukan!')

  let teks = `*Hasil Pencarian dari Hentai.tv*\n\n`
  for (let i = 0; i < Math.min(5, res.result.length); i++) {
    const x = res.result[i]
    teks += `*${x.title}*\nViews: ${x.views}\nURL: ${x.url}\n\n`
  }

  await Alice.sendMessage(m.chat, {
    text: teks.trim(),
    contextInfo: {
      externalAdreply: {
        title: "Hentai Search",
        body: packname,
        thumbnailUrl: res.result[0]?.thumbnail,
        sourceUrl: res.result[0]?.url,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}
break
    }
  }
};

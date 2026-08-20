// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['bluearchive', 'ba', 'sifat', 'karakter', 'animequote', 'kataanime', 'animexin', 'myanimelist', 'sanime', 'searchanime', 'kuronime', 'infoanime', 'Informationanime', 'informasianime'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'bluearchive':

break;

case 'ba': {
  if (isBan) return XRB()
  await XReaction()

  const API = `https://aliceeapis.vercel.app/random/ba?apikey=${global.api.alice}`
  const MAX_IMG = 15 * 1024 * 1024 // batas 15 MB

  const humanSize = (n=0) => { const u=['B','KB','MB','GB']; let i=0,v=+n; while(v>=1024&&i<u.length-1){v/=1024;i++} return `${v.toFixed(v>=100?0:v>=10?1:2)} ${u[i]}` }
  const extFromCtype = (t='') => (t.split('/')[1] || 'jpg').split(';')[0]

  const when = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
  const caption = `🎮 *Blue Archive Random*\n🕒 ${when}\n🔗 Sumber: https://aliceeapis.vercel.app\n\nKetik *.ba* lagi untuk next.`

  try {
    const res = await axios.get(API, {
      timeout: 20000,
      responseType: 'arraybuffer',
      validateStatus: s => s>=200 && s<400
    })
    const ctype = (res.headers['content-type'] || 'image/jpeg').toLowerCase()
    const length = parseInt(res.headers['content-length'] || '0', 10)
    const buff = Buffer.from(res.data)

    if (length && length > MAX_IMG) {
      await Alice.sendMessage(
        m.chat,
        { document: buff, mimetype: ctype, fileName: `bluearchive.${extFromCtype(ctype)}`, caption: `${caption}\n(📦 dokumen – ${humanSize(length)})` },
        { quoted: m }
      )
    } else {
      await Alice.sendMessage(
        m.chat,
        { image: buff, caption },
        { quoted: m }
      )
    }

  } catch (e) {
    console.error('bluearchive error:', e?.message || e)
    const msg =
      (e?.response?.status === 429) ? '⌛ Terlalu banyak permintaan. Coba sebentar lagi.' :
      (e?.code === 'ECONNABORTED') ? '⌛ Timeout koneksi ke API.' :
      '❌ Gagal mengambil gambar Blue Archive. Coba lagi.'
    return reply(msg)
  }
}
break

case 'sifat':
case 'karakter': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break

case 'animequote': {
  if (isBan) return XRB();
  await XReaction();

  try {
    // 🔗 Panggil API kamu
    let apiUrl = `https://aliceeapis.vercel.app/random/animequote?apikey=${global.api.alice}`;
    let { data } = await axios.get(apiUrl);

    if (!data.status) return reply('Gagal mengambil anime quote!');

    let q = data.result;
    let caption = `[ ANIME QUOTE ]\n\n`;
    caption += `◦ *Character* : ${q.char}\n`;
    caption += `◦ *Anime* : ${q.from_anime}\n`;
    caption += `◦ *Episode* : ${q.episode}\n\n`;
    caption += `_"${q.quote}"_`;

    return Alice.sendMessage(
      m.chat,
      { text: caption },
      { quoted: m }
    );
  } catch (err) {
    console.error('AnimeQuote Error:', err.message);
    reply('Terjadi kesalahan saat mengambil quote anime.');
  }
}
break;

case 'kataanime': {
if (isBan) return XRB()
await XReaction()

await XReaction()
    	try {
//wm senn
		let res = await await fetch("https://katanime.vercel.app/api/getrandom");
		if (!res.ok) throw await res.text();
		let json = await res.json();
//wm senn
		if (!json.result) throw json;
		let data = "";
		for (let i = 0; i < json.result.length; i++) {
			let { id, english, indo, character, anime } = json.result[i];
			data += `_*•.* "${indo}"_\n${character} (${anime})\n\n`;
		}
//wm senn
		reply(data);
	} catch (e) {
		console.log(e);
		reply(msg.error)
	}
//wm senn
};
break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Random Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Search Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'animexin': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) { return reply(`Please provide a keyword or an action (update/detail/search)!\n\nExample:\n${AliceCmd} update`);
    }

    const args = text.split(' ');
    const action = args[0].toLowerCase();
    const query = args.slice(1).join(' ');

    if (action === 'update') {
      reply('Fetching latest anime updates... Please wait...');
      const result = await animexin.animexinUpdate();
      if (result && result.length > 0) {
        let message = '🔍 *Latest Anime Updates* 🔍\n\n';
        result.forEach(anime => {
          message += `📺 *Title*: ${anime.title}\n🔗 *URL*: ${anime.url}\n🖼️ *Image*: ${anime.image}\n🎬 *Episode*: ${anime.episode}\n📦 *Type*: ${anime.type}\n\n`;
        });
        reply(message);
      } else {
        reply('No updates found.');
      }
    } else if (action === 'detail' && query) {
      reply('Fetching anime details... Please wait...');
      const result = await animexin.animexinDetail(query);
      if (result) {
        reply(`🔍 *Anime Details* 🔍\n\n${result}`);
      } else {
        reply('No details found for the provided URL.');
      }
    } else if (action === 'search' && query) {
      reply('Searching for anime... Please wait...');
      const result = await animexin.animexinSearch(query);
      if (result) {
        reply(`🔍 *Search Results* 🔍\n\n${result}`);
      } else {
        reply('No results found for the provided keyword.');
      }
    } else {
      reply(`Invalid command or missing query. Please use the following format:\n\n${AliceCmd} update\n${AliceCmd} detail <URL>\n${AliceCmd} search <keyword>`);
    }
  } catch (error) {
    console.error(error);
    reply('Error: ' + error.message);
  }
};
break

case 'myanimelist': {
  if (!q) return reply(`Example: ${AliceCmd} one piece`)
  let anime = await fetch(`https://api.jikan.moe/v4/anime?q=${q}`)
  let res = await anime.json()
  if (!res.data || res.data.length === 0) return reply('Anime tidak ditemukan!')
  let result = res.data[0]
  let teks = `*${result.title}*\n\n`
  teks += `*Judul Jepang:* ${result.title_japanese || '-'}\n`
  teks += `*Tipe:* ${result.type || '-'}\n`
  teks += `*Episode:* ${result.episodes || '-'}\n`
  teks += `*Status:* ${result.status || '-'}\n`
  teks += `*Tanggal Tayang:* ${result.aired?.string || '-'}\n`
  teks += `*Skor:* ${result.score || '-'}\n`
  teks += `*Produser:* ${(result.producers?.map(p => p.name).join(', ')) || '-'}\n`
  teks += `*Studio:* ${(result.studios?.map(s => s.name).join(', ')) || '-'}\n`
  teks += `*Genre:* ${(result.genres?.map(g => g.name).join(', ')) || '-'}\n`
  teks += `*Durasi:* ${result.duration || '-'}\n`
  teks += `*Rating:* ${result.rating || '-'}\n`
  teks += `\n*Sinopsis:* ${result.synopsis || '-'}\n`
  teks += `\n*Link:* ${result.url}`
  Alice.sendMessage(m.chat, {
    image: { url: result.images.jpg.image_url },
    caption: teks
  }, { quoted: m })
}
break

case 'sanime':

break;

case 'searchanime':

break;

case 'kuronime': {
  if (!q) return reply('🔎 *Silakan masukkan judul anime yang ingin kamu cari.*')

  try {
    const axios = require("axios")
    const cheerio = require("cheerio")
    const url = `https://kuronime.biz/page/1/?s=${encodeURIComponent(q)}`
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const results = []
    $(".listupd article").each((_, el) => {
      const anchor = $(el).find("a")
      const title = anchor.find("h4").text().trim()
      const link = anchor.attr("href")
      const image = anchor.find("img.lazyload").last().attr("data-src")
      const rating = anchor.find("i").text().trim()
      const type = anchor.find(".type").text().trim()
      results.push({ title, link, image, rating, type })
    })
    if (!results.length) return reply('Anime tidak ditemukan, coba kata kunci lain.')
    let message = `Hasil pencarian untuk *${q}*:\n\n`
    results.forEach((anime, index) => {
      message += `*${index + 1}. ${anime.title}*\n`
      message += `   🔗 *Link*: ${anime.link}\n`
      message += `   📊 *Rating*: ${anime.rating}\n`
      message += `   📌 *Type*: ${anime.type}\n\n`
    })
    Alice.sendMessage(m.chat, {
      text: message.trim(),
      contextInfo: {
        externalAdreply: {
          title: "Kuronime Search",
          body: packname,
          thumbnailUrl: results[0]?.image || '',
          sourceUrl: results[0]?.link || '',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
  } catch (err) {
    console.log(err)
    XRR()
  }
}
break

case 'infoanime':

break;

case 'Informationanime':

break;

case 'informasianime': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`masukan judul anime? contoh ${AliceCmd}atri: my dear moments`)
sendReaction("⏳")
await XReaction()

try {
const infoanime = await fetchJson(`https://api.ryzendesu.vip/api/weebs/anime-info?query=${text}`)
let capt = `╭──── *[ ɪɴғᴏ - ᴀɴɪᴍᴇ ]* ──々\n`
capt += `│ =〆 ᴊᴜᴅᴜʟ : ${infoanime.title}\n`
capt += `│ =〆 sᴄᴏʀᴇ : ${infoanime.score}\n`
capt += `│ =〆 ᴍᴇᴍʙᴇʀs : ${infoanime.members}\n`
capt += `│ =〆 sᴛᴀᴛᴜs : ${infoanime.status}\n`
capt += `│ =〆 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${infoanime.synopsis}\n`
capt += `│ =〆 ғᴀᴠᴏʀɪᴛᴇ : ${infoanime.favorites}\n`
capt += `│ =〆 ᴜʀʟ : ${infoanime.url}\n`
capt += `╰─々`
await Alice.sendMessage(m.chat, {
image: { url: infoanime.images.jpg.large_image_url },
caption: capt,
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: channel,
newsletterName: `InfoAnime By: ${ownername}`,
serverMessageId: 143
}
}
}, { quoted: m })
} catch (err) {
sendReaction("❌")
}}
break
    }
  }
};

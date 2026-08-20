// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['roleplay', 'venice', 'veniceai', 'aliceai', 'aivelyn', 'velynai', 'muslimai', 'chatevery-where'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'roleplay': {
  initRpgUser(sender, pushname)
  if (!text) {
    reply(`Ketik teks RP-mu. Contoh: *roleplay aku memeluk naga yang terluka...*`)
    break
  }

  reply(`🎭 *${pushname} beraksi:*\n_${text}_`)
  break
}

case 'venice':
case 'veniceai': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Masukkan Pertanyaan`);
try {
const axios = require('axios');
const { data } = await axios.request({
method: 'POST',
url: 'https://outerface.venice.ai/api/inference/chat',
headers: {
accept: '*/*',
'content-type': 'application/json',
origin: 'https://venice.ai',
referer: 'https://venice.ai/',
'user-agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
'x-venice-version': 'interface@20250523.214528+393d253'
},
data: JSON.stringify({
requestId: 'nekorinn',
modelId: 'dolphin-3.0-mistral-24b',
prompt: [
{
content: text,
role: 'user'
}
],
systemPrompt: '',
conversationType: 'text',
temperature: 0.8,
webEnabled: true,
topP: 0.9,
isCharacter: false,
clientProcessingTime: 15
})
});
const chunks = data.split('\n').filter(v => v).map(v => JSON.parse(v));
const hasil = chunks.map(v => v.content).join('');
Alice.sendMessage(m.chat, { text: hasil }, { quoted: m });
} catch (e) {
console.error(e.message);
Alice.sendMessage(m.chat, { text: 'Maaf, tidak ada hasil dari Venice.' }, { quoted: m });
}
}
break

case 'aliceai': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Tulis sesuatu setelah perintah ini.\n\nContoh:\n${AliceCmd} hai apa kabar?\n${AliceCmd} https://vt.tiktok.com/ZSFxYcCdr/\n${AliceCmd} buatkan gambar wanita`)

    let regexTikTok = /(https?:\/\/)?(www\.|vm\.|vt\.)?tiktok\.com\/[^\s]+/gi
    let isTikTok = regexTikTok.test(text)
    let isImageReq = /(gambar|buatkan.*gambar|bikin.*gambar|buat.*gambar)/i.test(text)

    if (isTikTok) {
      let link = text.match(regexTikTok)[0]
      let res = await fetch(`https://www.velyn.biz.id/api/downloader/tiktok?url=${encodeURIComponent(link)}`)
      let json = await res.json()

      if (!json?.status || !json?.data?.no_watermark) {
        return reply(`❌ Error\nLogs error : Gagal mengunduh video TikTok.`)
      }

      let prompt = `Buatkan caption menarik untuk video TikTok dengan judul: ${json?.data?.title || 'tanpa judul'}`
      let aiRes = await fetch(`https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(prompt)}`)
      let aiJson = await aiRes.json()

      if (!aiJson?.status || !aiJson?.result) {
        return reply(`❌ Error\nLogs error : Gagal mendapatkan caption dari AI.`)
      }

      await Alice.sendMessage(m.chat, {
        video: { url: json.data.no_watermark },
        caption: aiJson.result.toString()
      }, { quoted: m })

    } else if (isImageReq) {
      let prompt = text
      let res = await fetch(`https://www.velyn.biz.id/api/ai/text2img?prompt=${encodeURIComponent(prompt)}`)
      if (!res.ok) return reply(`❌ Error\nLogs error : Gagal menghubungi layanan gambar.`)

      let buffer = await res.buffer()
      await Alice.sendMessage(m.chat, {
        image: buffer,
        caption: `Berikut hasil gambar untuk prompt:\n*${prompt}*`
      }, { quoted: m })

    } else {
      let prompt = text
      let res = await fetch(`https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(prompt)}`)
      let json = await res.json()

      if (!json?.status || !json?.result) {
        throw `❌ Error\nLogs error : Gagal merespons pesan AI.`
      }

      reply(json.result.toString())
    }

  } catch (e) {
    console.error(e)
    return reply(`❌ Error\nLogs error : ${(e?.message || e).toString()}`)
  }
}
break

case 'aivelyn':

break;

case 'velynai': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    const url = `https://www.velyn.biz.id/api/ai/velyn-1.0-1b?prompt=${encodeURIComponent(text)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const result = data.result || "Maaf, tidak ada jawaban.";

    return reply(result);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    return reply("Maaf, terjadi kesalahan saat menghubungi AI.");
  }
}
break

case 'muslimai': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    const result = await muslimai(text);

    if (result.error) return reply(result.error);

    let sourcesText = result.sources.length > 0 
        ? result.sources.map((src, index) => `${index + 1}. *${src.title}*\n🔗 ${src.url}`).join("\n\n")
        : "Tidak ada sumber yang ditemukan.";

    let responseMessage = `ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ᴍᴜsʟɪᴍᴀɪ\n\n${result.answer}`;

    reply(responseMessage);
} catch (error) {
    console.error("⚠ *Error* :", error);
    reply("Terjadi kesalahan.");
}
}
break;

case 'chatevery-where': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Example: ${AliceCmd} axios`)
async function sanzmd(prompt) {
  const response = await axios({
    method: "POST",
    url: "https://chateverywhere.app/api/chat",
    headers: {
      "Content-Type": "application/json",
      "Cookie": "_ga=GA1.1.34196701.1707462626; _ga_ZYMW9SZKVK=GS1.1.1707462625.1.0.1707462625.60.0.0; ph_phc_9n85Ky3ZOEwVZlg68f8bI3jnOJkaV8oVGGJcoKfXyn1_posthog=%7B%22distinct_id%22%3A%225aa4878d-a9b6-40fb-8345-3d686d655483%22%2C%22%24sesid%22%3A%5B1707462733662%2C%22018d8cb4-0217-79f9-99ac-b77f18f82ac8%22%2C1707462623766%5D%7D",
      Origin: "https://chateverywhere.app",
      Referer: "https://chateverywhere.app/id",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
    },
    data: {
      model: {
        id: "gpt-3.5-turbo-0613",
        name: "GPT-3.5",
        maxLength: 12000,
        tokenLimit: 4000,
      },
      prompt: prompt,
      messages: [{
        pluginId: null,
        content: prompt,
        role: "user"
      },
        {
          pluginId: null,
          content: `${botname} adalah programmer yang berasal dari Sumatera Selatan, Indonesia. Ia adalah seorang yang mengembangkan semua aplikasi.`,
          role: "assistant"
        }]
    }
  })

  return response.data
}
try {
let jut = await sanzmd(text)
reply(`${jut}`)
} catch (error) {
  reply(error.message)
}
}
break
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['codex', 'codexitem', 'chatgpt', 'gpt41-mini', 'openai', 'gptlogic', 'gptturbo', 'gpt-4o'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'codex': {
  reply(`📜 *KODEX ITEM RPG*

- 🗡️ pedang → +atk
- 🛡️ armor → +def
- 🧪 ramuan → pulih HP
- 💀 tulang + kulit → ramuan (via *alchemy*)`)
  break
}

case 'codexitem': {
  reply(`📚 *KODEX ITEM:*\n- Ramuan: +50 HP\n- Kunci: Buka peti\n- Tulang: Bahan alchemy`)
  break
}

case 'chatgpt': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Masukkan Pertanyaan?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
const axios = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'Tidak ada jawaban.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nGagal mengambil jawaban.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        reply(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        reply('Terjadi kesalahan saat mengambil jawaban.');
    }
}
break

case 'gpt41-mini': {
if (isBan) return XRB()
await XReaction()  
const OpenAIPrompt = ``;

const OpenAI = require("openai"); 
const token = process.env.GITHUB_AI_TOKEN || ""; 
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1-mini";

async function openai(userPrompt) {
    const client = new OpenAI({
        baseURL: endpoint,
        apiKey: token,
    });

    const response = await Alice.chat.completions.create({
        messages: [
            { role: "system", content: OpenAIPrompt.trim() }, 
            { role: "user", content: userPrompt }
        ],
        temperature: 1,
        top_p: 1,
        model: model
    });

    return response.choices[0].message.content.replace(/\*\*(.*?)\*\*/g, '*$1*');
}

    if (!text) {
        return reply(`Example: ${AliceCmd} Siapa Jokowi`);
    }

    

    try {
        const hasil = await openai(text);
        reply(hasil);
    } catch (e) {
        console.error(e);
        reply('❌ Maaf, Tsukasa-chan sedang kelelahan... coba lagi nanti ya.');
    }
};
break

case 'openai': {
if (isBan) return XRB()
await XReaction()  
const OpenAIPrompt = `
hallo ${pushname} Ayo perkenalkan dirimu, saya adalah ${botname} dan Model saya Adalah OpenAI GPT - 4.1 ini, sekaligus saya bukan dep ke orang-orang. Maaf puh
`;

const OpenAI = require("openai"); 
const token = process.env.GITHUB_AI_TOKEN || ""; 
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";


async function openai(userPrompt) {
    const client = new OpenAI({
        baseURL: endpoint,
        apiKey: token,
    });

    const response = await Alice.chat.completions.create({
        messages: [
            { role: "system", content: OpenAIPrompt.trim() }, 
            { role: "user", content: userPrompt }
        ],
        temperature: 1,
        top_p: 1,
        model: model
    });

    return response.choices[0].message.content.replace(/\*\*(.*?)\*\*/g, '*$1*');
}

    if (!text) {
        return reply(`Example: ${AliceCmd} Siapa Penemu Sepak Bola`);
    }

    

    try {
        const hasil = await openai(text);
        reply(hasil);
    } catch (e) {
        console.error(e);
        reply('❌ Maaf, Tsukasa-chan sedang kelelahan... coba lagi nanti ya.');
    }
};
break

case 'gptlogic': {
if (isBan) return XRB()
await XReaction()  
    if (!text) return reply(`Example: ${AliceCmd} Siapa Jokowi`);

    try {
        let response = await axios.post("https://chateverywhere.app/api/chat/", {
            "model": {
                "id": "gpt-3.5-turbo-0613",
                "name": "GPT-3.5",
                "maxLength": 12000,
                "tokenLimit": 4000,
                "completionTokenLimit": 2500,
                "deploymentName": "gpt-35"
            },
            "messages": [
                {
                    "pluginId": null,
                    "content": text,
                    "role": "user"
                }
            ],
            "prompt": "Kamu adalah AI yang membantu pengguna dalam menjawab pertanyaan dengan akurat.",
            "temperature": 0.5
        }, {
            headers: {
                "Accept": "/*/",
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
            }
        });

        let result = response.data;
        Alice.sendMessage(m.chat, { text: result }, { quoted: m });
    } catch (error) {
        console.error("Error fetching data:", error);
        Alice.sendMessage(m.chat, { text: "Terjadi kesalahan saat memproses permintaan." }, { quoted: m });
    }
};
break

case 'gptturbo': {
if (isBan) return XRB()
await XReaction()
async function gptturbo(query) {
    const apiUrl = `https://restapii.rioooxdzz.web.id/api/gptturbo?message=${encodeURIComponent(query)}`;
 
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
            }
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
 
        const responseJson = await response.json();
         if (responseJson && responseJson.data.response) {
            return responseJson.data.response;
        } else {
            return "Tidak ada pesan dalam response.";
        }
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return "Gagal mendapatkan respons dari server.";
    }
}
 
if (!text) return reply(`Contoh:\n${alice}${command} Halo?`);
let gpiti = await gptturbo(text);
let turbo = `Title : ${text}\n\nMessage : ${gpiti}\n`;
await Alice.sendMessage(m.chat, {
    text: "⬣───「 *G P T T U R B O* 」───⬣" + "\n\n" + turbo,
    contextInfo: {
      externalAdreply: {  
        title: "GPT - TURBO",
        body: '',
        thumbnailUrl: "https://pomf2.lain.la/f/jzv6iqu.jpg",
        sourceUrl: null,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
}
break

case 'gpt-4o': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh:\n${alice}${command} Apa itu chatgpt`);

  async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://api.siputzx.my.id/', {
        content,
        model,
        headers: {
                'Authorization': `Bearer ${token}`
                 }
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  fetchWithModel(text, 'gpt-4o', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      reply(textl);
    })
    .catch(error => console.error(error));
  break;
}
    }
  }
};

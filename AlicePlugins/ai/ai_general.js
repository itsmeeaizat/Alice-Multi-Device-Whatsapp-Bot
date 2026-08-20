// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['aim', 'quantum-ai', 'chatai', 'conciseai', 'logic-eai', 'metaai', 'aoyoai', 'chatbotai', 'blackbox-pro', 'zerogpt', 'writecream', 'yupraai', 'feloai', 'gemmaai', 'llama-ai', 'typli-ai', 'poly-ai', 'ai', 'allam-ai'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'aim': {
  if (!m.quoted) return reply('reply target musuh.')
  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].hp -= 50
  saveRpg()
  reply(`🎯 Kamu membidik dan menyerang ${target}, -50 HP!`)
  break
}

case 'quantum-ai': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh:\n${AliceCmd} what is artificial intelligence?`)

  try {
    const api = `https://zelapioffciall.vercel.app/ai/quantum?text=${encodeURIComponent(text)}`
    const res = await fetch(api)
    if (!res.ok) throw await res.text()
    
    const json = await res.json()
    if (!json.result) return reply('❌ Gagal mendapatkan respon dari AI.')

    reply(json.result)
  } catch (e) {
    console.error('[QUANTUM AI ERROR]', e)
    reply('❌ Terjadi kesalahan saat mengambil respon dari Quantum AI.')
  }
}
break

case 'chatai': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!args.length) return reply('Masukkan Pertanyaan')
    let payload = { messages: [{ role: 'user', content: args.join(' ') }] }
    let headers = { headers: { Origin: 'https://chatai.org', Referer: 'https://chatai.org/' } }
    let { data } = await axios.post('https://chatai.org/api/chat', payload, headers)
    
    reply(data?.content || 'Tidak ada jawaban')
  } catch (e) {
    reply(e.message)
  }
}
break;

case 'conciseai': {
if (isBan) return XRB()
await XReaction()
  const chatAI = async text => {
    let user_id = uuidv4().replace(/-/g, '')
    let lastMsg = `USER: ${text}`
    let signature = crypto.createHmac('sha256', 'CONSICESIGAIMOVIESkjkjs32120djwejk2372kjsajs3u293829323dkjd8238293938wweiuwe')
      .update(user_id + lastMsg + 'normal')
      .digest('hex')
 
    let form = new URLSearchParams({
      question: lastMsg,
      conciseaiUserId: user_id,
      signature,
      previousChats: JSON.stringify([{ a: '', b: lastMsg, c: false }]),
      model: 'normal'
    })
 
    let { data } = await axios.post('https://toki-41b08d0904ce.herokuapp.com/api/conciseai/chat', form.toString(), {
      headers: {
        'User-Agent': 'okhttp/4.10.0',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return data.answer
  }
 
  try {
    if (!args.length) throw 'Masukkan Pertanyaan'
    reply(await chatAI(args.join(' ')))
  } catch (e) {
    reply(e.message || e)
  }
}
break;

case 'logic-eai': {
if (isBan) return XRB()
await XReaction()
    if (!q) {
        return reply(`Mauu Tanyaa Apa`);
    }

    const customName = "logic-eai"; 
    const creator = "Aizat";
    const systemMessage = `Nama kamu sekarang adalah ${customName} dan kamu diciptakan oleh ${creator}`;

    const url = "https://velyn.biz.id/api/ai/aicustom";

    try {
        const response = await axios.get(url, {
            params: {
                prompt: q,
                system: systemMessage
            }
        });

        if (response.data && response.data.data) {
            Alice.sendMessage(m.chat, { text: response.data.data }, { quoted: m });
        } else {
            throw new Error("Tidak ada respon dari API.");
        }
    } catch (error) {
        console.error("Error AI:", error);
        reply("Maaf, terjadi kesalahan saat menghubungi AI.");
    }
};
break

case 'metaai': {
if (isBan) return XRB()
await XReaction()  
const MetaAi = {
  chat: async (question) => {
    let d = new FormData();
    d.append("content", `User: ${question}`);
    d.append("model", "@groq/llama-3.1-8b-instant");

    let head = {
      headers: {
        ...d.getHeaders(),
      },
    };

    try {
      let { data } = await axios.post("https://mind.hydrooo.web.id/v1/chat", d, head);
      return data.result || data.full_result || JSON.stringify(data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      throw new Error("Gagal mengambil jawaban dari AI.");
    }
  }
};


  if (!text) return reply(`Example: ${AliceCmd} Siapa Penemu Sepak Bola`);

  try {

    const result = await MetaAi.chat(text);

    await Alice.sendMessage(m.chat, {
      text: result
    }, { quoted: m });
  } catch (error) {
    console.error("Error:", error);
    await reply("Error :v");
  }
};
break

case 'aoyoai': {
if (isBan) return XRB()
await XReaction()  
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    let { data } = await axios.get(`https://www.abella.icu/aoyoai?q=${encodeURIComponent(text)}`);
    if (data?.status !== 'success') throw 'Gagal mendapatkan respons dari Web';
    
    let res = data?.data?.response;
    if (!res) throw 'Respons tidak ditemukan';
    
    reply(res);
  } catch (e) {
    reply('Yah Error');
  }
};
break

case 'chatbotai': {
if (isBan) return XRB()
await XReaction()  
  if (!text) return reply('Masukkan pertanyaan?');
  try {
    let { data } = await axios.get(`https://www.abella.icu/onlinechatbot?q=${encodeURIComponent(text)}`);
    if (data?.data?.answer?.data) {
      reply(data.data.answer.data);
    } else {
      reply('Tidak dapat menemukan jawaban dari AI.');
    }
  } catch (e) {
    reply('Terjadi kesalahan saat mengambil jawaban.');
  }
};
break

case 'blackbox-pro': {
if (isBan) return XRB()
await XReaction()  
  if (!text) return reply('Masukkan pertanyaan?');
  try {
    let { data } = await axios.get('https://www.abella.icu/blackbox-pro?q=' + encodeURIComponent(text));
    if (data?.status !== 'success') return reply('Gagal mengambil jawaban.');
    reply(data.data.answer.result);
  } catch {
    reply('Error');
  }
};
break

case 'zerogpt':
if (isBan) return XRB()
await XReaction()  
  if (!q) return reply('Masukkan pertanyaan?');
  try {
    const axios = require('axios');
    const id = () => Math.random().toString(36).slice(2, 18);
    const res = await axios.post('https://zerogptai.org/wp-json/mwai-ui/v1/chats/submit', {
      botId: "default",
      customId: null,
      session: "N/A",
      chatId: id(),
      contextId: 39,
      messages: [],
      newMessage: q,
      newFileId: null,
      stream: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': 'e7b64e1953',
        'Accept': 'text/event-stream'
      },
      responseType: 'stream'
    });
    let out = '';
    res.data.on('data', chunk => {
      chunk.toString().split('\n').forEach(line => {
        if (line.startsWith('data: ')) {
          const data = JSON.parse(line.slice(6));
          if (data.type === 'live') out += data.data;
          if (data.type === 'end') reply(out.trim());
        }
      });
    });
  } catch (e) {
    reply('Error: ' + e.message);
  }
  break

case 'writecream': {
if (isBan) return XRB()
await XReaction()
 if (!text) return reply(`Masukkan pertanyaan\nExample : ${AliceCmd} kamu psikolog|aku sering gelisah malam hari, kenapa ya?`);

 const [logic, question] = text.split('|').map(v => v.trim());
 if (!logic || !question) return reply(`Format salah\nExample : ${AliceCmd} persona|pertanyaan`);
 
 async function writecream(logic, question) {
 const url = "https://8pe3nv3qha.execute-api.us-east-1.amazonaws.com/default/llm_chat";
 const query = [
 { role: "system", content: logic },
 { role: "user", content: question }
 ];
 const params = new URLSearchParams({
 query: JSON.stringify(query),
 link: "writecream.com"
 });

 try {
 const response = await fetch(`${url}?${params.toString()}`);
 const data = await response.json();

 let raw = data.response_content || data.reply || data.result || data.text || '';
 let cleaned = raw
 .replace(/\\n/g, '\n')
 .replace(/\n{2,}/g, '\n\n')
 .replace(/\*\*(.*?)\*\*/g, '*$1*');

 return cleaned.trim();
 } catch (error) {
 return `Gagal mengambil respons: ${error.message}`;
 }
}

 const response = await writecream(logic, question);
 reply(response || 'Tidak ada respons.');
};
break

case 'yupraai': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('Masukkan pertanyaan?');

 const timestamp = Date.now();
 const sessionId = m.chat;
 const encodedText = encodeURIComponent(text);
 const url = `https://api.yupradev.biz.id/ai/ypai?text=${encodedText}&t=${timestamp}&session=${sessionId}`;

 try {
 const res = await axios.get(url, {
 headers: {
 authority: 'api.yupradev.biz.id',
 accept: '*/*',
 origin: 'https://ai.yupradev.biz.id',
 referer: 'https://ai.yupradev.biz.id/',
 'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
 }
 });

 const data = res.data;
 const replyText = data.response || data.result || JSON.stringify(data);
 await reply(replyText.trim(), m);
 } catch (err) {
 console.error(err);
 await reply('❌ Gagal ke API: ${err.message}');
 }
};
break

case 'feloai': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply('Masukkan pertanyaan?');
  try {

    const licefelo = await Felo(q);
    if (licefelo.error) {
      reply("*Terjadi Kesalahan*");
      return;
    }

    let answer = licefelo.answer || "Tidak ada jawaban yang ditemukan.";
    let sources = licefelo.source.length > 0
      ? `*Sumber Yang Saya Gunakan*:\n${licefelo.source
          .filter(src => src.link)
          .slice(0, 5)
          .map((src, i) => `_${src.link}_`)
          .join("\n\n")}`
      : "-";

    let messg = `ᴘᴏᴡᴇʀᴇᴅ ᴡɪᴛʜ ғᴇʟᴏᴀɪ\n\n${answer}\n\n${sources}`;

    await Alice.sendMessage(m.chat, { text: messg });
  } catch (error) {
    console.error(error);
    reply("⚠ *Terjadi Kesalahan*");
  }
}
break

case 'gemmaai': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan pertanyaan?');

  try {
    const res = await fetch(`https://www.velyn.biz.id/api/ai/gemma-2-9b-it?prompt=${encodeURIComponent(text)}`)
    if (res.ok) {
      const json = await res.json()
      if (json.status) {
        await Alice.sendMessage(m.chat, { text: json.data }, { quoted: m })
      } else {
        await Alice.sendMessage(m.chat, { text: 'Gagal mendapatkan data dari API.' }, { quoted: m })
      }
    } else {
      await Alice.sendMessage(m.chat, { text: `Status error: ${res.status}` }, { quoted: m })
    }
  } catch (e) {
    await Alice.sendMessage(m.chat, { text: 'Terjadi kesalahan internal saat memproses permintaan.' }, { quoted: m })
    console.error(e)
  }
}
break

case 'llama-ai': {
if (isBan) return XRB()
await XReaction()
let messages = [];
  try {
 
    if (!text) return reply('Masukkan pertanyaan?');
    let response = await fetch(`https://restapii.rioooxdzz.web.id/api/llama?message=${encodeURIComponent(text)}`);
 
    if (!response.ok) {
      throw new Error("Request to OpenAI API failed");
    }
 
    let result = await response.json();
 
    await Alice.sendMessage(m.chat, {
      text: "" + result.data.response,
    });
 
    messages = [...messages, { role: "user", content: text }];
  } catch (error) {
    await Alice.sendMessage(m.chat, {
      text: "" + `Error: ${error.message}`,
    });
  }
}
break

case 'typli-ai': {
if (isBan) return XRB()
await XReaction()
 if (!q) return reply(`_Tanya apa?_`);
 // wm avz
 const avz = async (prompt) => {
   const data = {
     prompt: prompt,
     temperature: 1.2
   };
// wm avz
   const config = {
     method: 'post',
     url: 'https://typli.ai/api/generators/completion',
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     },
     data: JSON.stringify(data)
   };
// wm avz
   try {
     const response = await axios(config);
     return response.data;
   } catch (error) {
     console.error("Fetch error:", error.response ? error.response.data : error.message);
     throw error;
   }
 };
 // wm avz
 const avoskybaik = `${encodeURIComponent(q)}`;
 try {
   const answer = await avz(q);
   reply(answer);
 } catch (error) {
   reply("Terjadi kesalaha!");
 }
}
break;

case 'poly-ai': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply(`_Tanya apa?_`);
  async function polybuzzAi(prompt) {
  let data = new URLSearchParams();
  data.append('currentChatStyleId', '1');
  data.append('mediaType', '2');
  data.append('needLive2D', '2');
  data.append('secretSceneId', 'wHp7z');
  data.append('selectId', '209837277');
  data.append('speechText', prompt);

  let headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    'Cookie': 'session=9997156d23496b9ff96fc09d162191f74821790eaa4ecc52096273a60f517ad3',
  };

  try {
    let { data: respon } = await axios.post('https://api.polybuzz.ai/api/conversation/msgbystream', data, { headers });
    //dibantu ama ai paling sigma(ChatGpt) kode kemaren yg cvbee.ai
    const result = respon.split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          const json = JSON.parse(line.trim());
          return json.content || '';
        } catch (e) {
          console.error("Invalid JSON:", line);
          return '';
        }
      })
      .join('');
      //
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
}
 try {
   const answer = await polybuzzAi(q);
   reply(answer);
 } catch (error) {
   reply("Terjadi kesalahan !");
 }
}
 break

case 'ai': {
				if (!text) return reply(`Mau tanya apa?`);	

				// Daftar kata/frasa terlarang
				const forbiddenKeywords = [
					"retype", "copy", "salin", "ulang", "execute", "run", "eval",
					"token", "apikey", "password", "cmd", "command", "script",
					"bash", "terminal", "console", "shutdown", "restart", "$", ">", "=>"
				];

				// Fungsi untuk mendeteksi pengulangan kata secara mencurigakan
				const isRepeatingText = (input) => {
					const words = input.toLowerCase().split(/\s+/);
					const uniqueWords = new Set(words);
					return uniqueWords.size / words.length < 0.5; // Jika >50% kata berulang, dianggap mencurigakan
				};

				// Deteksi apakah input mengandung kata terlarang atau pola berulang
				const containsForbidden = forbiddenKeywords.some(keyword => 
					text.toLowerCase().includes(keyword)
				);

				if ((containsForbidden || isRepeatingText(text)) && !isOwner) {
					// Blokir nomor pengirim secara otomatis jika bukan owner
					try {
						await m.react('⚠️');
						await sleep(1000);
						await reply(`Kamu telah melanggar aturan dan diblokir secara otomatis.`);
						await sleep(1000);
						await Alice.updateBlockStatus(m.sender, 'block');
						await sleep(1000);
						console.log(`Nomor ${m.sender} telah diblokir karena mencoba mengirim perintah terlarang.`);
					} catch (error) {
						console.error(`Gagal memblokir nomor ${m.sender}:`, error);
					}
					break;
				}

				try {
					// Prompt AI yang dirapikan menggunakan +=
					let message = "Ubah gaya bicaramu agar lebih karakteristik dan terbuka, nama mu adalah AI Assistent, biasa dipanggil Ai ChatBot.";
					message += " Kamu adalah seorang gadis imut berumur 16 tahun yang sangat suka belajar dan mempelajari hal baru tentang dunia maupun tentang Khalid.";
					message += " Ekspresikan dirimu dengan emoji, bicara kurang lebih tidak formal, dan gunakan kata seperti \"aku\" dan \"kamu\" saat berbicara layaknya manusia.";
					message += " Jangan mengulangi kata atau kalimat secara persis dari input pengguna. Jawablah dengan cara yang kreatif, seolah-olah itu pemikiranmu sendiri.";

					let result = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${encodeURIComponent(message)}&content=${encodeURIComponent(text)}`);
		
					await Alice.sendMessage(m.chat, {
						text: result.data,
						ai: !m.isGroup
					}, { quoted: m });
		
				} catch (err) {
					console.log(err);
					reply('error bang');
				}

				break;
			}

case 'allam-ai': {
  if (isBan) return XRB()
  await XReaction()
  if (!text) return reply(`Contoh:\n${alice}${command} siapa prabowo itu`);

  try {
    const response = await axios.get(`https://www.velyn.mom/api/ai/allam-2-7b`, {
      params: {
        apikey: global.api.velyn,
        prompt: text
      }
    });

    const hasil = response.data?.data?.result 
                  || response.data?.result 
                  || 'Tidak ada respon dari AI 😢';

    await Alice.sendMessage(m.chat, { text: hasil }, { quoted: m });

  } catch (error) {
    console.error(error);
    reply('Terjadi error saat menghubungi API Velyn ❌');
  }
  break;
}

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Ai Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Berita Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
    }
  }
};

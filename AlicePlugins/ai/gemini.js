// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['gemini-ai', 'gemini-pro'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'gemini-ai': {
if (isBan) return XRB()
await XReaction()  
    const isQuotedImage = m.quoted && m.quoted.mtype === 'imageMessage';
    const isImage = m.mtype === 'imageMessage';
    const quoted = m.quoted ? m.quoted : m;

    if (isImage || isQuotedImage) {
        try {

            const mediaPath = await Alice.downloadAndSaveMediaMessage(quoted);
            const media = fs.readFileSync(mediaPath);

            const uploadedImageUrl = await uploadImage(media);
            console.log('Gambar berhasil diupload:', uploadedImageUrl);

            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/image`;
            const params = {
                q: 'What is this picture? Please describe it.',
                url: uploadedImageUrl
            };

            const response = await axios.get(apiUrl, { params });
            const description = response.data?.content || 'Gagal mendapatkan deskripsi gambar.';

            await Alice.sendMessage(m.chat, {
                text: `📷 *Deskripsi Gambar:*\n${description}`
            }, { quoted: m });

            fs.unlinkSync(mediaPath);
        } catch (error) {
            console.error('Error deskripsi gambar:', error);
            await Alice.sendMessage(m.chat, {
                text: '❌ Terjadi kesalahan saat memproses gambar.'
            }, { quoted: m });
        }
    } else {
        try {
            if (!text) return reply(`Example: ${AliceCmd} Siapa Jokowi`);

            const apiUrl = `https://gemini-api-5k0h.onrender.com/gemini/chat`;
            const params = { q: text };

            const response = await axios.get(apiUrl, { params });
            const replyText = response.data?.content || 'Gagal mendapatkan respons AI.';

            await Alice.sendMessage(m.chat, {
                text: `🤖 *AI Gemini:*\n${replyText}`
            }, { quoted: m });
        } catch (error) {
            console.error('Error Gemini Chat:', error);
            await Alice.sendMessage(m.chat, {
                text: '❌ Terjadi kesalahan saat memproses permintaan AI.'
            }, { quoted: m });
        }
    }
};
break

case 'gemini-pro': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh:\n${AliceCmd} Apa itu chatgpt`);

async function fetchWithModel(content, model, token) {
    try {
      const response = await axios.post('https://luminai.my.id/', {
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
  fetchWithModel(text, 'gemini-pro', '8be9e34764cd2fc4e6bcfb1bf6a945efe30406573a92d8ef0ec1613dc0e54876')
    .then(data => {
      const textl = data.result;
      reply(textl);
    })
  break;
}
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['deepseek'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'deepseek': {
if (isBan) return XRB()
await XReaction()  

const deepSeekThink = {
  chat: async (question) => {
    let d = new FormData();
    d.append("content", `User: ${question}`);
    d.append("model", "@hf/thebloke/deepseek-coder-6.7b-instruct-awq");

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

  if (!text) return reply(`Example: ${AliceCmd} Siapa Jokowi`);

  try {

    const result = await deepSeekThink.chat(text);

    await Alice.sendMessage(m.chat, {
      text: result
    }, { quoted: m });
  } catch (error) {
    console.error("Error:", error);
    await reply("Error :v");
  }
};
break
    }
  }
};

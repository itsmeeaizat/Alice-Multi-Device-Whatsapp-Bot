// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['ringtone'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      Aizat
    } = context;

if (isBan) return XRB()
await XReaction()      
        {
          if (!text) {
            return reply(`Contoh : ${AliceCmd} black rover`);
          }
          let anutone2 = await ringtone(text);
          let result = anutone2[Math.floor(Math.random() * anutone2.length)];
          Alice.sendMessage(m.chat, {
            audio: {
              url: result.audio
            },
            fileName: result.title + ".mp3",
            mimetype: "audio/mpeg"
          }, {
            quoted: m
          });
        }
  }
};

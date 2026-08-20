// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['txt2anime'],
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

{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Prompt?\n\nContoh : ${AliceCmd} a girl`)
    await XReaction()
    let j = await txt2.anime(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
  }
};

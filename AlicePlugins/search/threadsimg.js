// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['threadsimg'],
  operate: async (context) => {
    const {
      Alice,
      m,
      args,
      text,
      isPrem,
      quoted,
      reply,
      AliceCmd,
      fetchJson
    } = context;

{
if (!isPrem) return XRP()
if (!args || !args[0]) return reply(`Example: ${AliceCmd} https://www.threads.net/t/Cujx6ryoYx6/?igshid=NTc4MTIwNjQ2YQ==`)
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
Alice.sendMessage(m.chat, { image: { url: json.result.image_urls }, caption: 'succes' }, { quoted: m })
}
  }
};

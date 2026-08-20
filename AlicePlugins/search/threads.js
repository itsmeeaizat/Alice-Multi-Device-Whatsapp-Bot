// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['threads'],
  operate: async (context) => {
    const {
      Alice,
      m,
      args,
      text,
      isPrem,
      quoted,
      reply,
      XReaction,
      AliceCmd,
      fetchJson
    } = context;

{
if (!isPrem) return XRP()
if (!args || !args[0]) return reply(`Example: ${AliceCmd} https://www.threads.net/@httpnald_/post/CwWvCFvJr_N/?igshid=NTc4MTIwNjQ2YQ==`)
await XReaction()
let timestamp = speed()
let latensi = speed() - timestamp
const json = await fetchJson(`https://aemt.uk.to/download/threads?url=${text}`)
Alice.sendMessage(m.chat, { video: { url: json.result.videourls[0].download_url }, caption: `🍟 *Fetching* : ${latensi.toFixed(4)} ms` }, { quoted: m })
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['artimimpi', 'tafsirmimpi'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      primbon
    } = context;

{
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['caridoa', 'doa'],
  operate: async (context) => {
    const {
      text,
      q,
      isBan,
      reply,
      XReaction,
      XRB,
      fetchJson
    } = context;

{
if (isBan) return XRB()
await XReaction()
if (!text) return reply('Contoh : .doa Bangun Tidur');
await XReaction()
let alice = await fetchJson(`https://api.autoresbot.com/api/doa?q=${text}`)
let cap = alice.data[0];
let doanya = `*_${cap.doa}_\n${cap.ayat}\n${cap.latin}\nArtinya : ${cap.artinya}"`
await reply(doanya)
}
  }
};

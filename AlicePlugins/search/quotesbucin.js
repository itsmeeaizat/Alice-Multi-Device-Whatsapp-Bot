// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['quotesbucin'],
  operate: async (context) => {
    const {
      isBan,
      reply,
      XReaction,
      XRB,
      fetchJson
    } = context;

{
if (isBan) return XRB()
await XReaction() 
let alice = await fetchJson(`https://api.autoresbot.com/api/random/bucinquote`)
let qutenya = alice.data;
await reply(qutenya)
}
  }
};

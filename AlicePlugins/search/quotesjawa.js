// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['quotesjawa'],
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

await XReaction() 
let alice = await fetchJson(`https://api.autoresbot.com/api/random/jawaquote`)
let qutenya = alice.data;
await reply(qutenya)
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['faktaunik'],
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
let alice = await fetchJson(`https://api.autoresbot.com/api/random/faktaunik`)
let qutenya = alice.data;
await reply(qutenya)
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['quotes'],
  operate: async (context) => {
    const {
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()

await XReaction() 
let alice = await Quotes();
let cap = `
_✨° ${alice.quotes} °_

_🍂${alice.author} ~_`
await reply(cap)
}
  }
};

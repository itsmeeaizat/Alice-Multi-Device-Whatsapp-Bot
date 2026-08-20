// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['darkjokes', 'jokesgelap', 'jokesdark', 'darkjoke'],
  operate: async (context) => {
    const {
      Alice,
      m,
      isBan,
      quoted,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
try {
let alice = await Darkjokes()
await Alice.sendMessage(m.chat, { image: { url: alice }, caption: 'donee' }, { quoted: m })
} catch (error) {
  return XRR()
}
}
  }
};

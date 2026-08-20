// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['readmore'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isPrem,
      quoted,
      readmore
    } = context;

{
if (!isPrem) return XRP()
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Alice.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
  }
};

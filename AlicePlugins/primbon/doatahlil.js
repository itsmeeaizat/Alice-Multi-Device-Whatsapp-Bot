// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['doatahlil'],
  operate: async (context) => {
    const {
      isBan,
      reply,
      XReaction,
      XRB,
      fs
    } = context;

{
if (isBan) return XRB()
await XReaction()
let { result } = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/islami/tahlil.json', 'utf-8'))
let caption = result.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
}).join('\n\n')
reply(`${caption}`)
}
  }
};

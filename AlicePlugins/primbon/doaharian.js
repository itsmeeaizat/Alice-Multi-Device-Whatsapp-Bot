// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['doaharian'],
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
let src = JSON.parse(fs.readFileSync('./AliceSystem/AliceDatabase/islami/doaharian.json', 'utf-8'))
let caption = src.map((v, i) => {
return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

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

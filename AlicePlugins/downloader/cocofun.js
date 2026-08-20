// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['cocofun'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, AliceCmd, command, isBan, m, quoted, reply, text } = context;

    switch (command) {
case 'cocofun':{
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Example: ${AliceCmd} https://www.icocofun.com/share/post/565326210234?lang=id&pkg=id&share_to=copy_link&m=06fa9a57a737be2bee99bea6bcdb20ee&d=7a1c5048f54ef09b7c0fa0f3c463692949f35fa30d93fc1130f6e8153f537b51&nt=1`)
await XReaction()
let old = new Date()
let asy = await chApi.cocofun(text)
let caption = `乂  *C O C O F U N*\n\n`
caption += `	◦  *Topic* : ${asy.topic}\n`
caption += `	◦  *Caption* : ${asy.caption}\n`
caption += `	◦  *Play* : ${asy.play}\n`
caption += `	◦  *Like* : ${asy.like}\n`
caption += `	◦  *Share* : ${asy.share}\n`
caption += `	◦  *Duration* : ${asy.duration}\n\n`
caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
Alice.sendMessage(m.chat, { video: { url: asy.no_watermark }, caption: caption }, { quoted: m })
uselimit()
reply(`\`Usage 1 Limit , You Have ${limitnya} More\``)
}
break;

    }
  }
};

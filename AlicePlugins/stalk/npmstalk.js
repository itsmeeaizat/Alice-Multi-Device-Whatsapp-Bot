// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['npmstalk'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      npmStalk
    } = context;

{
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${AliceCmd} express`)
    let npmData = await npmStalk(text)
    
    const response = `
*Package:* ${npmData.name}
*Versi:* ${npmData.versionLatest}
*Versi Pertama:* ${npmData.versionPublish}
*Jumlah Versi:* ${npmData.versionUpdate}
*Versi Terbaru:* ${npmData.latestDependencies}
*Versi Pertama:* ${npmData.publishDependencies}
*Waktu Rilis Pertama:* ${npmData.publishTime}
*Waktu Rilis Terbaru:* ${npmData.latestPublishTime}
    `
    reply(response)
  } catch (err) {
    console.error(err)
    reply('Wah ada yang error, coba lagi nanti!')
  }
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['ytstalk'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      fetchJson
    } = context;

{
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${AliceCmd} Alice`)
    const apiUrl = await fetchJson(`https://fastrestapis.fasturl.cloud/stalk/youtube?username=${text}`)
    const ytData = apiUrl.result

    if (ytData) {
      const response = `
*YOUTUBE STALKER:*\n
- Nama Channel: ${ytData.channel}
- Deskripsi: ${ytData.description ? ytData.description : 'Tidak ada'}
- URL Channel: ${ytData.url}
- Total Subscriber: ${ytData.additionalInfo.totalSubs}
- Total Video: ${ytData.additionalInfo.totalVideos}
- Total Views: ${ytData.additionalInfo.views}
- Bergabung pada: ${ytData.additionalInfo.join}
- Link Channel: ${ytData.additionalInfo.chUrl}
      
*Gambar Profil:*
${ytData.profile}

*Gambar Background:*
${ytData.bgUrl}
      `

      reply(response)
    }
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
  }
};

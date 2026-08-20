// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tiktokgirl', 'ttgirl', 'ttk'],
  operate: async (context) => {
    const {
      Alice,
      m,
      reply,
      fetch
    } = context;

    try {
      let res = await fetch('https://fastrestapis.fasturl.cloud/asupan/tiktokgirl')
      let json = await res.json()

      if (json.status !== 200 || !json.result) {
        return reply('Gagal mengambil video TikTok girl.')
      }

      let result = json.result
      let videoUrl = typeof result === 'string' ? result : (result.url || result.video || result)

      await Alice.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: '┌ ◦ TikTok Girl Video\n╰─────────────────────>'
      }, { quoted: m })
    } catch (e) {
      console.log('Error tiktokgirl:', e)
      reply('Terjadi kesalahan saat mengambil video.')
    }
  }
};

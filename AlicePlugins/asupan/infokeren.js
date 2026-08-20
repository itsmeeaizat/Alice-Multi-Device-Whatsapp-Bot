// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['infokeren', 'info'],
  operate: async (context) => {
    const {
      Alice,
      m,
      reply,
      fetch
    } = context;

    try {
      let res = await fetch('https://fastrestapis.fasturl.cloud/asupan/infokeren')
      let json = await res.json()

      if (json.status !== 200 || !json.result) {
        return reply('Gagal mengambil info keren.')
      }

      let result = json.result
      let imageUrl = typeof result === 'string' ? result : (result.url || result.image || result)

      await Alice.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: '┌ ◦ Info Keren\n╰─────────────────────>'
      }, { quoted: m })
    } catch (e) {
      console.log('Error infokeren:', e)
      reply('Terjadi kesalahan saat mengambil info keren.')
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['wallanime', 'animewall', 'wallpaperanime'],
  operate: async (context) => {
    const {
      Alice,
      m,
      reply,
      fetch
    } = context;

    try {
      let res = await fetch('https://nekos.life/api/v2/img/wallpaper')
      let json = await res.json()

      if (!json.url) {
        // Fallback: neko wallpaper
        let res2 = await fetch('https://nekos.life/api/v2/img/wallpapers')
        let json2 = await res2.json()
        if (!json2.url) return reply('Gagal mengambil wallpaper anime.')
        await Alice.sendMessage(m.chat, {
          image: { url: json2.url },
          caption: '┌ ◦ Wallpaper Anime\n╰─────────────────────>'
        }, { quoted: m })
        return
      }

      await Alice.sendMessage(m.chat, {
        image: { url: json.url },
        caption: '┌ ◦ Wallpaper Anime\n╰─────────────────────>'
      }, { quoted: m })
    } catch (e) {
      console.log('Error wallanime:', e)
      reply('Terjadi kesalahan saat mengambil wallpaper anime.')
    }
  }
};

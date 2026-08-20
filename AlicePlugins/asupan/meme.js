// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['meme', 'memes'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;
    try {
      let res = await fetch('https://meme-api.com/gimme');
      if (res.ok) {
        let json = await res.json();
        if (json && json.url) {
          return await Alice.sendMessage(m.chat, {
            image: { url: json.url },
            caption: json.title || 'Random Meme'
          }, { quoted: m });
        }
      }
      throw new Error('Primary meme API failed');
    } catch (e) {
      try {
        let resFallback = await fetch('https://api.imgflip.com/get_memes');
        let jsonFallback = await resFallback.json();
        if (jsonFallback && jsonFallback.success && jsonFallback.data && jsonFallback.data.memes && jsonFallback.data.memes.length > 0) {
          const memes = jsonFallback.data.memes;
          const randomMeme = memes[Math.floor(Math.random() * memes.length)];
          return await Alice.sendMessage(m.chat, {
            image: { url: randomMeme.url },
            caption: randomMeme.name || 'Random Meme'
          }, { quoted: m });
        }
        throw new Error('Fallback meme API failed');
      } catch (err) {
        console.error('Error in meme plugin:', err);
        return reply('Gagal mengambil meme. Silakan coba lagi nanti.');
      }
    }
  }
};

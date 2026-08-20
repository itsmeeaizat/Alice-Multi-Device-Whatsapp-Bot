// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['loli'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const fallbackImages = [
      'https://i.pinimg.com/736x/8d/30/80/8d30807b03a743a1a5b81a8b981d3311.jpg',
      'https://i.pinimg.com/736x/9b/6c/0e/9b6c0e5a9539f37c5415357876a13f01.jpg',
      'https://i.pinimg.com/736x/87/40/e3/8740e3b98c56ef982b6dfd535194f434.jpg',
      'https://i.pinimg.com/736x/01/9d/23/019d23fe0efef0a4d2db1ef4ee8c3868.jpg',
      'https://i.pinimg.com/736x/2b/9b/77/2b9b7754f76ca098d5758cf19c3fb46e.jpg'
    ];

    let imageUrl = null;

    try {
      const response = await fetch('https://nekos.life/api/v2/img/kemonomimi');
      if (response.ok) {
        const data = await response.json();
        if (data && data.url) {
          imageUrl = data.url;
        }
      }
    } catch (err) {
      // Ignore API errors and use fallback
    }

    if (!imageUrl) {
      imageUrl = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    }

    await Alice.sendMessage(m.chat, { image: { url: imageUrl }, caption: 'Safe cute loli 🐾' }, { quoted: m });
  }
};

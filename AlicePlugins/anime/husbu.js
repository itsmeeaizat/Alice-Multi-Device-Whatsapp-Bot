// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['husbu', 'husb'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const fallbackImages = [
      'https://images.alphacoders.com/830/830571.jpg',
      'https://i.pinimg.com/736x/21/50/20/215020df111a91cf3e63573c9ff4220b.jpg',
      'https://i.pinimg.com/736x/32/34/a5/3234a5d8f6e2f126ef89dfa1c5d0134e.jpg',
      'https://i.pinimg.com/736x/18/d8/51/18d851c89dd1a84f3d45d65f57a3e742.jpg',
      'https://i.pinimg.com/736x/bb/9d/b1/bb9db1d636b0ecfa3dfb3a9a7a0b38c2.jpg'
    ];

    let imageUrl = null;

    try {
      const response = await fetch('https://nekos.life/api/v2/img/fox_girl');
      if (response.ok) {
        const data = await response.json();
        if (data && data.url) {
          imageUrl = data.url;
        }
      }
    } catch (err) {
      // API call failed, fallback to hardcoded image URLs
    }

    if (!imageUrl) {
      imageUrl = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    }

    await Alice.sendMessage(m.chat, { image: { url: imageUrl }, caption: 'Here is your Husbu~ ❤️' }, { quoted: m });
  }
};

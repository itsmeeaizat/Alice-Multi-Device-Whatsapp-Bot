// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['cosplay', 'cos'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;
    try {
      const res = await fetch('https://fastrestapis.fasturl.cloud/asupan/cosplay');
      const json = await res.json();
      let imageUrl = json.result?.url || json.result || json.url || json.data?.url || json.data;
      if (typeof imageUrl === 'object' && imageUrl?.url) {
        imageUrl = imageUrl.url;
      }
      if (!imageUrl || typeof imageUrl !== 'string') {
        throw new Error('Image URL not found in response');
      }

      await Alice.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: 'Random Cosplay'
      }, { quoted: m });
    } catch (error) {
      console.error('Error in cosplay plugin:', error);
      reply('Gagal mengambil gambar cosplay. Silakan coba lagi nanti.');
    }
  }
};

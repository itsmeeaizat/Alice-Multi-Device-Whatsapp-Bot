// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['yahooimg', 'yahooimage'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
if (!text) return reply("Ingin Mencari Apa?");
    try {
        const images = await Yimg(text);
        if (images.length === 0) {
            reply("Tidak ada gambar yang ditemukan");
        } else {
            const image = images[0];
            let imageText = `*Judul :* _${image.title}_\n`;
            imageText += `*Ukuran :* _${image.size}_\n`;
            imageText += `*Dimensi :* _${image.width}x${image.height}_\n\n`;
            imageText += `*Sumber :* _${image.url}_\n`;

            await Alice.sendMessage(m.chat, {
                image: { url: image.url },
                caption: imageText,
            }, { quoted: m });
        }
    } catch (error) {
        reply("❌ Terjadi kesalahan saat mengambil gambar.");
        console.error(error);
    }
  }
  }
};

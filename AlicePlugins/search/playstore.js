// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['playstore'],
  operate: async (context) => {
    const {
      Alice,
      m,
      args,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
  const query = args.join(" ");
  if (!query) return reply("*Mau Cari Aplikasi Apa?*");

  try {
    const hasil = await PlayStore(query);

    if (hasil.length === 0) {
      reply("⚠*Tidak Ada Hasil, Pastikan Nama Aplikasi Valid*");
    } else {
      const app = hasil[0];

      let result = `*Hasil Pencarian Dari : ${query}*\n\n`;
      result += `*Nama :* _${app.nama}_\n`;
      result += `*Developer :* _${app.developer}_\n`;
      result += `*Rating :* _${app.rate}_\n\n`;
      result += `*Link Aplikasi :* _${app.link}_\n`;
      result += `*Link Developer :* _${app.link_dev}_\n`;

      await Alice.sendMessage(m.chat, {
        image: { url: app.img },
        caption: result
      }, { quoted: m });

    }
  } catch (error) {
    console.error(error);
    XRR()
  }
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['caribuku'],
  operate: async (context) => {
    const {
      args,
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
  const query = args.join(" ");
  if (!query) return reply("Cari buku apa?");

  try {
    const hasil = await BookSearch(query);

    if (hasil.length === 0) {
      reply("🔍 *Tidak Ada Hasil, Pastikan Nama Buku Valid*");
    } else {
      let result = `*Hasil Pencarian Dari : ${query}*\n\n`;
      hasil.forEach((buku, index) => {
        result += `*${index + 1}. ${buku.title}*\n`;
        result += `*Rating :* _${buku.rating}_\n\n`;
        result += `*Link Buku :* \n_${buku.link}_\n\n==============================\n`;
      });
      reply(result);
    }
  } catch (error) {
    console.error(error);
    XRR()
  }
}
  }
};

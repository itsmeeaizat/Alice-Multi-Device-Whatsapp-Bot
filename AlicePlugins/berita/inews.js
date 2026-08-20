// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['inews'],
  operate: async (context) => {
    const {
      args,
      q,
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
if (!q) return reply(`_penculikan anak/berita lainnya_`)
    const query = args.join(" ");
  await aviz(query).then(results => {
        if (results.length === 0) {
            reply("Tidak ada hasil ditemukan.");
        } else {
            let avosky = "Hasil pencarian berita iNews:\n\n";
            results.forEach((result, index) => {
                avosky += `${index + 1}. *${result.title}*\n`;
                avosky += `📅 ${result.date}\n`;
                avosky += `🔗 [Baca lebih lanjut](${result.url})\n`;
                avosky += `🖼️ Gambar: ${result.imgUrl}\n\n`;
            });
            reply(avosky);
        }
    });
}
  }
};

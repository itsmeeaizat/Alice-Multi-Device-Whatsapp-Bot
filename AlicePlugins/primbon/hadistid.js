// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['hadistid'],
  operate: async (context) => {
    const {
      Alice,
      m,
      args,
      text,
      prefix,
      command,
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
    const query = args.join(' ');
    if (!query) {
        await Alice.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        return reply(`Format: ${prefix + command} [kata kunci/kitab]\nContoh: ${prefix + command} bukhari`);
    }

    try {
        const hasil = await hadist(query);

        if (!hasil.length) {
            await Alice.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            return reply('Tidak ditemukan hadits dengan kata kunci tersebut.');
        }

        let teks = `*📜 Hasil Pencarian Hadits.id*\n\n`;
        hasil.slice(0, 5).forEach((item, i) => {
            teks += `*${i+1}. ${item.judul}*\nPerawi: ${item.perawi}\nKitab: ${item.kitab}\n${item.teks}\nLink: ${item.link}\n\n`;
        });

        reply(teks.trim());
    } catch (err) {
        reply('Error: ' + (err.message || err));
    }
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['hadistdetail'],
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

    const url = args[0];
    if (!url || !/^https:\/\/www\.hadits\.id\//.test(url)) {
        return reply(`Format: ${prefix + command} [link_haditsid]\nContoh: ${prefix + command} https://www.hadits.id/hadits/bukhari/6886`);
    }

    try {
        const hasil = await detail(url);

        if (!hasil) {
            await Alice.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            return reply('Detail hadits tidak ditemukan.');
        }

        let teks = `*📖 Detail Hadits.id*\n\n`;
        teks += `*Judul:* ${hasil.title}\n`;
        teks += `*No Hadits:* ${hasil.hadithNumber}\n`;
        teks += `*Breadcrumb:* ${hasil.breadcrumb.join(' > ')}\n\n`;
        teks += `*Teks Arab:*\n${hasil.haditsArab}`;

        reply(teks.trim());
    } catch (err) {
        reply('Error: ' + (err.message || err));
    }
}
  }
};

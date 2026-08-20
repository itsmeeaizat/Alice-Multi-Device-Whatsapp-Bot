// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['rate', 'nilai'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text || !text.trim()) {
      return reply(`Gunakan perintah ini untuk menilai sesuatu.\n\nContoh: *${AliceCmd} ketampanan saya*`);
    }

    const rate = Math.floor(Math.random() * 101);

    let comment = '';
    if (rate >= 90) {
      comment = 'Sempurna tanpa cela! 🌟';
    } else if (rate >= 75) {
      comment = 'Sangat bagus dan menarik! 👍';
    } else if (rate >= 50) {
      comment = 'Lumayan lah, standar saja. 👌';
    } else if (rate >= 25) {
      comment = 'Kurang memuaskan nih... 😅';
    } else {
      comment = 'Waduh, parah banget ini! 🙈';
    }

    return reply(`📊 *RATING / PENILAIAN* 📊\n\n*Yang Dinilai:* ${text.trim()}\n*Nilai:* *${rate}%*\n*Catatan:* ${comment}`);
  }
};

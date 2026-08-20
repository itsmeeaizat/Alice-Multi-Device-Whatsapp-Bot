// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['gantengcek', 'cekganteng'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, pushname } = context;

    let target = text ? text.trim() : (pushname || 'Kamu');

    const rate = Math.floor(Math.random() * 101);

    let comment = '';
    if (rate >= 90) {
      comment = 'Ketampanan mendekati sempurna! Bikin cewek luluh! 😎';
    } else if (rate >= 75) {
      comment = 'Ganteng banget, cocok jadi idola! ✨';
    } else if (rate >= 50) {
      comment = 'Gantengnya sedang-sedang saja, yang penting percaya diri! 🙂';
    } else if (rate >= 25) {
      comment = 'Agak kurang nih, coba perawatan dulu gih. 😅';
    } else {
      comment = 'Waduh, mending kamu fokus kembangin kepribadian aja... 🙈';
    }

    return reply(`😎 *CEK KETAMPANAN* 😎\n\n*Nama:* ${target}\n*Tingkat Ketampanan:* *${rate}%*\n*Keterangan:* ${comment}`);
  }
};

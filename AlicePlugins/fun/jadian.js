// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['jadian', 'couple'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, pushname } = context;

    let pair = text ? text.trim() : `${pushname || 'Kamu'} & Pasangan Idaman`;

    const rate = Math.floor(Math.random() * 101);

    let comment = '';
    if (rate >= 90) {
      comment = 'Pasangan serasi! Jodoh dunia akhirat ❤️';
    } else if (rate >= 75) {
      comment = 'Cocok banget! Tinggal nunggu hari H aja nih 💕';
    } else if (rate >= 50) {
      comment = 'Lumayan cocok, tapi butuh saling mengerti 💖';
    } else if (rate >= 25) {
      comment = 'Banyak perbedaan, harus ekstra sabar 💔';
    } else {
      comment = 'Mending cari yang lain aja daripada makan hati 🙈';
    }

    return reply(`💘 *JADIAN & COUPLE MATCH* 💘\n\n*Pasangan:* ${pair}\n*Tingkat Kecocokan:* *${rate}%*\n*Keterangan:* ${comment}`);
  }
};

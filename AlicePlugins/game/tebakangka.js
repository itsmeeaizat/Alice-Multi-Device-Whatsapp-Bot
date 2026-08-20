// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tebakangka', 'guessnumber'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, sender, args, command } = context;

    global.tebakangka = global.tebakangka || {};

    const chatId = m.chat;
    const input = text.trim().toLowerCase();
    let session = global.tebakangka[chatId];

    if (input === 'stop' || input === 'surrender' || input === 'menyerah') {
      if (!session) return reply('❌ Tidak ada permainan Tebak Angka yang sedang berlangsung.');
      const num = session.target;
      delete global.tebakangka[chatId];
      return reply(`🏳️ Permainan dihentikan.\nAngka rahasia yang benar adalah: *${num}*`);
    }

    if (input === 'hint' || input === 'petunjuk') {
      if (!session) return reply('❌ Tidak ada permainan Tebak Angka yang sedang berlangsung.');
      const isEven = session.target % 2 === 0 ? 'GENAP' : 'GANJIL';
      const minRange = Math.max(1, session.target - Math.floor(Math.random() * 10 + 5));
      const maxRange = Math.min(100, session.target + Math.floor(Math.random() * 10 + 5));
      return reply(`💡 *PETUNJUK TEBAK ANGKA* 💡\n\n• Angka adalah bilangan *${isEven}*\n• Angka berada di kisaran antara *${minRange}* sampai *${maxRange}*`);
    }

    if (session) {
      const guess = parseInt(args[0] || input);
      if (!isNaN(guess)) {
        if (guess < 1 || guess > 100) {
          return reply('❌ Masukkan angka antara 1 sampai 100!');
        }

        session.attempts += 1;

        if (guess === session.target) {
          const attemptsUsed = session.attempts;
          delete global.tebakangka[chatId];
          return reply(`🎉 *TEBAKAN BENAR!* 🎯\n\nSelamat @${sender.split('@')[0]}! Kamu berhasil menebak angka *${guess}* dalam *${attemptsUsed}* kali percobaan!`);
        } else if (session.attempts >= session.maxAttempts) {
          const targetNum = session.target;
          delete global.tebakangka[chatId];
          return reply(`💥 *GAME OVER!* 💥\n\nKesempatanmu sudah habis (10/10)!\nAngka rahasia yang benar adalah *${targetNum}*.`);
        } else if (guess < session.target) {
          return reply(`📈 *TERLALU KECIL!*\n\nAngka rahasia lebih *BESAR* dari *${guess}*.\nPercobaan ke-${session.attempts}/${session.maxAttempts}`);
        } else {
          return reply(`📉 *TERLALU BESAR!*\n\nAngka rahasia lebih *KECIL* dari *${guess}*.\nPercobaan ke-${session.attempts}/${session.maxAttempts}`);
        }
      } else {
        return reply(`🎲 *GAME TEBAK ANGKA AKTIF* 🎲\n\nTebak angka antara *1 - 100*.\nPercobaan: ${session.attempts}/${session.maxAttempts}\n\nKetik: *${AliceCmd} <angka>*\nContoh: *${AliceCmd} 50*\nKetik *${AliceCmd} hint* untuk petunjuk.\nKetik *${AliceCmd} surrender* untuk menyerah.`);
      }
    }

    const target = Math.floor(Math.random() * 100) + 1;
    global.tebakangka[chatId] = {
      target,
      attempts: 0,
      maxAttempts: 10,
      startTime: Date.now()
    };

    return reply(`🎲 *TEBAK ANGKA (1 - 100)* 🎲\n\nBot telah memilih angka rahasia antara *1 sampai 100*.\nKamu memiliki *10 kali kesempatan* untuk menebak!\n\nKetik: *${AliceCmd} <angka>*\nContoh: *${AliceCmd} 50*\nKetik *${AliceCmd} hint* untuk petunjuk.\nKetik *${AliceCmd} surrender* untuk menyerah.`);
  }
};

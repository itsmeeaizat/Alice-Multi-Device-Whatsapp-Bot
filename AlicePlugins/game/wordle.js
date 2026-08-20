// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['wordle', 'katasusun'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, sender, args, command } = context;

    global.wordle = global.wordle || {};

    const chatId = m.chat;
    const input = text.trim().toLowerCase();

    const WORD_LIST = [
      'RUMAH', 'POHON', 'GAMER', 'HUJAN', 'MOBIL',
      'KAPAL', 'SURAT', 'BULAN', 'SURGA', 'SABUN',
      'PISAU', 'LEMON', 'DAPUR', 'GAJAH', 'MACAN',
      'UDARA', 'BAGUS', 'MANIS', 'PINTU', 'BEBEK'
    ];

    function checkWordle(guess, secret) {
      let result = Array(5).fill('⬛');
      let secretChars = secret.split('');
      let guessChars = guess.split('');

      // Pass 1: Green (Correct position)
      for (let i = 0; i < 5; i++) {
        if (guessChars[i] === secretChars[i]) {
          result[i] = '🟩';
          secretChars[i] = null;
          guessChars[i] = null;
        }
      }

      // Pass 2: Yellow (Wrong position)
      for (let i = 0; i < 5; i++) {
        if (guessChars[i] && secretChars.includes(guessChars[i])) {
          result[i] = '🟨';
          let idx = secretChars.indexOf(guessChars[i]);
          secretChars[idx] = null;
        }
      }

      return result.join('');
    }

    let session = global.wordle[chatId];

    if (input === 'stop' || input === 'surrender' || input === 'menyerah') {
      if (!session) return reply('❌ Tidak ada permainan Wordle yang sedang berlangsung.');
      const secret = session.secret;
      delete global.wordle[chatId];
      return reply(`🏳️ Permainan Wordle dihentikan.\nKata rahasianya adalah: *${secret}*`);
    }

    if (session) {
      const guess = text.trim().toUpperCase();

      if (guess.length === 5 && /^[A-Z]+$/.test(guess)) {
        const feedback = checkWordle(guess, session.secret);
        session.attempts.push({ guess, feedback });

        let boardText = `🟩🟨⬛ *WORDLE BOARD* ⬛🟨🟩\n\n`;
        session.attempts.forEach((item, index) => {
          const spacedGuess = item.guess.split('').join(' ');
          boardText += `${index + 1}. ${spacedGuess}  ${item.feedback}\n`;
        });

        if (guess === session.secret || feedback === '🟩🟩🟩🟩🟩') {
          const attemptsCount = session.attempts.length;
          const secretWord = session.secret;
          delete global.wordle[chatId];
          return reply(`🎉 *CONGRATULATIONS!* 🏆\n\n${boardText}\nSelamat @${sender.split('@')[0]}! Kamu berhasil menebak kata *${secretWord}* dalam *${attemptsCount}/6* percobaan!`);
        }

        if (session.attempts.length >= session.maxAttempts) {
          const secretWord = session.secret;
          delete global.wordle[chatId];
          return reply(`💥 *GAME OVER!* 💥\n\n${boardText}\nKesempatanmu habis! Kata rahasia yang benar adalah *${secretWord}*.`);
        }

        boardText += `\nPercobaan ke-${session.attempts.length}/${session.maxAttempts}\nKetik: *${AliceCmd} <kata 5 huruf>*`;
        return reply(boardText);
      } else {
        let boardText = `🟩🟨⬛ *WORDLE (GAME AKTIF)* ⬛🟨🟩\n\n`;
        if (session.attempts.length > 0) {
          session.attempts.forEach((item, index) => {
            const spacedGuess = item.guess.split('').join(' ');
            boardText += `${index + 1}. ${spacedGuess}  ${item.feedback}\n`;
          });
          boardText += `\n`;
        }
        boardText += `Tebak kata *5 HURUF*!\n\nKetik: *${AliceCmd} <kata 5 huruf>*\nContoh: *${AliceCmd} RUMAH*\nKetik *${AliceCmd} surrender* untuk menyerah.`;
        return reply(boardText);
      }
    }

    const secret = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    global.wordle[chatId] = {
      secret,
      attempts: [],
      maxAttempts: 6,
      startTime: Date.now()
    };

    return reply(`🟩🟨⬛ *WORDLE / KATASUSUN* ⬛🟨🟩\n\nTebak kata *5 HURUF* dalam *6 kesempatan*!\n\nAturan Warna:\n🟩 = Huruf & posisi benar\n🟨 = Huruf ada, posisi salah\n⬛ = Huruf tidak ada dalam kata\n\nKetik: *${AliceCmd} <kata 5 huruf>*\nContoh: *${AliceCmd} RUMAH*\nKetik *${AliceCmd} surrender* untuk menyerah.`);
  }
};

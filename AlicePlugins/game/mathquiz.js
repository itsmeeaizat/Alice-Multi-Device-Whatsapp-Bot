// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['math', 'mathquiz'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, sender, args, command } = context;

    global.mathquiz = global.mathquiz || {};
    global.mathScores = global.mathScores || {};

    const chatId = m.chat;
    const input = text.trim().toLowerCase();

    if (input === 'score' || input === 'skor' || input === 'leaderboard' || input === 'top') {
      const userScore = global.mathScores[sender] || 0;
      const sortedUsers = Object.keys(global.mathScores)
        .map(jid => ({ jid, score: global.mathScores[jid] }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

      let leaderboardTxt = sortedUsers.map((item, idx) => `${idx + 1}. @${item.jid.split('@')[0]} - ${item.score} poin`).join('\n') || 'Belum ada data score.';

      return reply(`📊 *MATH QUIZ SCOREBOARD* 📊\n\n🏆 *Poin Kamu:* ${userScore} Poin\n\n🏅 *Top 5 Pemain:* \n${leaderboardTxt}`);
    }

    let session = global.mathquiz[chatId];

    if (input === 'stop' || input === 'surrender' || input === 'menyerah') {
      if (!session) return reply('❌ Tidak ada kuis matematika yang sedang berlangsung.');
      const ans = session.answer;
      delete global.mathquiz[chatId];
      return reply(`🏳️ Kuis dibatalkan/menyerah.\nJawaban yang benar adalah: *${ans}*`);
    }

    if (session) {
      const userAns = parseInt(text.trim());
      if (!isNaN(userAns)) {
        if (userAns === session.answer) {
          global.mathScores[sender] = (global.mathScores[sender] || 0) + 10;
          const totalScore = global.mathScores[sender];
          delete global.mathquiz[chatId];
          return reply(`🎉 *JAWABAN BENAR!* 🎯\n\nSelamat @${sender.split('@')[0]}!\nJawaban: *${userAns}*\nKamu mendapatkan *+10 Poin*! (Total: ${totalScore} Poin)`);
        } else {
          return reply(`❌ *JAWABAN SALAH!*\n\nCoba lagi atau ketik *${AliceCmd} surrender* untuk menyerah.`);
        }
      } else {
        return reply(`➕ *KUIS MATEMATIKA AKTIF* ✖️\n\nSoal: *${session.num1} ${session.operator} ${session.num2} = ?*\n\nJawab dengan: *${AliceCmd} <jawaban>*\nContoh: *${AliceCmd} ${session.answer}*\nKetik *${AliceCmd} surrender* untuk menyerah.`);
      }
    }

    const operators = ['+', '-', '*'];
    const op = operators[Math.floor(Math.random() * operators.length)];
    let num1, num2, answer;

    if (op === '+') {
      num1 = Math.floor(Math.random() * 90) + 10;
      num2 = Math.floor(Math.random() * 90) + 10;
      answer = num1 + num2;
    } else if (op === '-') {
      num1 = Math.floor(Math.random() * 80) + 20;
      num2 = Math.floor(Math.random() * (num1 - 1)) + 1;
      answer = num1 - num2;
    } else { // '*'
      num1 = Math.floor(Math.random() * 15) + 2;
      num2 = Math.floor(Math.random() * 12) + 2;
      answer = num1 * num2;
    }

    global.mathquiz[chatId] = {
      num1,
      num2,
      operator: op,
      answer,
      startTime: Date.now()
    };

    return reply(`➕ *MATH QUIZ* ✖️\n\nBerapakah hasil dari:\n*${num1} ${op} ${num2} = ?*\n\nJawab dengan: *${AliceCmd} <jawaban>*\nContoh: *${AliceCmd} ${answer}*\nKetik *${AliceCmd} score* untuk melihat poin.`);
  }
};

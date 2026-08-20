// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tictactoe', 'ttt', 'sikudo'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, sender, isGroup, args, command } = context;

    global.tictactoe = global.tictactoe || {};

    const chatId = m.chat;

    function renderBoard(board) {
      const numToEmoji = {
        '1': '1️⃣', '2': '2️⃣', '3': '3️⃣',
        '4': '4️⃣', '5': '5️⃣', '6': '6️⃣',
        '7': '7️⃣', '8': '8️⃣', '9': '9️⃣'
      };
      const b = board.map(cell => numToEmoji[cell] || cell);
      return `${b[0]} | ${b[1]} | ${b[2]}
---+---+---
${b[3]} | ${b[4]} | ${b[5]}
---+---+---
${b[6]} | ${b[7]} | ${b[8]}`;
    }

    function checkWinner(b) {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (let line of lines) {
        const [a, bIdx, c] = line;
        if (b[a] && b[a] === b[bIdx] && b[a] === b[c]) {
          return b[a];
        }
      }
      return null;
    }

    let room = global.tictactoe[chatId];

    const input = text.trim().toLowerCase();

    if (input === 'reset' || input === 'stop' || input === 'batal') {
      if (!room) return reply('❌ Tidak ada permainan Tic Tac Toe yang sedang berlangsung di grup ini.');
      if (sender !== room.playerX && sender !== room.playerO) {
        return reply('❌ Hanya pemain yang dapat membatalkan permainan!');
      }
      delete global.tictactoe[chatId];
      return reply('🛑 Permainan Tic Tac Toe berhasil dibatalkan/di-reset.');
    }

    if (input === 'surrender' || input === 'menyerah') {
      if (!room) return reply('❌ Tidak ada permainan Tic Tac Toe yang sedang berlangsung.');
      if (sender !== room.playerX && sender !== room.playerO) {
        return reply('❌ Hanya pemain yang dapat menyerah!');
      }
      const winner = sender === room.playerX ? room.playerO : room.playerX;
      delete global.tictactoe[chatId];
      return reply(`🏳️ @${sender.split('@')[0]} menyerah!\n🎉 Selamat @${winner.split('@')[0]} memenangkan pertandingan!`);
    }

    if (room) {
      const pos = parseInt(args[0]);
      if (!isNaN(pos) && pos >= 1 && pos <= 9) {
        if (sender !== room.playerX && sender !== room.playerO) {
          return reply('❌ Kamu bukan pemain dalam sesi Tic Tac Toe ini!');
        }
        if (sender !== room.turn) {
          return reply(`❌ Bukan giliranmu! Sekarang giliran @${room.turn.split('@')[0]}`);
        }

        const idx = pos - 1;
        if (room.board[idx] === '❌' || room.board[idx] === '⭕') {
          return reply('❌ Posisi tersebut sudah diisi! Pilih nomor posisi lain.');
        }

        const symbol = sender === room.playerX ? '❌' : '⭕';
        room.board[idx] = symbol;

        const winSymbol = checkWinner(room.board);
        if (winSymbol) {
          const winnerJid = sender;
          const boardStr = renderBoard(room.board);
          delete global.tictactoe[chatId];
          return reply(`🎉 *GAME OVER - KEMENANGAN!* 🏆\n\n${boardStr}\n\nSelamat @${winnerJid.split('@')[0]} (${symbol}) berhasil menang!`);
        }

        const isDraw = room.board.every(cell => cell === '❌' || cell === '⭕');
        if (isDraw) {
          const boardStr = renderBoard(room.board);
          delete global.tictactoe[chatId];
          return reply(`🤝 *GAME OVER - SERI (DRAW)!* 🤝\n\n${boardStr}\n\nPapan penuh dan tidak ada pemenang.`);
        }

        room.turn = sender === room.playerX ? room.playerO : room.playerX;
        const nextSymbol = room.turn === room.playerX ? '❌' : '⭕';
        const boardStr = renderBoard(room.board);
        return reply(`🎮 *TIC TAC TOE* 🎮\n\n${boardStr}\n\nGiliran: @${room.turn.split('@')[0]} (${nextSymbol})\nKetik: *${AliceCmd} <1-9>* untuk mengisi petak.`);
      }

      const currentSymbol = room.turn === room.playerX ? '❌' : '⭕';
      return reply(`🎮 *TIC TAC TOE (BERLANGSUNG)* 🎮\n\nPemain ❌: @${room.playerX.split('@')[0]}\nPemain ⭕: @${room.playerO.split('@')[0]}\n\n${renderBoard(room.board)}\n\nGiliran: @${room.turn.split('@')[0]} (${currentSymbol})\nKetik *${AliceCmd} <1-9>* untuk melangkah atau *${AliceCmd} surrender* untuk menyerah.`);
    }

    if (!isGroup) {
      return reply('❌ Game Tic Tac Toe hanya bisa dimainkan di dalam grup bersama 2 pemain!');
    }

    let opponent = m.mentionedJid && m.mentionedJid[0];
    if (!opponent && quoted && quoted.sender) {
      opponent = quoted.sender;
    }

    if (!opponent) {
      return reply(`🎮 *TIC TAC TOE (SIKUDO)* 🎮\n\nCara Memulai Game:\nTag lawan yang ingin diajak bertanding!\n\nContoh: *${AliceCmd} @user*\n\nAturan:\n• Mengisi petak: *${AliceCmd} <1-9>*\n• Menyerah: *${AliceCmd} surrender*\n• Batal: *${AliceCmd} reset*`);
    }

    if (opponent === sender) {
      return reply('❌ Kamu tidak bisa menantang diri sendiri!');
    }

    global.tictactoe[chatId] = {
      playerX: sender,
      playerO: opponent,
      board: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      turn: sender
    };

    const newRoom = global.tictactoe[chatId];
    const initialBoard = renderBoard(newRoom.board);
    return reply(`⚔️ *TANTANGAN TIC TAC TOE* ⚔️\n\n@${sender.split('@')[0]} (❌) VS @${opponent.split('@')[0]} (⭕)\n\n${initialBoard}\n\nGiliran pertama: @${sender.split('@')[0]} (❌)\nKetik: *${AliceCmd} <1-9>* untuk memilih posisi petak.`);
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['suit', 'suitbatuguntingkertas'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, args } = context;

    const userChoice = (text || (args && args[0]) || '').trim().toLowerCase();

    if (!userChoice || !['batu', 'gunting', 'kertas', 'rock', 'scissors', 'paper'].includes(userChoice)) {
      return reply(`🎮 *SUIT BATU GUNTING KERTAS* 🎮\n\nPilih salah satu: *batu*, *gunting*, atau *kertas*.\n\nContoh: *${AliceCmd} batu*`);
    }

    let player = userChoice;
    if (player === 'rock') player = 'batu';
    if (player === 'scissors') player = 'gunting';
    if (player === 'paper') player = 'kertas';

    const botChoices = ['batu', 'gunting', 'kertas'];
    const bot = botChoices[Math.floor(Math.random() * botChoices.length)];

    const emojis = {
      batu: '🪨 Batu',
      gunting: '✂️ Gunting',
      kertas: '📄 Kertas'
    };

    let result = '';
    if (player === bot) {
      result = '🤝 Hasil: *SERI / DRAW!*';
    } else if (
      (player === 'batu' && bot === 'gunting') ||
      (player === 'gunting' && bot === 'kertas') ||
      (player === 'kertas' && bot === 'batu')
    ) {
      result = '🎉 Hasil: *KAMU MENANG!*';
    } else {
      result = '💻 Hasil: *BOT MENANG!*';
    }

    return reply(`🎮 *SUIT BATU GUNTING KERTAS* 🎮\n\n👤 Kamu: ${emojis[player]}\n🤖 Bot: ${emojis[bot]}\n\n${result}`);
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['dadu', 'dice', 'roll'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const diceEmojis = ['⚀ (1)', '⚁ (2)', '⚂ (3)', '⚃ (4)', '⚄ (5)', '⚅ (6)'];
    const rollNumber = Math.floor(Math.random() * 6) + 1;
    const rollEmoji = diceEmojis[rollNumber - 1];

    return reply(`🎲 *DICE ROLL / LEMPAR DADU* 🎲\n\nKamu mendapatkan angka: *${rollNumber}* ${rollEmoji}`);
  }
};

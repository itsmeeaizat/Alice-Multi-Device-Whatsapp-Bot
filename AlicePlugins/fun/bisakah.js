// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['bisakah'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text || !text.trim()) {
      return reply(`Gunakan perintah ini untuk bertanya kepastian atau ramalan.\n\nContoh: *${AliceCmd} saya menjadi kaya mendadak?*`);
    }

    const answers = [
      "Bisa banget!",
      "Sangat tidak mungkin...",
      "Bisa jadi, tergantung usaha dan doamu.",
      "Mungkin 50/50 sih.",
      "Tidak akan pernah terjadi!",
      "Bisa, tapi cuma di dalam mimpi 🤣",
      "Tentu saja bisa!",
      "Peluangnya sangat kecil.",
      "Bisa dong, percaya saja pada proses!",
      "Kemungkinan besar BISA!"
    ];

    const randomAns = answers[Math.floor(Math.random() * answers.length)];

    return reply(`🔮 *RAMALAN BISAKAH* 🔮\n\n*Pertanyaan:* Bisakah ${text.trim()}?\n*Jawaban:* ${randomAns}`);
  }
};

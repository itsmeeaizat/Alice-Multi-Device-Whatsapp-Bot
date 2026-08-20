// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['apakah'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text || !text.trim()) {
      return reply(`Gunakan perintah ini untuk bertanya kebenaran.\n\nContoh: *${AliceCmd} dia menyukaiku?*`);
    }

    const answers = [
      "Ya, tentu saja!",
      "Tidak sama sekali!",
      "Sangat Benar!",
      "Mana saya tahu 🤣",
      "Tentu saja benar!",
      "Mustahil!",
      "Bisa jadi sih.",
      "Nggak banget deh.",
      "Sepertinya begitu.",
      "Ragu-ragu deh..."
    ];

    const randomAns = answers[Math.floor(Math.random() * answers.length)];

    return reply(`❓ *RAMALAN APAKAH* ❓\n\n*Pertanyaan:* Apakah ${text.trim()}?\n*Jawaban:* ${randomAns}`);
  }
};

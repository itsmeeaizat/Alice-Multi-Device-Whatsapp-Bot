// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['kapankah'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text || !text.trim()) {
      return reply(`Gunakan perintah ini untuk bertanya ramalan waktu.\n\nContoh: *${AliceCmd} saya menikah?*`);
    }

    const answers = [
      "100 tahun lagi",
      "Besok lusa!",
      "Minggu depan insyaAllah",
      "1 bulan lagi",
      "10 tahun dari sekarang",
      "Besok jam 3 sore",
      "5 menit lagi!",
      "Tidak akan pernah terjadi 🤣",
      "Saat negara api menyerang 🔥",
      "Tahun depan!",
      "3 hari lagi",
      "Saat kamu sudah sukses dan kaya raya",
      "Nanti malam pas kamu tidur 😴"
    ];

    const randomTime = answers[Math.floor(Math.random() * answers.length)];

    return reply(`⏳ *RAMALAN KAPANKAH* ⏳\n\n*Pertanyaan:* Kapankah ${text.trim()}?\n*Jawaban:* ${randomTime}`);
  }
};

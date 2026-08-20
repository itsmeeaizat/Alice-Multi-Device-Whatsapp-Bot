// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['family100', 'f100'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, sender, args, command } = context;

    global.family100 = global.family100 || {};

    const chatId = m.chat;
    const input = text.trim().toLowerCase();

    const QUESTIONS = [
      {
        question: "Sebutkan hewan yang biasa dipelihara di rumah!",
        answers: [
          { text: "Kucing", aliases: ["kucing", "cat"] },
          { text: "Anjing", aliases: ["anjing", "dog"] },
          { text: "Ikan", aliases: ["ikan", "fish"] },
          { text: "Burung", aliases: ["burung", "bird"] },
          { text: "Kelinci", aliases: ["kelinci", "rabbit"] }
        ]
      },
      {
        question: "Sebutkan buah yang berwarna merah!",
        answers: [
          { text: "Apel", aliases: ["apel", "apple"] },
          { text: "Stroberi", aliases: ["stroberi", "strawberry", "stoberi"] },
          { text: "Semangka", aliases: ["semangka", "watermelon"] },
          { text: "Ceri", aliases: ["ceri", "cherry"] },
          { text: "Tomat", aliases: ["tomat", "tomato"] }
        ]
      },
      {
        question: "Sebutkan benda yang ada di dalam ruang kelas!",
        answers: [
          { text: "Papan Tulis", aliases: ["papan tulis", "papan", "whiteboard"] },
          { text: "Meja", aliases: ["meja", "desk"] },
          { text: "Kursi", aliases: ["kursi", "chair"] },
          { text: "Buku", aliases: ["buku", "book"] },
          { text: "Pena / Pensil", aliases: ["pena", "pulpen", "pensil", "pensel"] }
        ]
      },
      {
        question: "Sebutkan tempat wisata populer di Indonesia!",
        answers: [
          { text: "Bali", aliases: ["bali"] },
          { text: "Candi Borobudur", aliases: ["borobudur", "candi borobudur"] },
          { text: "Raja Ampat", aliases: ["raja ampat"] },
          { text: "Danau Toba", aliases: ["danau toba", "toba"] },
          { text: "Labuan Bajo", aliases: ["labuan bajo"] }
        ]
      },
      {
        question: "Sebutkan makanan khas Indonesia yang disukai banyak orang!",
        answers: [
          { text: "Nasi Goreng", aliases: ["nasi goreng", "nasgor"] },
          { text: "Rendang", aliases: ["rendang"] },
          { text: "Bakso", aliases: ["bakso", "baso"] },
          { text: "Sate", aliases: ["sate", "satay"] },
          { text: "Soto", aliases: ["soto"] }
        ]
      },
      {
        question: "Sebutkan aktivitas yang dilakukan orang sebelum tidur!",
        answers: [
          { text: "Sikat Gigi", aliases: ["sikat gigi", "gosok gigi"] },
          { text: "Cuci Muka / Kaki", aliases: ["cuci muka", "cuci kaki", "cuci muka kaki"] },
          { text: "Main HP", aliases: ["main hp", "main handphone", "hp", "telepon"] },
          { text: "Berdoa", aliases: ["berdoa", "doa"] },
          { text: "Matikan Lampu", aliases: ["matikan lampu", "matiin lampu"] }
        ]
      },
      {
        question: "Sebutkan benda yang selalu ada di dalam tas sekolah!",
        answers: [
          { text: "Buku", aliases: ["buku", "buku tulis"] },
          { text: "Pensil / Pulpen", aliases: ["pensil", "pulpen", "pena"] },
          { text: "Penggaris", aliases: ["penggaris"] },
          { text: "Penghapus", aliases: ["penghapus"] },
          { text: "Kotak Pensil", aliases: ["kotak pensil", "tempat pensil"] }
        ]
      },
      {
        question: "Sebutkan olahraga yang menggunakan bola!",
        answers: [
          { text: "Sepak Bola", aliases: ["sepak bola", "sepakbola", "bola"] },
          { text: "Bola Basket", aliases: ["basket", "bola basket"] },
          { text: "Bola Voli", aliases: ["voli", "bola voli"] },
          { text: "Bulutangkis", aliases: ["badminton", "bulutangkis"] },
          { text: "Tenis", aliases: ["tenis", "tennis"] }
        ]
      },
      {
        question: "Sebutkan kendaraan umum darat di Indonesia!",
        answers: [
          { text: "Bus", aliases: ["bus", "bis"] },
          { text: "Kereta Api", aliases: ["kereta", "kereta api", "krl"] },
          { text: "Angkot", aliases: ["angkot", "angkutan umum"] },
          { text: "Ojek", aliases: ["ojek", "ojol"] },
          { text: "Taksi", aliases: ["taksi", "taxi"] }
        ]
      },
      {
        question: "Sebutkan alasan orang terlambat masuk sekolah atau kerja!",
        answers: [
          { text: "Macet", aliases: ["macet", "kemacetan"] },
          { text: "Kesiangan", aliases: ["kesiangan", "bangun siang", "telat bangun"] },
          { text: "Hujan", aliases: ["hujan"] },
          { text: "Ban Bocor", aliases: ["ban bocor", "mogok"] },
          { text: "Ketinggalan Bus/Kereta", aliases: ["ketinggalan bus", "ketinggalan kereta"] }
        ]
      },
      {
        question: "Sebutkan jenis minuman dingin yang populer!",
        answers: [
          { text: "Es Teh", aliases: ["es teh", "es teh manis"] },
          { text: "Es Jeruk", aliases: ["es jeruk"] },
          { text: "Jus Buah", aliases: ["jus", "jus buah"] },
          { text: "Kopi Dingin", aliases: ["es kopi", "kopi dingin", "ice coffee"] },
          { text: "Boba", aliases: ["boba", "bubble tea"] }
        ]
      },
      {
        question: "Sebutkan profesi yang memakai seragam saat bekerja!",
        answers: [
          { text: "Polisi", aliases: ["polisi"] },
          { text: "TNI / Tentara", aliases: ["tentara", "tni"] },
          { text: "Dokter", aliases: ["dokter"] },
          { text: "Perawat", aliases: ["perawat", "suster"] },
          { text: "Pilot", aliases: ["pilot"] }
        ]
      },
      {
        question: "Sebutkan bumbu dapur yang sering digunakan untuk memasak!",
        answers: [
          { text: "Bawang Merah", aliases: ["bawang merah"] },
          { text: "Bawang Putih", aliases: ["bawang putih"] },
          { text: "Garam", aliases: ["garam"] },
          { text: "Cabai", aliases: ["cabai", "cabe"] },
          { text: "Gula", aliases: ["gula"] }
        ]
      },
      {
        question: "Sebutkan nama pulau besar di Indonesia!",
        answers: [
          { text: "Jawa", aliases: ["jawa"] },
          { text: "Sumatera", aliases: ["sumatera", "sumatra"] },
          { text: "Kalimantan", aliases: ["kalimantan"] },
          { text: "Sulawesi", aliases: ["sulawesi"] },
          { text: "Papua", aliases: ["papua"] }
        ]
      },
      {
        question: "Sebutkan benda yang mengeluarkan cahaya!",
        answers: [
          { text: "Matahari", aliases: ["matahari"] },
          { text: "Lampu", aliases: ["lampu"] },
          { text: "Lilin", aliases: ["lilin"] },
          { text: "Senter", aliases: ["senter"] },
          { text: "Api", aliases: ["api"] }
        ]
      }
    ];

    function renderBoard(session) {
      let board = `👨‍👩‍👧‍👦 *FAMILY 100* 👨‍👩‍👧‍👦\n\n*Soal:* ${session.question}\n\n`;
      session.answers.forEach((item, index) => {
        if (item.found) {
          board += `${index + 1}. ${item.text} ✅ (@${item.foundBy.split('@')[0]})\n`;
        } else {
          board += `${index + 1}. ⬛⬛⬛⬛⬛ [?]\n`;
        }
      });
      board += `\nKetik jawabanmu secara langsung atau: *${AliceCmd} <jawaban>*\nKetik *${AliceCmd} surrender* untuk menyerah.`;
      return board;
    }

    let session = global.family100[chatId];

    if (input === 'stop' || input === 'surrender' || input === 'menyerah') {
      if (!session) return reply('❌ Tidak ada permainan Family 100 yang sedang berlangsung.');
      let revealTxt = `🏳️ *SURVEY FAMILY 100 BERAKHIR* 🏳️\n\n*Soal:* ${session.question}\n\n*Jawaban:* \n`;
      session.answers.forEach((item, idx) => {
        revealTxt += `${idx + 1}. ${item.text}\n`;
      });
      delete global.family100[chatId];
      return reply(revealTxt);
    }

    if (input === 'status' || input === 'board') {
      if (!session) return reply('❌ Tidak ada permainan Family 100 yang sedang berlangsung.');
      return reply(renderBoard(session));
    }

    if (session) {
      if (text.trim().length > 0) {
        const userGuess = text.trim().toLowerCase();
        let matchedIndex = -1;

        session.answers.forEach((item, idx) => {
          if (!item.found) {
            if (item.aliases.includes(userGuess) || userGuess === item.text.toLowerCase()) {
              matchedIndex = idx;
            }
          }
        });

        if (matchedIndex !== -1) {
          session.answers[matchedIndex].found = true;
          session.answers[matchedIndex].foundBy = sender;

          const allFound = session.answers.every(a => a.found);
          if (allFound) {
            const finalBoard = renderBoard(session);
            delete global.family100[chatId];
            return reply(`🎉 *SELAMAT! SEMUA JAWABAN TERTEBAK!* 🏆\n\n${finalBoard}`);
          } else {
            return reply(`✨ *JAWABAN BENAR!* (${session.answers[matchedIndex].text})\n\n${renderBoard(session)}`);
          }
        } else {
          return reply(`❌ Jawaban salah atau sudah pernah tertebak!\nCoba tebak jawaban lain.`);
        }
      } else {
        return reply(renderBoard(session));
      }
    }

    const selectedQ = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    global.family100[chatId] = {
      question: selectedQ.question,
      answers: selectedQ.answers.map(a => ({
        text: a.text,
        aliases: a.aliases,
        found: false,
        foundBy: null
      })),
      startTime: Date.now()
    };

    const newSession = global.family100[chatId];
    return reply(renderBoard(newSession));
  }
};

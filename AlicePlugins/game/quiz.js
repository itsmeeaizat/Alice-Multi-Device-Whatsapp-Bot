// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['quiz', 'kuis'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, sender, args, command } = context;

    global.quiz = global.quiz || {};

    const chatId = m.chat;
    const input = text.trim().toLowerCase();

    function decodeHTML(str) {
      if (!str) return '';
      return str
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&deg;/g, '°')
        .replace(/&eacute;/g, 'é')
        .replace(/&nbsp;/g, ' ');
    }

    function shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    const LOCAL_QUIZ = [
      {
        question: "Apa ibu kota negara Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        correctIndex: 0,
        category: "Geografi",
        difficulty: "Mudah"
      },
      {
        question: "Candi Borobudur terletak di provinsi mana?",
        options: ["Jawa Tengah", "Jawa Timur", "Jawa Barat", "Yogyakarta"],
        correctIndex: 0,
        category: "Sejarah & Budaya",
        difficulty: "Mudah"
      },
      {
        question: "Siapakah penemu bola lampu berpijar?",
        options: ["Thomas Alva Edison", "Alexander Graham Bell", "Albert Einstein", "Nikola Tesla"],
        correctIndex: 0,
        category: "Sains & Pengetahuan",
        difficulty: "Sedang"
      },
      {
        question: "Berapa jumlah provinsi di Indonesia saat ini?",
        options: ["34", "38", "36", "40"],
        correctIndex: 1,
        category: "Pengetahuan Umum",
        difficulty: "Sedang"
      },
      {
        question: "Planet manakah yang dijuluki sebagai Planet Merah?",
        options: ["Venus", "Mars", "Jupiter", "Saturnus"],
        correctIndex: 1,
        category: "Astronomi",
        difficulty: "Mudah"
      },
      {
        question: "Mata uang resmi negara Jepang adalah...",
        options: ["Yen", "Won", "Yuan", "Ringgit"],
        correctIndex: 0,
        category: "Ekonomi & Pengetahuan Umum",
        difficulty: "Mudah"
      },
      {
        question: "Siapakah Proklamator dan Presiden pertama Republik Indonesia?",
        options: ["Ir. Soekarno", "Drs. Mohammad Hatta", "Soeharto", "BJ Habibie"],
        correctIndex: 0,
        category: "Sejarah Indonesia",
        difficulty: "Mudah"
      },
      {
        question: "Lagu kebangsaan Indonesia Raya diciptakan oleh...",
        options: ["WR Soepratman", "Ismail Marzuki", "Kusbini", "C. Simanjuntak"],
        correctIndex: 0,
        category: "Seni & Budaya",
        difficulty: "Mudah"
      },
      {
        question: "Unsur kimia dengan lambang 'O' adalah...",
        options: ["Oksigen", "Emas", "Perak", "Hidrogen"],
        correctIndex: 0,
        category: "Sains",
        difficulty: "Mudah"
      },
      {
        question: "Mamalia terbesar di bumi adalah...",
        options: ["Gajah Afrika", "Paus Biru", "Hiu Paus", "Jerapah"],
        correctIndex: 1,
        category: "Sains & Biologi",
        difficulty: "Mudah"
      },
      {
        question: "Benua terkecil di dunia berdasarkan luas wilayah adalah...",
        options: ["Australia", "Eropa", "Antartika", "Asia"],
        correctIndex: 0,
        category: "Geografi",
        difficulty: "Sedang"
      },
      {
        question: "Alat musik tradisional Angklung berasal dari daerah...",
        options: ["Jawa Barat", "Jawa Tengah", "Bali", "Sumatera Barat"],
        correctIndex: 0,
        category: "Budaya Indonesia",
        difficulty: "Mudah"
      },
      {
        question: "Berapakah hasil perkalian dari 12 x 12?",
        options: ["124", "144", "134", "154"],
        correctIndex: 1,
        category: "Matematika",
        difficulty: "Mudah"
      },
      {
        question: "Siapakah pencipta karakter kartun Mickey Mouse?",
        options: ["Walt Disney", "Stan Lee", "Hayao Miyazaki", "Charles Schulz"],
        correctIndex: 0,
        category: "Hiburan",
        difficulty: "Sedang"
      },
      {
        question: "Sudut tegak lurus (siku-siku) memiliki besaran...",
        options: ["45 derajat", "90 derajat", "180 derajat", "360 derajat"],
        correctIndex: 1,
        category: "Matematika",
        difficulty: "Mudah"
      },
      {
        question: "Hewan yang mampu mengubah warna kulitnya sesuai lingkungan adalah...",
        options: ["Bunglon", "Kadal", "Ular", "Katak"],
        correctIndex: 0,
        category: "Sains & Biologi",
        difficulty: "Mudah"
      },
      {
        question: "Gas utama paling melimpah dalam atmosfer bumi adalah...",
        options: ["Oksigen", "Nitrogen", "Karbondioksida", "Helium"],
        correctIndex: 1,
        category: "Sains",
        difficulty: "Sedang"
      },
      {
        question: "Samudra terbesar di dunia adalah...",
        options: ["Samudra Pasifik", "Samudra Atlantik", "Samudra Hindia", "Samudra Arktik"],
        correctIndex: 0,
        category: "Geografi",
        difficulty: "Mudah"
      },
      {
        question: "Tahun berapa Indonesia memproklamasikan kemerdekaannya?",
        options: ["1942", "1945", "1950", "1948"],
        correctIndex: 1,
        category: "Sejarah Indonesia",
        difficulty: "Mudah"
      },
      {
        question: "Proses tumbuhan hijau membuat makanan sendiri dengan bantuan cahaya dinamakan...",
        options: ["Respirasi", "Fotosintesis", "Transpirasi", "Oksidasi"],
        correctIndex: 1,
        category: "Sains & Biologi",
        difficulty: "Mudah"
      }
    ];

    let session = global.quiz[chatId];

    if (input === 'stop' || input === 'surrender' || input === 'menyerah') {
      if (!session) return reply('❌ Tidak ada kuis yang sedang berlangsung.');
      const correctOptionLetter = ['A', 'B', 'C', 'D'][session.correctIndex];
      const correctOptionText = session.options[session.correctIndex];
      delete global.quiz[chatId];
      return reply(`🏳️ Kuis dihentikan.\nJawaban yang benar adalah *${correctOptionLetter}. ${correctOptionText}*`);
    }

    if (session) {
      if (text.trim().length > 0) {
        const userAns = text.trim().toUpperCase();
        let selectedIndex = -1;

        if (['A', 'B', 'C', 'D'].includes(userAns)) {
          selectedIndex = ['A', 'B', 'C', 'D'].indexOf(userAns);
        } else {
          selectedIndex = session.options.findIndex(opt => opt.toUpperCase() === userAns);
        }

        if (selectedIndex !== -1) {
          const correctOptionLetter = ['A', 'B', 'C', 'D'][session.correctIndex];
          const correctOptionText = session.options[session.correctIndex];

          if (selectedIndex === session.correctIndex) {
            delete global.quiz[chatId];
            return reply(`🎉 *JAWABAN BENAR!* 🏆\n\nSelamat @${sender.split('@')[0]}!\nJawaban yang tepat adalah *${correctOptionLetter}. ${correctOptionText}*`);
          } else {
            delete global.quiz[chatId];
            return reply(`❌ *JAWABAN SALAH!*\n\nJawaban yang benar adalah *${correctOptionLetter}. ${correctOptionText}*.\nCoba lagi di pertanyaan berikutnya!`);
          }
        } else {
          return reply(`❓ *KUIS AKTIF* ❓\n\nPilih jawaban *A, B, C, atau D*!\n\nKetik: *${AliceCmd} A*\nKetik *${AliceCmd} surrender* untuk menyerah.`);
        }
      } else {
        const letters = ['A', 'B', 'C', 'D'];
        let qTxt = `❓ *KUIS PENGETAHUAN UMUM* ❓\n\n`;
        qTxt += `*Kategori:* ${session.category}\n`;
        qTxt += `*Kesulitan:* ${session.difficulty}\n\n`;
        qTxt += `*Pertanyaan:* ${session.question}\n\n`;
        session.options.forEach((opt, idx) => {
          qTxt += `${letters[idx]}. ${opt}\n`;
        });
        qTxt += `\nKetik: *${AliceCmd} A* (atau B/C/D)\nKetik *${AliceCmd} surrender* untuk menyerah.`;
        return reply(qTxt);
      }
    }

    // Load new question
    let questionData = null;

    try {
      const res = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
      const json = await res.json();

      if (json && json.response_code === 0 && json.results && json.results.length > 0) {
        const item = json.results[0];
        const question = decodeHTML(item.question);
        const correctAnswer = decodeHTML(item.correct_answer);
        const incorrectAnswers = item.incorrect_answers.map(decodeHTML);

        const allOptions = shuffleArray([correctAnswer, ...incorrectAnswers]);
        const correctIdx = allOptions.indexOf(correctAnswer);

        questionData = {
          question,
          options: allOptions,
          correctIndex: correctIdx,
          category: decodeHTML(item.category),
          difficulty: item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)
        };
      }
    } catch (e) {
      questionData = null;
    }

    if (!questionData) {
      const fallbackItem = LOCAL_QUIZ[Math.floor(Math.random() * LOCAL_QUIZ.length)];
      questionData = {
        question: fallbackItem.question,
        options: fallbackItem.options,
        correctIndex: fallbackItem.correctIndex,
        category: fallbackItem.category,
        difficulty: fallbackItem.difficulty
      };
    }

    global.quiz[chatId] = {
      ...questionData,
      startTime: Date.now()
    };

    const letters = ['A', 'B', 'C', 'D'];
    let quizMsg = `❓ *KUIS PENGETAHUAN UMUM* ❓\n\n`;
    quizMsg += `*Kategori:* ${questionData.category}\n`;
    quizMsg += `*Kesulitan:* ${questionData.difficulty}\n\n`;
    quizMsg += `*Pertanyaan:* ${questionData.question}\n\n`;
    questionData.options.forEach((opt, idx) => {
      quizMsg += `${letters[idx]}. ${opt}\n`;
    });
    quizMsg += `\nKetik: *${AliceCmd} A* (atau B/C/D)\nKetik *${AliceCmd} surrender* untuk menyerah.`;

    return reply(quizMsg);
  }
};

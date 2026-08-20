// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tekateki', 'riddle'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const listRiddles = [
      {
        soal: "Ada ayam jantan bertelur di atas genteng, telurnya jatuh ke mana?",
        jawaban: "Ayam jantan tidak bertelur!"
      },
      {
        soal: "Gajah apa yang belalainya pendek?",
        jawaban: "Gajah yang terkena flu atau gajah kecil."
      },
      {
        soal: "Ditembak ke lantai tapi yang kena hidung, apakah itu?",
        jawaban: "Kentut."
      },
      {
        soal: "Punya daun tapi bukan pohon, punya halaman tapi bukan rumah. Apakah itu?",
        jawaban: "Buku."
      },
      {
        soal: "Dipotong malah jadi lebih tinggi, apakah itu?",
        jawaban: "Celana panjang (saat dipotong bawahnya, dipakainya jadi gantung)."
      },
      {
        soal: "Buah apa yang kalau dipotong tetap buah?",
        jawaban: "Buah Semangka!"
      },
      {
        soal: "Lemari apa yang bisa dimasukkan ke dalam kantong?",
        jawaban: "Lemaribuan (Lembar uang ribuan)."
      },
      {
        soal: "Bebek apa yang jalannya selalu mutar ke kiri?",
        jawaban: "Bebek yang dikunci stang."
      },
      {
        soal: "Roti apa yang rasanya tidak enak?",
        jawaban: "Rotimasi (Masa lalu) / Roti yang sudah basi."
      },
      {
        soal: "Kenapa ayam kalau berkokok matanya merem?",
        jawaban: "Karena sudah hafal teksnya."
      },
      {
        soal: "Orang apa yang berenang tapi rambutnya tidak basah?",
        jawaban: "Orang gundul."
      },
      {
        soal: "Jam apa yang kalau dipakai bikin pusing?",
        jawaban: "Jambu air dilempar ke kepala."
      },
      {
        soal: "Ban apa yang bisa dimakan?",
        jawaban: "Bandeng / Bandrek."
      },
      {
        soal: "Benda apa yang kalau dibeli hitam, dipakai merah, dibuang abu-abu?",
        jawaban: "Arang."
      },
      {
        soal: "Bis apa yang biasanya ada di atas pohon?",
        jawaban: "Bisa burung, bisa monyet."
      }
    ];

    let riddleData = null;

    try {
      if (typeof fetch === 'function') {
        const res = await fetch('https://fastrestapis.fasturl.cloud/fun/riddle');
        if (res.ok) {
          const data = await res.json();
          if (data && (data.result || data.soal)) {
            const item = data.result || data;
            if (typeof item === 'object') {
              riddleData = {
                soal: item.soal || item.question || item.riddle || '',
                jawaban: item.jawaban || item.answer || ''
              };
            }
          }
        }
      }
    } catch (err) {
      // fallback to local array
    }

    if (!riddleData || !riddleData.soal) {
      riddleData = listRiddles[Math.floor(Math.random() * listRiddles.length)];
    }

    return reply(`🧩 *TEKA TEKI / RIDDLE* 🧩\n\n*Soal:* ${riddleData.soal}\n\n*Jawaban:* ${riddleData.jawaban}`);
  }
};

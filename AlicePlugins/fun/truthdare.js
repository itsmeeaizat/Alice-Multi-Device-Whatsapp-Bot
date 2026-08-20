// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['truth', 'dare', 'truthordare'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, command } = context;

    const listTruth = [
      "Siapa nama orang yang pernah kamu sukai secara diam-diam?",
      "Hal paling memalukan apa yang pernah kamu alami di depan umum?",
      "Apa kebohongan terbesar yang pernah kamu katakan kepada orang tuamu?",
      "Kapan terakhir kali kamu menangis dan apa alasannya?",
      "Rahasia apa yang belum pernah kamu ceritakan kepada siapa pun?",
      "Jika kamu bisa bertukar hidup dengan seseorang di grup ini selama sehari, siapa itu?",
      "Apa sifat paling buruk dari dirimu yang ingin kamu ubah?",
      "Pernahkah kamu menyukai pacar atau gebetan temanmu sendiri?",
      "Apa kenangan masa kecil yang paling konyol yang masih kamu ingat?",
      "Siapa orang di grup ini yang paling kamu kagumi dan apa alasannya?",
      "Berapa kali kamu pernah ditolak saat menyatakan cinta?",
      "Apa hal yang paling kamu takuti dalam hidup ini?",
      "Pernahkah kamu berpura-pura sakit agar tidak perlu sekolah atau kerja?",
      "Apa fantasi atau impian terliar yang pernah kamu bayangkan?",
      "Kebiasaan aneh apa yang sering kamu lakukan saat sendirian di kamar?",
      "Siapa sosok mantan yang paling sulit kamu lupakan?",
      "Apa hal paling kekanak-kanakan yang masih sering kamu lakukan hingga sekarang?",
      "Jika kamu diberi waktu 24 jam untuk hidup, apa yang akan kamu lakukan?",
      "Pernahkah kamu ketahuan berbohong oleh teman dekatmu?",
      "Apa hal yang paling kamu penyesali dalam hidup sejauh ini?"
    ];

    const listDare = [
      "Kirim pesan suara (VN) ke grup sambil bernyanyi lagu favoritmu selama 15 detik!",
      "Buat status WhatsApp berisi kata-kata konyol dan jangan dihapus selama 1 jam!",
      "Kirim foto selfie terlucu atau teraneh dirimu ke grup ini sekarang!",
      "Ganti foto profil WA kamu dengan gambar karakter kartun lucu selama 24 jam!",
      "Kirim pesan teks 'Aku mencintaimu' ke kontak ke-3 di daftar obrolanmu dan kirim screenshot balasan darinya!",
      "Puji salah satu anggota grup ini dengan kata-kata puitis yang sangat lebay!",
      "Tirukan suara hewan favoritmu melalui pesan suara (VN) dan kirim ke grup!",
      "Tuliskan pesan singkat di grup menggunakan bahasa daerahmu sendiri!",
      "Kirim stiker terlucu atau teraneh yang kamu miliki di WhatsApp!",
      "Ubah nama profil WhatsApp kamu menjadi 'Aku Orang Aneh' selama 12 jam!",
      "Kirim pesan ke nomor acak dan ucapkan 'Selamat ulang tahun!', lalu perlihatkan tangkapan layarnya!",
      "Ceritakan lelucon paling garing yang kamu ketahui di grup ini!",
      "Buat pantun lucu secara spontan tentang salah satu anggota grup ini!",
      "Kirimkan foto makanan terakhir yang kamu makan beserta ulasan ala koki terkenal!",
      "Tulis paragraf singkat tentang kenapa kamu suka berada di grup ini tanpa menggunakan huruf 'A'!",
      "Kirim pesan suara (VN) sambil berakting sedang menangis dengan heboh!",
      "Minta maaf kepada orang di grup ini atas kesalahan konyol yang tidak pernah terjadi!",
      "Kirim screenshot layar depan (home screen) HP kamu ke grup!",
      "Buat pesan suara berisi ucapan selamat pagi/malam ala penyiar radio terkenal!",
      "Katakan sesuatu yang sangat manis kepada orang yang mengirim pesan sebelum kamu di grup!"
    ];

    let type = command ? command.toLowerCase() : 'truth';
    if (type === 'truthordare') {
      type = Math.random() < 0.5 ? 'truth' : 'dare';
    }

    if (type === 'truth') {
      let resultText = '';
      try {
        if (typeof fetch === 'function') {
          const res = await fetch('https://fastrestapis.fasturl.cloud/fun/truth');
          if (res.ok) {
            const data = await res.json();
            resultText = data.result || data.truth || data.question || data.data || '';
          }
        }
      } catch (err) {
        // fallback to local array
      }

      if (!resultText) {
        resultText = listTruth[Math.floor(Math.random() * listTruth.length)];
      }

      return reply(`🎯 *TRUTH* 🎯\n\n${resultText}`);
    } else {
      let resultText = '';
      try {
        if (typeof fetch === 'function') {
          const res = await fetch('https://fastrestapis.fasturl.cloud/fun/dare');
          if (res.ok) {
            const data = await res.json();
            resultText = data.result || data.dare || data.challenge || data.data || '';
          }
        }
      } catch (err) {
        // fallback to local array
      }

      if (!resultText) {
        resultText = listDare[Math.floor(Math.random() * listDare.length)];
      }

      return reply(`🔥 *DARE* 🔥\n\n${resultText}`);
    }
  }
};

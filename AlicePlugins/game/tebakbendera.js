// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tebakbendera', 'guessflag'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, sender, args, command } = context;

    global.tebakbendera = global.tebakbendera || {};

    const chatId = m.chat;
    const input = text.trim().toLowerCase();

    const countryList = [
      { code: 'id', name: 'Indonesia', aliases: ['indonesia', 'ri'] },
      { code: 'jp', name: 'Jepang', aliases: ['jepang', 'japan'] },
      { code: 'us', name: 'Amerika Serikat', aliases: ['amerika serikat', 'amerika', 'usa', 'united states'] },
      { code: 'gb', name: 'Inggris', aliases: ['inggris', 'uk', 'united kingdom', 'britania raya'] },
      { code: 'kr', name: 'Korea Selatan', aliases: ['korea selatan', 'korsel', 'south korea'] },
      { code: 'cn', name: 'Tiongkok', aliases: ['tiongkok', 'china', 'cina'] },
      { code: 'br', name: 'Brasil', aliases: ['brasil', 'brazil'] },
      { code: 'de', name: 'Jerman', aliases: ['jerman', 'germany'] },
      { code: 'fr', name: 'Prancis', aliases: ['prancis', 'france'] },
      { code: 'it', name: 'Italia', aliases: ['italia', 'italy'] },
      { code: 'es', name: 'Spanyol', aliases: ['spanyol', 'spain'] },
      { code: 'ca', name: 'Kanada', aliases: ['kanada', 'canada'] },
      { code: 'ru', name: 'Rusia', aliases: ['rusia', 'russia'] },
      { code: 'ar', name: 'Argentina', aliases: ['argentina'] },
      { code: 'mx', name: 'Meksiko', aliases: ['meksiko', 'mexico'] },
      { code: 'au', name: 'Australia', aliases: ['australia'] },
      { code: 'eg', name: 'Mesir', aliases: ['mesir', 'egypt'] },
      { code: 'sa', name: 'Arab Saudi', aliases: ['arab saudi', 'saudi arabia'] },
      { code: 'in', name: 'India', aliases: ['india'] },
      { code: 'tr', name: 'Turki', aliases: ['turki', 'turkey', 'turkiye'] },
      { code: 'th', name: 'Thailand', aliases: ['thailand'] },
      { code: 'vn', name: 'Vietnam', aliases: ['vietnam'] },
      { code: 'my', name: 'Malaysia', aliases: ['malaysia'] },
      { code: 'sg', name: 'Singapura', aliases: ['singapura', 'singapore'] },
      { code: 'ph', name: 'Filipina', aliases: ['filipina', 'philippines'] },
      { code: 'nl', name: 'Belanda', aliases: ['belanda', 'netherlands'] },
      { code: 'pt', name: 'Portugal', aliases: ['portugal'] },
      { code: 'ch', name: 'Swiss', aliases: ['swiss', 'switzerland'] },
      { code: 'se', name: 'Swedia', aliases: ['swedia', 'sweden'] },
      { code: 'no', name: 'Norwegia', aliases: ['norwegia', 'norway'] },
      { code: 'za', name: 'Afrika Selatan', aliases: ['afrika selatan', 'south africa'] },
      { code: 'kp', name: 'Korea Utara', aliases: ['korea utara', 'korut', 'north korea'] },
      { code: 'ps', name: 'Palestina', aliases: ['palestina', 'palestine'] },
      { code: 'ua', name: 'Ukraina', aliases: ['ukraina', 'ukraine'] },
      { code: 'gr', name: 'Yunani', aliases: ['yunani', 'greece'] },
      { code: 'pl', name: 'Polandia', aliases: ['polandia', 'poland'] },
      { code: 'be', name: 'Belgia', aliases: ['belgia', 'belgium'] },
      { code: 'at', name: 'Austria', aliases: ['austria'] },
      { code: 'co', name: 'Kolombia', aliases: ['kolombia', 'colombia'] },
      { code: 'cl', name: 'Chile', aliases: ['chile', 'cili'] },
      { code: 'pe', name: 'Peru', aliases: ['peru'] },
      { code: 'nz', name: 'Selandia Baru', aliases: ['selandia baru', 'new zealand'] },
      { code: 'ir', name: 'Iran', aliases: ['iran'] },
      { code: 'iq', name: 'Irak', aliases: ['iraq', 'irak'] },
      { code: 'qa', name: 'Katar', aliases: ['qatar', 'katar'] },
      { code: 'ae', name: 'Uni Emirat Arab', aliases: ['uni emirat arab', 'uea', 'uae'] },
      { code: 'ma', name: 'Maroko', aliases: ['maroko', 'morocco'] },
      { code: 'cm', name: 'Kamerun', aliases: ['kamerun', 'cameroon'] },
      { code: 'sn', name: 'Senegal', aliases: ['senegal'] },
      { code: 'fi', name: 'Finlandia', aliases: ['finlandia', 'finland'] }
    ];

    let session = global.tebakbendera[chatId];

    if (input === 'stop' || input === 'surrender' || input === 'menyerah') {
      if (!session) return reply('❌ Tidak ada permainan Tebak Bendera yang sedang berlangsung.');
      const countryName = session.country.name;
      delete global.tebakbendera[chatId];
      return reply(`🏳️ Permainan dihentikan.\nBendera tersebut adalah negara: *${countryName}*`);
    }

    if (input === 'hint' || input === 'petunjuk') {
      if (!session) return reply('❌ Tidak ada permainan Tebak Bendera yang sedang berlangsung.');
      const targetName = session.country.name;
      let clue = targetName.split('').map((char, i) => (i === 0 || i === targetName.length - 1 || char === ' ' ? char : '_')).join(' ');
      return reply(`💡 *PETUNJUK BENDERA* 💡\n\nNama negara: *${clue}*\nJumlah huruf: *${targetName.replace(/ /g, '').length}* huruf`);
    }

    if (session) {
      if (text.trim().length > 0) {
        const userGuess = text.trim().toLowerCase();
        const isCorrect = session.country.aliases.includes(userGuess) || userGuess === session.country.name.toLowerCase();

        if (isCorrect) {
          const countryName = session.country.name;
          delete global.tebakbendera[chatId];
          return reply(`🎉 *TEBAKAN BENAR!* 🏁\n\nSelamat @${sender.split('@')[0]}! Bendera tersebut adalah negara *${countryName}*!`);
        } else {
          return reply(`❌ *JAWABAN SALAH!*\n\nCoba lagi atau ketik *${AliceCmd} hint* untuk petunjuk, atau *${AliceCmd} surrender* untuk menyerah.`);
        }
      } else {
        return reply(`🚩 *TEBAK BENDERA AKTIF* 🚩\n\nKetik: *${AliceCmd} <nama negara>*\nContoh: *${AliceCmd} Indonesia*\nKetik *${AliceCmd} hint* untuk petunjuk.\nKetik *${AliceCmd} surrender* untuk menyerah.`);
      }
    }

    const selectedCountry = countryList[Math.floor(Math.random() * countryList.length)];
    const flagUrl = `https://flagcdn.com/w320/${selectedCountry.code}.png`;

    global.tebakbendera[chatId] = {
      country: selectedCountry,
      startTime: Date.now()
    };

    const caption = `🚩 *TEBAK BENDERA NEGARA* 🚩\n\nNegara manakah bendera di atas?\n\nKetik: *${AliceCmd} <nama negara>*\nContoh: *${AliceCmd} Indonesia*\n\nKetik *${AliceCmd} hint* untuk petunjuk.\nKetik *${AliceCmd} surrender* untuk menyerah.`;

    try {
      await Alice.sendMessage(m.chat, { image: { url: flagUrl }, caption: caption }, { quoted: m });
    } catch (err) {
      reply(caption + `\n\n*(Gagal memuat gambar bendera. Kode ISO: ${selectedCountry.code.toUpperCase()})*`);
    }
  }
};

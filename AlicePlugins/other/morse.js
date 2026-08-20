// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['morse', 'morsecode'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const morseMap = {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
      'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
      'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
      'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
      'Y': '-.--', 'Z': '--..',
      '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
      '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
      '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
      '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
      ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
      '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
    };

    const reverseMorseMap = Object.fromEntries(
      Object.entries(morseMap).map(([k, v]) => [v, k])
    );

    if (!text && !quoted) {
      return reply(`*MORSE CODE TRANSLATOR*\n\nUsage:\n• ${AliceCmd} encode <text>\n• ${AliceCmd} decode <morse>\n\nExample:\n${AliceCmd} encode SOS`);
    }

    const args = text ? text.trim().split(/ +/) : [];
    const action = args[0] ? args[0].toLowerCase() : '';
    const input = args.slice(1).join(' ') || (quoted ? (quoted.text || quoted.body || '') : '');

    if (action === 'encode' || action === 'enc') {
      if (!input) return reply(`Masukkan teks yang ingin di-encode ke Morse!\nExample: ${AliceCmd} encode SOS`);
      try {
        const words = input.trim().toUpperCase().split(/\s+/);
        const encodedWords = words.map(word => {
          return word
            .split('')
            .map(char => morseMap[char] || char)
            .join(' ');
        });
        const result = encodedWords.join(' / ');
        return reply(result);
      } catch (e) {
        return reply('❌ Gagal menerjemahkan ke Kode Morse.');
      }
    } else if (action === 'decode' || action === 'dec') {
      if (!input) return reply(`Masukkan kode morse yang ingin di-decode!\nExample: ${AliceCmd} decode ... --- ...`);
      try {
        const words = input.trim().split(/\s*\/\s*|\s{3,}/);
        const decodedWords = words.map(word => {
          const tokens = word.trim().split(/\s+/);
          return tokens
            .map(token => reverseMorseMap[token] || token)
            .join('');
        });
        const result = decodedWords.join(' ');
        return reply(result);
      } catch (e) {
        return reply('❌ Gagal menerjemahkan Kode Morse. Pastikan input berupa titik (.) dan strip (-).');
      }
    } else {
      return reply(`*MORSE CODE TRANSLATOR*\n\nUsage:\n• ${AliceCmd} encode <text>\n• ${AliceCmd} decode <morse>`);
    }
  }
};

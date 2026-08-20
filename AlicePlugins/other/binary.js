// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['binary'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text && !quoted) {
      return reply(`*BINARY ENCODER & DECODER*\n\nUsage:\n• ${AliceCmd} encode <text>\n• ${AliceCmd} decode <binary>\n\nExample:\n${AliceCmd} encode Hello`);
    }

    const args = text ? text.trim().split(/ +/) : [];
    const action = args[0] ? args[0].toLowerCase() : '';
    const input = args.slice(1).join(' ') || (quoted ? (quoted.text || quoted.body || '') : '');

    if (action === 'encode' || action === 'enc') {
      if (!input) return reply(`Masukkan teks yang ingin di-encode ke binary!\nExample: ${AliceCmd} encode Hello`);
      try {
        const binary = input
          .split('')
          .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
          .join(' ');
        return reply(binary);
      } catch (e) {
        return reply('❌ Gagal melakukan encoding ke Binary.');
      }
    } else if (action === 'decode' || action === 'dec') {
      if (!input) return reply(`Masukkan teks binary yang ingin di-decode!\nExample: ${AliceCmd} decode 01001000 01100101 01101100 01101100 01101111`);
      try {
        const cleanInput = input.trim().split(/\s+/);
        const decoded = cleanInput
          .map(bin => {
            const code = parseInt(bin, 2);
            if (isNaN(code)) throw new Error('Invalid binary');
            return String.fromCharCode(code);
          })
          .join('');
        return reply(decoded);
      } catch (e) {
        return reply('❌ Gagal melakukan decoding Binary. Pastikan input berupa angka binary valid (0 dan 1).');
      }
    } else {
      return reply(`*BINARY ENCODER & DECODER*\n\nUsage:\n• ${AliceCmd} encode <text>\n• ${AliceCmd} decode <binary>`);
    }
  }
};

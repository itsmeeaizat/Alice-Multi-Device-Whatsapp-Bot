// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['base64', 'b64'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text && !quoted) {
      return reply(`*BASE64 ENCODER & DECODER*\n\nUsage:\n• ${AliceCmd} encode <text>\n• ${AliceCmd} decode <text>\n\nExample:\n${AliceCmd} encode Hello World`);
    }

    const args = text ? text.trim().split(/ +/) : [];
    const action = args[0] ? args[0].toLowerCase() : '';
    const input = args.slice(1).join(' ') || (quoted ? (quoted.text || quoted.body || '') : '');

    if (action === 'encode' || action === 'enc') {
      if (!input) return reply(`Masukkan teks yang ingin di-encode!\nExample: ${AliceCmd} encode Hello World`);
      try {
        const encoded = Buffer.from(input, 'utf-8').toString('base64');
        return reply(encoded);
      } catch (e) {
        return reply('❌ Gagal melakukan encoding Base64.');
      }
    } else if (action === 'decode' || action === 'dec') {
      if (!input) return reply(`Masukkan string Base64 yang ingin di-decode!\nExample: ${AliceCmd} decode SGVsbG8gV29ybGQ=`);
      try {
        const decoded = Buffer.from(input, 'base64').toString('utf-8');
        return reply(decoded);
      } catch (e) {
        return reply('❌ Gagal melakukan decoding Base64. Pastikan input berupa Base64 valid.');
      }
    } else {
      return reply(`*BASE64 ENCODER & DECODER*\n\nUsage:\n• ${AliceCmd} encode <text>\n• ${AliceCmd} decode <text>`);
    }
  }
};

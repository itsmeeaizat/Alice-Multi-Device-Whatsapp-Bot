// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['qrcode', 'qr'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const input = (text || (quoted ? (quoted.text || quoted.body || '') : '')).trim();

    if (!input) {
      return reply(`*QR CODE GENERATOR*\n\nUsage: ${AliceCmd} <text/url>\nExample: ${AliceCmd} https://github.com`);
    }

    try {
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(input)}`;
      
      await Alice.sendMessage(m.chat, {
        image: { url: qrUrl },
        caption: `*QR CODE GENERATOR*\n\n*Content:* ${input}`
      }, { quoted: m });
    } catch (e) {
      console.error('qrcode error:', e.message);
      return reply('❌ Gagal membuat QR Code.');
    }
  }
};

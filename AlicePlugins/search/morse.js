// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['morse'],
  operate: async (context) => {
    const {
      text,
      q,
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan Teks Yang Ingin Diubah Menjadi Sandi Morse');
  try {
      const morseCode = await convertToMorse(text);
      let responseMessage = `*Teks Asli :*\n_${q}_\n\n*Sandi Morse:*\n${morseCode}`;
      reply(responseMessage);
  } catch (err) {
      console.error(err);
      reply('Terjadi Kesalahan Saat Mengonversi Teks Menjadi Sandi Morse!');
  }
}
  }
};

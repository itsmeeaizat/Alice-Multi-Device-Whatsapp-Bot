// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tafsir', 'tafsirsurah'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      fetchJson
    } = context;

{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Example : .tafsir adam\n\n💡 *Tips* : Ketik nama surah yang ingin Anda ketahui tafsirnya, misalnya '.tafsir Yusuf'.`)
  await XReaction();
    try {
        let response = await fetchJson(`https://widipe.com/tafsirsurah?text=${text}`);
const results = response.result;
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const anubis = getRandomElement(results);
if (anubis && anubis.surah && anubis.tafsir && anubis.type && anubis.source) {
    let surah = anubis.surah;
    let tafsir = anubis.tafsir;
    let artikel = anubis.type;
    let source = anubis.source;

    let tafsirResult = `🌿 *Tafsir Surah ${surah}*\n\n` +
        `• *Surah* : ${surah}\n` +
        `• *Tafsir* :\n${tafsir}\n\n` +
        `• *Kategori Tafsir* : ${artikel}\n` +
        `• *Sumber* : ${source}\n\n` +
        `Terima kasih telah menggunakan layanan kami! 🌸`;

    return reply(tafsirResult);
} else {
    return reply("*Maaf, data tafsir tidak lengkap atau tidak ditemukan.*");
}
    } catch (error) {
        return reply("*Terjadi Kesalahan!* 🙁\n\nMohon maaf, ada masalah saat mencari tafsir surah. Silakan coba lagi nanti.");
    }
}
  }
};

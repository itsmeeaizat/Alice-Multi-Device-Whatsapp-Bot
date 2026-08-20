// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['waktudunia'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      time,
      axios,
      cheerio,
      moment
    } = context;

{
if (isBan) return XRB()
await XReaction()
async function getWorldTime() {
    const url = 'https://onlinealarmkur.com/world/id/';
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let hasil = [];

        $('.flex.items-center.space-x-3').each((index, element) => {
            const bendera = $(element).find('.avatar .text-2xl').text().trim();
            const kota = $(element).find('.city-name').text().trim();
            const zona = $(element).find('.city-time').attr('data-tz');

            if (zona) {
                const realTime = moment().tz(zona).format('ddd - HH:mm');
                hasil.push({ bendera, kota, waktu: realTime });
            }
        });

        return hasil;
    } catch (error) {
        return [];
    }
}
    let hasilWaktu = await getWorldTime();
    if (hasilWaktu.length === 0) {
        return reply('❌ Gagal mengambil data waktu dunia!');
    }

    let pesanWaktu = '*🕰️ Waktu Dunia Saat Ini 🕰️*\n\n';
    hasilWaktu.forEach(item => {
        pesanWaktu += `${item.bendera} *${item.kota}* - ${item.waktu}\n`;
    });

    await Alice.sendMessage(m.chat, { text: pesanWaktu }, { quoted: m });
};
  }
};

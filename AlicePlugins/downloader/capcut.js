// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['ccgen', 'capcut', 'ccdl'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, alice, AliceCmd, args, axios, command, isBan, m, quoted, reply, text } = context;

    switch (command) {
case 'ccgen': {
  let [type, jumlah] = args;
  if (!type || !jumlah) return reply(
    `Contoh:\n${alice}ccgen Visa 5\n\nTipe:\n- Visa\n- MasterCard\n- American Express\n- JCB\n\nJumlah: 5 - 20`
  );

  let allowed = ['Visa', 'MasterCard', 'American Express', 'JCB'];
  if (!allowed.includes(type)) return reply(`Tipe tidak valid:\n${allowed.join('\n')}`);

  let num = parseInt(jumlah);
  if (isNaN(num)) return reply('Jumlah harus angka');
  if (num < 5 || num > 20) return reply('Jumlah kartu harus 5-20');

  try {
    let { data } = await axios.get(`https://backend.lambdatest.com/api/dev-tools/credit-card-generator?type=${encodeURIComponent(type)}&no-of-cards=${num}`);
    if (!Array.isArray(data) || !data.length) return reply('Gagal dapat data');

    let teks = `*Generated ${type} Credit Cards (${num}) :*\n\n` + data.map((v, i) =>
      `*${i + 1}.* ${v.name}\n• Number : ${v.number}\n• CVV : ${v.cvv}\n• Expired : ${v.expiry}\n`
    ).join('\n');

    reply(teks.trim());
  } catch (e) {
    console.error(e);
    reply('Error, coba lagi nanti');
  }
}
break;


case 'capcut':
case 'ccdl': {
  if (isBan) return XRB()
  await XReaction()
  try {
    if (!text) return reply(`Contoh: ${AliceCmd} linknya`)
    if (!text.includes('capcut.com') && !text.includes('capcut.net')) return reply('Harus berupa link capcut!')

    const videoData = await capcutDownloader(text)

    if (videoData.status && videoData.video) {
      // kirim thumbnail dulu (kalau ada)
      if (videoData.thumbnail) {
        await Alice.sendMessage(
          m.chat,
          { image: { url: videoData.thumbnail }, caption: `🎬 ${videoData.title}\n👤 ${videoData.author}` },
          { quoted: m }
        )
      }

      // lalu kirim video
      return await Alice.sendMessage(
        m.chat,
        {
          video: { url: videoData.video },
          caption: `© ${botname}`
        },
        { quoted: m }
      )
    } else {
      return reply(videoData.msg || 'Video tidak ditemukan.')
    }
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
break;

    }
  }
};

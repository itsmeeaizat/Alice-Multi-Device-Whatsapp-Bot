// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['chstalk'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      chstalk
    } = context;

{
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${AliceCmd} https://whatsapp.com/channel/abcdefg`)
    const co = await chstalk(text)
    if (co) {
      const respon = `
*Nama Channel:* ${co.nama}
*Pengikut:* ${co.pengikut}
*Deskripsi:* ${co.deskripsi}
*Link Channel:* ${co.linkChannel}
*Gambar:* ${co.gambar}
`
      return reply(respon)
    }

    reply('Gak ketemu channel nya')
  } catch (err) {
    console.error(err)
    return reply('Terjadi kesalahan')
  }
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['arahrejeki', 'arahrezeki'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      primbon
    } = context;

{
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['wastalk'],
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
      AliceCmd,
      sender,
      PhoneNum,
      moment
    } = context;

{
if (isBan) return XRB()
await XReaction()
let regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
	let num = m.quoted?.sender || m.mentionedJid?.[0] || text
	if (!num) return reply(`*• Example:* ${AliceCmd} *[Number]*`)
	num = num.replace(/\D/g, '') + '@s.whatsapp.net'
	if (!(await Alice.onWhatsApp(num))[0]?.exists) return reply('User not exists')
	let img = await Alice.profilePictureUrl(num, 'image').catch(_ => 'https://files.catbox.moe/nwvkbt.png')
	let bio = await Alice.fetchStatus(num).catch(_ => { })
	let name = await Alice.getName(num)
	let business = await Alice.getBusinessProfile(num)
	let format = PhoneNum(`+${num.split('@')[0]}`)
	let country = regionNames.of(format.getRegionCode('international'))
	let wea = `*[ WhatsApp Stalk ]*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*[ WhatsApp Business Stalk ]*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Descripcion* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
	img ? await Alice.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : reply(wea)
}
  }
};

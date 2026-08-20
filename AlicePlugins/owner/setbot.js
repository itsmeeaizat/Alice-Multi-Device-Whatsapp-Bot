// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['darkmode', 'setppbot', 'setpppanjang', 'setting', 'setbot', 'bot', 'setprefix', 'restart', 'setimgmenu', 'setimgpng', 'anticall', 'autoread', 'self', 'public', 'shutdown', 'autobio', 'setgroup', 'setgc'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'darkmode': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.mode = 'dark'
  saveRpg()
  reply(`🌑 Kamu memasuki *DARK MODE RPG*... efek negatif meningkat di malam hari.`)
  break
}

case 'setppbot':

break;

case 'setpppanjang': {
if(!isOwner) return XRO()
    let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if ((/image/g.test(mime) && !/webp/g.test(mime))) {

async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

		try {
			let media = await q.download()
			let { img } = await pepe(media)
			await Alice.query({
				tag: 'iq',
				attrs: {
					target: undefined,
					to: S_WHATSAPP_NET,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`\nsukses mengganti PP bot\n`)
		} catch (e) {
			console.log(e)
		}
	} else {
		reply(`\nkirim gambar dengan caption *${AliceCmd}* atau reply gambar yang sudah dikirim\n`)
	}
}
break

case 'setting':

break;

case 'setbot':

break;

case 'bot': {
if(!isOwner) return XRO()
const caption = `Silahkan Dipilih Tuan`;
let sections = [
{
highlight_label: 'Alice Self',
rows: [{
title: 'Nyalakan self',
id: `${alice}self`,
deskripsi: 'tesje'
}]
},
{
highlight_label: 'Alice Public',
rows: [{
title: 'Matikan Self',
id: `${alice}public`
}]
},
{
highlight_label: 'Alice Onlygroup',
rows: [{
title: 'Nyalakan Onlygroup',
id: `${alice}onlygc on`
}]
},
{
highlight_label: 'Alice Onlygroup',
rows: [{
title: 'Matikan Onlygroup',
id: `${alice}onlygc off`
}]
},
{
highlight_label: 'Alice Anticall',
rows: [{
title: 'Nyalakan Anticall',
id: `${alice}anticall on`
}]
},
{
highlight_label: 'Alice Anticall',
rows: [{
title: 'Matikan Anticall',
id: `${alice}anticall off`
}]
},
{
highlight_label: 'Alice Autobio',
rows: [{
title: 'Nyalakan Autobio',
id: `${alice}autobio on`
}]
},
{
highlight_label: 'Alice Autobio',
rows: [{
title: 'Matikan Autobio',
id: `${alice}autobio off`
}]
},
{
highlight_label: 'Alice Autoread',
rows: [{
title: 'Nyalakan Autoread',
id: `${alice}autoread on`
}]
},
{
highlight_label: 'Alice Autoread',
rows: [{
title: 'Matikan Autoread',
id: `${alice}autoread off`
}]
},
{
highlight_label: 'Alice Setprefix',
rows: [{
title: 'Setprefix',
id: `${alice}aliceprefix`
}]
}]

let listMessage = {
    title: `Setting ${botname}`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii developer, mau set apa di aku?`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'setprefix':

break;

case 'restart':
if (!isOwner) return XRO()
reply(`restarting ${global.botname}`)
reply(`Done ✅`)
await sleep(3000)
process.exit()
break

case 'setimgmenu': {
if (!isOwner) return XRO()
if (!/image/.test(mime)) return reply('reply fotonya')
await Alice.downloadAndSaveMediaMessage(qmsg, "./AliceMedia/image/Alice.jpg", false)
await reply("Berhasil mengganti image menu ✅")
}
break

case 'setimgpng': {
if (!isOwner) return XRO()
if (!/image/.test(mime)) return reply('reply fotonya')
await Alice.downloadAndSaveMediaMessage(qmsg, "./AliceMedia/image/Alice.png", false)
await reply("Berhasil mengganti image png")
}
break

case 'anticall': {
   if (!isOwner) return reply('❌ Fitur ini hanya untuk owner!')
   if (args[0] === 'on') {
      global.anticall = true
      reply('✅ AntiCall berhasil *diaktifkan*!')
   } else if (args[0] === 'off') {
      global.anticall = false
      reply('✅ AntiCall berhasil *dimatikan*!')
   } else {
      reply(`⚙️ Gunakan dengan benar:\n\n${prefix}anticall on\n${prefix}anticall off`)
   }
}
break

case 'autoread':
if (!isOwner) return XRO()
if (args.length < 1) return reply(`Example ${AliceCmd} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoread = true
reply(`Successfully Changed Auto Read To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoread = false
reply(`Successfully Changed Auto Read To ${q}`)
}
break

case 'self': {
if (!isOwner) return XRO()
Alice.public = false
reply('succes')
}
break

case 'public': {
if (!isOwner) return XRO()
Alice.public = true
reply('succes')
}
break

case 'shutdown': {
if (!isOwner) return XRO()
reply(`Otsukaresama deshita🖐`)
await sleep(5000)
process.exit()
}
break

case 'autobio':
if (!isOwner) return XRO()
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autobio = true
reply('autobio aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autobio = false
reply('autobio di matikan')
} else reply('on / off')
break

case 'setgroup':

break;

case 'setgc': {
if (!m.isGroup) return reply("*[ sʏsᴛᴇᴍ ]* ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴅᴏᴀɴɢ")
if (!isAdmins && !isOwner) return XRA()
if (!isBotAdmins) return reply("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
const caption = `Silahkan Dipilih Atmin`;
let sections = [
{
highlight_label: 'Alice Antilinkal Kick',
rows: [{
title: 'Nyalakan Antilinkall',
id: `${alice}antilinkall on kick`
}]
},
{
highlight_label: 'Alice Antilinkall Delete',
rows: [{
title: 'Nyalakan Antilinkall',
id: `${alice}antilinkall on delete`
}]
},
{
highlight_label: 'Alice Antilinkall',
rows: [{
title: 'Matikan Antilinkall',
id: `${alice}antilinkall off`
}]
},
{
highlight_label: 'Alice Antitagsw',
rows: [{
title: 'Nyalakan Antitagsw',
id: `${alice}tagsw on`
}]
},
{
highlight_label: 'Alice Antitagsw',
rows: [{
title: 'Matikan Antitagsw',
id: `${alice}tagsw off`
}]
},
{
highlight_label: 'Alice Antilinkgc',
rows: [{
title: 'Nyalakan Antilinkgc',
id: `${alice}antilinkgc on`
}]
},
{
highlight_label: 'Alice Antilinkgc',
rows: [{
title: 'Matikan Antilinkgc',
id: `${alice}antilinkgc off`
}]
},
{
highlight_label: 'Alice Antitoxic',
rows: [{
title: 'Nyalakan Antitoxic',
id: `${alice}antitoxic on`
}]
},
{
highlight_label: 'Alice Antitoxic',
rows: [{
title: 'Matikan Antitoxic',
id: `${alice}antitoxic off`
}]
},
{
highlight_label: 'Alice AntiNomorAsing',
rows: [{
title: 'Nyalakan AntiNomorAsing',
id: `${alice}antiasing on`
}]
},
{
highlight_label: 'Alice AntiNomorAsing',
rows: [{
title: 'Matikan AntiNomorAsing',
id: `${alice}antiasing off`
}]
},
{
highlight_label: 'Alice Antilinkfb',
rows: [{
title: 'Nyalakan Antilinkfb',
id: `${alice}antilinkfb on`
}]
},
{
highlight_label: 'Alice Antilinkfb',
rows: [{
title: 'Matikan Antilinkfb',
id: `${alice}antilinkfb off`
}]
},
{
highlight_label: 'Alice Antilinkig',
rows: [{
title: 'Nyalakan Antilinkig',
id: `${alice}antilinkig on`
}]
},
{
highlight_label: 'Alice Antilinkig',
rows: [{
title: 'Matikan Antilinkig',
id: `${alice}antilinkig off`
}]
},
{
highlight_label: 'Alice Autodownload',
rows: [{
title: 'Nyalakan Autodownload',
id: `${alice}autodownload on`
}]
},
{
highlight_label: 'Alice Autodownload',
rows: [{
title: 'Matikan Autodownload',
id: `${alice}autodownload off`
}]
},
{
highlight_label: 'Alice Antivirtek',
rows: [{
title: 'Nyalakan Antivirtek',
id: `${alice}antivirtex on`
}]
},
{
highlight_label: 'Alice Antivirtek',
rows: [{
title: 'Matikan Antivirtek',
id: `${alice}antivirtex off`
}]
},
{
highlight_label: 'Alice Antilinkyt',
rows: [{
title: 'Nyalakan Antilinkyt',
id: `${alice}antilinkyt on`
}]
},
{
highlight_label: 'Alice Antilinkyt',
rows: [{
title: 'Matikan Antilinkyt',
id: `${alice}antilinkyt off`
}]
},
{
highlight_label: 'Alice Antilinktele',
rows: [{
title: 'Nyalakan Antilinktele',
id: `${alice}antilinktele on`
}]
},
{
highlight_label: 'Alice Antilinktele',
rows: [{
title: 'Matikan Antilinktele',
id: `${alice}antilinktele off`
}]
},
{
highlight_label: 'Alice Antilinkytch',
rows: [{
title: 'Nyalakan Antilinkytch',
id: `${alice}antilinkytch on`
}]
},
{
highlight_label: 'Alice Antilinkytch',
rows: [{
title: 'Matikan Antilinkytch',
id: `${alice}antilinkytch off`
}]
},
{
highlight_label: 'Alice AntiTiktok',
rows: [{
title: 'Nyalakan AntiTiktok',
id: `${alice}antilinktiktok on`
}]
},
{
highlight_label: 'Alice AntiTiktok',
rows: [{
title: 'Matikan AntiTiktok',
id: `${alice}antilinktiktok off`
}]
},
{
highlight_label: 'Alice Antilinktwitter',
rows: [{
title: 'Nyalakan Antilinktwitter',
id: `${alice}antilinktwitter on`
}]
},
{
highlight_label: 'Alice Antilinktwitter',
rows: [{
title: 'Matikan Antilinktwitter',
id: `${alice}antilinktwitter off`
}]
},
{
highlight_label: 'Alice Antilinkbokep',
rows: [{
title: 'Nyalakan Antilinkbokep',
id: `${alice}antilinkbokep on`
}]
},
{
highlight_label: 'Alice Antilinkbokep',
rows: [{
title: 'Matikan Antilinkbokep',
id: `${alice}antilinkbokep off`
}]
},
{
highlight_label: 'Alice Antilinkterabox',
rows: [{
title: 'Nyalakan Antilinkterabox',
id: `${alice}ntilinkterabox on`
}]
},
{
highlight_label: 'Alice Antilinkterabox',
rows: [{
title: 'Matikan Antilinkterabox',
id: `${alice}antilinkterabox off`
}]
},
{
highlight_label: 'Alice AntilinkMediafire',
rows: [{
title: 'Nyalakan AntilinkMediafire',
id: `${alice}antilinkmediafire on`
}]
},
{
highlight_label: 'Alice AntilinkMediafire',
rows: [{
title: 'Matikan AntilinkMediafire',
id: `${alice}antilinkmediafire off`
}]
},
{
highlight_label: 'Alice AntiPoll',
rows: [{
title: 'Nyalakan AntiPoll',
id: `${alice}antipoll on`
}]
},
{
highlight_label: 'Alice AntiPoll',
rows: [{
title: 'Matikan AntiPoll',
id: `${alice}antipoll off`
}]
},
{
highlight_label: 'Alice Antisticker',
rows: [{
title: 'Nyalakan Antisticker',
id: `${alice}antisticker on`
}]
},
{
highlight_label: 'Alice Antisticker',
rows: [{
title: 'Matikan Antisticker',
id: `${alice}antisticker off`
}]
},
{
highlight_label: 'Alice Antiimage',
rows: [{
title: 'Nyalakan Antiimage',
id: `${alice}antiimage on`
}]
},
{
highlight_label: 'Alice Antiimage',
rows: [{
title: 'Matikan Antiimage',
id: `${alice}antiimage off`
}]
},
{
highlight_label: 'Alice Antivideo',
rows: [{
title: 'Nyalakan Antivideo',
id: `${alice}antivideo on`
}]
},
{
highlight_label: 'Alice Antivideo',
rows: [{
title: 'Matikan Antivideo',
id: `${alice}antivideo off`
}]
},
{
highlight_label: 'Alice Antibot',
rows: [{
title: 'Nyalakan Antibot',
id: `${alice}antibot on`
}]
},
{
highlight_label: 'Alice Antibot',
rows: [{
title: 'Matikan Antibot',
id: `${alice}antibot off`
}]
},
{
highlight_label: 'Alice Antimedia',
rows: [{
title: 'Nyalakan Antimedia',
id: `${alice}antimedia on`
}]
},
{
highlight_label: 'Alice Antimedia',
rows: [{
title: 'Matikan Antimedia',
id: `${alice}antimedia off`
}]
},
{
highlight_label: 'Alice Antidocument',
rows: [{
title: 'Nyalakan Antidocument',
id: `${alice}antidocument on`
}]
},
{
highlight_label: 'Alice Antidocument',
rows: [{
title: 'Matikan Antidocument',
id: `${alice}antidocument off`
}]
},
{
highlight_label: 'Alice Anticontact',
rows: [{
title: 'Nyalakan Anticontact',
id: `${alice}anticontact on`
}]
},
{
highlight_label: 'Alice Anticontact',
rows: [{
title: 'Matikan Anticontact',
id: `${alice}anticontact off`
}]
},
{
highlight_label: 'Alice Antilocation',
rows: [{
title: 'Nyalakan Antilocation',
id: `${alice}antilocation on`
}]
},
{
highlight_label: 'Alice Antilocation',
rows: [{
title: 'Matikan Antilocation',
id: `${alice}antilocation off`
}]
},
{
highlight_label: 'Alice Antilinkkick',
rows: [{
title: 'Nyalakan Antilinkkick',
id: `${alice}antilinkkick on`
}]
},
{
highlight_label: 'Alice Antilinkkick',
rows: [{
title: 'Matikan Antilinkkick',
id: `${alice}antilinkkick off`
}]
},
{
highlight_label: 'Alice Antiaudio',
rows: [{
title: 'Nyalakan AntiAudio',
id: `${alice}antiaudio on`
}]
},
{
highlight_label: 'Alice Antiaudio',
rows: [{
title: 'Matikan AntiAudio',
id: `${alice}antiaudio off`
}]
},
{
highlight_label: 'Alice Group',
rows: [{
title: 'Buka Group',
id: `${alice}gc open`
}]
},
{
highlight_label: 'Alice Group',
rows: [{
title: 'Tutup Group',
id: `${alice}gc close`
}]
}]

let listMessage = {
    title: `Setting Group`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii Atmin`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break
    }
  }
};

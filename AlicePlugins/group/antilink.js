// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['antilink', 'setgroup', 'groupset', 'setgc', 'antilinkgc', 'antilinkkick', 'antilinkyoutubevideo', 'antilinkyoutubevid', 'antilinkytvid', 'antilinkyoutubech', 'antilinkyoutubechannel', 'antilinkytch', 'antilinkinstagram', 'antilinkig', 'antilinkinsta', 'antilinkfacebook', 'antilinkfb', 'antilinkbokep', 'antilinktelegram', 'antilinktg', 'antilinkterabox', 'antilinkmediafire', 'antilinktiktok', 'antilinktt', 'antilinktwt', 'antilinktwitter', 'antilinktwit', 'antilinkall'],
  operate: async (context) => {
    const {
      Alice, m, chatUpdate, store, body, budy, pushname, args, text, q, prefix,
      command, isCmd, isOwner, isPrem, isBan, isBotAdmins, isAdmins, isGroupOwner,
      isGroup, isPrivate, isPc, isMedia, isImage, isVideo, isSticker, isAudio,
      mime, quoted, reply, xy, XRO, XReaction, Xban, alice, AliceCmd, groupMetadata,
      groupName, participants, groupAdmins, groupOwner, sender, senderNumber,
      botNumber, mentionUser, content, numberQuery, froms, time, timee, timestamp,
      salam, tanggal2, hariini, stime, Styles, limituser, limitAbis, useLimit,
      registered, IsReg, isMute, isAfkOn, isXMEDIA, isBot, qmsg, readmore,
      prefixRegex, thePrefix, db, fs, axios, fetch, cheerio, crypto,
      XRG, XRA, XRB, XRPC, AntiLinkFacebook, AntiLinkTelegram, AntiToxic, AntiDewasa,
      ntilinkfb, ntilinktg, nttoxic, ntilinkdewasa, ntilinkmediafire, welcmm, wlcmm,
      mute, rpgDb, initRpgUser, saveRpg, contacts, changelogs, ownername
    } = context;

    switch (command) {
case 'antilink':
case 'setgroup': 
case 'groupset': 
case 'setgc':{
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


    case 'antilinkgc':
        handleFeatureToggle('antilinkgc', command);
        break;


            case 'antilinkkick': {
                if (!m.isGroup) return XRG()
                if (!isAdmins) return XRA()
                if (!isBotAdmins) return XRBADM()
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkkick) return reply(`☘️ *Autokick Link Aktif*`)
                    db.data.chats[m.chat].antilinkkick = true
                    reply(`*Autokick Link Aktif*`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkkick) return reply(`*Autokick Link Di Nonatifkan*`)
                    db.data.chats[m.chat].antilinkkick = false
                    reply(`☘️ *Autokick Nonaktif*`)
                } else {
                    reply(`☘️ *Ketik ${AliceCmd} on/off*`)
                }
            }


case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return reply('_Sudah Diaktifkan_')
ntilinkytvid.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link video youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return reply('_Sudah Dimatikan_')
let off = ntilinkytvid.indexOf(m.chat)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return reply('_Sudah Diaktifkan_')
ntilinkytch.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json', JSON.stringify(ntilinkytch))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link channel youtube di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return reply('_Sudah Dimatikan_')
let off = ntilinkytch.indexOf(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiLinkInstagram) return reply('_Sudah Diaktifkan_')
ntilinkig.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json', JSON.stringify(ntilinkig))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim instagram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return reply('_Sudah Dimatikan_')
let off = ntilinkig.indexOf(m.chat)
ntilinkig.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkinstagram.json', JSON.stringify(ntilinkig))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiLinkFacebook) return reply('_Sudah Diaktifkan_')
ntilinkfb.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim facebook link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkfacebook.json', JSON.stringify(ntilinkfb))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antilinkbokep':{
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiDewasa) return reply('_Sudah Diaktifkan_')
ntilinkdewasa.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json', JSON.stringify(ntilinkdewasa))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link dewasa di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiDewasa) return reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkdewasa.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkbokep.json', JSON.stringify(ntilinkdewasa))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiLinkTelegram) return reply('_Sudah Diaktifkan_')
ntilinktg.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim telegram link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return reply('_Sudah Dimatikan_')
let off = ntilinktg.indexOf(m.chat)
ntilinktg.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktelegram.json', JSON.stringify(ntilinktg))
reply(`_Sukses matikan ${command} di group ini_`)
} 
}


case 'antilinkterabox':{
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiTerabox) return reply('_Sudah Diaktifkan_')
ntilinkterabox.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json', JSON.stringify(ntilinkterabox))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Terabox di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return reply('_Sudah Dimatikan_')
let off = ntilinkterabox.indexOf(m.chat)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkterabox.json', JSON.stringify(ntilinkterabox))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
} 
}


case 'antilinkmediafire':{
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiMediafire) return reply('_Sudah Diaktifkan_')
ntilink.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json', JSON.stringify(ntilinkmediafire))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim  link Mediafire di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiMediafire) return reply('_Sudah Dimatikan_')
let off = ntilinkfb.indexOf(m.chat)
ntilinkmediafire.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkmediafire.json', JSON.stringify(ntilinkmediafire))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
} 
}


case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiLinkTiktok) return reply('_Sudah Diaktifkan_')
ntilinktt.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json', JSON.stringify(ntilinktt))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim tiktok link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return reply('_Sudah Dimatikan_')
let off = ntilinktt.indexOf(m.chat)
ntilinktt.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktiktok.json', JSON.stringify(ntilinktt))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiLinkTwitter) return reply('_Sudah Diaktifkan_')
ntilinktwt.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim twitter link di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return reply('_Sudah Dimatikan_')
let off = ntilinktwt.indexOf(m.chat)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinktwitter.json', JSON.stringify(ntilinktwt))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antilinkall': {
    if (!m.isGroup) return XRG()
    if (!isAdmins && !isOwner) return reply('Khusus admin!')
    if (!isBotAdmins) return reply('Bot harus jadi admin!')

    let mode = (args[1] || '').toLowerCase() // delete/kick
    if (args[0] === "on") {
        if (!["delete", "kick"].includes(mode)) return reply(`Pilih mode:\n${prefix}antilinkall on delete\n${prefix}antilinkall on kick`)
        if (AntiLinkAll) return reply('_Sudah diaktifkan di grup ini_')

        // Tambah ke database
        ntilinkall.push({ id: m.chat, mode })
        fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json', JSON.stringify(ntilinkall, null, 2))
        reply(`✅ Antilinkall aktif dengan mode *${mode.toUpperCase()}* di grup ini.`)

        // Kirim peringatan ke member
        var groupe = await Alice.groupMetadata(m.chat)
        var members = groupe['participants']
        var mems = []
        members.map(adm => mems.push(adm.id))

        Alice.sendMessage(m.chat, {
            text: `\`\`\`「 ⚠️ Warning 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini!\nMode: *${mode.toUpperCase()}*`,
            contextInfo: { mentionedJid: mems }
        }, { quoted: m })

    } else if (args[0] === "off") {
        if (!AntiLinkAll) return reply('_Sudah dimatikan_')

        // Hapus dari database
        ntilinkall = ntilinkall.filter(v => v.id !== m.chat)
        fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antilinkall.json', JSON.stringify(ntilinkall, null, 2))
        reply(`❌ Antilinkall dimatikan di grup ini.`)

    } else {
        reply(`Gunakan:\n${prefix}antilinkall on delete\n${prefix}antilinkall on kick\n${prefix}antilinkall off`)
    }
}

    }
  }
};

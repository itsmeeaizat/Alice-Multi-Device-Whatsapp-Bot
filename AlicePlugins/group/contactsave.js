// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['savekontak', 'savekontak2', 'jpm', 'post', 'pushcontactgc'],
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
case 'savekontak': {
if (isBan) return XRB()
await XReaction()
if (!isOwner) return XRO()
if (!m.isGroup) return XRG()
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break;


case 'savekontak2': {
if (isBan) return XRB()
await XReaction()
if (!isOwner) return XRO()
if (!text) return reply("idgrupnya\n\nketik *.getidgc* untuk melihat id grup")
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Alice.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break;


case 'jpm': case 'post': case 'pushcontactgc': {
if (!isOwner) return reply("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!text) return reply(`*Incorrect Usage Please Use Like This*\n${AliceCmd} text|pause\n\nreply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${AliceCmd} hello|9000`)
await reply(`In progress...`)
let getGroups = await Alice.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Alice.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Alice.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Alice.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Alice.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}

    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['pushkontak', 'pushkontak2', 'pushkontakbeton', 'jpm', 'post', 'pushcontactgc'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'pushkontak': {
if (isBan) return XRB()
await XReaction()
if (!isOwner) return XRO()
if (!m.isGroup) return XRG()
if (!text) return reply("PESAN PUSHKON NYA?")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup Dengan Delay 6 Detik/Chat`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts))
await Alice.sendMessage(mem, {text: teks}, {quoted: fkontak})
await sleep(6000)
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
if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Alice.sendMessage(m.sender, { document: fs.readFileSync("./AliceDatabase/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./AliceDatabase/contacts.vcf", "")
}}
break

case 'pushkontak2': {
if (isBan) return XRB()
await XReaction()
    if (!isOwner) return XRO();
    
    if (!text) {
        return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    const parts = text.split("|");
    if (parts.length < 3) {
        return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    const idnya = parts[0];
    const delay = Number(parts[1]);
    const teks = parts[2];

    if (!idnya.endsWith("@g.us")) {
        return reply("Format ID Grup Tidak Valid");
    }

    if (isNaN(delay)) {
        return reply("Format Delay Tidak Valid");
    }

    if (!teks) {
        return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.getidgc* untuk melihat id grup");
    }

    let groupMetadataa;
    try {
        groupMetadataa = await Alice.groupMetadata(idnya);
    } catch (e) {
        return reply("*ID Grup* tidak valid!");
    }

    const participants = groupMetadataa.participants;
    const halls = participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    
    reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    const contacts = []; // Pastikan contacts dideklarasikan
    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync('./AliceDatabase/contacts.json', JSON.stringify(contacts));
            await Alice.sendMessage(mem, { text: teks }, { quoted: fkontak });
            await sleep(delay);
        }
    }

    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts.map(contact => {
            return [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:BUYER [ ${global.ownername} ] ${contact.split("@")[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                "END:VCARD",
                ""
            ].join("\n");
        }).join("");

        fs.writeFileSync("./AliceDatabase/contacts.vcf", vcardContent, "utf8");
    } catch (err) {
        return reply(err.toString());
    } finally {
        if (m.chat !== m.sender) {
            await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`);
        }
        await Alice.sendMessage(m.sender, {
            document: fs.readFileSync("./AliceDatabase/contacts.vcf"),
            fileName: "contacts.vcf",
            caption: "File Contact Berhasil Di Buat✅",
            mimetype: "text/vcard"
        }, { quoted: m });

        contacts.splice(0, contacts.length);
        await fs.writeFileSync("./AliceDatabase/contacts.json", JSON.stringify(contacts));
        await fs.writeFileSync("./AliceDatabase/contacts.vcf", "");
    }
}
break;

case 'pushkontakbeton': {
if (!isOwner) return XRO()
if (!text) return reply("idgrup|pesan|teksdibutton")
if (!text.split("|")) return reply("idgrup|pesan|teksdibutton")
const [idgc, pes, peszie] = text.split("|")
const teks = pes
const tekszie = peszie
const jidawal = m.chat
const data = await Alice.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'

let imgscs = await prepareWAMessageMedia({ image: fs.readFileSync("./AliceMedia/image/Alice.jpg") }, { upload: Alice.waUploadToServer })

const msgii = await generateWAMessageFromContent(mem, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: teks
}), 

contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${ownername}`, newsletterJid: idch }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender]
}, 

carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: tekszie, 
hasMediaAttachment: true,
...imgscs
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
name: "single_select",
buttonParamsJson:
`{
  title": "List Produk",
  "sections": [
    {
      "title": "",
      "rows": [
        {
          "header": "Script Alice Asistent",
          "title": "© Aizat",
          "description": "",
          "id": ""
        },
        {
          "header": "Panel Pterodactyl Private𝗹",
          "title": "© Aizat",
          "description": "",
          "id": ""
        }
]}
]}`
},
{
name: "quick_reply",
buttonParamsJson: `{\"display_text\":\"Done Save\",menu\"id\":\"\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Buy Script\",\"url\":\"?text=buy+sc+Alice+bang+Aizat\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: null})
await Alice.relayMessage(mem, msgii.message, {messageId: msgii.key.id})
await sleep(global.delayPushkontak)
}}

await Alice.sendMessage(jidawal, {text: `Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

case 'jpm':
case 'post':
case 'pushcontactgc': {
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
break
    }
  }
};

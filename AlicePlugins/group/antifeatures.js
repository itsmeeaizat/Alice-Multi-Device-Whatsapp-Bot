// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['antispam', 'antipoll', 'antisticker', 'antiimage', 'antivideo', 'antibot', 'antiviewonce', 'antimedia', 'antidocument', 'anticontact', 'antilocation', 'antipromotion', 'antiaudio', 'antivirus', 'antivirtex', 'antitoxic', 'tagsw', 'antitagsw', 'antiwame'],
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
			case 'antispam':{
				if (!m.isGroup) return XRG()
				if (args.length < 1) return reply('on/off?')
				if (args[0] === 'on') {
					db.data.chats[m.chat].antispam = true
					reply(`${command} is enabled`)
				} else if (args[0] === 'off') {
					db.data.chats[m.chat].antispam = false
					reply(`${command} is disabled`)
				}
			}


case 'antipoll':
        handleFeatureToggle('antipoll', command);
        break;


    case 'antisticker':
        handleFeatureToggle('antisticker', command);
        break;


    case 'antiimage':
        handleFeatureToggle('antiimage', command);
        break;


    case 'antivideo':
        handleFeatureToggle('antivideo', command);
        break;


    case 'antibot':
        handleFeatureToggle('antibot', command);
        break;


    case 'antiviewonce':
        handleFeatureToggle('antiviewonce', command);
        break;


    case 'antimedia':
        handleFeatureToggle('antimedia', command);
        break;


    case 'antidocument':
        handleFeatureToggle('antidocument', command);
        break;


    case 'anticontact':
        handleFeatureToggle('anticontact', command);
        break;


    case 'antilocation':
        handleFeatureToggle('antilocation', command);
        break;


    case 'antipromotion':
        handleFeatureToggle('antipromotion', command);
        break;


    case 'antiaudio':
        handleFeatureToggle('antiaudio', command);
        break;


case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiVirtex) return reply('_Sudah Diaktifkan_')
ntvirtex.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json', JSON.stringify(ntvirtex))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada orang yang diperbolehkan mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiVirtex) return reply('_Sudah Dimatikan_')
let off = ntvirtex.indexOf(m.chat)
ntvirtex.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antivirus.json', JSON.stringify(ntvirtex))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'antitoxic': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiToxic) return reply('_Sudah Diaktifkan_')
nttoxic.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json', JSON.stringify(nttoxic))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang diperbolehkan menggunakan kata-kata buruk di grup ini, yang menggunakan akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiToxic) return reply('_Sudah Dimatikan_')
let off = nttoxic.indexOf(m.chat)
nttoxic.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antitoxic.json', JSON.stringify(nttoxic))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}


case 'tagsw':
case 'antitagsw': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)

  const group = ensureGroup(m.chat)
  const arg = (args[0] || '').toLowerCase()

  if (!arg) {
    return reply(`⚙️ Anti TagSW: *${group.enabled ? 'ON' : 'OFF'}*\nGunakan: *.tagsw on* atau *.tagsw off*`)
  }

  if (['on','enable','aktif','1','true'].includes(arg)) {
    group.enabled = true
    saveAT(antitagsw)
    reply('✅ Anti TagSW *ON* untuk grup ini.')
  } else if (['off','disable','mati','0','false'].includes(arg)) {
    group.enabled = false
    saveAT(antitagsw)
    reply('✅ Anti TagSW *OFF* untuk grup ini.')
  } else {
    reply('Gunakan: *.tagsw on* / *.tagsw off*')
  }
}


case 'antiwame': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiWame) return reply('_Sudah Diaktifkan_')
ntwame.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json', JSON.stringify(ntwame))
reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await Alice.groupMetadata(m.chat)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Alice.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak ada yang boleh mengirim wame di grup ini, siapa yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiWame) return reply('_Sudah Dimatikan_')
let off = ntwame.indexOf(m.chat)
ntwame.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiwame.json', JSON.stringify(ntwame))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}

    }
  }
};

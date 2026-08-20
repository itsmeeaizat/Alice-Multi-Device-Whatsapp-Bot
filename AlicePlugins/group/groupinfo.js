// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['whereami', 'getidgc', 'getinfogc', 'cekidgc', 'getinfogrup', 'getgc', 'inspect', 'cekidch', 'getch', 'getinfoch', 'getchid', 'linkgc'],
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
case 'whereami': {
  initRpgUser(sender, pushname)
  let loc = rpgDb[sender].location || 'tidak diketahui'
  reply(`📍 Kamu berada di: *${loc}*`)
  break;
}


case 'getidgc':
if (!m.isGroup) return reply('kusus Group')
ewe = `${m.chat}`
await Alice.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdreply: {
showAdAttribution: true,
}}}}}}, {})
break;


			case 'getinfogc':
            case 'cekidgc':
			case 'getinfogrup':
			case 'getgc': {
if (isBan) return XRB()
await XReaction()
				if (!text) return reply(`${AliceCmd} Url Group`)
				if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply('tidak terdeteksi')
				try {
					let result = args[0].split('https://chat.whatsapp.com/')[1]
					let inpo = await Alice.groupGetInviteInfo(result)
					let teks = `
* ID: ${inpo.id}
* name: ${inpo.subject}
* owner: ${inpo.owner}
* kirim Pesan: ${inpo.announce ? 'Hanya Admin' : "Semua Orang"}
* persetujuan admin: ${inpo.joinApprovalMode ? 'Yes' : "No"}
* member Add mode: ${inpo.memberAddMode ? 'Yes' : "No"}
* deskripsi: ${inpo.desc}`				
					let button = [
                        {
                            name: "cta_copy",
					        buttonParamsJson: JSON.stringify({
                                display_text: "ID Group",
                                id: `${inpo.id}`,
                                copy_code: `${inpo.id}`
                            })
					    }
                    ]
					Alice.sendInteractive(m.chat, button, null, packname, teks, m)
				} catch (error) {
					XRR()
				}
			}


			case 'inspect':
            case 'cekidch':
			case 'getch':
			case 'getinfoch':
			case 'getchid': {
if (isBan) return XRB()
await XReaction()
				if (!text) return reply(`${AliceCmd} Url Channel WhatsApp`)
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com/channel')) return reply('tidak valid')

				function formatDate(timestamp) {
					const date = new Date(timestamp * 1000);
					const months = [
						'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
					];
					const day = date.getDate();
					const month = months[date.getMonth()];
					const year = date.getFullYear();
					return `${day} ${month} ${year}`;
				}
				try {
					let result = args[0].split('https://whatsapp.com/channel/')[1]
					let data = await Alice.newsletterMetadata("invite", result)
					let teks = `
* name: ${data.name}
* ID: ${data.id}
* status: ${data.state}
* dibuat Pada: ${formatDate(data.creation_time)}
* subscribers: ${data.subscribers}
* meta Verify: ${data.verification}
* react emoji: ${data.reaction_codes}
* description: ${data.description}`
					let button = [
                        {
                            name: "cta_copy",
					        buttonParamsJson: JSON.stringify({
                                display_text: "ID Channelnya",
                                id: `${data.id}`,
                                copy_code: `${data.id}`
                            })
					    }
                    ]
					Alice.sendInteractive(m.chat, button, null, packname, teks, xy)
				} catch (error) {
					XRR()
				}
			}


case 'linkgc': {
  if (!m.isGroup) return reply('⛔ Hanya di grup.')
  try {
    let response = await Alice.groupInviteCode(m.chat)
    return reply(`📎 Link grup:\nhttps://chat.whatsapp.com/${response}`)
  } catch (e) {
    return reply("❌ Gagal ambil link.")
  }
}

    }
  }
};

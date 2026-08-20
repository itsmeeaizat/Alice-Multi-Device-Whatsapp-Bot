// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['upchv', 'upstatuswa', 'upstatus', 'upsw', 'upswtext', 'upswteks', 'upswvideo', 'upswaudio', 'upswimg'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'upchv': {
      if (!isOwner) return XRO()
    if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Use ${AliceCmd} Judul Lagu|Terserah\n\nExample ${AliceCmd} Mungkin | Kita Sad Dulu`);

    Alice.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    ngawi = text.split("|")[0];
    jomokck = text.split("|")[1];
    await sleep(6000);

    Alice.sendMessage(`${global.idch}`, {
        audio: await quoted.download(),
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: idch,
                serverMessageId: 20,
                newsletterName: botname
            },
            externalAdreply: {
                title: ngawi,
                body: jomokck,
                thumbnailUrl: thumbnailReply,
                sourceUrl: null,
                mediaType: 1
            }
        }
    });

    await sleep(2000);
    Alice.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

case 'upstatuswa':

break;

case 'upstatus':

break;

case 'upsw': {
    let argsText = text.split(',').map(a => a.trim())
    if (argsText.length < 2) return reply(`Contoh: ${AliceCmd} idgrup, teks`)

    let target = argsText[0]
    let caption = argsText.slice(1).join(',')

    if (!quoted) return reply(`Kutip pesan seperti gambar, video, atau audio dengan caption ${AliceCmd}`)

    if (quoted.mtype === "audioMessage") {
        let audioData = await quoted.download()
        Alice.sendStatusMention(
            { audio: audioData, mimetype: 'audio/mp4', ptt: true },
            [target]
        )
    }

    if (quoted.mtype === "imageMessage") {
        let imageData = await quoted.download()
        Alice.sendStatusMention(
            { image: imageData, caption: caption || '' },
            [target]
        )
    }

    if (quoted.mtype === "videoMessage") {
        let videoData = await quoted.download()
        Alice.sendStatusMention(
            { video: videoData, caption: caption || '' },
            [target]
        )
    }
    reply('Sukses mengirim status mention!')
}
break

case 'upswtext':

break;

case 'upswteks': {
               if (!isOwner) return XRO()
               if (!q) return reply('Text?')
               await Alice.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply('Succes')
            }
            break

case 'upswvideo': {
               if (!isOwner) return XRO()
               if (/video/.test(mime)) {
                  var videosw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await reply('Succes')
               } else {
                  reply('reply to video')
               }
            }
            break

case 'upswaudio': {
               if (!isOwner) return XRO()
               if (/audio/.test(mime)) {
                  var audiosw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await reply('Succes')
               } else {
                  reply('reply to audio')
               }
            }
            break

case 'upswimg': {
               if (!isOwner) return XRO()
               if (/image/.test(mime)) {
                  var imagesw = await Alice.downloadAndSaveMediaMessage(quoted)
                  await Alice.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await reply('Succes')
               } else {
                  reply('reply to image')
               }
            }
            break
    }
  }
};

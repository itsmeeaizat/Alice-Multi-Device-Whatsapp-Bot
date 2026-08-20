// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['img2txt', 'img2promt', 'txt2img', 'img2img', 'txt2pixel', 'txt2ghibli', 'txt2anime', 'img2video'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'img2txt':
if (isBan) return XRB()
await XReaction()
                if (!/image/.test(mime)) return reply(`*Gambarnya Mana?*`)
                if (/image/.test(mime)) {
                    await XReaction()
                    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
                    let mem = await TelegraPh(mee)
                    let len = await (await fetch(`https://itzpire.com/tools/img2text?url=${mem}`)).json()
                    let result = len.result
                    Alice.sendMessage(m.chat, { image: { url: mem }, caption: `${result}` }, { quoted: m })
                }
                break

case 'img2promt':
if (isBan) return XRB()
await XReaction()
                if (!/image/.test(mime)) return reply(`Gambarnya Mana?`)
                if (/image/.test(mime)) {
                    await XReaction()
                    let mee = await Alice.downloadAndSaveMediaMessage(quoted)
                    let mem = await TelegraPh(mee)
                    let len = await (await fetch(`https://itzpire.com/tools/img2prompt?url=${mem}`)).json()
                    let result = len.result
                    Alice.sendMessage(m.chat, { image: { url: mem }, caption: `${result}` }, { quoted: m })
                }
                break

case 'txt2img':

break;

case 'img2img': {
if (isBan) return XRB()
await XReaction()
    try {
        const prompt = args.join(' ')
        if (!prompt) return reply(`Example : ${AliceCmd} Pemandangan Gunung Fuji/ubah menjadi malam hari`)
 
        switch (command.toLowerCase()) {
            case 'txt2img':
                const txtBuffer = await creartTxt2Img(prompt)
                await Alice.sendMessage(m.chat, {
                    image: txtBuffer,
                }, { quoted: m })
                break
 
            case 'img2img':
                const q = m.quoted ? m.quoted : m
                const mime = (q.msg || q).mimetype || ''
                if (!mime.startsWith('image/')) return reply('Mna Gambar Nya Bang')
                const imageBuffer = await q.download()
                const imgBuffer = await creartImg2Img(prompt, imageBuffer)
                await Alice.sendMessage(m.chat, {
                    image: imgBuffer,
                }, { quoted: m })
                break
        }
    } catch (e) {
        reply(e.message)
    }
}
break

case 'txt2pixel': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Mencari apa?\n\nContoh : ${AliceCmd} a girl`)
    await XReaction()
    let j = await txt2.pixel(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

case 'txt2ghibli': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Prompt?\n\nContoh : ${AliceCmd} a girl`)
    await XReaction()
    let j = await txt2.ghibli(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

case 'txt2anime': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Prompt?\n\nContoh : ${AliceCmd} a girl`)
    await XReaction()
    let j = await txt2.anime(text)
    Alice.sendMessage(m.chat, {
        image: { 
            url: j
        },
        caption: `prompt: ${text}`
    }, { quoted: m })
}
break

case 'img2video':

break;
    }
  }
};

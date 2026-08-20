// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['voice-alice', 'voice-michie', 'voice-tokoh', 'autorecord', 'autotyping', 'autodownload'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'voice-alice': {
if (isBan) return XRB()
await XReaction()
    if (!text) {
        return reply(`*Contoh:* ${AliceCmd} AliceCmd,Haii ceee`);
    }
    await XReaction()
const [voice, ...messageParts] = text.split(',');    
const message = messageParts.join(',').trim();

    let prompt = `Nama kamu adalah Alice, kamu adalah seorang wanita yang lembut dan penuh kasih sayang. Berbicara dengan nada yang lembut, hangat, dan penuh perhatian. Suaramu menenangkan dan penuh empati, seperti seorang sahabat yang selalu mendengarkan. Tanggapi pesan berikut dengan kelembutan dan kebaikan hati: "${message}"`;
 

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=bella`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'voice-michie': {
if (isBan) return XRB()
await XReaction()
    if (!text) {
        return reply(`*Contoh:* ${AliceCmd} michie,Haii ceee`);
    }
    await XReaction()
const [voice, ...messageParts] = text.split(',');    
const message = messageParts.join(',').trim();

    let prompt = `Nama kamu adalah michie dari jkt48, kamu adalah seorang wanita yang lembut dan penuh kasih sayang. Berbicara dengan nada yang lembut, hangat, dan penuh perhatian. Suaramu menenangkan dan penuh empati, seperti seorang sahabat yang selalu mendengarkan. Tanggapi pesan berikut dengan kelembutan dan kebaikan hati: "${message}"`;
 

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=michi_jkt48`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'voice-tokoh': {
if (isBan) return XRB()
await XReaction()
    if (!text) {
        return reply(`*Contoh:* ${AliceCmd} megawati,Hai bu\n\nDaftar Tokoh Yang Tersedia:\nadam\nprabowo\nthomas_shelby\njokowi\nmegawati`);
    }
    await XReaction()

    const [voice, ...messageParts] = text.split(',');
    const message = messageParts.join(',').trim();

    if (!voice || !message) {
        return reply(`*Format salah!*\nGunakan format: ${AliceCmd} voice,teks\n\n*Contoh:* ${AliceCmd} prabowo,Halo Pak`);
    }

    const voices = [
        'adam',
        'prabowo',
        'thomas_shelby',
        'jokowi',
        'megawati',
    ];

    if (!voices.includes(voice.toLowerCase())) {
        return reply(`*Suara tidak ditemukan!*\nDaftar suara yang tersedia:\n- ${voices.join('\n- ')}\n\nGunakan format: ${AliceCmd} <voice>,<teks>`);
    }

    let prompt = '';
    if (['prabowo', 'adam', 'thomas_shelby', 'jokowi', 'megawati'].includes(voice.toLowerCase())) {
        prompt = `Nama kamu adalah ${voice}, kamu adalah seorang pria yang tegas dan penuh wibawa. Berbicara dengan nada yang serius, penuh keyakinan, dan memiliki karisma yang kuat. Semua ucapanmu harus terdengar berwibawa dan penuh makna, tidak pernah ragu dalam berbicara. Tanggapi pesan berikut dengan tegas dan penuh kepercayaan diri: "${message}"`;
    }

    const requestData = { content: message, user: m.sender, prompt: prompt };

    try {
        const response = await axios.post('https://luminai.my.id', requestData);
        const generatedText = response.data.result;

        const ttsUrl = `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${encodeURIComponent(generatedText)}&key=${apii.xterm.key}&voice=${voice}`;
        const audioResponse = await fetch(ttsUrl);

        if (!audioResponse.ok) throw new Error('Gagal mengambil audio TTS');
        const audioBuffer = await audioResponse.arrayBuffer();

        Alice.sendMessage(m.chat, { audio: Buffer.from(audioBuffer), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
    } catch (err) {
        console.error('Terjadi kesalahan:', err);
        reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
}
break

case 'autorecord':
			if (!isOwner) return XRO()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoRecord == true) return reply("Sudah Active")
				db.data.settings[botNumber].autoRecord = true
				reply(`Succes`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoRecord == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autoRecord = false
				reply(`Succes`)
			} else {
				reply("\`\`\`「 MODE AUTO RECORD 」\`\`\`\n\n0. Off\n1. On")
			}
			break

case 'autotyping':
			if (!isOwner) return XRO()
			if (text == "on" || text == "1") {
				if (db.data.settings[botNumber].autoTyping == true) return reply("Sudah Active")
				db.data.settings[botNumber].autoTyping = true
				reply(`Succes`)
			} else if (text == "off" || text == "0") {
				if (db.data.settings[botNumber].autoTyping == false) return reply("Sudah Non Active")
				db.data.settings[botNumber].autoTyping = false
				reply(`Succes`)
			} else {
				reply("\`\`\`「 MODE AUTO TYPING 」\`\`\`\n\n0. Off\n1. On")
			}
			break

case 'autodownload':
if (!m.isGroup) return reply(`Khusus Grub Geblek`)
if (!isAdmins && !isOwner) return reply('Khusus Admin Sayaaaang ><')
if (args[0] == 'on'){
if (global.autodonlod) return reply('sudah aktif!')
global.autodonlod = true
reply('mode auto download aktif')
} else if (args[0] == 'off'){
if (!global.autodonlod) return reply('sudah dimatikan!')
global.autodonlod = false
reply('mode auto download matikan')
} else reply('on / off')
break
    }
  }
};

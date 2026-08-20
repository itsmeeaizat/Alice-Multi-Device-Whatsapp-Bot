// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tts', 'bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai', 'vocalremover', 'instrumenremover'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'tts': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply("masukkan text\nExample: ahh ah ah ahhh")
const API_BASE_URL = 'https://flowfalcon.dpdns.org/tools/text-to-speech';

  try {
    const res = await fetch(`${API_BASE_URL}?text=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (!json.status || !json.result || !Array.isArray(json.result) || json.result.length === 0) {
      return reply('Gagal generate suara atau tidak ada suara yang ditemukan.');
    }

    let allButtons = [];

    for (const voice of json.result) {
      const name = voice.voice_name;
      const url = Object.values(voice).find(v => typeof v === 'string' && v.startsWith('https'));

      if (url) {
        allButtons.push({
          buttonId: `.getaudio ${url}`,
          buttonText: { displayText: `Voice: ${name}`},
          type: 1
        });
      }
    }

    if (allButtons.length === 0) {
        return reply('Tidak ada suara yang valid ditemukan untuk dibuatkan tombol.');
    }

    const buttonMessage = {
        text: `Pilih jenis suara untuk "${text}":`,
        footer: "Klik tombol di bawah untuk mendengarkan suara.",
        buttons: allButtons,
        headerType: 1,
        viewOnce: true
    };

    await Alice.sendMessage(m.chat, buttonMessage, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('Terjadi kesalahan saat memproses audio.');
  }
}
break;

case 'bass':

break;

case 'blown':

break;

case 'deep':

break;

case 'earrape':

break;

case 'fast':

break;

case 'fat':

break;

case 'nightcore':

break;

case 'reverse':

break;

case 'robot':

break;

case 'slow':

break;

case 'smooth':

break;

case 'tupai': {
if (isBan) return XRB()
await XReaction()
          if (!/audio/.test(mime)) return reply(`reply audio, dengan caption *${AliceCmd}*`);
          let set;
          if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';      
          if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';       
          if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';     
          if (/earrape/.test(command)) set = '-af volume=12';      
          if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';      
          if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';     
          if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';        
          if (/reverse/.test(command)) set = '-filter_complex "areverse"';      
          if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';   
          if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'; 
          if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';    
          if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
          if (/audio/.test(mime)) {
              let media = await Alice.downloadAndSaveMediaMessage(quoted);
              await reaction(m.chat, "⚡")
              let ran = getRandomFile('.mp3');
              exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(media);
                  if (err) return reply(err);
                  let buff = fs.readFileSync(ran);        
                  sendMusic(buff);
                  fs.unlinkSync(ran);
              });
          }
      }
      break;


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Audio Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Store Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'vocalremover':

break;

case 'instrumenremover': {
if (isBan) return XRB()
await XReaction()
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    
    let wait = 'Sedang memproses audio, tunggu sebentar blokkk..';
    let usedPrefix = '.';

    if (!/audio/.test(mime)) return reply(`Reply *audio* dengan perintah ${prefix + command}`);

    try {
        let buffer = await q.download();
        
        let fileSizeLimit = 5 * 1024 * 1024;
        if (buffer.length > fileSizeLimit) {
            return reply('Ukuran audio terlalu besar, maksimal 5MB.');
        }

        let media = await uploadToCatbox(buffer);
        if (!media) throw new Error('Gagal mengunggah media.');

        let response = await fetch(`https://api.betabotz.eu.org/api/tools/voiceremover?url=${media}&apikey=beta-gilang`);
        let res = await response.json();

        if (!res.status) {
            throw 'Gagal memproses audio dari API.';
        }

        if (command === 'vocalremover') {
            await Alice.sendMessage(m.chat, { 
                audio: { url: res.result.instrumental_path }, 
                mimetype: 'audio/mpeg',
                fileName: 'instrumental.mp3'
            }, { quoted: m });
        } else if (command === 'instrumenremover') {
            await Alice.sendMessage(m.chat, { 
                audio: { url: res.result.vocal_path }, 
                mimetype: 'audio/mpeg',
                fileName: 'vocal.mp3'
            }, { quoted: m });
        }

    } catch (e) {
        console.error(e);
        await reply('*[INTERNAL SERVER ERROR!]*\nTerjadi kesalahan, coba lagi nanti.');
    }
    break;
}
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tt', 'tiktok', 'tiktoksearch', 'ttsearch', 'tiktokstalk', 'faketiktok', 'tiktokfake', 'tiktokgirl', 'tiktokghea', 'tiktokbocil', 'tiktoknukhty', 'tiktoksantuy', 'tiktokkayes', 'tiktokpanrika', 'tiktoknotnot'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, AliceCmd, args, axios, body, command, ds, fetch, fg, fs, isBan, m, pickRandom, prefix, q, quoted, reply, sender, text } = context;

    switch (command) {
case 'faketiktok': case 'tiktokfake': {
if (isBan) return XRB()
await XReaction()
  if (!text) {
    return Alice.sendMessage(m.chat, {
      text: `*Fake TikTok Profile Generator*\n\n` +
            `Kirim perintah dengan format:\n` +
            `*${AliceCmd}* Nama|Username|Followers|Following|Likes|Bio|Verified(true/false)|isFollow(true/false)|dark/light\n\n` +
            `Contoh:\n` +
            `*${AliceCmd}* Apa Kek|Yubi|4020030|12|789000|Beginner in coding, but I love it! Follow me for more coding tips and tricks.|true|true|dark`
    }, { quoted: m });
  }
  let [name, username, followers, following, likes, bio, verified = 'true', isFollow = 'true', dark = 'true'] = text.split('|')
  if (!name || !username || !followers || !following || !likes || !bio) {
    return reply('Format salah.\nCoba ikuti contoh:\nNama|Username|Followers|Following|Likes|Bio|Verified|isFollow|Theme')
  }
  let ppUrl = await Alice.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/2f61d40b7cfb440f3cfa7.jpg')
  let apiUrl = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(ppUrl)}&verified=${verified}&followers=${followers}&following=${following}&likes=${likes}&bio=${encodeURIComponent(bio)}&dark=${dark}&isFollow=${isFollow}`

  try {
const axios = require('axios');
    let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(data)
    const FormData = (await import('form-data')).default
    const form = new FormData()
    form.append('reqtype', 'fileupload')
    form.append('userhash', '')
    form.append('fileToUpload', buffer, 'tiktokfake.jpg')
    const upres = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    if (!upres.data || !upres.data.includes('catbox')) return reply('Gagal upload gambar.')
    Alice.sendMessage(m.chat, {
      image: { url: upres.data }
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    reply('Terjadi kesalahan saat membuat gambar.')
  }
}
  break;


case 'tt': 
case 'tiktok': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} linknya`)
await XReaction()
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await Alice.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
Alice.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
Alice.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
}
break;


case 'tiktokstalk': {
    if (isBan) return XRB();
    await XReaction();
    if (!args[0]) return reply('Masukkan username TikTok!\nContoh: cektiktok jokowi');

    const username = args[0];
    const url = `https://apii.ryuuxiao.biz.id/stalk/tiktok?username=${username}&apikey=free`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data.status || !data.result) return reply('❌ Gagal mengambil data. Username tidak ditemukan.');

        const result = data.result;
        const {
            nickname,
            uniqueId,
            signature,
            verified,
            commerceUserInfo,
            avatarLarger,
            followerCount,
            followingCount,
            heart,
            region
        } = result;

        let teks = `🎵 *Hasil Stalk TikTok*\n\n` +
                   `👤 *Nickname:* ${nickname || '-'}\n` +
                   `🔖 *Username:* @${uniqueId || '-'}\n` +
                   `📍 *Region:* ${region || '-'}\n` +
                   `📝 *Bio:* ${signature || '-'}\n` +
                   `✔️ *Verified:* ${verified ? 'Ya' : 'Tidak'}\n` +
                   `🏷️ *Kategori:* ${commerceUserInfo?.category || '-'}\n\n` +
                   `👥 *Followers:* ${followerCount?.toLocaleString() || '0'}\n` +
                   `👤 *Following:* ${followingCount?.toLocaleString() || '0'}\n` +
                   `❤️ *Likes:* ${heart?.toLocaleString() || '0'}\n`;

        // Kirim gambar dan caption secara terpisah
        await Alice.sendMessage(m.chat, { image: { url: avatarLarger }, caption: teks }, { quoted: m });

    } catch (err) {
        reply(`❗ Terjadi error: ${err.message}`);
    }

    break;
}

case 'telegramstalk': {
    if (isBan) return XRB();
    await XReaction();
    if (!args[0]) return reply(`❌ Masukkan username Telegram!\nContoh:\n${prefix}telegramstalk alwaysrikyreal`);

    const username = args[0].replace('@', '');
    const url = `https://apii.ryuuxiao.biz.id/stalk/telegram?username=${encodeURIComponent(username)}&apikey=free`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data?.status || !data?.result) {
            return reply(`⚠️ Gagal stalk @${username}, coba lagi.`);
        }

        const { id, first_name, last_name, is_bot, username: uname, language_code } = data.result;
        const teks = `🔍 *Telegram User Info*\n\n` +
                     `• Username: @${uname || username}\n` +
                     `• Name: ${first_name || ''} ${last_name || ''}\n` +
                     `• ID: ${id || '-'}\n` +
                     `• Bot: ${is_bot ? 'Ya 🤖' : 'Tidak'}\n` +
                     `• Language: ${language_code || '-'}`;

        await Alice.sendMessage(m.chat, { text: teks }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply(`❗ Error: ${err.message}`);
    }
    break;
}
case 'igstalk':
case 'instagramstalk': {
    if (isBan) return XRB()
    await XReaction()

    if (!text) return reply('⚠️ Masukkan username Instagram!\n\nContoh:\n.igstalk mycyll.7')

async function igstalkerr(username) {
  try {
    const url = `https://media.mollygram.com/?url=${encodeURIComponent(username)}`;

    const headers = {
      'accept': '*/*',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
      'origin': 'https://mollygram.com',
      'referer': 'https://mollygram.com/',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
    };

    const { data } = await axios.get(url, { headers });

    if (data.status !== 'ok') throw new Error('gagal ambil data');

    const html = data.html;

    const getMatch = (regex) => {
      const match = html.match(regex);
      return match ? match[1].trim() : null;
    };

    const profilePic = getMatch(/<img[^>]*class="[^"]*rounded-circle[^"]*"[^>]*src="([^"]+)"/i)
      || getMatch(/<img[^>]*src="([^"]+)"[^>]*class="[^"]*rounded-circle[^"]*"/i);

    const uname = getMatch(/<h4 class="mb-0">([^<]+)<\/h4>/);
    const fullname = getMatch(/<p class="text-muted">([^<]+)<\/p>/);
    const bio = getMatch(/<p class="text-dark"[^>]*>([^<]+)<\/p>/);
    const posts = getMatch(/<div[^>]*>\s*<span class="d-block h5 mb-0">([^<]+)<\/span>\s*<div[^>]*>posts<\/div>/i);
    const followers = getMatch(/<div[^>]*>\s*<span class="d-block h5 mb-0">([^<]+)<\/span>\s*<div[^>]*>followers<\/div>/i);
    const following = getMatch(/<div[^>]*>\s*<span class="d-block h5 mb-0">([^<]+)<\/span>\s*<div[^>]*>following<\/div>/i);

    return {
      username: uname,
      fullname,
      bio,
      profilePic,
      posts,
      followers,
      following
    };

  } catch (error) {
    console.error('emror:', error.message);
    return null;
  }
}

    try {
        let data = await igstalkerr(text)

        if (!data) return reply('❌ Gagal mengambil data profil.')

        let caption = `
👤 *Username:* ${data.username || '-'}
📛 *Fullname:* ${data.fullname || '-'}
📝 *Bio:* ${data.bio || '-'}
📷 *Posts:* ${data.posts || '-'}
👥 *Followers:* ${data.followers || '-'}
➡️ *Following:* ${data.following || '-'}
        `.trim()

        if (data.profilePic) {
            await Alice.sendMessage(m.chat, {
                image: { url: data.profilePic },
                caption: caption,
                contextInfo: {
                    externalAdreply: {
                        showAdAttribution: true,
                        title: data.username || 'Instagram Profile',
                        body: author,
                        sourceUrl: `https://instagram.com/${data.username || text}`,
                        thumbnailUrl: data.profilePic,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m })
        } else {
            reply(caption)
        }

    } catch (e) {
        console.log(e)
        reply('❌ Error: ' + e.message)
    }
}
break;


case 'tiktokgirl':
if (isBan) return XRB()
await XReaction()
var asupan = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: ii.url }}, { quoted: m })
break;


case 'tiktokghea':
if (isBan) return XRB()
await XReaction()
var gheayubi = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iii.url }}, { quoted: m })
break;


case 'tiktokbocil':
if (isBan) return XRB()
await XReaction()
var bocil = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiii.url }}, { quoted: m })
break;


case 'tiktoknukhty':
if (isBan) return XRB()
await XReaction()
var ukhty = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiii.url }}, { quoted: m })
break;


case 'tiktoksantuy':
if (isBan) return XRB()
await XReaction()
var santuy = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiii.url }}, { quoted: m })
break;


case 'tiktokkayes':
if (isBan) return XRB()
await XReaction()
var kayes = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiii.url }}, { quoted: m })
break;


case 'tiktokpanrika':
if (isBan) return XRB()
await XReaction()
var rikagusriani = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiiii.url }}, { quoted: m })
break;


case 'tiktoknotnot':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', video: { url: iiiiiiiii.url }}, { quoted: m })
break;


case 'tiktoksearch':
case 'ttsearch': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} jj epep`)
await XReaction()
try {
let anu = await ds.search.tiktoks(text)
let cap = `*T I K T O K - S E A R C H*\n\n*Tittle* : ${anu.title}\n*Cover* : ${anu.cover}`
Alice.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: cap }, { quoted: m })
Alice.sendMessage(m.chat, { audio: { url: anu.music }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch (error) {
reply('Error :v')
}
}
break;

    }
  }
};

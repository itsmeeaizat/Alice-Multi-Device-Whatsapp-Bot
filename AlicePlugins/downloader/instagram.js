// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['ig', 'instagram', 'igstalk', 'instagramstalk'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, axios, body, command, isBan, m, q, quoted, reply, sender, text } = context;

    switch (command) {
case 'ig':
case 'instagram': {
    if (isBan) return XRB();
    await XReaction();
    if (!text) return reply("Masukkan Linknya ?");

    try {
        const result = await igdl(text);
        if (result.error) return reply(result.message || "Gagal mengambil data");

        // cek foto dulu
        if (result.photos && result.photos.length > 0) {
            if (result.photos.length === 1) {
                // cuma 1 foto → kirim ke chat sekarang
                let photo = result.photos[0];
                await Alice.sendMessage(m.chat, { 
                    image: { url: photo.url }, 
                    caption: `donee\nSize: ${photo.fSize}` 
                }, { quoted: m });
            } else {
                // lebih dari 1 foto → kirim ke chat pribadi user
                reply(`📩 Ada ${result.photos.length} foto.\nCek chat pribadi ya!`);

                for (let photo of result.photos) {
                    await Alice.sendMessage(m.sender, { 
                        image: { url: photo.url }, 
                        caption: `donee\nSize: ${photo.fSize}` 
                    });
                }
            }
            return;
        }

        // cek video kalau tidak ada foto
        if (result.videos && result.videos.length > 0) {
            for (let video of result.videos) {
                await Alice.sendMessage(m.chat, { 
                    video: { url: video.url }, 
                    caption: `donee\nSize: ${video.fSize}` 
                }, { quoted: m });
            }
            return;
        }

        return reply("Tidak ada media yang bisa diunduh.");
    } catch (e) {
        console.error(e);
        return XRR();
    }
}
break;


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

    }
  }
};

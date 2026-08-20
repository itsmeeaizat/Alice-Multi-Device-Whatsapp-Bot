// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['igstalk', 'instagramstalk'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      text,
      q,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      axios
    } = context;

{
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
  }
};

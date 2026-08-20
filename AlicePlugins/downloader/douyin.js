// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['douyindl', 'douyinsearch', 'douyin', 'dysearch'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, args, command, isBan, m, prefix, quoted, reply, text } = context;

    switch (command) {
case 'douyindl': {
if (isBan) return XRB()
await XReaction()

    const url = args[0];
    if (!url || !/^https:\/\/v\.douyin\.com\/|^https:\/\/www\.douyin\.com\//.test(url)) {
        return reply(`Format: ${prefix + command} [link douyin]\nContoh: ${prefix + command} https://v.douyin.com/example`);
    }

    try {
        const result = await douyindl(url);

        if (!result.length) {
            return reply('Tidak ada video ditemukan dari link tersebut.');
        }

        for (const vid of result) {
            const video = vid.downloadLinks.find(dl => dl.url && dl.url.endsWith('.mp4'));
            if (!video) continue;

            let teks = `*📥 Douyin Downloader*\n\n`;
            teks += `*📌 Judul:* ${vid.title || '-'}\n`;
            teks += `*⏱️ Durasi:* ${vid.duration || '-'}\n`;

            await Alice.sendMessage(m.chat, {
                video: { url: video.url },
                caption: teks.trim()
            }, { quoted: m });
        }

    } catch (err) {
        reply('Terjadi kesalahan saat mengambil data: ' + (err.message || err));
    }
}
break;


case 'douyinsearch':
case 'douyin':
case 'dysearch': {
if (isBan) return XRB()
await XReaction()
  let text = m.text ? m.text.trim().split(' ').slice(1).join(' ') : '';
  
  if (!text)
    return reply(`⚠️ Kamu lupa kasih kata kunci!\nContoh: *${prefix + command} fifty fifty*`);

  try {

    const douyin = new DouyinSearchPage();
    const result = await douyin.search({ query: text });

    if (!result || !Array.isArray(result) || result.length === 0)
      return reply('😕 Tidak ada video Douyin ditemukan.');

    const vid = result[0]; // Ambil hasil pertama
    const videoUrl = vid.video?.play_addr?.url_list?.[0];

    let captionText = `🎵 *${text}*\n\n`;
    captionText += vid.desc ? `📝 *Deskripsi*: ${vid.desc}\n` : '';
    captionText += vid.author?.nickname ? `👤 *Author*: ${vid.author.nickname}\n` : '';
    captionText += `⏳ *Durasi*: ${vid.duration || 'Tidak diketahui'} detik\n`;
    captionText += `❤️ *Likes*: ${vid.statistics?.digg_count || 0}\n`;
    captionText += `💬 *Komentar*: ${vid.statistics?.comment_count || 0}\n`;
    captionText += `🔄 *Shares*: ${vid.statistics?.share_count || 0}`;

    await Alice.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: captionText.trim()
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('❌ Gagal mencari video Douyin. Coba lagi nanti ya!');
  }
}
break;

    }
  }
};

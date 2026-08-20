// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['wikipedia', 'wiki'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const query = (text || (quoted ? (quoted.text || quoted.body || '') : '')).trim();

    if (!query) {
      return reply(`📚 *WIKIPEDIA SEARCH*\n\nUsage: ${AliceCmd} <query>\nExample: ${AliceCmd} Indonesia`);
    }

    try {
      let wikiData = null;

      // Primary API: id.wikipedia.org
      try {
        const res = await fetch(`https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.extract && data.type !== 'https://mediawiki.org/wiki/HyperSwitch/errors/not_found') {
            wikiData = data;
          }
        }
      } catch (err) {
        console.error('id.wikipedia error:', err.message);
      }

      // Fallback API: en.wikipedia.org
      if (!wikiData) {
        try {
          const res2 = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`);
          if (res2.ok) {
            const data2 = await res2.json();
            if (data2 && data2.extract && data2.type !== 'https://mediawiki.org/wiki/HyperSwitch/errors/not_found') {
              wikiData = data2;
            }
          }
        } catch (err2) {
          console.error('en.wikipedia error:', err2.message);
        }
      }

      if (!wikiData) {
        return reply('🙅 Informasi tidak ditemukan di Wikipedia.');
      }

      let caption = `📚 *WIKIPEDIA SEARCH*\n\n*${wikiData.title}*\n`;
      if (wikiData.description) caption += `_${wikiData.description}_\n\n`;
      if (wikiData.extract) caption += `${wikiData.extract}\n\n`;
      if (wikiData.content_urls && wikiData.content_urls.desktop && wikiData.content_urls.desktop.page) {
        caption += `🔗 *Read more:* ${wikiData.content_urls.desktop.page}`;
      }

      if (wikiData.thumbnail && wikiData.thumbnail.source) {
        await Alice.sendMessage(m.chat, {
          image: { url: wikiData.thumbnail.source },
          caption: caption
        }, { quoted: m });
      } else {
        await reply(caption);
      }
    } catch (e) {
      console.error('wikipedia error:', e.message);
      return reply('❌ Terjadi kesalahan saat mencari di Wikipedia.');
    }
  }
};

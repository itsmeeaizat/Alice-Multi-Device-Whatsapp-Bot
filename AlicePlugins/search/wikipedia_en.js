// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['wikien', 'wikipedia_en'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text) {
      return reply(`*Usage:* ${AliceCmd} <query>\n*Example:* ${AliceCmd} Quantum Computing`);
    }

    const headers = {
      'User-Agent': 'AliceMD/V25 (WhatsApp Bot; contact@alicemd.org)'
    };

    const query = text.trim();

    try {
      // 1. Try English Wikipedia direct summary
      let wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
      let res = await fetch(wikiUrl, { headers });
      let data = null;
      let lang = 'en';

      if (res.ok) {
        let json = await res.json();
        if (json.extract && json.type !== 'https://mediawiki.org/wiki/HyperSwitch/errors/not_found') {
          data = json;
        }
      }

      // 2. If EN direct summary failed, search EN Wikipedia opensearch for exact title
      if (!data) {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&format=json`;
        const searchRes = await fetch(searchUrl, { headers });
        if (searchRes.ok) {
          const sData = await searchRes.json();
          if (sData[1] && sData[1][0]) {
            const realTitle = sData[1][0];
            const res2 = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(realTitle)}`, { headers });
            if (res2.ok) {
              const json2 = await res2.json();
              if (json2.extract) {
                data = json2;
              }
            }
          }
        }
      }

      // 3. Fallback to Indonesian Wikipedia if English yields no result
      if (!data) {
        lang = 'id';
        let idWikiUrl = `https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
        let idRes = await fetch(idWikiUrl, { headers });
        if (idRes.ok) {
          let jsonId = await idRes.json();
          if (jsonId.extract && jsonId.type !== 'https://mediawiki.org/wiki/HyperSwitch/errors/not_found') {
            data = jsonId;
          }
        }

        if (!data) {
          const searchUrlId = `https://id.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&format=json`;
          const searchResId = await fetch(searchUrlId, { headers });
          if (searchResId.ok) {
            const sDataId = await searchResId.json();
            if (sDataId[1] && sDataId[1][0]) {
              const realTitleId = sDataId[1][0];
              const res2Id = await fetch(`https://id.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(realTitleId)}`, { headers });
              if (res2Id.ok) {
                const json2Id = await res2Id.json();
                if (json2Id.extract) {
                  data = json2Id;
                }
              }
            }
          }
        }
      }

      if (!data || !data.extract) {
        return reply(`❌ Wikipedia article for *"${query}"* not found.`);
      }

      const sourceLang = lang === 'en' ? 'English Wikipedia' : 'Indonesian Wikipedia (Fallback)';
      const wikiText = `📚 *WIKIPEDIA SUMMARY* (${sourceLang})

📌 *Title:* ${data.title}
📝 *Summary:*
${data.extract}

🔗 *Read more:* ${data.content_urls?.desktop?.page || `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(data.title)}`}`;

      if (data.thumbnail && data.thumbnail.source) {
        await Alice.sendMessage(m.chat, {
          image: { url: data.thumbnail.source },
          caption: wikiText
        }, { quoted: m });
      } else {
        await reply(wikiText);
      }
    } catch (error) {
      console.error('Wikipedia EN Plugin Error:', error);
      reply(`❌ Error fetching Wikipedia summary: ${error.message || 'Unknown error'}`);
    }
  }
};

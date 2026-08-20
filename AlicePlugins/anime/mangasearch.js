// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['manga', 'mangasearch'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text) {
      return reply(`Please provide a manga title to search!\n\nExample: *${AliceCmd || '.manga'} Naruto*`);
    }

    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?q=${encodeURIComponent(text.trim())}&limit=5`);
      if (!response.ok) {
        return reply('Failed to fetch manga data. Please try again later.');
      }

      const json = await response.json();
      const results = json.data;

      if (!results || results.length === 0) {
        return reply(`No manga results found for "${text.trim()}".`);
      }

      let caption = `📚 *MANGA SEARCH RESULTS*\n\n`;
      let coverImage = null;

      for (let i = 0; i < results.length; i++) {
        const item = results[i];
        const title = item.title || item.title_english || 'Unknown Title';
        const chapters = item.chapters !== null && item.chapters !== undefined ? item.chapters : 'N/A';
        const score = item.score !== null && item.score !== undefined ? item.score : 'N/A';
        
        let synopsis = item.synopsis ? item.synopsis.replace(/\n+/g, ' ').trim() : 'No synopsis available.';
        if (synopsis.length > 200) {
          synopsis = synopsis.substring(0, 200) + '...';
        }

        if (i === 0) {
          coverImage = item.images?.jpg?.large_image_url || item.images?.jpg?.image_url || null;
        }

        caption += `*${i + 1}. ${title}*\n`;
        caption += `📖 *Chapters:* ${chapters}\n`;
        caption += `⭐ *Score:* ${score}\n`;
        caption += `📝 *Synopsis:* ${synopsis}\n\n`;
      }

      caption = caption.trim();

      if (coverImage) {
        try {
          await Alice.sendMessage(m.chat, { image: { url: coverImage }, caption }, { quoted: m });
        } catch (imgErr) {
          await reply(caption);
        }
      } else {
        await reply(caption);
      }
    } catch (err) {
      console.error(err);
      reply('An error occurred while searching for manga. Please try again.');
    }
  }
};

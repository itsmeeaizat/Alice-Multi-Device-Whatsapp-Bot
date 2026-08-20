// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['lirik', 'lyrics'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text) {
      return reply(`*Usage:* ${AliceCmd} <artist> <title>\n*Example:* ${AliceCmd} Coldplay Yellow\n*Or:* ${AliceCmd} Coldplay - Yellow`);
    }

    let artist = '';
    let title = '';

    if (text.includes('|')) {
      const parts = text.split('|');
      artist = parts[0].trim();
      title = parts.slice(1).join('|').trim();
    } else if (text.includes('-')) {
      const parts = text.split('-');
      artist = parts[0].trim();
      title = parts.slice(1).join('-').trim();
    } else if (text.includes(',')) {
      const parts = text.split(',');
      artist = parts[0].trim();
      title = parts.slice(1).join(',').trim();
    } else {
      const words = text.trim().split(/\s+/);
      if (words.length < 2) {
        return reply(`*Usage:* ${AliceCmd} <artist> <title>\nPlease provide both artist name and song title.\n*Example:* ${AliceCmd} Coldplay Yellow`);
      }
      artist = words[0];
      title = words.slice(1).join(' ');
    }

    try {
      const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`;
      const res = await fetch(url);

      if (res.status === 404) {
        // Try fallback where artist might be multiple words if split failed
        if (!text.includes('|') && !text.includes('-') && !text.includes(',')) {
          const words = text.trim().split(/\s+/);
          if (words.length > 2) {
            // Try last word as title, rest as artist
            const altArtist = words.slice(0, -1).join(' ');
            const altTitle = words[words.length - 1];
            const altRes = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(altArtist)}/${encodeURIComponent(altTitle)}`);
            if (altRes.ok) {
              const altData = await altRes.json();
              if (altData.lyrics) {
                const messageText = `🎵 *SONG LYRICS*

🎤 *Artist:* ${altArtist}
🎼 *Title:* ${altTitle}

📝 *Lyrics:*
${altData.lyrics.trim()}`;
                return reply(messageText);
              }
            }
          }
        }
        return reply(`❌ Lyrics not found for artist *"${artist}"* and title *"${title}"*.`);
      }

      if (!res.ok) {
        return reply(`❌ Failed to fetch lyrics. (HTTP ${res.status})`);
      }

      const data = await res.json();
      if (!data.lyrics || data.lyrics.trim() === '') {
        return reply(`❌ No lyrics available for *${artist} - ${title}*.`);
      }

      const messageText = `🎵 *SONG LYRICS*

🎤 *Artist:* ${artist}
🎼 *Title:* ${title}

📝 *Lyrics:*
${data.lyrics.trim()}`;

      await reply(messageText);
    } catch (error) {
      console.error('Lyrics Plugin Error:', error);
      reply(`❌ Error fetching lyrics: ${error.message || 'Unknown error'}`);
    }
  }
};

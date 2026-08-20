// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['shorturl', 'short'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    let targetUrl = (text || (quoted ? (quoted.text || quoted.body || '') : '')).trim();

    if (!targetUrl) {
      return reply(`*URL SHORTENER*\n\nUsage: ${AliceCmd} <URL>\nExample: ${AliceCmd} https://google.com`);
    }

    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = 'https://' + targetUrl;
    }

    try {
      let shortLink = '';

      // Primary API: is.gd
      try {
        const res = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(targetUrl)}`);
        if (res.ok) {
          const resultText = (await res.text()).trim();
          if (/^https?:\/\//i.test(resultText)) {
            shortLink = resultText;
          }
        }
      } catch (err) {
        console.error('is.gd error:', err.message);
      }

      // Fallback API: tinyurl
      if (!shortLink) {
        try {
          const res2 = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(targetUrl)}`);
          if (res2.ok) {
            const resultText2 = (await res2.text()).trim();
            if (/^https?:\/\//i.test(resultText2)) {
              shortLink = resultText2;
            }
          }
        } catch (err2) {
          console.error('tinyurl error:', err2.message);
        }
      }

      if (!shortLink) {
        return reply('❌ Gagal menyingkat URL. Silakan periksa URL Anda.');
      }

      return reply(`🔗 *URL SHORTENER*\n\n• *Original:* ${targetUrl}\n• *Shortened:* ${shortLink}`);
    } catch (e) {
      console.error('shorturl error:', e.message);
      return reply('❌ Terjadi kesalahan saat memproses penyingkatan URL.');
    }
  }
};

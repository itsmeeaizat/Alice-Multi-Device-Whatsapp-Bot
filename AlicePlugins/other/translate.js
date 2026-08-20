// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['translate', 'tr'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const args = text ? text.trim().split(/ +/) : [];
    const langCode = args[0] ? args[0].toLowerCase() : '';
    const inputText = args.slice(1).join(' ') || (quoted ? (quoted.text || quoted.body || '') : '');

    if (!langCode || !inputText) {
      return reply(`🌐 *TEXT TRANSLATOR*\n\nUsage: ${AliceCmd} <lang_code> <text>\nExample: ${AliceCmd} en Halo selamat pagi\nExample: ${AliceCmd} id Hello good morning`);
    }

    try {
      let translatedText = '';

      // Primary API: fastrestapis
      try {
        const res = await fetch(`https://fastrestapis.fasturl.cloud/tools/translate?text=${encodeURIComponent(inputText)}&lang=${encodeURIComponent(langCode)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.result) {
            translatedText = typeof data.result === 'string' ? data.result : (data.result.translatedText || data.result.text || '');
          }
        }
      } catch (err) {
        console.error('fastrestapis translate error:', err.message);
      }

      // Fallback 1: api.translate.to
      if (!translatedText) {
        try {
          const res2 = await fetch(`https://api.translate.to/translate?text=${encodeURIComponent(inputText)}&lang=${encodeURIComponent(langCode)}`);
          if (res2.ok) {
            const data2 = await res2.json();
            if (data2 && (data2.result || data2.translatedText || data2.text)) {
              translatedText = data2.result || data2.translatedText || data2.text;
            }
          }
        } catch (err2) {
          console.error('translate.to error:', err2.message);
        }
      }

      // Fallback 2: Google GTX API
      if (!translatedText) {
        try {
          const res3 = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(langCode)}&dt=t&q=${encodeURIComponent(inputText)}`);
          if (res3.ok) {
            const data3 = await res3.json();
            if (data3 && data3[0] && Array.isArray(data3[0])) {
              translatedText = data3[0].map(item => item[0]).filter(Boolean).join('');
            }
          }
        } catch (err3) {
          console.error('google gtx translate error:', err3.message);
        }
      }

      if (!translatedText) {
        return reply('❌ Gagal menerjemahkan teks.');
      }

      return reply(`🌐 *TRANSLATION RESULT*\n\n• *Target:* ${langCode.toUpperCase()}\n• *Original:* ${inputText}\n• *Result:* ${translatedText}`);
    } catch (e) {
      console.error('translate error:', e.message);
      return reply('❌ Terjadi kesalahan saat menerjemahkan.');
    }
  }
};

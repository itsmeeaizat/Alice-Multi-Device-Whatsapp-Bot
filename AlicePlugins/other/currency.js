// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['currency', 'kurs'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const args = text ? text.trim().split(/ +/) : [];
    const from = args[0] ? args[0].toUpperCase() : '';
    const to = args[1] ? args[1].toUpperCase() : '';
    const amountStr = args[2] || '1';
    const amount = parseFloat(amountStr);

    if (!from || !to || isNaN(amount)) {
      return reply(`💱 *CURRENCY CONVERTER*\n\nUsage: ${AliceCmd} <FROM> <TO> [AMOUNT]\nExample: ${AliceCmd} USD IDR 100\nExample: ${AliceCmd} EUR USD 50`);
    }

    try {
      let resultText = '';

      // Primary API: fastrestapis
      try {
        const res = await fetch(`https://fastrestapis.fasturl.cloud/tools/currency?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&amount=${encodeURIComponent(amount)}`);
        if (res.ok) {
          const data = await res.json();
          if (data && data.result !== undefined) {
            let converted = typeof data.result === 'object' ? (data.result.convertedAmount || data.result.result || data.result.amount) : data.result;
            if (converted !== undefined && converted !== null) {
              resultText = typeof converted === 'number' ? converted.toLocaleString('en-US', { maximumFractionDigits: 4 }) : String(converted);
            }
          }
        }
      } catch (err) {
        console.error('fastrestapis currency error:', err.message);
      }

      // Fallback API: open.er-api.com
      if (!resultText) {
        try {
          const res2 = await fetch(`https://open.er-api.com/v6/latest/${encodeURIComponent(from)}`);
          if (res2.ok) {
            const data2 = await res2.json();
            if (data2 && data2.rates && data2.rates[to]) {
              const converted = data2.rates[to] * amount;
              resultText = converted.toLocaleString('en-US', { maximumFractionDigits: 4 });
            }
          }
        } catch (err2) {
          console.error('er-api currency error:', err2.message);
        }
      }

      // Fallback 2: exchangerate-api.com
      if (!resultText) {
        try {
          const res3 = await fetch(`https://api.exchangerate-api.com/v4/latest/${encodeURIComponent(from)}`);
          if (res3.ok) {
            const data3 = await res3.json();
            if (data3 && data3.rates && data3.rates[to]) {
              const converted = data3.rates[to] * amount;
              resultText = converted.toLocaleString('en-US', { maximumFractionDigits: 4 });
            }
          }
        } catch (err3) {
          console.error('exchangerate-api currency error:', err3.message);
        }
      }

      if (!resultText) {
        return reply(`❌ Gagal mengonversi mata uang dari ${from} ke ${to}. Pastikan kode mata uang benar.`);
      }

      return reply(`💱 *CURRENCY CONVERTER*\n\n• *From:* ${amount.toLocaleString('en-US')} ${from}\n• *To:* ${to}\n• *Result:* ${resultText} ${to}`);
    } catch (e) {
      console.error('currency error:', e.message);
      return reply('❌ Terjadi kesalahan saat memproses konversi mata uang.');
    }
  }
};

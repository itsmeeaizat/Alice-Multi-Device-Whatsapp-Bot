// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['shadowtext', 'shadow'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text) return reply(`Masukkan teks!\nContoh: ${AliceCmd} Alice`);

    const apiUrl = `https://fastrestapis.fasturl.cloud/ephoto/shadow?text=${encodeURIComponent(text)}`;

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) return reply('Gagal membuat gambar, terjadi kesalahan pada API.');

      const contentType = res.headers.get('content-type') || '';
      let imageUrl = apiUrl;

      if (contentType.includes('application/json')) {
        const json = await res.json();
        if (json.result) {
          imageUrl = typeof json.result === 'string' ? json.result : (json.result.url || json.result.image || apiUrl);
        } else if (json.url) {
          imageUrl = json.url;
        } else if (json.data) {
          imageUrl = typeof json.data === 'string' ? json.data : (json.data.url || apiUrl);
        }
      }

      await Alice.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Shadow Text: ${text}` }, { quoted: m });
    } catch (e) {
      reply('Gagal membuat gambar, terjadi kesalahan pada API.');
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['fb', 'fbdl', 'facebook'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, axios, command, isBan, m, q, quoted, reply, text } = context;

    switch (command) {
case 'fb':
case 'fbdl':
case 'facebook': {
  if (isBan) return XRB();
  await XReaction();

  if (!text) return reply('url facebook?');

  // Validasi sederhana URL FB
  if (!/^https?:\/\/(www\.)?(facebook|fb)\.com\/.+/i.test(text)) {
    return reply('Format URL Facebook tidak valid.');
  }

async function getToken() {
  const url = "https://fbdownloader.to/id";
  const { data: html } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
    }
  });

  const regex = /k_exp="(.*?)".*?k_token="(.*?)"/s;
  const match = html.match(regex);
  if (!match) throw new Error("token g ada");

  return {
    k_exp: match[1],
    k_token: match[2]
  };
}

async function fbDownloader(fbUrl) {
  const { k_exp, k_token } = await getToken();

  const payload = new URLSearchParams({
    k_exp,
    k_token,
    p: "home",
    q: fbUrl,
    lang: "id",
    v: "v2",
    W: ""
  });

  const { data } = await axios.post(
    "https://fbdownloader.to/api/ajaxSearch",
    payload,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "User-Agent": "Mozilla/5.0",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://fbdownloader.to",
        "Referer": "https://fbdownloader.to/id"
      },
      // timeout opsional biar gak ngegantung
      timeout: 20000
    }
  );

  if (!data || !data.data) throw new Error("gagal");

  const html = data.data;
  const results = [];

  const rowRegex = /<td class="video-quality">(.*?)<\/td>[\s\S]*?(?:href="(.*?)"|data-videourl="(.*?)")/g;
  let match;
  while ((match = rowRegex.exec(html)) !== null) {
    const quality = match[1].trim();
    const url = (match[2] || match[3] || "").trim();
    if (quality && url) results.push({ quality, url });
  }

  if (!results.length) throw new Error("link g ditemukan");
  return results;
}

// Helper: pilih kualitas terbaik dari list
function pickBestQuality(results = []) {
  // contoh quality string: "HD 1080p", "HD 720p", "SD 360p", "Normal Quality"
  const parseScore = (q) => {
    // ambil angka p kalau ada
    const m = q.match(/(\d+)\s*p/i);
    if (m) return parseInt(m[1], 10);
    // fallback: prioritaskan HD > SD > lainnya
    if (/HD/i.test(q)) return 721;   // di atas 720p
    if (/SD/i.test(q)) return 361;   // di atas 360p
    return 0;
  };

  // filter url valid http(s)
  const valid = results.filter(r => /^https?:\/\//i.test(r.url));
  if (!valid.length) return null;

  valid.sort((a, b) => parseScore(b.quality) - parseScore(a.quality));
  return valid[0]; // kualitas tertinggi
}

  try {
    const res = await fbDownloader(text); // pakai scraper baru
    if (!res || res.length === 0) {
      return reply(mess.error || 'Gagal ambil link video.');
    }

    const best = pickBestQuality(res);
    if (!best) return reply('Tidak ada link unduhan valid.');

    const caption =
      `*Sumber:* fbdownloader.to\n` +
      `*Quality:* ${best.quality}\n` +
      `*URL Asal:* ${text}`;

    await Alice.sendMessage(
      m.chat,
      {
        video: { url: best.url },
        caption,
        mimetype: 'video/mp4'
      },
      { quoted: m }
    );

  } catch (e) {
    console.error('FB-DL error:', e?.message || e);
    // balas error user-friendly
    if (/token g ada|gagal|link g ditemukan/i.test(String(e))) {
      return reply('Gagal memproses. Coba ulangi beberapa saat lagi atau pastikan link-nya publik.');
    }
    XRR(); // handler error umummu
  }
}
break;

    }
  }
};

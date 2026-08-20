// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['lirik2', 'lirik', 'liriklagu'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'lirik2': {
  if (!text) return reply(`Masukkan judul lagu atau keyword lirik.\n\nContoh:\n.lirik new jeans romanized`)
if (isBan) return XRB()
await XReaction()
  try {
    let res = await fetch(`https://api.betabotz.eu.org/api/search/lirik?apikey=beta-gilang&lirik=${encodeURIComponent(text)}`)
    let json = await res.json()

    if (!json.result) return Alice.sendMessage(m.chat, {
      text: `⚠️ Lirik tidak ditemukan untuk: *${text}*`
    }, { quoted: m })

    let r = json.result
    let cap = `🎼 *Lirik Lagu Ditemukan!*\n\n`
    cap += `📌 *Title:* ${r.title}\n`
    cap += `🎤 *Artist:* ${r.artist}\n`
    cap += `🔗 *Link:* ${r.url}\n\n`
    cap += `📝 *Lyrics:*\n${r.lyrics.substring(0, 4000)}` // antisipasi teks panjang

    await Alice.sendMessage(m.chat, {
      image: { url: r.image },
      caption: cap
    }, { quoted: m })

  } catch (e) {
    console.error(e)
    Alice.sendMessage(m.chat, {
      text: `❌ Terjadi error saat mengambil lirik.`
    }, { quoted: m })
  }
}
break

case 'lirik':

break;

case 'liriklagu': {
  if (isBan) return XRB();
  await XReaction();

  if (!text) return reply(`Judul lagu?\nExample: duka`);

  // --- Semua fungsi bantu & fetch disatukan di sini ---
  const axios = require('axios');

  const norm = (s = '') => String(s)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')     // hapus diakritik
    .replace(/[^a-z0-9\s]/g, ' ')        // sisakan alnum & spasi
    .replace(/\s+/g, ' ')
    .trim();

  const scoreItem = (query, item) => {
    const q = norm(query);
    const t = norm(item.title || item.trackName || item.name || '');
    const a = norm(item.artistName || item.artist || '');
    let score = 0;
    if (t && (t.includes(q) || q.includes(t))) score += 60;
    if (a && q.includes(a)) score += 15;
    if (item.syncedLyrics) score += 10; // bonus jika ada LRC
    if (item.plainLyrics) score += 5;
    return score;
  };

  const pickBest = (query, results = []) => {
    if (!Array.isArray(results) || !results.length) return null;
    return [...results].sort((a, b) => scoreItem(query, b) - scoreItem(query, a))[0];
  };

  const safeFileName = (s = 'lyrics') =>
    (s.replace(/[^\w\-]+/g, '_').slice(0, 80) || 'lyrics');

  const parseQuery = (qText) => {
    if (!qText) return { combined: '' };
    const parts = qText.split(' - ');
    const title = parts[0]?.trim() || '';
    const artist = parts[1]?.trim();
    return { combined: artist ? `${title} ${artist}` : title || qText };
  };

  const lyrics = async (title) => {
    if (!title) throw new Error('Title is required');
    const { data } = await axios.get(
      `https://lrclib.net/api/search?q=${encodeURIComponent(title)}`,
      {
        headers: {
          referer: `https://lrclib.net/search/${encodeURIComponent(title)}`,
          'user-agent':
            'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36'
        },
        timeout: 20000
      }
    );
    return data;
  };
  // --- end helper ---

  try {
    const { combined } = parseQuery(text);

    // 1) Cari ke LrcLib
    const results = await lyrics(combined);
    if (!results || results.length === 0) {
      return reply('Tidak Ditemukan');
    }

    // 2) Pilih hasil paling relevan
    const best = pickBest(combined, results);
    if (!best) return reply('Tidak Ditemukan');

    // 3) Normalisasi field
    const title = best.title || best.trackName || best.name || 'Unknown Title';
    const artistName = best.artistName || best.artist || 'Unknown Artist';
    const albumName = best.albumName || best.album || null;
    const duration = best.duration || null;
    const plainLyrics = best.plainLyrics || best.lyrics || null;
    const syncedLyrics = best.syncedLyrics || null;

    const header =
      `🎵 *${title}* — *${artistName}*` +
      (albumName ? `\n💿 ${albumName}` : '') +
      (duration ? `\n⏱️ ${Math.round(duration)}s` : '');

    // 4) Kirim LRC jika ada
    if (syncedLyrics) {
      const fileName = `${safeFileName(`${title}-${artistName}`)}.lrc`;
      await Alice.sendMessage(
        m.chat,
        {
          document: Buffer.from(syncedLyrics, 'utf-8'),
          mimetype: 'text/plain',
          fileName,
          caption: `${header}\n\nSumber: LrcLib (lrclib.net)`
        },
        { quoted: m }
      );
      break;
    }

    // 5) Fallback: kirim lirik teks
    if (plainLyrics) {
      await Alice.sendMessage(
        m.chat,
        { text: `${header}\n\n${plainLyrics}\n\nSumber: LrcLib (lrclib.net)` },
        { quoted: m }
      );
      break;
    }

    // 6) Jika dua-duanya kosong
    reply('Lirik tidak tersedia. Coba judul lain atau tambahkan artis.');

  } catch (error) {
    console.error('Lyrics error:', error?.message || error);
    reply('Tidak Ditemukan');
  }
}
break;
    }
  }
};

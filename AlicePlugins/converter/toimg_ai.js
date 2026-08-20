// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['toblur', 'tozombie', 'tovintage', 'totato', 'totua', 'tomirror', 'topacar', 'toreal', 'tojepang', 'tohijab', 'toghibli', 'tochibi', 'toanime', 'tofigure'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
case 'toblur': {
    if (!isPrem) return XRP();
    await XReaction();
    const axios = require("axios");

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .toblur');
        }

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/blurwajah?image=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: "arraybuffer" });
        const ct = res.headers["content-type"] || "";

        // Kalau hasil langsung berupa image
        if (ct.startsWith("image/")) {
            return Alice.sendMessage(
                m.chat,
                { image: Buffer.from(res.data), caption: "🙈 Wajah sudah diblur otomatis!" },
                { quoted: m }
            );
        }

        // Kalau hasil berupa JSON
        const json = JSON.parse(res.data.toString());
        const imageUrl =
            json.image || json.url || json.result || json.data?.url || json.data;

        if (!imageUrl) return reply("❌ API tidak mengembalikan gambar");

        const img = await axios.get(imageUrl, { responseType: "arraybuffer" });

        await Alice.sendMessage(
            m.chat,
            { image: Buffer.from(img.data), caption: "🙈 Wajah sudah diblur otomatis!" },
            { quoted: m }
        );

    } catch (e) {
        reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`);
    }
}
break;

case 'tozombie': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) return reply('❌ Reply gambar dengan command: .tozombie');

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/tozombie?url=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        const ct = res.headers['content-type'] || '';
        if (ct.startsWith('image/')) {
            return Alice.sendMessage(m.chat, { image: Buffer.from(res.data), caption: '🧟 Kamu jadi zombie!' }, { quoted: m });
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl = json.url || json.result || json.image || json.data?.url;

        if (!imageUrl) return reply('❌ API tidak mengembalikan gambar');

        const img = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        Alice.sendMessage(m.chat, { image: Buffer.from(img.data), caption: '🧟 Kamu jadi zombie!' }, { quoted: m });

    } catch (e) { reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`); }
}
break;

case 'tovintage': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) return reply('❌ Reply gambar dengan command: .tovintage');

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/tovintage?url=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        const ct = res.headers['content-type'] || '';
        if (ct.startsWith('image/')) {
            return Alice.sendMessage(m.chat, { image: Buffer.from(res.data), caption: '📼 Vintage mode aktif!' }, { quoted: m });
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl = json.url || json.result || json.image || json.data?.url;

        if (!imageUrl) return reply('❌ API tidak mengembalikan gambar');

        const img = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        Alice.sendMessage(m.chat, { image: Buffer.from(img.data), caption: '📼 Vintage mode aktif!' }, { quoted: m });

    } catch (e) { reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`); }
}
break;

case 'totato': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) return reply('❌ Reply gambar dengan command: .totato');

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/totato?url=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        const ct = res.headers['content-type'] || '';
        if (ct.startsWith('image/')) {
            return Alice.sendMessage(m.chat, { image: Buffer.from(res.data), caption: '🧿 Tato berhasil ditambahkan!' }, { quoted: m });
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl = json.url || json.result || json.image || json.data?.url;

        if (!imageUrl) return reply('❌ API tidak mengembalikan gambar');

        const img = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        Alice.sendMessage(m.chat, { image: Buffer.from(img.data), caption: '🧿 Tato berhasil ditambahkan!' }, { quoted: m });

    } catch (e) { reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`); }
}
break;

case 'totua': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) return reply('❌ Reply gambar dengan command: .totua');

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/totua?url=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        const ct = res.headers['content-type'] || '';
        if (ct.startsWith('image/')) {
            return Alice.sendMessage(m.chat, { image: Buffer.from(res.data), caption: '👴 Kamu jadi versi tua!' }, { quoted: m });
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl = json.url || json.result || json.image || json.data?.url;

        if (!imageUrl) return reply('❌ API tidak mengembalikan gambar');

        const img = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        Alice.sendMessage(m.chat, { image: Buffer.from(img.data), caption: '👴 Kamu jadi versi tua!' }, { quoted: m });

    } catch (e) { reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`); }
}
break;

case 'tomirror': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .tomirror');
        }

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/tomirror?url=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: "arraybuffer" });
        const ct = res.headers["content-type"] || "";

        if (ct.startsWith("image/")) {
            return Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "📱 Mirror iPhone style!"
            }, { quoted: m });
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl =
            json.url || json.result || json.image || json.data || json.data?.url;

        if (!imageUrl) return reply("❌ API tidak mengembalikan gambar");

        const img = await axios.get(imageUrl, { responseType: "arraybuffer" });
        await Alice.sendMessage(m.chat, {
            image: Buffer.from(img.data),
            caption: "📱 Mirror iPhone style!"
        }, { quoted: m });

    } catch (e) { reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`); }
}
break;

case 'topacar': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .topacar');
        }

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/topacar?url=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: "arraybuffer" });
        const ct = res.headers["content-type"] || "";

        if (ct.startsWith("image/")) {
            return Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "💑 Kamu punya pacar baru!"
            }, { quoted: m });
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl =
            json.url || json.result || json.image || json.data || json.data?.url;

        if (!imageUrl) return reply("❌ API tidak mengembalikan gambar");

        const img = await axios.get(imageUrl, { responseType: "arraybuffer" });
        await Alice.sendMessage(m.chat, {
            image: Buffer.from(img.data),
            caption: "💑 Kamu punya pacar baru!"
        }, { quoted: m });

    } catch (e) { reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`); }
}
break;

case 'toreal': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .toreal');
        }

        const imgBuffer = await m.quoted.download();
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/toreal?url=${encodeURIComponent(link)}`;
        const res = await axios.get(apiUrl, { responseType: "arraybuffer" });
        const ct = res.headers["content-type"] || "";

        if (ct.startsWith("image/")) {
            return Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "🎨 Realistic AI Gemini style!"
            }, { quoted: m });
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl =
            json.url || json.result || json.image || json.data || json.data?.url;

        if (!imageUrl) return reply("❌ API tidak mengembalikan gambar");

        const img = await axios.get(imageUrl, { responseType: "arraybuffer" });
        await Alice.sendMessage(m.chat, {
            image: Buffer.from(img.data),
            caption: "🎨 Realistic AI Gemini style!"
        }, { quoted: m });

    } catch (e) { reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`); }
}
break;

case 'tojepang': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .tojepang');
        }

        const imgBuffer = await m.quoted.download();
        if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/tojepang?url=${encodeURIComponent(link)}`;

        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const contentType = res.headers["content-type"] || "";

        if (contentType.startsWith("image/")) {
            await Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "🗾 Kamu sudah di Jepang!"
            }, { quoted: m });
            return;
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl =
            json.url ||
            json.result ||
            json.image ||
            json.data ||
            json.data?.url ||
            json.data?.result;

        if (!imageUrl) return reply("❌ API tidak mengembalikan gambar");

        const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });

        await Alice.sendMessage(m.chat, {
            image: Buffer.from(imgRes.data),
            caption: "🗾 Kamu sudah di Jepang!"
        }, { quoted: m });

    } catch (e) {
        reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`);
    }
}
break;

case 'tohijab': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .tohijab');
        }

        const imgBuffer = await m.quoted.download();
        if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        const apiUrl = `https://api-faa.my.id/faa/tohijab?url=${encodeURIComponent(link)}`;

        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const contentType = res.headers["content-type"] || "";

        if (contentType.startsWith("image/")) {
            await Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "🧕 Foto kamu jadi versi berhijab!"
            }, { quoted: m });
            return;
        }

        const json = JSON.parse(res.data.toString());
        const imageUrl =
            json.url ||
            json.result ||
            json.image ||
            json.data ||
            json.data?.url ||
            json.data?.result;

        if (!imageUrl) return reply("❌ API tidak mengembalikan gambar");

        const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });

        await Alice.sendMessage(m.chat, {
            image: Buffer.from(imgRes.data),
            caption: "🧕 Versi berhijab kamu sudah jadi!"
        }, { quoted: m });

    } catch (e) {
        reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`);
    }
}
break;

case 'toghibli': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .toghibli');
        }

        const imgBuffer = await m.quoted.download();
        if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

        // Upload ke Alice CDN
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        // FAA API Toghibli
        const apiUrl = `https://api-faa.my.id/faa/toghibli?url=${encodeURIComponent(link)}`;

        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const contentType = res.headers["content-type"] || "";

        // ===== FAA kirim gambar langsung =====
        if (contentType.startsWith("image/")) {
            await Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "🌿 Foto kamu jadi gaya Ghibli!"
            }, { quoted: m });
            return;
        }

        // ===== FAA kirim JSON =====
        const json = JSON.parse(res.data.toString());

        const imageUrl =
            json.url ||
            json.result ||
            json.image ||
            json.data ||
            json.data?.url ||
            json.data?.result;

        if (!imageUrl) return reply("❌ API tidak mengembalikan gambar");

        const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });

        await Alice.sendMessage(m.chat, {
            image: Buffer.from(imgRes.data),
            caption: "🌿 Foto kamu sudah jadi Ghibli!"
        }, { quoted: m });

    } catch (e) {
        reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`);
    }
}
break;

case 'tochibi': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .tochibi');
        }

        const imgBuffer = await m.quoted.download();
        if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

        // Upload ke Alice CDN
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        // FAA API ToChibi
        const apiUrl = `https://api-faa.my.id/faa/tochibi?url=${encodeURIComponent(link)}`;

        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const contentType = res.headers["content-type"] || "";

        // ===== FAA kirim langsung gambar =====
        if (contentType.startsWith("image/")) {
            await Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "🍼 Foto kamu berhasil jadi chibi!"
            }, { quoted: m });
            return;
        }

        // ===== FAA kirim JSON =====
        const json = JSON.parse(res.data.toString());

        const imageUrl =
            json.url ||
            json.result ||
            json.image ||
            json.data ||
            json.data?.url ||
            json.data?.result;

        if (!imageUrl) {
            return reply("❌ API tidak mengembalikan gambar");
        }

        const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });

        await Alice.sendMessage(m.chat, {
            image: Buffer.from(imgRes.data),
            caption: "🍼 Foto kamu jadi chibi imut!"
        }, { quoted: m });

    } catch (e) {
        reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`);
    }
}
break;

case 'toanime': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .toanime');
        }

        const imgBuffer = await m.quoted.download();
        if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

        // Upload ke Alice CDN
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        // FAA API Toanime
        const apiUrl = `https://api-faa.my.id/faa/toanime?url=${encodeURIComponent(link)}`;

        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const contentType = res.headers["content-type"] || "";

        // ===== FAA kirim langsung gambar =====
        if (contentType.startsWith("image/")) {
            await Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "🎨 Foto kamu berhasil diubah jadi anime!"
            }, { quoted: m });
            return;
        }

        // ===== FAA kirim JSON =====
        const json = JSON.parse(res.data.toString());

        const imageUrl =
            json.url ||
            json.result ||
            json.image ||
            json.data ||
            json.data?.url ||
            json.data?.result;

        if (!imageUrl) {
            return reply("❌ API tidak mengembalikan gambar");
        }

        const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });

        await Alice.sendMessage(m.chat, {
            image: Buffer.from(imgRes.data),
            caption: "🎨 Foto kamu berhasil jadi anime!"
        }, { quoted: m });

    } catch (e) {
        reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`);
    }
}
break;

case 'tofigure': {
    if (!isPrem) return XRP();
    await XReaction();

    try {
        const mime = m.quoted?.mimetype || '';
        if (!/image/.test(mime)) {
            return reply('❌ Reply gambar dengan command: .tofigure');
        }

        const imgBuffer = await m.quoted.download();
        if (!imgBuffer) return reply('❌ Error saat mengunduh gambar');

        // Upload ke Alice CDN
        const link = await uploadToAliceCdn(imgBuffer, 'image.jpg');

        // FAA API (tanpa apikey)
        const apiUrl = `https://api-faa.my.id/faa/tofigura?url=${encodeURIComponent(link)}`;

        const res = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        const contentType = res.headers["content-type"] || "";

        // ===== FAA mengirim langsung gambar =====
        if (contentType.startsWith("image/")) {
            await Alice.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: "✅ Figurine jadi 😎"
            }, { quoted: m });
            return;
        }

        // ===== FAA mengirim JSON =====
        const json = JSON.parse(res.data.toString());
        const imageUrl =
            json.url ||
            json.result ||
            json.image ||
            json.data ||
            json.data?.url ||
            json.data?.result;

        if (!imageUrl) {
            return reply("❌ API tidak mengembalikan gambar");
        }

        // Download gambar hasil
        const imgRes = await axios.get(imageUrl, { responseType: "arraybuffer" });

        await Alice.sendMessage(m.chat, {
            image: Buffer.from(imgRes.data),
            caption: "✅ Figurine jadi 😎"
        }, { quoted: m });

    } catch (e) {
        reply(e?.response?.status === 500 ? "⚠️ API maintenance, tunggu beberapa saat untuk mencoba kembali" : `⚠️ Error: ${e.message}`);
    }
}
break;
    }
  }
};

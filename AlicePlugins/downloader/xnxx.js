// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['xnxxsearch', 'xnxxdl'],
  operate: async (context) => {
    const { Alice, XRP, XReaction, args, command, fetch, isPrem, m, prefix, quoted, reply, text } = context;

    switch (command) {
case 'xnxxsearch': {
    if (!isPrem) return XRP();
    if (!args[0]) return reply(
        `Masukkan kata kunci!\n\nContoh: ${prefix + command} japanese`
    );

    await XReaction();

    try {
        let res = await fetch(
            `https://aliceeapis.vercel.app/search/xnxx?query=${encodeURIComponent(text)}&apikey=${global.api.alice}`
        );
        let data = await res.json();

        if (data.status && data.result && data.result.length > 0) {
            let teks = `🔍 *Hasil pencarian untuk:* ${text}\n\n`;
            data.result.forEach((v, i) => {
                teks += `*${i + 1}.* ${v.title}\n🕒 ${v.info}\n🔗 ${v.link}\n\n`;
            });
            reply(teks);
        } else {
            // tampilkan isi response API biar user tahu kenapa kosong
            reply("⚠️ Tidak ada hasil.\n\n" + JSON.stringify(data, null, 2));
        }
    } catch (e) {
        reply("⚠️ Error mengambil data dari API.\n\n" + e.message);
    }
}
break;


case 'xnxxdl': {
    if (!isPrem) return XRP();
    if (!args[0]) return reply(
        `Masukkan URL!\n\nContoh: ${prefix + command} https://www.xnxx.com/...`
    );

    await XReaction();

    try {
        let res = await fetch(
            `https://aliceeapis.vercel.app/downloader/xnxx?url=${encodeURIComponent(text)}&apikey=${global.api.alice}`
        );
        let data = await res.json();

        if (data.status && data.files) {
            let cap = `📥 *Downloader Berhasil*\n\n🎬 Judul : ${data.title}\n⏱️ Durasi : ${data.duration} detik\n`;

            await Alice.sendMessage(m.chat, {
                video: { url: data.files.high },
                caption: cap,
            }, { quoted: m });
        } else {
            // tampilkan response API biar user tahu errornya apa
            reply("❌ Gagal mengambil data dari API.\n\n" + JSON.stringify(data, null, 2));
        }
    } catch (e) {
        reply("⚠️ Terjadi kesalahan saat download.\n\n" + e.message);
    }
}
break;

    }
  }
};

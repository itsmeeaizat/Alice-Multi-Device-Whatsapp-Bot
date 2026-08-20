// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['ffstalk'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'ffstalk': {
    if (isBan) return XRB();
    await XReaction();
    if (!args[0]) return reply(`❌ Masukkan ID Free Fire!\nContoh:\n${prefix}ffstalk 2361143885`);

    const id = args[0];
    const url = `https://apii.ryuuxiao.biz.id/stalk/ff?id=${encodeURIComponent(id)}&apikey=free`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data?.status || !data?.result) {
            return reply(`⚠️ Gagal stalk ID: ${id}, coba lagi.`);
        }

        const { id: uid, nickname, level, rank, region } = data.result;
        const teks = `🎮 *Free Fire Stalk*\n\n` +
                     `🆔 ID: ${uid || id}\n` +
                     `👤 Nickname: ${nickname || '-'}\n` +
                     `🏅 Level: ${level || '-'}\n` +
                     `⭐ Rank: ${rank || '-'}\n` +
                     `🌍 Region: ${region || '-'}`;

        await Alice.sendMessage(m.chat, { text: teks }, { quoted: m });

    } catch (err) {
        console.error(err);
        reply(`❗ Error: ${err.message}`);
    }
    break;
}
    }
  }
};

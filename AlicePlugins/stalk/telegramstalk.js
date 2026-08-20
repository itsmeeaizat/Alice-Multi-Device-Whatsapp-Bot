// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['telegramstalk'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'telegramstalk': {
    if (isBan) return XRB();
    await XReaction();
    if (!args[0]) return reply(`❌ Masukkan username Telegram!\nContoh:\n${prefix}telegramstalk alwaysrikyreal`);

    const username = args[0].replace('@', '');
    const url = `https://apii.ryuuxiao.biz.id/stalk/telegram?username=${encodeURIComponent(username)}&apikey=free`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data?.status || !data?.result) {
            return reply(`⚠️ Gagal stalk @${username}, coba lagi.`);
        }

        const { id, first_name, last_name, is_bot, username: uname, language_code } = data.result;
        const teks = `🔍 *Telegram User Info*\n\n` +
                     `• Username: @${uname || username}\n` +
                     `• Name: ${first_name || ''} ${last_name || ''}\n` +
                     `• ID: ${id || '-'}\n` +
                     `• Bot: ${is_bot ? 'Ya 🤖' : 'Tidak'}\n` +
                     `• Language: ${language_code || '-'}`;

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

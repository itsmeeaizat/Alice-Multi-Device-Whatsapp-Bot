// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['warn', 'warninfo', 'setwarn', 'delwarn', 'reswarn'],
  operate: async (context) => {
    const {
      Alice, m, chatUpdate, store, body, budy, pushname, args, text, q, prefix,
      command, isCmd, isOwner, isPrem, isBan, isBotAdmins, isAdmins, isGroupOwner,
      isGroup, isPrivate, isPc, isMedia, isImage, isVideo, isSticker, isAudio,
      mime, quoted, reply, xy, XRO, XReaction, Xban, alice, AliceCmd, groupMetadata,
      groupName, participants, groupAdmins, groupOwner, sender, senderNumber,
      botNumber, mentionUser, content, numberQuery, froms, time, timee, timestamp,
      salam, tanggal2, hariini, stime, Styles, limituser, limitAbis, useLimit,
      registered, IsReg, isMute, isAfkOn, isXMEDIA, isBot, qmsg, readmore,
      prefixRegex, thePrefix, db, fs, axios, fetch, cheerio, crypto,
      XRG, XRA, XRB, XRPC, AntiLinkFacebook, AntiLinkTelegram, AntiToxic, AntiDewasa,
      ntilinkfb, ntilinktg, nttoxic, ntilinkdewasa, ntilinkmediafire, welcmm, wlcmm,
      mute, rpgDb, initRpgUser, saveRpg, contacts, changelogs, ownername
    } = context;

    switch (command) {
case 'warn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const target = mentionUser[0];
    if (!target) return Alice.sendMessage(m.chat, { text: 'Tag user yang ingin diberikan peringatan.' });

    const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
    groupWarn.warns[target] = (groupWarn.warns[target] || 0) + 1;

    if (groupWarn.warns[target] >= groupWarn.maxWarn) {
      delete groupWarn.warns[target];
      await Alice.groupParticipantsUpdate(m.chat, [target], 'remove');
      Alice.sendMessage(m.chat, {
        text: `User @${target.split('@')[0]} telah mencapai batas peringatan dan telah dikeluarkan.`,
        mentions: [target],
      });
    } else {
      Alice.sendMessage(m.chat, {
        text: `User @${target.split('@')[0]} telah diberi peringatan (${groupWarn.warns[target]}/${groupWarn.maxWarn}).`,
        mentions: [target],
      });
    }

    warnData[m.chat] = groupWarn;
    saveWarnData();
    }


case 'warninfo': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });

    try {
        const metadata = await Alice.groupMetadata(m.chat);
        const groupName = metadata.subject;
        const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
        const totalWarned = Object.keys(groupWarn.warns).length;
        const warnList = Object.entries(groupWarn.warns)
            .map(([user, count]) => `• @${user.split('@')[0]} (${count}/${groupWarn.maxWarn})`)
            .join('\n') || 'Tidak ada user yang mendapat peringatan.';

        const warnInfoText = `╭─── *「 ${groupName} 」*\n` +
            `│ *Max Warn:* ${groupWarn.maxWarn}\n` +
            `│ *Total User:* ${totalWarned}\n` +
            `╰──────────────\n\n` +
            `*List User:*\n${warnList}`;

        Alice.sendMessage(m.chat, { text: warnInfoText, mentions: Object.keys(groupWarn.warns) });
    } catch (err) {
        console.error(err);
        Alice.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil metadata grup.' });
    }
    }


case 'setwarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const maxWarn = parseInt(args[0]);
    if (isNaN(maxWarn) || maxWarn <= 0) return Alice.sendMessage(m.chat, { text: 'Masukkan jumlah maksimal peringatan yang valid.' });

    const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
    groupWarn.maxWarn = maxWarn;

    warnData[m.chat] = groupWarn;
    saveWarnData();

    Alice.sendMessage(m.chat, { text: `Jumlah maksimal peringatan di grup ini telah diatur menjadi ${maxWarn}.` });
    }


case 'delwarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    const target = mentionUser[0];
    if (!target) return Alice.sendMessage(m.chat, { text: 'Tag user yang ingin dihapus peringatannya.' });

    const warnCount = parseInt(args[1]);
    if (isNaN(warnCount) || warnCount <= 0) return Alice.sendMessage(m.chat, { text: 'Masukkan jumlah peringatan yang valid untuk dihapus.' });

    const groupWarn = warnData[m.chat] || { maxWarn: 3, warns: {} };
    if (!groupWarn.warns[target]) return Alice.sendMessage(m.chat, { text: 'User ini tidak memiliki peringatan.' });

    if (groupWarn.warns[target] < warnCount) {
      return Alice.sendMessage(m.chat, { text: `User ini hanya memiliki ${groupWarn.warns[target]} peringatan.` });
    }

    groupWarn.warns[target] -= warnCount;
    if (groupWarn.warns[target] <= 0) delete groupWarn.warns[target];

    warnData[m.chat] = groupWarn;
    saveWarnData();

    Alice.sendMessage(m.chat, {
      text: `Peringatan sebanyak ${warnCount} untuk user @${target.split('@')[0]} telah dihapus.`,
      mentions: [target],
    });
    }


case 'reswarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    if (!warnData[m.chat]) return Alice.sendMessage(m.chat, { text: 'Tidak ada data peringatan di grup ini.' });

    delete warnData[m.chat];
    saveWarnData();

    Alice.sendMessage(m.chat, { text: 'Semua peringatan di grup ini telah dihapus.' });
    }

    }
  }
};

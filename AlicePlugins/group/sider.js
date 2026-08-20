// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['resetsider', 'gcsider'],
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
case 'resetsider': {
if (!isAdmins) return XRA()
    if (db_sider && db_sider[m.chat]) {
      delete db_sider[m.chat];
      fs.writeFileSync('./AliceSystem/AliceDatabase/Group/sider.json', JSON.stringify(db_sider));
      reply("_Sider Berhasil Direset Pada Grub ini_")
    } else {
      reply("_Sider Sudah Direset Pada Grub ini_")
    }
}


case 'gcsider' : {
await Alice.sendPresenceUpdate('composing', m.chat)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();

    let member = groupMetadata.participants.map(v => v.id)
    if (!text) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = text
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return reply(m.chat, `*Digrup ini tidak terdapat sider.*`, xy)
    reply(m.chat, `*${total}/${sum}* anggota grup *${await Alice.getName(m.chat)}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}

    }
  }
};

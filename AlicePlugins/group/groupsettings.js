// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['onlygroup', 'onlygc', 'bangroup', 'mute', 'swgroup', 'onlyadmin', 'welcome', 'left', 'closetime', 'opentime', 'gc', 'editinfo', 'editsubjek', 'editdesk'],
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
case 'onlygroup':
case 'onlygc':
if (!isOwner) return XRO()
if (args.length < 1) return reply(`Example ${AliceCmd} on/off`)
if (q == 'on') {
db.data.settings[botNumber].onlygrub = true
reply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].onlygrub = false
reply(`Successfully Changed Onlygroup To ${q}`)
}


case 'bangroup': 
case 'mute': {
  if (!isOwner) return reply('⚠️ Fitur khusus owner!')

  let groups = await Alice.groupFetchAllParticipating()
  let groupList = Object.entries(groups).map(([id, data]) => ({
    id,
    subject: data.subject
  }))

  // kalau tanpa argumen → tampilkan daftar grup
  if (!args[0]) {
    let teks = '📋 *Daftar Group Bot*\n\n'
    groupList.forEach((gc, i) => {
      let status = mute.includes(gc.id) ? '🔇 Udah di mute' : '✅ Belum di mute'
      teks += `${i + 1}. ${gc.subject}\n`
      teks += `   🆔 ${gc.id}\n`
      teks += `   📌 Status: ${status}\n\n`
    })
    teks += `💡 Cara pakai:\n.bangroup <nomor> on/off`
    return reply(teks)
  }

  // kalau ada argumen → pakai nomor
  let nomor = parseInt(args[0])
  let action = args[1]

  if (isNaN(nomor) || nomor < 1 || nomor > groupList.length) {
    return reply('❌ Nomor grup tidak valid!')
  }

  let groupId = groupList[nomor - 1].id
  let groupName = groupList[nomor - 1].subject

  if (action === 'on') {
    if (mute.includes(groupId)) return reply(`❌ Grup *${groupName}* udah di mute!`)
    mute.push(groupId)
    fs.writeFileSync('./AliceDatabase/mute.json', JSON.stringify(mute, null, 2))
    reply(`✅ Grup *${groupName}* berhasil di-*mute*!`)
    // 🔔 Kirim notifikasi ke grup
    await Alice.sendMessage(groupId, { text: `⚠️ Bot telah *di-mute* oleh owner.\nSekarang bot tidak akan merespon di grup ini.` })
  } else if (action === 'off') {
    if (!mute.includes(groupId)) return reply(`❌ Grup *${groupName}* belum di mute!`)
    let idx = mute.indexOf(groupId)
    mute.splice(idx, 1)
    fs.writeFileSync('./AliceDatabase/mute.json', JSON.stringify(mute, null, 2))
    reply(`🔊 Grup *${groupName}* berhasil di-*unmute*!`)
    // 🔔 Kirim notifikasi ke grup
    await Alice.sendMessage(groupId, { text: `✅ Bot telah *di-unmute* oleh owner.\nSekarang bot akan kembali aktif di grup ini.` })
  } else {
    reply(`❌ Format salah!\nGunakan: ${AliceCmd} <nomor> on/off`)
  }
}


case 'swgroup': {
  if (!m.isGroup) return reply('❌ Fitur ini hanya bisa dipakai di grup.')
  if (!isAdmins && !isOwner) return reply('❌ Fitur khusus admin grup atau owner bot.')    

    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ""
    const caption = text || ""
    const jid = m.chat

    try {
        if (/image/.test(mime)) {
            const buffer = await quoted.download()
            await Alice.sendMessage(jid, {
                groupStatusMessage: {
                    image: buffer,
                    caption
                }
            })
            await Alice.sendMessage(jid, { text: "✔️ Status gambar terkirim!" })
        } 
        else if (/video/.test(mime)) {
            const buffer = await quoted.download()
            await Alice.sendMessage(jid, {
                groupStatusMessage: {
                    video: buffer,
                    caption
                }
            })
            await Alice.sendMessage(jid, { text: "✔️ Status video terkirim!" })
        } 
        else if (/audio/.test(mime)) {
            const buffer = await quoted.download()
            await Alice.sendMessage(jid, {
                groupStatusMessage: {
                    audio: buffer
                }
            })
            await Alice.sendMessage(jid, { text: "✔️ Status audio terkirim!" })
        } 
        else if (caption) {
            await Alice.sendMessage(jid, {
                groupStatusMessage: {
                    text: caption
                }
            })
            await Alice.sendMessage(jid, { text: "✔️ Status teks terkirim!" })
        } 
        else {
            reply(`- example: .swgroup (reply media)`)
        }
    } catch (e) {
        reply(String(e))
    }
}


case 'onlyadmin': {
  if (!m.isGroup) return reply('❌ Fitur ini hanya bisa dipakai di grup.')
  if (!isAdmins && !isOwner) return reply('❌ Fitur khusus admin grup atau owner bot.')

  let groupId = m.chat
  let groupName = (await Alice.groupMetadata(groupId)).subject
  let action = (args[0] || '').toLowerCase()

  if (!action) {
    // kalau tanpa argumen → kasih info status
    let status = onlyadmin.includes(groupId) 
      ? '🔒 *Only Admin aktif* (hanya admin yang bisa pakai bot).' 
      : '🔓 *Only Admin nonaktif* (semua member bisa pakai bot).'
    return reply(`📋 Status di grup *${groupName}*:\n\n${status}\n\n💡 Gunakan: ${prefix + command} on/off`)
  }

  if (action === 'on') {
    if (onlyadmin.includes(groupId)) return reply(`❌ Grup *${groupName}* sudah dalam mode *Only Admin*!`)
    onlyadmin.push(groupId)
    fs.writeFileSync('./AliceDatabase/onlyadmin.json', JSON.stringify(onlyadmin, null, 2))
    reply(`✅ Grup *${groupName}* berhasil mengaktifkan mode *Only Admin*!`)
    await Alice.sendMessage(groupId, { text: `⚠️ Mode *Only Admin* aktif.\nSekarang hanya admin grup yang bisa menggunakan bot.` })
  } else if (action === 'off') {
    if (!onlyadmin.includes(groupId)) return reply(`❌ Grup *${groupName}* tidak dalam mode *Only Admin*!`)
    onlyadmin = onlyadmin.filter(id => id !== groupId)
    fs.writeFileSync('./AliceDatabase/onlyadmin.json', JSON.stringify(onlyadmin, null, 2))
    reply(`🔓 Grup *${groupName}* berhasil menonaktifkan mode *Only Admin*!`)
    await Alice.sendMessage(groupId, { text: `✅ Mode *Only Admin* dimatikan.\nSekarang semua member bisa menggunakan bot.` })
  } else {
    reply(`❌ Argumen tidak valid!\nGunakan: ${prefix + command} on/off`)
  }
}


case 'welcome': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin yang bisa mengubah.');
  const arg = (text || '').trim().toLowerCase();

  if (!['on','off'].includes(arg)) {
    let db={}; try{db=JSON.parse(fs.readFileSync(WELCOME_DB_PATH))}catch{}
    const g = db[m.chat] || {};
    return reply(`⚙️ Penggunaan:
${alice}welcome on
${alice}welcome off

Status saat ini: ${g.welcome_enabled === false ? 'OFF' : 'ON'}`);
  }

  let db = {}; try { db = JSON.parse(fs.readFileSync(WELCOME_DB_PATH)); } catch {}
  if (!db[m.chat]) db[m.chat] = {};
  db[m.chat].welcome_enabled = (arg === 'on');
  fs.writeFileSync(WELCOME_DB_PATH, JSON.stringify(db, null, 2));
  reply(`✅ Welcome: *${arg.toUpperCase()}* untuk grup ini.`);
  break;
}


case 'left': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin yang bisa mengubah.');
  const arg = (text || '').trim().toLowerCase();

  if (!['on','off'].includes(arg)) {
    let db={}; try{db=JSON.parse(fs.readFileSync(WELCOME_DB_PATH))}catch{}
    const g = db[m.chat] || {};
    return reply(`⚙️ Penggunaan:
${alice}lefttoggle on
${alice}lefttoggle off

Status saat ini: ${g.left_enabled === false ? 'OFF' : 'ON'}`);
  }

  let db = {}; try { db = JSON.parse(fs.readFileSync(WELCOME_DB_PATH)); } catch {}
  if (!db[m.chat]) db[m.chat] = {};
  db[m.chat].left_enabled = (arg === 'on');
  fs.writeFileSync(WELCOME_DB_PATH, JSON.stringify(db, null, 2));
  reply(`✅ Left: *${arg.toUpperCase()}* untuk grup ini.`);
  break;
}


	case 'closetime': {
  if (!m.isGroup) return reply("⛔ Hanya grup.")
  if (!isAdmins && !isOwner) return reply("⛔ Admin only.")
  if (!isBotAdmins) return reply("⛔ Bot harus admin.")

  if (!args[0] || !args[1]) return reply("Contoh: .closetime 10 minute")

  let timeVal = parseInt(args[0])
  if (isNaN(timeVal)) return reply("Masukkan angka yang valid.")

  let timer
  if (args[1] === 'second') timer = timeVal * 1000
  else if (args[1] === 'minute') timer = timeVal * 60000
  else if (args[1] === 'hour') timer = timeVal * 3600000
  else return reply("Pilih waktu: second/minute/hour")

  reply(`⏳ Grup akan ditutup dalam ${timeVal} ${args[1]}...`)
  setTimeout(() => {
    Alice.groupSettingUpdate(m.chat, 'announcement')
    reply('🔒 Grup telah ditutup.')
  }, timer)
}


            case 'opentime':
                if (!m.isGroup) return reply("*[ sʏsᴛᴇᴍ ]* ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴅᴏᴀɴɢ")
                if (!isAdmins && !isOwner) return XRA()
                if (!isBotAdmins) return reply("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }


case 'gc': { 
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (args[0] === 'close'){
await Alice.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Alice.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
 reply(`Silahkan Ketik ${AliceCmd} open/ ${AliceCmd} close`)
 }
}


case 'editinfo': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!isBotAdmins) return XRBADM
 if (args[0] === 'open'){
await Alice.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Sukses Membuka Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await Alice.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Sukses Menutup Edit Info Group`)).catch((err) => reply(jsonformat(err)))
 } else {
 reply(`Silahkan Ketik ${AliceCmd} open/ ${AliceCmd} close`)
}
}


case 'editsubjek': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!isBotAdmins) return XRBADM
if (!text) return reply('Text nya ?')
await Alice.groupUpdateSubject(m.chat, text).then((res)).catch((err) => reply(jsonformat(err)))
}


case 'editdesk':{
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!isBotAdmins) return XRBADM
if (!text) return reply('Text Nya ?')
await Alice.groupUpdateDescription(m.chat, text).then((res)).catch((err) => reply(jsonformat(err)))
}

    }
  }
};

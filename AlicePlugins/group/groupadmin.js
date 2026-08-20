// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['kickall', 'add', 'tambahmem', 'addmem', 'kick', 'promote', 'demote'],
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
case 'kickall': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.')
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin atau owner bot.')

  const fs = require('fs')
  const moment = require('moment-timezone')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  if (!fs.existsSync('./AliceSystem/AliceDatabase/Group')) {
    fs.mkdirSync('./AliceSystem/AliceDatabase/Group', { recursive: true })
  }

  let kickLog = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path)) : {}
  let dataKick = []

  const botId = Alice.user.id.split(':')[0]

  for (let p of participants) {
    const userId = p.id
    if (userId.includes(botId) || userId === m.sender) continue

    try {
      await Alice.groupParticipantsUpdate(m.chat, [userId], 'remove')
      const name = (await Alice.getName(userId)) || userId.split('@')[0]
      dataKick.push({
        id: userId,
        nama: name,
        waktu: moment().tz('Asia/Jakarta').format('D MMMM YYYY, HH:mm [WIB]')
      })
      await delay(500)
    } catch (err) {
      console.log(`❌ Gagal kick ${userId}`, err)
    }
  }

  kickLog[m.chat] = dataKick
  fs.writeFileSync(path, JSON.stringify(kickLog, null, 2))
  reply(`✅ ${dataKick.length} member telah dikeluarkan dan disimpan di log.`)
}


case 'add':
case 'tambahmem':
case 'addmem': {
  if (!m.isGroup) return XRG()
  if (!isAdmins && !isOwner) return XRA()

  let users;
  if (m.quoted) {
    users = m.quoted.sender
  } else if (text) {
    let number = text.replace(/[^0-9]/g, '')
    if (number.length < 8) return reply('❌ Nomor tidak valid!')
    users = number + '@s.whatsapp.net'
  } else {
    return reply('❌ Masukkan nomor atau reply pesan dari orang yang ingin ditambahkan.')
  }

  const groupData = await Alice.groupMetadata(m.chat)
  const groupMembers = groupData.participants
  const isUserInGroup = groupMembers.some(member => member.id === users)
  if (isUserInGroup) return reply('❌ Pengguna sudah ada di grup.')

  try {
    await Alice.groupParticipantsUpdate(m.chat, [users], 'add')
    return reply(`✅ Berhasil menambahkan @${users.split('@')[0]}`, { mentions: [users] })
  } catch (err) {
    console.error('[❌ Add Error]:', err)

    try {
      const inviteCode = await Alice.groupInviteCode(m.chat)
      const groupName = groupData.subject || 'grup ini'
      const link = `https://chat.whatsapp.com/${inviteCode}`

      await Alice.sendMessage(users, {
        text: `👋 Hai! Admin mengundang kamu untuk bergabung ke grup *${groupName}*\n\nKlik link berikut untuk bergabung:\n${link}`
      })

      return reply(`❌ Gagal ditambahkan langsung. Link undangan sudah dikirim ke @${users.split('@')[0]}`, { mentions: [users] })
    } catch (inviteErr) {
      console.error('[❌ Invite Error]:', inviteErr)
      return reply('❌ Gagal menambahkan dan mengirim link undangan.')
    }
  }
}


case 'kick': {
  if (!m.isGroup) return reply('⛔ Hanya bisa digunakan dalam grup.')
  if (!isAdmins && !isOwner) return reply('⛔ Hanya admin yang bisa menendang.')

  let target

  if (m.mentionedJid.length > 0) {
    target = m.mentionedJid[0]
  } else if (m.quoted) {
    target = m.quoted.sender
  } else if (text) {
    let number = text.replace(/[^0-9]/g, '') // hilangkan non-digit
    target = number + '@s.whatsapp.net'
  }

  if (!target) return reply('⚠️ Masukkan nomor/mention/reply member yang ingin di-kick.')

  try {
    await Alice.groupParticipantsUpdate(m.chat, [target], 'remove')
    reply(`✅ Berhasil mengeluarkan: @${target.split('@')[0]}`, { mentions: [target] })
  } catch (e) {
    console.log('❌ Error kick:', e)
    reply('❌ Gagal mengeluarkan member. Pastikan target bukan admin.')
  }
  break;
}


case "promote":{
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!text && !m.quoted) return reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Alice.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}


case "demote":{
if (!m.isGroup) return XRG()
if (!isAdmins && !isOwner) return XRA()
if (!text && !m.quoted) return reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Alice.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}

    }
  }
};

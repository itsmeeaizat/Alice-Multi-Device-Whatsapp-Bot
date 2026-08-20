// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tambah', 'addchangelog', 'addlog', 'delchangelog', 'dlog', 'rekap', 'vote'],
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
case 'tambah':{
if (isBan) return XRB()
await XReaction()
if (!text.includes('+')) return reply(` *Contoh : 10.000 + 20.000*`)

arg = args.join(' ')

xtambah1 = arg.split('+')[0]

xtambah2 = arg.split('+')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 + xtambah_2}`)}

break;        


case 'addchangelog': case 'addlog': {
      if (!isOwner) return XRO()
      if (!text) return reply(`Usage: ${alice}addchangelog <text>`)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Di Tambahkan 🔑')
      }


    case 'delchangelog': case 'dlog': {
      if (!isOwner) return XRO()
      if (!text) return reply(`Usage: ${alice}rchangelog <text>`)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return reply('Changelog not found')
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Dihapus 🔥')
      }


case 'rekap': {
    if (!text) return reply(`⚠️ Format:\n.rekap\nteam1: nama 50\nteam2: nama 70`)

    let lines = text.split('\n')
    let hasil = []
    let total = 0
    let numbers = []

    for (let line of lines) {
        let match = line.match(/(\d+)/)
        if (match) {
            let angka = parseInt(match[1])
            numbers.push(angka)
 
            let nama = line.replace(/[:\d]/g, '').trim()
            hasil.push(`${nama}: [${angka}] = ${angka}`)
            total += angka
        }
    }

    if (hasil.length < 2) {
        return reply('⚠️ Minimal 2 data untuk rekap.')
    }

    let selisih = Math.max(...numbers) - Math.min(...numbers)

    let teks = hasil.join('\n') + `\n\nTOTAL: ${total}\nSELISIH: ${selisih}`
    reply(teks)
}


    case 'vote':
if (isBan) return XRB()
await XReaction()
      // Logika untuk vote
      if (!Alice.jbRooms[m.chat]) {
        return reply('Belum ada room yang dibuat. Gunakan .jb create untuk membuat room.');
      }

    }
  }
};

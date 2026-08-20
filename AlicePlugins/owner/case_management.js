// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['addscrape', 'dellscrape', 'getscrape', 'getfunction', 'delfunc', 'delfunction', 'listcase', 'getcase', 'addcase', 'sendcase', 'editcase'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'addscrape':

break;

case 'dellscrape':

break;

case 'getscrape':

break;

case 'getfunction': {
if (!isOwner) return XRO() 
if (!text) return reply(`Contoh: ${AliceCmd} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./Alice.js", "utf8");

const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return reply(`Fungsi ${functionName} tidak ditemukan`);

const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
const functionEnd = i + 1;
const functionContent = fileContent.slice(functionStart, functionEnd);
return functionContent;
}
prevChar = currentChar;
}} catch (err) {
return reply(`Terjadi kesalahan: ${err.message}`);
}} 
reply(`${getFunction(q)}`);
}
break

case 'delfunc':

break;

case 'delfunction': {
if (!isOwner) return XRO() 
if (!text) return reply(`Contoh: ${AliceCmd} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./Alice.js", "utf8");
const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return reply(`Fungsi ${functionName} tidak ditemukan`);
const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
let functionEnd;

for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
functionEnd = i + 1;
break;
}
prevChar = currentChar;
}
if (functionEnd === undefined) return reply(`Fungsi ${functionName} tidak lengkap atau kurung kurawal tidak seimbang`);
const updatedContent = fileContent.slice(0, functionStart) + fileContent.slice(functionEnd);
fs.writeFileSync("./Alice.js", updatedContent, "utf8");
return reply(`Fungsi ${functionName} telah dihapus`);
} catch (err) {
return reply(`Terjadi kesalahan: ${err.message}`);
}};
reply(deleteFunction(q));
}
break

case 'listcase': {
if (!isOwner) return XRO();
reply(listCase())
}
break

case 'getcase': {
   if (!isOwner) return XRO()
   if (!q) return reply(`Contoh: ${prefix}getcase uno`)

   try {
      const file = fs.readFileSync("./Alice.js").toString()
      // regex cari case baik pakai ' atau "
      const regex = new RegExp(`case ['"]${q}['"]:[\\s\\S]*?break`, "i")
      const match = file.match(regex)

      if (!match) return reply(`Case ${q} tidak ditemukan`)
      reply(match[0])
   } catch (err) {
      console.log(err)
      reply(`❌ Error membaca case: ${err}`)
   }
}
break

case 'addcase': {
  if (!isOwner) return XRO()
  if (!text) return reply(`Example : ${AliceCmd} case 'halo': { reply("ok") } break`)

  const fs = require('fs')
  const namaFile = 'Alice.js'
  const caseBaru = `\n${text}\n`

  fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) return reply('❌ Error membaca file: ' + err)

    // cari posisi sebelum "default:"
    const posisiDefault = data.lastIndexOf("default:")
    if (posisiDefault === -1) return reply("❌ Tidak menemukan block switch default")

    const kodeBaruLengkap =
      data.slice(0, posisiDefault) + caseBaru + '\n' + data.slice(posisiDefault)

    fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
      if (err) return reply('❌ Error menulis file: ' + err)
      reply('✅ Successfully add case')
    })
  })
}
break

case 'sendcase':

break;

case 'editcase': {
  if (!isOwner) return XRO()
  if (!text) return reply(`❗ Contoh: ${AliceCmd} halo | case 'halo': {\n reply("Halo edit")\n } break`)

  let [caseName, ...newCaseArr] = text.split('|')
  caseName = caseName.trim()
  let newCaseBlock = newCaseArr.join('|').trim()

  if (!caseName || !newCaseBlock) {
    return reply('❌ Format salah!\nGunakan: .editcase <nama_case> | <kode_case_baru>')
  }

  const fs = require('fs')
  const filePath = './Alice.js'

  try {
    let fileContent = fs.readFileSync(filePath, 'utf-8')

    // regex tangkap seluruh case lama (case ... sampai break)
    const regex = new RegExp(
      `case\\s+['"]?${caseName}['"]?\\s*:[\\s\\S]*?break`,
      'i'
    )

    if (!regex.test(fileContent)) {
      return reply(`❌ Case *${caseName}* tidak ditemukan.`)
    }

    // replace dengan block case baru utuh
    let updatedFileContent = fileContent.replace(regex, newCaseBlock)

    fs.writeFileSync(filePath, updatedFileContent, 'utf-8')
    reply(`✅ Case *${caseName}* berhasil diganti dengan block baru.`)
  } catch (error) {
    console.error(error)
    reply('❌ Terjadi kesalahan saat mengedit case.')
  }
}
break
    }
  }
};

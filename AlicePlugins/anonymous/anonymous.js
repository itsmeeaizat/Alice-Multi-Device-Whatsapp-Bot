// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['stopspam', 'anonymous', 'anonymouschat', 'start', 'mulai', 'leave', 'keluar', 'skip', 'next', 'lanjut', 'confes', 'menfes', 'confess', 'menfess', 'balasconfes', 'balasmenfes', 'balasconfess', 'balasmenfess', 'tolakconfes', 'tolakmenfes', 'tolakconfess', 'tolakmenfess', 'stopconfes', 'stopmenfes', 'stopconfess', 'stopmenfess', 'x-spam', 'x-hama', 'nglspam', 'acc', 'tolakacc', 'tembak', 'terima', 'tolak', 'putus', 'cekpacar'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'stopspam': {
if (isBan) return XRB()
await XReaction()
  if (!m.isGroup) return reply('Perintah ini hanya bisa digunakan di dalam grup!')
  if (!Alice.spamStatus) Alice.spamStatus = {}

  const chatId = m.chat
  if (Alice.spamStatus[chatId]) {
    delete Alice.spamStatus[chatId]
    reply('Spam tag berhasil dihentikan!')
  } else {
    reply('Tidak ada spam tag yang sedang berjalan.')
  }
}
break

async function translateToEnglish(text) {
    try {
        const url = "https://translate.googleapis.com/translate_a/single"
        const params = {
            client: "gtx",
            sl: "auto",
            tl: "en",
            dt: "t",
            q: text,
        }
        const res = await axios.get(url, { params })
        return res.data[0][0][0]
    } catch (err) {
        return text
    }
}
 
async function creartTxt2Img(prompt) {
    try {
        const translatedPrompt = await translateToEnglish(prompt)
        const form = new FormData()
        form.append("prompt", translatedPrompt)
        form.append("input_image_type", "text2image")
        form.append("aspect_ratio", "4x5")
        form.append("guidance_scale", "9.5")
        form.append("controlnet_conditioning_scale", "0.5")
        
        const response = await axios.post(
            "https://api.creartai.com/api/v2/text2image",
            form,
            {
                headers: form.getHeaders(),
                responseType: "arraybuffer",
            }
        )
        return Buffer.from(response.data)
    } catch (err) {
        throw new Error(err?.message || err)
    }
}
 
async function creartImg2Img(prompt, imageBuffer) {
    try {
        const translatedPrompt = await translateToEnglish(prompt)
        const form = new FormData()
        form.append("prompt", translatedPrompt)
        form.append("input_image_type", "image2image")
        form.append("aspect_ratio", "4x5")
        form.append("guidance_scale", "9.5")
        form.append("controlnet_conditioning_scale", "0.5")
        form.append("image_file", imageBuffer, "image.png")
        
        const response = await axios.post(
            "https://api.creartai.com/api/v2/image2image",
            form,
            {
                headers: form.getHeaders(),
                responseType: "arraybuffer",
            }
        )
        return Buffer.from(response.data)
    } catch (err) {
        throw new Error(err?.message || err)
    }
}

case 'anonymous':

break;

case 'anonymouschat': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  reply(`Hai ${pushname} selamat datang di Anonymous chat!\n\nKetik ${alice}start untuk memulai sesi chat`)
}
break

case 'start':

break;

case 'mulai': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  this.anonymous = this.anonymous ? this.anonymous : {}
  if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
    reply(`Kamu masih berada di dalam sesi Anonymous!\n\n${alice}leave untuk keluar dari sesi chat`)
    return false
  }
  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
  if (room) {
    Alice.sendMessage(room.a, {
      text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${alice}skip untuk mencari partner lain\n${alice}leave untuk menghentikan sesi chat`
    })
    room.b = m.sender
    room.state = 'CHATTING'
    reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${alice}skip untuk mencari partner lain\n${alice}leave untuk menghentikan sesi chat`)
  } else {
    let id = +new Date
    this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
        return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
      },
    }
    reply(`Menunggu partner...`)
  }
}
break

case 'leave':

break;

case 'keluar': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => room.check(m.sender))
  if (!room) {
    reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${alice}start untuk memulai sesi chat`)
    return false
  }
  reply('Berhasil keluar dari Anonymous chat!')
  let other = room.other(m.sender)
  if (other) await Alice.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
  delete this.anonymous[room.id]
  if (command === 'leave')
    break
}
break

case 'skip':

break;

case 'next':

break;

case 'lanjut': {
if (isBan) return XRB()
await XReaction()
if (!isPc) return XRPC()
  this.anonymous = this.anonymous ? this.anonymous : {}
  let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
  if (!romeo) {
    reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${alice}start untuk mencari partner`)
    return false
  }
  let other = romeo.other(m.sender)
  if (other) await Alice.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
  delete this.anonymous[romeo.id]
  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
  if (room) {
    Alice.sendMessage(room.a, {
      text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${alice}skip untuk mencari partner lain\n${alice}leave untuk menghentikan sesi chat`
    })
    room.b = m.sender
    room.state = 'CHATTING'
    reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${alice}skip untuk mencari partner lain\n${alice}leave untuk menghentikan sesi chat`)
  } else {
    let id = +new Date
    this.anonymous[id] = {
      id,
      a: m.sender,
      b: '',
      state: 'WAITING',
      check: function (who = '') {
        return [this.a, this.b].includes(who)
      },
      other: function (who = '') {
        return who === this.a ? this.b : who === this.b ? this.a : ''
      },
    }
    reply(`Menunggu partner...`)
  }
}
break

case 'confes':

break;

case 'menfes':

break;

case 'confess':

break;

case 'menfess': {
if (isBan) return XRB()
await XReaction()
    this.menfes = this.menfes ? this.menfes : {}
    const roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (m.isGroup) return XRPC()
    if (roof) return reply("Kamu masih berada dalam sesi menfess")
    if (!text) return reply(`Contoh: ${AliceCmd} Nama, 628xx, Menfes nih\n`)
    if (!text.includes(',')) return reply(`Contoh: ${AliceCmd} Nama, 628xxx, Menfes nih\n`)

    const parts = text.split(',').map(item => item.trim());
    if (parts.length < 3) return reply(`Format salah! Contoh: ${AliceCmd} Nama, 628xx, Menfes nih\n`);
    
    const [namaNya, nomorNyaRaw, pesanNya] = parts;
    let nomorNya = nomorNyaRaw.startsWith('0') ? '62' + nomorNyaRaw.slice(1) : nomorNyaRaw;
    
    if (isNaN(nomorNya)) return reply(`Nomor tidak valid! Contoh: ${AliceCmd} Nama, 628xx, Menfes nih\n`);
    
    const yoi = `Dari: ${namaNya}\nPesan: ${pesanNya}\n\nKlik *Terima* untuk menerima menfess\nKlik *Tolak* untuk menolak menfess`;
    const id = m.sender;
    
    this.menfes[id] = {
        id,
        a: m.sender,
        b: `${nomorNya}@s.whatsapp.net`,
        state: 'WAITING'
    };
    
    try {
        await Alice.sendMessage(`${nomorNya}@s.whatsapp.net`, {
            text: yoi,
            footer: ownername,
            buttons: [
                {
                    buttonId: '.balasmenfes',
                    buttonText: { displayText: 'Terima' },
                    type: 1
                },
                {
                    buttonId: '.tolakmenfes',
                    buttonText: { displayText: 'Tolak' },
                    type: 1
                }
            ],
            headerType: 1,
            viewOnce: true
        })
        reply('Pesan berhasil dikirim ke nomor tujuan. Semoga dibales ya')
    } catch (error) {
        console.error(error)
        reply('Pesan gagal dikirim. Periksa kembali nomor tujuan.')
    }
}
break

case 'balasconfes':

break;

case 'balasmenfes':

break;

case 'balasconfess':

break;

case 'balasmenfess': {
if (isBan) return XRB()
await XReaction()
    roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!roof) return reply("Belum ada sesi menfess")
    find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
    let other = [room, room.b].find(user => user !== m.sender)
    find.b = m.sender
    find.state = 'CHATTING'
    this.menfes[find.id] = {
        ...find
    }
    await Alice.sendMessage(other, {
        text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE:*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`,
        mentions: [m.sender]
    })
    Alice.sendMessage(m.chat, {
        text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE:*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`
    })
}
break

case 'tolakconfes':

break;

case 'tolakmenfes':

break;

case 'tolakconfess':

break;

case 'tolakmenfess': {
if (isBan) return XRB()
await XReaction()
    roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!roof) return reply("Belum ada sesi menfess")
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
    let other = [room.a, room.b].find(user => user !== m.sender)
    find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
    Alice.sendMessage(other, {
        text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`,
        mentions: [m.sender]
    })
    reply("Menfess berhasil di tolak")
    delete this.menfes[roof.id]
}
break

case 'stopconfes':

break;

case 'stopmenfes':

break;

case 'stopconfess':

break;

case 'stopmenfess': {
if (isBan) return XRB()
await XReaction()
    find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
    if (!find) return reply("Belum ada sesi menfess")
    const to = find.a == m.sender ? find.b : find.a
    Alice.sendMessage(to, {
        text: `Teman chat telah menghentikan menfess ini`,
        mentions: [m.sender]
    })
    reply("Menfess berhasil di stop")
    delete this.menfes[find.id]
}
break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Menfess Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Bug Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\

case 'x-spam': {
if (!isOwner) return XRO()
let y = text.split(",")
if (y.length < 2) return reply(`Example: ${AliceCmd} Nomor,Jumlah`)
let anu = y[0]
let jumlah = y[1]
let target = anu.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, jumlah)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `*Done Send Bug To Target\n*© Aizat 2025*`})
}
break

case 'x-hama': {
if (!isOwner) return XRO()
if (!q) return reply(`Example: ${AliceCmd} Nomor`)
let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
await Xdelayy(target, 30)
await Alice.sendMessage(m.chat, { image: { url: thumb }, caption: `Done Send Bug To Target\n*© Aizat 2025*`})
}
break

case 'nglspam': {
if (!isPrem) return XRP()
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam username|haloo|5");
    }
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);
    if (isNaN(spamCount) || spamCount <= 0) {
        return reply("Jumlah spam harus berupa angka positif!");
    }
    try {
        await nglspam(username, message, spamCount);
        reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return reply("Fitur error, coba lagi nanti.");
    }
}
break

case 'acc': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.')
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin atau owner bot.')

  const pending = await Alice.groupRequestParticipantsList(m.chat);
  if (pending.length === 0) return reply('✅ Tidak ada member yang minta bergabung.');

  if (args[0] === 'all') {
    await Alice.groupRequestParticipantsUpdate(m.chat, pending.map(u => u.jid), 'approve');
    reply(`✅ Semua member yang meminta bergabung sudah di-ACC (${pending.length} orang).`);
  } else {
    let jumlah = parseInt(args[0]);
    if (isNaN(jumlah) || jumlah < 1) return reply('Masukkan jumlah yang valid!\nContoh: .acc 1 atau .acc all');

    let selected = pending.slice(0, jumlah);
    await Alice.groupRequestParticipantsUpdate(m.chat, selected.map(u => u.jid), 'approve');
    reply(`✅ Berhasil ACC ${selected.length} member yang meminta gabung.`);
  }
}
break;

case 'tolakacc': {
  if (!m.isGroup) return reply('❌ Hanya bisa di dalam grup.')
  if (!isAdmins && !isOwner) return reply('❌ Hanya admin atau owner bot.')

  const pending = await Alice.groupRequestParticipantsList(m.chat);
  if (pending.length === 0) return reply('✅ Tidak ada member yang minta bergabung.')

  if (args[0] === 'all') {
    await Alice.groupRequestParticipantsUpdate(m.chat, pending.map(u => u.jid), 'reject')
    reply(`✅ Semua permintaan gabung sudah DITOLAK (${pending.length} orang).`)
  } else {
    let jumlah = parseInt(args[0])
    if (isNaN(jumlah) || jumlah < 1) return reply('Masukkan jumlah yang valid!\nContoh: .tolakacc 1 atau .tolakacc all')

    let selected = pending.slice(0, jumlah)
    await Alice.groupRequestParticipantsUpdate(m.chat, selected.map(u => u.jid), 'reject')
    reply(`✅ Berhasil menolak ${selected.length} permintaan gabung.`)
  }
}
break;

case 'leave': {
if (!isOwner) return XRO()
reply("Aku Pergi :v")
await Alice.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'tembak': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				Alice.jadian = Alice.jadian ? Alice.jadian : {}
				let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!text) return reply(`tag/reply seseorang, contoh:\n${AliceCmd} @628888`)
				if (user === m.sender) return reply("njrrr stresss")
				if (user === botNumber) return reply("njrrr sama bot, edan😂")
let pasanganUser = global.db.data.users[user] || {}
let pasanganSender = global.db.data.users[m.sender] || {}

let pasangan = pasanganUser.pacar || null
let pasangan2 = pasanganSender.pacar || null
				if (pasangan2 === user) {
					reply(`itu kan pacarr lu njrr`)
				} else if (pasangan) {
					reply(`udah ada pacar nya njrrr\n\nwoii @${pasangan.split("@")[0]} ayangmu mau di ambil`)
				} else if (pasangan2) {
					reply(`lakh, mau selingkuh?\n\nwoii @${pasangan2.split("@")[0]} liat nih, dia mau selingkuh`)
				} else {
                    let ktnmbk = [
                        "ada saat di mana aku nggak suka sendiri. tapi aku juga nggak mau semua orang menemani, hanya kamu yang kumau.", "aku baru sadar ternyata selama ini kamu kaya! kaya yang aku cari selama ini. kamu mau nggak jadi pacarku?", "aku berterima kasih pada mataku, sebab mata inilah yang menuntunku untuk menemukanmu.", "aku boleh kirim cv ke kamu nggak? soalnya aku mau ngelamar jadi pacar.", "aku bukan yang terhebat, namun aku yakin kalau aku mampu membahagiakanmu dengan bermodalkan cinta dan kasih sayang, kamu mau kan denganku?", "aku hanya cowok biasa yang memiliki banyak kekurangan dan mungkin tak pantas mengharapkan cintamu, namun jika kamu bersedia menerimaku menjadi kekasih, aku berjanji akan melakukan apa pun yang terbaik untukmu. maukah kamu menerima cintaku?", "aku ingin bilang sesuatu. udah lama aku suka sama kamu, tapi aku nggak berani ngomong. jadi, kuputuskan untuk wa saja. aku pengin kamu jadi pacarku.", "aku ingin mengungkapkan sebuah hal yang tak sanggup lagi aku pendam lebih lama. aku mencintaimu, maukah kamu menjadi pacarku?", "aku ingin menjadi orang yang bisa membuatmu tertawa dan tersenyum setiap hari. maukah kau jadi pacarku?", "aku mau chat serius sama kamu. selama ini aku memendam rasa ke kamu dan selalu memperhatikanmu. kalau nggak keberatan, kamu mau jadi pacarku?", "aku melihatmu dan melihat sisa hidupku di depan mataku.", "aku memang tidak mempunyai segalanya, tapi setidaknya aku punya kasih sayang yang cukup buat kamu.", "aku menyukaimu dari dulu. kamu begitu sederhana, tetapi kesederhanaan itu sangat istimewa di selaput mataku. akan sempurna jika kamu yang menjadi spesial di hati.", "aku naksir banget sama kamu. maukah kamu jadi milikku?", "aku nggak ada ngabarin kamu bukan karena aku nggak punya kuota atau pulsa, tapi lagi menikmati rasa rindu ini buat kamu. mungkin kamu akan kaget mendengarnya. selama ini aku menyukaimu.", "aku nggak pengin kamu jadi matahari di hidupku, karena walaupun hangat, kamu sangat jauh. aku juga nggak mau kamu jadi udara, karena walaupun aku butuh dan kamu sangat dekat, tapi semua orang juga bisa menghirupmu. aku hanya ingin kamu jadi darah yang bisa sangat dekat denganku.", "aku nggak tahu sampai kapan usiaku berakhir. yang aku tahu, cintaku ini selamanya hanya untukmu.", "aku sangat menikmati waktu yang dihabiskan bersama hari ini. kita juga sudah lama saling mengenal. di hari yang cerah ini, aku ingin mengungkapkan bahwa aku mencintaimu.", "aku selalu membayangkan betapa indahnya jika suatu saat nanti kita dapat membina bahtera rumah tangga dan hidup bersama sampai akhir hayat. namun, semua itu tak mungkin terjadi jika kita berdua sampai saat ini bahkan belum jadian. maukah kamu menjadi kekasihku?", "aku siapkan mental untuk hari ini. kamu harus menjadi pacarku untuk mengobati rasa cinta yang sudah tak terkendali ini.", "aku tahu kita nggak seumur, tapi bolehkan aku seumur hidup sama kamu?", "aku tahu kita sudah lama sahabatan. tapi nggak salah kan kalau aku suka sama kamu? apa pun jawaban kamu aku terima. yang terpenting itu jujur dari hati aku yang terdalam.", "aku tak bisa memulai ini semua terlebih dahulu, namun aku akan berikan sebuah kode bahwa aku menyukai dirimu. jika kau mengerti akan kode ini maka kita akan bersama.", "aku yang terlalu bodoh atau kamu yang terlalu egois untuk membuat aku jatuh cinta kepadamu.", "apa pun tentangmu, tak pernah ku temukan bosan di dalamnya. karena berada di sampingmu, anugerah terindah bagiku. jadilah kekasihku, hey kamu.", "atas izin allah dan restu mama papa, kamu mau nggak jadi pacarku?", "bagaimana kalau kita jadi komplotan pencuri? aku mencuri hatimu dan kau mencuri hatiku.", "bahagia itu kalau aku dan kamu telah menjadi kita.", "besok kalau udah nggak gabut, boleh nggak aku daftar jadi pacar kamu. biar aku ada kerjaan buat selalu mikirin kamu.", "biarkan aku membuatmu bahagia selamanya. kamu hanya perlu melakukan satu hal: jatuh cinta denganku.", "biarkan semua kebahagiaanku menjadi milikmu, semua kesedihanmu menjadi milikku. biarkan seluruh dunia menjadi milikmu, hanya kamu yang menjadi milikku!", "biarlah yang lalu menjadi masa laluku, namun untuk masa kini maukah kamu menjadi masa depanku?", "bisakah kamu memberiku arahan ke hatimu? sepertinya aku telah kehilangan diriku di matamu.", "bukanlah tahta ataupun harta yang aku cari, akan tetapi balasan cintaku yang aku tunggu darimu. dijawab ya.", "caramu bisa membuatku tertawa bahkan di hari-hari tergelap membuatku merasa lebih ringan dari apa pun. aku mau kamu jadi milikku.", "cinta aku ke kamu itu jangan diragukan lagi karena cinta ini tulus dari lubuk hati yang paling dalam.", "cintaku ke kamu tuh kayak angka 5 sampai 10. nggak ada duanya. aku mau kamu jadi satu-satunya wanita di hatiku.", "cowok mana yang berani-beraninya nyakitin kamu. sini aku obati, asal kamu mau jadi pacar aku.", "hai, kamu lagi ngapain? coba deh keluar rumah dan lihat bulan malam ini. cahayanya indah dan memesona, tapi akan lebih indah lagi kalau aku ada di sampingmu. gimana kalau kita jadian, supaya setelah malam ini bisa menatap rembulan sama-sama?", "hidupku indah karena kamu bersamaku, kamu membuatku bahagia bahkan jika aku merasa sedih dan rendah. senyummu menerangi hidupku dan semua kegelapan menghilang. maukah kamu menjadi milikku?", "ini bukan rayuan, tapi ini yang aku rasakan. aku ingin bertukar tulang denganmu. aku jadi tulang punggungmu, kamu jadi tulang rusukku. jadian yuk!", "ini cintaku, ambillah. ini jiwaku, gunakan itu. ini hatiku, jangan hancurkan. ini tanganku, pegang dan bersama-sama kita akan membuatnya abadi.", "izinkan aku mengatakan sesuatu yang menurutku sangat penting. hey, kau punya tempat di hatiku yang tidak bisa dimiliki oleh orang lain. tetaplah di sana dan jadilah kekasihku. mau?", "jika aku bisa memberimu hadiah, aku akan memberimu cinta dan tawa, hati yang damai, mimpi dan kegembiraan khusus selamanya. biarkan aku melakukannya sekarang.", "kalau aku matahari, kamu mau nggak jadi langitku? biar setiap saat setiap waktu bisa selalu bersama tanpa terpisah waktu.", "kalau kamu membuka pesan ini, berarti kamu suka sama aku. kalau kamu membalas pesan ini, artinya kamu sayang sama aku. kalau kamu mengabaikan pesan ini, berarti kamu cinta sama aku. kalau kamu menghapus pesan ini, artinya kamu mau menerimaku jadi pacarmu.", "kalau kau bertanya-tanya apakah aku mencintaimu atau tidak, jawabannya adalah iya.", "kamu adalah satu-satunya yang lebih mengerti aku daripada diriku sendiri. kamu adalah satu-satunya yang dapat ku bagi segalanya, bahkan rahasia pribadiku. aku ingin kamu selalu bersamaku. aku mencintaimu.", "kamu harus membiarkan aku mencintaimu, biarkan aku menjadi orang yang memberimu semua yang kamu inginkan dan butuhkan.", "kamu itu beda dari cewek lain, kamu antik jarang ditemukan di tempat lain. maukah kamu jadi pacar aku?", "kamu kenal iwan nggak? iwan to be your boy friend.", "kamu mau nggak jadi matahari di kehidupanku? kalau mau, menjauhlah 149.6 juta km dari aku sekarang!", "kamu nggak capek hts-an sama aku? aku capek tiap hari jemput kamu, nemenin kamu pas lagi bad mood, menghibur kamu pas lagi sedih. kita pacaran aja, yuk?", "kamu nggak sadar ya, nggak perlu capek nyari kesana kemari, orang yang tulus mencintai kamu ada di depan mata. iya, aku.", "kamu pantas mendapatkan yang terbaik, seseorang yang akan mendukungmu tanpa batas, membiarkanmu tumbuh tanpa batas, dan mencintaimu tanpa akhir. apakah kamu akan membiarkan aku menjadi orangnya?", "kamu tahu enggak kenapa aku ngambil jurusan elektro? karena aku mau bikin pembangkit listrik tenaga cinta kita, supaya rumah tangga kita nanti paling terang.", "kamu tahu kenapa hari ini aku menyatakan semua ini padamu? karena aku lebih memilih untuk malu karena menyatakan cinta ditolak ketimbang menyesal karena orang lain yang lebih dulu menyatakannya.", "kamu telah hidup dalam mimpiku untuk waktu yang lama, bagaimana jika menjadikannya nyata untuk sekali saja?", "kenapa aku baru sadar, ternyata selama ini hatiku nyaman bersanding denganmu. aku mau kamu jadi milikku.", "kepada cewek incaran bukanlah perkara yang mudah. ada banyak hal yang perlu dipertimbangkan agar cintamu bisa diterima si doi. selain memilih waktu yang tepat, kata-kata untuk nembak cewek pun harus dipersiapkan.", "ketika aku bertemu denganmu, aku tak peduli dengan semuanya. namun, ketika kamu pergi jauh dariku aku selalu mengharapkanmu. dan apakah ini cinta?", "ketika engkau memandangku, engkau akan melihat fisikku. tetapi ketika engkau melihat hatiku, engkau akan menemukan dirimu sendiri ada di sana.", "ketika hawa tercipta buat sang adam, begitu indah kehidupan mereka. izinkan aku menjadi sang adam/hawa buatmu karena aku sangat mencintaimu.", "ketika mata ini memandang raut wajahmu yang indah, hanya tiga kata yang terucap dari lubuk hatiku yang paling dalam 'aku cinta kamu'.", "kita udah saling tahu masa lalu masing-masing. tapi itu tidak penting karena sekarang aku hanya ingin membicarakan tentang masa depan. mulai hari ini dan seterusnya, maukah kamu menjadi pacarku?", "ku beranikan hari ini untuk mengungkapkan yang selama ini menjadi resah. resah jika kamu tak menjadi milikku selamanya.", "lebih spesial dari nasi goreng, lebih indah dari purnama. ya, jika kamu yang temani akhir hidupku.", "maaf sebelumnya karena cuma bisa bilang lewat wa. sebenarnya, selama ini aku memendam cinta dan aku ingin kamu jadi pacarku. mau?", "makanan busuk memanglah bau, kalau dimakan rasanya pahit sepahit jamu. sebenarnya aku ingin kamu tahu, aku mau kamu terima cintaku.", "makan tahu bumbu petis. merenung sambil makan buah duku. aku bukan lelaki yang romantis. namun, maukah kau jadi pacarku?", "makasih, ya, selama ini sudah mau temani aku. entah itu dalam suka ataupun duka. tapi sekarang aku mau kamu berubah. aku mau kamu bukan lagi jadi temanku, tapi aku mau kamu jadi pacarku.", "malam ini sangat indah dengan cahaya rembulan yang memesona namun akan lebih indah kalau kamu resmi menjadi milikku.", "mau jadi pacarku nggak, lagi gabut nih. coba dulu 1 bulan kalau nyaman lanjut deh.", "menjadi teman memang menyenangkan. akan lebih membahagiakan jika kamu menjadi milikku.", "meski jarang buat kamu tertawa, setidaknya saya tidak selalu buat kamu sedih. tapi kalau akhirnya humor saya tidak membuatmu tertawa lagi, semoga sedih saya bisa kamu tertawakan, ya. - zarry hendrik", "meskipun aku memiliki banyak hal untuk dikatakan, tetapi kata-kataku bersembunyi dariku dan aku tidak bisa mengungkapkannya. hal sederhana yang ingin aku katakan adalah aku mencintaimu hari ini dan selalu.", "mungkin aku bukan obama, tapi aku senang kalau bisa manggil kamu, o sayang. kamu mau nggak mulai saat ini aku panggil seperti itu?", "mungkin aku tak sanggup menyeberangi lautan, menghantam karang atau menerjang badai. tapi satu yang aku sanggup, membuatmu bahagia. izinkan aku membuktikannya, ya!", "neng, bakar-bakaran yuk! | bakar apa? | kita bakar masa lalu dan buka lembaran baru dengan cinta kita.", "nggak perlu basa basi. kita udah kenal lama, aku suka kamu apa adanya. jadian yuk!", "pepatah mengatakan, empat sehat lima sempurna. namun, aku tidak merasakan kesempurnaan itu sebelum aku merasakan kasih sayangmu.", "saatnya aku mengungkapkan perasaan yang terdalam kepadamu. aku ingin kamu tahu bahwa aku mencintaimu seperti aku tidak pernah mencintai siapa pun sebelumnya.", "saking jatuh cintanya aku sama kamu. mendengar kamu kentut aja aku sudah bahagia.", "satu tambah satu sama dengan dua. aku tanpamu nggak bisa apa-apa. satu dua tiga sepuluh. aku maunya kamu jadi pacarku.", "secantik-canriknya kamu, itu nggak ada gunanya kalau nggak jadi punyaku.", "sejak kenal kamu, bawaannya pengin belajar terus. belajar jadi yang terbaik. untuk selanjutnya, kamu mau nggak ngebimbing aku, selalu ada di sampingku?", "senjata bertuah amatlah sakti. kalah oleh iman nan hakiki. maukah kau jadi orang yang aku kasihi? aku janji cintaku sampai mati.", "seseorang bermimpi tentangmu setiap malam. seseorang tidak bisa bernapas tanpamu, kesepian. seseorang berharap suatu hari kau akan melihatnya. seseorang itu adalah aku.", "setelah hari berlalu, aku yakin kamu pilihanku.", "setelah sekian lama bersama, aku ingin kita tidak hanya sekadar teman saja. aku yakin kamu paham maksudku, dan aku berharap semoga kamu setuju. aku mencintaimu.", "suatu ketika, ada seorang laki-laki yang mencintai perempuan yang tawanya bagaikan sebuah pertanyaan yang seumur hidup ingin dijawabnya. akulah laki-laki itu, seorang laki-laki yang sedang menginginkan perempuan untuk jawaban di hidupnya. perempuan itu adalah kamu.", "suka maupun duka, senang maupun susah, kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu karena aku mau kamu jadi pacar aku?", "tak ada alasan yang pasti dan jelas kenapa aku cinta kamu, tapi yang pasti aku menginginkan aku bahagia denganmu dan tak ingin sampai kamu terluka.", "tak bisa dibayangkan jika di dunia ini tak ada yang namanya cinta. ya, rasa cinta bagi sebagian orang memberi keindahan yang membuat hari-hari semakin berwarna. apalagi jika perasaan cinta yang kita punya dibalas oleh orang yang kita suka.", "tak hanya menyenangkan, aku yakin kamu dapat diandalkan di masa depan.", "tak ragu lagi untuk ungkapkan kepada seseorang yang ada di hati. itu adalah kamu.", "telah banyak waktuku terlewati bersamamu, suka maupun duka senang maupun susah kamu telah menghiasi hariku saat aku bersamamu dan aku mau kita selamanya dekat denganmu. karena aku mau kamu jadi pacar aku?", "tidak peduli seberapa sederhanya dan ketidakjelasan kamu. tapi bagi aku, kamu adalah kesempurnaan yang memiliki kejelasan. aku mau kamu jadi pacarku.", "untuk apa memajang foto berdua? yang aku mau fotomu ada dalam buku nikahku kelak. maukah kamu jadi pacarku?"
];
					let katakata = await pickRandom(ktnmbk)
					let teks = `love Message...\n\n> @${m.sender.split("@")[0]}\n❤️❤️\n@${user.split("@")[0]}\n\n"${katakata}"`
					Alice.jadian[user] = [
						reply(teks),
						m.sender
					]
					reply(`kamu baru saja mengajak @${user.split("@")[0]} jadian\n\n@${user.split("@")[0]} silahkan beri keputusan🎉\n${alice}terima atau ${alice}tolak`)
				}
			}
			break

case 'terima': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				if (Alice.jadian[m.sender]) {
					let user = Alice.jadian[m.sender][1]
					global.db.data.users[user].pacar = m.sender
					global.db.data.users[m.sender].pacar = user
					reply(`horeee\n\n${m.sender.split("@")[0]} jadian dengan\n❤️ ${user.split("@")[0]}\n\nsemoga langgeng 🙈😋`)
					delete Alice.jadian[m.sender]
				} else {
					reply("anjirr?")
				}
			}
			break

case 'tolak': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				if (Alice.jadian[m.sender]) {
					let user = Alice.jadian[m.sender][1]
					reply(`@${user.split("@")[0]} wowkaowka di tolak`)
					delete Alice.jadian[m.sender]
				} else {
					reply("anjirr?")
				}
			}
			break

case 'putus': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				let pasangan = global.db.data.users[m.sender].pacar
				if (pasangan) {
					global.db.data.users[m.sender].pacar = ""
					global.db.data.users[pasangan].pacar = ""
					reply(`horeee kamu putus sama @${pasangan.split("@")[0]}`)
				} else {
					reply("anjirr?")
				}
			}
			break

case 'cekpacar': {
if (isBan) return XRB()
await XReaction()
				if (!m.isGroup) return XRG()
				try {
					let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					if (!user) return reply(`tag/reply seseorang, contoh: ${AliceCmd} @628888`)
					let pasangan = global.db.data.users[user].pacar
					if (pasangan) {
						reply(`@${user.split("@")[0]} udah ❤️ sama @${pasangan.split("@")[0]}`)
					} else {
						reply(`@${user.split("@")[0]} masih jomblo`)
					}
				} catch (error) {
                      let user = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : "");
					reply(`@${user.split("@")[0]} tidak ada didalam database njrrr`)
				}
			}
			break
    }
  }
};

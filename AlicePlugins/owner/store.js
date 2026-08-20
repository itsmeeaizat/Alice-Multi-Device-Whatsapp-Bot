// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['deposit', 'escrow', 'addproduk', 'delproduk', 'updateproduk', 'listproduk', 'payment', 'diskon', 'beliproduk', 'cancel'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'deposit': {
  initRpgUser(sender, m.pushName)
  const me = rpgDb[sender]; ensureBankFields(me)

  const args = (text||'').trim().split(/\s+/)
  const aksi = (args[0]||'').toLowerCase()
  const jumlah = parseInt(args[1],10)
  const durasiJam = parseInt(args[2],10)

  if (!aksi) {
    return reply(
`⏳ *DEPOSIT BERJANGKA*
deposit buat <jumlah> <jam> → lock coin, bunga 10% saat cair
deposit cek                  → cek status
deposit cair                 → cairkan jika jatuh tempo
deposit batal                → batalkan sebelum jatuh tempo (kena penalti 5%)`)
  }

  if (aksi === 'buat') {
    if (me.deposit.amount > 0) return reply('❌ Kamu sudah punya deposito aktif.')
    if (!Number.isInteger(jumlah) || jumlah < bankCfg.minAmount) return reply(`⚠️ Minimal deposit ${fmt(bankCfg.minAmount)}.`)
    if (!Number.isInteger(durasiJam) || durasiJam < 1) return reply('⚠️ Durasi minimal 1 jam.')
    if (me.bank < jumlah) return reply('❌ Tabungan tidak cukup.')

    me.bank -= jumlah
    me.deposit = { amount: jumlah, until: Date.now() + durasiJam*3600000 }
    pushLog(me, `DEPOSIT BUAT -${fmt(jumlah)} (${durasiJam} jam)`)
    saveRpg()
    return reply(`✅ Deposit ${fmt(jumlah)} coin dibuat untuk ${durasiJam} jam.`)
  }

  if (aksi === 'cek') {
    if (me.deposit.amount <= 0) return reply('❌ Tidak ada deposito.')
    const sisa = me.deposit.until - Date.now()
    return reply(`💰 Deposito: ${fmt(me.deposit.amount)} coin\n⏳ Sisa waktu: ${hms(sisa)}`)
  }

  if (aksi === 'cair') {
    if (me.deposit.amount <= 0) return reply('❌ Tidak ada deposito.')
    if (Date.now() < me.deposit.until) return reply('⏳ Belum jatuh tempo.')
    const bunga = Math.floor(me.deposit.amount * 0.10)
    const total = me.deposit.amount + bunga
    me.bank += total
    pushLog(me, `DEPOSIT CAIR +${fmt(total)} (termasuk bunga 10%)`)
    me.deposit = { amount: 0, until: 0 }
    saveRpg()
    return reply(`✅ Deposito cair! Kamu dapat ${fmt(total)} coin (bunga 10%).`)
  }

  if (aksi === 'batal') {
    if (me.deposit.amount <= 0) return reply('❌ Tidak ada deposito.')
    // penalti 5% jika batal sebelum jatuh tempo
    const penalti = Math.floor(me.deposit.amount * 0.05)
    const kembali = me.deposit.amount - penalti
    me.bank += Math.max(0, kembali)
    global.bankCentral += penalti  // penalti masuk bank pusat
    pushLog(me, `DEPOSIT BATAL +${fmt(kembali)} (penalti ${fmt(penalti)})`)
    me.deposit = { amount: 0, until: 0 }
    saveRpg()
    return reply(`⚠️ Deposit dibatalkan. Kembali ${fmt(kembali)} coin (penalti ${fmt(penalti)}).`)
  }

  return reply('❓ Perintah deposit tidak dikenali.')
}

/* ========================= ESCROW (rekening titipan) ========================= */

case 'escrow': {
  initRpgUser(sender, m.pushName)
  const me = rpgDb[sender]; ensureBankFields(me)

  const args = (text||'').trim().split(/\s+/)
  const aksi = (args[0]||'').toLowerCase()
  const jumlah = parseInt(args[1],10)
  const tagJid = (m.mentionedJid && m.mentionedJid[0]) || null

  if (!aksi) {
    return reply(
`🤝 *ESCROW (Titipan Aman)*
escrow buat <jumlah> @user  → tahan dana dari tabungan kamu
escrow cek                   → lihat escrow aktif (punyamu)
escrow konfirmasi            → CAIR ke penerima (bisa oleh pengirim atau penerima)
escrow batal                 → batalkan & uang kembali ke tabungan pengirim`)
  }

  if (aksi === 'buat') {
    if (!Number.isInteger(jumlah) || jumlah < bankCfg.minAmount) return reply(`⚠️ Minimal escrow ${fmt(bankCfg.minAmount)}.`)
    if (!tagJid) return reply('⚠️ Tag penerima: *escrow buat <jumlah> @user*')
    if (me.bank < jumlah) return reply('❌ Tabungan tidak cukup.')

    initRpgUser(tagJid, 'Player')
    const you = rpgDb[tagJid]; ensureBankFields(you)

    if (me.escrow) return reply('⚠️ Kamu masih punya escrow aktif. Selesaikan dulu.')
    me.bank -= jumlah
    me.escrow = { amount: jumlah, target: tagJid, by: sender, confirmed: false }
    pushLog(me, `ESCROW BUAT -${fmt(jumlah)} → @${tagJid.split('@')[0]}`)
    saveRpg()
    return reply(`✅ Escrow ${fmt(jumlah)} coin dibuat untuk @${tagJid.split('@')[0]}.`, { mentions: [tagJid] })
  }

  if (aksi === 'cek') {
    if (!me.escrow) return reply('ℹ️ Tidak ada escrow aktif.')
    const e = me.escrow
    return reply(`💼 Escrow: ${fmt(e.amount)} → @${(e.target||'').split('@')[0]}\nStatus: ${e.confirmed ? 'Selesai' : 'Menunggu konfirmasi'}`)
  }

  if (aksi === 'konfirmasi') {
    // Konfirmasi bisa dilakukan oleh PENGIRIM (pemilik escrow) atau PENERIMA
    // Jika perintah datang dari penerima, cari escrow milik pengirim yang targetnya = sender (penerima)
    let ownerId = sender
    let escrowOwner = rpgDb[ownerId]
    let isReceiverConfirm = false

    if (!escrowOwner.escrow) {
      // coba cari escrow dari orang lain yang menargetkan 'sender' (penerima)
      const ownerEntry = Object.entries(rpgDb).find(([,u]) => u && u.escrow && u.escrow.target === sender)
      if (!ownerEntry) return reply('❌ Tidak ada escrow yang menujumu atau milikmu.')
      ownerId = ownerEntry[0]
      escrowOwner = rpgDb[ownerId]
      isReceiverConfirm = true
    }

    const e = escrowOwner.escrow
    if (!e) return reply('❌ Tidak ada escrow aktif.')
    if (e.target !== (isReceiverConfirm ? sender : e.target)) {
      // safety, should always pass above
    }

    initRpgUser(e.target, 'Player'); ensureBankFields(rpgDb[e.target])
    rpgDb[e.target].bank += e.amount
    pushLog(escrowOwner, `ESCROW CAIR -${fmt(e.amount)} → @${e.target.split('@')[0]}`)
    pushLog(rpgDb[e.target], `ESCROW TERIMA +${fmt(e.amount)} dari @${ownerId.split('@')[0]}`)
    escrowOwner.escrow = null
    saveRpg()
    return reply(`🤝 Escrow selesai. ${fmt(e.amount)} coin cair ke @${e.target.split('@')[0]}.`, { mentions: [e.target] })
  }

  if (aksi === 'batal') {
    if (!me.escrow) return reply('❌ Tidak ada escrow aktif.')
    const e = me.escrow
    me.bank += e.amount
    pushLog(me, `ESCROW BATAL +${fmt(e.amount)} (kembali ke tabungan)`)
    me.escrow = null
    saveRpg()
    return reply('❌ Escrow dibatalkan. Coin dikembalikan ke tabungan.')
  }

  return reply('❓ Perintah escrow tidak dikenali.')
}

case 'addproduk': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${AliceCmd} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
reply(`Produk dengan nama "${productName}" sudah ada.`)
} else {
addprodukzz(productName, harga, jumlahStok)
reply(`Produk "${productName}" telah ditambahkan dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
}}}
break

case 'delproduk': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh: ${AliceCmd} nama_produk`)
const productName = text.trim()
if (!productName) {
reply('Nama produk tidak valid.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
delprodukzz(productName)
reply(`Produk "${productName}" telah dihapus.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'updateproduk': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${AliceCmd} nama_produk, harga, stok`)
const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
const harga = parseInt(price, 10)
const jumlahStok = parseInt(stock, 10)
if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
} else {
const productExists = cekProduknye(productName)
if (productExists) {
updprodukzz(productName, harga, jumlahStok)
reply(`Produk "${productName}" telah diperbarui dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
} else {
reply(`Produk "${productName}" tidak ditemukan.`)
}}}
break

case 'listproduk': {
if (isBan) return XRB()
await XReaction()
const products = getprodukdb()
const discounts = getDisczz()
if (products.length === 0) {
reply('Tidak ada produk yang tersedia saat ini.')
} else {
let listText = `List produk yg tersedia:\nTotal: ${products.length}\n\n`
products.forEach(product => {
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
if (discount) {
const discountPercentage = persenDiskonnya(product.harga, discount.harga_diskon)
listText += `• ${product.nama}\n  Harga: ~Rp${toRupiah(product.harga)}~ > Rp${toRupiah(discount.harga_diskon)} (${discountPercentage}%)\n  Stok: ${product.stok} unit\n\n`
} else {
listText += `• ${product.nama}\n  Harga: Rp${toRupiah(product.harga)}\n  Stok: ${product.stok} unit\n\n`
}})
reply(listText)
}}
break

case 'payment': {
  if (isBan) return XRB();
  await XReaction();

  await Alice.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/gjrh98.jpg" },
    caption: `📌 *Payment Aizat*\n\n` +
             `🏪 *OrderKuota*\n` +
             `📷 QRIS : https://files.catbox.moe/gjrh98.jpg\n` +
             `• Nama QRIS : XYROO STORE\n` +
             `• Username : xxyyroo\n` +
             `• Nomor HP : 0851-3544-1066\n\n` +
             `💳 *Payment Lain*\n` +
             `• GoPay : 0851-3544-1066\nA/N WIN*****\n` +
             `• Dana : 0857-7429-3594\nA/N WIN*****\n\n` +
             `⚠️ *Catatan Penting*\n` +
             `Jika QRIS tidak bisa dibuka, silakan gunakan Dana / GoPay.\n` +
             `Apabila akun Anda belum premium, harap hubungi admin kembali untuk meminta QRIS lain.`
  }, { quoted: m });
}
break;

case 'diskon': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${AliceCmd} nama_produk, harga_diskon, tgl-bln-th`)
const [productName, discountPriceStr, expirationDate] = args.join(' ').split(',').map(item => item.trim())
const discountPrice = parseInt(discountPriceStr, 10)
if (!productName || isNaN(discountPrice) || !expirationDate) {
reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga diskon, dan tanggal kadaluarsa yang valid.')
} else {
const products = getprodukDariFile()
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())
if (!product) {
reply(`Produk "${productName}" tidak ditemukan.`)
} else {
addDisczz(productName, discountPrice, expirationDate)
const discountPercentage = persenDiskonnya(product.harga, discountPrice)
reply(`Diskon untuk produk "${productName}" berhasil ditambahkan.\nHarga diskon: Rp${discountPrice}, Berlaku hingga: ${expirationDate} (${discountPercentage}%)`)
}}}
break

case 'beliproduk': {
if (isBan) return XRB()
await XReaction()
if (!text.includes(',')) return reply(`Contoh: ${AliceCmd} nama_produk, jumlah`)
const [productName, quantity] = args.join(' ').split(',').map(item => item.trim())
const jumlah = parseInt(quantity, 10)
if (!productName || isNaN(jumlah) || jumlah <= 0) {
return reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah yang valid.')
}
const products = getprodukDariFile();
const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())

if (!product) {
return reply(`Produk "${productName}" tidak ditemukan.`)}
if (product.stok < jumlah) {
return reply(`Stok untuk produk "${productName}" tidak mencukupi. Tersisa ${product.stok} unit.`)}
const discounts = getDisczz()
const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
const totalHarga = discount ? discount.harga_diskon * jumlah : product.harga * jumlah
const transactionId = cIdTrnya()
reply(`
Kamu membeli ${jumlah} produk "${productName}"
Total harga: ${toRupiah(totalHarga)}

Silahkan transfer terlebih dahulu lalu
ketik ${alice}payment untuk melihat metode pembayaran yang tersedia

Ketik ini...
${alice}confirm ${transactionId}
${alice}cancel ${transactionId}
`)
saveTrnye({
id: transactionId,
productName,
jumlah,
totalHarga,
status: 'process',
buyer: m.sender
})
product.stok -= jumlah
simpenProduknya(products)
}
break

case 'cancel': {
  const fs = require('fs');
  const path = './AliceDatabase/transaksi.json';
  if (!fs.existsSync(path)) return reply('❌ Tidak ada transaksi.');

  let data = JSON.parse(fs.readFileSync(path));
  const trx = data[m.sender];
  if (!trx) return reply('❌ Tidak ada transaksi aktif.');

  // Coba hapus QRIS jika ada key
  try {
    if (trx.key) {
      await Alice.sendMessage(trx.key.remoteJid, {
        delete: {
          remoteJid: trx.key.remoteJid,
          fromMe: trx.key.fromMe,
          id: trx.key.id,
          participant: trx.key.participant || botNumber
        }
      });
    }
  } catch (err) {
    console.log('❌ Gagal hapus QRIS:', err.message);
  }

  delete data[m.sender];
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  reply(`🚫 Transaksi *${trx.jenis}* sebesar *${formatmoney(trx.harga)}* telah dibatalkan.`);
}
break;
    }
  }
};

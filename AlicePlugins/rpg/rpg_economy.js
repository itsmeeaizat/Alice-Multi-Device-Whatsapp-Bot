// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['bank', 'atmall', 'gbank', 'deposit', 'escrow', 'trade', 'market', 'darkmode', 'dailybox', 'exchange', 'bounty', 'spy', 'shop', 'buy', 'sell', 'daily', 'work', 'pekerjaan', 'kerja'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'bank': {
  initRpgUser(sender, m.pushName)
  const me = rpgDb[sender]
  ensureBankFields(me)

  // parsing argumen
  const args = (text||'').trim().split(/\s+/)
  let aksi = (args[0]||'').toLowerCase()
  let jumlah = parseInt(args[1], 10)
  const tagJid = (m.mentionedJid && m.mentionedJid[0]) || null

  if (!aksi) {
    return reply(
`🏦 *BANK MENU*

bank cek                    → saldo dompet/tabungan/hutang, status polis
bank simpan <jumlah>        → setor ke tabungan
bank tarik <jumlah>         → tarik ke dompet (fee ${Math.round(bankCfg.feeRate*100)}%)
bank transfer <jumlah> @u   → kirim (fee ${Math.round(bankCfg.feeRate*100)}%, limit ${fmt(bankCfg.dailyTransferCap)}/hari)
bank pinjam <jumlah>        → pinjam (bunga ${Math.round(bankCfg.loanInterest*100)}% flat)
bank bayar <jumlah>         → bayar hutang
bank bunga                  → klaim bunga harian (${Math.round(bankCfg.interestRate*100)}%)
bank rampok @user           → heist tabungan (berisiko, cd 1 jam)
bank polis beli|hapus       → asuransi (kurangi ${Math.round(bankCfg.insuranceCoverage*100)}% kerugian saat kena heist)
bank log                    → riwayat transaksi`
    )
  }

  // CEK
  if (aksi === 'cek') {
    return reply(
`💳 *SALDO KAMU*
👜 Dompet   : ${fmt(me.coin)}
🏦 Tabungan : ${fmt(me.bank)}
📉 Hutang   : ${fmt(me.loan)}
🛡️ Asuransi : ${me.insurance ? 'AKTIF' : 'Tidak ada'}

Transfer hari ini: ${fmt(me.transferUsed)} / ${fmt(bankCfg.dailyTransferCap)}`
    )
  }

  // SIMPAN
  if (aksi === 'simpan') {
    if (!Number.isInteger(jumlah) || jumlah < bankCfg.minAmount) return reply(`⚠️ Minimal simpan ${fmt(bankCfg.minAmount)}.`)
    if (me.coin < jumlah) return reply('❌ Coin di dompet tidak cukup.')
    me.coin -= jumlah
    me.bank += jumlah
    pushLog(me, `SIMPAN +${fmt(jumlah)} → bank`)
    saveRpg()
    return reply(`✅ Simpan ${fmt(jumlah)} coin ke bank.\n🏦 ${fmt(me.bank)} | 👜 ${fmt(me.coin)}`)
  }

  // TARIK (fee)
  if (aksi === 'tarik') {
    if (!Number.isInteger(jumlah) || jumlah < bankCfg.minAmount) return reply(`⚠️ Minimal tarik ${fmt(bankCfg.minAmount)}.`)
    if (me.bank < jumlah) return reply('❌ Tabungan tidak cukup.')

    const fee = Math.ceil(jumlah * bankCfg.feeRate)
    const bersih = jumlah - fee
    if (bersih <= 0) return reply('⚠️ Jumlah terlalu kecil setelah dipotong fee.')

    me.bank -= jumlah
    me.coin += bersih
    global.bankCentral += fee

    pushLog(me, `TARIK -${fmt(bersih)} (fee ${fmt(fee)})`)
    saveRpg()
    return reply(`✅ Tarik ${fmt(bersih)} coin (fee ${fmt(fee)}).\n🏦 ${fmt(me.bank)} | 👜 ${fmt(me.coin)}`)
  }

  // TRANSFER (fee + limit harian)
  if (aksi === 'transfer') {
    if (!Number.isInteger(jumlah) || jumlah < bankCfg.minAmount) return reply(`⚠️ Minimal transfer ${fmt(bankCfg.minAmount)}.`)
    if (!tagJid) return reply('⚠️ Tag penerima: *bank transfer <jumlah> @user*')
    if (tagJid === sender) return reply('😆 Tidak bisa transfer ke diri sendiri.')
    if (me.bank < jumlah) return reply('❌ Tabungan tidak cukup.')

    const key = todayKey()
    if (me.transferDay !== key) { me.transferDay = key; me.transferUsed = 0 }
    if (me.transferUsed + jumlah > bankCfg.dailyTransferCap) {
      return reply(`⛔ Limit transfer harian tercapai. Sisa: ${fmt(bankCfg.dailyTransferCap - me.transferUsed)}.`)
    }

    initRpgUser(tagJid, 'Player')
    const you = rpgDb[tagJid]; ensureBankFields(you)

    const fee = Math.ceil(jumlah * bankCfg.feeRate)
    const kirim = jumlah - fee
    if (kirim <= 0) return reply('⚠️ Jumlah terlalu kecil setelah dipotong fee.')

    me.bank -= jumlah
    me.transferUsed += jumlah
    you.bank += kirim
    global.bankCentral += fee

    pushLog(me, `TRANSFER -${fmt(kirim)} (fee ${fmt(fee)}) → @${tagJid.split('@')[0]}`)
    pushLog(you, `TRANSFER +${fmt(kirim)} dari @${sender.split('@')[0]}`)
    saveRpg()
    return reply(`✅ Transfer ${fmt(kirim)} coin ke @${tagJid.split('@')[0]} (fee ${fmt(fee)}).`, { mentions: [tagJid] })
  }

  // PINJAM
  if (aksi === 'pinjam') {
    if (!Number.isInteger(jumlah) || jumlah < bankCfg.minAmount) return reply(`⚠️ Minimal pinjam ${fmt(bankCfg.minAmount)}.`)
    if (me.loan > 0) return reply('❌ Bayar hutang yang ada dulu.')
    me.coin += jumlah
    me.loan = jumlah + Math.floor(jumlah * bankCfg.loanInterest)
    pushLog(me, `PINJAM +${fmt(jumlah)} (hutang total ${fmt(me.loan)})`)
    saveRpg()
    return reply(`💳 Pinjam ${fmt(jumlah)} coin.\nTotal harus dibayar: ${fmt(me.loan)}`)
  }

  // BAYAR
  if (aksi === 'bayar') {
    if (!Number.isInteger(jumlah) || jumlah <= 0) return reply('⚠️ Masukkan jumlah yang valid.')
    if (me.loan <= 0) return reply('✅ Kamu tidak punya hutang.')
    if (me.coin + me.bank < jumlah) return reply('❌ Coin tidak cukup (gabungan dompet+bank).')

    let bayar = Math.min(jumlah, me.loan)
    const ambilDompet = Math.min(me.coin, bayar)
    me.coin -= ambilDompet
    const sisa = bayar - ambilDompet
    if (sisa > 0) me.bank -= sisa

    me.loan -= bayar
    pushLog(me, `BAYAR HUTANG -${fmt(bayar)} (sisa: ${fmt(me.loan)})`)
    saveRpg()
    return reply(`✅ Bayar ${fmt(bayar)} coin. Sisa hutang: ${fmt(me.loan)}.`)
  }

  // BUNGA HARIAN
  if (aksi === 'bunga') {
    const key = todayKey()
    if (me.lastInterest === key) return reply('⏳ Bunga sudah diklaim hari ini.')
    const bunga = Math.floor((me.bank||0) * bankCfg.interestRate)
    if (bunga <= 0) return reply('😅 Tabungan terlalu kecil untuk bunga.')
    me.bank += bunga
    me.lastInterest = key
    pushLog(me, `BUNGA +${fmt(bunga)} (tabungan: ${fmt(me.bank)})`)
    saveRpg()
    return reply(`🏦 Bunga harian +${fmt(bunga)} coin ditambahkan. Tabungan: ${fmt(me.bank)}.`)
  }

  // RAMPOK (HEIST)
  if (aksi === 'rampok') {
    if (!tagJid) return reply('⚠️ Tag korban: *bank rampok @user*')
    if (tagJid === sender) return reply('😆 Merampok diri sendiri?')

    initRpgUser(tagJid, 'Player')
    const korban = rpgDb[tagJid]; ensureBankFields(korban)

    const now = Date.now()
    if (me.lastHeist && now - me.lastHeist < bankCfg.heistCooldownMs)
      return reply(`⏳ Cooldown heist. Tunggu ${hms(bankCfg.heistCooldownMs - (now - me.lastHeist))}.`)

    me.lastHeist = now

    if ((korban.bank||0) <= 0) return reply('😅 Tabungan korban kosong.')

    const sukses = Math.random() < bankCfg.heistSuccess
    if (sukses) {
      let hasil = Math.max(1, Math.floor(korban.bank * bankCfg.heistCut))
      if (korban.insurance) {
        const lindung = Math.floor(hasil * bankCfg.insuranceCoverage)
        hasil -= lindung
      }
      hasil = Math.min(hasil, korban.bank)
      korban.bank -= hasil
      me.bank += hasil

      pushLog(me, `HEIST BERHASIL +${fmt(hasil)} dari @${tagJid.split('@')[0]}`)
      pushLog(korban, `KENA HEIST -${fmt(hasil)} oleh @${sender.split('@')[0]}${korban.insurance?' (asuransi aktif)':''}`)
      saveRpg()
      return reply(`💥 Heist berhasil! Dapat ${fmt(hasil)} coin dari @${tagJid.split('@')[0]}.`, { mentions: [tagJid] })
    } else {
      const denda = Math.max(10, Math.floor((me.coin||0) * 0.10))
      me.coin = Math.max(0, me.coin - denda)
      global.bankCentral += denda
      pushLog(me, `HEIST GAGAL denda -${fmt(denda)} (dompet: ${fmt(me.coin)})`)
      saveRpg()
      return reply(`🚨 Heist gagal! Denda ${fmt(denda)} coin.`)
    }
  }

  // POLIS
  if (aksi === 'polis') {
    const sub = (args[1]||'').toLowerCase()
    if (!sub) {
      return reply(`🛡️ *ASURANSI BANK*
• bank polis beli  → biaya ${fmt(bankCfg.insurancePremium)}
• bank polis hapus → nonaktifkan polis
Status: ${me.insurance ? 'AKTIF' : 'Tidak ada'}`)
    }
    if (sub === 'beli') {
      if (me.insurance) return reply('✅ Polis sudah aktif.')
      if (me.coin < bankCfg.insurancePremium) return reply('❌ Coin tidak cukup untuk premi.')
      me.coin -= bankCfg.insurancePremium
      me.insurance = true
      pushLog(me, `BELI POLIS -${fmt(bankCfg.insurancePremium)} (aktif)`)
      saveRpg()
      return reply(`🛡️ Polis aktif. Kerugian heist dikurangi ${Math.round(bankCfg.insuranceCoverage*100)}%.`)
    }
    if (sub === 'hapus') {
      if (!me.insurance) return reply('⚠️ Tidak punya polis.')
      me.insurance = false
      pushLog(me, `POLIS DINONAKTIFKAN`)
      saveRpg()
      return reply('🛡️ Polis dimatikan.')
    }
  }

  // LOG
  if (aksi === 'log') {
    const list = (me.bankLog||[]).slice(0,10)
    return reply(`🧾 *RIWAYAT TRANSAKSI*\n${list.length ? list.map((x,i)=>`${i+1}. ${x}`).join('\n') : 'Belum ada transaksi.'}`)
  }

  return reply('❓ Perintah bank tidak dikenali.')
}

/* ========================= ATMALL (leaderboard bank) ========================= */

case 'atmall': {
  const ranking = Object.entries(rpgDb)
    .map(([id,u]) => ({ id, bank: (u&&u.bank)||0, name: (u&&u.name)||id.split('@')[0] }))
    .sort((a,b)=>b.bank-a.bank)
    .slice(0, 10)

  const teks = `🏦 *ATMALL LEADERBOARD*\n\n` +
    (ranking.length
      ? ranking.map((u,i)=> `${i+1}. ${u.name} → ${fmt(u.bank)} coin`).join('\n')
      : 'Belum ada data.')

  return reply(teks)
}

/* ========================= GUILD BANK (rekening bersama) ========================= */

case 'gbank': {
  initRpgUser(sender, m.pushName)
  const me = rpgDb[sender]; ensureBankFields(me)

  if (!me.guild) return reply('⚠️ Kamu belum tergabung guild.')

  // auto-init struktur guild
  rpgGuildDb[me.guild] ??= { bank: 0, leader: null, officers: [], name: `Guild-${me.guild}` }
  const g = rpgGuildDb[me.guild]

  // fallback: kalau belum ada leader, tetapkan user pertama sebagai leader
  if (!g.leader) { g.leader = sender; saveGuild() }

  const args = (text||'').trim().split(/\s+/)
  const aksi = (args[0]||'').toLowerCase()
  const jumlah = parseInt(args[1],10)

  if (!aksi) {
    return reply(
`🏰 *GUILD BANK*
gbank saldo                → cek saldo guild
gbank setor <jumlah>       → setor coin ke guild
gbank tarik <jumlah>       → tarik (ketua/officer saja)`)
  }

  if (aksi === 'saldo') {
    return reply(`🏦 Saldo Guild *${g.name}*: ${fmt(g.bank)}`)
  }

  if (aksi === 'setor') {
    if (!Number.isInteger(jumlah) || jumlah <= 0) return reply('⚠️ Masukkan jumlah.')
    if (me.coin < jumlah) return reply('❌ Coin tidak cukup.')
    me.coin -= jumlah
    g.bank += jumlah
    saveRpg(); saveGuild()
    return reply(`✅ Setor ${fmt(jumlah)} coin ke bank guild.\nSaldo guild: ${fmt(g.bank)}`)
  }

  if (aksi === 'tarik') {
    const allowed = isGuildLeaderOrOfficer(sender)
    if (!allowed) return reply('❌ Hanya ketua/officer yang boleh tarik.')
    if (!Number.isInteger(jumlah) || jumlah <= 0) return reply('⚠️ Masukkan jumlah.')
    if (g.bank < jumlah) return reply('❌ Saldo guild tidak cukup.')
    g.bank -= jumlah
    me.coin += jumlah
    saveRpg(); saveGuild()
    return reply(`✅ Tarik ${fmt(jumlah)} coin dari bank guild.\nSaldo guild: ${fmt(g.bank)}`)
  }

  return reply('❓ Perintah gbank tidak dikenali.')
}

/* ========================= DEPOSIT (berjangka) ========================= */

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

case 'trade': {
  initRpgUser(sender, pushname)
  if (!m.quoted) {
    reply(`reply pesan target trade.\nFormat: *trade itemnamanya* atau *trade 500* (koin)`)
    break
  }

  let targetId = m.quoted.sender
  initRpgUser(targetId)
  let user = rpgDb[sender]
  let target = rpgDb[targetId]

  if (!text) {
    reply(`Ketik item atau jumlah koin yang ingin kamu kirim.`)
    break
  }

  let jumlah = parseInt(text)
  if (!isNaN(jumlah)) {
    if (user.coin < jumlah) {
      reply(`Uangmu tidak cukup!`)
      break
    }
    user.coin -= jumlah
    target.coin += jumlah
    saveRpg()
    reply(`✅ Kamu mengirim ${jumlah} 💰 ke ${target.name}`)
  } else {
    let idx = user.inv.findIndex(i => i === text)
    if (idx === -1) {
      reply(`Kamu tidak punya item *${text}*`)
      break
    }
    user.inv.splice(idx, 1)
    target.inv.push(text)
    saveRpg()
    reply(`🎁 Kamu memberikan *${text}* ke ${target.name}`)
  }

  break
}

case 'market': {
  initRpgUser(sender, pushname)
  if (!text) {
    reply(`🛒 *MARKETPLACE*\nKetik: *market jual pedang 200* atau *market beli pedang*`)
    break
  }

  const [aksi, item, hargaStr] = text.split(' ')
  let harga = parseInt(hargaStr)
  let user = rpgDb[sender]

  if (aksi === 'jual') {
    if (!user.inv.includes(item)) return reply(`Kamu tidak punya *${item}* untuk dijual.`)
    if (isNaN(harga) || harga <= 0) return reply(`Harga tidak valid.`)

    global.market = global.market || []
    user.inv = user.inv.filter(i => i !== item)
    global.market.push({ seller: sender, item, harga })
    saveRpg()
    reply(`✅ Kamu menjual *${item}* seharga ${harga} 💰`)
    break
  }

  if (aksi === 'beli') {
    global.market = global.market || []
    let entry = global.market.find(e => e.item === item && e.seller !== sender)
    if (!entry) return reply(`Item *${item}* tidak tersedia di market.`)
    if (user.coin < entry.harga) return reply(`💸 Koinmu tidak cukup.`)

    let seller = rpgDb[entry.seller]
    user.coin -= entry.harga
    user.inv.push(entry.item)
    seller.coin += entry.harga

    global.market = global.market.filter(e => e !== entry)
    saveRpg()
    reply(`🛍️ Kamu membeli *${item}* dari market seharga ${entry.harga} 💰`)
    break
  }

  reply(`Perintah market tidak valid.`)
  break
}

case 'darkmode': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.mode = 'dark'
  saveRpg()
  reply(`🌑 Kamu memasuki *DARK MODE RPG*... efek negatif meningkat di malam hari.`)
  break
}

case 'dailybox': {
  initRpgUser(sender, pushname)
  let u = rpgDb[sender]
  let now = Date.now()
  if (u.lastBox && now - u.lastBox < 86400000) return reply(`📦 Kamu sudah ambil hari ini.`)

  u.lastBox = now
  let hadiah = ['ramuan', 'kunci', 'fragmen'][Math.floor(Math.random() * 3)]
  u.inv.push(hadiah)
  saveRpg()
  reply(`🎁 Kamu mendapat *${hadiah}* dari kotak harian!`)
  break
}

case 'exchange': {
  initRpgUser(sender, pushname)
  if (!text || !rpgDb[sender].inv.includes(text)) return reply(`Kamu tidak punya item *${text}*`)
  rpgDb[sender].inv = rpgDb[sender].inv.filter(i => i !== text)
  rpgDb[sender].coin += 200
  saveRpg()
  reply(`🪙 Kamu tukar *${text}* jadi 200 koin.`)
  break
}

case 'market': {
  reply(`🛒 *Market Fitur*\n- Gunakan: trade @user item\n- Lihat penawaran: marketlist`)
  break
}

case 'bounty': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Gunakan: bounty @user jumlah')
  let [mention, jumlah] = text.split(' ')
  if (!mention || isNaN(jumlah)) return reply('Format salah. Contoh: bounty @target 1000')
  rpgDb.bounty ||= {}
  rpgDb.bounty[mention] = parseInt(jumlah)
  saveRpg()
  reply(`💰 Kamu pasang buronan ${mention} sebesar ${jumlah} coin!`)
  break
}

case 'spy': {
  if (!m.quoted) return reply('reply target yang ingin diintai.')
  let target = m.quoted.sender
  initRpgUser(target)
  let lokasi = rpgDb[target].location || 'tidak diketahui'
  reply(`🕵️ Target berada di: *${lokasi}*`)
  break
}

case 'shop': {
  initRpgUser(sender, pushname)
  let teks = `🛒 *TOKO RPG UTAMA*

📦 *Kategori Tersedia:*
1. *Weapon* ⚔️
2. *Armor* 🛡️
3. *Potion* 🧪
4. *Material* 🧱
5. *Key Item* 🔑
6. *Mystic* ✨
7. *Pet & Mount* 🐾

Ketik: *shop [kategori]* contoh: shop weapon

📝 *Contoh barang (weapon)*:
• Pedang Kayu — 500 coin
• Belati Baja — 1000 coin
• Busur Elven — 1200 coin
(Stok berubah setiap hari!)
`
  return reply(teks)
}

case 'buy': {
  initRpgUser(sender, pushname)
  if (!text) return reply('Masukkan nama item yang ingin dibeli.')

  let item = text.toLowerCase()
  let harga = {
    scrollclass: 500,
    stonebless: 350,
    essencexp: 400,
    spiritcore: 1000,
    elixirlife: 750,
  }

  if (!harga[item]) return reply('Item tidak ditemukan di toko.')

  if (rpgDb[sender].coin < harga[item]) return reply('💰 Uang kamu tidak cukup.')

  rpgDb[sender].coin -= harga[item]

  switch (item) {
    case 'scrollclass':
      rpgDb[sender].class = null
      break
    case 'stonebless':
      rpgDb[sender].buff = 'atk+10%'
      break
    case 'essencexp':
      rpgDb[sender].exp += 500
      break
    case 'spiritcore':
      rpgDb[sender].spirit = 'phoenix'
      break
    case 'elixirlife':
      rpgDb[sender].death = false
      break
  }

  saveRpg()
  reply(`✅ Kamu membeli *${item}* seharga ${harga[item]} coin.`)
  break
}

case 'sell': {
  initRpgUser(sender, pushname)
  if (!text) {
    reply(`Ketik nama item yang ingin dijual. Contoh: *sell ramuan*`)
    break
  }

  let user = rpgDb[sender]
  let idx = user.inv.findIndex(i => i.toLowerCase() === text.toLowerCase())
  if (idx === -1) {
    reply(`Kamu tidak punya item *${text}* untuk dijual.`)
    break
  }

  let harga = 100 // bisa kamu buat lebih dinamis nanti
  user.inv.splice(idx, 1)
  user.coin += harga
  saveRpg()

  reply(`💸 Kamu menjual *${text}*\n+💰 ${harga} koin`)
  break
}

case 'daily': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let now = Date.now()
  let cooldown = 1000 * 60 * 60 * 24
  let remaining = cooldown - (now - user.dailyCooldown)

  if (remaining > 0) {
    reply(`🕒 Kamu sudah klaim hari ini!\nTunggu *${msToTime(remaining)}* lagi.`)
    break
  }

  let reward = { coin: 300, exp: 120 }
  user.coin += reward.coin
  user.exp += reward.exp
  user.dailyCooldown = now
  saveRpg()

  reply(`🎁 *Daily Reward*\n+💰 ${reward.coin} koin\n+⭐ ${reward.exp} exp`)
  break
}

case 'work': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let now = Date.now()
  let cooldown = 1000 * 60 * 30
  let remaining = cooldown - (now - user.workCooldown)

  if (remaining > 0) {
    reply(`🕒 Masih lelah...\nTunggu *${msToTime(remaining)}* lagi.`)
    break
  }

  let earned = Math.floor(Math.random() * 200 + 100)
  user.coin += earned
  user.workCooldown = now
  saveRpg()

  reply(`💼 Kamu bekerja dan mendapat\n+💰 ${earned} koin`)
  break
}

case 'pekerjaan':
case 'kerja': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply(`Contoh : ${AliceCmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break

case 'daily': {
  if (!m.isGroup) return reply("❌ Fitur ini hanya bisa digunakan di grup.")

  let userData = JSON.parse(fs.readFileSync('./AliceDatabase/database.json'))
  if (!userData.users) userData.users = {}
  if (!userData.users[sender]) {
    return reply(`❌ Kamu belum terdaftar.\nKetik *${prefix}register* untuk mulai.`)
  }

  const now = Date.now()
  const last = userData.users[sender].lastClaim || 0
  const cooldown = 86400000 // 24 jam

  const sisa = cooldown - (now - last)
  if (sisa > 0) {
    const jam = Math.floor(sisa / 3600000)
    const menit = Math.floor((sisa % 3600000) / 60000)
    const detik = Math.floor((sisa % 60000) / 1000)
    return reply(`⏳ Kamu sudah klaim hadiah hari ini.\n\nCoba lagi dalam: *${jam} jam ${menit} menit ${detik} detik*`)
  }

  // Hadiah harian
  const reward = {
    uang: 300,
    potion: 1,
    limit: 3
  }

  // Tambahkan hadiah
  userData.users[sender].uang = (userData.users[sender].uang || 0) + reward.uang
  userData.users[sender].potion = (userData.users[sender].potion || 0) + reward.potion
  userData.users[sender].limit = (userData.users[sender].limit || 0) + reward.limit
  userData.users[sender].lastClaim = now

  fs.writeFileSync('./AliceDatabase/database.json', JSON.stringify(userData, null, 2))
  global.db.data.users = userData.users

  return reply(`
🎁 *DAILY REWARD!*

💰 +Rp${reward.uang.toLocaleString()}
🧴 +${reward.potion} Potion
🎟️ +${reward.limit} Limit

📌 Klaim hadiah lagi besok ya! 🌞
`)
}
break
    }
  }
};

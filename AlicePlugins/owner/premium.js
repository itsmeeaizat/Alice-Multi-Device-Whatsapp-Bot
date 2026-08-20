// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['daily', 'buyprem', 'addprem', 'delprem', 'listprem', 'cekprem', 'addlimit', 'dellimit', 'resetlimit'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
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

case 'buyprem': {
  if (!args[0]) return reply(`Masukkan durasi premium!\nContoh: *${prefix}buyprem 7d*`);

  const durasi = args[0].toLowerCase();
  const waktuMap = {
    '1d': { ms: 86400000, harga: 1 },
    '3d': { ms: 86400000 * 3, harga: 7000 },
    '7d': { ms: 86400000 * 7, harga: 10000 },
    '1w': { ms: 86400000 * 7, harga: 10000 },
    '1m': { ms: 86400000 * 30, harga: 20000 },
    '1y': { ms: 86400000 * 365, harga: 100000 }
  };

  if (!waktuMap[durasi]) return reply('Durasi tidak valid!\nContoh: 1d, 3d, 7d, 1m, 1y');

  const fs = require('fs');
  const axios = require('axios');
  const transPath = './AliceDatabase/transaksi.json';
  let requestAmount = waktuMap[durasi].harga;
  let feeServer = Math.floor(Math.random() * 11);
  let nominal = requestAmount + feeServer;

  try {
    const qrisUrl = `https://www.itzky.xyz/api/tools/create/qris?nominal=${nominal}&baseQrString=${orkut.codeqr}`;
    const paymentInfo = `*PEMBAYARAN PREMIUM*\n\nMetode: QRIS\nBerlaku: ±10 menit\nDurasi: *${durasi}*\nBiaya: ${formatmoney(requestAmount)}\nFee: ${formatmoney(feeServer)}\nTotal: ${formatmoney(nominal)}\n\nSilakan ketik .status untuk melihat status pembayaran\njika ingin membatalkan, silahkan ketik .cancel.`;

    const qrisMsg = await Alice.sendMessage(
      m.chat,
      { image: { url: qrisUrl }, caption: paymentInfo },
      { quoted: m }
    );

    let trans = fs.existsSync(transPath) ? JSON.parse(fs.readFileSync(transPath)) : {};
    trans[m.sender] = {
      jenis: 'buyprem',
      harga: nominal,
      durasi,
      key: qrisMsg.key
    };
    fs.writeFileSync(transPath, JSON.stringify(trans, null, 2));

    let done = false;
    while (!done) {
      try {
        const res = await axios.post("https://www.itzky.xyz/api/orderkuota/qris/history", {
          auth_username: global.orkut.username,
          user_id: global.orkut.id,
          auth_token: global.orkut.token
        }, { headers: { "Content-Type": "application/json" } });

        if (res.data?.result?.qris_history?.results?.length > 0) {
          const latest = res.data.result.qris_history.results[0];
          let kredit = parseInt(latest.kredit.replace(/\./g, ""));
          if (latest.status === "IN" && kredit === nominal) {
            done = true;
            if (qrisMsg.key) await Alice.sendMessage(m.chat, { delete: qrisMsg.key });

            const premPath = './AliceDatabase/premium.json';
            let db = fs.existsSync(premPath) ? JSON.parse(fs.readFileSync(premPath)) : {};
            const now = Date.now(), selesai = now + waktuMap[durasi].ms;

            db[m.sender] = { expired: selesai, duration: durasi };
            fs.writeFileSync(premPath, JSON.stringify(db, null, 2));
            delete trans[m.sender];
            fs.writeFileSync(transPath, JSON.stringify(trans, null, 2));

            reply(`🎉 Premium aktif hingga *${new Date(selesai).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}*`);
          }
        }
      } catch (e) {
        console.error("Error cek pembayaran:", e);
      }

      if (!done) await new Promise(r => setTimeout(r, 10000));
    }
  } catch (err) {
    console.error('QRIS error:', err);
    reply('❌ Gagal membuat atau memproses QRIS.');
  }
}
break;

case 'addprem': {
  if (!isOwner) return XRO();
  if (!args[0] || !args[1]) {
    return reply(`📌 Contoh: .addprem 6281234567890 3d`);
  }

  let premium = loadPremium();
  const target = args[0].replace(/[^0-9]/g, '');
  const waktu = args[1];

  let expired = 0;
  if (waktu === '0') {
    expired = 0; // selamanya
  } else {
    expired = parseTime(waktu);
    if (!expired) {
      return reply(`⚠️ Format waktu tidak valid!\nContoh: 30m, 2h, 3d, 1w, 1mo, 1y`);
    }
  }

  let existing = premium.find(v => v.id === target);
  if (existing) {
    existing.expired = expired;
  } else {
    premium.push({ id: target, expired });
  }

  savePremium(premium);

  reply(`✅ @${target} sekarang menjadi *user premium*${expired !== 0 ? ` hingga ${new Date(expired * 1000).toLocaleString('id-ID')}` : ' selamanya'}.`, {
    mentions: [target + '@s.whatsapp.net']
  });

  await Alice.sendMessage(target + '@s.whatsapp.net', {
    text: `👑 Selamat! Kamu telah menjadi *user premium bot*.\n${expired !== 0 ? `Masa berlaku hingga: ${new Date(expired * 1000).toLocaleString('id-ID')}` : 'Kamu mendapatkan premium *selamanya*!'}`,
  });

  // ✅ setelah addprem, cek expired
  cekExpiredPremium();
}
break;

case 'delprem': {
  if (!isOwner) return XRO();
  if (!args[0]) return reply(`📌 Contoh: .delprem 6281234567890`);

  let premium = loadPremium();
  const target = args[0].replace(/[^0-9]/g, '');
  const index = premium.findIndex(v => v.id === target);

  if (index === -1) return reply(`❌ Nomor tidak ditemukan di daftar premium.`);

  premium.splice(index, 1);
  savePremium(premium);

  reply(`✅ @${target} telah dihapus dari daftar premium.`, {
    mentions: [target + '@s.whatsapp.net']
  });

  await Alice.sendMessage(target + '@s.whatsapp.net', {
    text: `⚠️ Premium kamu telah dihapus oleh admin bot.`,
  });

  // ✅ setelah delprem, cek expired juga
  cekExpiredPremium();
}
break;

case 'listprem': {
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  const premium = JSON.parse(fs.readFileSync(premPath));
  if (!premium.length) return reply('🚫 Belum ada user premium.');

  let teks = `👑 *Daftar User Premium*\n\n`;
  const now = Math.floor(Date.now() / 1000);

  for (let i = 0; i < premium.length; i++) {
    const { id, expired } = premium[i];
    const link = `wa.me/${id}`;
    const exp = expired === 0
      ? '♾️ Selamanya'
      : (expired < now
          ? '❌ Expired'
          : `⏳ ${new Date(expired * 1000).toLocaleString('id-ID')}`);
    
    teks += `${i + 1}. ${link}\n   Exp: ${exp}\n`;
  }

  teks += `\nTotal: ${premium.length} user`;

  reply(teks);
}
break;

case 'cekprem': {
  const fs = require('fs');
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  const premium = JSON.parse(fs.readFileSync(premPath));
  const user = m.sender.replace(/[^0-9]/g, '');
  const now = Math.floor(Date.now() / 1000);
  
  function formatSisaWaktu(seconds) {
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  return `${days} hari, ${hours} jam, ${minutes} menit`;
 }
 
  const data = premium.find(v => v.id === user);

  if (!data) {
    return reply(`❌ Kamu belum menjadi user premium.`);
  }

  if (data.expired === 0) {
    return reply(`👑 Kamu adalah *User Premium Selamanya* 🥳`);
  }

  if (data.expired < now) {
    return reply(`⚠️ Status premium kamu sudah *expired* sejak ${new Date(data.expired * 1000).toLocaleString('id-ID')}`);
  }

  const sisa = data.expired - now;
  const tanggal = new Date(data.expired * 1000).toLocaleString('id-ID');

  reply(`👑 Kamu adalah *User Premium*\n\n📅 Expired pada: ${tanggal}\n⏳ Sisa waktu: ${formatSisaWaktu(sisa)}`);
}
break;

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

case 'addlimit': {
if (!isOwner) return XRO()
    if (!text) return reply('Format salah!\n\nTambah limit: addlimit <tag orang> <jumlah limit>\nKurangi limit: .dellimit <tag orang> <jumlah limit>')
    
    // Extracting the mentioned user and the limit value from the command text
    let [who, limitValue] = text.split(' ')
    if (!who) return reply('Tag orang yang akan diubah limitnya!')
    if (isNaN(limitValue)) return reply('Jumlah limit harus angka!')

    // Converting limitValue to a number
    limitValue = parseInt(limitValue)

    let user = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let users = global.db.data.users

    // Checking if the user is in the database, if not, initialize their limit to 0
    if (!users[user]) users[user] = { limit: 0 }

    // Determining whether to add or remove limit based on the command
    if (command === 'addlimit') {
        // Adding the specified limit to the user's account
        users[user].limit += limitValue
        reply(m.chat, `Berhasil menambahkan ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
    } else if (command === 'remlimit') {
        if (limitValue > users[user].limit) {
            // Set the user's limit to 0 if the specified limit is greater than the user's current limit
            users[user].limit = 0
            reply(m.chat, `Berhasil mengurangi limit untuk @${user.split('@')[0]}. Limit kini menjadi 0!`, m)
        } else {
            // Removing the specified limit from the user's account
            users[user].limit -= limitValue
            reply(m.chat, `Berhasil mengurangi ${limitValue} limit untuk @${user.split('@')[0]}!`, m)
        }
    }
}
break

case 'dellimit': {
if (!isOwner) return XRO()
  if (!text) {
    return reply(m.chat, '• *Example :* .dellimit @user 10', m)
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
     return reply(m.chat, 'Tag pengguna yang ingin dikurangi limitnya. Contoh: .dellimit @user 10', m)
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    return reply(m.chat, 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .dellimit @user 10', m)
  }

  let users = global.db.data.users;
  if (!users[mentionedJid]) {
    users[mentionedJid] = {
      limit: 0,
      exp: 0,
      lastclaim: 0
    };
  }

  users[mentionedJid].limit -= pointsToSubtract;
  if (users[mentionedJid].limit < 0) {
    users[mentionedJid].limit = 0;
  }

  reply(m.chat, `Berhasil mengurangi ${pointsToSubtract} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};
break;

case 'resetlimit': {
if (!isOwner) return XRO()
let listt = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	lim = Math.max(1, lim)
	listt.map(([user, data], i) => (Number(data.limit = lim)))
reply(m.chat, `*Limit berhasil direset ${lim} / user*`, m)
}
            break
    }
  }
};

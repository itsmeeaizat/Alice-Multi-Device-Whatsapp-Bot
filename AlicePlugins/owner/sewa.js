// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['buysewa', 'addsewa', 'listsewa', 'delsewa', 'ceksewa'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'buysewa': {
  if (!args[0] || !args[1]) {
    return reply(`❌ Contoh penggunaan:\n${prefix}buysewa <linkgroup> <durasi>\nContoh:\n${prefix}buysewa https://chat.whatsapp.com/xxxx 1w`);
  }

  const link = args[0];
  const durasi = args[1].toLowerCase();
  const durasiMap = {
    '1d': { ms: 86400000, harga: 1 },
    '3d': { ms: 86400000 * 3, harga: 10000 },
    '1w': { ms: 86400000 * 7, harga: 15000 },
    '1m': { ms: 86400000 * 30, harga: 25000 },
    '1y': { ms: 86400000 * 365, harga: 100000 }
  };

  if (!durasiMap[durasi]) return reply(`❌ Durasi tidak valid.\nGunakan: 1d, 3d, 1w, 1m, 1y`);

  const fs = require('fs');
  const axios = require('axios');
  const transPath = './AliceDatabase/transaksi.json';
  let requestAmount = durasiMap[durasi].harga;
  let feeServer = Math.floor(Math.random() * 11);
  let nominal = requestAmount + feeServer;

  try {
    const qrisUrl = `https://www.itzky.xyz/api/tools/create/qris?nominal=${nominal}&baseQrString=${orkut.codeqr}`;
    const paymentInfo = `*PEMBAYARAN SEWA BOT*\n\nMetode: QRIS\nBerlaku: ±10 menit\nDurasi: *${durasi}*\nBiaya: ${formatmoney(requestAmount)}\nFee: ${formatmoney(feeServer)}\nTotal: ${formatmoney(nominal)}\n\nSilakan ketik .status untuk melihat status pembayaran\njika ingin membatalkan, silahkan ketik .cancel.`;

    const qrisMsg = await Alice.sendMessage(
      m.chat,
      { image: { url: qrisUrl }, caption: paymentInfo },
      { quoted: m }
    );

    let trans = fs.existsSync(transPath) ? JSON.parse(fs.readFileSync(transPath)) : {};
    trans[m.sender] = {
      jenis: 'buysewa',
      harga: nominal,
      durasi,
      link,
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

            const code = link.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/)?.[1];
            if (!code) return reply('❌ Link grup tidak valid.');

            await Alice.groupAcceptInvite(code).then(async (res) => {
              reply('✅ Bot berhasil gabung.');

              const sewaPath = './AliceDatabase/sewa.json';
              let db = fs.existsSync(sewaPath) ? JSON.parse(fs.readFileSync(sewaPath)) : {};
              const now = Date.now(), selesai = now + durasiMap[durasi].ms;

              db[res.id] = { link, durasi, mulai: now, berakhir: selesai, addedBy: m.sender };
              fs.writeFileSync(sewaPath, JSON.stringify(db, null, 2));
              delete trans[m.sender];
              fs.writeFileSync(transPath, JSON.stringify(trans, null, 2));
            }).catch(() => reply('❌ Gagal gabung. Link salah atau bot tidak diizinkan.'));
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

case 'addsewa': {
  if (!isOwner) return XRO();

  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  const premPath = './AliceDatabase/premium.json';
  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  if (!fs.existsSync(premPath)) fs.writeFileSync(premPath, '[]');

  let sewa = JSON.parse(fs.readFileSync(sewaPath));
  let premium = JSON.parse(fs.readFileSync(premPath));

  const [linkgc, nomor, durasi] = args;

  if (!linkgc || !nomor) {
    return reply(`📌 Contoh:\n${AliceCmd} < linkgc > < nomor penyewa > < waktu >\n📝 Durasi: 3d (hari), 1w (minggu), 1mo (bulan), 1y (tahun), 0 (permanent)`);
  }

  if (!linkgc.includes('https://chat.whatsapp.com/')) {
    return reply('❌ Link grup tidak valid!');
  }

  let mode = 'default';
  let baseLink = linkgc;
  let code = null;

  try {
    const url = new URL(linkgc);
    baseLink = `${url.origin}${url.pathname}`;
    mode = url.searchParams.get('mode') || 'default';
    code = url.pathname.replace(/^\//, '');
  } catch (e) {
    const parts = linkgc.split('https://chat.whatsapp.com/');
    if (parts[1]) code = parts[1].split('?')[0];
  }

  if (!code) {
    return reply('❌ Link grup tidak valid.');
  }

  let metadata;
  try {
    metadata = await Alice.groupGetInviteInfo(code);
  } catch (e) {
    return reply('❌ Gagal mendapatkan info grup. Mungkin link salah atau bot tidak punya izin.');
  }

  const groupId = metadata.id;
  const groupName = metadata.subject;
  const penyewa = (nomor + '').replace(/[^0-9]/g, '');

  function parseDurasi(t) {
    if (t === '0' || t === 'permanent') return 0;
    if (!t) return 0;
    const match = t.match(/^(\d+)(d|w|mo|y)$/);
    if (!match) return null;
    const val = parseInt(match[1]);
    const unit = match[2];
    const now = Math.floor(Date.now() / 1000);
    let sec = 0;
    switch (unit) {
      case 'd': sec = val * 86400; break;
      case 'w': sec = val * 604800; break;
      case 'mo': sec = val * 2592000; break;
      case 'y': sec = val * 31536000; break;
      default: return null;
    }
    return now + sec;
  }

  const expired = durasi ? parseDurasi(durasi) : 0;
  if (durasi && expired === null) {
    return reply(`❌ Format durasi tidak valid.\nGunakan: 3d, 1w, 1mo, 1y, atau 0`);
  }

  sewa[groupId] = {
    expired,
    name: groupName,
    addedBy: penyewa,
    mode,
    inviteCode: code,
    inviteLink: baseLink
  };
  fs.writeFileSync(sewaPath, JSON.stringify(sewa, null, 2));

  const existingPrem = premium.find(v => v.id === penyewa);
  if (!existingPrem) {
    premium.push({ id: penyewa, expired: 0 });
    fs.writeFileSync(premPath, JSON.stringify(premium, null, 2));
  }

  const masaSewaTxt = expired === 0
    ? 'Permanent'
    : new Date(expired * 1000).toLocaleString('id-ID');

  reply(
    `✅ Bot berhasil diproses untuk grup *${groupName}*\n` +
    `🔗 Link: ${baseLink}\n` +
    `📅 Masa sewa: ${masaSewaTxt}\n` +
    `👤 Penyewa: @${penyewa}\n` +
    `⚙️ Mode: ${mode}`,
    { mentions: [penyewa + '@s.whatsapp.net'] }
  );

  // notif langsung ke penyewa
  try {
    await Alice.sendMessage(penyewa + '@s.whatsapp.net', {
      text: `✅ Sewa bot berhasil ditambahkan!\n📌 Grup: *${groupName}*\n📅 Masa Sewa: ${masaSewaTxt}\n⚙️ Mode: ${mode}`
    });
  } catch (e) {
    console.log('[ADDSEWA] Gagal kirim notif ke penyewa:', e.message);
  }

  try {
    await Alice.groupAcceptInvite(code);
    await Alice.sendMessage(groupId, {
      text:
        `🤖 Bot ini telah disewa oleh @${penyewa}\n` +
        `📅 Masa sewa: ${masaSewaTxt}\n` +
        `⚙️ Mode: ${mode}`,
      mentions: [penyewa + '@s.whatsapp.net']
    });
  } catch (err) {
    console.log('[ADDSEWA] Tidak perlu join ulang / gagal join:', err.message);
  }
}
break;

case 'listsewa': {
  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';

  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  const sewa = JSON.parse(fs.readFileSync(sewaPath));
  const now = Math.floor(Date.now() / 1000);

  if (Object.keys(sewa).length === 0) return reply('📭 Tidak ada grup yang menyewa bot.');

  let teks = `📦 *Daftar Sewa Bot:*\n\n`;
  let index = 1;

  // simpan cache biar bisa dipakai delsewa
  global.listSewaCache = [];

  for (let id in sewa) {
    const data = sewa[id];
    const exp = data.expired === 0 
      ? '♾️ Permanent' 
      : (data.expired < now 
          ? '❌ Expired' 
          : new Date(data.expired * 1000).toLocaleString('id-ID'));

    teks += `*${index}.* 🏷️ ${data.name}\n`;
    teks += `📍 ID: ${id}\n`;
    teks += `⏳ Exp: ${exp}\n`;
    teks += `👤 By: wa.me/${data.addedBy}\n\n`;

    global.listSewaCache.push({ id, ...data });
    index++;
  }

  reply(teks);
}
break;

case 'delsewa': {
  if (!isOwner) return XRO();

  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  let sewa = JSON.parse(fs.readFileSync(sewaPath));

  if (!args[0]) return reply('📌 Contoh: .delsewa 1');

  const nomor = parseInt(args[0]) - 1;
  if (isNaN(nomor) || nomor < 0 || !global.listSewaCache || !global.listSewaCache[nomor]) {
    return reply('❌ Nomor tidak valid. Jalankan .listsewa dulu.');
  }

  const target = global.listSewaCache[nomor];
  const groupId = target.id;
  const groupName = target.name;
  const penyewa = target.addedBy;

  // hapus dari database
  delete sewa[groupId];
  fs.writeFileSync(sewaPath, JSON.stringify(sewa, null, 2));

  reply(`✅ Sewa bot untuk grup *${groupName}* telah dihentikan.`);

  // notif ke penyewa
  try {
    await Alice.sendMessage(penyewa + '@s.whatsapp.net', {
      text: `⚠️ Sewa bot untuk grup *${groupName}* telah dihentikan.\nTerima kasih sudah menggunakan layanan kami.`
    });
  } catch (e) {
    console.log('[DELSEWA] Gagal kirim notif ke penyewa:', e.message);
  }

  // notif ke grup & keluar
  try {
    await Alice.sendMessage(groupId, { text: '👋 Masa sewa bot telah dihentikan. Bot akan keluar dari grup.' });
    await Alice.groupLeave(groupId);
  } catch (err) {
    console.log('[DELSEWA] Tidak bisa keluar dari grup:', err);
  }
}
break;

case 'ceksewa': {
  const fs = require('fs');
  const sewaPath = './AliceDatabase/sewa.json';
  if (!fs.existsSync(sewaPath)) fs.writeFileSync(sewaPath, '{}');
  const sewa = JSON.parse(fs.readFileSync(sewaPath));

  if (!m.isGroup) return reply('❌ Command ini hanya bisa digunakan dalam grup.');

  const now = Math.floor(Date.now() / 1000);
  const data = sewa[m.chat];

  if (!data) return reply('❌ Grup ini tidak memiliki status sewa.');

  let status = '';
  if (data.expired === 0) {
    status = '♾️ Permanent';
  } else if (data.expired < now) {
    status = `❌ Expired pada ${new Date(data.expired * 1000).toLocaleString('id-ID')}`;
  } else {
    const expDate = new Date(data.expired * 1000).toLocaleString('id-ID');
    const sisa = data.expired - now;
    const sisaHari = Math.floor(sisa / 86400);
    const sisaJam = Math.floor((sisa % 86400) / 3600);
    const sisaMenit = Math.floor((sisa % 3600) / 60);
    status = `📅 Aktif sampai: ${expDate}\n⏳ Sisa: ${sisaHari} hari, ${sisaJam} jam, ${sisaMenit} menit`;
  }

  reply(`📦 *Status Sewa Grup Ini:*\n\n🏷️ Nama Grup: ${data.name}\n👤 Penyewa: wa.me/${data.addedBy}\n${status}`);
}
break;
    }
  }
};

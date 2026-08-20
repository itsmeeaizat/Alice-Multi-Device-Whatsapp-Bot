// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['jarak', 'rute', 'cekjarak', 'cekrute'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      fetch
    } = context;

if (isBan) return XRB()
await XReaction()
     if (!text.includes('|')) return reply(`Example: ${AliceCmd} jakarta|bandung`);
 
 let [from, to] = text.split('|').map(v => v.trim());
 let xyroorinzi = `https://api.vreden.my.id/api/tools/jarak?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
      try {
 let response = await fetch(xyroorinzi);
 let data = await response.json();
 if (data.status !== 200) return reply('Gagal mendapatkan data jarak! Pastikan kota yang dimasukkan benar.');
    let result = data.result;
    let msg = `📍 *Informasi Jarak* 📍
 
🚗 *Dari:* ${result.asal.alamat} 
📍 *Ke:* ${result.tujuan.alamat} 
📏 *Jarak:* ${result.detail.split('menempuh jarak ')[1].split(',')[0]} 
⏳ *Estimasi Waktu:* ${result.detail.split('estimasi waktu ')[1]} 
⛽ *Estimasi BBM:* ${result.estimasi_biaya_bbm.total_liter} liter (~${result.estimasi_biaya_bbm.total_biaya})

🗺️ *Peta:* ${result.peta_statis}

📍 *Rute Perjalanan:* 
${result.arah_penunjuk_jalan.map(step => `🚘 ${step.instruksi} (${step.jarak})`).join('\n')}`;
    reply(msg);
 } catch (e) {
 console.error(e);
 reply('Terjadi kesalahan saat mengambil data!');
    }
  }
};

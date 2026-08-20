// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
//═══════════════════════════════════════════════//
//           🚀 Alice Assistent - Bot WhatsApp Canggih           //
//═══════════════════════════════════════════════//
//
//   🤖 Powered By Aizat
//   © Aizat 2022 - 2026
//
//   📌 Source & Official Contact:
//   ➤ Telegram : t.me/Aizat
//   ➤ Gmail    : aizat@gmail.com
//   ➤ Github   : github.com/aizat
//
//   📢 Telegram Channels:
//   ➤ Utama : t.me/aliceinformations
//   ➤ Testi : t.me/alicetestimoni
//
//───────────────────────────────────────────────//
// 📖 PANDUAN MEMBACA FILE README.MD
//───────────────────────────────────────────────//
//
//   📂 File readme.md berisi panduan lengkap:
//   • Cara menjalankan script Alice Assistent
//   • Aturan & informasi penting
//   • File yang boleh/tidak boleh diubah
//   • Kontak & promo resmi dari Aizat
//
//   💡 Cara membacanya:
//   1. Buka panel / file manager kalian
//   2. Masuk ke direktori utama script
//   3. Klik file "readme.md"
//   4. Pilih "View" atau "Edit" untuk melihat isi panduan
//
//   🧠 Disarankan membaca readme.md terlebih dahulu
//   sebelum menjalankan atau mengedit script.
//
//───────────────────────────────────────────────//
//
//   ⚡ Fast • Secure • Automated • Stylish ⚡
//
//═══════════════════════════════════════════════//
//
// 📈━━━━━━━━━━━━━━━━━━━ [ © Aizat ] ━━━━━━━━━━━━━━━━━━━📉//
const axios = require('axios');

async function Telesticker(url) {
  return new Promise(async (resolve, reject) => {
    if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
      throw "Enter your Telegram sticker URL";
    }

    let packName = url.replace("https://t.me/addstickers/", "");
    let data = await axios(
      `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`,
      {
        method: "GET",
        headers: { "User-Agent": "GoogleBot" },
      }
    );

    const hasil = [];
    for (let i = 0; i < data.data.result.stickers.length; i++) {
      let fileId = data.data.result.stickers[i].thumb.file_id;
      let data2 = await axios(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
      );

      let result = {
        status: 200,
        author: "Xfarr05",
        url: `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${data2.data.result.file_path}`,
      };

      hasil.push(result);
    }

    resolve(hasil);
  });
}

module.exports = { Telesticker };
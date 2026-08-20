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
const cheerio = require('cheerio');

  async function WikiMedia(title) {
    return new Promise((resolve, reject) => {
      axios.get(`https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(title)}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
          const $ = cheerio.load(res.data);
          let hasil = [];

          $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
            hasil.push({
              title: $(b).find('img').attr('alt'),
              source: 'https://commons.wikimedia.org' + $(b).attr('href'),
              image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src'),
            });
          });

          resolve(hasil);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

module.exports = WikiMedia;
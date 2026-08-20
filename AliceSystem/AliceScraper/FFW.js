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

async function FFW() {
    try {
        const ress = await axios.get(`https://ff.garena.com/id/weapons/`);
        const $ = cheerio.load(ress.data);
        
        const daftarSenjata = [];
        
        $('.weapon-card').each((index, element) => {
            const namaSenjata = $(element).find('.title-wrap span').text().trim();
            const damage = $(element).find('.damage-level').text().trim();
            const deskripsi = $(element).find('.abstract').text().trim();
            const tags = [];
            
            $(element).find('.tags-wrap .weapon-tag').each((i, tagElement) => {
                tags.push($(tagElement).text().trim());
            });

            daftarSenjata.push({
                name: namaSenjata,
                damage: damage,
                description: deskripsi,
                tags: tags,
            });
        });

        return daftarSenjata;
    } catch (error) {
        console.error("Kesalahan saat mengambil informasi senjata:", error);
        return `Error: ${error.message}`;
    }
}

module.exports = FFW;
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

async function SongLyrics(query) {
    try {
        const response = await axios.get(`http://song-lyrics-api-o0m8tth8t-azharimm.vercel.app/search?q=${query}`);
        const result = response.data;

        if (result.status && result.data) {
            return result.data.map(song => ({
                songId: song.songId,
                artist: song.artist,
                songTitle: song.songTitle,
                songLyricsUrl: song.songLyrics
            }));
        } else {
            return 'No results found';
        }
    } catch (err) {
        throw new Error(`Error: ${err.message}`);
    }
}

module.exports = SongLyrics;

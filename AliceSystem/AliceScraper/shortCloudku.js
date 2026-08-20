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
const axios =  require('axios')
 
async function shortCloudku(originalUrl, customCode = null) {
  if (!originalUrl) throw new Error('link ga boleh kosong')
 
  const timestamp = Math.floor(Date.now() / 1000)
  const custom = customCode || Math.floor(100000 + Math.random() * 900000).toString() 
 
  const payload = {
    url: originalUrl,
    custom,
    timestamp
  }
 
  const headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://cloudku.click',
    'Referer': 'https://cloudku.click/',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
 
  try {
    const { data } = await axios.post('https://cloudku.click/api/link.php', payload, { headers })
 
    if (!data.success) throw new Error('Gagal membuat shortlink: ' + JSON.stringify(data))
 
    return {
      status: true,
      shortUrl: data.data.shortUrl,
      originalUrl: data.data.originalUrl,
      key: data.data.key,
      created: data.data.created
    }
  } catch (err) {
    return {
      status: false,
      error: err.message || err
    }
  }
}

module.exports = { shortCloudku };
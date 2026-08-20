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

async function pinterest(query) {
	const {
		data
	} = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/`, {
		params: {
			source_url: `/search/pins/?q=${query}`,
			data: JSON.stringify({
				options: {
					isPrefetch: false,
					query: query,
					scope: "pins",
					no_fetch_context_on_resource: false
				},
				context: {}
			})
		}
	});
	const container = [];
	const results = data.resource_response.data.results.filter(v => v.images?.orig);
	results.forEach(result => {
		container.push({
			upload_by: result.pinner.username,
			fullname: result.pinner.full_name,
			followers: result.pinner.follower_count,
			caption: result.grid_title,
			image: result.images.orig.url,
			source: "https://id.pinterest.com/pin/" + result.id
		});
	});
	return container;
};

module.exports = pinterest;
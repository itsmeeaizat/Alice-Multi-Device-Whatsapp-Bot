// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['pinterest', 'pin'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      text,
      q,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      AliceCmd,
      sender,
      axios
    } = context;

{
  if (isBan) return XRB();
  await XReaction();
  if (!text) return reply(`✨ Contoh: ${AliceCmd} michiejkt48`);

  try {
    // 🔗 Endpoint baru dari Anomali API
    let url = `https://anomali-api.vercel.app/search/pin?q=${encodeURIComponent(text)}`;
    console.log(`[ANOMALI DEBUG] Fetching from: ${url}`);

    // 🚀 Request API
    let response = await axios.get(url, { responseType: 'json' });

    // 🧠 Debug isi respon API
    console.log("[ANOMALI DEBUG] Raw Response Data:", JSON.stringify(response.data, null, 2));

    // Pastikan struktur sesuai
    if (!response.data || !response.data.result) {
      console.warn("[ANOMALI WARN] Struktur response tidak sesuai atau kosong!");
      return reply("⚠️ Gagal membaca hasil dari Anomali API. Struktur data tidak sesuai.");
    }

    let results = response.data.result;

    if (!results || results.length === 0)
      return reply("❌ Tidak ditemukan hasil.\nCoba kata kunci lain ✨");

    // 🔢 Ambil maksimal 5 hasil
    let selected = results.slice(0, 5);
    let cards = [];

    for (let img of selected) {
      // Cek struktur tiap objek
      if (!img.image || !img.source) {
        console.warn("[ANOMALI WARN] Data hasil tidak lengkap:", img);
        continue;
      }

      let prepared = await prepareWAMessageMedia({ image: { url: img.image } }, { upload: Alice.waUploadToServer });

      cards.push({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: true,
          ...prepared
        }),
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `📌 Pinterest Result\n✨ Keyword: *${text}*`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: `👤 ${img.fullname || 'Unknown'} • ${img.followers || 0} followers`
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{\"display_text\":\"🔎 Lihat Asli\",\"url\":\"${img.source}\",\"merchant_url\":\"${img.source}\"}`
            },
            {
              "name": "cta_url",
              "buttonParamsJson": `{\"display_text\":\"⬇️ Download\",\"url\":\"${img.image}\",\"merchant_url\":\"${img.image}\"}`
            }
          ]
        })
      });
    }

    // 🚧 Jika tidak ada data valid
    if (cards.length === 0) {
      console.error("[ANOMALI ERROR] Tidak ada kartu valid yang bisa dikirim!");
      return reply("⚠️ Tidak ada hasil gambar valid yang ditemukan dari API.");
    }

    // 🧩 Generate carousel message
    const msgii = await generateWAMessageFromContent(m.chat, {
      viewOnceMessageV2Extension: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `✨ Hasil pencarian Pinterest untuk *${text}*`
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
              text: "🌐 Pinterest Search Engine by Alice"
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards
            })
          })
        }
      }
    }, { userJid: m.sender, quoted: m });

    await Alice.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });

  } catch (err) {
    // 🧱 Error logging detail
    console.error("🛑 [ANOMALI ERROR] Gagal mengambil data Pinterest!");
    console.error("📜 Error Message:", err.message);
    if (err.response) {
      console.error("📦 Response Status:", err.response.status);
      console.error("📩 Response Body:", JSON.stringify(err.response.data, null, 2));
    } else if (err.request) {
      console.error("📡 Tidak ada respons dari server. Request:", err.request._currentUrl);
    } else {
      console.error("💥 Error Detail:", err);
    }

    reply("⚠️ Terjadi kesalahan saat mencari di Pinterest.\nCoba lagi nanti ya ✨");
  }
}
  }
};

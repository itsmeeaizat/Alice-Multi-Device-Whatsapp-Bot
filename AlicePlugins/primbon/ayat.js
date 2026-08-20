// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['ayat'],
  operate: async (context) => {
    const {
      m,
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      fetch
    } = context;

{
  if (isBan) return XRB()
await XReaction()
 if (!text) {
 return reply(`Masukkan format\nExample: ${AliceCmd} <surah> <ayat>`);
 }

 let [surah, ayat] = text.split(" ");
 if (!surah || !ayat || isNaN(surah) || isNaN(ayat)) {
 return reply("Format tidak valid. Pastikan Anda memasukkan angka untuk surah dan ayat.");
 }

async function alquran(surah, ayat) {
    try {
        const url = `https://www.velyn.biz.id/api/search/alquran?surah=${surah}&ayat=${ayat}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.text) {
            throw new Error("Data tidak ditemukan atau format tidak valid.");
        }

        return {
            text: data.text,
            translation: data.translation,
            tafsir: data.tafsir,
            surah_nama: data.surah_nama,
            surah: data.surah,
            ayat: data.ayat,
            revelation_place: data.revelation_place,
            surah_total_ayat: data.surah_total_ayat,
            tafsir_lengkap: data.tafsir_lengkap
        };
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return null;
    }
}

 try {
        let result = await alquran(surah, ayat);
        if (result) {
            let output = `📖 **Surah ${result.surah_nama} (${surah}), Ayat ${ayat}**\n\n${result.text}\n\n📜 **Terjemahan:** ${result.translation}\n\n📝 **Tafsir Singkat:** ${result.tafsir}\n\n📌 **Informasi Tambahan:**\n- **Nama Surah**: ${result.surah_nama}\n- **Nomor Surah**: ${result.surah}\n- **Nomor Ayat**: ${result.ayat}\n- **Revelasi**: ${result.revelation_place}\n- **Jumlah Ayat dalam Surah**: ${result.surah_total_ayat}\n- **Tafsir Lengkap**: ${result.tafsir_lengkap}`;
            reply(m.chat, output, m);
        } else {
           reply("Ayat tidak ditemukan.")
        }
    } catch (error) {
        reply(m.chat, `Terjadi kesalahan: ${error.message}`, m);
    }
};
  }
};

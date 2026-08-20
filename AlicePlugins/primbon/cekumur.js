// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['cekumur'],
  operate: async (context) => {
    const {
      m,
      q,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
            if (!q) return reply('⚠️ Masukkan tanggal lahir dengan format: *YYYY-MM-DD*');

            const isValidFormat = /^\d{4}-\d{2}-\d{2}$/.test(q);
            if (!isValidFormat) {
                return reply('❌ Format tanggal salah!\nGunakan format: *YYYY-MM-DD*\nContoh: *2002-05-27*');
            }

            const tanggalLahir = new Date(q);
            if (isNaN(tanggalLahir.getTime())) {
                return reply('❌ Tanggal tidak valid. Pastikan kamu memasukkan tanggal lahir yang benar.');
            }

            const sekarang = new Date();

            let tahun = sekarang.getFullYear() - tanggalLahir.getFullYear();
            let bulan = sekarang.getMonth() - tanggalLahir.getMonth();
            let hari = sekarang.getDate() - tanggalLahir.getDate();

            if (hari < 0) {
                bulan--;
                const bulanSebelumnya = new Date(sekarang.getFullYear(), sekarang.getMonth(), 0).getDate();
                hari += bulanSebelumnya;
            }

            if (bulan < 0) {
                tahun--;
                bulan += 12;
            }

            let selisihMs = sekarang - tanggalLahir;

            const msPerDetik = 1000;
            const msPerMenit = msPerDetik * 60;
            const msPerJam = msPerMenit * 60;
            const msPerHari = msPerJam * 24;
            const msPerTahun = msPerHari * 365.25;

            const totalTahun = Math.floor(selisihMs / msPerTahun);
            selisihMs %= msPerTahun;

            const totalHari = Math.floor(selisihMs / msPerHari);
            selisihMs %= msPerHari;

            const totalJam = Math.floor(selisihMs / msPerJam);
            selisihMs %= msPerJam;

            const totalMenit = Math.floor(selisihMs / msPerMenit);
            selisihMs %= msPerMenit;

            const totalDetik = Math.floor(selisihMs / msPerDetik);

            const isUlangTahun = sekarang.getDate() === tanggalLahir.getDate() &&
                sekarang.getMonth() === tanggalLahir.getMonth();

            const ucapanUlangTahun = isUlangTahun ?
                '\n🎉 *Selamat ulang tahun!* Semoga panjang umur, sehat selalu, dan tercapai segala cita-cita! 🎂' :
                '';

            await reply(
                `📅 Umur kamu saat ini:\n` +
                `*${tahun} tahun, ${bulan} bulan, ${hari} hari*\n\n` +
                `⏳ Total waktu hidup:\n` +
                `*${totalTahun} tahun, ${totalHari} hari, ${totalJam} jam, ${totalMenit} menit, ${totalDetik} detik*` +
                `${ucapanUlangTahun}`, {
                    quoted: m
                }
            );
        }
  }
};

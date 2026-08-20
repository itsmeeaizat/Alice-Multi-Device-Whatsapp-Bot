// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['about', 'tentang', 'info', 'infobot'],
  operate: async (context) => {
    const {
      Alice,
      m,
      reply,
      XReaction,
      isBan,
      Xban,
      ownername,
      botname,
      version,
      pushname,
      alice,
      totalfitur,
      runtime,
      fs
    } = context;

    if (isBan) return Xban();
    await XReaction();

    const os = require('os');
    const moment = require('moment-timezone');

    const uptime = runtime ? runtime(process.uptime()) : 'N/A';
    const ramUsed = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const ramTotal = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2);
    const platform = os.platform();
    const nodeVersion = process.version;
    const cpus = os.cpus().length;
    const tanggal = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY');
    const waktu = moment.tz('Asia/Jakarta').format('HH:mm:ss');

    const about = `┌── •「 *About ${botname}* 」
│
├── • Bot Info
│  ◦ Name        : ${botname}
│  ◦ Version     : ${version}
│  ◦ Owner       : ${ownername}
│  ◦ Type        : Plugin Based (cjs)
│  ◦ Total Features: ${totalfitur()}
│
├── • System Info
│  ◦ Platform    : ${platform}
│  ◦ Node.js    : ${nodeVersion}
│  ◦ CPU Cores  : ${cpus}
│  ◦ RAM Used    : ${ramUsed} / ${ramTotal} MB
│  ◦ Uptime      : ${uptime}
│
├── • Time
│  ◦ Date        : ${tanggal}
│  ◦ Time        : ${waktu} WIB
│  ◦ Timezone    : Asia/Jakarta (UTC+7)
│
├── • Library
│  ◦ Baileys     : ${global.baileys || 'whiskeysockets/baileys'}
│  ◦ Framework   : Node.js + Express
│  ◦ Storage     : JSON + SQLite
│
├── • Credits
│  ◦ Author      : ${ownername}
│  ◦ Made in     : Indonesia
│  ◦ Year        : 2022 - 2026
│
├── • Links
│  ◦ Channel     : ${global.channel || '-'}
│  ◦ Testi       : ${global.chtesti || '-'}
│  ◦ Group       : ${global.groupbot || '-'}
│  ◦ Telegram    : ${global.tgroup || '-'}
│
├── • Commands
│  ◦ ${alice}menu        Tampilkan menu utama
│  ◦ ${alice}allmenu     Semua fitur lengkap
│  ◦ ${alice}allcategory Fitur per kategori
│
╰─────────────────────>
> ${botname} | Powered by ${ownername}`;

    try {
      const imagePath = './AliceMedia/image/Alice.jpg';
      if (fs.existsSync(imagePath)) {
        await Alice.sendMessage(m.chat, {
          image: fs.readFileSync(imagePath),
          caption: about
        }, { quoted: m });
      } else {
        await reply(about);
      }
    } catch (e) {
      console.log('Error about:', e);
      await reply(about);
    }
  }
};

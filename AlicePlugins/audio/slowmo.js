// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
const fs = require('fs');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

module.exports = {
  command: ['slowmo', 'slow'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch, quotedMime, mime } = context;

    if (!quoted) return reply('Balas/quote pesan audio yang ingin diubah!');
    const qMime = quotedMime || (quoted && quoted.mimetype) || (quoted && quoted.mediaType) || mime || '';
    if (!/audio/.test(qMime)) return reply('Pesan yang dibalas harus berupa audio!');

    const inputPath = `input_${Date.now()}.mp3`;
    const outputPath = `output_${Date.now()}.mp3`;

    try {
      const qbuf = await quoted.download();
      fs.writeFileSync(inputPath, qbuf);
      await execAsync(`ffmpeg -i ${inputPath} -filter:a "atempo=0.5" ${outputPath}`);
      const buf = fs.readFileSync(outputPath);
      await Alice.sendMessage(m.chat, { audio: buf, mimetype: 'audio/mpeg' }, { quoted: m });
    } catch (err) {
      console.error(err);
      await reply('Gagal memproses audio slowmo.');
    } finally {
      if (fs.existsSync(inputPath)) fs.unlinkSync(inputPath);
      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    }
  }
};

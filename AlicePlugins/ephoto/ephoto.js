// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['phlogo', 'glitchtext', 'writetext', 'advancedglow', 'typographytext', 'pixelglitch', 'neonglitch', 'flagtext', 'flag3dtext', 'deletingtext', 'glowingtext', 'underwatertext', 'logomaker', 'cartoonstyle', 'papercutstyle', 'watercolortext', 'blackpinklogo', 'gradienttext', 'summerbeach', 'luxurygold', 'multicoloyellowneon', 'sandsummer', 'galaxywallpaper', '1917style', 'makingneon', 'royaltext', 'galaxystyle', 'lighteffects'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'phlogo': {
if (isBan) return XRB()
await XReaction()
  if (!text || !text.includes('|')) {
    return reply(`Masukkan dua teks dipisah dengan "|"\nContoh: *${AliceCmd} alice|Rynzz*`)
  }

  let [text1, text2] = text.split('|').map(t => t.trim())
  if (!text1 || !text2) return reply('Kedua teks harus diisi!')

  try {
    const apiUrl = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status) return reply('Gagal mengambil gambar dari API.')

    await Alice.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Berhasil membuat logo Pornhub*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`,
      contextInfo: {
        externalAdreply: {
          title: "Pornhub Logo Generator",
          body: packname,
          thumbnailUrl: thumb,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: json.result
        }
      }
    }, { quoted: m })

  } catch (e) {
    reply('Terjadi kesalahan saat memproses permintaan.')
    console.error(e)
  }
}
break

case 'glitchtext':

break;

case 'writetext':

break;

case 'advancedglow':

break;

case 'typographytext':

break;

case 'pixelglitch':

break;

case 'neonglitch':

break;

case 'flagtext':

break;

case 'flag3dtext':

break;

case 'deletingtext':

break;

case 'glowingtext':

break;

case 'underwatertext':

break;

case 'logomaker':

break;

case 'cartoonstyle':

break;

case 'papercutstyle':

break;

case 'watercolortext':

break;

case 'blackpinklogo':

break;

case 'gradienttext':

break;

case 'summerbeach':

break;

case 'luxurygold':

break;

case 'multicoloyellowneon':

break;

case 'sandsummer':

break;

case 'galaxywallpaper':

break;

case '1917style':

break;

case 'makingneon':

break;

case 'royaltext':

break;

case 'galaxystyle':

break;

case 'lighteffects':
if (isBan) return XRB()
await XReaction()      
        {
          if (!q) {
            return reply(`Contoh : ${AliceCmd} Alice Assistent`);
          }
          let link;
          if (/glitchtext/.test(command)) {
            link = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
          }
          if (/writetext/.test(command)) {
            link = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
          }
          if (/advancedglow/.test(command)) {
            link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
          }
          if (/typographytext/.test(command)) {
            link = "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
          }
          if (/pixelglitch/.test(command)) {
            link = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
          }
          if (/neonglitch/.test(command)) {
            link = "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
          }
          if (/flagtext/.test(command)) {
            link = "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
          }
          if (/flag3dtext/.test(command)) {
            link = "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
          }
          if (/deletingtext/.test(command)) {
            link = "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
          }
          if (/blackpinkstyle/.test(command)) {
            link = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
          }
          if (/glowingtext/.test(command)) {
            link = "https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
          }
          if (/underwatertext/.test(command)) {
            link = "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
          }
          if (/logomaker/.test(command)) {
            link = "https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
          }
          if (/cartoonstyle/.test(command)) {
            link = "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
          }
          if (/papercutstyle/.test(command)) {
            link = "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
          }
          if (/watercolortext/.test(command)) {
            link = "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
          }
          if (/effectclouds/.test(command)) {
            link = "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
          }
          if (/blackpinklogo/.test(command)) {
            link = "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
          }
          if (/gradienttext/.test(command)) {
            link = "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
          }
          if (/summerbeach/.test(command)) {
            link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
          }
          if (/luxurygold/.test(command)) {
            link = "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
          }
          if (/multicoloyellowneon/.test(command)) {
            link = "https://en.ephoto360.com/create-multicoloyellow-neon-light-signatures-591.html";
          }
          if (/sandsummer/.test(command)) {
            link = "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
          }
          if (/galaxywallpaper/.test(command)) {
            link = "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
          }
          if (/1917style/.test(command)) {
            link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
          }
          if (/makingneon/.test(command)) {
            link = "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
          }
          if (/royaltext/.test(command)) {
            link = "https://en.ephoto360.com/royal-text-effect-online-free-471.html";
          }
          if (/freecreate/.test(command)) {
            link = "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
          }
          if (/galaxystyle/.test(command)) {
            link = "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
          }
          if (/lighteffects/.test(command)) {
            link = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
          }
          let haldwhd = await ephoto(link, q);
          Alice.sendMessage(m.chat, {
            image: {
              url: haldwhd
            },
            caption: `${packname}`
          }, {
            quoted: m
          });
        }
        break;


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Ephoto Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Random Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
break;
    }
  }
};

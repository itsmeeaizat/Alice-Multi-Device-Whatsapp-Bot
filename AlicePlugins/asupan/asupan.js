// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['chinese', 'hijab', 'japanese', 'korean', 'malay', 'randomgirl', 'randomboy', 'thai', 'vietnamese', 'cecankorea', 'aesthetic', 'blackpink2', 'bike', 'boneka', 'cosplay', 'cat', 'doggo', 'justina', 'kayes', 'kpop', 'notnot', 'car', 'couplepic', 'couplepicture', 'profilepic', 'profilepicture', 'pubg', 'rose', 'ryujin', 'ulzzangboy', 'ulzzanggirl', 'wallml', 'wallpaperml', 'mobilelegend', 'wallpaperphone', 'wallphone'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'chinese':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiii.url } }, { quoted: m })
break

case 'hijab':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiii.url } }, { quoted: m })
break

case 'japanese':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiii.url } }, { quoted: m })
break

case 'korean':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'malay':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'randomgirl':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'randomboy':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'thai':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'vietnamese':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Asupan Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Ephoto Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
break;

case 'cecankorea': {
  try {
    const res = await fetch('https://api.siputzx.my.id/api/r/cecan/korea');
    if (!res.ok) throw new Error('Gagal mengambil gambar');

    const buffer = await res.buffer();

    await Alice.sendMessage(
      m.chat,
      {
        image: buffer,
        caption: '📸 Sukses :v'
      },
      { quoted: m }
    );
  } catch (e) {
    console.error('[CECAN_KOREA ERROR]', e);
    reply('❌ Terjadi kesalahan saat mengambil gambar.');
  }
};
break

case 'aesthetic':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/aesthetic.json'))
var iiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'blackpink2':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/blackpink.json'))
var iiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'bike':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/bike.json'))
var iiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'boneka':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/boneka.json'))
var iiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'cosplay':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/cosplay.json'))
var iiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'cat':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/cat.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiii = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiii.url } }, { quoted: m })
break

case 'doggo':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/doggo.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiil = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiil.url } }, { quoted: m })
break

case 'justina':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/justina.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiill = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiill.url } }, { quoted: m })
break

case 'kayes':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/kayes.json'))
var iiiiiiiiiiiiiiiiiiiiiiiiiilll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: iiiiiiiiiiiiiiiiiiiiiiiiiilll.url } }, { quoted: m })
break

case 'kpop':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/kpop.json'))
var ll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: ll.url } }, { quoted: m })
break

case 'notnot':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/notnot.json'))
var lll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lll.url } }, { quoted: m })
break

case 'car':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/car.json'))
var llll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llll.url } }, { quoted: m })
break

case 'couplepic':
case 'couplepicture':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ppcouple.json'))
var lllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllll.url } }, { quoted: m })
break

case 'profilepic':
case 'profilepicture':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/profile.json'))
var llllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllll.url } }, { quoted: m })
break

case 'pubg':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/pubg.json'))
var lllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllll.url } }, { quoted: m })
break

case 'rose':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/rose.json'))
var llllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllll.url } }, { quoted: m })
break

case 'ryujin':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ryujin.json'))
var lllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllll.url } }, { quoted: m })
break

case 'ulzzangboy':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ulzzangboy.json'))
var llllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllllll.url } }, { quoted: m })
break

case 'ulzzanggirl':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/ulzzanggirl.json'))
var lllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllllll.url } }, { quoted: m })
break

case 'wallml':
case 'wallpaperml':
case 'mobilelegend':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/wallml.json'))
var llllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: llllllllllll.url } }, { quoted: m })
break

case 'wallpaperphone':
case 'wallphone':
if (isBan) return XRB()
await XReaction()
var notnot = JSON.parse(fs.readFileSync('./AliceSystem/AliceResource/randompics/wallhp.json'))
var lllllllllllll = pickRandom(notnot)
Alice.sendMessage(m.chat, { caption: 'donee', image: { url: lllllllllllll.url } }, { quoted: m })
break
    }
  }
};

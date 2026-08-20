// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['animeawoo', 'animemegumin', 'animeshinobu', 'animehandhold', 'animehighfive', 'animecringe', 'animedance', 'animehappy', 'animeglomp', 'animesmug', 'animeblush', 'animewave', 'animesmile', 'animepoke', 'animewink', 'animebonk', 'animebully', 'animeyeet', 'animebite', 'animelick', 'animekill', 'animecry', 'animeneko', 'animewlp', 'animekiss', 'animehug', 'animepat', 'animeslap', 'animecuddle', 'animewaifu', 'animenom', 'animefoxgirl', 'animetickle', 'animegecg'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'animeawoo':

break;

case 'animemegumin':

break;

case 'animeshinobu':

break;

case 'animehandhold':

break;

case 'animehighfive':

break;

case 'animecringe':

break;

case 'animedance':

break;

case 'animehappy':

break;

case 'animeglomp':

break;

case 'animesmug':

break;

case 'animeblush':

break;

case 'animewave':

break;

case 'animesmile':

break;

case 'animepoke':

break;

case 'animewink':

break;

case 'animebonk':

break;

case 'animebully':

break;

case 'animeyeet':

break;

case 'animebite':

break;

case 'animelick':

break;

case 'animekill':

break;

case 'animecry':

break;

case 'animeneko': {
  if (isBan) return XRB()
  await XReaction()
  
  const action = command.replace('anime', '').trim()
  const wibujir = await axios.get(`https://waifu.pics/api/sfw/${action}`)
  
  await Alice.sendMessage(m.chat, {
    image: { url: wibujir.data.url },
    caption: `${packname}`,
    quoted: m
  }).catch(() => 'Error!')
}
break

// =============================
// 💮 ANIME (nekos.life API)
// =============================

case 'animewlp':

break;

case 'animekiss':

break;

case 'animehug':

break;

case 'animepat':

break;

case 'animeslap':

break;

case 'animecuddle':

break;

case 'animewaifu':

break;

case 'animenom':

break;

case 'animefoxgirl':

break;

case 'animetickle':

break;

case 'animegecg': {
  if (isBan) return XRB()
  await XReaction()
  
  let action = command.replace('anime', '').trim()
  if (action === 'wlp') action = 'wallpaper' // khusus untuk wallpaper

  const wibujir = await axios.get(`https://nekos.life/api/v2/img/${action}`)
  
  await Alice.sendMessage(m.chat, {
    image: { url: wibujir.data.url },
    caption: `${packname}`,
    quoted: m
  }).catch(() => 'Error!')
}
break
    }
  }
};

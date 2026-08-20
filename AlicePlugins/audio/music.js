// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['music1', 'music2', 'music3', 'music4', 'music5', 'music6', 'music7', 'music8', 'music9', 'music10', 'music11', 'music12', 'music13', 'music14', 'music15', 'music16', 'music17', 'music18', 'music19', 'music20', 'music21', 'music22', 'music23', 'music24', 'music25', 'music26', 'music27', 'music28', 'music29', 'music30', 'music31', 'music32', 'music33', 'music34', 'music35', 'music36', 'music37', 'music38', 'music39', 'music40', 'music41', 'music42', 'music43', 'music44', 'music45', 'music46', 'music47', 'music48', 'music49', 'music50', 'music51', 'music52', 'music53', 'music54', 'music55', 'music56', 'music57', 'music58', 'music59', 'music60', 'music61', 'music62', 'music63', 'music64', 'music65'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'music1':

break;

case 'music2':

break;

case 'music3':

break;

case 'music4':

break;

case 'music5':

break;

case 'music6':

break;

case 'music7':

break;

case 'music8':

break;

case 'music9':

break;

case 'music10':

break;

case 'music11':

break;

case 'music12':

break;

case 'music13':

break;

case 'music14':

break;

case 'music15':

break;

case 'music16':

break;

case 'music17':

break;

case 'music18':

break;

case 'music19':

break;

case 'music20':

break;

case 'music21':

break;

case 'music22':

break;

case 'music23':

break;

case 'music24':

break;

case 'music25':

break;

case 'music26':

break;

case 'music27':

break;

case 'music28':

break;

case 'music29':

break;

case 'music30':

break;

case 'music31':

break;

case 'music32':

break;

case 'music33':

break;

case 'music34':

break;

case 'music35':

break;

case 'music36':

break;

case 'music37':

break;

case 'music38':

break;

case 'music39':

break;

case 'music40':

break;

case 'music41':

break;

case 'music42':

break;

case 'music43':

break;

case 'music44':

break;

case 'music45':

break;

case 'music46':

break;

case 'music47':

break;

case 'music48':

break;

case 'music49':

break;

case 'music50':

break;

case 'music51':

break;

case 'music52':

break;

case 'music53':

break;

case 'music54':

break;

case 'music55':

break;

case 'music56':

break;

case 'music57':

break;

case 'music58':

break;

case 'music59':

break;

case 'music60':

break;

case 'music61':

break;

case 'music62':

break;

case 'music63':

break;

case 'music64':

break;

case 'music65': {
  if (isBan) return XRB()
  await XReaction()

  // Ambil file musik dari repo GitHub
  const alice = await (await fetch(`https://github.com/Rez4-3yz/Music-rd/raw/master/music/${command}.mp3`)).buffer()

  // Kirim audio sebagai voice note
  await Alice.sendMessage(m.chat, {
    audio: alice,
    mimetype: 'audio/mp4',
    ptt: false,
    quoted: m
  }).catch(() => {
    return ('Error!')
  })
}
break
    }
  }
};

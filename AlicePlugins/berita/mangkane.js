// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['mangkane1', 'mangkane2', 'mangkane3', 'mangkane4', 'mangkane5', 'mangkane6', 'mangkane7', 'mangkane8', 'mangkane9', 'mangkane10', 'mangkane11', 'mangkane12', 'mangkane13', 'mangkane14', 'mangkane15', 'mangkane16', 'mangkane17', 'mangkane18', 'mangkane19', 'mangkane20', 'mangkane21', 'mangkane22', 'mangkane23', 'mangkane24', 'mangkane25', 'mangkane26', 'mangkane27', 'mangkane28', 'mangkane29', 'mangkane30', 'mangkane31', 'mangkane32', 'mangkane33', 'mangkane34', 'mangkane35', 'mangkane36', 'mangkane37', 'mangkane38', 'mangkane39', 'mangkane40', 'mangkane41', 'mangkane42', 'mangkane43', 'mangkane44', 'mangkane45', 'mangkane46', 'mangkane47', 'mangkane48', 'mangkane49', 'mangkane50', 'mangkane51', 'mangkane52', 'mangkane53', 'mangkane54'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      text,
      command,
      quoted,
      fetch
    } = context;

viot = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
      thumb = 'https://telegra.ph/file/48b67f699cfa231e4d5c2.jpg'
      let sound
      if (/sound/.test(command)) sound = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`
      if (/mangkane/.test(command) && command.replace('mangkane', '') < 25) sound = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`
      if (/mangkane/.test(command) && command.replace('mangkane', '') > 24) sound = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/mangkanenya/${command}.mp3`
      if (/acumalaka|reza-kecap|farhan-kebab|omaga|omaga|kamu-nanya|anjay|siuu/.test(command)) sound = `https://github.com/FahriAdison/Base-Sound/raw/main/audio/${command}.mp3`
      if (text.toLowerCase() === 'thumb') {
        await Alice.sendMessage(m.chat, {
          audio: {
            url: sound
          },
          mimetype: 'audio/mpeg',
          ptt: false,
          contextInfo: {
            externalAdReply: {
              mediaUrl: groupbot,
              mediaType: 2,
              title: '  ⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻  ',
              body: '  ━━━━⬤──────────  ',
              description: 'Now Playing...',
              mediaType: 2,
              sourceUrl: groupbot,
              thumbnail: await (await fetch(viot)).buffer(),
              renderLargerThumbnail: true
            }
          }
        }, {
          quoted: m
        })
      } else await Alice.sendMessage(m.chat, {
        audio: {
          url: sound
        },
        mimetype: 'audio/mpeg',
        ptt: false
      }, {
        quoted: m
      })
  }
};

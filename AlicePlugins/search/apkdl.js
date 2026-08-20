// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['apkdl', 'apkdownload'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      text,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      fetch
    } = context;

{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('link dari apksearch');
    
    try {
        let response = await fetch(`https://api-alice.vercel.app/api/apk?action=download&url=` + text);
        let apk = await response.json();

        if (apk.status === 200 && apk.data.status === 200) {
            let app = apk.data.data;
            Alice.sendMessage(m.chat, {
                document: {
                    url: app.url
                },
                fileName: app.package + '.apk',
                mimetype: 'application/xapk',
                contextInfo: {
                    externalAdreply: {
                        title: app.title,
                        body: `${botname}`,
                        thumbnailUrl: app.img || '',
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: false,
                    },
                },
            }, { quoted: m });
        } else {
            reply('ada masalah');
        }
    } catch (e) {
        reply('ada masalah');
    }
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['apkdetail'],
  operate: async (context) => {
    const {
      Alice,
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      fetch
    } = context;

{
if (isBan) return XRB()
await XReaction()
    if (!text) return reply('apk id or name');

    try {
        let response = await fetch(`https://api-Alice.vercel.app/api/apk?action=detail&url=` + text);
        let apkDetail = await response.json();

        if (apkDetail.status === 200) {
            let app = apkDetail.data;
            let message = `*Title:* ${app.title}\n`;
            message += `*Version:* ${app.version}\n`;
            message += `*Genre:* ${app.genre}\n`;
            message += `*Rating:* ${app.rating} (${app.votes} votes)\n`;
            message += `*Developer:* ${app.developer}\n`;
            message += `*Requirements:* ${app.requirements}\n`;
            message += `*Downloads:* ${app.downloads}\n`;
            message += `*Download Link:* ${app.download}\n`;
            message += `*Play Store:* ${app.playstore}\n`;
            message += `*Description:* ${app.description}\n\n`;
            message += `*What's New:* ${app.whatsnew}\n`;
            message += `*Video:* ${app.video}\n\n`;
            message += `*Related Apps:*\n`;

            app.related.forEach(relatedApp => {
                message += `- [${relatedApp.title}](${relatedApp.link}) by ${relatedApp.developer} (Version: ${relatedApp.version}, Rating: ${relatedApp.rating})\n`;
            });

            reply(message);
        } else {
            reply('ada masalah');
        }
    } catch (e) {
        reply('ada masalah');
    }
}
  }
};

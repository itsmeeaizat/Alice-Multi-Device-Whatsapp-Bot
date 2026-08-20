// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['apksearch'],
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
    if (!text) return reply('apk name?');
    
    try {
        let response = await fetch(`https://api-Alice.vercel.app/api/apk?action=search&query=` + text);
        let apkData = await response.json();

        if (apkData.status === 200) {
            let results = apkData.data;
            let message = 'Here are the results:\n\n';

            results.forEach(app => {
                message += `*Title:* ${app.title}\n`;
                message += `*Developer:* ${app.developer || 'N/A'}\n`;
                message += `*Version:* ${app.version || 'N/A'}\n`;
                message += `*Rating:* ${app.rating || 'N/A'}\n`;
                message += `*Link:* ${app.link}\n`;
                message += `![Image](${app.image})\n\n`;
            });

            reply(message);
        } else {
            reply('errrorr');
        }
    } catch (e) {
        reply('errrorrr');
    }
}
  }
};

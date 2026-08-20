// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['tr', 'translate'],
  operate: async (context) => {
    const {
      m,
      args,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      Aizat
    } = context;

{
if (isBan) return XRB()
await XReaction()
    let translate = require('translate-google-api');
    let defaultLang = 'en';
    let tld = 'cn';
    let toks = `
Contoh:
${AliceCmd} <lang> [text]
${AliceCmd} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim();

    let lang = args[0];
    let text = args.slice(1).join(' ');

    if ((args[0] || '').length !== 2) {
        lang = defaultLang;
        text = args.join(' ');
    }

    if (!text && m.quoted && m.quoted.text) {
        text = m.quoted.text;
    }

    let result;
    try {
        result = await translate(`${text}`, { to: lang });
    } catch (e) {
        result = await translate(`${text}`, { to: defaultLang });
        reply(`Contoh:
${AliceCmd} <lang> [text]
${AliceCmd} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`);
    } finally {
        reply(result[0]);
    }
}
  }
};

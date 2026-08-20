// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['merdekanews'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
const fetch = require('node-fetch');
const cheerio = require('cheerio');
async function merdekaavs() {
  try {
    const res = await fetch('https://www.merdeka.com/rss');
    const $ = cheerio.load(await res.text(), { xmlMode: true });
    const channel = {
      title: $('channel > title').text(),
      description: $('channel > description').text(),
      link: $('channel > link').text(),
      image: $('channel > image > url').text(),
    };
    const items = $('item').map((_, el) => ({
      title: 'Title:'+ $(el).find('title').text(),
      link: 'Link:'+ $(el).find('link').text(),
      description: 'Deskripsi:'+ $(el).find('description').text(),
      pubDate: 'Post'+ $(el).find('pubDate').text(),
      image: $(el).find('enclosure').attr('url') || null
    })).get();
    return { channel, total: items.length, data: items };
  } catch {
    return { message: 'Something went wrong' };
  }
}
let lily = await merdekaavs()
      let results = lily.data 
        if (results.length > 0) {
        let message = `Hasil dari pencarian merdeka.com :\n\n`;
        results.forEach((result, index) => {
        message += `${result.title}${result.description}${result.link}\n\n`;
        });
    reply(message)
 } else {
reply('Tidak Ada Hasil.');
}
}
  }
};

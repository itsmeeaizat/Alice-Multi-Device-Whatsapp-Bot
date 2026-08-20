// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['kontan'],
  operate: async (context) => {
    const {
      m,
      text,
      q,
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
if (!q) return reply(`_cari berita apa_`)
const axios = require('axios');
const cheerio = require('cheerio');
async function avzzzzz(text, m) {
    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
        try {
            const { data } = await axios.get(`https://www.kontan.co.id/search?search=${encodeURIComponent(text)}`, {
                timeout: 2000,
            });

            const $ = cheerio.load(data);
            const results = [];

            $('.list-berita ul li').each((index, element) => {
                const titleElement = $(element).find('h1 a');
                const title = titleElement.text().trim();
                const link = titleElement.attr('href');

                if (title && link) {
                    results.push({ title, link: `https:${link}` });
                }
            });

            if (results.length > 0) {
                let message = 'Hasil pencarian:\n\n';
                results.forEach((result, index) => {
                    message += `${index + 1}. ${result.title}\n${result.link}\n\n`;
                });
                reply(message);
            } else {
                reply('Tidak Ada Hasil.');
            }

            return;
        } catch (error) {
            attempts++;
            if (attempts >= maxRetries) {
                reply(`Error: ${error.message}`);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}
avzzzzz(`${encodeURIComponent(text)}`, m);
}
  }
};

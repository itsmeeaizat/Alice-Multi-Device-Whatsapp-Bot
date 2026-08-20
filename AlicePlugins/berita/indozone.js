// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['indozone'],
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
    if (!q) return reply(`_cari berita apa_`);
    const axios = require('axios');
    const cheerio = require('cheerio');
    async function fadami(query, m) {
        const maxRetries = 3;
        let attempts = 0;
        while (attempts < maxRetries) {
            try {
                const { data } = await axios.get(`https://fadami.indozone.id/search?q=${encodeURIComponent(query)}`, {
                    timeout: 2000,
                });
                const $ = cheerio.load(data);
                const results = [];
                $('.latest__item').each((index, element) => {
                    const titleElement = $(element).find('.latest__title a');
                    const title = titleElement.text().trim();
                    const link = titleElement.attr('href');
                    const imgElement = $(element).find('.latest__img img');
                    const imgSrc = imgElement.data('src');
                    
                    if (title && link && imgSrc) {
                        results.push({ title, link: `${link}`, imgSrc });
                    }
                });
                if (results.length > 0) {
                    let message = 'Hasil pencarian:\n\n';
                    results.forEach((result, index) => {
                        message += `${index + 1}. ${result.title}\nLink: ${result.link}\nJpg: ${result.imgSrc}\n\n`;
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
    fadami(q, m);
}
  }
};

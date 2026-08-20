// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['liputan6'],
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
    const axios = require('axios');
    const cheerio = require('cheerio');

    async function avzz() {
        try {
// wm avs                  
            const AvoskyBaik = await axios.get('https://www.liputan6.com/');
            const $ = cheerio.load(AvoskyBaik.data);
// wm avs
            const latestNews = $('.articles--iridescent-list').eq(2).find('article');
// wm avs
            const results = [];
            latestNews.each(function () {
                try {
                    const title = $(this).find('figure a').attr('title');
                    const link = $(this).find('figure a').attr('href');
                    const image = $(this).find('figure a picture img').attr('data-src');
                    const tag = $(this).find('aside header a').text();
// wm avs
                    results.push({ title, link, tag, image, source: 'liputan6' });
                } catch (e) {
// wm avs
                    console.error('Error scraping article:', e);
                }
            });
// wm avs
            return results;
        } catch (error) {
            console.error('Error fetching:', error);
            return [];
        }
    }
// wm avs
    avzz()
        .then(results => {
            if (results.length === 0) {
                reply('Tidak ada berita terbaru yang ditemukan.');
            } else {
                let message = 'Berita Terbaru dari Liputan6:\n\n';
                results.forEach((news, index) => {
                    message += `${index + 1}. ${news.title}\n`;
                    message += `Tag: ${news.tag}\n`;
                    message += `Link: ${news.link}\n`;
                    message += `Gambar: ${news.image}\n\n`;
                });
                reply(message);
            }
        })
        .catch(error => {
            console.error('ada bug:', error.message);
            reply('Terjadi kesalahan...');
        });
}
  }
};

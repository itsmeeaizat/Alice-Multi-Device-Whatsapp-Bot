// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['dalamislam'],
  operate: async (context) => {
    const {
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
    if (!q.trim()) return reply("_contoh .dalamislam dosa");
// wm avs
    const axios = require('axios');
    const cheerio = require('cheerio');
// wm avs
    async function scrapeHadis(searchTerm) {
        const url = `https://dalamislam.com/?s=${encodeURIComponent(searchTerm)}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const hadisList = [];
// wm avs
            $('.entry-title a').each((index, element) => {
                const title = $(element).text().trim();
                const link = $(element).attr('href');
                hadisList.push({ title, link });
            });
// wm avs
            return hadisList;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('elul.');
        }
    }
// wm avs
    scrapeHadis(q)
        .then(results => {
            if (results.length === 0) {
                reply('tak ada hasil.');
            } else {
                let response = `Hasil pencarian hadis dari Dalam Islam untuk: ${q}\n\n`;
                results.forEach((item, index) => {
                    response += `${index + 1}. ${item.title}\nLink: ${item.link}\n\n`;
                });
                reply(response);
            }
        })
        .catch(error => {
            console.error(`${error.message}`);
            reply('Terjadi kesalahan.');
        });
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['malaymail'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      axios,
      cheerio
    } = context;

{
if (isBan) return XRB()
await XReaction()
    reply('_Mencari berita terkini di Malay Mail_');

    try {
        const { data } = await axios.get('https://www.malaymail.com/');
        const $ = cheerio.load(data);

        const newsItems = [];
        $('.article-title a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            newsItems.push({ title, link });
        });

        if (newsItems.length === 0) {
            throw new Error('Gada Berita Baru');
        }

        let beritaText = 'Berita Terkini dari Malay Mail:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });

        reply(beritaText);
    } catch (error) {
        reply(`${error.message}`);
    }
}
  }
};

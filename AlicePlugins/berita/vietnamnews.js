// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['vietnamnews'],
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
    reply('_Mencari berita terkini di Vietnam News..._'); 
    try {
        const { data } = await axios.get('https://vietnamnews.vn/');
        const $ = cheerio.load(data);
        const newsItems = [];
        $('h3 a').each((index, element) => {
            const title = $(element).text().trim();
            const link = $(element).attr('href');
            if (title && link) {
                newsItems.push({ title, link: `${link}` });
            }
        });
        if (newsItems.length === 0) {
            throw new Error('Tidak ad..');
        }
        let beritaText = 'Berita Terkini dari Vietnam News:\n\n';
        newsItems.forEach((item, index) => {
            beritaText += `${index + 1}. ${item.title}\n`;
            beritaText += `Link: ${item.link}\n\n`;
        });        
        reply(beritaText);
    } catch (error) {
        reply(`Error: ${error.message}`);
    }
}
  }
};

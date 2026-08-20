// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['jkt48news'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      time,
      axios,
      cheerio
    } = context;

{
if (isBan) return XRB()
await XReaction()

async function jktNews(lang = "id") {
   let { data } = await axios.get(`https://jkt48.com/news/list?lang=${lang}`);
   let $ = cheerio.load(data);

   const news = [];
   
   $(".entry-news__list").each((index, element) => {
      const title = $(element).find("h3 a").text();
      const link = $(element).find("h3 a").attr("href");
      const date = $(element).find("time").text();

      news.push({ title, link: "https://jkt48.com" + link, date });
   });

   return news;
}

   try {
      let data = await jktNews();
      if (data.length === 0) return reply("Tidak Ada Berita Terbaru Hari Ini, Silahkan Kembali.")
      let result = data.map((res, id) => {
        return `${id + 1}, ${res.title}\nLink: ${res.link}\nTanggal Mulai: ${res.date}`
        }).join("\n\n");
        await reply(result)
   } catch (error) {
      throw "Gagal Mencari Berita."
      console.error(error.message)
   }
}
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['bingimg'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      q,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      axios,
      cheerio
    } = context;

{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply('Masukkan kata kunci yang akan dicari!')

  

  const AXIOS_OPTIONS = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    },
  };

  function parseimg(url) {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    return decodeURIComponent(searchParams.get('mediaurl'));
  }

  function search(query) {
    return axios.get(
      `https://www.bing.com/images/search?q=${query}`,
      AXIOS_OPTIONS
    ).then(function ({ data }) {
      let $ = cheerio.load(data)

      const url = []

      $(".imgpt > a").each((i, el) => {
        url[i] = $(el).attr("href");
      });

      const result = [];
      for (let i = 0; i < url.length; i++) {
       result[i] = {
          photo: parseimg('https://bing.com'+url[i])
        };
      }
      return result;
    });
  }

  let img = await search(text)
  let hasil = img[Math.floor(Math.random() * img.length)]

  Alice.sendMessage(m.chat, { image: {url: `${hasil.photo}`}}, { quoted: m })
}
  }
};

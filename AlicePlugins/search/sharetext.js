// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['stext', 'sharetext', 'sharetxt'],
  operate: async (context) => {
    const {
      text,
      reply,
      axios
    } = context;

{
    if (!text) reply('Kasih teks yang mau dishare dong...')

const bikinLink = async (teks) => {
    const {
        data
    } = await axios.post('https://sharetext.io/api/text', {
        text: teks
    }, {
        headers: {
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://sharetext.io/'
        }
    });

    if (!data) throw 'Gagal bikin link';
    return `https://sharetext.io/${data}`;
};


    try {
        const link = await bikinLink(text);
        await reply(`Nih link teks lu: ${link}`);
    } catch (e) {
        await reply(`Waduh error: ${e}`);
    }
};
  }
};

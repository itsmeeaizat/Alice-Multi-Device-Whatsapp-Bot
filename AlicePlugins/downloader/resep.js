// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['resepdownload'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, AliceCmd, axios, cheerio, command, isBan, m, quoted, reply, text } = context;

    switch (command) {
case 'resepdownload': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Please provide a Cookpad recipe URL!\n\nExample: ${AliceCmd} https://cookpad.com/id/resep/1234567`);

async function getRecipeDetails(url) {
  let { data } = await axios.get(url);
  let $ = cheerio.load(data);

  let cookingTime = $(".recipe-show__meta-container .icon_with_text .recipe-show__time").text().trim();
  let ingredients = [];
  let steps = [];

  $(".ingredient").each((i, el) => {
    ingredients.push($(el).text().trim());
  });

  $(".step").each((i, el) => {
    steps.push($(el).text().trim());
  });

  return { cookingTime, ingredients, steps };
}

    const detail = await getRecipeDetails(text);

    if (!detail) {
      return reply('No details found for the given URL.');
    }

    let message = `
🍽️ *Recipe Details!* 🍽️
- ⏲️ Cooking Time: ${detail.cookingTime}
- 📝 Ingredients: ${detail.ingredients.join(', ')}
- 📖 Steps: ${detail.steps.join('\n')}
- 🔗 [View Recipe](${text})
    `;

    await Alice.sendMessage(m.chat, { text: message, footer: packname }, { quoted: m });
  } catch (error) {
    console.error(error);
    return reply("An error occurred: " + error.message);
  }
};
break;

    }
  }
};

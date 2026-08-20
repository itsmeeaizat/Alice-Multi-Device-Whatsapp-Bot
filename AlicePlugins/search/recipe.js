// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['resep', 'recipe'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text) {
      return reply(`*Usage:* ${AliceCmd} <recipe_name>\n*Example:* ${AliceCmd} Arrabiata`);
    }

    try {
      const query = text.trim();
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);

      if (!res.ok) {
        return reply(`❌ Failed to fetch recipe data. (HTTP ${res.status})`);
      }

      const data = await res.json();
      if (!data.meals || data.meals.length === 0) {
        return reply(`❌ Recipe for *"${query}"* not found.`);
      }

      const meal = data.meals[0];

      // Extract ingredients and measures
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
          const formattedMeasure = measure && measure.trim() !== '' ? `${measure.trim()} ` : '';
          ingredients.push(`• ${formattedMeasure}${ingredient.trim()}`);
        }
      }

      const ingredientsList = ingredients.length > 0 ? ingredients.join('\n') : 'No ingredients listed.';

      const recipeText = `🍳 *RECIPE DETAILS*

🍲 *Meal Name:* ${meal.strMeal}
🏷️ *Category:* ${meal.strCategory || 'N/A'}
🌍 *Cuisine / Area:* ${meal.strArea || 'N/A'}

🛒 *Ingredients:*
${ingredientsList}

📖 *Instructions:*
${meal.strInstructions ? meal.strInstructions.trim() : 'No instructions available.'}`;

      if (meal.strMealThumb) {
        await Alice.sendMessage(m.chat, {
          image: { url: meal.strMealThumb },
          caption: recipeText
        }, { quoted: m });
      } else {
        await reply(recipeText);
      }
    } catch (error) {
      console.error('Recipe Plugin Error:', error);
      reply(`❌ Error fetching recipe: ${error.message || 'Unknown error'}`);
    }
  }
};

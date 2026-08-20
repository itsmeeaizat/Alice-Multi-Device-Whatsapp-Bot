// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['animequote', 'quoteanime'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    const fallbackQuotes = [
      { quote: "If you don't take risks, you can't create a future.", character: "Monkey D. Luffy", anime: "One Piece" },
      { quote: "People's lives don't end when they die, it ends when they lose faith.", character: "Itachi Uchiha", anime: "Naruto" },
      { quote: "If you turn your eyes away from sad things, they will happen again anyway.", character: "C.C.", anime: "Code Geass" },
      { quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.", character: "Kenshin Himura", anime: "Rurouni Kenshin" },
      { quote: "Fear is not evil. It tells you what your weakness is.", character: "Gildarts Clive", anime: "Fairy Tail" },
      { quote: "If you don't like your destiny, don't accept it. Instead, have the courage to change it.", character: "Naruto Uzumaki", anime: "Naruto" },
      { quote: "Hard work is worthless for those that don't believe in themselves.", character: "Naruto Uzumaki", anime: "Naruto" },
      { quote: "Push through the pain, giving up hurts more.", character: "Vegeta", anime: "Dragon Ball Z" },
      { quote: "We don't have to know what tomorrow holds! That's why we can live for everything we're worth today!", character: "Natsu Dragneel", anime: "Fairy Tail" },
      { quote: "If you can't do something, then don't. Focus on what you can do.", character: "Shiroe", anime: "Log Horizon" },
      { quote: "The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful.", character: "Roy Mustang", anime: "Fullmetal Alchemist" },
      { quote: "A person can change, at the moment when the person wishes to change.", character: "Haruhi Fujioka", anime: "Ouran High School Host Club" },
      { quote: "Giving up is what kills people.", character: "Alucard", anime: "Hellsing" },
      { quote: "Knowing what it feels like to be in pain, is why we try to be kind to others.", character: "Jiraiya", anime: "Naruto" },
      { quote: "It's not the face that makes someone a monster, it's the choices they make with their lives.", character: "Naruto Uzumaki", anime: "Naruto" }
    ];

    let quote = null;
    let character = null;
    let anime = null;

    try {
      const response = await fetch('https://animechan.xyz/api/random');
      if (response.ok) {
        const data = await response.json();
        if (data && data.quote && data.character && data.anime) {
          quote = data.quote;
          character = data.character;
          anime = data.anime;
        }
      }
    } catch (err) {
      // API call failed, fallback to hardcoded list
    }

    if (!quote) {
      const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      quote = random.quote;
      character = random.character;
      anime = random.anime;
    }

    const resultMsg = `💬 *ANIME QUOTE*\n\n"${quote}"\n\n👤 *Character:* ${character}\n📺 *Anime:* ${anime}`;
    await reply(resultMsg);
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['npmsearch', 'npms'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text) {
      return reply(`*Usage:* ${AliceCmd} <package_name>\n*Example:* ${AliceCmd} express`);
    }

    try {
      const packageName = text.trim();
      let res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`);

      if (res.status === 404) {
        // Try searching if exact package name not found directly
        const searchRes = await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(packageName)}&size=1`);
        if (searchRes.ok) {
          const searchData = await searchRes.json();
          if (searchData.objects && searchData.objects.length > 0) {
            const foundName = searchData.objects[0].package.name;
            res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(foundName)}`);
          }
        }
      }

      if (!res.ok) {
        return reply(`❌ NPM package *${packageName}* not found.`);
      }

      const pkgData = await res.json();
      const latestVersion = pkgData['dist-tags']?.latest || 'N/A';
      const versionInfo = pkgData.versions?.[latestVersion] || {};
      const dependencies = versionInfo.dependencies ? Object.keys(versionInfo.dependencies) : [];
      const dependenciesCount = dependencies.length;

      const messageText = `📦 *NPM PACKAGE DETAILS*

📛 *Name:* ${pkgData.name}
🔖 *Version:* ${latestVersion}
📝 *Description:* ${pkgData.description || 'No description provided.'}
🔗 *Dependencies Count:* ${dependenciesCount}
👤 *Author:* ${typeof pkgData.author === 'object' ? (pkgData.author?.name || 'N/A') : (pkgData.author || 'N/A')}
⚖️ *License:* ${pkgData.license || 'N/A'}
🌐 *NPM Link:* https://www.npmjs.com/package/${pkgData.name}`;

      await reply(messageText);
    } catch (error) {
      console.error('NPM Search Plugin Error:', error);
      reply(`❌ Error searching NPM package: ${error.message || 'Unknown error'}`);
    }
  }
};

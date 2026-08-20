// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['github', 'gh'],
  operate: async (context) => {
    const { Alice, m, text, quoted, reply, AliceCmd, fetch } = context;

    if (!text) {
      return reply(`*Usage:* ${AliceCmd} <username>\n*Example:* ${AliceCmd} torvalds`);
    }

    try {
      const username = text.trim().replace(/^@/, '');
      const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
        headers: {
          'User-Agent': 'AliceMD/V25 (Node.js/WhatsAppBot)'
        }
      });

      if (response.status === 404) {
        return reply(`❌ GitHub user *${username}* not found.`);
      }

      if (!response.ok) {
        return reply(`❌ Failed to fetch GitHub profile. (HTTP ${response.status})`);
      }

      const user = await response.json();

      const profileText = `🐙 *GITHUB USER PROFILE*

👤 *Name:* ${user.name || 'N/A'}
🏷️ *Username:* ${user.login}
📝 *Bio:* ${user.bio || 'No bio available.'}
👥 *Followers:* ${user.followers?.toLocaleString() ?? 0}
👤 *Following:* ${user.following?.toLocaleString() ?? 0}
📦 *Public Repos:* ${user.public_repos?.toLocaleString() ?? 0}
🏢 *Company:* ${user.company || 'N/A'}
📍 *Location:* ${user.location || 'N/A'}
🔗 *Link:* ${user.html_url}`;

      if (user.avatar_url) {
        await Alice.sendMessage(m.chat, {
          image: { url: user.avatar_url },
          caption: profileText
        }, { quoted: m });
      } else {
        await reply(profileText);
      }
    } catch (error) {
      console.error('GitHub Plugin Error:', error);
      reply(`❌ Error fetching GitHub profile: ${error.message || 'Unknown error'}`);
    }
  }
};

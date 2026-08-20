// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['allmenu', 'allmenucategory'],
  operate: async (context) => {
    const {
      Alice,
      m,
      reply,
      XReaction,
      isBan,
      Xban,
      ownername,
      botname,
      version,
      pushname,
      alice,
      totalfitur,
      fs
    } = context;

    if (isBan) return Xban();
    await XReaction();

    const header = `┌── •「 *${botname}* 」
│
│  Halo *@${pushname}*
│  Saya sistem otomatis WhatsApp bot
│  yang bisa bantu cari data & info
│
├── • Info Bot
│  ◦ Prefix    : ${alice}
│  ◦ Version   : ${version}
│  ◦ Features  : ${totalfitur()}
│  ◦ Bot Name  : ${botname}
│  ◦ Owner     : ${ownername}
│  ◦ Type      : Plugin Based (cjs)
│
╰─────────────────────>

`;

    // ════════════════════════════════════════════════
    // ALLMENU - semua fitur dalam satu pesan
    // ════════════════════════════════════════════════
    if (command === 'allmenu' || m.body?.startsWith(`${alice}allmenu`)) {
      const fullMenu = header + (global.allmenu || 'Menu belum di-load.');
      await reply(fullMenu);
      return;
    }

    // ════════════════════════════════════════════════
    // ALLMENUCATEGORY - fitur per kategori
    // ════════════════════════════════════════════════
    if (command === 'allmenucategory' || m.body?.startsWith(`${alice}allmenucategory`)) {
      const categories = [
        { name: 'CPanel',      menu: global.cpanelmenu },
        { name: 'Anime',       menu: global.animemenu },
        { name: 'Push Kontak',  menu: global.pushmenu },
        { name: 'Main',        menu: global.mainmenu },
        { name: 'Berita',      menu: global.beritamenu },
        { name: 'Asupan',      menu: global.asupanmenu },
        { name: 'Audio',       menu: global.audiomenu },
        { name: 'Anonymous',   menu: global.anonymousmenu },
        { name: 'AI',          menu: global.aimenu },
        { name: 'Store',       menu: global.storemenu },
        { name: 'Convert',     menu: global.convertmenu },
        { name: 'Tools',       menu: global.toolsmenu },
        { name: 'Islami',      menu: global.islamimenu },
        { name: 'Downloader',  menu: global.downloadermenu },
        { name: 'Premium',     menu: global.premiummenu },
        { name: 'Search',      menu: global.searchmenu },
        { name: 'Ephoto',      menu: global.ephotomenu },
        { name: 'Primbon',     menu: global.primbonmenu },
        { name: 'Random/Fun',   menu: global.randommenu },
        { name: 'Group',       menu: global.groupmenu },
        { name: 'Owner',       menu: global.ownermenu },
        { name: 'Game',        menu: global.gamemenu },
        { name: 'RPG',         menu: global.rpgmenu }
      ];

      let body = header;
      for (const cat of categories) {
        if (cat.menu) {
          body += `${cat.menu}\n`;
        }
      }
      body += `\n╰─────────────────────>\n> ${botname}`;

      // Auto-split untuk WA message limit
      if (body.length > 3800) {
        const chunks = [];
        let current = '';
        const lines = body.split('\n');
        for (const line of lines) {
          if ((current + line + '\n').length > 3800) {
            chunks.push(current);
            current = '';
          }
          current += line + '\n';
        }
        if (current) chunks.push(current);

        for (let i = 0; i < chunks.length; i++) {
          if (i === 0) {
            await reply(chunks[i]);
          } else {
            await Alice.sendMessage(m.chat, { text: chunks[i] }, { quoted: m });
          }
          if (i < chunks.length - 1) await new Promise(r => setTimeout(r, 500));
        }
      } else {
        await reply(body);
      }
      return;
    }
  }
};

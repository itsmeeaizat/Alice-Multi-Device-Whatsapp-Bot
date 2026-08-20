// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['menu', 'allmenu', 'allcategory'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      prefix,
      command,
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
      fs,
      proto,
      generateWAMessageFromContent,
      prepareWAMessageMedia,
      getDevice
    } = context;

    if (isBan) return Xban();
    await XReaction();

    // ════════════════════════════════════════════════
    // MENU INTRO
    // ════════════════════════════════════════════════
    if (command === 'menu') {
      const intro = `┌── •「 *${botname}* 」
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
├── • Commands
│  ◦ ${alice}allmenu
│      Tampilkan semua fitur lengkap
│  ◦ ${alice}allcategory
│      Tampilkan fitur per kategori
│  ◦ ${alice}about
│      Info detail tentang bot
│
╰─────────────────────>`;

      let device = await getDevice(m.key.id);

      if (device === "android") {
        let sections = [
          {
            title: "Menu Utama",
            highlight_label: "Pilih Menu",
            rows: [
              { title: "All Menu", description: "Semua fitur lengkap", id: `${alice}allmenu` },
              { title: "All Category", description: "Fitur per kategori", id: `${alice}allcategory` },
              { title: "About Bot", description: "Info detail tentang bot", id: `${alice}about` }
            ]
          }
        ];

        const msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: proto.Message.InteractiveMessage.create({
                contextInfo: {
                  mentionedJid: [m.sender],
                  isForwarded: true,
                  businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
                },
                body: proto.Message.InteractiveMessage.Body.create({ text: intro }),
                footer: proto.Message.InteractiveMessage.Footer.create({ text: `> ${botname}` }),
                header: proto.Message.InteractiveMessage.Header.create({
                  title: ``,
                  subtitle: "",
                  hasMediaAttachment: true,
                  ...(await prepareWAMessageMedia(
                    { image: fs.readFileSync("./AliceMedia/image/Alice.jpg") },
                    { upload: Alice.waUploadToServer }
                  ))
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  buttons: [
                    {
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        title: "Pilih Menu",
                        sections
                      })
                    }
                  ],
                })
              })
            }
          }
        }, {});

        await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
      } else {
        await Alice.sendMessage(m.chat, {
          image: { url: "./AliceMedia/image/Alice.jpg" },
          caption: intro
        }, { quoted: m });
      }
      return;
    }

    // ════════════════════════════════════════════════
    // ALL MENU (semua fitur dalam satu pesan)
    // ════════════════════════════════════════════════
    if (command === 'allmenu') {
      const header = `┌── •「 *${botname}* 」
│
│  Halo *@${pushname}*
│  Prefix: ${alice} | Version: ${version}
│  Total Features: ${totalfitur()}
│
╰─────────────────────>

`;

      const fullMenu = header + (global.allmenu || 'Menu belum di-load. Pastikan AliceLibray/AliceMenu.js ter-load.');
      await reply(fullMenu);
      return;
    }

    // ════════════════════════════════════════════════
    // ALL CATEGORY (fitur per kategori)
    // ════════════════════════════════════════════════
    if (command === 'allcategory') {
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

      const header = `┌── •「 *All Category* 」
│
│  Total Kategori: ${categories.length}
│  Total Features: ${totalfitur()}
│
`;

      let body = header;
      for (const cat of categories) {
        if (cat.menu) {
          body += `╰─────────────────────>\n\n${cat.menu}\n`;
        }
      }

      body += `\n╰─────────────────────>\n> ${botname}`;

      // WA has 4096 char limit per message, split if needed
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

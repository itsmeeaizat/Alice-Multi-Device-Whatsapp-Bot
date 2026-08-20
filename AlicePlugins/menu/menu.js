// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['menu', 'menuall', 'menucpanel', 'menuanime', 'menupush', 'menumain', 'menuberita', 'menuasupan', 'menuaudio', 'menuanonymous', 'menuai', 'menustore', 'menuconvert', 'menutools', 'menuislami', 'menudownloader', 'menupremium', 'menusearch', 'menuephoto', 'menuprimbon', 'menurandom', 'menugroup', 'menuowner', 'menugame', 'menurpg'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, totalfitur } = context;

    switch (command) {
case 'menu': {
  try {
    if (isBan) return Xban();
    await XReaction();

    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )`;

    // Sumber data menu (dipakai Android & non-Android)
    let sections = [
      {
        title: "🔥 Special",
        highlight_label: "Menu Utama",
        rows: [
          { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
        ]
      },
      {
        title: "🤖 AI & RPG",
        highlight_label: "Teknologi Dan Simulasi Games",
        rows: [
          { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
          { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
        ]
      },
      {
        title: "🎮 Hiburan",
        highlight_label: "Entertainment",
        rows: [
          { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
          { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
          { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
        ]
      },
      {
        title: "🛠️ Tools & Utils",
        highlight_label: "Utility",
        rows: [
          { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
          { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
          { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
          { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
          { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
        ]
      },
      {
        title: "👥 Group & Owner",
        highlight_label: "Management",
        rows: [
          { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
          { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
          { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
        ]
      },
      {
        title: "🏪 Store & Premium",
        highlight_label: "Special Access",
        rows: [
          { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
          { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
        ]
      },
      {
        title: "☪️ Islami & Ramalan",
        highlight_label: "Religi & Primbon",
        rows: [
          { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
          { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
        ]
      },
      {
        title: "📰 Informasi",
        highlight_label: "News & Info",
        rows: [
          { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
          { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
          { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
        ]
      },
      {
        title: "🍥 Anime & Manga",
        highlight_label: "Otaku Zone",
        rows: [
          { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
          { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
        ]
      }
    ];

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow (seperti sebelumnya) =====
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {
      // ===== NON-ANDROID: Caption Flat dengan Kategori & Case =====

      // Susun teks menu flat (tanpa interactive sections/rows)
      const flatMenu = sections.map(sec => {
        const items = sec.rows
          .map(r => `   ◦ ${r.title} → \`${r.id}\``)
          .join('\n');
        return `*${sec.title}*\n${items}`;
      }).join('\n\n────────────────────\n\n');

      // Caption akhir yang ringkas & rapi
      const caption = `${ciro}

📖 *Daftar Menu Kategori*
${flatMenu}

💡 *Cara Pakai:*
• Ketik ID yang tertera. Contoh: \`${alice}menuai\`

> © ${botname} - 2025`;

      // Kirim gambar dengan caption berisi seluruh menu
      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption
      }, { quoted: m });

      // Optional: jika caption sangat panjang dan terpotong WA, kirim ulang per-blok
      if (caption.length > 3500) {
        const blocks = flatMenu.split('\n\n────────────────────\n\n');
        for (const block of blocks) {
          await Alice.sendMessage(m.chat, { text: `📖 *Menu (lanjutan)*\n\n${block}` }, { quoted: m });
        }
      }
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuall': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.allmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menucpanel': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.cpanelmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuanime': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.animemenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menupush': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.pushmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menumain': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.mainmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuberita': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.beritamenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuasupan': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.asupanmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuaudio': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.audiomenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuanonymous': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.anonymousmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuai': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.aimenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menustore': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.storemenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuconvert': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.convertmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menutools': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.toolsmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuislami': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.islamimenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menudownloader': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.downloadermenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menupremium': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.premiummenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menusearch': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.searchmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuephoto': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.ephotomenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuprimbon': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.primbonmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menurandom': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.randommenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menugroup': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.groupmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menuowner': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.ownermenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menugame': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.gamemenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;

case 'menurpg': {
  try {
    if (isBan) return Xban();
    await XReaction();


    const ciro = `hii *@${pushname}* 🪸, i am an automated system ( WhatsApp bot ) that can help to do something search and get data or information only through WhatsApp
    
— 🤖 Alice Informations
┌  ◦ Prefix: ${alice}
│  ◦ Version: ${version}
│  ◦ TotalCase : ${totalfitur()}
│  ◦ Nama Bot: ${botname}
└  ◦ Type: Case X Plugins ( cjs )

━━━━━━━━━━━━━━⬣
${global.rpgmenu}`;

    let device = await getDevice(m.key.id);

    if (device === "android") {
      // ===== ANDROID: Native Flow =====
      let sections = [
        {
          title: "🔥 Special",
          highlight_label: "Menu Utama",
          rows: [
            { title: "📑 Menu All", description: "Lihat semua fitur lengkap", id: `${alice}menuall` }
          ]
        },
        {
          title: "🤖 AI & RPG",
          highlight_label: "Teknologi Dan Simulasi Games",
          rows: [
            { title: "🤖 Menu AI", description: "Gunakan fitur kecerdasan buatan", id: `${alice}menuai` },
            { title: "⚔️ Menu RPG", description: "Mainkan game roleplay RPG", id: `${alice}menurpg` }
          ]
        },
        {
          title: "🎮 Hiburan",
          highlight_label: "Entertainment",
          rows: [
            { title: "🎮 Menu Game", description: "Fitur hiburan & mini game", id: `${alice}menugame` },
            { title: "🎲 Menu Random", description: "Konten acak & hiburan", id: `${alice}menurandom` },
            { title: "🎵 Menu Audio", description: "Fitur musik & audio", id: `${alice}menuaudio` }
          ]
        },
        {
          title: "🛠️ Tools & Utils",
          highlight_label: "Utility",
          rows: [
            { title: "🛠️ Menu Tools", description: "Kumpulan peralatan dan utilitas", id: `${alice}menutools` },
            { title: "🔄 Menu Convert", description: "Ubah format file & media", id: `${alice}menuconvert` },
            { title: "🖼️ Menu Ephoto", description: "Edit & buat foto keren", id: `${alice}menuephoto` },
            { title: "🔎 Menu Search", description: "Cari informasi cepat", id: `${alice}menusearch` },
            { title: "📥 Menu Downloader", description: "Download dari berbagai sumber", id: `${alice}menudownloader` }
          ]
        },
        {
          title: "👥 Group & Owner",
          highlight_label: "Management",
          rows: [
            { title: "👥 Menu Group", description: "Atur & kelola grup", id: `${alice}menugroup` },
            { title: "👑 Menu Owner", description: "Khusus pemilik bot", id: `${alice}menuowner` },
            { title: "🖥️ Menu Cpanel", description: "Kontrol & pengaturan bot", id: `${alice}menucpanel` }
          ]
        },
        {
          title: "🏪 Store & Premium",
          highlight_label: "Special Access",
          rows: [
            { title: "🏪 Menu Store", description: "Fitur jual beli / store", id: `${alice}menustore` },
            { title: "💎 Menu Premium", description: "Fitur khusus pengguna premium", id: `${alice}menupremium` }
          ]
        },
        {
          title: "☪️ Islami & Ramalan",
          highlight_label: "Religi & Primbon",
          rows: [
            { title: "☪️ Menu Islami", description: "Fitur islami & religi", id: `${alice}menuislami` },
            { title: "📜 Menu Primbon", description: "Cek ramalan & primbon", id: `${alice}menuprimbon` }
          ]
        },
        {
          title: "📰 Informasi",
          highlight_label: "News & Info",
          rows: [
            { title: "📰 Menu Berita", description: "Baca berita terbaru", id: `${alice}menuberita` },
            { title: "📲 Menu Push", description: "Push kontak secara cepat", id: `${alice}menupush` },
            { title: "🎯 Menu Main", description: "Fitur utama bot", id: `${alice}menumain` }
          ]
        },
        {
          title: "🍥 Anime & Manga",
          highlight_label: "Otaku Zone",
          rows: [
            { title: "🍥 Menu Anime", description: "Fitur seputar anime & manga", id: `${alice}menuanime` },
            { title: "🙈 Menu Anonymous", description: "Chat anonim tanpa identitas", id: `${alice}menuanonymous` }
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
                forwardedNewsletterMessageInfo: {
                  newsletterName: author,
                  newsletterJid: idch,
                  serverMessageId: 143
                },
                businessMessageForwardInfo: { businessOwnerJid: Alice.decodeJid(Alice.user.id) },
              },
              body: proto.Message.InteractiveMessage.Body.create({ text: ciro }),
              footer: proto.Message.InteractiveMessage.Footer.create({ text: `> © ${botname} - 2025` }),
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
                      title: `Selection`,
                      sections
                    })
                  }
                ],
              })
            })
          }
        }
      }, {});

      if (!text) await Alice.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });

    } else {

      await Alice.sendMessage(m.chat, {
        image: { url: "./AliceMedia/image/Alice.jpg" },
        caption: ciro
      }, { quoted: m });
    }

  } catch (e) {
    console.error('Error menu:', e);
    await Alice.sendMessage(m.chat, { text: 'Maaf, terjadi kesalahan saat menampilkan menu.' }, { quoted: m });
  }
}
break;
//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
// Command Owner Prefix
    }
  }
};

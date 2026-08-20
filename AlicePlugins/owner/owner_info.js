// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['owner', 'botowner', 'contactowner', 'script', 'sc', 'storage', 'donate', 'topcmd', 'ping', 'info', 'server', 'srvinfo', 'profile', 'totalfitur'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, exec, util, args } = context;

    switch (command) {
case 'owner':
case 'botowner': {
  if (isBan) return XRB();
  await XReaction();

  try {
    let namaown = `${ownername}`;
    let nomor = `${global.owner}`;
    let email = "aizat@gmail.com";
    let website = "https://github.com/aizat";
    let jabatan = "Bot Creator & Developer";
    let lokasi = "Indonesia";

    let teks = `╭━━━〔 *👑 OWNER ALICE BOT* 〕━━━╮\n`;
    teks += `┃ 💬 *Nama*     : ${namaown}\n`;
    teks += `┃ 📱 *Nomor*    : wa.me/${nomor}\n`;
    teks += `┃ 🧑‍💻 *Jabatan*  : ${jabatan}\n`;
    teks += `┃ 📧 *Email*    : ${email}\n`;
    teks += `┃ 🌐 *Website*  : ${website}\n`;
    teks += `┃ 📍 *Lokasi*   : ${lokasi}\n`;
    teks += `╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯\n\n`;
    teks += `💡 *Hubungi owner hanya untuk keperluan penting ya~ ❤️*\n`;
    teks += `> Tekan tombol di bawah untuk melihat kontak owner 👇`;

    const buttons = [
      {
        name: "quick_reply",
        buttonParamsJson: JSON.stringify({
          display_text: "📞 Lihat Kontak Owner",
          id: `${alice}contactowner`
        })
      }
    ];

    // siapkan media header (foto Alice misalnya)
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
            footer: proto.Message.InteractiveMessage.Footer.create({ text: `© ${botname} - 2025` }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: '',
              subtitle: '',
              hasMediaAttachment: true,
              ...(await prepareWAMessageMedia(
                { image: fs.readFileSync('./AliceMedia/image/Alice.jpg') },
                { upload: Alice.waUploadToServer }
              ))
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ buttons })
          })
        }
      }
    }, {});

    await Alice.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

  } catch (err) {
    console.error('owner error:', err);
    reply('❌ Gagal menampilkan kontak owner.');
  }
}
break;

case 'contactowner': {
  if (isBan) return XRB();
  await XReaction();

  try {
    let namaown = `${ownername}`;
    let nomor = `${global.owner}`;
    let email = "aizat@gmail.com";
    let website = "https://github.com/aizat";
    let jabatan = "Bot Creator & Developer";
    let lokasi = "Indonesia";

    // Buat vCard detail
    var vcard = 
`BEGIN:VCARD
VERSION:3.0
N:;${namaown};;;
FN:${namaown}
ORG:${jabatan};
TITLE:${jabatan}
item1.TEL;waid=${nomor}:${nomor}
item1.X-ABLabel:Nomor Utama
item2.EMAIL;type=INTERNET:${email}
item2.X-ABLabel:Email
item3.URL:${website}
item3.X-ABLabel:Website
item4.ADR:;;${lokasi};;;;
item4.X-ABLabel:Lokasi
END:VCARD`;

    // Kirim langsung vCard tanpa teks tambahan
    const contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      "contactMessage": {
        "displayName": `${namaown}`,
        "vcard": vcard
      }
    }), { userJid: m.chat, quoted: m });

    await Alice.relayMessage(m.chat, contact.message, { messageId: contact.key.id });

  } catch (err) {
    console.error('contactowner error:', err);
    reply('❌ Gagal mengirim kontak owner.');
  }
}
break;
    }
  }
};

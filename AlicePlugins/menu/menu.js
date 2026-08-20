// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['menu'],
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
      fs,
      proto,
      generateWAMessageFromContent,
      prepareWAMessageMedia,
      getDevice
    } = context;

    if (isBan) return Xban();
    await XReaction();

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
│  ◦ ${alice}allmenucategory
│  ◦ ${alice}about
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
            { title: "All Category", description: "Fitur per kategori", id: `${alice}allmenucategory` },
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
  }
};

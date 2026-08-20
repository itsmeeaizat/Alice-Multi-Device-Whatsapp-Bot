// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['wikimedia'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      text,
      isBan,
      reply,
      XReaction,
      XRB
    } = context;

{
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`*Mau Cari Gambar Apa di Wikimedia?*`);
  try {
    const images = await WikiMedia(text);
    if (!images || images.length === 0) {
      return reply("⚠️ *Tidak ditemukan gambar dengan pencarian tersebut di Wikimedia.*");
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffleArray(images);
    const selectedImages = images.slice(0, 5);
    let push = [];
    let i = 1;
    async function createImage(url) {
      const { imageMessage } = await generateWAMessageContent({
        image: { url }
      }, { upload: Alice.waUploadToServer });
      return imageMessage;
    }
    for (let img of selectedImages) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*Pencarian : ${text}*`
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `*Gambar ${i++}*`,
          hasMediaAttachment: true,
          imageMessage: await createImage(img.image)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_url",
              "buttonParamsJson": `{"display_text":"Wikimedia","url":"${img.source}","merchant_url":"${img.source}"}`
            }
          ]
        })
      });
    }
    const bot = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `*Berhasil Memuat 5 Gambar*`
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {});

    await Alice.relayMessage(m.chat, bot.message, {
      messageId: bot.key.id
    }).catch((err) => reply(mess.error));

  } catch (error) {
    console.error("Error:", error.message);
    XRR()
  }
}
  }
};

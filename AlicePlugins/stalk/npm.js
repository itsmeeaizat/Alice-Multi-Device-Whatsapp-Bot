// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['npm', 'npms', 'npmjs', 'npmshare', 'npmsearch'],
  operate: async (context) => {
    const {
      Alice,
      m,
      body,
      text,
      q,
      isBan,
      reply,
      XReaction,
      XRB,
      AliceCmd,
      axios,
      fetch
    } = context;

{
if (isBan) return XRB()
await XReaction()
                if (!text) return reply(`Masukkan nama package!\nContoh: ${AliceCmd} axios'`);
                let res = await fetch(`https://api.ditss.cloud/search/npm?apikey=DitssGanteng&q=${encodeURIComponent(text)}`);
                let json = await res.json();

                if (!json.result || !json.result.length) return reply('❌ Paket tidak ditemukan.');

                async function createImage(url) {
                    const {
                        imageMessage
                    } = await generateWAMessageContent({
                        image: {
                            url
                        }
                    }, {
                        upload: Alice.waUploadToServer
                    });
                    return imageMessage;
                }

                let cards = [];
                let data = json.result.slice(0, 10); // maksimal 10 paket

                for (let pkg of data) {
                    let npmLink = pkg.links?.npm || '';
                    let github = pkg.links?.repository?.replace(/^git\+/, '').replace(/\.git$/, '');
                    let img = 'https://raw.githubusercontent.com/ditss-dev/database/main/mbnojzwp.jpg'; // ikon NPM

                    cards.push({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `📦 ${pkg.title}\n📅 Update: ${pkg.update}\n👤 ${pkg.author}`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: 'NPM Search'
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: pkg.title,
                            hasMediaAttachment: true,
                            imageMessage: await createImage(img)
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [{
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "📄 NPM",
                                        url: npmLink,
                                        merchant_url: npmLink
                                    })
                                },
                                github ? {
                                    name: "cta_url",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "🔗 GitHub",
                                        url: github,
                                        merchant_url: github
                                    })
                                } : null
                            ].filter(Boolean)
                        })
                    });
                }

                const msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: `🔍 *Hasil Pencarian:* _${text}_`
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: `powered by ${global.namaowner}`
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    hasMediaAttachment: false
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards
                                })
                            })
                        }
                    }
                }, {});

                await Alice.relayMessage(m.chat, msg.message, {
                    messageId: msg.key.id
                });
            }
  }
};

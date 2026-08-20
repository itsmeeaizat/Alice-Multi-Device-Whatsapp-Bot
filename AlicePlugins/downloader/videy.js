// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['videy', 'videydl'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, AliceCmd, command, isBan, m, quoted, reply, text } = context;

    switch (command) {
case 'videy':
case 'videydl': {
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${AliceCmd} linknya`)
    let twitter = await fetchJson(`https://vapis.my.id/api/videy?url=${Enc(text)}`)
    Alice.sendMessage(m.chat, {
      video: {
        url: twitter.data
      },
      caption: `${packname}`
    }, {
      quoted: m
    })
  } catch (err) {
    reply(`Terjadi kesalahan`);
  }
}
break;

    }
  }
};

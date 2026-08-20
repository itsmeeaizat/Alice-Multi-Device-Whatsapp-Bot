// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['mediafire', 'mediafiredl', 'mfdl', 'mfs', 'mediafires', 'mediafiresearch'],
  operate: async (context) => {
    const { Alice, XRB, XReaction, AliceCmd, axios, command, isBan, m, quoted, reply, text } = context;

    switch (command) {
case 'mediafire': 
case 'mediafiredl': 
case 'mfdl': {
  if (isBan) return XRB()
  await XReaction()
  if (!text) return reply('Masukkan link Mediafire bangg\nContoh : .mediafire https://www.mediafire.com/file/xxxx')

  try {
    const { data } = await axios.get('https://velyn.mom/api/downloader/mediafire', {
      params: { url: text, apikey: 'velynapis' }
    })

    if (!data || !data.data) throw new Error('Gagal mengambil data file')

    const file = data.data
    const caption = `*Mediafire Downloader*
*Nama :* ${file.title}
*Ukuran :* ${file.size}`

    await Alice.sendMessage(m.chat, {
      document: { url: file.mirror }, // ✅ pakai mirror, bukan url
      fileName: file.title,
      mimetype: 'application/octet-stream',
      caption,
    }, { quoted: m })

  } catch (e) {
    reply(`Error: ${e.message}`)
  }
}
break;


case 'mfs':
case 'mediafires':
case 'mediafiresearch': {
if (isBan) return XRB()
await XReaction()
    if (!text) return reply(`Ex : ${AliceCmd} epep config`)
    
    try {
        let res = await mfsearch(text)
        if (!res.length) return reply('Tidak Di Temukan')
        let tekss = res.map((v, i) => 
            `${i + 1}. ${v.filename}\nUkuran : ${v.filesize}\nLink : ${v.url}\nSource : ${v.source_title} (${v.source_url})`
        ).join('\n\n')
        await reply(tekss)
    } catch (e) {
        reply(`Eror kak : ${e.message}`)
    }
}
break;

    }
  }
};

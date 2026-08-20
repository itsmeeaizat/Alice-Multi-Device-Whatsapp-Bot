// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['vivadetail'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'vivadetail': {
if (isBan) return XRB()
await XReaction()
  if (!text) return reply(`contoh penggunaan:\n${AliceCmd} https://vivagoal.com/pecat-branko-ivankovic-nama-shin-tae-yong-masuk-daftar-pelatih-timnas-china-selanjutnya/`)
 
  try {
    let api = `https://zenz.biz.id/berita/vivagoal/detail?url=${encodeURIComponent(text)}`
    let res = await fetch(api)
    if (!res.ok) reply('gbisa akses api nya, coba cek api nya')
 
    let json = await res.json()
    if (!json.status || !json.result) reply('tidak ditemukan data yang valid')
 
    let { title, thumbnail, published, content, url } = json.result
    let tanggal = new Date(published).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
 
    let pesan = ` *${title}*\n *Terbit:* ${tanggal}\n\n *Sumber:* ${url}\n\n${content}`
 
    await Alice.sendFile(m.chat, thumbnail, 'berita.jpg', pesan, m)
  } catch (e) {
    reply(m.chat, e.toString(), m)
  }
 
  break
}
    }
  }
};

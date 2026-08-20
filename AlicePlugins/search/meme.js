// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['randommeme', 'meme', 'rmeme'],
  operate: async (context) => {
    const {
      Alice,
      m,
      isBan,
      quoted,
      reply,
      XReaction,
      XRB,
      content,
      axios
    } = context;

{
  if (isBan) return XRB()
  await XReaction()

  const API = 'https://api.zenzxz.my.id/random/meme'
  const MAX_IMG = 15 * 1024 * 1024 // batas 15 MB

  // helper kecil
  const humanSize = (n=0) => { const u=['B','KB','MB','GB']; let i=0,v=+n; while(v>=1024&&i<u.length-1){v/=1024;i++} return `${v.toFixed(v>=100?0:v>=10?1:2)} ${u[i]}` }
  const extFromCtype = (t='') => (t.split('/')[1] || 'jpg').split(';')[0]

  const when = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
  const caption = `😂 *Random Meme*\n🕒 ${when}\n🔗 Sumber: api.zenzxz.my.id\n\nKetik *.meme* lagi untuk next.`

  try {
    // 1) coba request biasa (mungkin JSON dengan url)
    let r = await axios.get(API, { timeout: 15000, validateStatus: s => s>=200 && s<400 })
    let ctype = (r.headers['content-type'] || '').toLowerCase()

    if (ctype.includes('application/json')) {
      const j = r.data || {}
      const mediaUrl = j.url || j.result || j.image || j.data?.url || j.data?.image
      if (!mediaUrl) return reply('⚠️ API tidak mengembalikan URL gambar.')

      // cek ukuran lewat HEAD
      let clen = 0, mim = ''
      try {
        const h = await axios.head(mediaUrl, { timeout: 10000 })
        clen = parseInt(h.headers['content-length'] || '0', 10)
        mim  = (h.headers['content-type'] || '').toLowerCase()
      } catch {}

      if (clen && clen > MAX_IMG) {
        await Alice.sendMessage(
          m.chat,
          { document: { url: mediaUrl }, mimetype: mim || 'image/jpeg', fileName: `random_meme.${extFromCtype(mim||'image/jpeg')}`, caption: `${caption}\n(📦 dokumen – ${humanSize(clen)})` },
          { quoted: m }
        )
      } else {
        await Alice.sendMessage(m.chat, { image: { url: mediaUrl }, caption }, { quoted: m })
      }
      return
    }

    // 2) kalau bukan JSON → API langsung stream gambar
    r = await axios.get(API, {
      timeout: 20000,
      responseType: 'arraybuffer',
      validateStatus: s => s>=200 && s<400
    })
    ctype = (r.headers['content-type'] || 'image/jpeg').toLowerCase()
    const length = parseInt(r.headers['content-length'] || '0', 10)
    const buff = Buffer.from(r.data)

    if (length && length > MAX_IMG) {
      await Alice.sendMessage(
        m.chat,
        { document: buff, mimetype: ctype, fileName: `random_meme.${extFromCtype(ctype)}`, caption: `${caption}\n(📦 dokumen – ${humanSize(length)})` },
        { quoted: m }
      )
    } else {
      await Alice.sendMessage(
        m.chat,
        { image: buff, caption },
        { quoted: m }
      )
    }

  } catch (e) {
    console.error('randommeme error:', e?.message || e)
    const msg =
      (e?.response?.status === 429) ? '⌛ Terlalu banyak permintaan. Coba sebentar lagi.' :
      (e?.code === 'ECONNABORTED') ? '⌛ Timeout koneksi ke API.' :
      '❌ Gagal mengambil meme. Coba lagi.'
    return reply(msg)
  }
}
  }
};

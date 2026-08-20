// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['claudeai'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'claudeai': {
if (isBan) return XRB()
await XReaction()
  if (!text) {
    return reply(`Masukkan Pertanyaan?`)
  }
 
  try {
    const headers = {
      'Accept': '*/*',
      'Referer': 'https://claudeai.one/',
      'Origin': 'https://claudeai.one',
      'User-Agent': 'Mozilla/5.0'
    }
 
    const res = await fetch('https://claudeai.one/', { headers })
    const html = await res.text()
 
    const dom = new JSDOM(html)
    const doc = dom.window.document
 
    const nonce = doc.querySelector('[data-nonce]')?.getAttribute('data-nonce') || ''
    const postId = doc.querySelector('[data-post-id]')?.getAttribute('data-post-id') || ''
    const botId = doc.querySelector('[data-bot-id]')?.getAttribute('data-bot-id') || ''
 
    const clientId = html.match(/localStorage\.setItem['"]wpaicg_chat_client_id['"],\s*['"](.+?)['"]/)?.[1] || 
      'JHFiony-' + Math.random().toString(36).substring(2, 12)
 
    const form = new FormData()
    form.append('_wpnonce', nonce)
    form.append('post_id', postId)
    form.append('url', 'https://claudeai.one')
    form.append('action', 'wpaicg_chat_shortcode_message')
    form.append('message', text)
    form.append('bot_id', botId)
    form.append('chatbot_identity', 'shortcode')
    form.append('wpaicg_chat_history', '[]')
    form.append('wpaicg_chat_client_id', clientId)
 
    const resPost = await fetch('https://claudeai.one/wp-admin/admin-ajax.php', {
      method: 'POST',
      headers: {
        ...headers,
        ...form.getHeaders()
      },
      body: form
    })
 
    const json = await resPost.json()
    const jawaban = json?.data
 
    if (!jawaban) return reply('[!] Gagal mendapatkan balasan dari Claude.')
 
    await reply(jawaban)
 
  } catch (e) {
    await reply('Terjadi error:\n' + JSON.stringify(e.message || e, null, 2))
  }
 
  break
}
    }
  }
};

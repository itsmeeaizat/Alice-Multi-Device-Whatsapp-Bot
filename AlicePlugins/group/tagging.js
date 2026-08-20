// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['h', 'hidetag', 'totag', 'tagall'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'h':

break;

case 'h':

break;

case 'hidetag': {
  if (!m.isGroup) return XRG();
  if (!isOwner && !isAdmins) return XRA();

  const q = m.text.split(" ").slice(1).join(" "); // tambahkan ini

  const metadata = await Alice.groupMetadata(m.chat);
  const participants = metadata.participants || [];

  if (m.quoted) {
    await Alice.sendMessage(m.chat, {
      forward: m.quoted.fakeObj,
      mentions: participants.map(a => a.id)
    }, { quoted: m });
  } else {
    const teks = q && q.trim() ? q : " ";
    await Alice.sendMessage(m.chat, {
      text: teks,
      mentions: participants.map(a => a.id)
    }, { quoted: m });
  }
}
break;

case 'totag': {
  if (!m.isGroup) return XRG();
  if (!isOwner && !isAdmins) return XRA();
  if (!isBotAdmins) return XRBADM;
  if (!m.quoted) return reply(`❌ Kutip pesan yang mau ditag.`);

  // ambil semua member group
  const metadata = await Alice.groupMetadata(m.chat);
  const participants = metadata.participants.map(a => a.id);

  // cek kalau ada fakeObj atau fallback ke teks
  let forwardMsg;
  if (m.quoted.fakeObj) {
    forwardMsg = { forward: m.quoted.fakeObj };
  } else {
    const content = m.quoted.text || m.quoted.caption || " ";
    forwardMsg = { text: content };
  }

  await Alice.sendMessage(
    m.chat,
    { ...forwardMsg, mentions: participants },
    { quoted: m }
  );
}
break;

case 'tagall': {
  if (!m.isGroup) return XRG()
  if (!isAdmins) return XRA()

  // Ambil metadata grup
  const meta = await Alice.groupMetadata(m.chat).catch(() => null)
  const parts = meta?.participants || []

  // Normalisasi id biar jadi string JID
  const jids = parts.map(p => {
    if (typeof p?.id === 'string') return p.id
    if (p?.id?.user && p?.id?.server) return `${p.id.user}@${p.id.server}`
    return null
  }).filter(Boolean)

  if (!jids.length) return reply('Gagal ambil daftar member.')

  // Total member
  const total = jids.length

  let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q || 'kosong'}*
 ➲ *Total Member : ${total}*\n\n`

  for (let jid of jids) {
    teks += `⭔ @${jid.split('@')[0]}\n`
  }

  await Alice.sendMessage(
    m.chat,
    { text: teks, mentions: jids },
    { quoted: m }
  )
}
break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Group Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\


//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Game Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
    }
  }
};

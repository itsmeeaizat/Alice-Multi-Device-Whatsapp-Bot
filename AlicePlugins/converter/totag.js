// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['totag'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles, quoted, mime, isMedia, isImage, isVideo, isSticker, isAudio } = context;

    switch (command) {
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
    }
  }
};

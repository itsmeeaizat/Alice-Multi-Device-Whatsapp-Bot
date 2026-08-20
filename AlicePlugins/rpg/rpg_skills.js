// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['skill', 'element', 'elementatk', 'learnskill', 'combo', 'mutate', 'spirit', 'bless', 'passive', 'skilltree', 'talent', 'buff', 'debuff', 'blessnpc'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'skill': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.skill ||= 'fireball'

  if (!text) {
    reply(`🔮 Skillmu: *${user.skill}*\nGunakan: *skill fireball @target*`)
    break
  }

  let targetId = m.quoted?.sender || text.split('@')[1]?.trim()?.replace(/[^0-9]/g, '')
  if (!targetId) return reply(`reply target atau sertakan @user.`)
  targetId = targetId.includes('@s.whatsapp.net') ? targetId : targetId + '@s.whatsapp.net'
  initRpgUser(targetId)

  let dmg = 70 + Math.floor(Math.random() * 30)
  let skillName = user.skill
  rpgDb[targetId].exp = Math.max(0, rpgDb[targetId].exp - dmg)

  saveRpg()
  reply(`🔥 *${pushname}* menggunakan *${skillName}* ke musuh!\n- ${dmg} EXP pada target.`)
  break
}

case 'element': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]

  if (user.element) {
    reply(`🔮 Elemenmu sudah dipilih: *${user.element}*`)
    break
  }

  const pilihan = ['api', 'air', 'tanah', 'angin']
  if (!text || !pilihan.includes(text.toLowerCase())) {
    reply(`Pilih elemen: *api*, *air*, *tanah*, *angin*\nContoh: *element api*`)
    break
  }

  user.element = text.toLowerCase()
  saveRpg()
  reply(`✅ Elemenmu kini: *${user.element}*`)
  break
}

case 'elementatk': {
  initRpgUser(sender, pushname)
  if (!text || !m.quoted) return reply(`Gunakan: *elementatk [serangan]* (reply target)`)

  let user = rpgDb[sender]
  let elemen = user.element || 'tanpa elemen'
  let damage = 30 + (user.element === 'api' ? 20 : 0)

  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].hp -= damage
  saveRpg()
  reply(`🌪️ Kamu menyerang dengan elemen *${elemen}*!\nTarget kehilangan ${damage} HP.`)
  break
}

case 'learnskill': {
  initRpgUser(sender, pushname)
  const skillList = ['fireball', 'heal', 'iceblast']
  if (!text || !skillList.includes(text)) return reply(`Skill tersedia: ${skillList.join(', ')}`)
  rpgDb[sender].skill = text
  saveRpg()
  reply(`🎓 Kamu mempelajari skill *${text}*`)
  break
}

case 'combo': {
  initRpgUser(sender, pushname)
  let u = rpgDb[sender]
  let comboDmg = u.class === 'knight' ? 100 : u.class === 'mage' ? 90 : 80
  reply(`🗡️ Kamu gunakan COMBO! DMG: ${comboDmg}`)
  break
}

case 'mutate': {
  initRpgUser(sender, pushname)
  let skill = ['firewave', 'windblast', 'darkspike']
  let acak = skill[Math.floor(Math.random() * skill.length)]
  rpgDb[sender].skill = acak
  saveRpg()
  reply(`🧬 Skillmu berubah menjadi *${acak}*`)
  break
}

case 'spirit': {
  reply(`🪶 Kamu memanggil roh petarung! Dalam 1 jam ke depan, DMG +20.`)
  break
}

case 'bless': {
  let buff = ['+10 ATK', '+20 DEF', '+15 HP']
  reply(`💠 Kamu diberkati hari ini!\nEfek: ${buff[Math.floor(Math.random() * buff.length)]}`)
  break
}

case 'passive': {
  initRpgUser(sender, pushname)
  let passive = rpgDb[sender].passive || 'Belum ada'
  reply(`🌀 *Skill Pasif:* ${passive}`)
  break
}

case 'skilltree': {
  initRpgUser(sender, pushname)
  reply(`🌳 *Skill Tree*\n- Fireball → Firestorm\n- Heal → Heal All\n- Slash → Blade Tornado`)
  break
}

case 'talent': {
  initRpgUser(sender, pushname)
  let kelas = rpgDb[sender].class || 'belum memilih'
  let teks = {
    knight: '⚔️ Damage +10 saat duel',
    mage: '🔮 Skill cooldown -10%',
    archer: '🏹 Critical +15%'
  }
  reply(`💡 *Talent Class ${kelas}:*\n${teks[kelas] || 'Belum tersedia'}`)
  break
}

case 'buff': {
  initRpgUser(sender, pushname)
  rpgDb[sender].buff = 'atk+10'
  saveRpg()
  reply(`🔆 Kamu menerima buff: ATK +10`)
  break
}

case 'debuff': {
  if (!m.quoted) return reply('reply target untuk diberi debuff.')
  let target = m.quoted.sender
  initRpgUser(target)
  rpgDb[target].debuff = 'burn'
  saveRpg()
  reply(`🔥 Musuh terkena efek *burn*!`)
  break
}

case 'blessnpc': {
  initRpgUser(sender, pushname)
  let bonus = ['+10 HP', '+5 DEF', '+100 EXP']
  let buff = bonus[Math.floor(Math.random() * bonus.length)]
  reply(`✨ NPC memberkati kamu!\nEfek: ${buff}`)
  break
}
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['timetravel', 'reincarnate', 'distortion', 'level', 'season', 'weather', 'jobchange', 'prestige', 'achieve'],
  operate: async (context) => {
    const { Alice, m, text, q, prefix, command, reply, xy, XReaction, isBan, Xban, isOwner, isPrem, XRP, isGroup, isBotAdmins, isAdmins, fs, axios, fetch, cheerio, crypto, db, moment, proto, generateWAMessageFromContent, prepareWAMessageMedia, getBuffer, fetchJson, ownername, botname, channel, pushname, alice, Styles } = context;

    switch (command) {
case 'timetravel': {
  initRpgUser(sender)
  let user = rpgDb[sender]
  if (user.timetravel && Date.now() - user.timetravel < 86400000)
    return reply(`⏳ Kamu sudah melakukan perjalanan waktu hari ini.\nCoba lagi besok.`)

  user.timetravel = Date.now()
  let reward = Math.floor(Math.random() * 1000 + 1000)
  user.gold += reward
  saveRpg()
  return reply(`🌀 Kamu melakukan perjalanan waktu dan menemukan ${reward} gold dari masa lalu!`)
}

case 'reincarnate': {
  initRpgUser(sender)
  let user = rpgDb[sender]
  if (user.level < 30) return reply(`🧘 Hanya yang sudah mencapai level 30 bisa bereinkarnasi.`)

  user.level = 1
  user.exp = 0
  user.gold = 0
  user.reincarnation = (user.reincarnation || 0) + 1
  user.passiveBonus = (user.passiveBonus || 0) + 5
  saveRpg()
  return reply(`🔁 Kamu telah bereinkarnasi!\nBonus permanen: +5% power setiap kali kamu bereinkarnasi.`)
}

case 'distortion': {
  let efek = ['🌪️ Kabut misterius mengelilingimu', '🪞 Cermin waktu retak', '🕳️ Lubang ke dimensi lain terbuka']
  let loot = ['potion', 'elixir', 'fabric', 'bone', 'gold']
  let dapat = loot[Math.floor(Math.random() * loot.length)]
  let jumlah = Math.floor(Math.random() * 3 + 1)

  initRpgUser(sender)
  let user = rpgDb[sender]
  for (let i = 0; i < jumlah; i++) user.inv.push(dapat)
  saveRpg()

  return reply(`${efek[Math.floor(Math.random() * efek.length)]}\n\n🎁 Kamu mendapat ${jumlah}x *${dapat}* dari zona distorsi.`)
}

case 'level': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  let persen = ((user.exp / user.maxExp) * 100).toFixed(1)

  let teks = `📈 *LEVEL PROGRESS*

🎚️ Level: ${user.level}
🔸 Exp: ${user.exp} / ${user.maxExp} (${persen}%)
🧠 Job: ${user.job || 'None'}
🧬 Skill: ${user.skill?.join(', ') || 'Belum ada'}

Ketik *work*, *quest*, atau *hunt* untuk dapat EXP!
`
  return reply(teks)
}

case 'season': {
  const musim = ['semi', 'panas', 'gugur', 'salju']
  const active = musim[Math.floor(Math.random() * musim.length)]
  global.rpgSeason = active
  reply(`📆 Musim saat ini adalah *${active.toUpperCase()}*.`)
  break
}

case 'weather': {
  const cuaca = ['cerah', 'hujan', 'badai', 'berkabut']
  const now = cuaca[Math.floor(Math.random() * cuaca.length)]
  global.rpgWeather = now
  reply(`🌦️ Cuaca hari ini: *${now.toUpperCase()}*`)
  break
}

case 'jobchange': {
  initRpgUser(sender, pushname)
  if (rpgDb[sender].level < 10) return reply(`🔒 Butuh level 10 untuk ganti class.`)
  rpgDb[sender].class = null
  saveRpg()
  reply(`🧠 Kamu dapat memilih class baru dengan perintah *class [nama]*`)
  break
}

case 'prestige': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  if (user.level < 50) return reply(`📈 Minimal level 50 untuk prestige.`)

  user.level = 1
  user.exp = 0
  user.coin += 1000
  user.statBoost = (user.statBoost || 0) + 1
  saveRpg()
  reply(`🏅 Kamu melakukan *Prestige*! Stat boost permanen +1.`)
  break
}

case 'achieve': {
  initRpgUser(sender, pushname)
  let user = rpgDb[sender]
  user.achieve ||= []
  if (!user.achieve.length) return reply(`🎖️ Kamu belum punya pencapaian.`)

  reply(`🏆 *Pencapaianmu:*\n${user.achieve.map((a, i) => `${i + 1}. ${a}`).join('\n')}`)
  break
}

case 'timetravel': {
  let kemungkinan = ['+200 EXP', '-100 coin', 'skip cooldown']
  let hasil = kemungkinan[Math.floor(Math.random() * kemungkinan.length)]
  reply(`⌛ Kamu menjelajah waktu...\nEfek: ${hasil}`)
  break
}

case 'weather': {
if (isBan) return XRB()
await XReaction()
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           Alice.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Search Features End
//📈————————————————————————— [ Batas Fitur Sayangg ] —————————————————————————📉\\
           
//📈————————————————————————— [ © Aizat ] —————————————————————————📉\\
//————————————————————————//
// Islami Features
//📈————————————————————————— [ Features ↓↓ ] —————————————————————————📉\\
    }
  }
};

// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['cuaca', 'cuacakota'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      quoted,
      reply,
      AliceCmd,
      fetch
    } = context;

{
    if (!text) return reply(`Masukkan nama kota!\nContoh: ${AliceCmd} pandeglang`)

    try {
        let res = await fetch(`https://fastrestapis.fasturl.cloud/search/weather?location=${encodeURIComponent(text)}`)
        let json = await res.json()

        if (json.status !== 200) {
            return reply('Gagal mengambil data cuaca, pastikan kota valid.')
        }

function getWeatherEmoji(condition) {
    condition = condition.toLowerCase()
    if (condition.includes('cloud')) return '☁️'
    if (condition.includes('rain')) return '🌧️'
    if (condition.includes('sun')) return '☀️'
    if (condition.includes('clear')) return '🌞'
    if (condition.includes('storm')) return '⛈️'
    if (condition.includes('snow')) return '❄️'
    if (condition.includes('fog')) return '🌫️'
    return '⛅'
}

        let r = json.result
        let emojiCuaca = getWeatherEmoji(r.condition)

        // 1
        await Alice.sendMessage(m.chat, {
            location: {
                degreesLatitude: parseFloat(r.latitude),
                degreesLongitude: parseFloat(r.longitude)
            }
        }, { quoted: m })

        // 2
        let caption = `
*「 INFO CUACA 」*
📍 *Kota:* ${r.city}
${emojiCuaca} *Kondisi:* ${r.condition}
🌡️ *Suhu:* ${r.temperature}
💧 *Kelembaban:* ${r.humidity}
🌬️ *Angin:* ${r.wind}
🌧️ *Curah Hujan:* ${r.precipitation}
☁️ *Tutup Awan:* ${r.cloudCover}
🔭 *Jarak Pandang:* ${r.visibility}
🌅 *Matahari Terbit:* ${r.sunrise}
🌇 *Matahari Terbenam:* ${r.sunset}
`

        await reply(caption)
    } catch (e) {
        console.log('Error saat mengambil data cuaca:', e)
        reply('Terjadi kesalahan saat memproses permintaan cuaca.')
    }
}
  }
};

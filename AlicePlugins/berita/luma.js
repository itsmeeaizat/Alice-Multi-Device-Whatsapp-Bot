// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['img2video', 'luma'],
  operate: async (context) => {
    const {
      Alice,
      m,
      text,
      isPrem,
      mime,
      quoted,
      reply,
      XReaction,
      AliceCmd,
      qmsg,
      fs
    } = context;

{
if (!isPrem) return XRP()
    const axios = require('axios');
    try {
      let media = await Alice.downloadAndSaveMediaMessage(qmsg);
      if (/image/.test(mime)) {
          await await XReaction(); 
              let url = await uploadToCatbox(media);
          const response = await axios.post(`${apii.xterm.url}/api/img2video/luma?key=${apii.xterm.key}${text ? ("&prompt=" + text) : ""}`, media, {
                headers: {
                    'Content-Type': 'application/octet-stream'
                },
                responseType: 'stream'
            })
             let rsp = "rfz"
            response.data.on('data', async (chunk) => {
                try {
                    const eventString = chunk.toString()
                    const eventData = eventString.match(/data: (.+)/)
                    if (eventData && eventData[1]) {
                        let data
                           try {
                              data = JSON.parse(eventData[1])
                            } catch (e) {
                              console.loc(eventData[1])
                              data = {}
                            }
                        switch (data.status) {
                            case "processing":
                              reply("Processing... _ini mungkin memakan waktu sekitar 1-5 menit!_")
                            break;
                            case "failed":
                                await reply(data.status)
                                response.data.destroy()
                                break;
                            case "completed":
                                await Alice.sendMessage(m.chat, { video: { url: data.video.url }, mimetype: "video/mp4" }, { quoted: m })
                                response.data.destroy()
                                break;
                            default:
                                console.log('Unknown status:', data)
                        }
                    }
                } catch (e) {
                    console.error('Error processing chunk:', e.message)
                    response.data.destroy()
                    reply("Err!!")
                }
            })
      } else {
          reply(`reply/kirim gambar dengan caption ${AliceCmd}`);
      }
      await fs.unlinkSync(media);
    } catch (err) {
      reply(`Error: ${err.message}`);
    }
}
  }
};

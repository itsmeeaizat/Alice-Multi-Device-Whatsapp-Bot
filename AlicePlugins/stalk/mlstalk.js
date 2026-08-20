// ALICE MULTI DEVICE, AIZAT, MADE IN INDONESIA
module.exports = {
  command: ['mlstalk'],
  operate: async (context) => {
    const {
      text,
      isBan,
      reply,
      XReaction,
      XRB,
      Alice,
      fetchJson
    } = context;

{
if (isBan) return XRB()
await XReaction()
  try {
    if (!text) return reply(`Contoh: ${AliceCmd} 109088431, 2558`)
    const [id, zoneId] = text.split(',') || text.split(', ')
    if (!id || !zoneId) return reply('Masukkan id dan zoneid')

    const apiUrl = await fetchJson(`https://vapis.my.id/api/ml-stalk?id=${id}&zoneid=${zoneId}`)
    const mlData = apiUrl.data.data
    if (mlData) {
      const product = mlData.product
      const item = mlData.item
      const response = `
*Game:* ${product.name}
*Item:* ${item.name}
*Harga:* ${item.price}
*Username Game:* ${mlData.gameDetail.userName}
*Channel Pembayaran:* ${mlData.paymentName}
*Deskripsi Produk:* ${product.description}
*Gambar Produk:* ${product.imageDisplay}
      `
      reply(response)
    } else {
      reply('Data tidak ditemukan')
    }
  } catch (err) {
    console.error(err)
    reply('Terjadi kesalahan')
  }
}
  }
};

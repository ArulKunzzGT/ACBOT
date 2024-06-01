const axios = require('axios')
const handler = async (m, { conn, text, command }) => {
    await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
	const man = await axios.get(`https://aemt.me/gempa`)
    const res = `*INFO GEMPA*
Tanggal   *:* ${man.data.result.tanggal}
Jam       *:* ${man.data.result.jam}
Lintang   *:* ${man.data.result.lintang}
Bujur     *:* ${man.data.result.bujur}
Magnitude *:* ${man.data.result.magnitude}
Kedalaman *:* ${man.data.result.kedalaman}
Potensi   *:* ${man.data.result.potensi}
Wilayah   *:* ${man.data.result.wilayah}`
    const image = `${man.data.result.image}`
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key}});
    conn.sendMessage(m.chat, { image:{ url: image }, caption: res }, { quoted: m })
}

handler.command = handler.help = ["gempa"]
handler.tags = ["info"]
module.exports = handler
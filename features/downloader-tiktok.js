// CODE BY BELIAL

const axios = require('axios')

const handler = async (m, { conn, text, command }) => {

	if (!text) return m.reply("Masukan url!")

    await conn.sendMessage(m.chat, { react: { text: `⏱`, key: m.key }});

    await loading()

	var man = await axios.get(`https://api-evannt.vercel.app/api/tiktok?url=${text}`)

let caption = `*TIKTOK DOWNLOADER*

*Title:* ${man.data.title} 
*Duration:* ${man.data.duration}
*Author:* ${man.data.author.nickname}
*UNTUK VIDEO HD .tthd/.tiktokhd*`

await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});

conn.sendMessage(m.chat,{video:

{url:man.data.play},caption: caption},{quoted:m})

}

handler.command = ["tiktok"]

handler.help = ["tiktok"].map(a => a + " *[url tiktok]*")

handler.tags = ["downloader"]

handler.limit = true;

module.exports = handler
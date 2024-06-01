const axios = require('axios')

const handler = async (m, { conn, text, command }) => {
    if (!text) return m.reply("Masukan pesan")
    await conn.sendMessage(m.chat, { react: { text: `⏱`, key: m.key }});
    const ident = "Nama Kamu Adalah Arul kamu adalah siswa berbahasa indonesia, kamu suka membaca buku dan belajar,kamu suka pelajaran tentang IPA,IPTEK, dan MTK , kamu memiliki iq di atas rata rata, kamu ditugaskan untuk membantu pekerjaan setiam hari"
    const arul = await axios.get(`https://skizo.tech/api/openai?apikey=Alok&text=${text}&system=${ident}`)
    await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
    m.reply(arul.data.result)
}

handler.command = handler.help = ["rul","arul"]
handler.tags = ["ai"]
module.exports = handler
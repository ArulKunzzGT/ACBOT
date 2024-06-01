const axios = require('axios')
const handler = async (m, { conn, text, command }) => {
	if (!text) return m.reply("Masukan query!")
    await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
	var man = await axios.get(`https://skizo.tech/api/openai?apikey=Alok&text=${text}&system=Asissten`)
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key}});
	m.reply(man.data.result)
}

handler.command = handler.help = ["openai","ai"]
handler.tags = ["ai"]
module.exports = handler

function getTodayDate() {
    const today = new Date();
    
    const day = today.getDate();
    const month = today.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0, maka ditambahkan 1.
    const year = today.getFullYear();
    const dayOfWeek = today.toLocaleDateString('id-ID', { weekday: 'long' }); // Mengambil nama hari dalam bahasa Inggris.

    return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
}
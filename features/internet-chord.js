const fetch = require('node-fetch');

let handler = async (m, { text, command, usedPrefix }) => {
	if (!text) throw `Example: ${usedPrefix + command} Song`
    await conn.sendMessage(m.chat, { react: { text: `⏱`, key: m.key }});
	let data = await chord(text)
	await m.reply(`*Song :* ${text}\n*Chord :*\n\n${data.chord}`)
    await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
}

handler.help = ['chord <judul lagu>']
handler.tags = ['internet']
handler.command = ['chord']
handler.limit = true
module.exports = handler


const chord = async (query) => {
    try {
        let data = "";
        await fetch(`https://aemt.me/chord?query=${query}`).then((res) => {
            data = res;
        });       
        let jsonData = "";
        await data.json().then((res) => {
            jsonData = res;
        });
        let result = "";
        await new Promise((resolve) => {
            setTimeout(() => {
                result = jsonData.result;
                resolve();
            }, 1000);
        });
        return result;
    } catch (error) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ error: error.mesaage });
            }, 1000);
        });
    }
}

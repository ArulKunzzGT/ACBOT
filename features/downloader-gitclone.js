const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

async function isUrlValid(url) {
  // Memperbaiki regex untuk spesifik URL GitHub
  return regex.test(url)
}

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let waitMessage = "Mohon tunggu sebentar..."; // Mendefinisikan pesan tunggu
  if (!text) throw `*• Contoh:* ${usedPrefix + command} *[url github]*`
  m.reply(waitMessage)
  if (!isUrlValid(args[0])) return m.reply(`*[ ! ] URL GitHub tidak valid*`)
  let matches = args[0].match(regex)
  if (!matches) return m.reply(`*[ ! ] URL GitHub tidak valid*`)
  let [_, user, repo] = matches
  let url = `https://api.github.com/repos/${user}/${repo}/zipball`
  let name = `${encodeURIComponent(repo)}.zip`
  try {
    await conn.sendMessage(m.chat, { document: { url: url }, fileName: name, caption: `*[ ✓ ] Hasil dari:* ${text}` }, { quoted: m })
  } catch (error) {
    m.reply(`*[ ! ] Terjadi kesalahan saat mengirim file*`)
  }
}

handler.help = ['gitclone'].map(a => a + " *[url github]*")
handler.tags = ['downloader']
handler.command = /^gitclone$/i

handler.limit = true
handler.register = true

module.exports = handler
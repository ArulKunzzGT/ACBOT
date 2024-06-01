const { catbox } = require('../function/uploader')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (/image/g.test(mime) && !/webp/g.test(mime)) {
  m.reply(wait)
  await conn.sendMessage(m.chat, { react: { text: `⏱`, key: m.key }});
  let media = await q.download()
  let mannr = await catbox(media)
  let mmk = `https://skizo.tech/api/toanime?apikey=Alok&url=${mannr}`
  conn.sendMessage(m.chat, { image:{ url: mmk }, caption: "Nihh Kak >//<" }, { quoted: m })
  } else {
		m.reply(`_Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim_`)
    await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
	}
};

handler.command = handler.help = ['toanime'];
handler.tags = ['maker'];
handler.premium = false;
handler.limit = true;

module.exports = handler;
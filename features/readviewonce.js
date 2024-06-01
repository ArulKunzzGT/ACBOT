let handler = async (m, { conn, text }) => {
  m.reply(
    pickRandom(['Yap', 'Sepertinya Begitu', 'Kayaknya', 'Kayaknya nggak', 'Nggak', 'Nggak mungkin']),
    null,
    m.mentionedJid ? {
      contextInfo: {
        mentionedJid: m.mentionedJid
      }
    } : {}
  );
};

handler.help = ['apakah <teks>?'];
handler.tags = ['kerang'];
handler.command = ['apakah']
handler.owner = false;
handler.fail = null
module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/ArulKunzzGT
#####################################*/

let handler = async (m, {
    conn
}) => {

    let cmdList = Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.* ${value.locked ? '🔒 ' : '🔓'}${key} : ${value.text}`).join('\n');
    let str = cmdList ? `📜 *DAFTAR CMD* 📜\n${cmdList}` : 'Tidak ada CMD tersedia';

    conn.reply(m.chat, str, m, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    });
};

handler.help = ['listcmd'];
handler.tags = ['database'];
handler.command = ['listcmd'];

module.exports = handler
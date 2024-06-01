// Untuk membuat backup database.json dan mengirimkannya ke nomorown setiap jam 3 pagi, Anda dapat menggunakan cron job scheduler seperti node-cron.

const fs = require("fs");
const cron = require("node-cron");

module.exports = (conn) => {
  cron.schedule('0 3 * * *', async () => {
    const q = {
      key: {
        remoteJid: "status@broadcast",
        participant: "0@s.whatsapp.net",
        fromMe: false,
        id: "",
      },
      message: {
        conversation: "Berhasil mencadangkan database.json",
      },
    };
    let sesi = await fs.readFileSync("./database.json");
    await conn.sendMessage(
      `${nomorown}@s.whatsapp.net`,
      {
        document: sesi,
        mimetype: "application/json",
        fileName: "database.json",
      },
      { quoted: q },
    );
  });
};

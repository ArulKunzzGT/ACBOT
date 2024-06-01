const os = require('os');

// Fungsi untuk mengonversi detik ke format waktu yang lebih mudah dibaca
function formatUptime(seconds) {
  const days = Math.floor(seconds / (3600*24));
  seconds  -= days*3600*24;
  const hrs   = Math.floor(seconds / 3600);
  seconds  -= hrs*3600;
  const mnts = Math.floor(seconds / 60);
  seconds  -= mnts*60;
  return `${days} days, ${hrs} hours, ${mnts} minutes, ${Math.floor(seconds)} seconds`;
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let hostname = process.env.npm_package_name || 'Unknown Hostname'; // Menambahkan fallback untuk hostname
  let serverInfo = `┌  ◦ *Server Info:*
│  ◦ *Hostname:* ${hostname}
│  ◦ *Type:* ${os.type()}
│  ◦ *Platform:* ${os.platform()}
│  ◦ *Release:* ${os.release()}
│  ◦ *Home:* ${os.homedir()}
│  ◦ *TmpFolder:* ${os.tmpdir()}
│  ◦ *AuthFolder:* /KaguyaSs
│  ◦ *Uptime:* ${formatUptime(os.uptime())} // Menggunakan fungsi formatUptime
│  ◦ *Total Memory:* ${Math.round(os.totalmem() / 1024 / 1024)} MB
│  ◦ *Free Memory:* ${Math.round(os.freemem() / 1024 / 1024)} MB
└——`;

  m.reply(serverInfo)
}
handler.help = ["ping"].map(a => a + ' *[Info speed]*')
handler.tags = ["info","main"]
handler.command = ["ping"]
module.exports = handler
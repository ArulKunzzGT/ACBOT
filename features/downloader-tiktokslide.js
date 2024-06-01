const fetch = require('node-fetch');

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) {

    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSNbrfcGw/`;

  }

  if (!args[0].match(/tiktok/gi)) {

    throw `URL Tidak Ditemukan!`;

  }

  m.reply('*Mohon tunggu...*');

  try {

    const api = await fetch(`https://api.junn4.my.id/download/tiktokslide?url=${args[0]}`);

    const res = await api.json();

    const { desc, content, audio } = res.result;

    for (let i of content) {

      await sleep(3000);

      conn.sendFile(m.chat, i, null, `*Deskripsi:* ${desc}\n*Audio:* ${audio.name}`, m);

    }

  } catch (e) {

    console.log(e);

    throw `🛑 *Terjadi kesalahan!*`;

  }

};

handler.command = handler.help = ['tiktokslide', 'ttslide', 'slide'];

handler.tags = ['downloader'];

handler.limit = true;

handler.group = false;

handler.premium = false;

handler.owner = false;

handler.admin = false;

handler.botAdmin = false;

handler.fail = null;

handler.private = false;

module.exports = handler;

function sleep(ms) {

  return new Promise(resolve => setTimeout(resolve, ms));

}
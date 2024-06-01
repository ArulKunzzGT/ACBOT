let NeoApi = require("@neoxr/wb");
let b = new NeoApi();
let fs = require('fs');
let fetch = require('node-fetch');
let moment = require('moment-timezone');
let axios = require('axios')

let handler = m => m;
handler.all = async function (m) {
    let name = await conn.getName(m.sender);
    let pp = global.thumb;
    try {
        pp = await this.profilePictureUrl(m.sender, 'image');
    } catch (e) {
    } finally {
        global.rose = 'Rk-SyaiiPv';
        global.btc = 'Lio';
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"]);
        global.fetch = require('node-fetch');
        global.scraper = require("../scrape/api")
        global.Scraper = { 
           Api: require('../scrape/api'),
           Gpt: require("../scrape/gpt"),
           Canvas: require("../scrape/canvas"),
           Random: require("../scrape/random"),
           Download: require("../scrape/download"),
           Other: require("../scrape/scraper"),
           Tools: require("../scrape/tools"),
           Ai: require("../scrape/ai")
        }
       
        global.canvas = require('../scrape/canvas');
        global.Func = b.Function;
        global.botdate = ClockString();
        global.axios = require('axios');

        const _uptime = process.uptime() * 1000;

        global.fkontak = {
            "key": {
                "participants": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
            },
            "message": {
                "contactMessage": {
                    "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            },
            "participant": "0@s.whatsapp.net"
        };
    }
global.loading = async function loading () {
var arr = [
"*🕛L*",
"*🕐Lo*",
"*🕑Loa*",
"*🕒Load*",
"*🕓Loadi*",
"*🕔Loadin*",
"*🕕Loading*",
"🕖Loading",
"🕗Loading",
"🕘Loading",
"🕙Loading",
"🕚Loading",
"*Success*, _wait a moment is sending the file_"
]
let load = await conn.sendMessage(m.chat, {text: '🕛'},{quoted:m})
for (let i = 0; i < arr.length; i++) {
await conn.sendMessage(m.chat, {text: arr[i], edit: load.key },{quoted:m});
}
}

};

module.exports = handler;

global.fetchJson = exports.fetchJson = async (url, options) => {

    try {

        options ? options : {}

        const res = await axios({

            method: 'GET',

            url: url,

            headers: {

                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'

            },

            ...options

        })

        return res.data

    } catch (err) {

        return err

    }

}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH');
    let res = "malam Sek";
    if (time >= 4) {
        res = "Selamat pagi 🌅";
    }
    if (time > 10) {
        res = "Selamat siang kak ⛅";
    }
    if (time >= 15) {
        res = "selamat sore kak 🌄";
    }
    if (time >= 18) {
        res = "selamat malam kak 🌌";
    }
    return res;
}
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}

function ClockString() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const clockString = `Date: ${day}-${month}-${year}\nTime: ${hours}:${minutes}:${seconds}`;
    return clockString;
}
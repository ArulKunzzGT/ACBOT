global.owner = [

  ["6282328036597"],

]; 

global.numberbot = "6281327106819";

global.nameowner = "👤AlokTzy",

global.nomorown = "6282328036597";

/*Ini Isi dengan Payment kalian masing masing*/

global.dana = "";

global.pulsa = "";

global.ovo = "";

/*Apa Itu apikey ??*/

global.APIs = {}

global.APIKeys = {}

//Other Settings


global.namebot = "AlokBOT";

global.sgc = "https://chat.whatsapp.com/BDcEhoUgnwZEGNLFN2rSla";

global.isPairing = true //Mau pake pairing? true = idup, false = mati

global.sig = "https://chat.whatsapp.com/BDcEhoUgnwZEGNLFN2rSla";

global.swa = "wa.me/6282328036597";

global.version = "1.0";

global.access_denied = "https://telegra.ph/Starboy-ambatukam-03-28";

global.wm = "AlokTzy BOT"

global.done = "```© AlokTzy Renewd 2024```";

global.icon = "https://telegra.ph/Starboy-ambatukam-03-28"

global.fla =

  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text="

global.wait = "_Loading_"

global.error = "! Error Command Failed"
global.eror = "! Error Command Failed"

global.packname = "© AlokBot";

global.author = "Made by AlokOWN"

//Ini Isi pakai video & poto lu

global.gif = "https://telegra.ph/Starboy-ambatukam-03-28"; 

global.thumb = "https://telegra.ph/Starboy-ambatukam-03-28"

global.multiplier = 45;

global.rpg = {

  emoticon(string) {

    string = string.toLowerCase();

    let emot = {

      exp: "✉️",

      money: "💵",

      potion: "🥤",

      diamond: "💎",

      common: "📦",

      uncommon: "🎁",

      mythic: "🗳️",

      legendary: "🗃️",

      pet: "🎁",

      sampah: "🗑",

      armor: "🥼",

      sword: "⚔️",

      kayu: "🪵",

      batu: "🪨",

      string: "🕸️",

      kuda: "🐎",

      kucing: "🐈",

      anjing: "🐕",

      petFood: "🍖",

      gold: "👑",

      emerald: "💚",

    };

    let results = Object.keys(emot)

      .map((v) => [v, new RegExp(v, "gi")])

      .filter((v) => v[1].test(string));

    if (!results.length) return "";

    else return emot[results[0][0]];

  },

};

const Jimp = require('jimp');

const fetch = require('node-fetch');

let resizeThumb =  resize(thumb, 300, 250)

    global.Thumbnails = resizeThumb

    

/*====[ FAKE THUMBNAIL ACCESS DENIED ]======*/

       global.danied = {

        contextInfo: {

            mentionedJid: [],

            groupMentions: [],

            isForwarded: true,

            forwardedNewsletterMessageInfo: {

                newsletterJid: '120363268204174460@newsletter',

                newsletterName: "Alok Botz",

                serverMessageId: -1

            },

            forwardingScore: 256,

externalAdReply: {

        title: `[ x ] Your Acces has Danied`,

        body: null,

        thumbnailUrl: access_denied,

        sourceUrl: sgc,

        mediaType: 1,

        renderLargerThumbnail: true

          }

        }

    }

/*========[ GLOBAL ADREPLY ]============*/

   global.adReply = {

        contextInfo: {

            mentionedJid: [],

            groupMentions: [],

            isForwarded: true,

            forwardedNewsletterMessageInfo: {

                newsletterJid: '120363268204174460@newsletter',

               newsletterName: "Alok Botz",

                serverMessageId: -1

            },

            forwardingScore: 256,

externalAdReply: {

        title: `☢️ AlokTzy ver 5.0 - Belial`,

        body: wm,

        thumbnailUrl: thumb,

        sourceUrl: "",

        mediaType: 1,

        renderLargerThumbnail: true

          }

        }

    }

/*=========[ FAKE IG ( SMALL AD REPLY ) ]==============*/

  global.fakeig = {

        contextInfo: {

            mentionedJid: [],

            groupMentions: [],

            isForwarded: true,

            forwardedNewsletterMessageInfo: {

                newsletterJid: '120363268204174460@newsletter',

               newsletterName: "Alok Botz",

                serverMessageId: -1         

            },

            forwardingScore: 256,

externalAdReply: {

        title: `☢️ AlokTzy -- Simple WhatsApp bot\n• Version: ${global.version}`,

        body: wm,

        thumbnailUrl: icon,

        sourceUrl: "",

        mediaType: 1,

        renderLargerThumbnail: false

          }

        }

    }

let fs = require("fs");

let file = require.resolve(__filename);

fs.watchFile(file, () => {

  fs.unwatchFile(file);

  console.log("Update/saving settings.js");

  delete require.cache[file];

  require(file);

});

async function resize(url, width, height, referer = null) {

    try {

        const fetchOptions = {

            redirect: 'follow',

            headers: {},

        };

        if (referer) {

            fetchOptions.headers['Referer'] = referer;

        }

        const response = await fetch(url, fetchOptions);

        if (response.ok) {

            const finalUrl = response.url;

            const arrayBuffer = await response.arrayBuffer();

            return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));

        } else {

            throw new Error(`HTTP error! Status: ${response.status}`);

        }

    } catch (error) {

        console.error('Error:', error.message);

        try {

            const undiciFetchOptions = {

                redirect: 'follow',

                headers: {},

            };

            if (referer) {

                undiciFetchOptions.headers['Referer'] = referer;

            }

            const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer());

            return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));

        } catch (retryError) {

            console.error('Retry Error:', retryError.message);

            return Buffer.from([]);

        }

    }

}

function pickRandom(list) {

    return list[Math.floor(list.length * Math.random())];

}
// Auto bio by https://github.com/ArulKunzzGT
const os = require('os');

function updateProfileStatusForever() {
  conn.updateProfileStatus(`${namebot} has been active since ${Func.toTime(process.uptime() * 1000)} ago`);
  setTimeout(updateProfileStatusForever, 1000); // 1000 milidetik = 1 detik

}

updateProfileStatusForever();

// cadangan
// conn.updateProfileStatus(`${namebot} has been active since ${Func.toTime(process.uptime() * 1000)} ago`).catch(_=>_)
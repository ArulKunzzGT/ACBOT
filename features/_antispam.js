const {
    performance
} = require('perf_hooks');

const SPAM_THRESHOLD = 5;
const COOLDOWN_DURATION = 10000;
const BAN_DURATION = 5000;
let handler = m => m;
handler.all = async function (m) {
  async function before(m) {
    const users = global.db.data.users;
    const chats = global.db.data.chats;

    if (
        chats[m.chat].antiSpam &&
        !m.isBaileys &&
        !['protocolMessage', 'pollUpdateMessage', 'reactionMessage'].includes(m.mtype) &&
        m.msg &&
        m.message &&
        m.key.remoteJid === m.chat &&
        !users[m.sender].banned &&
        !chats[m.chat].isBanned
    ) {
        this.spam = this.spam || {};
        this.spam[m.sender] = this.spam[m.sender] || {
            count: 0,
            lastspam: 0
        };

        const now = performance.now();
        const timeDifference = now - this.spam[m.sender].lastspam;

        if (timeDifference < COOLDOWN_DURATION) {
            this.spam[m.sender].count++;

            if (this.spam[m.sender].count >= SPAM_THRESHOLD) {
                users[m.sender].banned = true;
                this.spam[m.sender].lastspam = now + BAN_DURATION;

                setTimeout(() => {
                    users[m.sender].banned = false;
                    this.spam[m.sender].count = 0;
                    m.reply(`✅ *Cooldown selesai*\nAnda bisa mengirim pesan lagi.`);
                }, BAN_DURATION);

                const remainingCooldown = Math.ceil((this.spam[m.sender].lastspam - now) / 1000);
                const message = m.mtype.replace(/message$/i, '').replace('audio', m.msg.ptt ? 'PTT' : 'audio').replace(/^./, v => v.toUpperCase()) || 'Unknown';
                return m.reply(`❌ *Mohon jangan spam ${message}*\nTunggu setelah ${remainingCooldown} detik`);
            }
        } else {
            this.spam[m.sender].count = 0;
        }

        this.spam[m.sender].lastspam = now;
    }
}

module.exports = {
 before
};
}
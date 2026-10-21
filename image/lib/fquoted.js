const fs = require('fs')

const fquoted = {
chanel: {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "13135550202@s.whatsapp.net"
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: "120363420027077271@newsletter",
newsletterName: "Free Script 2025 - 2026",
caption: "—͟͞͞𝐗�? | Bít.ly/~´𝙍𝙮𝙪𝙠𝙞𝙨𝙖𝙣;🇯🇵",
inviteExpiration: "1757494779"
}
}
}
};

module.exports = { fquoted };

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
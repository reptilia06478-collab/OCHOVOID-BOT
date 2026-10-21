const fs = require('fs')

const config = {
    owner: "6283143495129",
    botNumber: "-",
    setPair: "OCHOVOID",
        thumbUrl: "https://files.catbox.moe/ostnlj.jpg",
    session: "sessions",
    status: {
        public: true,
        terminal: true,
        reactsw: false,
    },
    message: {
        premium: " `anda tidak terdaftar di dalam premium` ",
        owner: " `anda tidak terdaftar di dalam owner` ",
        group: " `di dalam grup bang` ",
        admin: " `khusus admin bang` ",
        done: " `done abang awak` ",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "OchoVoid",
        packname: 'OchoVoid',
        description: "OchoVoid || AlLuffy And Ryukisan",
        author: 'https://www.kyuurzy.tech',
        footer: "OchoVoid"
    },
    newsletter: {
        name: "Free Script 2025 - 2026",
        id: "120363420027077271@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/-id",
        GitHub: "https://github.com/kiuur",
        Telegram: "https://t.me/alluffystore",
        ChannelWA: "https://whatsapp.com/channel/0029Vb5ySANCMY0NeYBHA32o"
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})

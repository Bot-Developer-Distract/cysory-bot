const Discord = require("discord.js")
module.exports = {
    commands: ['BKAV'],
    description: 'BKAV joke',

    callback: (message, args) => {
        message.channel.send("Bắc Kì Ăn Vạ: hãng công nghệ nổ nhất thế giới")
    }
}
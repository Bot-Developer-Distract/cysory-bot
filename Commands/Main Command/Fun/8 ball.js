const Discord = require("discord.js")
module.exports = {
    commands: ['8 ball'],
    description: 'random number',

    callback: (message, args) => {
        const cmd = ball[Math.floor(Math.random() * 100)]
        message.channel.send(cmd)
    }
}
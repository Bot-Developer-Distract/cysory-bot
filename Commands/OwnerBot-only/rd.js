const Discord = require("discord.js")
module.exports = {
    commands: ['rd'],
    description: 'random number',

    callback: (message, args) => {
        const cmd = Math.floor(Math.random() * 800000000) + 234628
        message.channel.send(`${cmd}`)
    }
}
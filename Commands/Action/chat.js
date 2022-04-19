const Discord = require("discord.js")
module.exports = {
    commands: ['chat'],
    description: 'fucking dead chat',

    callback: (message, args) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle(`**Xin chúc mừng, ${message.author.username} đã tặng một  thành tựu cho server này**`)
        .setImage("https://cdn.discordapp.com/attachments/951299771849666630/962216429166424144/deadchat.gif")
        message.channel.send({embeds:[Embed]})
    }
}
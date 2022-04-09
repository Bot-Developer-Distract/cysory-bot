const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> BOT TOKEN và cách làm bot online")
    .setURL("https://discordjs.guide/creating-your-bot/#creating-configuration-files")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs BOT TOKEN"
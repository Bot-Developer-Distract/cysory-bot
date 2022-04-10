const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> COMMAND HANDLER/ chia ra thành các tệp, folder để dễ quản lí\nVideo hướng dẫn: https://www.youtube.com/watch?v=1KVGyUemRy0&t=5s")
    .setURL("https://discordjs.guide/creating-your-bot/command-handling.html#individual-command-files")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs COMMAND HANDLER"
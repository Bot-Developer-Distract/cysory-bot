const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> SLASH COMMANDS/ tạo lệnh slash ứng dụng cho bot của bạn!")
    .setImage("https://cdn.discordapp.com/attachments/960790121567891482/962728339716583454/unknown.png")
    .setURL("https://discordjs.guide/interactions/slash-commands.html#options")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs SLASH COMMANDS"
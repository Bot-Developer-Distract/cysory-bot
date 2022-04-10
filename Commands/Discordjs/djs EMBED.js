const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> EMBED/ gửi tin nhắn nhúng bằng lệnh!")
    .setImage("https://cdn.discordapp.com/attachments/960790121567891482/962732127311523950/unknown.png")
    .setURL("https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs EMBED"
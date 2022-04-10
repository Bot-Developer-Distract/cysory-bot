const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> BUTTON/ gửi tin nhắn embed cùng hệ thống nút trong embed!")
    .setImage("https://cdn.discordapp.com/attachments/960790121567891482/962728682139582475/unknown.png")
    .setURL("https://discordjs.guide/interactions/buttons.html#building-and-sending-buttons")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs BUTTON"
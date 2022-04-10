const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> REACTION/ tạo ra một tin nhắn mà bot sẽ tự react emote cho tin nhắn đó")
    .setImage("https://cdn.discordapp.com/attachments/960790121567891482/962732895309553735/unknown.png")
    .setURL("https://discordjs.guide/popular-topics/reactions.html#reacting-to-messages")
    const Embed2 = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/960790121567891482/962732952385638451/unknown.png")
    message.channel.send({embeds:[Embed, Embed2]})
}

exports.name = "djs REACTION"
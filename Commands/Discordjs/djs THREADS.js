const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> THREADS/ tạo và xóa, khóa bật/tắt chủ đề của kênh")
    .setImage("https://cdn.discordapp.com/attachments/960790121567891482/962729868401999913/unknown.png")
    .setURL("https://discordjs.guide/popular-topics/threads.html#creating-and-deleting-threads")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs THREADS"
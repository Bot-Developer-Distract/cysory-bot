const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpleo = new Discord.MessageEmbed()
    .setDescription("command: \`newupdate\` \n usage: \`c/newupdate\` \n inf: \`xem những cập nhật mới nhất của bot\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpleo]})
}

exports.name = "help newupdate"
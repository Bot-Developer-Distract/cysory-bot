const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpleo = new Discord.MessageEmbed()
    .setDescription("command: \`whois\` \n usage: \`c/whois\` \n inf: \`xem thông tin thành viên\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpleo]})
}

exports.name = "help whois"
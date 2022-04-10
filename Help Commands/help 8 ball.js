const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpbotinfo = new Discord.MessageEmbed()
    .setDescription("command: \`8 ball\` \n usage: \`c/8 ball\` \n inf: \`quay số ngẫu nhiên!\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpbotinfo]})
}

exports.name = "help 8 ball"
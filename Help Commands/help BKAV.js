const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpleo = new Discord.MessageEmbed()
    .setDescription("command: \`BKAV\` \n usage: \`c/BKAV\` \n inf: \`joke BKAV\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpleo]})
}

exports.name = "help BKAV"
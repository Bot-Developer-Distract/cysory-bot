const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpinvite = new Discord.MessageEmbed()
    .setDescription("command: \`invite\` \n usage: \`c/invite\` \n inf: \`đưa bạn liên kết invite bot\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpinvite]})
}

exports.name = "help invite"
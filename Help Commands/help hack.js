const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpleo = new Discord.MessageEmbed()
    .setDescription("command: \`hack\` \n usage: \`c/hack  {tag ai đó}\` \n inf: \`fake hack :)))\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpleo]})
}

exports.name = "help hack"
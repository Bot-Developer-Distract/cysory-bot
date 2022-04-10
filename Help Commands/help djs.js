const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpbotinfo = new Discord.MessageEmbed()
    .setDescription("command: \`djs\` \n usage: \`c/djs\` \n inf: \`một số document hữu ích trong quá trình làm discord bot\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpbotinfo]})
}

exports.name = "help djs"
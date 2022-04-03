const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const codeEmbed = new Discord.MessageEmbed()
    .setTitle("CODING SYSTEM ( demo )")
    .setDescription("this is a beta version of coding in discord \n type \"start\" to begin \n ping Kravon Lidan to get the help!")
    message.channel.send({embeds:[codeEmbed]})
}

exports.name = "code"
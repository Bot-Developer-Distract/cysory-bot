const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpbotinfo = new Discord.MessageEmbed()
    .setDescription("command: \`botinfo\` \n usage: \`c/botinfo\` \n inf: \`xem thông tin của bot\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpbotinfo]})
}

exports.name = "help botinfo"
const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpping = new Discord.MessageEmbed()
    .setDescription("command: \`ping\` \n usage: \`c/ping\` \n inf: \`xem tốc độ chạy của bot\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpping]})
}

exports.name = "help ping"
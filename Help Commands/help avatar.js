const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpavatar = new Discord.MessageEmbed()
    .setDescription("command: \`avatar\` \n usage: \`c/avatar\` hoặc \`c/avatar{bấm dấu cách 2 lần!}{tag ai đó}\` \n inf: \`xem avatar của người khác\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpavatar]})
}

exports.name = "help avatar"
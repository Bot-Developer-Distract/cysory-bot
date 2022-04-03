const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const inviteEmbed = new Discord.MessageEmbed()
    .setTitle("CASE CODE")
    .setDescription("please choose a case to start")
    .addField("CASE", "\`LOG\` \`VISUAL ROOM\` \`COUNT\`")
    message.channel.send({embeds:[inviteEmbed]})
}

exports.name = "VTC0134"
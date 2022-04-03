const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const inviteEmbed = new Discord.MessageEmbed()
    .setTitle("BIN CODE")
    .setDescription("please choose a bin")
    .addField("BIN", "\`VVC0001\` \`VVC0002\` \`VTC0134\`")
    message.channel.send({embeds:[inviteEmbed]})
}

exports.name = "start"
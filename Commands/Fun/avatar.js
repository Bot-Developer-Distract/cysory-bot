const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const avatarURL = member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })
    const Embed = new Discord.MessageEmbed()
    .setTitle(`**Avatar của ${member.displayName}**`)
    .setImage(avatarURL)
    message.channel.send({embeds:[Embed]})
}

exports.name = "avatar"
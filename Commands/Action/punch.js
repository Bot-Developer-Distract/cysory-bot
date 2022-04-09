const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const Embed = new Discord.MessageEmbed()
    .setTitle(`**${message.author.username} đã đấm ${member.displayName} một cái cực thốn**`)
    .setImage("https://cdn.weeb.sh/images/BJg7wTbbM.gif")
    message.channel.send({embeds:[Embed]})
}

exports.name = "punch"
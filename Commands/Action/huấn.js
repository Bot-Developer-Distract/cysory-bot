const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const Embed = new Discord.MessageEmbed()
    .setTitle(`**${member.displayName} không làm mà đòi có ăn thì ăn..**`)
    .setImage("https://media.discordapp.net/attachments/943131409416093727/943159741457260544/standard-2.gif")
    message.channel.send({embeds:[Embed]})
}

exports.name = "huấn"
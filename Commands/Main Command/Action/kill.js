const Discord = require ('discord.js')
module.exports = {
    commands: ['kill'],
    description: 'kill someone',

    callback: (message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const Embed1 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã giết ${member.displayName}**`).setImage("https://cdn.weeb.sh/images/B1VnoJFDZ.gif")
        const Embed2 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã giết ${member.displayName}**`).setImage("https://cdn.weeb.sh/images/r11as1tvZ.gif")
        const Embed3 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã giết ${member.displayName}**`).setImage("https://cdn.weeb.sh/images/BJO2j1Fv-.gif")
        const Embed4 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã giết ${member.displayName}**`).setImage("https://cdn.weeb.sh/images/HyXTiyKw-.gif")
        var emd = [
            Embed1,
            Embed2,
            Embed3,
            Embed4
        ]
        const cmd = emd[Math.floor(Math.random() * emd.length)]
        message.channel.send({embeds:[cmd]})
    }
}
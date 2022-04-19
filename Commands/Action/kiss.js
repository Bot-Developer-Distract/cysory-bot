const Discord = require("discord.js")
module.exports = {
    commands: ['kiss'],
    description: 'kiss a user <3',

    callback: (message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const Embed1 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã tặng cho ${member.displayName} một cái hôn thật ngọt ngào!**`).setImage("https://cdn.weeb.sh/images/BJMX2TuPb.gif")
        const Embed2 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã tặng cho ${member.displayName} một cái hôn thật ngọt ngào!**`).setImage("https://cdn.weeb.sh/images/Sk5P2adDb.gif")
        const Embed3 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã tặng cho ${member.displayName} một cái hôn thật ngọt ngào!**`).setImage("https://cdn.weeb.sh/images/rkM4nTOPb.gif")
        const Embed4 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã tặng cho ${member.displayName} một cái hôn thật ngọt ngào!**`).setImage("https://cdn.weeb.sh/images/S1PCJWASf.gif")
        const Embed5 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã tặng cho ${member.displayName} một cái hôn thật ngọt ngào!**`).setImage("https://cdn.weeb.sh/images/H1e7nadP-.gif")
        const Embed6 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã tặng cho ${member.displayName} một cái hôn thật ngọt ngào!**`).setImage("https://cdn.weeb.sh/images/rJ6PWohA-.gif")
        var emd = [
            Embed1,
            Embed2,
            Embed3,
            Embed4,
            Embed5,
            Embed6
        ]
        const cmd = emd[Math.floor(Math.random() * emd.length)]
        message.channel.send({embeds:[cmd]})
    }
}
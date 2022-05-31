const Discord = require("discord.js")
module.exports = {
    commands: ['punch'],
    description: 'punch a user',

    callback: (message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const Embed1 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã đấm ${member.displayName} một cái cực thốn**`).setImage("https://cdn.weeb.sh/images/BJg7wTbbM.gif")
        const Embed2 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã đấm ${member.displayName} một cái cực thốn**`).setImage("https://cdn.weeb.sh/images/HJfGPTWbf.gif")
        const Embed3 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã đấm ${member.displayName} một cái cực thốn**`).setImage("https://cdn.weeb.sh/images/SJAfH5TOz.gif")
        const Embed4 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã đấm ${member.displayName} một cái cực thốn**`).setImage("https://cdn.weeb.sh/images/B1rZP6b-z.gif")
        const Embed5 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã đấm ${member.displayName} một cái cực thốn**`).setImage("https://cdn.weeb.sh/images/ByI7vTb-G.gif")
        const Embed6 = new Discord.MessageEmbed().setTitle(`**${message.author.username} đã đấm ${member.displayName} một cái cực thốn**`).setImage("https://cdn.weeb.sh/images/ryYo_6bWf.gif")
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
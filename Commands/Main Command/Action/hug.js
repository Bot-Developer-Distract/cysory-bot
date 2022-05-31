const Discord = require ('discord.js')
module.exports = {
    commands: ['hug'],
    description: 'hug someone',

    callback: (message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const Embed1 = new Discord.MessageEmbed().setTitle(`**${message.author.username} cho ${member.displayName} một cái ôm ấm áp**`).setImage("https://cdn.weeb.sh/images/ByPGRkFVz.gif")
        const Embed2 = new Discord.MessageEmbed().setTitle(`**${message.author.username} cho ${member.displayName} một cái ôm ấm áp**`).setImage("https://cdn.weeb.sh/images/Sk-xxs3C-.gif")
        const Embed3 = new Discord.MessageEmbed().setTitle(`**${message.author.username} cho ${member.displayName} một cái ôm ấm áp**`).setImage("https://cdn.weeb.sh/images/SJebhd1Ob.gif")
        const Embed4 = new Discord.MessageEmbed().setTitle(`**${message.author.username} cho ${member.displayName} một cái ôm ấm áp**`).setImage("https://cdn.weeb.sh/images/HJU2OdmwW.gif")
        const Embed5 = new Discord.MessageEmbed().setTitle(`**${message.author.username} cho ${member.displayName} một cái ôm ấm áp**`).setImage("https://cdn.weeb.sh/images/rk6PsvOUM.gif")
        const Embed6 = new Discord.MessageEmbed().setTitle(`**${message.author.username} cho ${member.displayName} một cái ôm ấm áp**`).setImage("https://cdn.weeb.sh/images/HJ7lY_QwW.gif")
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
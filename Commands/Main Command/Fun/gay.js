const Discord = require('discord.js')
module.exports = {
    commands: "gay",
    description: "a howgay command",

    callback: (message, args) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

        const rng = Math.floor(Math.random() * 101);

        const howgayembed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.displayName} is ${rng}% Gay🌈`)
        .setColor("GREEN")
        message.channel.send({embeds:[howgayembed]});
    }
}
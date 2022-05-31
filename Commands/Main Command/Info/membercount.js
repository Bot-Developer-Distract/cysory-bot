const Discord = require('discord.js')
module.exports = {
    commands: ['membercount', 'mbc'],
    description: 'counting the member of server',

    callback: (message, args) => {
        const { guild } = message

        const { members, memberCount } = guild
    
        const Embed = new Discord.MessageEmbed()
        .setDescription(`Thành viên: ${members.cache.filter((m) => !m.user.bot).size}\nTổng Thành viên: ${memberCount}`)
        .setTimestamp()
        message.channel.send({embeds:[Embed]})
    }
}
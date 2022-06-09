const Discord = require("discord.js")
module.exports = {
    commands: ['userinfo', 'u4', 'whois'],
    description: 'information of user',

    callback: (message, args) => {
        const moment = require('moment')
        const Target = message.mentions.users.first() || message.author
        const Member = message.guild.members.cache.get(Target.id)
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`${Target.username}`, Target.displayAvatarURL({dynamic: true}))
        .setThumbnail(Target.displayAvatarURL({dynamic: true}))
        .addField("Thông tin người dùng", `Tên: **${Target.username}**\nID: **${Target.id}**\nTạo vào lúc: **${moment(Target.createdAt).format('Do MMMM YYYY, h:mm:ss a')}**\n**-** **${moment(Target.createdAt).startOf('day').fromNow()}**`, true)
        .addField("Thông tin Server", `Tham gia lúc: **${moment(Member.joinedAt).format('Do MMMM YYYY, h:mm:ss a')}**\n**-** **${moment(Member.joinedAt).startOf('day').fromNow()}**\nRoles: ${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`, true)
        .setColor("RANDOM")
        message.channel.send({embeds:[Embed]})
    }
}
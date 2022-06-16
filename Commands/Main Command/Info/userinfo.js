const Discord = require("discord.js")
module.exports = {
    commands: ['userinfo', 'u4', 'whois'],
    description: 'information of user',

    callback: (message, args) => {
        const moment = require('moment')
        const Target = message.mentions.users.first() || message.member
        const Member = message.guild.members.cache.get(Target.id)
        const Embed = new Discord.MessageEmbed()
        .setAuthor(`${Target.user.tag}`, Target.displayAvatarURL({dynamic: true}))
        .setThumbnail(Target.displayAvatarURL({dynamic: true}))
        .addField("Thông tin người dùng", `Tag: **${Target.user.tag}**\nMention: **<@${Target.id}>**\nID: **${Target.id}**\nTạo vào lúc: **${moment(Target.createdAt).format('Do MMMM YYYY, h:mm:ss a')}**\n**-** **${moment(Target.createdAt).startOf('day').fromNow()}**`, true)
        .addField("Thông tin Server", `Nickname: **${Target.displayName}**\nTham gia lúc: **${moment(Member.joinedAt).format('Do MMMM YYYY, h:mm:ss a')}**\n**-** **${moment(Member.joinedAt).startOf('day').fromNow()}**\nRoles: ${Member.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`, true)
        .setColor("RANDOM")
        message.channel.send({embeds:[Embed]})
    }
}
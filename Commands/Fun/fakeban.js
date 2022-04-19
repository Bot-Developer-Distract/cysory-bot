const Discord = require("discord.js")
module.exports = {
    commands: ['fakeban'],
    description: 'fake ban a user',

    callback: (message, args) => {
        args.shift()
        const reason = args.join(' ')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const avatarURL = member.displayAvatarURL({format: 'png', dynamic: true, size: 1024})
        const Embed = new Discord.MessageEmbed()
        .setTitle(`**Đã ban ${member.displayName}**`)
        .setDescription(`**${member.displayName}** đã bị ban vì **${reason}** bởi **${message.author.username}**\nƯớc tính bạn sẽ bị ban cho đến **8 năm, 76 tháng, 928 ngày sau**`)
        .setFooter("Do bạn đen >:)")
        .setThumbnail(avatarURL)
        message.channel.send({embeds:[Embed]})
        client.on("message", message => {
            if (message.content === 'c/fakeban') {
                if (message.deletable) message.delete()
            }
        })
    }
}
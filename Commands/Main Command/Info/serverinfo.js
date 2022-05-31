const Discord = require("discord.js")
module.exports = {
    commands: ['serverinfo', 'svinfo', 'sv4'],
    description: 'information of user\'s server',

    callback: (message, args) => {
        const { guild } = message

        const { createdTimestamp, ownerId, description, members, memberCount, channels, emojis } = guild
    
        const Embed = new Discord.MessageEmbed()
        .setTitle(`Thông tin server **${guild.name}**`)
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .addField(`TỔNG QUAN`, `Tên sv: **${guild.name}**\nThời gian tạo: <t:${parseInt(createdTimestamp / 1000)}:R>\nOwner: <@${ownerId}>\nMô tả: **${description}**`, true)
        .addField(`DÂN SỐ`, `Thành viên: **${members.cache.filter((m) => !m.user.bot).size}**\nBot: **${members.cache.filter((m) => m.user.bot).size}**\nTổng Thành viên: **${memberCount}**`)
        .addField(`KÊNH CHAT/VOICE`, `Text: **${channels.cache.filter((c) => c.type === "GUILD_TEXT").size}**\nVoice: **${channels.cache.filter((c) => c.type === "GUILD_VOICE").size}**\nTổng kênh: **${channels.cache.size}**`, true)
        .addField(`EMOJI SERVER`, `Emoji thường: **${emojis.cache.filter((e) => !e.animated).size}**\nEmoji động: **${emojis.cache.filter((e) => e.animated).size}**\nTổng emoji: **${emojis.cache.size}**`, true)
        message.channel.send({embeds:[Embed]})
    }
}
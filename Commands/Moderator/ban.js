const Discord = require("discord.js")
module.exports = {
    commands: ['ban'],
    description: 'ban user',
    permissions: 'ADMINISTRATOR',
    permissionError: 'Bạn không thể ban vì không có \`ADMINISTRATOR\`!',

    callback: (message, args) => {
        const member = message.mentions.users.first()
        args.shift()
        const reason = args.join(' ')
        if (member) {
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.ban()
            const Embed = new Discord.MessageEmbed()
            .setDescription(`✅ **_Đã ban ${member}_**\nLí do: ${reason}`)
            .setColor("#31bd3d")
            message.channel.send({embeds:[Embed]})
        }
        if (!member) {
            message.reply('Xin hãy mention ai đó!')
        }
        if (!reason) {
            message.reply('Xin hãy ghi lí do!')
        }
    }
}
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
        } else {
            const Embed2 = new Discord.MessageEmbed()
            .setDescription(`:x: **Không thể ban được vì người này có \`MANAGER_GUILDS\` hoặc không tồn tại!**`)
            .setColor("#bf3232")
            message.channel.send({embeds:[Embed2]})
        }
    }
}
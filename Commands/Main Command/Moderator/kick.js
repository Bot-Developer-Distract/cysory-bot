const Discord = require("discord.js")
module.exports = {
    commands: ['kick'],
    description: 'kick a user',
    permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    permissionError: 'Bạn không thể kick vì không có \`ADMINISTRATOR\`!',

    callback: (message, args) => {
        const member = message.mentions.users.first()
        args.shift()
        const reason = args.join(' ')
        if (member) {
            const memberTarger = message.guild.members.cache.get(member.id)
            memberTarger.kick()
            const Embed = new Discord.MessageEmbed()
            .setDescription(`✅ **_Đã đuổi ${member}_**\nLí do: ${reason}`)
            .setColor("#31bd3d")
            message.channel.send({embeds:[Embed]})
        } else {
            const Embed2 = new Discord.MessageEmbed()
            .setDescription(`:x: **Không thể đuổi vì người này có \`MANAGER_GUILDS\` hoặc không tồn tại!**`)
            .setColor("#bf3232")
            message.channel.send({embeds:[Embed2]})
        }
    }
}
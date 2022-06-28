module.exports = {
    commands: ['kick'],
    description: 'kick a user',
    permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    permissionError: '**🚫 |** Bạn không thể kick vì không có \`ADMINISTRATOR\`!',

    callback: async(message, args, client) => {
        const Member = message.mentions.members.first()
        const reason = args.slice(1).join(' ')
        if (!reason) {
            message.reply('**🚫 |** Hãy ghi lí do!')
            return
        }

        if (!Member) {
            message.reply('**🚫 |** Hãy mention ai đó!')
            return
        }

        if(Member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position) {
            message.channel.send(`**❌ |** Không thể kick ${Member}!`)
            return
        }
        Member.send(`Bạn đã bị kick khỏi server \`${message.guild.name}\` vì **${reason}**`)
        Member.kick(reason)
        message.channel.send(`**✅ |** Đã kick ${Member} vì ${reason}`)
    }
}
module.exports = {
    commands: ['giverole', 'addrole'],
    description: 'add role for someone',
    permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    permissionError: '**🚫 |** Bạn không thể addrole vì không có \`ADMINISTRATOR\`!',
    callback: (message, args, client) => {
        
        const target = message.mentions.members.first()
        if(!target) return message.reply('**🚫 |** Hãy mention ai đó!') 
        const role = message.mentions.roles.first()
        if(!role) return message.reply('**🚫 |** Hãy chọn role!')
        target.roles.add(role)
        message.channel.send(`**✅ |** Đã add role **${role}** cho <@${target.user.id}>`)
    }
}
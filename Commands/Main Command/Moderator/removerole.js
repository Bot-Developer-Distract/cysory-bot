module.exports = {
    commands: ['removerole', 'rerole'],
    description: 'remove role for someone',
    permissions: ['ADMINISTRATOR', 'MANAGE_GUILD'],
    permissionError: '**🚫 |** Bạn không thể removerole vì không có \`ADMINISTRATOR\`!',
    callback: (message, args, client) => {
        
        const target = message.mentions.members.first()
        if(!target) return message.reply('**🚫 |** Hãy mention ai đó!') 
        const role = message.mentions.roles.first()
        if(!role) return message.reply('**🚫 |** Hãy chọn role!')
        target.roles.remove(role)
        message.channel.send(`**✅ |** Đã loại bỏ role **${role}** của <@${target.user.id}>`)
    }
}
const Discord = require('discord.js')
module.exports = {
    commands: ['embedcreate', 'ec'],
    description: 'create an embed without webhook',
    permissions: ['MANAGE_MESSAGES'],
    permissionError: '**🚫 |** Bạn không thể tạo tin nhắn nhúng vì không có \`MANAGE_MESSAGES\`!',

    callback: (message, args, text) => {
        // Embed Options
        let title = text.split('|')[1]
        if(!title) return title = null
        let description = text.split('|')[2] 
        if(!description) return description = null
        let color = text.split('|')[3]
        if(!color) return color = null

        // Send Embed
        const Embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        message.channel.send({embeds:[Embed]}) 
    }
}
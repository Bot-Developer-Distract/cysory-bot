const Discord = require('discord.js')
module.exports = {
    commands: ['channelcreate', 'chc'],
    description: 'create a channel',
    permissions: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
    permissionError: '**🚫 |** Bạn không thể tạo kênh vì không có \`MANAGE_CHANNELS\`!',
    callback: (message, args) => {
        const chan = args.join('')
        if (!chan) {
            message.reply('**🚫 |** Xin hãy ghi tên cho kênh!')
            return
        }
        message.guild.channels.create(chan)

        message.channel.send(`**✅ | ** Đã tạo thành công kênh ${chan}!`)
    }
}
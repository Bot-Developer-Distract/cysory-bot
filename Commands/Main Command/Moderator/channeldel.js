const Discord = require('discord.js')
module.exports = {
    commands: ['channeldel', 'chd'],
    description: 'delete a channel',
    permissions: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
    permissionError: '**🚫 |** Bạn không thể xóa kênh vì không có \`MANAGE_CHANNELS\`!',
    callback: (message, args) => {
        const chan = message.mentions.channels.first()
        if (!chan) {
            message.reply('**🚫 |** Xin hãy tag kênh!')
            return
        }
        const bt1 = new Discord.MessageButton()
        .setCustomId('yes-')
        .setLabel('Có')
        .setStyle('SUCCESS')

        const bt2 = new Discord.MessageButton()
        .setCustomId('no-')
        .setLabel('Không')
        .setStyle('DANGER')

        const bt3 = new Discord.MessageButton()
        .setCustomId('yes-')
        .setLabel('Có')
        .setStyle('SUCCESS')
        .setDisabled(true)

        const bt4 = new Discord.MessageButton()
        .setCustomId('no-')
        .setLabel('Không')
        .setStyle('DANGER')
        .setDisabled(true)

        const row = new Discord.MessageActionRow()
        .addComponents([bt1,bt2])
        const row2 = new Discord.MessageActionRow()
        .addComponents([bt3,bt4])

        message.channel.send({ content: `**| Bạn có chắc chắn muốn xóa kênh ${chan} không? |**`, components: [row]})
        const collector = message.channel.createMessageComponentCollector({ time: 99999999 })

        collector.on('collect', async i => {
            if (i.customId === 'yes-') {
                i.update({ content: `**| Đã xóa thành công kênh |**`, components: [row2] })
                chan.delete()
            }
            if (i.customId === 'no-') {
                i.update({ content: '**| Đã hủy tác vụ |**', components: [row2] })
            }
        })
    }
}
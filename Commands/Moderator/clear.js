module.exports = {
    commands: ['clear', 'cls'],
    description: 'Deletes Message',
    permissions: 'ADMINISTRATOR',
    permissionError: 'Bạn không thể clear vì không có \`ADMINISTRATOR\`!',

    callback: async(message, args) => {
        const amount = args[0]
        if (!amount) {
            message.reply('Xin hãy ghi số tin nhắn muốn xóa!')
            return
        }
        if (amount > 100) {
            message.reply('Số quá lớn! chỉ giới hạn \`100\` tin nhắn!')
            return
        }
        if (amount < 1) {
            message.reply('Số quá nhỏ! ít nhất phải trên \`1\` tin nhắn!')
            return
        }
        if (isNaN(amount)) {
            message.reply(`${amount} không phải giá trị loại số! [Number]`)
            return
        }

        await message.channel.messages.fetch({limit: amount}).then(messages =>{
            message.channel.bulkDelete(messages)
        })
    }
}
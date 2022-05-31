const db = require('quick.db')
module.exports = {
    commands: ['give'],
    description: 'give your money to a person',

    callback: (message, args) => {
        const Target = message.member
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const totalCashInWallet = db.fetch(`money_${Target.id}`)
        let amount = args[1]

        if (amount === 'all') {
            amount = totalCashInWallet
        }
        if (!Member) {
            message.reply('**🚫 |** Xin hãy mention ai đó!')
            return
        }
        if (totalCashInWallet === null || totalCashInWallet === 0) {
            message.reply(`**🚫 |** Bạn không có đồng nào trong túi!, nghèo à? thử daily xem`)
            return
        } else {
            if (!amount) {
                message.reply('**🚫 |** Xin hãy ghi số tiền muốn gửi')
                return
            }
            else if (amount % 1 != 0 || amount <= 0) {
                message.reply(`**❓ |** Đó là số âm? hay bạn có vấn đề về đọc hiểu?`)
                return
            }
            else if (amount > totalCashInWallet) {
                message.reply('**❓ |** lol số tiền đó ở đâu ra thế anh bạn? tưởng tượng à?')
                return
            } else {
                message.channel.send(`**✅ |** Đã chuyển \`$${amount}\` cho **<@${Member.user.id}>**`)
                db.add(`money_${Member.id}`, amount)
                db.subtract(`money_${Target.id}`, amount)
            }
        }
    }
}
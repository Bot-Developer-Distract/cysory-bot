const db = require('quick.db')
const Discord = require("discord.js")
module.exports = {
    commands: ['withdraw', 'wdraw'],
    description: 'withdraw money from the bank',

    callback: (message, args) => {
        const Target = message.member
        const totalCashInBank = db.fetch(`bank_${Target.id}`)
        if (totalCashInBank === null || totalCashInBank === 0) {
            message.reply(`Bạn không có đồng nào trong Ngân hàng!`)
            return
        }
        if (args[0] === 'all') {
            const Embed = new Discord.MessageEmbed()
            .setTitle(`Đã rút TẤT CẢ tiền vào ví | ${Target.displayName}`)
            .setDescription(`Đã rút \`$${totalCashInBank}\` vào ví tiền`)
            .setTimestamp()
            message.channel.send({embeds:[Embed]})
            db.subtract(`bank_${Target.id}`, totalCashInBank)
            db.add(`money_${Target.id}`, totalCashInBank)
        } else {
            const amount = args[0]
            if (!amount) {
                message.reply('Xin hãy ghi số tiền muốn rút')
                return
            }
            else if (amount % 1 != 0 || amount <= 0) {
                message.reply(`Đó là số âm? hay bạn có vấn đề về đọc hiểu?`)
                return
            }
            else if (amount > totalCashInBank) {
                message.reply('lol số tiền đó ở đâu ra thế anh bạn? tưởng tượng à?')
                return
            } else {
                const Embed2 = new Discord.MessageEmbed()
                .setTitle(`Đã rút tiền vào ví | ${Target.displayName}`)
                .setDescription(`Đã rút \`$${amount}\` vào ví`)
                .setTimestamp()
                message.channel.send({embeds:[Embed2]})
                db.subtract(`bank_${Target.id}`, amount)
                db.add(`money_${Target.id}`, amount)
            }
        }
    }
}
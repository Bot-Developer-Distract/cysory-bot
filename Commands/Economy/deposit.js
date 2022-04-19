const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    commands: ['deposit', 'dep'],
    description: 'Deposit your money from wallet to the bank',

    callback: (message, args) => {
        const Target = message.member
        const totalCashInWallet = db.fetch(`money_${Target.id}`)
        if (totalCashInWallet === null || totalCashInWallet === 0) {
            message.reply(`Bạn không có đồng nào trong túi!, nghèo à? thử daily xem`)
            return
        }
        if (args[0] === 'all') {
            const Embed = new Discord.MessageEmbed()
            .setTitle(`Đã chuyển TẤT CẢ tiền vào ngân hàng | ${Target.displayName}`)
            .setDescription(`Đã chuyển \`$${totalCashInWallet}\` vào ngân hàng`)
            .setTimestamp()
            message.channel.send({embeds:[Embed]})
            db.add(`bank_${Target.id}`, totalCashInWallet)
            db.subtract(`money_${Target.id}`, totalCashInWallet)
        } else {
            const amount = args[0]
            if (!amount) {
                message.reply('Xin hãy ghi số tiền tiết kiệm')
                return
            }
            else if (amount % 1 != 0 || amount <= 0) {
                message.reply(`Đó là số âm? hay bạn có vấn đề về đọc hiểu?`)
                return
            }
            else if (amount > totalCashInWallet) {
                message.reply('lol số tiền đó ở đâu ra thế anh bạn? tưởng tượng à?')
                return
            } else {
                const Embed2 = new Discord.MessageEmbed()
                .setTitle(`Đã chuyển tiền vào ngân hàng | ${Target.displayName}`)
                .setDescription(`Đã chuyển \`$${amount}\` vào ngân hàng`)
                .setTimestamp()
                message.channel.send({embeds:[Embed2]})
                db.add(`bank_${Target.id}`, amount)
                db.subtract(`money_${Target.id}`, amount)
            }
        }
    }
}
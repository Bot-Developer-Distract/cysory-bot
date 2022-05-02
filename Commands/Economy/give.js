const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    commands: ['give'],
    description: 'give your money to a person',

    callback: (message, args) => {
        const Target = message.member
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const totalCashInWallet = db.fetch(`money_${Target.id}`)
        if (totalCashInWallet === null || totalCashInWallet === 0) {
            message.reply(`Bạn không có đồng nào trong túi!, nghèo à? thử daily xem`)
            return
        }
        if (args[1] === 'all') {
            const Embed = new Discord.MessageEmbed()
            .setTitle(`Đã chuyển TẤT CẢ tiền cho ${Member.displayName} | ${Target.displayName}`)
            .setDescription(`Đã chuyển \`$${totalCashInWallet}\` cho ${Member.displayName}`)
            .setTimestamp()
            message.channel.send({embeds:[Embed]})
            db.add(`money_${Member.id}`, totalCashInWallet)
            db.subtract(`money_${Target.id}`, totalCashInWallet)
        } else {
            const amount = args[1]
            if (!amount) {
                message.reply('Xin hãy ghi số muốn gửi')
                return
            }
            else if (amount % 1 != 0 || amount <= 0) {
                message.reply(`Đó là số âm? hay bạn có vấn đề về đọc hiểu?`)
                return
            }
            else if (amount > 400000) {
                message.reply('Chỉ có thể add tối đa \`$400.000\`!')
                return
            }
            else if (amount > totalCashInWallet) {
                message.reply('lol số tiền đó ở đâu ra thế anh bạn? tưởng tượng à?')
                return
            } else {
                const Embed2 = new Discord.MessageEmbed()
                .setTitle(`Đã chuyển tiền vào tài khoản ${Member.displayName} | ${Target.displayName}`)
                .setDescription(`Đã chuyển \`$${amount}\` cho ${Member.displayName}`)
                .setTimestamp()
                message.channel.send({embeds:[Embed2]})
                db.add(`money_${Member.id}`, amount)
                db.subtract(`money_${Target.id}`, amount)
            }
        }
    }
}
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['buy'], // You Can Keep Any Name
    description: 'Buy Fish Rod', // Optional

    callback: async(message, args, client) => {

        if(args[0].toLowerCase() === '2') { // You Can Keep Any Name
            const user = message.member
            const amount = 15000 // Amount Of Fish Rod: $15,000
            const bal = db.fetch(`money_${user.id}`) // Get User's Money In Wallet

            if(bal <amount) { // If Balance In Wallet Is Less Then Amount Of Laptop
                return message.reply(`Bạn không có đủ tiền(\`$15,000\`) trong túi để mua cần câu`)
            } else {
                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} Đã mua`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RED')
                .setDescription(`
<@${user.id}> Mua thành công **1** *Cần câu* với giá \`$15,000\`
                `)
                .setFooter('Shop')
                message.channel.send(embed)
                db.add(`fishrod_${user.id}`, 1) // Add 1 Laptop To User
                db.subtract(`money_${user.id}`, amount) // Remove Money From Using
            }
        }
    }
}
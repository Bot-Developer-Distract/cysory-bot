const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['sell'],
    description: 'Sell nintendo',

    callback: async(message, args, client) => {

        if(args[0].toLowerCase() === '2') {
            const user = message.member
            const amount = 1500
            const fishrod = db.fetch(`nes_${user.id}`)
            if(fishrod === null || fishrod === 0) {
                return message.reply(`Bạn không có Máy Nintendo nào cả!`)
            } else if(fishrod !== null || fishrod !== 0) {
                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} đã bán`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RED')
                .setDescription(`
<@${user.id}> đã bán \`1\` **Máy Nintendo** với giá \`$${amount}\`
                `)
                .setFooter('Shop')
                message.channel.send({embeds:[embed]})
                db.subtract(`fishrod_${user.id}`, 1)
                db.add(`money_${user.id}`, amount)
            }
        }
    }
}
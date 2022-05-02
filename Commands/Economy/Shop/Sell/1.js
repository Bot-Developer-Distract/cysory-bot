const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['sell'],
    description: 'Sell Fish Rod',

    callback: async(message, args, client) => {

        if(args[0].toLowerCase() === '1') {
            const user = message.member
            const amount = 800
            const fishrod = db.fetch(`fishrod_${user.id}`)
            if(fishrod === null || fishrod === 0) {
                return message.reply(`Bạn không có cần câu nào cả!`)
            } else if(fishrod !== null || fishrod !== 0) {
                const embed = new MessageEmbed()
                .setAuthor(`${user.user.username} đã bán`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RED')
                .setDescription(`
<@${user.id}> đã bán \`1\` **Cần câu** với giá \`$800\`
                `)
                .setFooter('Shop')
                message.channel.send({embeds:[embed]})
                db.subtract(`fishrod_${user.id}`, 1)
                db.add(`money_${user.id}`, amount)
            }
        }
    }
}
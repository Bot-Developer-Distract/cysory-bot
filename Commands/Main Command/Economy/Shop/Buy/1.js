const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['buy'],
    description: 'Buy Fish Rod',

    callback: async(message, args, client) => {

        if(args[0].toLowerCase() === '1') {
            const user = message.member
            const amount = 1500
            const bal = db.fetch(`money_${user.id}`)

            if(bal < amount) {
                message.reply(`🚫 | Bạn không đủ tiền!`)
                return 
            } else {
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${user.user.username} đã mua`, user.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setDescription(`<@${user.id}> Mua thành công \`1\` **Cần câu** với giá \`$${amount}\``)
                .setFooter('Shop')
                message.channel.send({embeds:[embed]})
                db.add(`fishrod_${user.id}`, 1)
                db.subtract(`money_${user.id}`, amount)
            }
        }
    }
}
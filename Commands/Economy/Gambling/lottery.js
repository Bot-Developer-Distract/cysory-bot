const db = require('quick.db')
const Discord = require("discord.js")
const ms = require('parse-ms')

module.exports = {
    commands: ['lottery', 'lot'],
    description: 'lottery time!',

    callback: (message, args) => {
        const User = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 260000
        const amount = Math.floor(Math.random() * 2000) + 70
        
        let options = [
            'Thành công',
            'Thất bại'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const lotTime = db.fetch(`lot-time_${User.id}`)
    
        if (lotTime !== null && timeout - (Date.now() - lotTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - lotTime))
    
            const Embed = new Discord.MessageEmbed()
            .setTitle(`Xin hãy chờ ${timeleft.minutes} phút! | ${User.displayName}`)
            .setColor('RED')
            .setTimestamp()
            message.channel.send({embeds:[Embed]})
        } else {
            if (final === 'Thành công') {
                let gave = [
                    'Trúng',
                    'Trúng'
                ]
                const give = Math.floor(Math.random() * gave.length)
    
                db.add(`money_${User.id}`, amount)
                const Embed2 = new Discord.MessageEmbed()
                .setTitle(`${User.user.username} đã trúng xổ số!`)
                .setDescription(`Đã trúng xổ số | ${gave[give]} \`$${amount}\` cho <@${User.user.id}>`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed2]})
                db.set(`lot-time_${User.id}`, Date.now())
                db.subtract(`money_${User.id}`, 500)
            } else if (final === 'Thất bại') {
                const Embed3 = new Discord.MessageEmbed()
                .setTitle(`${User.user.username} đã thua xổ số!`)
                .setDescription(`Đã thua xổ số | trừ \`$500\` của <@${User.user.id}>`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed3]})
                db.set(`lot-time_${User.id}`, Date.now())
                db.subtract(`money_${User.id}`, 500)
            }
        }
    }
}
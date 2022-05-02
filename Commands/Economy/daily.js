const db = require('quick.db')
const Discord = require("discord.js")
const ms = require('parse-ms')

module.exports = {
    commands: ['daily'],
    description: 'daily or beg?',

    callback: (message, args) => {
        const User = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 86400000
        const amount = Math.floor(Math.random() * 900) + 100
    
        let options = [
            'Thành công'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`daily-time_${User.id}`)
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
    
            const Embed = new Discord.MessageEmbed()
            .setTitle(`Đã nhận daily, xin hãy quay lại sau ${timeleft.minutes} phút! | ${User.displayName}`)
            .setColor('RED')
            .setTimestamp()
            message.channel.send({embeds:[Embed]})
        } else {
            if (final === 'Thành công') {
                db.add(`money_${User.id}`, amount)
                const Embed2 = new Discord.MessageEmbed()
                .setTitle(`${User.user.username} đã nhận daily`)
                .setDescription(`Đã gửi ${amount} cho <@${User.user.id}>`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed2]})
                db.set(`daily-time_${User.id}`, Date.now())
            }
        }
    }
}
const db = require('quick.db')
const Discord = require("discord.js")
const ms = require('parse-ms')

module.exports = {
    commands: ['monthly'],
    description: 'daily or beg?',

    callback: (message, args) => {
        const User = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 2629800000
        const amount = Math.floor(Math.random() * 1200) + 100
    
        let options = [
            'Thành công'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`month-time_${User.id}`)
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
    
            const Embed = new Discord.MessageEmbed()
            message.channel.send(`**🕐 |** Đã nhận monthly, xin hãy quay lại sau **${timeleft.days} ngày ${timeleft.hours} giờ ${timeleft.minutes} phút ${timeleft.seconds} giây!** | ${User.displayName}`)
        } else {
            if (final === 'Thành công') {
                db.add(`money_${User.id}`, amount)
                message.channel.send(`**✅ |** Đã gửi \`$${amount}\` cho <@${User.user.id}>`)
                db.set(`month-time_${User.id}`, Date.now())
            }
        }
    }
}
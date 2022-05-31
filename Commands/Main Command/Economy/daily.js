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
        const amount = Math.floor(Math.random() * 1200) + 100
    
        let options = [
            'Thành công'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`daily-time_${User.id}`)
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
    
            const Embed = new Discord.MessageEmbed()
            message.channel.send(`**🕐 |** Đã nhận daily, xin hãy quay lại sau **${timeleft.hours} giờ ${timeleft.minutes} phút ${timeleft.seconds} giây!** | ${User.displayName}`)
        } else {
            if (final === 'Thành công') {
                db.add(`money_${User.id}`, amount)
                message.channel.send(`**✅ |** Đã gửi \`$${amount}\` cho <@${User.user.id}>`)
                db.set(`daily-time_${User.id}`, Date.now())
            }
        }
    }
}
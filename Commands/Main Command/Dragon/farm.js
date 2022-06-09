const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    commands: ['farm'],
    description: 'collect food from the garden',

    callback: (message, args) => {
        const User = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 6400000
        const amount = Math.floor(Math.random() * 1200) + 100
    
        let options = [
            'Thành công'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`food-time_${User.id}`)
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))

            message.channel.send(`**🕐 |** Đã thu hoạch, xin hãy chờ cây trồng sau **${timeleft.minutes} phút ${timeleft.seconds} giây!** | ${User.displayName}`)
        } else {
            if (final === 'Thành công') {
                db.add(`food_${User.id}`, amount)
                message.channel.send(`**✅ |** Đã thu hoạch được \`${amount}\` thức ăn cho <@${User.user.id}>`)
                db.set(`food-time_${User.id}`, Date.now())
            }
        }
    }
}
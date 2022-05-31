const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
    commands: ['work'],
    description: 'is time to working',

    callback: (message, args) => {
        const User = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 700000
        const amount = Math.floor(Math.random() * 900) + 100
    
        let options = [
            'Thành công'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`work-time_${User.id}`)
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
            message.channel.send(`**🕐 |** Đã làm việc, xin hãy quay lại sau **${timeleft.minutes} phút ${timeleft.seconds} giây!** | ${User.displayName}`)
        } else {
            if (final === 'Thành công') {
                let Prize = [
                    'Bạn đi phục vụ ở lotteria, được khách boa thêm',
                    'Nay công sở nghỉ dịch, bạn được trả',
                    'Bán bánh mì, bạn kiếm được',
                    'Bạn đã lập trình giúp Kravon Lidan, anh ấy trả cho bạn',
                    'Bạn đi làm ở quán bar, thấy khách bỏ quên ví, bạn để lại cái nịt và lấy được',
                    'Đi qua thùng rác thấy tiền, bạn liền hóa thành Bảo Ren loot được'
                ]
                const prizeRan = Prize[Math.floor(Math.random() * Prize.length)]
                message.channel.send(`${prizeRan} \`$${amount}\` cusy! <a:spining:975408505949417523>`)
                db.add(`money_${User.id}`, amount)
                db.set(`work-time_${User.id}`, Date.now())
            }
        }
    }
}
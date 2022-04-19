const db = require('quick.db')
const Discord = require("discord.js")
const ms = require('parse-ms')

module.exports = {
    commands: ['fishing', 'fish'],
    description: 'daily or beg?',

    callback: (message, args) => {
        const User = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 10000
        const amount = Math.floor(Math.random() * 200) + 50
    
        let names = [
            'Cá Chép',
            'Cá Trắm',
            'Cá Hồi',
            'Cá Đội Đèn',
            'Cá Mặt Trăng',
            'Cá Rô Phi',
            'Cá Kiếm',
            'Cá Trình Điện',
            'Lươn',
            'Cá Mập'
        ]
    
        const Name = Math.floor(Math.random() * names.length)
    
        let options = [
            'Thành công',
            'Thất bại'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`daily-time_${User.id}`)
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
    
            const Embed = new Discord.MessageEmbed()
            .setTitle(`Xin hãy chờ ${timeleft.seconds} giây! | ${User.displayName}`)
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
                .setTitle(`${User.user.username} đã câu trúng!`)
                .setDescription(`Đã câu được **${names[Name]}**: ${gave[give]} $${amount} cho <@${User.user.id}>`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed2]})
                db.set(`daily-time_${User.id}`, Date.now())
            } else if (final === 'Thất bại') {
                let noGave = [
                    `Bạn không có rổ thì sao mà đựng?`,
                    `Bạn bị dị ứng với loại cá này, vẫn ăn chứ?`,
                    `damn it con này không hề ngon chút nào`,
                    `Con này khôn thật, cắn mồi xong chạy`,
                    `Đã nhớp mồi đâu mà cắn câu?`
                ]
    
                const notgave = Math.floor(Math.random() * noGave.length)
    
                const Embed3 = new Discord.MessageEmbed()
                .setTitle(`${User.user.username} đã câu trượt!`)
                .setDescription(`Đã câu trượt **${names[Name]}**: ${noGave[notgave]}`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed3]})
                db.set(`daily-time_${User.id}`, Date.now())
            }
        }
    }
}
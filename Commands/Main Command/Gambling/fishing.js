const db = require('quick.db')
const Discord = require("discord.js")
const ms = require('parse-ms')

module.exports = {
    commands: ['fishing', 'fish'],
    description: 'fishing time!',

    callback: (message, args) => {
        const User = message.member
        const fishrod = db.fetch(`fishrod_${User.id}`)
        const bal = db.fetch(`money_${User.id}`)
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 10000
        const amount = Math.floor(Math.random() * 400) + 30
        if (bal === 0 || bal < 0) {
            message.reply('**🚫 |** Bạn không đủ tiền!')
            return
        }
    
        let names = [
            'Lươn',
            'Cá Chép',
            'Cá Trắm',
            'Cá Hồi',
            'Cá Đội Đèn',
            'Cá Mặt Trăng',
            'Cá Rô Phi',
            'Cá Kiếm',
            'Cá Trình Điện',
            'Cá Nóc',
            'Cá Heo',
            'Cá Rồng Đen',
            'Cá Mập',
            'Cá Voi',
            'Cá Voi Nhà Táng',
            'Kraken',
            'Megalodon'
        ]
    
        const Name = Math.floor(Math.random() * names.length)
    
        let options = [
            'Thành công',
            'Thất bại'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`fishtime_${User.id}`)
        if (!fishrod || fishrod === null || fishrod === 0) {
            message.reply('**🚫 |** Bạn cần mua `1` cái cần câu!')
            return
        }
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
            message.channel.send(`**🕐 |** Xin hãy quay lại sau **${timeleft.seconds} giây!** | ${User.displayName}`)
        } else {
            if (fishrod !== null || fishrod !== 0) {
                if (final === 'Thành công') {
                    let gave = [
                        'Trúng',
                        'Trúng'
                    ]
                    const give = Math.floor(Math.random() * gave.length)
        
                    db.add(`money_${User.id}`, amount)
                    const Embed2 = new Discord.MessageEmbed()
                    .setTitle(`${User.user.username} đã câu trúng`)
                    .setDescription(`Đã câu trúng **${names[Name]}**: ${gave[give]} \`$${amount}\` cusy cho <@${User.user.id}>`)
                    .setTimestamp()
                    .setColor('RED')
                    message.channel.send({embeds:[Embed2]})
                    db.subtract(`money_${User.id}`, 10)
                    db.set(`fishtime_${User.id}`, Date.now())
                } else if (final === 'Thất bại') {
                    let noGave = [
                        `Kravon đã trộm cá bạn vừa câu được`,
                        `Câu cái gì? nó đòi ăn bạn kìa`,
                        `Bạn bị dị ứng với loại cá này, vẫn ăn chứ?`,
                        `Lmao bạn gãy mẹ cần câu rồi`,
                        `Đã nhớm mồi đâu mà cắn câu?`,
                        `Bạn không có rổ thì sao mà đựng?`,
                        `Con này khôn thật, cắn mồi xong chạy`
                    ]
        
                    const notgave = Math.floor(Math.random() * noGave.length)
        
                    const Embed3 = new Discord.MessageEmbed()
                    .setTitle(`${User.user.username} đã câu trượt!`)
                    .setDescription(`Đã câu trượt **${names[Name]}** - ${noGave[notgave]}`)
                    .setTimestamp()
                    .setColor('RED')
                    message.channel.send({embeds:[Embed3]})
                    db.subtract(`money_${User.id}`, 10)
                    db.set(`fishtime_${User.id}`, Date.now())
                }
            }
        }
    }
}
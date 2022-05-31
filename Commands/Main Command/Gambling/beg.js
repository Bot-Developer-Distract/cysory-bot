const db = require('quick.db')
const Discord = require("discord.js")
const ms = require('parse-ms')

module.exports = {
    commands: ['beg'],
    description: 'daily or beg?',

    callback: (message, args) => {
        const User = message.member
        const random = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
    
        const timeout = 400000
        const amount = Math.floor(Math.random() * 900) + 100
    
        let names = [
            'Tuân Pew',
            'Hoàng Thùy Linh',
            'Trần Văn Bảo',
            'Yuuna',
            'Bảo Ren',
            'Elon Musk',
            'K97',
            'Sechi',
            'Kravon Lidan',
            'Rook'
        ]
    
        const Name = Math.floor(Math.random() * names.length)
    
        let options = [
            'Thành công',
            'Thất bại'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`beg-time_${User.id}`)
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
            message.channel.send(`**🕐 |** Đã ăn xin, xin hãy quay lại sau **${timeleft.minutes} phút ${timeleft.seconds} giây!** | ${User.displayName}`)
        } else {
            if (final === 'Thành công') {
                let gave = [
                    'Donated',
                    'Đưa'
                ]
                const give = Math.floor(Math.random() * gave.length)
    
                db.add(`money_${User.id}`, amount)
                const Embed2 = new Discord.MessageEmbed()
                .setTitle(`${User.user.username} đã ăn xin`)
                .setDescription(`**${names[Name]}**: ${gave[give]} \`$${amount}\` cusy cho <@${User.user.id}>`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed2]})
                db.set(`beg-time_${User.id}`, Date.now())
            } else if (final === 'Thất bại') {
                let noGave = [
                    `Lmao hôm nay ngân hàng đóng của rùi`,
                    `Ví của bạn đâu? làm sao tôi cho bạn tiền được :))`,
                    `Ah shit tiền tôi mua đồ Blvck Vines rùi :DD`,
                    `Thẻ ngân hàng của tôi hết tiền rồi ;-;`,
                    `Sẽ không có quà cho bạn hôm nay đâu!`
                ]
    
                const notgave = Math.floor(Math.random() * noGave.length)
    
                const Embed3 = new Discord.MessageEmbed()
                .setTitle(`${User.user.username} đã bị từ chối!`)
                .setDescription(`**${names[Name]}**: ${noGave[notgave]}`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed3]})
                db.set(`beg-time_${User.id}`, Date.now())
            }
        }
    }
}
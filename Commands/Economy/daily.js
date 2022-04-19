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
    
        let names = [
            'Zachery Cooper',
            'Grady Talbot',
            'Morris Sierra',
            'Lewis Bailey',
            'Dixie Daniel',
            'Keiren Morrow',
            'Tommie Beattie',
            'Patsy Vinson',
            'Sydney Bean',
            'Violet Acevedo'
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
            .setTitle(`Đã nhận Daily, xin hãy quay lại sau ${timeleft.hours} tiếng! | ${User.displayName}`)
            .setColor('RED')
            .setTimestamp()
            message.channel.send({embeds:[Embed]})
        } else {
            if (final === 'Thành công') {
                let gave = [
                    'Donated',
                    'Gave'
                ]
                const give = Math.floor(Math.random() * gave.length)
    
                db.add(`money_${User.id}`, amount)
                const Embed2 = new Discord.MessageEmbed()
                .setTitle(`${User.user.username} đã nhận daily`)
                .setDescription(`**${names[Name]}**: ${gave[give]} ${amount} cho <@${User.user.id}>`)
                .setTimestamp()
                .setColor('RED')
                message.channel.send({embeds:[Embed2]})
                db.set(`daily-time_${User.id}`, Date.now())
            } else if (final === 'Thất bại') {
                let noGave = [
                    `Lmao hôm nay ngân hàng đóng của rùi`,
                    `Ví của bạn đâu? làm sao tôi cho bạn tiền được :))`,
                    `Ah shit tiền t mua đồ Blvck Vines rùi :DD`,
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
                db.set(`daily-time_${User.id}`, Date.now())
            }
        }
    }
}
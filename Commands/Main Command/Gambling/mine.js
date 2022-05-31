const db = require('quick.db')
const Discord = require("discord.js")
const ms = require('parse-ms')

module.exports = {
    commands: ['mine', 'mining'],
    description: 'mining time!',

    callback: (message, args) => {
        const User = message.member
        const fishrod = db.fetch(`picx_${User.id}`)
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
            'Đá thường <:634557824579403796:974903523168886814>',
            'Đá boost server <a:nitro2:974904053337309194>',
            'Đá Citrine <:634557824197722112:974903523068239892>',
            'Đá Aquamarine <:634557824252510238:974903523089219584>',
            'Đá Rose Quartz <:634558761335390229:974903523206660116>',
            'Kim Cương <:6345578:974903522812383272>',
            'Đá Uranium <a:slad:974903523554754631>',
            'Đá Ruby <:ruby:979287903060516874>',
            'Vàng <:gold:979291491732181024>',
            'Hắc Diện Thạch <:obs:979287883590545408>',
            'Đá Hổ Phách <:hphch:979287883032711209>',
            'Đá Lapiz Lazuli <:lapiz:979287883636682812>',
            'Đá Thạch Anh Tím <:amethyst:979288186972942366>',
            'Đá Emerald <:emerald:979288187178455080>'
        ]
    
        const Name = Math.floor(Math.random() * names.length)
    
        let options = [
            'Thành công',
            'Thất bại'
        ]
    
        let dailied = random(0, parseInt(options.length))
        let final = options[dailied]
        const dailyTime = db.fetch(`minetime_${User.id}`)
        if (!fishrod || fishrod === null || fishrod === 0) {
            message.reply('**🚫 |** Bạn cần mua `1` cái cuốc!')
            return
        }
    
        if (dailyTime !== null && timeout - (Date.now() - dailyTime) > 0) {
            const timeleft = ms(timeout - (Date.now() - dailyTime))
            message.channel.send(`**🕐 |** Xin hãy quay lại sau **${timeleft.seconds} giây!** | ${User.displayName}`)
        } else {
            if (fishrod !== null || fishrod !== 0) {
                if (final === 'Thành công') {
                    let gave = [
                        'bán được'
                    ]
                    const give = Math.floor(Math.random() * gave.length)
        
                    db.add(`money_${User.id}`, amount)
                    const Embed2 = new Discord.MessageEmbed()
                    .setTitle(`${User.user.username} đã đào thấy`)
                    .setDescription(`Đã đào được **${names[Name]}**: ${gave[give]} \`$${amount}\` cusy cho <@${User.user.id}>`)
                    .setTimestamp()
                    .setColor('RED')
                    message.channel.send({embeds:[Embed2]})
                    db.subtract(`money_${User.id}`, 10)
                    db.set(`minetime_${User.id}`, Date.now())
                } else if (final === 'Thất bại') {
                    const Embed3 = new Discord.MessageEmbed()
                    .setTitle(`${User.user.username} đã lỡ tay phá đá!`)
                    .setDescription(`Đã lỡ đập vỡ **${names[Name]}**`)
                    .setTimestamp()
                    .setColor('RED')
                    message.channel.send({embeds:[Embed3]})
                    db.subtract(`money_${User.id}`, 10)
                    db.set(`minetime_${User.id}`, Date.now())
                }
            }
        }
    }
}
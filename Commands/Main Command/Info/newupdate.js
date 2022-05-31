const Discord = require("discord.js")
module.exports = {
    commands: ['newupdate', 'nu', 'page 1'],
    description: 'show the new update of bot',

    callback: (message, args) => {
        const { version } = require('../../../config.json')
        const Embed = new Discord.MessageEmbed()
        .setTitle("**CÓ GÌ MỚI?** <:ChickenEden:929567806834495588>")
        .setDescription(`Phiên bản bot: \`${version}\`\nPrefix: \`c/\``)
        .addField("Update phiên bản 2.5.0", "Đã cập nhật đầy đủ case Discord.js và\nthêm một số hành động trong case Action!")
        .addField("Phiên bản 3.0.0 ra mắt!", "v3.0.0 đã có, hãy trải nghiệm ngay với nhiều tính năng mới!")
        .addField("Update phiên bản 3.0.5!", "v3.0.5 được cập nhật thêm custom prefix dành riêng cho\ncác sv đơn lẻ và thêm 1 số game trong phần gambling!")
        .addField('update phiên bản 3.1.0', 'đã thêm và sửa một số tính năng của bot\ntrong phần Action, Gamble và Economy,\nsẽ có thêm blackjack và spell card trong\nbản 4.0.0')
        .setFooter("page 1/2")
        
        const Embed2 = new Discord.MessageEmbed()
        .setTitle("**CÓ GÌ MỚI?** <:ChickenEden:929567806834495588>")
        .setDescription(`Phiên bản bot: \`${version}\`\nPrefix: \`c/\``)
        .addField("Phiên bản 1.0.0 ra mắt!", "phiên bản đầu tiên của thế hệ Cysory đầu tiên, hãy tận\n hưởng và trải nghiệm v1.0.0")
        .addField("Phiên bản 1.5.0 và 2.0.0", "Cysory đã cập nhật thêm rất nhiều thứ như \`Action\`,\nlệnh \`whois\`, thông tin của bot và\nchính thức tiến tới super\ndeveloper badge!")
        .addField("Update phiên bản 2.0.5", "Case dành cho mod, action đã xuất\nhiện, hãy thử ngay!")
        .setFooter("page 2/2")

        const p1 = new Discord.MessageButton()
        .setCustomId('p1-')
        .setLabel('page 1')
        .setStyle('SUCCESS')

        const p2 = new Discord.MessageButton()
        .setCustomId('p2-')
        .setLabel('page 2')
        .setStyle('SUCCESS')

        const row = new Discord.MessageActionRow()
        .addComponents([p1, p2])

        message.reply({ embeds: [Embed], components: [row] })
        const collector = message.channel.createMessageComponentCollector({ time: 99999999 })

        collector.on('collect', async i => {
            if (i.customId === 'p1-') {
                i.update({ embeds: [Embed] })
            }
            if (i.customId === 'p2-') {
                i.update({ embeds: [Embed2] })
            }
        })
    }
}
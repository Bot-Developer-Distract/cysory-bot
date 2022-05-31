const Discord = require('discord.js')
module.exports = {
    commands: ['command'],
    description: 'help about command',

    callback: async(message, args, client) => {
        const Action = new Discord.MessageEmbed()
        .setTitle('Action')
        .addField('c/chat', 'kêu sv là dead chat')
        .addField('c/huấn {tag}', 'dạy đời')
        .addField('c/hug {tag}', 'ôm ai đó')
        .addField('c/kill {tag}', 'giết ai đó :))')
        .addField('c/kiss {tag}', 'hôn ai đó')
        .addField('c/punch {tag}', 'đấm ai đó')

        const Economy = new Discord.MessageEmbed()
        .setTitle('Economy')
        .addField('c/balance {tag hoặc không tag}', 'có thể ghi là \`c/cash\` hoặc \`c/bal\`: xem tiền')
        .addField('c/daily', 'nhận tiền thưởng hằng ngày')
        .addField('c/weekly', 'nhận tiền thưởng hằng tuần')
        .addField('c/monthly', 'nhận tiền thưởng hằng tháng')
        .addField('c/give {tag} {số tiền}', 'chuyển khoản cho ai đó')
        .addField('c/shop', 'shop mua đồ')
        .addField('c/buy {mã đồ} và c/sell {mã đồ}', 'mua/bán đồ')
        .addField('c/top', 'xem rank tiền đua cộng đồng')

        const Gamble = new Discord.MessageEmbed()
        .setTitle('Gamble')
        .addField('c/coinflip {t hoặc h} {tiền cược}', 'có thể ghi là \`c/cf\`: tung xu ăn tiền :))')
        .addField('c/inventory {tag hoặc không tag}', 'có thể ghi là \`c/inv\`: xem đồ đạc của bạn và người khác')
        .addField('c/mine', 'có thể ghi là \`c/mining\`: đào đá $10')
        .addField('c/slot {tiền cược}', 'chơi máy xèng')
        .addField('c/box {thứ tự hộp} {tiền cược}', 'chơi đoán hộp')
        .addField('c/beg', 'ăn xin')
        .addField('c/fishing', 'có thể ghi là \`c/fish\`: câu cá mất $10')

        const Fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('c/8 ball', 'số ngẫu nhiên')
        .addField('c/avatar {tag hoặc không tag}', 'có thể ghi là \`c/avt\`:xem avatar của mình hoặc người khác')
        .addField('c/BKAV', 'BKAV joke')
        .addField('c/fakeban {tag}', 'ban pha ke')
        .addField('c/gay {tag hoặc không tag}', 'kiểm tra mức độ gay')
        .addField('c/hack {tag}', 'hacker')
        .addField('c/rps {kéo bao búa}', 'chơi rock paper scissor')
        .addField('c/ttt {tag hoặc không tag}', 'chơi OX')

        const Info = new Discord.MessageEmbed()
        .setTitle('Info')
        .addField('c/botinfo', 'có thể ghi là \`c/bot4\`: xem thông tin của bot')
        .addField('c/command', 'trợ giúp về các loại lệnh')
        .addField('c/invite', 'có thể ghi là \`c/vite\`: link mời bot vào sv')
        .addField('c/membercount', 'có thể ghi là \`c/mbc\`: đếm số thành viên')
        .addField('c/newupdate', 'có thể ghi là \`c/nu\`: xem thông tin cập nhật của bot')
        .addField('c/ping', 'xem ping API và của bot')
        .addField('c/serverinfo', 'có thể ghi là \`c/svinfo\` hoặc \`c/sv4\`:xem thông tin của server')
        .addField('c/weather {tỉnh/thành phố}', 'có thể ghi là \`c/wt\`:xem thời tiết hôm nay')
        .addField('c/userinfo {tag hoặc không tag}', 'có thể ghi là \`c/u4\` hoặc \`c/whois\`:xem thông tin của mình hoặc người khác')

        const Mod = new Discord.MessageEmbed()
        .setTitle('Moderator')
        .addField('c/ban {tag} {lí do}', 'ban thành viên')
        .addField('c/clear {số tin nhắn}', 'xóa tin nhắn theo số')
        .addField('c/kick {tag} {lí do}', 'kick thành viên')
        .addField('c/threadcreate {tên chủ đề}', 'có thể ghi là \`c/thc\`: tạo chủ đề')
        .addField('c/threaddel {tên chủ đề}', 'có thể ghi là \`c/thd\`: xóa chủ đề')
        .addField('c/resetprefix', 'có thể ghi là \`c/rp\`: xóa cài đặt prefix hiện tại')
        .addField('c/prefix {prefix mới}', 'có thể ghi là \`c/sp\` hoặc \`c/setprefix\`: cài đặt prefix cho sv')
        .addField('c/embedcreate |{title}|{des}|{color}', 'có thể ghi là \`c/ec\`: tạo tin nhắn nhúng')

        const User = message.author

        const p1 = new Discord.MessageButton()
        .setCustomId('p1-')
        .setLabel('page 1')
        .setStyle('SUCCESS')

        const p2 = new Discord.MessageButton()
        .setCustomId('p2-')
        .setLabel('page 2')
        .setStyle('SUCCESS')

        const p3 = new Discord.MessageButton()
        .setCustomId('p3-')
        .setLabel('page 3')
        .setStyle('SUCCESS')

        const p4 = new Discord.MessageButton()
        .setCustomId('p4-')
        .setLabel('page 4')
        .setStyle('SUCCESS')

        const p5 = new Discord.MessageButton()
        .setCustomId('p5-')
        .setLabel('page 5')
        .setStyle('SUCCESS')

        const p6 = new Discord.MessageButton()
        .setCustomId('p6-')
        .setLabel('page 6')
        .setStyle('SUCCESS')

        const row = new Discord.MessageActionRow()
        .addComponents([p1, p2, p3])
        const row2 = new Discord.MessageActionRow()
        .addComponents([p4, p5, p6])

		await message.reply({ embeds: [Action], components: [row, row2] })
        const collector = message.channel.createMessageComponentCollector({ time: 99999999 })

        collector.on('collect', async i => {
            if (i.customId === 'p1-') {
                i.update({ embeds: [Action] })
            }
            if (i.customId === 'p2-') {
                i.update({ embeds: [Economy] })
            }
            if (i.customId === 'p3-') {
                i.update({ embeds: [Fun] })
            }
            if (i.customId === 'p4-') {
                i.update({ embeds: [Gamble] })
            }
            if (i.customId === 'p5-') {
                i.update({ embeds: [Info] })
            }
            if (i.customId === 'p6-') {
                i.update({ embeds: [Mod] })
            }
        })
    }
}
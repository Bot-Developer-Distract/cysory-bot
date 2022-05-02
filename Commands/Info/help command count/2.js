const Discord = require('discord.js')
module.exports = {
    commands: ['2'],
    description: 'help about command',

    callback: async(message, args, client) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle('Economy')
        .addField('c/balance  {tag hoặc không tag}', 'có thể ghi là \`c/cash\` hoặc \`c/bal\`: xem tiền')
        .addField('c/beg', 'ăn xin')
        .addField('c/daily', 'nhận tiền thưởng hằng ngày')
        .addField('c/deposit {số tiền}', 'có thể ghi là \`c/dep\`: gửi tiền vào ngân hàng')
        .addField('c/fishing', 'có thể ghi là \`c/fish\`: câu cá mất $10')
        .addField('c/give  {tag} {số tiền}', 'chuyển khoản cho ai đó')
        .addField('c/withdraw {số tiền}', 'có thể ghi là \`c/wdraw\`: rút tiền từ ngân hàng')
        message.channel.send({embeds:[Embed]})
    }
}
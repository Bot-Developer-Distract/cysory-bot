const Discord = require('discord.js')
module.exports = {
    commands: ['3'],
    description: 'help about command',

    callback: async(message, args, client) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('c/8 ball', 'số ngẫu nhiên')
        .addField('c/avatar  {tag hoặc không tag}', 'có thể ghi là \`c/avt\`:xem avatar của mình hoặc người khác')
        .addField('c/BKAV', 'BKAV joke')
        .addField('c/fakeban  {tag}', 'ban pha ke')
        .addField('c/hack  {tag}', 'hacker')
        .addField('c/userinfo', 'có thể ghi là \`c/u4\` hoặc \`c/whois\`:xem thông tin của mình hoặc người khác')
        message.channel.send({embeds:[Embed]})
    }
}
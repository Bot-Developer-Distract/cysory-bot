const Discord = require('discord.js')
module.exports = {
    commands: ['4'],
    description: 'help about command',

    callback: async(message, args, client) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle('Info')
        .addField('c/botinfo', 'có thể ghi là \`c/bot4\`: xem thông tin của bot')
        .addField('c/help command', 'có thể ghi là \`c/hc\`:trợ giúp về các loại lệnh')
        .addField('c/invite', 'có thể ghi là \`c/vite\`: link mời bot vào sv')
        .addField('c/membercount', 'có thể ghi là \`c/mbc\`: đếm số thành viên')
        .addField('c/newupdate', 'có thể ghi là \`c/nu\`: xem thông tin cập nhật của bot')
        .addField('c/ping', 'xem ping API và của bot')
        .addField('c/serverinfo', 'có thể ghi là \`svinfo\` hoặc \`c/sv4\`:xem thông tin của server')
        message.channel.send({embeds:[Embed]})
    }
}
const Discord = require('discord.js')
module.exports = {
    commands: ['5'],
    description: 'help about command',

    callback: async(message, args, client) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle('Moderator')
        .addField('c/ban  {tag} {lí do}', 'ban thành viên')
        .addField('c/clear {số tin nhắn}', 'xóa tin nhắn theo số')
        .addField('c/kick  {tag} {lí do}', 'kick thành viên')
        .addField('c/mute  {tag}', 'mute thành viên')
        .addField('c/threadcreate', 'có thể ghi là \`c/thc\`: tạo chủ đề')
        .addField('c/threaddel', 'có thể ghi là \`c/thd\`: xóa chủ đề')
        .addField('c/unmute  {tag}', 'unmute thành viên')
        .addField('c/warn  {tag} {lí do}', 'warn thành viên')
        message.channel.send({embeds:[Embed]})
    }
}
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['remoney', 'removemoney'],
    description: 'remove money of user',
    permissions: 'ADMINISTRATOR',
    permissionError: 'Bạn không thể remove tiền vì không có \`ADMINISTRATOR\`!',

    callback :(message, args) => {
        const User = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!User) {
            return message.reply('Xin hãy tag ai đó!')
        }
    
        const money = args[1]
        if (!money) {
            return message.reply('Xin hãy ghi số tiền muốn loại bỏ!')
        }
        if (isNaN(parseInt(args[1]))) return message.reply(`**${money}** không phải giá trị loại Số!`)
    
        db.subtract(`money_${User.id}`, money)
    
        const Embed = new MessageEmbed()
        .setTitle('Remove money thành công!')
        .setDescription(`Đã loại bỏ \`$${money}\` từ <@${User.id}>`)
        .setFooter(`Removed by ${message.author.username}`, message.author.displayAvatarURL)
        message.channel.send({embeds:[Embed]})
    }
}
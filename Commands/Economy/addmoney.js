const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: 'addmoney',
    description: 'add money for some user',
    permissions: 'ADMINISTRATOR',
    permissionError: 'Bạn không thể add tiền vì không có \`ADMINISTRATOR\`!',

    callback :(message, args) => {
        const User = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!User) {
            return message.reply('Xin hãy tag ai đó!')
        }
    
        const money = args[1]
        if (!money) {
            return message.reply('Xin hãy ghi số tiền muốn add!')
        }
        if (isNaN(parseInt(args[1]))) return message.reply(`**${money}** không phải giá trị loại Số!`)
    
        db.add(`money_${User.id}`, money)
    
        const Embed = new MessageEmbed()
        .setTitle('Add money thành công!')
        .setDescription(`Đã thêm \`$${money}\` cho <@${User.id}>`)
        .setFooter(`Added by ${message.author.username}`, message.author.displayAvatarURL)
        message.channel.send({embeds:[Embed]})
    }
}
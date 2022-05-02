const Discord = require('discord.js')
module.exports = {
    commands: ['shop'],
    description: 'See Items In Shops',

    callback: async(message, args, client) => {

        const prefix = 'c/'

        const embed = new Discord.MessageEmbed()
        .setTitle('**SHOP**')
        .addField('Cần câu....1:', `Giá:- \`$1,500\`\nDùng để câu cá\nUsage:- \`${prefix}buy 1\``)
        .addField('Nintendo...2:', `Giá:- \`$4,000\`\nDùng để chơi Mario\nUsage:- \`${prefix}buy 2\``)
        .setTimestamp()
        .setFooter('Shop')
        message.channel.send({embeds:[embed]})
    }
}
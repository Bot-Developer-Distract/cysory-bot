const { MessageEmbed } = require('discord.js')
const db = require('quick.db') // npm i quick.db

module.exports = {
    commands: ['shop'], // You Can Keep Any Name
    description: 'See Items In Shops', // Optional

    callback: async(message, args, client) => {

        const prefix = db.fetch(`prefix_${message.guild.id}`)

        const embed = new MessageEmbed()
        .setAuthor('Shop')
        .setTimestamp()
        .setColor('RED')
        .addField('1.Coming soon:', `Giá:- \`$???\`\n???\nUsage:- \`${prefix}buy ???\``)
        .addField('2.Cần câu:', `Giá:- \`$1,500\`\nDùng cần câu để câu cá\nUsage:- \`${prefix}buy 2\``)
        .setFooter('Shop')
        message.channel.send(embed)
    }
}
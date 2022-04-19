const db = require('quick.db')
const Discord = require("discord.js")
module.exports = {
    commands: ['balance', 'bal', 'cash'],
    description: 'balance of user',

    callback: (message, args) => {
        const User = message.mentions.members.first() || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

        let bal = db.fetch(`money_${User.id}`)
        if (bal === null) bal = '0'
    
        let bank = db.fetch(`bank_${User.id}`)
        if (bank === null) bank = '0'
    
        const Embed = new Discord.MessageEmbed()
        .setTitle(`Tiền trong tài khoản | ${User.displayName}`)
        .setDescription(`<:coins:963787195011977276> Money: \`$${bal}\`\n🏛 Bank: \`$${bank}\``)
        .setColor('RED')
        .setTimestamp()
        message.channel.send({embeds:[Embed]})
    }
}
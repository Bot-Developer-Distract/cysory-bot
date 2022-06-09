const db = require('quick.db')
module.exports = {
    commands: ['balance', 'bal', 'cash'],
    description: 'balance of user',

    callback: (message, args) => {
        const User = message.mentions.members.first() || message.guild.members.cache.find(member => member.displayName.toLowerCase() === args.join(" ").toLowerCase()) || message.member

        let bal = db.fetch(`money_${User.id}`)
        if (bal === null) bal = '0'
    
        message.channel.send(`<@${User.user.id}>!, Bạn hiện đang có **$${bal}** cusy <a:spining:975408505949417523> ! <a:NamaRich:981759739916591174>`)
    }
}
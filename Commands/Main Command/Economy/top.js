const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['top', 'leaderboard'],
    description: 'display the top cusy',

    callback: (message, args, cache, client) => {
        let money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data)
        money.length = 10
        var finalLb = ""
        for(var i in money) {
            finalLb += `${money.indexOf(money[i])+1}) ${client.users.cache.get(money[i].ID.slice(6)).tag} :- $${money[i].data.toLocaleString()} cusy\n`
        }
    
        const embed = new MessageEmbed()
        .setAuthor(`Bảng tích điểm Cusy cộng đồng`, client.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('WHITE')
        .setDescription(`\`\`\`js\n${finalLb}\`\`\``)
        message.channel.send({embeds:[embed]})
    }
}
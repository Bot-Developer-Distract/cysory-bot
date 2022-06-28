const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['top', 'lb', 'leaderboard'],
    description: 'show the leaderboard of cusy',
    callback: async(message, args, client) => {
        let money = (await db.all()).filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);
        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            finalLb += `\`${money.indexOf(money[i]) + 1}.\` **${client.users.cache.get(money[i].ID.slice(6)).tag} -** ${tachso(money[i].data)} :tempei:\n`
        };
        console.log(finalLb)
    }
}
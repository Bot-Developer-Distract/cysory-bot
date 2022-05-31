const Discord = require("discord.js")
module.exports = {
    commands: ['ping'],
    description: 'show the bot\'s ping',

    callback: (message, args, _, client) => {
        const Embed = new Discord.MessageEmbed()
        .setDescription(`\`\`\`Bot Ping: ${Math.floor((Date.now() - message.createdTimestamp) - 2 * Math.floor(client.ws.ping))}ms\nApi Ping: ${Math.floor(client.ws.ping)}ms\`\`\``)
        message.channel.send({embeds:[Embed]})
    }
}
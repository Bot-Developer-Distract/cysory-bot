const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setDescription(`\`\`\`Bot Ping: ${Math.floor((Date.now() - message.createdTimestamp) - 2 * Math.floor(client.ws.ping))}ms\nApi Ping: ${Math.floor(client.ws.ping)}ms\`\`\``)
    message.channel.send({embeds:[Embed]})
}

module.exports.name = "ping"
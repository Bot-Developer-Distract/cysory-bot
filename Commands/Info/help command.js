const Discord = require('discord.js')
module.exports = {
    commands: ['help command', 'hc'],
    description: 'help about command',

    callback: async(message, args, client) => {
        const Embed = new Discord.MessageEmbed()
        .setDescription('\`\`\`help Action.........1\nhelp Economy........2\nhelp Fun............3\nhelp Info...........4\nhelp Mod............5\`\`\`\ngõ \`c/{số thứ tự bên trên}\` để xem')
        message.channel.send({embeds:[Embed]})
    }
}
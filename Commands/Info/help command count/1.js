const Discord = require('discord.js')
module.exports = {
    commands: ['1'],
    description: 'help about command',

    callback: async(message, args, client) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle('Action')
        .addField('c/chat', 'kêu sv là dead chat')
        .addField('c/huấn  {tag}', 'dạy đời')
        .addField('c/kiss  {tag}', 'hôn ai đó')
        .addField('c/punch  {tag}', 'đấm ai đó')
        message.channel.send({embeds:[Embed]})
    }
}
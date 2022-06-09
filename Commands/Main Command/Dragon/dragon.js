const Discord = require('discord.js')
module.exports = {
    commands: ['dragon'],
    description: 'shop sell all dragon',
    callback: (message, args) => {
        const Embed = new Discord.MessageEmbed()
        .setDescription('```js\nRồng Lửa :- 2,000$\nRồng Băng :- 2,500$\nRồng Đất :- 1,800$\nRồng Emperor Gard :- 8,650,000$```')
        .setFooter('gõ c/buy {tên rồng} để mua đồ!')
        message.channel.send({embeds:[Embed]})
    }
}
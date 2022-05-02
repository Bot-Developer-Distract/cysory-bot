const Discord = require("discord.js")
module.exports = {
    commands: ['rank', 'rk'],
    description: 'show the fish\'s rank',

    callback: (message, args) => {
        const Embed = new Discord.MessageEmbed()
        .addField(`Hạng C (Common)`, '\`\`\`Lươn\nCá Chép\nCá Trắm\nCá Rô Phi\`\`\`')
        .addField('Hạng R (Rare)', '\`\`\`Cá Hồi\nCá Đội Đèn\nCá Mặt Trăng\nCá Nóc\nCá Heo\`\`\`')
        .addField('Hạng E (Epic)', '\`\`\`Cá Kiếm\nCá Trình Điện\nCá Rồng Đen\nCá Voi\`\`\`')
        .addField('Hạng L (Legendary)', '\`\`\`Cá Mập\nCá Voi Nhà Táng\nKraken\nMegalodon\`\`\`')
        message.channel.send({embeds:[Embed]})
    }
}
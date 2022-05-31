const Discord = require("discord.js")
module.exports = {
    commands: ['invite', 'vite'],
    description: 'give it invite link',

    callback: (message, args) => {
        const inviteEmbed = new Discord.MessageEmbed()
        .setTitle("**Click vào đây để invite bot!**")
        .setDescription("cysory company @2022")
        .setURL("https://discord.com/oauth2/authorize?client_id=953142094720016444&scope=bot%20applications.commands&permissions=1580723711")
        .setColor("AQUA")
        message.channel.send({embeds:[inviteEmbed]})
    }
}
const Discord = require("discord.js")
module.exports = {
    commands: ['warn'],
    description: 'Warn a user',
    permissions: 'ADMINISTRATOR',
    permissionError: 'Bạn không thể warn vì không có \`ADMINISTRATOR\`!',

    callback: (message, args) => {
        const target = message.mentions.members.first()
        if (!target) {
            message.reply("**Xin hãy mention ai đó!**")
            return
        }

        args.shift()
        const reason = args.join(' ')
        const Embed = new Discord.MessageEmbed()
        .setTitle("**WARNING!**")
        .setDescription(`**${target.displayName}** đã được cảnh báo bởi **${message.author.username}** vì **${reason}**`)
        message.reply({embeds:[Embed]})
    }
}
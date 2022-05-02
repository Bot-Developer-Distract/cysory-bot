const Discord = require("discord.js")
module.exports = {
    commands: ['unmute'],
    description: 'UNMutes A User.',
    permissions: 'MANAGE_CHANNELS',
    permissionError: 'Bạn không thể unmute vì không có \`ADMINISTRATOR\`!', 
    expectedArgs: 'c/mute @User',

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Xin hãy mention ai đó')
        member.roles.remove('966319769408135178')
        if(member.roles.cache.has('966319769408135178')) return message.reply('Người này đã được unmute rồi!')

        const embed = new Discord.MessageEmbed()
        .setTitle('Đã unmute')
        .setDescription(`✅ <@${member.user.id}> đã unmute`)
        .addField('Unmute bởi', `${message.author.username}`)
        .setColor('#31bd3d')
        message.channel.send({embeds:[embed]})
    }
}
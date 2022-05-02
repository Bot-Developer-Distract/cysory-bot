const Discord = require("discord.js")
module.exports = {
    commands: ['mute'],
    description: 'Mutes A User.',
    permissions: 'MANAGE_CHANNELS',
    permissionError: 'Bạn không thể mute vì không có \`ADMINISTRATOR\`!', 
    expectedArgs: 'c/mute @User',

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Xin hãy mention ai đó')
        member.roles.add('966319769408135178')
        if(member.roles.cache.has('966319769408135178')) return message.reply('Người này đã bị mute rồi!')

        const embed = new Discord.MessageEmbed()
        .setTitle('Đã mute')
        .setDescription(`✅ <@${member.user.id}> đã bị mute`)
        .addField('Bị mute bởi', `${message.author.username}`)
        .setColor('#31bd3d')
        message.channel.send({embeds:[embed]})
    }
}
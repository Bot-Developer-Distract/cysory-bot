const Discord = require("discord.js")
module.exports = {
    commands: ['threadcreate'],
    description: 'create a thread',

    callback: (message, args) => {
        const thread = message.channel.threads.create({
            name: `Public Thread`,
            autoArchiveDuration: 60,
            reason: 'đấu võ mồm',
        });
        const Embed = new Discord.MessageEmbed()
            .setDescription(`✅ **_Đã tạo thread \`${thread}\` thành công!_**`)
            .setColor("#31bd3d")
        message.channel.send({embeds:[Embed]})
    }
}
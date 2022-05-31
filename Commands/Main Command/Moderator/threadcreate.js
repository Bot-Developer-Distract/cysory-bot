const Discord = require("discord.js")
module.exports = {
    commands: ['threadcreate', 'thc'],
    description: 'create a thread',

    callback: (message, args) => {
        const Named = args[0]
        if (!Named) {
            message.reply('**🚫 |** Xin hãy ghi tên chủ đề!')
            return
        }
        const thread = message.channel.threads.create({
            name: `${Named}`,
            autoArchiveDuration: 60,
        });
        const Embed = new Discord.MessageEmbed()
        .setDescription(`✅ **_Đã tạo thread \`${Named}\` mang số \`${thread}\` thành công!_**`)
        .setColor("#31bd3d")
        message.channel.send({embeds:[Embed]})
    }
}
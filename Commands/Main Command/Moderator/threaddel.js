const Discord = require("discord.js")
module.exports = {
    commands: ['threaddel', 'threaddelete', 'thd'],
    description: 'delete a thread',

    callback: (message, args) => {
        const Named = args[0]
        if (!Named) {
            message.reply('**🚫 |** Xin hãy ghi tên chủ đề!')
            return
        }
        const thread = message.channel.threads.cache.find(x => x.name === `${Named}`);
        thread.delete();
        const Embed = new Discord.MessageEmbed()
        .setDescription(`✅ **_Đã xóa thread \`${Named}\` mang số \`${thread}\` thành công!_**`)
        .setColor("#31bd3d")
        message.channel.send({embeds:[Embed]})
    }
}
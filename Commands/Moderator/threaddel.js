const Discord = require("discord.js")
module.exports = {
    commands: ['threaddel', 'threaddelete'],
    description: 'delete a thread',

    callback: (message, args) => {
        const thread = message.channel.threads.cache.find(x => x.name === `Public Thread`);
        thread.delete();
        const Embed = new Discord.MessageEmbed()
        .setDescription(`✅ **_Đã xóa thread \`${thread}\` thành công!_**`)
        .setColor("#31bd3d")
        message.channel.send({embeds:[Embed]})
    }
}
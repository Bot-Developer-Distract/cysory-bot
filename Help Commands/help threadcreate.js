const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpleo = new Discord.MessageEmbed()
    .setDescription("command: \`threadcreate và threaddel\` \n usage: \`c/threadcreate, c/threaddel\` \n inf: \`threadcreate để tạo chủ đề cho kênh, threaddel là xóa chủ đề của kênh, có thể tạo vô hạn thread\`")
    .setColor("AQUA")
    message.channel.send({embeds:[helpleo]})
}

exports.name = "help threadcreate"
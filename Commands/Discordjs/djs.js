const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("Discord.js Document commands")
    .setDescription("Nhập \`c/djs {từ khóa ở bảng bên dưới}\` để biết thêm thông tin")
    .addField("Các phần của Discord.js v13", "\`\`\`BOT TOKEN\nMAIN FILE\nCREATING COMMANDS\nCOMMAND HANDLER\nSLASH COMMANDS\nBUTTON\nTHREADS\nEMBED\nREACTION\`\`\`")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs"
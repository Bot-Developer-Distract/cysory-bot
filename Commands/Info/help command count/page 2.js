const Discord = require("discord.js")
module.exports = {
    commands: ['page 2'],
    description: 'page 2',

    callback: (message, args) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle("**CÓ GÌ MỚI?** <:ChickenEden:929567806834495588>")
        .setDescription("Phiên bản bot: \`v3.0.0\`\nPrefix: \`c/\`")
        .addField("Phiên bản 1.0.0 ra mắt!", "phiên bản đầu tiên của thế hệ Cysory đầu tiên, hãy tận\n hưởng và trải nghiệm v1.0.0")
        .addField("Phiên bản 1.5.0 và 2.0.0", "Cysory đã cập nhật thêm rất nhiều thứ như \`Action\`,\nlệnh \`whois\`, thông tin của bot và\nchính thức tiến tới super\ndeveloper badge!")
        .addField("Update phiên bản 2.0.5", "Case dành cho mod, action đã xuất\nhiện, hãy thử ngay!")
        .setFooter("page 2/2")
        message.channel.send({embeds:[Embed]})
    }
}
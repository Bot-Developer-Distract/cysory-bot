const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("**CÓ GÌ MỚI?** <:ChickenEden:929567806834495588>")
    .setDescription("Phiên bản bot: \`v2.5.0\`\nPrefix: \`c/\`")
    .addField("Phiên bản 1.0.0 ra mắt!", "phiên bản đầu tiên của thế hệ Cysory đầu tiên, hãy tận\n hưởng và trải nghiệm v1.0.0")
    .addField("Phiên bản 1.5.0 và 2.0.0", "Cysory đã cập nhật thêm rất nhiều thứ như \`Action\`,\nlệnh \`whois\`, thông tin của bot và\nchính thức tiến tới super\ndeveloper badge!")
    .addField("Update phiên bản 2.0.5", "Case dành cho mod, action đã xuất\nhiện, hãy thử ngay!")
    .setFooter("page 1/2")
    message.channel.send({embeds:[Embed]})
    const Embed2 = new Discord.MessageEmbed()
    .setTitle("**CÓ GÌ MỚI?** <:ChickenEden:929567806834495588>")
    .setDescription("Phiên bản bot: \`v2.5.0\`\nPrefix: \`c/\`")
    .addField("Update phiên bản 2.5.0", "Đã cập nhật đầy đủ case Discord.js và\nthêm một số hành động trong case Action!")
    .setFooter("page 2/2")
    client.on("message", message => {
        if (message.content === 'page 1') {
            message.channel.send({embeds:[Embed]})
        }
        if (message.content === 'page 2') {
            message.channel.send({embeds:[Embed2]})
        }
        if (message.content === 'page 3') {
            if (message.deletable) message.delete()
            message.channel.send("**Nothing in Page 3!**")
        }
    })
}

exports.name = "newupdate"
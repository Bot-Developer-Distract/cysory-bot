const Discord = require("discord.js")
module.exports = {
    commands: ['newupdate', 'nu', 'page 1'],
    description: 'show the new update of bot',

    callback: (message, args) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle("**CÓ GÌ MỚI?** <:ChickenEden:929567806834495588>")
        .setDescription("Phiên bản bot: \`v3.0.0\`\nPrefix: \`c/\`")
        .addField("Update phiên bản 2.5.0", "Đã cập nhật đầy đủ case Discord.js và\nthêm một số hành động trong case Action!")
        .addField("Phiên bản 3.0.0 ra mắt!", "v3.0.0 đã có, hãy trải nghiệm ngay với nhiều tính năng mới!")
        .setFooter("page 1/2")
        message.channel.send({embeds:[Embed]})
    }
}
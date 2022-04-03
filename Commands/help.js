const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle("HELP BOARD :recycle: CYSORY COM")
    .setDescription("Danh sách lệnh của bot Cysory \n Prefix của bot là: \`c/\` \n Cần thêm sự trợ giúp? hãy tham gia server bên dưới! \n Nhập \`c/help {tên lệnh}\` để xem kĩ thông tin của lệnh \n Vì code có giới hạn nên thay vì bấm cách 1 lần thì hãy bấm space 2 lần rồi mới mention nhé!")
    .addField("❯ Fun [3 lệnh]", "\`avatar\`  \`BKAV\` \`whois\`")
    .addField("❯ Info [3 lệnh]", "\`botinfo\` \`invite\` \`ping\`")
    .setFooter("bot coded by Kravon Lidan #0378", "https://cdn.discordapp.com/avatars/867741983774212166/dab0ed9e326f4feb3164bc11215c7d0a.png?size=4096")
    .setColor("AQUA")
    message.channel.send({embeds:[helpEmbed]})
}

exports.name = "help"

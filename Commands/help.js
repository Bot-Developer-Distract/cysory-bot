const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle("HELP BOARD :recycle: CYSORY COM")
    .setDescription(`Danh sách lệnh của bot Cysory \n Prefix của bot là: \`c/\`\nTổng lệnh hiện có: ${client.commands.size} \n Cần thêm sự trợ giúp? hãy tham gia server bên dưới! \n Nhập \`c/help {tên lệnh}\` để xem kĩ thông tin của lệnh\nVì code có giới hạn nên thay vì bấm cách 1 lần thì hãy bấm space 2 lần rồi mới mention nhé!`)
    .addField("❯ Action [3 lệnh]", "\`punch\` \`huấn\` \`chat\`")
    .addField("❯ Discord.js [3 lệnh]", "\`djs\` \`djs BOT TOKEN\` \`djs MAIN FILE\`")
    .addField("❯ Fun [3 lệnh]", "\`avatar\`  \`BKAV\` \`whois\`")
    .addField("❯ Info [3 lệnh]", "\`botinfo\` \`invite\` \`ping\`")
    .addField("❯ Moderator [4 lệnh]", "\`kick\` \`ban\` \`threadcreate\` \`threaddel\`")
    .setFooter("bot coded by Kravon Lidan #0378", "https://cdn.discordapp.com/avatars/867741983774212166/dab0ed9e326f4feb3164bc11215c7d0a.png?size=4096")
    message.channel.send({embeds:[helpEmbed]})
    message.channel.send("\`\`\`Cần nhiều sự giúp đỡ hơn? hay có gì khúc mắc? hãy join ngay server này:https://discord.gg/GvVdEK2QPP hoặc nhắn qua DMs cho progammer: Kravon Lidan#0378\`\`\`")
}

exports.name = "help"

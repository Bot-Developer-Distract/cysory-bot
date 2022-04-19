const Discord = require("discord.js")

module.exports = {
    commands: ['help'],
    description: 'Help board for user',

    callback: (message, args) => {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle("HELP BOARD :recycle: CYSORY COM")
        .setDescription(`Danh sách lệnh của bot Cysory \n===========================\nPrefix của bot là: \`c/\`\n===========================\nTổng lệnh hiện có: \`26\`\n===========================\nVì code có giới hạn nên thay vì bấm cách 1 lần thì hãy bấm space 2 lần rồi mới mention nhé!`)
        .addField("❯ Action [3 lệnh]", "\`punch\` \`huấn\` \`chat\`")
        .addField("❯ Fun [5 lệnh]", "\`8 ball\` \`hack\` \`avatar\` \`BKAV\` \`whois\`")
        .addField("❯ Info [4 lệnh]", "\`botinfo\` \`newupdate\` \`invite\` \`ping\`")
        .addField("❯ Moderator [4 lệnh]", "\`kick\` \`ban\` \`threadcreate\` \`threaddel\`")
        .setFooter("bot coded by Kravon Lidan #0378", "https://cdn.discordapp.com/avatars/867741983774212166/dab0ed9e326f4feb3164bc11215c7d0a.png?size=4096")
        message.channel.send({embeds:[helpEmbed]})
        message.channel.send("\`\`\`Cần nhiều sự giúp đỡ hơn? hay có gì khúc mắc? hãy join ngay server: https://discord.gg/GvVdEK2QPP hoặc nhắn qua DMs cho progammer: Kravon Lidan#0378\`\`\`")
    }
}


const Discord = require("discord.js")
module.exports = {
    commands: ['help'],
    description: 'Help board for user',

    callback: (message, args, client) => {
        const helpEmbed = new Discord.MessageEmbed()
        .setTitle("HELP BOARD :recycle: CYSORY COM")
        .setDescription(`Danh sách lệnh của bot Cysory \n===========================\nPrefix của bot là: \`c/\`\n===========================\nTổng Lệnh: \`32\`\n===========================\nGõ \`c/help command\` để nhận sự trợ giúp về lệnh\n===========================\nVì code có giới hạn nên thay vì bấm cách 1 lần thì hãy bấm space 2 lần rồi mới mention nhé!`)
        .addField("❯ Action [4 lệnh]", "\`punch\` \`huấn\` \`chat\` \`kiss\`")
        .addField("❯ Economy [7 lệnh]", "\`balance\` \`beg\` \`daily\` \`deposit\` \`fishing\` \`give\` \`withdraw\`")
        .addField("❯ Fun [6 lệnh]", "\`8 ball\` \`hack\` \`avatar\` \`fakeban\` \`BKAV\` \`userinfo\`")
        .addField("❯ Info [7 lệnh]", "\`botinfo\` \`help command\` \`membercount\` \`severinfo\` \`newupdate\` \`invite\` \`ping\`")
        .addField("❯ Moderator [8 lệnh]", "\`kick\` \`ban\` \`threadcreate\` \`threaddel\` \`clear\` \`mute\` \`unmute\` \`warn\`")
        .setFooter("bot coded by Kravon Lidan #0378", "https://cdn.discordapp.com/avatars/867741983774212166/28d2f34b219f4b7bcccb374f98a51574.png?size=1024")
        message.channel.send({embeds:[helpEmbed]})
        message.channel.send("\`\`\`Cần nhiều sự giúp đỡ hơn? hay có gì khúc mắc? hãy join ngay server: https://discord.gg/PxXmrbj5Vw hoặc nhắn qua DMs cho progammer: Kravon Lidan#0378\`\`\`")
    }
}
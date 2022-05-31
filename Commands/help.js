const Discord = require("discord.js")
module.exports = {
    commands: ['help'],
    description: 'Help board for user',

    callback: (message, args, client) => {
        const But = new Discord.MessageButton()
        .setLabel('〽️ Join')
        .setStyle('LINK')
        .setURL('https://discord.gg/JU9VGsvvRj')
        
        const row = new Discord.MessageActionRow()
        .addComponents([But])

        const helpEmbed = new Discord.MessageEmbed()
        .setTitle("HELP BOARD <a:629745696576110593:974903524620128297> CYSORY COM")
        .setDescription(`Danh sách lệnh của bot Cysory \n===========================\nPrefix của bot là: \`c/\`\n===========================\nTổng Lệnh: \`46\`\n===========================\nGõ \`c/command\` để nhận sự trợ giúp về lệnh`)
        .addField("❯ Action [6 lệnh]", "`punch` `huấn` `hug` `kill` `chat` `kiss`")
        .addField("❯ Economy [15 lệnh]", "`balance` `beg` `daily` `deposit` `fishing` `give` `withdraw` `coinflip` `inventory` `mining` `rank` `slot` `shop` `buy` `sell` `box`")
        .addField("❯ Fun [9 lệnh]", "`8 ball` `hack` `avatar` `fakeban` `BKAV` `userinfo` `gay` `ttt` `rps`")
        .addField("❯ Info [8 lệnh]", "`botinfo` `help command` `weather` `membercount` `severinfo` `newupdate` `invite` `ping`")
        .addField("❯ Moderator [8 lệnh]", "`kick` `ban` `threadcreate` `threaddel` `clear` `warn` `resetprefix` `prefix`")
        .setFooter("bot coded by Kravon Lidan#0378", "https://cdn.discordapp.com/avatars/867741983774212166/28d2f34b219f4b7bcccb374f98a51574.png?size=1024")
        message.channel.send({embeds:[helpEmbed]})
        message.channel.send({ content: '```hãy join ngay server bên dưới để được nhận 50,000 cusy!```', components: [row] })
    }
}
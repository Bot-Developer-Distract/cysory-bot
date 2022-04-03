const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const  botinfoEmbed = new Discord.MessageEmbed()
    .setTitle("Information of Cysory com. bot")
    .addField("Users", `\`Total: ${client.users.cache.size} Users\``, true)
    .addField("Servers", `\`Total: ${client.guilds.cache.size} Servers\``, true)
    .addField("Discord.js", `\`v${Discord.version}\``, true)
    .addField("Company", "\`Cysory com.\`")
    .setFooter("bot coded by Kravon Lidan #0378", "https://cdn.discordapp.com/avatars/867741983774212166/dab0ed9e326f4feb3164bc11215c7d0a.png?size=4096")
    .setColor("AQUA")
    message.channel.send({embeds:[botinfoEmbed]})
}

exports.name = "botinfo"
const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> CREATING COMMANDS/ tạo lệnh đầu tiên của bạn từ những command đơn giản như lệnh \`ping\`\nMẫu code:\n\`\`\`// đăng nhập vào client\nclient.on(\"message\", message => {\n    if (message.content === 'ping') {\n        message.channel.send(`pong! ${client.ws.ping} ms`)\n    }\n})\`\`\`")
    .setURL("https://discordjs.guide/creating-your-bot/creating-commands.html#registering-commands")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs CREATING COMMANDS"
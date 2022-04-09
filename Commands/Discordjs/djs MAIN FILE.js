const Discord = require('discord.js')
exports.run = (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle("read more at here")
    .setDescription("<:__:961940510799462440> MAIN FILE và cách làm bot online, cũng như login và client vào bot\nmẫu code\n\`\`\`// Thêm một số biến cho Discord.js\nconst { Client, Intents } = require('discord.js');\nconst { token } = require('./config.json');\n\n// Tạo 1 biến cho client\nconst client = new Client({ intents: [Intents.FLAGS.GUILDS] });\n\n// Khi mà client đã sẵn sàng, hãy chạy đoạn code này (chỉ 1 cái)\nclient.once('ready', () => {\n    console.log('Sẵn Sàng!');\n});\n\n// Đăng nhập bot vào Discord bằng token của bot\nclient.login(token);\`\`\`")
    .setURL("https://discordjs.guide/creating-your-bot/#creating-the-main-file")
    .setImage("https://cdn.discordapp.com/attachments/960790121567891482/962186547757711360/unknown.png")
    message.channel.send({embeds:[Embed]})
}

exports.name = "djs MAIN FILE"
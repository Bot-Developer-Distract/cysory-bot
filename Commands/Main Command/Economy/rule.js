const Discord = require('discord.js')
module.exports = {
    commands: ['rule'],
    description: 'rule about cusy economy',
    callback: (message, args, client) => {
        const Embed = new Discord.MessageEmbed()
        .setTitle('**HÃY TUÂN THỦ LUẬT LỆ CỦA BOT TRƯỚC KHI THAM GIA CỜ BẠC!**')
        .setDescription('• Bất kỳ hành động cheat/hack giá trị của bot đều vi phạm quy tắc sử dụng bot. Điều này bao gồm:\n╠⟹ Sử dụng engine cho bất kỳ lệnh nào\n╠⟹ Sử dụng tài khoản có cày sẵn cusy\n╠⟹ Trao đổi bất hợp pháp sẽ bị remove hết tất cả cusy và không thể chơi tiếp\n╚⟹ Hạn chế cho cusy người khác, nếu bị scam không chịu trách nhiệm\n\n• Nếu bạn có bất kỳ câu hỏi nào, hãy vào [server này](https://dsc.gg/yuuna)')
        message.channel.send({embeds:[Embed]})
    }
}
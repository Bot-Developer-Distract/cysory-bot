const db = require('quick.db')

module.exports = {
    commands: ['setprefix', 'sp', 'prefix'], 
    description: 'Set Prefix For Server', 
    permissions: 'MANAGE_GUILD', 
    permissionError: '**🚫 |** Bạn không thể reset prefix vì không có \`ADMINISTRATOR\`!',

    callback: async(message, args, client) => {

        const newprefix = args[0] 
        if(!newprefix) return message.reply('Bạn muốn chuyển prefix thành ký hiệu gì?') 
        else if(newprefix.length > 3) return message.reply('uh ho.. prefix dài quá (ít nhất là 3 chữ cái)') 
        else {
            message.reply(`Prefix đã chuyển thành: \`${newprefix}\``)
            message.channel.send('```Trong trường hợp bị quên prefix, hãy liên hệ ngay\nvới Kravon Lidan#0378 để khắc phục!```')
            db.set(`prefix_${message.guild.id}`, newprefix) 
        }
    }
}
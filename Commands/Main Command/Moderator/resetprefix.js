const db = require('quick.db')

module.exports = {
    commands: ['resetprefix', 'rp'],
    description: 'ReSet Prefix For Server', 
    permissions: 'MANAGE_GUILD', 
    permissionError: 'Bạn không thể reset prefix vì không có \`ADMINISTRATOR\`!', 

    callback: async(message, args, client) => {

        const prefix = db.fetch(`prefix_${message.guild.id}`)
        if(prefix === null) return message.reply('Custom prefix chưa được cài cho sv này!')
        else if(prefix !== null) {
            message.reply('Prefix được chuyển về nguyên thể: `c/`')
            db.delete(`prefix_${message.guild.id}`)
        }
    }
}
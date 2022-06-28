const trans = require('@iamtraction/google-translate')

module.exports = {
    commands: ['trans', 'translate'],
    description: 'translate a word to another language',
    callback: async(message, args, client) => {
        const word = args.slice(1).join(' ')
        if (!args[0]) return message.reply('**🚫 |** Xin hãy ghi ngôn ngữ!')
        if (!word) return message.reply('**🚫 |** Xin hãy ghi gì đó!')
        const transted = await trans(word, {to: args[0]})
        message.channel.send(`Gốc: \`${word}\`\nDịch: \`${transted.text}\``)
    }
}
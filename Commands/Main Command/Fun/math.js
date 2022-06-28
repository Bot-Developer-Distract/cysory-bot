const math = require('mathjs')
module.exports = {
    commands: ['math', 'cal'],
    description: 'calculate a math question',
    callback: (message, args, client) => {
        const ques = args.join(' ')
        try {
            message.channel.send(ques+' = '+math.evaluate(ques))
        } catch (error) {
            message.reply('**🚫 |** Phép tính không hợp lệ!')
        }
    }
}
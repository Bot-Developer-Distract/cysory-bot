module.exports = {
    commands: 'pick',
    callback: (message, args) => {
        const c1 = args[0]
        const c2 = args[1]

        if (!c1) return message.reply('**🚫 |** Xin hãy ghi giá trị thứ nhất!')
        if (!c2) return message.reply('**🚫 |** Xin hãy ghi giá trị thứ hai!')

        const roll = [
            c1,
            c2
        ]
        const rnd = roll[Math.floor(Math.random() * roll.length)]
        message.channel.send(rnd)
    }
}
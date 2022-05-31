module.exports = {
    commands: ['say'],
    permissions: 'ADMINISTRATOR',
    permissionError: '...',
    
    callback: (message, args) => {
        const input = args.join(' ')
        message.delete()
        message.channel.send(input)
    }
}
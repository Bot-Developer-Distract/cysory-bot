const db = require('quick.db')
module.exports = {
   commands: 'note',
   callback: (message, args) => {
      const User = message.member
      const input = args.join(' ')
      db.set(`note_${User.id}`, input)
      message.channel.send('✅')
   }
}

module.exports = {
   commands: 'task',
   callback: (message) => {
      const User = message.member
      const db = require('quick.db')
      const note = db.fetch(`note_${User.id}`)
      message.channel.send(`${note}`)
   }
}

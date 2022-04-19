const Discord = require('discord.js')
const { token } = require('./config.json')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS",
  "GUILD_INTEGRATIONS", "GUILD_MESSAGE_TYPING", "GUILD_PRESENCES"],
  allowedMentions: ["users"]
})
const loadCommands = require('./commands/load-commands'); // Add This

client.once('ready', () => {
  // console log case
  {
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    console.log("┃                                                                  ┃")
    console.log("┃                     Đang kiểm tra hệ thống...                    ┃")
    console.log("┃                                                                  ┃")
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    console.log("┃                                                                  ┃")
    console.log("┃                Cysory bot đã sẵn sàng hoạt động!                 ┃")
    console.log("┃                                                                  ┃")
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
  }
  
  setInterval(() => {
      const statuses = [
          `c/help | Kravon Lidan#0378`,
          `c/help | Among Us`,
          `c/help | Ukraine and Russia's war`,
          `c/help | Exp 401`,
          `c/help | Elder Ring`,
      ]

      const status = statuses[Math.floor(Math.random() * statuses.length)]
      client.user.setActivity(status, { type: "PLAYING"}) // Can Be WATCHING, STREAMING, LISTENING
  }, 2000) // Second You Want to Change Status, This Cahnges Every 2 Seconds
  loadCommands(client) // Add This
})

// say command
{
  client.on("message", message => {
    const args = message.content.split(' ')
    const cmd = args.shift().toLowerCase()
    switch(cmd) {
      case 'say':
        if (message.deletable) message.delete()
        message.channel.send(args.join(' '))
        break;
    }
  })
}

client.login(token)
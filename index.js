const Discord = require('discord.js')
const { token } = require('./config.json')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS",
  "GUILD_INTEGRATIONS", "GUILD_MESSAGE_TYPING", "GUILD_PRESENCES"],
  allowedMentions: ["users"]
})
const loadCommands = require('./commands/load-commands')

client.on('ready', () => {
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
  
  // activity case
  setInterval(() => {
      const statuses = [
          `c/help | Kravon Lidan#0378`,
          `${client.guilds.cache.size} sever | c/help`,
          `Cysory đã 3 tuổi! | c/help`,
          `The Backroom | c/help`,
          `In Coding | c/help`,
      ]

      const status = statuses[Math.floor(Math.random() * statuses.length)]
      client.user.setActivity(status, { type: "PLAYING"})
  }, 2000) 
  loadCommands(client)
})

client.login(token)
const Discord = require('discord.js')
const { token } = require('./config.json')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS",
  "GUILD_INTEGRATIONS", "GUILD_MESSAGE_TYPING", "GUILD_PRESENCES"]
})
const loadCommands = require('./Commands/load-commands')
const db = require('quick.db')

client.on('ready', () => {
  // console log case
  {
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    console.log("┃                                         ┃")
    console.log("┃    Cysory bot đã sẵn sàng hoạt động!    ┃")
    console.log("┃                                         ┃")
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
  }
  
  // activity case
  setInterval(() => {
      const statuses = [
          `c/help | Kravon Lidan#0378`,
          `Cysory đã 3 tuổi! | c/help`,
          `The Backroom | c/help`,
          `${client.guilds.cache.size} sever | c/help`,
          `In Coding | c/help`,
      ]

      const status = statuses[Math.floor(Math.random() * statuses.length)]
      client.user.setActivity(status, { type: "PLAYING"})
  }, 2000) 
  loadCommands(client)
})

// ping to search
client.on('message', message => {
  if (message.content.startsWith('<@953142094720016444>')) {
    const prefix = db.fetch(`prefix_${message.guild.id}`)
    const Embed = new Discord.MessageEmbed()
    .setTitle(`Heyyyyy prefix của mình trên server này là [\`${prefix}\`] nha`)
    .setDescription('Prefix cố định [`c/`]')
    message.channel.send({embeds:[Embed]})
  }
})

// tictactoe game
const TicTacToe = require('discord-tictactoe')

new TicTacToe({
  token: token,
  language: 'vi',
  command: 'tictactoe',
  commandOptionName: 'opponent',
  textCommand: `c/ttt`
})
.login()

client.login(token)
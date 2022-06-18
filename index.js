const Discord = require('discord.js')
const { token } = require('./config.json')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS",
  "GUILD_INTEGRATIONS", "GUILD_MESSAGE_TYPING", "GUILD_PRESENCES",
  "GUILD_WEBHOOKS", "GUILD_SCHEDULED_EVENTS", "GUILD_INVITES",
  "GUILD_MESSAGE_REACTIONS"]
})
const loadCommands = require('./Commands/load-commands')
const db = require('quick.db')
const Canvas = require('canvas');
const { join } = require("path")

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


// welcome canvas
client.on('guildMemberAdd', async member => {
  const welcome = '986819503969165342'
  if(!member.guild) return

  const canvas = Canvas.createCanvas(1770, 635)
  const ctx = canvas.getContext('2d')
  const background = await Canvas.loadImage(join(__dirname, './Image', 'parallax.jpg'))
  ctx.drawImage(background, 0 ,0, canvas.width, canvas.height)
  ctx.strokeStyle = '#FFFFFF'

  ctx.strokeRect(0, 0, canvas.width, canvas.height)
  var name = `${member.user.username}`
  if(name.length >= 16) {
      ctx.font = '100px Century Gothic'
      ctx.fillStyle = '#ffffff'
      ctx.fillText(name, 680, canvas.height / 2 - 1) 
  } else {
      ctx.font = '130px Century Gothic'
      ctx.fillStyle = '#ffffff'
      ctx.fillText(name, 680, canvas.height / 2 - 1)
  }

  var discrim = `#${member.user.discriminator}`
  ctx.font = '130px Century Gothic'
  ctx.fillStyle = '#75726f'
  ctx.fillText(discrim, 1360, canvas.height / 2 + 13) 

  var server = `${member.guild.name}` 
  ctx.font = '80px Bauhaus 93'
  ctx.fillStyle = '#ffffff'
  ctx.fillText(server, 680, canvas.height / 2 - 100)

  var count = `Bạn là thành viên thứ #${member.guild.memberCount}`
  ctx.font = '80px Source Sans Pro SemiBold' 
  ctx.fillStyle = '#82bd9e'
  ctx.fillText(count, 690, canvas.height / 2 + 80)

  ctx.beginPath()
  ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.clip()

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }))
  ctx.drawImage(avatar, 65, canvas.height / 2- 250, 500, 500)

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'parallax.jpg')

  const channel = member.guild.channels.cache.get(welcome)
  channel.send({content: `> Chào mừng ${member} đã đến với cộng đồng Artist của bọn mình\n> Hãy đọc kĩ luật lệ và bắt đầu khám phá nhé!`, files: [attachment]}) // Send Embed
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
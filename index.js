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
  user.send('Cảm ơn bạn đã tham gia server của tụi mình, mình đã thêm 5,000 cusy vào tài khoản của bạn rồi!')
  const channel = member.guild.channels.cache.get(welcome)
  const Avt = member.user.displayAvatarURL({ format: 'png', size: 1024, dynamic: true })
  const Embed4 = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, Avt)
  .setThumbnail(Avt)
  .setDescription(`Hãy đọc kĩ luật lệ tại <#986580318913982474> và bắt đầu khám phá nhé!\nPick role tại <#987164402014883920> nhé\nBạn là thành viên thứ __**${member.guild.memberCount}**__ của server này!`)
  .setImage('https://media.discordapp.net/attachments/986882603028197376/987589492930138122/ED7AB1B6-08C0-4A80-8EAA-962C8317AD60.jpg')
  .setFooter('Artist Designer Community 2022 ~')
  channel.send({content: `> Chào mừng ${member} ${member.user.discriminator} đã đến với cộng đồng Artist của bọn mình`, embeds: [Embed4]}) 
})

// Leave Message
client.on('guildMemberRemove', async member => {
  const Leavechan = '987593068259737640'
  if (!member.guild) return
  const channel2 = member.guild.channels.cache.get(Leavechan)
  channel2.send(`${member} đã rời khỏi server, mong bạn sẽ quay lại.. 👋`)
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

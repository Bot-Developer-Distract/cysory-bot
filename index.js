const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { token } = require('./config.json')
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS"],
  allowedMentions: ["users"]
})
const fs = require("fs")
const prefix = "c/"

client.on("ready", () => {
  // console log case
  {
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    console.log("┃                                                                  ┃")
    console.log("┃                     Đang kiểm tra hệ thống...                    ┃")
    console.log("┃                                                                  ┃")
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    console.log("┃                                                                  ┃")
    console.log("┃                        Command is ready!                         ┃")
    console.log("┃                                                                  ┃")
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
    console.log("┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    console.log("┃                                                                  ┃")
    console.log("┃                Cysory bot đã sẵn sàng hoạt động!                 ┃")
    console.log("┃                                                                  ┃")
    console.log("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
  }
  // activity
  client.user.setPresence({
    activities: [{name: `${prefix}help | Kravon Lidan#0378`}],
    status: 'online'
  })
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
// command handler
{
// help command
{
  client.helps = new Discord.Collection()
  const helps = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
  for (file of helps) {
    const helpcm = file.split(".")[0]
    const help = require(`./Commands/${helpcm}`)
    client.helps.set(helpcm, help)
  }
  client.on("message", message => {
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ + /g)
      const helpcm = args.shift()
      const help = client.helps.get(helpcm)
      if(!help) return
      help.run(client, message, args)
    }
  })
}
// Fun case
{
  client.commands = new Discord.Collection()
  const commands = fs.readdirSync("./Commands/Fun").filter(file => file.endsWith(".js"))
  for (file of commands) {
    const commandName = file.split(".")[0]
    const command = require(`./Commands/Fun/${commandName}`)
    client.commands.set(commandName,command)
  }
  client.on("message", message => {
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ + /g)
      const commandName = args.shift()
      const command = client.commands.get(commandName)
      if(!command) return
      command.run(client, message, args)
    }
  })
}
// help command base
{
  client.helpcommands = new Discord.Collection()
  const helpcommands = fs.readdirSync("./Help Commands").filter(file => file.endsWith(".js"))
  for (file of helpcommands) {
    const helpName = file.split(".")[0]
    const helpcms = require(`./Help Commands/${helpName}`)
    client.helpcommands.set(helpName, helpcms)
  }
  client.on("message", message => {
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ + /g)
      const helpName = args.shift()
      const helpcms = client.helpcommands.get(helpName)
      if(!helpcms) return
      helpcms.run(client, message, args)
    }
  })
}
// Info Case
{
  client.infos = new Discord.Collection()
  const infos = fs.readdirSync("./Commands/Info").filter(file => file.endsWith(".js"))
  for (file of infos) {
    const infoName = file.split(".")[0]
    const info = require(`./Commands/Info/${infoName}`)
    client.infos.set(infoName, info)
  }
  client.on("message", message => {
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ + /g)
      const infoName = args.shift()
      const info = client.infos.get(infoName)
      if(!info) return
      info.run(client, message, args)
    }
  })
}
// Action Case
{
  client.Actions = new Discord.Collection()
  const Actions = fs.readdirSync("./Commands/Action").filter(file => file.endsWith(".js"))
  for (file of Actions) {
    const ActionName = file.split(".")[0]
    const Action = require(`./Commands/Action/${ActionName}`)
    client.Actions.set(ActionName, Action)
  }
  client.on("message", message => {
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ + /g)
      const ActionName = args.shift()
      const Action = client.Actions.get(ActionName)
      if(!Action) return
      Action.run(client, message, args)
    }
  })
}
// Moderator Case
{
  client.Mods = new Discord.Collection()
  const Mods = fs.readdirSync("./Commands/Moderator").filter(file => file.endsWith(".js"))
  for (file of Mods) {
    const ModName = file.split(".")[0]
    const mod = require(`./Commands/Moderator/${ModName}`)
    client.Mods.set(ModName, mod)
  }
  client.on("message", message => {
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ + /g)
      const ModName = args.shift()
      const mod = client.Mods.get(ModName)
      if(!mod) return
      mod.run(client, message, args)
    }
  })
}
}

client.login(token);
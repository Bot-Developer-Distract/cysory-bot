const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    commands: ['storage', 'sto'],
    description: 'check the storage',
    callback: (message, args) => {
        const User = message.member
        let food = db.fetch(`food_${User.id}`)
        let FlameDragon = db.fetch(`Flame_${User.id}`)
        let IceDragon = db.fetch(`Ice_${User.id}`)
        let TerraDragon = db.fetch(`Terra_${User.id}`)
        let EmperorGardDragon = db.fetch(`EG_${User.id}`)
        
        if (food === null) {
            food = '0'
        }
        if (FlameDragon === null) {
            FlameDragon = '0'
        }
        if (IceDragon === null) {
            IceDragon = '0'
        }
        if (TerraDragon === null) {
            TerraDragon = '0'
        }
        if (EmperorGardDragon === null) {
            EmperorGardDragon = '0'
        }

        const Embed = new Discord.MessageEmbed()
        .setDescription(`\`\`\`js\nRồng Lửa : ${FlameDragon} con\nRồng Băng : ${IceDragon} con\nRồng Đất : ${TerraDragon} con\nRồng Emperor Gard : ${EmperorGardDragon} con\`\`\``)

        const EmbedFood = new Discord.MessageEmbed()
        .setDescription(`\`\`\`js\nThức ăn : ${food} quả\`\`\``)

        const but1 = new Discord.MessageButton()
        .setCustomId('food-')
        .setLabel('FOOD')
        .setStyle('SUCCESS')

        const but2 = new Discord.MessageButton()
        .setCustomId('dragon-')
        .setLabel('DRAGON')
        .setStyle('SUCCESS')

        const row = new Discord.MessageActionRow()
        .addComponents([but1, but2])

        message.channel.send({ embeds: [Embed], components: [row] })
        const collector = message.channel.createMessageComponentCollector({ time: 99999999 })

        collector.on('collect', async i => {
            if (i.customId === 'food-') {
                i.update({ embeds: [EmbedFood] })
            }
            if (i.customId === 'dragon-') {
                i.update({ embeds: [Embed] })
            }
        })
    }
}
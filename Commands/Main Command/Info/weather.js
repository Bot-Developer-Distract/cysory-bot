const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    commands: ['weather', 'wt'],
    description: "shows the current weather in a specified location",

    callback: (message, args) => {
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('**🚫 |** Xin hãy ghi nơi!')

            if(result === undefined || result.length === 0) return message.reply('**🚫 |** vị trí không tồn tại!')

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setAuthor(`Thông tin thời tiết ở ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('Múi giờ', `UTC ${location.timezone}`, true)
            .addField('Loại nhiệt độ', 'Độ C', true)
            .addField('Nhiệt độ', `${current.temperature}°C`, true) 
            .addField('Tốc độ gió', `${current.winddisplay}`, true)
            .addField('Cảm giác như', `${current.feelslike}°C`, true)
            .addField('Độ ẩm', `${current.humidity}%`, true)

            message.channel.send({embeds:[embed]})
        })
    }
}
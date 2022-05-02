const Discord = require("discord.js")
module.exports = {
    commands: ['botinfo', 'bot4'],
    description: 'information about bot',

    callback: (message, args, _, client) => {
        let os = require("os");
        const botinfoEmbed = new Discord.MessageEmbed()
        .setTitle("Information of Cysory com. bot")
        .addField("Users", `\`Total: ${client.users.cache.size} Users\``, true)
        .addField("Servers", `\`Total: ${client.guilds.cache.size} Servers\``, true)
        .addField("Discord.js", `\`v${Discord.version}\``, true)
        .addField("Node", `\`${process.version}\``, true)
        .addField("Memory Usage", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
        .addField("Uptime ", `${duration(client.uptime).map(i=>`\`${i}\``).join(", ")}`, true)
        .addField("Company", "\`Cysory com.\`")
        .setFooter("bot coded by Kravon Lidan #0378", "https://cdn.discordapp.com/avatars/867741983774212166/28d2f34b219f4b7bcccb374f98a51574.png?size=1024")
        message.channel.send({embeds:[botinfoEmbed]})
    
        function duration(duration, useMilli = false) {
            let remain = duration;
            let days = Math.floor(remain / (1000 * 60 * 60 * 24));
            remain = remain % (1000 * 60 * 60 * 24);
            let hours = Math.floor(remain / (1000 * 60 * 60));
            remain = remain % (1000 * 60 * 60);
            let minutes = Math.floor(remain / (1000 * 60));
            remain = remain % (1000 * 60);
            let seconds = Math.floor(remain / (1000));
            remain = remain % (1000);
            let milliseconds = remain;
            let time = {
                days,
                hours,
                minutes,
                seconds,
                milliseconds
            };
            let parts = []
            if (time.days) {
                let ret = time.days + ' Day'
                if (time.days !== 1) {
                    ret += 's'
                }
                parts.push(ret)
            }
            if (time.hours) {
                let ret = time.hours + ' Hr'
                if (time.hours !== 1) {
                    ret += 's'
                }
                parts.push(ret)
            }
            if (time.minutes) {
                let ret = time.minutes + ' Min'
                if (time.minutes !== 1) {
                    ret += 's'
                }
                parts.push(ret)
    
            }
            if (time.seconds) {
                let ret = time.seconds + ' Sec'
                if (time.seconds !== 1) {
                    ret += 's'
                }
                parts.push(ret)
            }
            if (useMilli && time.milliseconds) {
                let ret = time.milliseconds + ' ms'
                parts.push(ret)
            }
            if (parts.length === 0) {
                return ['instantly']
            } else {
                return parts
            }
        }
        return;
    }
}
const Discord = require('discord.js')
module.exports = {
    commands: ['hamster'],
    description: 'image about hamster',
    callback: (message) => {
        const User = message.member
        const link = [
            'https://file.hstatic.net/200000391405/file/cach-nhan-biet-cac-loai-hamster-01_7763b2a70d0e4cff96bef1691606080c.png',
            'https://jola.vn/Article/3wCy_9DVb/GettyImages-85413152-581786ad3df78cc2e8f41a26.jpg',
            'https://petacy.com/wp-content/uploads/2019/10/hamster-lun.jpg',
            'https://kenh14cdn.com/thumb_w/660/2020/1/18/va02540-1579281383148988639491.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAQwcgNDfBLbHijc8I_poTAe4rwa691kZAWg&usqp=CAU',
            'https://lolipet.net/wp-content/uploads/%C4%83n-tr%C3%AAn-tay-2.jpg',
            'https://vuongquocloaivat.com/wp-content/uploads/2021/06/giong-chuot-hamster-winter-white.jpg',
            'https://3.bp.blogspot.com/-POoW5r4JVSs/VoOfWEWkevI/AAAAAAAAAZU/UKpKwvadx0I/s640/cam-nang-cach-nuoi-cham-soc-hamster-chuot-canh.jpg',
            'https://cdn1.tuoitre.vn/zoom/600_315/tto/i/s626/2008/02/28/XddfmWVV.jpg'
        ]
        const ranLink = link[Math.floor(Math.random() * link.length)]

        const Embed = new Discord.MessageEmbed()
        .setImage(ranLink)
        .setFooter(`yêu cầu bởi ${User.user.tag}`, `${message.author.displayAvatarURL({ format: 'png', size: 1024, dynamic: true })}`)
        .setColor('AQUA')
        message.channel.send({embeds:[Embed]})
    }
}
const Discord = require('discord.js')
module.exports = {
    commands: ['cat'],
    description: 'image about cat',
    callback: (message) => {
        const User = message.member
        const link = [
            'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
            'https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip',
            'https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1C8VUZKRTSa-9p9vkK0IWvUPX6g1ZkDNQqg&usqp=CAU',
            'https://s.w-x.co/in-cat_in_glasses.jpg',
            'https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/shutterstock_707431309-e1554172878508.jpg',
            'https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
            'https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-640x514.jpg',
            'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg',
            'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
            'https://www.thesprucepets.com/thmb/ojZvIbCjmxGFhwf7w1aRRJ0Eejo=/420x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-cat-breeds-4801270-hero-7f4a958430174ea2be825fb80daf0645.jpg',
            'https://images.immediate.co.uk/production/volatile/sites/4/2018/08/iStock_13967830_XLARGE-90f249d.jpg?quality=90&resize=940,400',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7JCP_0OzYFxwoboGZuIhYRZXfPesPjuym9g&usqp=CAU'
        ]
        const ranLink = link[Math.floor(Math.random() * link.length)]

        const Embed = new Discord.MessageEmbed()
        .setImage(ranLink)
        .setFooter(`yêu cầu bởi ${User.user.tag}`, `${message.author.displayAvatarURL({ format: 'png', size: 1024, dynamic: true })}`)
        .setColor('AQUA')
        message.channel.send({embeds:[Embed]})
    }
}
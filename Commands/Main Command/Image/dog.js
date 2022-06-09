const Discord = require('discord.js')
module.exports = {
    commands: ['dog'],
    description: 'image about dog',
    callback: (message) => {
        const User = message.member
        const link = [
            'https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo=',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg',
            'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn',
            'https://media.npr.org/assets/img/2021/08/06/dog-4415649-18eab39206426b985f7a5f69e3146a2cd1a56c0d-s1100-c50.jpg',
            'https://www.science.org/do/10.1126/science.aba2340/abs/dogs_1280p_0.jpg',
            'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftb3llZHxlbnwwfHwwfHw%3D&w=1000&q=80',
            'https://i.natgeofe.com/n/3faa2b6a-f351-4995-8fff-36d145116882/domestic-dog_16x9.jpg',
            'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg',
            'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900',
            'https://www.thesprucepets.com/thmb/et0R6AiQHOqP9s4WGHcfKBDPjVo=/2667x2000/smart/filters:no_upscale()/cute-teacup-dog-breeds-4587847-hero-4e1112e93c68438eb0e22f505f739b74.jpg',
        ]
        const ranLink = link[Math.floor(Math.random() * link.length)]

        const Embed = new Discord.MessageEmbed()
        .setImage(ranLink)
        .setFooter(`yêu cầu bởi ${User.user.tag}`, `${message.author.displayAvatarURL({ format: 'png', size: 1024, dynamic: true })}`)
        .setColor('AQUA')
        message.channel.send({embeds:[Embed]})
    }
}
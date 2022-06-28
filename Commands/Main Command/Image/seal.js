const Discord = require('discord.js')
module.exports = {
    commands: ['seal'],
    description: 'image about seal',
    callback: (message) => {
        const User = message.member
        const link = [
            'https://play-lh.googleusercontent.com/UR7IlF8Olsk1Nzs2uksb22oH8gZi4F7CSMxb3WU0bO22FHTQKqtA62EVTZEdI2Zqa-w',
            'https://dictionary.cambridge.org/images/thumb/seal_noun_002_32608.jpg?version=5.0.244',
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/1629B/production/_122697709_salsa2.jpg',
            'https://i.natgeofe.com/n/53129fb3-7738-4008-ac76-677787cd3765/thumbnail-seals-nationalgeographic_2199074_4x3.jpg',
            'https://i.pinimg.com/originals/3d/47/e9/3d47e91bf0fc79cd970fb8de6d0d24e5.jpg',
            'https://www-waddensea-worldheritage-org.cdn.gofasterstripes.download/sites/default/files/styles/main_image_landscape_crop/public/20-11-09_habour%20seals%20report_TTF_5200_1.JPG?itok=NvvEmpGV',
            'https://d.newsweek.com/en/full/2014438/seal.jpg?w=1600&h=1600&q=88&f=f2660613dd1664287d5212bd62c93d3c',
            'https://www-waddensea-worldheritage-org.cdn.gofasterstripes.download/sites/default/files/styles/inline_image_full_width/public/2016_harboursealreport_teaser_andreas%20galatius1_15.jpg?itok=9_GtEBHe',
            'https://i.guim.co.uk/img/media/3edc05f7109ab19a8dedcda84873af64d451b410/0_79_1240_744/master/1240.jpg?width=1200&quality=85&auto=format&fit=max&s=ab5790a6d22259d8d9080c519c71b3bc',
            'https://www.treehugger.com/thmb/4kFQDdin3Xs6382OD2GJmEE83OQ=/2667x2000/smart/filters:no_upscale()/canada-raises-quota-for-controversial-seal-hunt-80400438-5d20f981be8049bc954f8d986170c64d.jpg',
            'https://i.pinimg.com/736x/c6/67/a6/c667a6af5ead388a8c6455bfd26436fe.jpg'
        ]
        const ranLink = link[Math.floor(Math.random() * link.length)]

        const Embed = new Discord.MessageEmbed()
        .setImage(ranLink)
        .setFooter(`yêu cầu bởi ${User.user.tag}`, `${message.author.displayAvatarURL({ format: 'png', size: 1024, dynamic: true })}`)
        .setColor('AQUA')
        message.channel.send({embeds:[Embed]})
    }
}
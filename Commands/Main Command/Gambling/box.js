const maxBet = 150000
const db = require('quick.db')
const c1 = '<:box1:975579489054621696>'
const c2 = '<:box2:975579489029480458>'
const c3 = '<:box3:975579489117564988>'
const c4 = '<:box4:975579489386004490>'
const open1 = '<:open1:975579489172090881>'
const open2 = '<:open2:975579488928825405>'
const open3 = '<:open3:975579489822195712>'
const open4 = '<:open4:975579489402769530>'
module.exports = {
    commands: ['box'],
    description: 'play box choice',

    callback: (message, args, client) => {
        // tính toán
        const User = message.member
        const bal = db.fetch(`money_${User.id}`)
        const choice = args[0]
        let amount = args[1];
        let bet = 1

        if (!amount) {
            amount = bet
        }
        if (amount == 'all') {
            if (bal > maxBet) {
                bet = maxBet;
                amount = maxBet;
            } else {
                bet = bal;
                amount = bal;
            };
        };

        if (choice > 4 || choice < 1) return message.reply('**🚫 |** Chỉ có thể chọn thứ tự hộp từ 1-4!')
        if (!choice) return message.reply('**🚫 |** xin hãy chọn thứ tự hộp từ 1-4')
        if (isNaN(parseInt(choice))) return message.reply(`**🚫 |** \`${amount}\` không phải giá trị loại Số!`)
        if (bal === 0 || bal < 0) return message.reply('**🚫 |** Bạn không đủ tiền!')
		if (amount < 0 || amount === 0) return message.reply('**🚫 |** Tiền cược phải lớn hơn **0**!')
		if (amount > bal) return message.reply('**❓ |** Lol số tiền đó ở đâu thế anh bạn?')
		if (amount > maxBet) return message.reply(`**🚫 |** Tiền cược tối thiểu là \`$${maxbet}\`!`)
		if (isNaN(parseInt(amount))) return message.reply(`**🚫 |** \`${amount}\` không phải giá trị loại Số!`)

        const boxRandom = [
            '1',
            '2',
            '3',
            '4'
        ]
        const boxCal = boxRandom[Math.floor(Math.random() * boxRandom.length)]

        var GameMsg
        if (boxCal === choice) {
            GameMsg = `Bạn đã thắng **$${amount}** cusy <a:Namarich:984796893005639690>!`
            db.add(`money_${User.id}`, amount)
        }
        if (boxCal !== choice) {
            GameMsg = `Bạn đã mất hết cusy... <:frogeCry:929567855597461575>`
            db.subtract(`money_${User.id}`, amount)
        }

        // hiển thị
        const text = `<@${User.user.id}> đã cược **$${amount}** cusy và chọn hộp thứ **${choice}**.`
        message.channel.send(text)
        message.channel.send(`${c1} | ${c2} | ${c3} | ${c4}`)
        var endMess
        if (boxCal === '1') {
            endMess = `${open1} | ${c2} | ${c3} | ${c4}`
        }
        if (boxCal === '2') {
            endMess = `${c1} | ${open2} | ${c3} | ${c4}`
        }
        if (boxCal === '3') {
            endMess = `${c1} | ${c2} | ${open3} | ${c4}`
        }
        if (boxCal === '4') {
            endMess = `${c1} | ${c2} | ${c3} | ${open4}`
        }
        if (boxCal === '5') {
            endMess = `${c1} | ${c2} | ${c3} | ${c4}`
        }
			setTimeout(function(){
                message.channel.send(`kết quả: ${endMess}`)
				message.channel.send(GameMsg)
        },2000)
    }
}
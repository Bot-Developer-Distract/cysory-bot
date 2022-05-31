const db = require('quick.db')
const maxBet = 150000
const spin = "<a:spining:975408505949417523>"
const heads = "<:heads:975408493437784134>"
const random = require('random-number-csprng')
const tails = "<:tails:975408505282523206>"

module.exports = {
    commands: ['coinflip', 'cf'],
    description: 'flip a coin, earn the money',

    callback: async(message, args) => {
        const User = message.member
        const choice = args[0]
		let amount = args[1]
		const bal = db.fetch(`money_${User.id}`)
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

		if (bal === 0 || bal < 0) return message.reply('**🚫 |** Bạn không đủ tiền!')
		if (amount < 0 || amount === 0) return message.reply('**🚫 |** Tiền cược phải lớn hơn **0**!')
		if (amount > bal) return message.reply('**❓ |** Lol số tiền đó ở đâu thế anh bạn?')
		if (isNaN(parseInt(amount))) return message.reply(`**🚫 |** \`${amount}\` không phải giá trị loại Số!`)

        let rand = await random(0,1)
		let win = false

        //tails and heads
		if(rand==0&&choice=="t") {
            win = true;
        } else if(rand==1&&choice=="h") {
            win = true;
        }
        
        let text = "**"+message.author.username+"** cược "+`**$${amount}** cusy`+" và chọn "+((choice=='h')?"**heads**":"**tails**");
			let text2 = text;
			text2 += "\nĐồng xu xoay... "+((win)?((choice=='h')?heads:tails):((choice=='h')?tails:heads))+" và bạn ";
        if(win) {
            text2 += "thắng "+`**$${amount}**`+" cusy!! <:co_vu:944423961712787536>";
            db.add(`money_${User.id}`, amount)
        } else {
            text2 += "mất hết cusy... <:leu_leu:939363034869157908>";
            db.subtract(`money_${User.id}`, amount)
        }
        text += "\nĐồng xu xoay... "+spin

        let mess = await message.channel.send(text)
			setTimeout(function(){
				mess.edit(text2)
        },2000)
    }
}
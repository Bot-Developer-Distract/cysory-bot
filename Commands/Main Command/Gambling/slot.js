const slots = ["<:bad:942789718440042576>","<:chua_he:943721688179277844>","<:discordjs:974904051160469514>","<:javascript:974904051177250836>","<:Github:965597169837043752>","<:python:974904051269517322>"]
const turning = "<:blank:970659432335814666>"
const random = require('random-number-csprng')
const db = require('quick.db')
const maxBet = 150000

module.exports = ({
	commands: ["slot"],
	desc:"Bet your money in the slot machine! Earn umessage to 10x your money!",

	callback: async(message, args, _, client) => {
		const User = message.author;
        const bal = await db.fetch(`money_${User.id}`);
        let amount = args[0];
        let bet = 1;
        let result = ' ';

        //check tien cuoc
        if (amount == 'all') {
          amount = bal
        };
    if (!amount) {
      amount = bet
    }
    if (amount > maxBet) {
      amount = maxBet
    }

		if (bal === 0 || bal < 0) return message.reply('**🚫 |** Bạn không đủ tiền!')
		if (amount < 0 || amount === 0) return message.reply('**🚫 |** Tiền cược phải lớn hơn **0**!')
		if (amount > bal) return message.reply('**❓ |** Lol số tiền đó ở đâu thế anh bạn?')
		if (isNaN(parseInt(amount))) return message.reply(`**🚫 |** \`${amount}\` không phải giá trị loại Số!`)

		let rslots = [];
        let rand = await random(1, 1000) / 10;
        let logging = 0;
        if (rand <= 20) {//1x 20%
            bet = bet * 1;
            rslots.push(slots[0]);
            rslots.push(slots[0]);
            rslots.push(slots[0]);
            logging = 1;
        } else if (rand <= 40) { //2x 20%
            bet = bet * 2;
            rslots.push(slots[1]);
            rslots.push(slots[1]);
            rslots.push(slots[1]);
            logging = 2;
        } else if (rand <= 45) { //3x 5%
            bet = bet * 3;
            rslots.push(slots[2]);
            rslots.push(slots[2]);
            rslots.push(slots[2]);
            logging = 3;
        } else if (rand <= 47.5) { //5x 2.5%
            bet = bet * 5;
            rslots.push(slots[3]);
            rslots.push(slots[3]);
            rslots.push(slots[3]);
            logging = 5;
        } else if (rand <= 48.5) { //10x 1% 48.5
            bet = bet * 10;
            rslots.push(slots[4]);
            rslots.push(slots[4]);
            rslots.push(slots[4]);
            logging = 9;
        } else {
            bet = bet;
            logging = -1;
            var slot1 = Math.floor(Math.random() * (slots.length - 1));
            var slot2 = Math.floor(Math.random() * (slots.length - 1));
            var slot3 = Math.floor(Math.random() * (slots.length - 1));
            if (slot3 === slot1)
                slot2 = (slot1 + Math.ceil(Math.random() * (slots.length - 2))) % (slots.length - 1);
            if (slot2 === slots.length - 2)
                slot2++
            rslots.push(slots[slot1]);
            rslots.push(slots[slot2]);
            rslots.push(slots[slot3]);
        }

        //hien thi ket qua
        let nameBet = `  **${message.author.username}** đã cược **$${amount}** cusy <:coins:963787195011977276>`
        if (logging == -1) {
            result = `và mất hết.. <:frogeCry:929567855597461575>`;
        } else {
            result = `và đã thắng **$${amount}** cusy! <:coins:963787195011977276>`
        }

        let msgresult = await message.reply(`\` ▁▁▁SLOTS▁▁▁ \`
| ${turning} | ${turning} | ${turning} |   ${nameBet}
\`|            |\` 
\`|            |\``)
            .then(async msgresult => {
                if (logging == -1) {
                    setTimeout(async function () {
                        await msgresult.edit(`\` ▁▁▁SLOTS▁▁▁ \`
| ${rslots[0]} | ${turning} | ${turning} |   ${nameBet}
\`|            |\` 
\`|            |\``)
                        setTimeout(async function () {
                            await msgresult.edit(`\` ▁▁▁SLOTS▁▁▁ \`
| ${rslots[0]} | ${rslots[1]} | ${turning} |   ${nameBet}
\`|            |\` 
\`|            |\``)
                            setTimeout(async function () {
                                msgresult.edit(`\` ▁▁▁SLOTS▁▁▁ \`
| ${rslots[0]} | ${rslots[1]} | ${rslots[2]} |   ${nameBet}
\`|            |\`   ${result}
\`|            |\``);
                            }, 300);
                        }, 400);
                        db.subtract(`money_${User.id}`, amount);
                    }, 700);
                } else {
                    setTimeout(async function () {
                        await msgresult.edit(`\` ▁▁▁SLOTS▁▁▁ \`
| ${rslots[0]} | ${turning} | ${turning} |   ${nameBet}
\`|            |\` 
\`|            |\``)
                        setTimeout(async function () {
                            await msgresult.edit(`\` ▁▁▁SLOTS▁▁▁ \`
| ${rslots[0]} | ${rslots[1]} | ${turning} |   ${nameBet}
\`|            |\` 
\`|            |\``)
                            setTimeout(async function () {
                                msgresult.edit(`\` ▁▁▁SLOTS▁▁▁ \`
| ${rslots[0]} | ${rslots[1]} | ${rslots[2]} |   ${nameBet}
\`|            |\`   ${result}
\`|            |\`   `);
                            }, 300);
                        }, 400);
                        db.add(`money_${User.id}`, amount);
                    }, 700);
                }
            }
            )
	}
})
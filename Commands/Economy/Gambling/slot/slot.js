const maxBet = 150000;
const slots = ["|<:bad:942789718440042576>|","|<:chua_he:943721688179277844>|","|<:A_:942787511636357150>|","|<:NotHuTao:969901494184837170>|","|<:Github:965597169837043752>|","|<:__:961940510799462440>|"]
const moving = "|<:blank:970659432335814666>|"
const alterSlot = require('./alterSlot.js')
const random = require('random-number-csprng')
const db = require('quick.db')

module.exports = ({
	commands:["slot"],
	desc:"Bet your money in the slot machine! Earn umessage to 10x your money!",

	callback: async(message, args, _, client) => {
		const User = message.member
		const amount = args[0]
		const bal = db.fetch(`money_${User.id}`)

		if (bal === 0 || bal < 0) return message.reply('Bạn không đủ tiền!')
		if (!amount) return message.reply('Xin hãy ghi số tiền cược!')
		if (amount < 0 || amount === 0) return message.reply('Tiền cược phải lớn hơn **0**!')
		if (amount > bal) return message.reply('Lol số tiền đó ở đâu thế anh bạn?')
		if (amount > maxBet) return message.reply(`Tiền cược tối thiểu là \`$${maxbet}\`!`)
		if (isNaN(parseInt(amount))) return message.reply(`\`${amount}\` không phải giá trị loại Số!`)

		let rslots = [];
			let rand = await random(1,1000)/10
			let win = 0

			if(rand<=20){//1x 20%
				win = amount;
				rslots.push(slots[0]);
				rslots.push(slots[0]);
				rslots.push(slots[0]);
				logging = 0;
			} else if(rand<=40){ //2x 20%
				win = amount*2;
				rslots.push(slots[1]);
				rslots.push(slots[1]);
				rslots.push(slots[1]);
				logging = 1;
			} else if(rand<=45){ //3x 5%
				win = amount*3;
				rslots.push(slots[2]);
				rslots.push(slots[2]);
				rslots.push(slots[2]);
				logging = 2;
			} else if(rand<=47.5){ //4x 2.5%
				win = amount*4;
				rslots.push(slots[3]);
				rslots.push(slots[3]);
				rslots.push(slots[3]);
				logging = 3;
			} else if(rand<=48.5){ //10x 1%
				win = amount*10;
				rslots.push(slots[4])
				rslots.push(slots[5])
				rslots.push(slots[4])
				logging = 9
			} else {
				logging = -1
				var slot1 = Math.floor(Math.random()*(slots.length-1))
				var slot2 = Math.floor(Math.random()*(slots.length-1))
				var slot3 = Math.floor(Math.random()*(slots.length-1))
				if(slot3==slot1)
					slot2 = (slot1+Math.ceil(Math.random()*(slots.length-2)))%(slots.length-1)
				if(slot2==slots.length-2)
					slot2++
				rslots.push(slots[slot1])
				rslots.push(slots[slot2])
				rslots.push(slots[slot3])
			}

			let winmsg = (win==0)?"nothing... :c":"<:coins:963787195011977276> "

			//Display slots
			let machine = "**`___ SLOTS ___`**\n"+moving+" "+moving+" "+moving+"   "+message.author.username+` cược **$${amount}** <:coins:963787195011977276> `+"\n`|           |`\n`|           |`";
			machine = alterSlot.alter(message.author.id,machine);
			let mess = await message.channel.send(machine);

			setTimeout(async function(){

			machine = "**`___ SLOTS ___`**\n"+rslots[0]+" "+moving+" "+moving+"   "+message.author.username+` cược **$${amount}** <:coins:963787195011977276> `+"\n`|           |`\n`|           |`";
			await mess.edit(machine)
			setTimeout(async function(){

			machine = "**`___ SLOTS ___`**\n"+rslots[0]+" "+moving+" "+rslots[2]+"   "+message.author.username+` cược **$${amount}** <:coins:963787195011977276> `+"\n`|           |`\n`|           |`";
			await mess.edit(machine)
			setTimeout(async function(){

			machine = "**`___ SLOTS ___`**\n"+rslots[0]+" "+rslots[1]+" "+rslots[2]+"   "+message.author.username+` cược **$${amount}** <:coins:963787195011977276> `+`\n\`|           |\`  và đang trong quá trình code`+"\n`|           |`";
			mess.edit(machine);

			},1000);
			},700);
		},1000);
	}
});
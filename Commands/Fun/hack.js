exports.run = (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    message.channel.send(`**[0/100%] Chuẩn bị hack ${member.displayName}**`)
    .then((sentMessage) => sentMessage.edit(`**[10/100%] Đang hack vào gmail của ${member.displayName}: ${member.displayName}0293@gmail.com**`))
    .then((sentMessage) => sentMessage.edit(`**[20.5/100%] Tìm thấy mật khẩu Discord: ||RickRoll093||**`))
    .then((sentMessage) => sentMessage.edit(`**[39.3/100%] Đã tìm thấy mật khẩu gmail**\nemail: \`${member.displayName}0293@gmail.com\`\npass: ||nguyenGord092||`))
    .then((sentMessage) => sentMessage.edit(`**[43/100%] Đang spam ở một số server của ${member.displayName}**`))
    .then((sentMessage) => sentMessage.edit(`**[57/100%] Đang chat với bạn của ${member.displayName} (nếu nó có)**`))
    .then((sentMessage) => sentMessage.edit(`**[71.75/100%] Đã gọi điện cho Vladimir Putin**`))
    .then((sentMessage) => sentMessage.edit(`**[78.3/100%] Đang tiến hành mã hack kinh khủng nhất**`))
    .then((sentMessage) => sentMessage.edit(`**[86.4/100%] Đang tiến hành mã hack kinh khủng nhất**`))
    .then((sentMessage) => sentMessage.edit(`**[99.9/100%] Đang tiến hành mã hack kinh khủng nhất**`))
    .then((sentMessage) => sentMessage.edit(`**[100/100%] Đã hack tài khoản ${member.displayName} thành công!**`))
}

exports.name = "hack"
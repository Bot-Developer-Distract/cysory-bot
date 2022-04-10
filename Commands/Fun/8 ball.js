exports.run = (client, message, args) => {
    var ball = [
        "**số 1!**",
        "**số 2!**",
        "**số 3!**",
        "**số 4!**",
        "**số 5!**",
        "**số 6!**",
        "**số 7!**",
        "**số 8!**",
        "**số 9!**",
        "**số 10!**",
        "**số 11!**",
        "**số 12!**",
    ]
    const cmd = ball[Math.floor(Math.random() * ball.length)]
    message.channel.send(cmd)
}

exports.name = "8 ball"
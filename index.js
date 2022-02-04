const Bot = require('anony-mpp-bot-js')
const { main } = require('./command reader')

const bot = new Bot({
    token: 'ur bot token here',
    name: 'ur bot name here',
    color: 'ur bot color here',
    room: 'the room name'
})

bot.connect()

const prefix = '-'

var cmd, input, args, command, user

bot.client.on('a', ({ a, p }) => {
    if (p.tag === 'BOT') return
    if (p.id === bot.client.participantId) return
    args = a.trim().split(' ')
    cmd = args[0].slice(prefix.length)
    input = a.indexOf(' ') === -1 ? 0 : a.substring(a.indexOf(' ') + 1)
    user = p
    if (a.startsWith(prefix)) {
        command = new main(bot, {
            args,
            cmd,
            input,
            user
        })
        command.call(cmd, args, input, p)
    }
})
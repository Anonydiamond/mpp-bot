const fs = require('fs')

const commands = new Array()

fs.readdirSync('./commands/').forEach(cmd => {
    if (cmd.endsWith('.js')) commands.push(cmd.slice(0, cmd.indexOf('.')))
})

class main {
    constructor(client) {
        this.client = client || 'error'
    }

    call(cmd, args, input, user) {
        require(`./commands/${cmd}`)(this.client, {
            args,
            input,
            user
        })
    }
}

module.exports = {
    main,
    commands
}
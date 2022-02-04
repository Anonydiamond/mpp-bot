const { commands } = require('../command reader') 

module.exports = (client, channel) => client.chat(`Commands: ${commands.join(', ')}`)

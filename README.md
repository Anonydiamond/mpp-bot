# Tutorial of how to add commands


## you must have to install those package if you havnt installed yet
```bash
$ npm i http-proxy-agent
$ npm i http
$ npm i ws
$ npm i websocket
$ npm i EventEmitter
$ npm i socks
$ npm i socks-proxy-agent
$ npm i anony-mpp-bot-js
$ npm i midi-player-js
```
##### if its still shows error like that- couldnt found module
##### then please install module using $npm i {module name}

#### you must have to run in your terminal before you install those package
```bash
$ npm init -y
```

## adding commands -

# the command name file must look like this-


### lets talk about client object first

```js
//you can import anything if you want
//non type js file will be ignored

//start with moudle.export or import at first if you needed

//code starts from here

//well you can give anything on parameter but index number of parameter must match and every coder should know this already
//1st parameter object- bot object of index file
//2nd parameter object- command objects

//im showing example with client and channel

module.exports = (client, channel) => { //make a direct calling funcion at the module.export (recommended)
    //client object basically the bot object of index file
    //check all object properties
    client.bot //the bot client, example- client.bot.sendArray
    client //the bot object of index file
    client.chat('message') //send to chat, you can give delay to client.chat('message', 1000), delay will count on milisecond
}
```

### channel object

```js
module.exports = (client, channel) => {
    channel.input //the input argmuent of command
    channel.args //the arguents of command
    channel.user.name //user name
    channel.user.id //the id of user
    channel.user.color //the color of user
}
```
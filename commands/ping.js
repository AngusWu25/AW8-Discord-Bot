const Discord = require("discord.js");

module.exports.command = {
        name: "ping",
        aliases: ["p"],
        description: "fetch latency",
        usage: "!ping"
}

module.exports.run = async (bot, message, args) => {
    
    if(message.channel.name != 'bot-commands'){
        let msg = 'Please use this command in <#585620915065454623>';
        message.channel.send(msg).then(msg => msg.delete(5000));
        return;
    }
    
    let botping = new Date() - message.createdAt;
    let apiping = bot.ping;

    return message.channel.send(`Bot ping: ${botping}ms\nApi ping: ${apiping}ms`)
}
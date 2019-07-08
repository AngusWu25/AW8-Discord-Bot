const Discord = require("discord.js");

module.exports.command = {
        name: "help",
        aliases: ["h"],
        description: "list all available commands",
        usage: "!help"
}

module.exports.run = async (bot, message, args) => {
    
    if (message.member.hasPermission("MANAGE_MESSAGES")){
        if(message.channel.name != 'control-room'){
            let msg = 'Admins please use this command in <#577229976852496392>';
            message.channel.send(msg).then(msg => msg.delete(5000));
            return;
        }
        let embed = new Discord.RichEmbed()
            .setColor('#00FFFF')
            .setTitle('Available Commands For Admins')
            .addField('!say [text]  |  !s [text]', 'use the bot to say something for you')
            .addField('!delete [number]  |  !d [number]', 'delete a specified number of messages')
            .addField('!userinfo [@user]  |  !ui [@user]', "display user's nickname, join position, join time, and roles")
            .addField('!qna [question]', 'submit a question you have for AWT')
            .addField('!roast [@user]  |  !r [@user]', "who doesn't like to have some fun, roast your friends!")
            .addField('!quote  |  !q', 'get a random inspirational quote')
            .addField('!ping  |  !p', 'fetch latency')

        return message.channel.send(embed);

    } else {
        if(message.channel.name != 'bot-commands'){
            let msg = 'Please use this command in <#585620915065454623>';
            message.channel.send(msg).then(msg => msg.delete(5000));
            return;
          }
        let embed = new Discord.RichEmbed()
            .setColor('#00FFFF')
            .setTitle('Available Commands')
            .addField('!userinfo [@user] , !ui [@user]', "display user's nickname, join position, join time, and roles")
            .addField('!qna [question]', 'submit a question you have for AWT')
            .addField('!roast [@user] , !r [@user]', "who doesn't like to have some fun, roast your friends!")
            .addField('!quote , !q', 'get a random inspirational quote')
            .addField('!ping , !p', 'fetch latency')

        return message.channel.send(embed);
    }
}
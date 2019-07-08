const Discord = require("discord.js");

module.exports.command = {
    name: "say",
    aliases: ["s"],
    description: "ask the bot to say something for you",
    usage: "!say [text]"
}

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Invalid Permissions");
    let botmessage = args.join(" ");
    message.delete();
    message.channel.send(botmessage);
}
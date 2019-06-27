const Discord = require("discord.js");

module.exports.command = {
    name: "cache",
    aliases: ["c"],
    description: "cache old messages",
    category: "",
    usage: "cache"
}

module.exports.run = async (bot, message, args) => {
    message.guild.channels.forEach(channel => channel.fetchMessages()
        .then(messages => console.log(`Received ${messages.size} messages`))
        .catch(console.error));
}
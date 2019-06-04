const Discord = require("discord.js");

module.exports.command = {
    name: "delete",
    aliases: ["d"],
    description: "delete messages",
    category: "",
    usage: "delete #"
}

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Invalid Permissions");
    if (!args[0]) return message.channel.send("Specify delete amount");
    let num = parseInt(args[0]) + 1;
    message.channel.bulkDelete(num).then(() => {
        message.channel.send(`Deleted ${args[0]} messages`).then(msg => msg.delete(3000));
    });
}
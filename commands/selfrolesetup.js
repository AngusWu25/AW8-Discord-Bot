const Discord = require("discord.js");

module.exports.command = {
        name: "",
        aliases: ["srs"],
        description: "",
        category: "",
        usage: ""
}

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Invalid Permissions");
    message.delete().catch();
    let embed = new Discord.RichEmbed()
        .setTitle('Select your theorist level')
        .setDescription(`
        😄 Casual: interested in the newest theories
😛 Enthusiast: inquisitive about the evidence and reasoning behind the latest theories
😉 Expert: theory-makers, knowledgeable about clues and evidence within the Walker Universe
        `)
    message.channel.send(embed).then(async msg => {
        await msg.react('😄');
        await msg.react('😛');
        await msg.react('😉');
    });
}
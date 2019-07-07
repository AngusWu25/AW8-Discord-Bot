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
    
    const one = '596886792142323732';
    const two = '596886792276410378';
    const three = '596886792226078761';
    const k391 = '596503815507673146';

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Invalid Permissions");
    message.delete().catch();
//     let botmessage = `**Select your theorist level**
// *(these roles are only for communication purposes, they do not unlock exclusive channels)*
    
// <:option1:596886792142323732> **Casual**: interested in the newest theories
// <:option2:596886792276410378> **Enthusiast**: inquisitive about the evidence and reasoning behind the latest theories
// <:option3:596886792226078761> **Expert**: theory-makers, knowledgeable about clues and evidence within the Walker Universe`;

    let botmessage = `**Are you a music producer?**
*(react <:K391:596503815507673146> to get the role, this is also for communication purposes only)*`;
    message.channel.send(botmessage).then( async msg => {
        await msg.react(k391);
        // await msg.react(one);
        // await msg.react(two);
        // await msg.react(three);
    });
}
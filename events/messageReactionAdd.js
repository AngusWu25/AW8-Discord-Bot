const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on("messageReactoinAdd", (messageReaction, user) => {
    if(!user) return;
    if(user.bot) return;
    if(!reaction.message.channel.guild) return;

    let emojiname = ["smiley", "eyes"];
    let rolename = ["testing 1", "testing 2"];

    for(let n in emojiname){
        if(reaction.emoji.name == emojiname[n]){
            let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);
            reaction.message.guild.member(user).addRole(role).catch(console.error);
        }
    }
});
const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on("messageReactionAdd", async (client, messageReaction, user) => {

    if (messageReaction.message.id == 585616911149170693){
        if(messageReaction.emoji.name == ":headphones:"){
            user.addRole(messageReaction.guild.roles.find('name', 'Producer').id);
        }
    }
});
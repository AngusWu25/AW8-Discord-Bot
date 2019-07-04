const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on('messageReactionRemove', (messageReaction, user) => {
	//console.log(`${user.username} removed their "${messageReaction.emoji.name}" reaction.`);
});
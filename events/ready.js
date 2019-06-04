const Discord = require("discord.js");
const bot = require("../index.js");

bot.on("ready", async () => {
    console.log('bot is online!');
    bot.user.setActivity("New Profile Pic Eh", {type: "WATCHING"});
});
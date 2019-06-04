const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on("guildMemberAdd", async (member) => {

    const joins = member.guild.channels.find(c => c.name === 'joins-and-leaves');
    if (!joins) return console.log("[WARNING]: The Joins-And-Leaves channel does not exist");

    let date = new Date();
    let hr = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
    let min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    let sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    let dt = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
    let month = (date.getMonth() + 1 < 10) ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let time = hr + ":" + min + ":" + sec + " " + dt + "/" + month + "/" + date.getFullYear();

    let logembed = new Discord.RichEmbed()
        .setTitle("User Joined")
        .setDescription(`<@${member.id}> joined the server`)
        .setColor("#00FF00")
        .setFooter(time)

    joins.send(logembed);
});

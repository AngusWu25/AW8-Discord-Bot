const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on("messageUpdate", async(oldMessage, newMessage) => {

    if (newMessage.channel.type == "text" && newMessage.cleanContent != oldMessage.cleanContent){
        const logs = newMessage.guild.channels.find(c => c.name === 'logs');
        if (!logs) return console.log("[WARNING]: The Logs channel does not exist");

        let date = new Date();
        let hr = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
        let min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
        let sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
        let dt = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
        let month = (date.getMonth()+1 < 10) ? "0" + (date.getMonth()+1) : date.getMonth()+1;
        let time = hr+":"+min+":"+sec+" "+dt+"/"+month+"/"+date.getFullYear();

        let logembed = new Discord.RichEmbed()
            .setTitle("Message Edited")
            .setDescription(`A message by <@${newMessage.author.id}> was edited <#${newMessage.channel.id}>`)
            .addField("Before Message:", oldMessage.cleanContent)
            .addField("After Message:", newMessage.cleanContent)
            .setColor("#FF8C00")
            .setFooter(time)

        logs.send(logembed);
    }
});

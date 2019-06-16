const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on("messageDelete", async(message) => {
    console.log("message deleted");

    if (message.channel.type == 'text') {
        if (message.content.charAt(0) == config.prefix) return;
        if (message.author.id == "578005276616163340") return;
        const logs = message.guild.channels.find(c => c.name === 'logs');

        let date = new Date();
        let hr = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
        let min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
        let sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
        let month = (date.getMonth()+1 < 10) ? "0" + (date.getMonth()+1) : date.getMonth()+1;
        let dt = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
        let time = hr+":"+min+":"+sec+" "+dt+"/"+month+"/"+date.getFullYear();

        let mDate = message.createdAt;
        let mHr = (mDate.getHours() < 10) ? "0" + mDate.getHours() : mDate.getHours();
        let mMin = (mDate.getMinutes() < 10) ? "0" + mDate.getMinutes() : mDate.getMinutes();
        let mSec = (mDate.getSeconds() < 10) ? "0" + mDate.getSeconds() : mDate.getSeconds();
        let mDt = (mDate.getDate() < 10) ? "0" + mDate.getDate() : mDate.getDate();
        let mMonth = (mDate.getMonth()+1 < 10) ? "0" + (mDate.getMonth()+1) : mDate.getMonth()+1;
        let mTime = mHr+":"+mMin+":"+mSec+" "+mDt+"/"+mMonth+"/"+mDate.getFullYear();

        if (!logs) return console.log("[WARNING]: The Logs channel does not exist");

        if (message.attachments.size > 0) {
            message.attachments.forEach(attachment => {
                let logembed = new Discord.RichEmbed()
                    .setTitle("Image Deleted")
                    .setDescription(`An image by ${message.author.tag} was deleted in <#${message.channel.id}>`)
                    .addField("Message:", `${message.content}`)
                    .setImage(attachment.proxyURL)
                    .setColor("#FF00FF")
                    .setFooter(time)

                logs.send(logembed);
            })
        } else {
            let logembed = new Discord.RichEmbed()
                .setTitle("Message Deleted")
                .setDescription(`A message by <@${message.author.id}> was deleted in <#${message.channel.id}>`)
                .addField("Message:", `${message.content}`)
                .addField("Message Sent:", mTime)
                .setColor("#FF00FF")
                .setFooter(time)

            logs.send(logembed);
        }
    }
});
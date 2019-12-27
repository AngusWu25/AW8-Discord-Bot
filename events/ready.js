const Discord = require("discord.js");
const bot = require("../index.js");

bot.on("ready", async () => {
    console.log('bot is online!');
    bot.user.setActivity("Alone, Pt. II", {type: "LISTENING"});

    // bot.channels.forEach(channel => channel.fetchMessages({ limit: 100 })
    //     .then(messages => console.log(`Received ${messages.size} messages`))
    //     .catch(console.error));
});
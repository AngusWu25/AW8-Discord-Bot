const Discord = require("discord.js");

module.exports.command = {
    name: "quote",
    aliases: ["q"],
    description: "random inspirational quote",
    usage: "!quote"
}

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    let quote = ["Always look on the bright side! That way the sun can blind you so you can’t see your problems.",
                "Having a bad day? Just carry an onion in your pocket so people won’t know why you’re really crying.",
                "The best things in life are free. Actually, everything is free if you run from the store fast enough. (don't do it!)",
                "Shoot for the moon. Even if you miss, you'll land among the stars and die alone in the dark, infinite void of space.",
                "Dance like there's nobody watching. It's free entertainment for the rest of us!",
                "Teamwork is essential to success - it allows you to blame someone else."];

    message.channel.send(quote[Math.floor(Math.random() * (quote.length))]);

}
const Discord = require("discord.js");

module.exports.command = {
    name: "roast",
    aliases: ["r"],
    description: "who doesn't like to have some fun, roast your friends!",
    usage: "!roast [@user]"
}

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    let user = message.guild.member(message.mentions.users.first());
    if (!user) return message.channel.send("Could not find user").then(msg => msg.delete(3000));

    let roast = ["You have the right to remain silent because whatever you say will probably be stupid anyway.",
                "Your family tree must be a cactus ‘cause you’re all a bunch of pricks.",
                "I was going to give you a nasty look but I see that you’ve already got one.",
                "Everyone’s entitled to act stupid once in awhile, but you really abuse the privilege.",
                "I could eat a bowl of alphabet soup and shit out a smarter statement than whatever you just said.",
                "If laughter is the best medicine, your face must be curing the world.",
                "It's better to let someone think you are an idiot than to open your mouth and prove it.",
                "You're so fake, Barbie is jealous.",
                "Brains aren't everything. In your case they're nothing.",
                "Keep rolling your eyes, perhaps you'll find a brain back there.",
                "Have you been shopping lately? They're selling lives, you should go get one.",
                "Of course I talk like an idiot, how else would you understand me?",
                "If you call me from a private number, I will respect your privacy and not answer."];

    if (message.mentions.users.first().id == 578005276616163340) {
        message.channel.send(`<@${message.author.id}> Tried to roast me eh? ` + roast[Math.floor(Math.random() * (roast.length + 1))]);
    } else {
        message.channel.send(`<@${message.mentions.users.first().id}> ` + roast[Math.floor(Math.random() * (roast.length))]);
    }
}
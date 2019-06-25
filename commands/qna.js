const Discord = require("discord.js");

module.exports.command = {
    name: "qna",
    aliases: ["qna"],
    description: "delete messages",
    category: "",
    usage: "delete #"
}

module.exports.run = async (bot, message, args) => {
    const questSub = message.guild.channels.find(c => c.name === 'question-submissions');
    let botmessage = args.join(" ");
    let qembed = new Discord.RichEmbed()
        .setTitle("Question")
        .setDescription(botmessage)
        .addField("Message:", `${message.content}`)
        .addField("Question From", `<@${message.author.id}>`)
        .setColor("#FFFF00")

    questsub.send(qembed).then(message => {
        message.react(`:yes:`).then(message.react(`:no:`));
    })
    
}
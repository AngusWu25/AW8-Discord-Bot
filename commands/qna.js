const Discord = require("discord.js");

module.exports.command = {
    name: "qna",
    aliases: ["qna"],
    description: "delete messages",
    category: "",
    usage: "delete #"
}

module.exports.run = async (bot, message, args) => {

    if(message.channel.name != 'bot-commands'){
        let msg = 'Please use this command in <#585620915065454623>';
        message.channel.send(msg).then(msg => msg.delete(5000));
        return;
    }

    const yes = '590400988633104404';
    const no = '590401714230788106';

    const questSub = message.guild.channels.find(c => c.name === 'question-submissions');
    let verification = 'Question asked successfully';
    let asker = message.author.id;
    let question = args.join(" ");
    let msg = `<@${asker}> ` + question;
    // let qembed = new Discord.RichEmbed()
    //     .setTitle("Question")
    //     .setDescription(question)
    //     .addField("Message:", `${message.content}`)
    //     .addField("Question From", `<@${message.author.id}>`)
    //     .setColor("#FFFF00")

    message.channel.send(verification).then(msg => msg.delete(3000));
    questSub.send(msg).then( async message => {
        await message.react(yes);
        await message.react(no);
    });

    
}
const Discord = require("discord.js");

module.exports.command = {
        name: "submit",
        aliases: ["sm"],
        description: "submit a location's coordinates",
        usage: "!submit"
}

module.exports.run = async (bot, message, args) => {
    if(message.channel.parent.ID != '686068077460455476'){
        let msg = 'Please use this command in one of the "Project Vocitus" channels';
        message.channel.send(msg).then(msg => msg.delete(5000));
        return;
        }
    let embed = new Discord.RichEmbed()
        .setColor('#90FF00')
        .setTitle('Location Submission')
        .setDescription(args.join(" "))
        .addField('Submitter:', `<@${message.author.id}>`)
    
    message.delete();
    return message.channel.send(embed);

}
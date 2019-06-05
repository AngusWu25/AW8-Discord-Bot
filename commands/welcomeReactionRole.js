const Discord = require('discord.js');

module.exports.command = {
    name: "reaction",
    //aliases: ["ui"],
    description: "shows user info",
    category: "",
    usage: "userinfo @user"
}

module.exports.run = async (client, message, args) => {
  
    await message.delete().catch(O_o => {});
  
    const a = message.guild.roles.get('585617992549793822'); // Moderator
    const b = message.guild.roles.get('585650820511563782'); // Administrator
    const c = message.guild.roles.get('585650850882519050'); // Developer
  
    const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
         
        Welcome to **${message.guild.name}**! You may choose from our list of roles you can join/leave from:
         🇦 ${a.toString()}
         🇧 ${b.toString()}
         🇨 ${c.toString()}
         `)
        .setColor(0xdd9323)
        .setFooter(`Guild ID: ${message.guild.id}`);
  
    message.channel.send(embed).then(async msg => {
  
        await msg.react('🇦');
        await msg.react('🇧');
        await msg.react('🇨');
    });
};
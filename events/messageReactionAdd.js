const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

module.exports = async (client, messageReaction, user) => {

    const message = messageReaction.message;
    const channel = message.guild.channels.find(c => c.name === 'announcements');
    const member = message.guild.members.get(user.id);
    if (member.user.bot) return;

    const a = message.guild.roles.get('585617992549793822');
    const b = message.guild.roles.get('585650820511563782');
    const c = message.guild.roles.get('585650850882519050');

    // Adds/removes a user from a joinable role via the welcome
    if (['🇦', '🇧', '🇨'].includes(messageReaction.emoji.name) && message.channel.id === channel.id) {
        switch (messageReaction.emoji.name) {
            case '🇦':
                member.addRole(a).catch(console.error);
                break;
            case '🇧':
                member.addRole(b).catch(console.error);
                break;
            case '🇨':
                member.addRole(c).catch(console.error);
                break;
            default:
                break;
        }
    }
};
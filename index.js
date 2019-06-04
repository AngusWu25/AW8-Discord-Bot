const Discord = require("discord.js");
const config = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
module.exports = bot;

const {loadCommands, loadEvents} = require("./util/handler");
loadCommands();
loadEvents();

bot.login(config.token);
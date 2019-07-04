const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

bot.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;

	if(event.t == 'MESSAGE_REACTION_ADD' || event.t == 'MESSAGE_REACTION_REMOVE'){
		const { d: data } = event;
		const user = bot.users.get(data.user_id);
		const channel = bot.channels.get(data.channel_id) || await user.createDM();

		if (channel.messages.has(data.message_id)) return;

		const message = await channel.fetchMessage(data.message_id);
		const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
		let messageReaction = message.reactions.get(emojiKey);

		if (!messageReaction) {
			const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
			messageReaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
		}

		bot.emit(events[event.t], messageReaction, user);
	}
});

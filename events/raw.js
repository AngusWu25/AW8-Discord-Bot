const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on("raw", event => {
    const eventName = event.t;
    if(eventName === "MESSAGE_REACTION_ADD"){
        if(event.d.message_id === "589641614385741831"){
            let reactionChannel = bot.channels.get(event.d.channel_id);
            if(reactionChannel.messages.has(event.d.message_id)){
                return;
            } else {
                reactionChannel.fetchMessage(event.d.message_id)
                .then(msg => {
                    let msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
                    let user = client.users.get(event.d.user_id);
                    bot.emit("messageReactionAdd", msgReaction, user);
                })
                .catch(err => console.log(err));
            }
        }
    }
});
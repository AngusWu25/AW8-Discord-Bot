const Discord = require('discord.js');
const bot = require('../index.js');
const config = require('../botconfig.json');

bot.on('messageReactionAdd', async (messageReaction, user) => {

    //console.log('emoji: ' + messageReaction.emoji.name);
    if(!user) return;
    if(user.bot) return;

    const rulesRead = messageReaction.message.guild.roles.get('585650850882519050');
    const casual = messageReaction.message.guild.roles.get('595682393017548866');
    const enthusiast = messageReaction.message.guild.roles.get('595682587180138518');
    const expert = messageReaction.message.guild.roles.get('595682636173803546');
    const producer = messageReaction.message.guild.roles.get('585617992549793822');
    const yes = '590400988633104404';
    const one = '596184203771772950';
    const two = '596184274651316252';
    const three = '596184317714104336';
    const four = '596184360667840522';
    const five = '596184400715186192';
    const welcomeID = '595107904760184832';
    const r1ID = '595104608171589642';
    const r2ID = '595105034686169109';
    const r3ID = '595105177946554390';
    const r4ID = '595105332477427752';
    const r5ID = '595105438673010689';
    const attID = '595109531252424704';
    const levelMsg = '595710477959561282';
    const q1ID = '595111925550153738';
    const q2ID = '595112782186151937';
    const q3ID = '595113286949797904';
    const thanksID = '595118197569486878';

    //welcome message
    if(messageReaction.message.id == welcomeID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'rule-one').overwritePermissions(user, { VIEW_CHANNEL: true });
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }
    if(messageReaction.message.id == r1ID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'rule-two').overwritePermissions(user, { VIEW_CHANNEL: true });
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }
    if(messageReaction.message.id == r2ID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'rule-three').overwritePermissions(user, { VIEW_CHANNEL: true });
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }
    if(messageReaction.message.id == r3ID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'rule-four').overwritePermissions(user, { VIEW_CHANNEL: true });
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }
    if(messageReaction.message.id == r4ID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'rule-five').overwritePermissions(user, { VIEW_CHANNEL: true });
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }
    if(messageReaction.message.id == r5ID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'we-are-nice-but-not-that-nice').overwritePermissions(user, { VIEW_CHANNEL: true });
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }
    if(messageReaction.message.id == attID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'question-one').overwritePermissions(user, { VIEW_CHANNEL: true });
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }
    if(messageReaction.message.id == q1ID){
        if(messageReaction.emoji.name == `appletwo`){
            messageReaction.message.guild.channels.find(c => c.name === 'question-two').overwritePermissions(user, { VIEW_CHANNEL: true });
            messageReaction.message.guild.channels.find(c => c.name === 'question-one').permissionOverwrites.get(user.id).delete();
        }
        messageReaction.message.clearReactions();
        await messageReaction.message.react(one).then(messageReaction.message.react(one)).then(messageReaction.message.react(one));
        await messageReaction.message.react(two).then(messageReaction.message.react(two)).then(messageReaction.message.react(two));
        await messageReaction.message.react(three).then(messageReaction.message.react(three)).then(messageReaction.message.react(three));
        await messageReaction.message.react(four).then(messageReaction.message.react(four)).then(messageReaction.message.react(four));
        await messageReaction.message.react(five).then(messageReaction.message.react(five)).then(messageReaction.message.react(five));
    }
    if(messageReaction.message.id == q2ID){
        if(messageReaction.emoji.name == `appleone`){
            messageReaction.message.guild.channels.find(c => c.name === 'question-three').overwritePermissions(user, { VIEW_CHANNEL: true });
            messageReaction.message.guild.channels.find(c => c.name === 'question-two').permissionOverwrites.get(user.id).delete();
        }
        messageReaction.message.clearReactions();
        await messageReaction.message.react(one).then(messageReaction.message.react(one)).then(messageReaction.message.react(one));
        await messageReaction.message.react(two).then(messageReaction.message.react(two)).then(messageReaction.message.react(two));
        await messageReaction.message.react(three).then(messageReaction.message.react(three)).then(messageReaction.message.react(three));
        await messageReaction.message.react(four).then(messageReaction.message.react(four)).then(messageReaction.message.react(four));
        await messageReaction.message.react(five).then(messageReaction.message.react(five)).then(messageReaction.message.react(five));
    }
    if(messageReaction.message.id == q3ID){
        if(messageReaction.emoji.name == `appleone`){
            messageReaction.message.guild.channels.find(c => c.name === 'thanks-for-reading-the-rules').overwritePermissions(user, { VIEW_CHANNEL: true });
            messageReaction.message.guild.channels.find(c => c.name === 'welcome').overwritePermissions(user, { VIEW_CHANNEL: false });
            messageReaction.message.guild.channels.find(c => c.name === 'rule-one').permissionOverwrites.get(user.id).delete();
            messageReaction.message.guild.channels.find(c => c.name === 'rule-two').permissionOverwrites.get(user.id).delete();
            messageReaction.message.guild.channels.find(c => c.name === 'rule-three').permissionOverwrites.get(user.id).delete();
            messageReaction.message.guild.channels.find(c => c.name === 'rule-four').permissionOverwrites.get(user.id).delete();
            messageReaction.message.guild.channels.find(c => c.name === 'rule-five').permissionOverwrites.get(user.id).delete();
            messageReaction.message.guild.channels.find(c => c.name === 'we-are-nice-but-not-that-nice').permissionOverwrites.get(user.id).delete();
            messageReaction.message.guild.channels.find(c => c.name === 'question-three').permissionOverwrites.get(user.id).delete();
        }
        messageReaction.message.clearReactions();
        await messageReaction.message.react(one).then(messageReaction.message.react(one)).then(messageReaction.message.react(one));
        await messageReaction.message.react(two).then(messageReaction.message.react(two)).then(messageReaction.message.react(two));
        await messageReaction.message.react(three).then(messageReaction.message.react(three)).then(messageReaction.message.react(three));
        await messageReaction.message.react(four).then(messageReaction.message.react(four)).then(messageReaction.message.react(four));
        await messageReaction.message.react(five).then(messageReaction.message.react(five)).then(messageReaction.message.react(five));
    }
    if(messageReaction.message.id == thanksID && messageReaction.emoji.name == `yes`){
        messageReaction.message.guild.channels.find(c => c.name === 'welcome').permissionOverwrites.get(user.id).delete();
        messageReaction.message.guild.member(user).addRole(rulesRead).catch(console.error);
        messageReaction.message.clearReactions();
        messageReaction.message.react(yes).then(messageReaction.message.react(yes)).then(messageReaction.message.react(yes));
    }

    //self roles
    if(messageReaction.message.id == levelMsg && messageReaction.emoji.name == `smile`){
        console.log("casual");
        messageReaction.message.guild.member(user).addRole(casual).catch(console.error);
    }

});
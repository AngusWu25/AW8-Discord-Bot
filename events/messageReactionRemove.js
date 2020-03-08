const Discord = require('discord.js');
const bot = require("../index.js");
const config = require("../botconfig.json");

bot.on('messageReactionRemove', (messageReaction, user) => {

	if(!user) return;
    if(user.bot) return;

    const rulesRead = messageReaction.message.guild.roles.get('585650850882519050');
    const casual = messageReaction.message.guild.roles.get('595682393017548866');
    const enthusiast = messageReaction.message.guild.roles.get('595682587180138518');
    const expert = messageReaction.message.guild.roles.get('595682636173803546');
    const producer = messageReaction.message.guild.roles.get('585617992549793822');
    const vocitus = messageReaction.message.guild.roles.get('686226275853271050');
    const yes = '590400988633104404';
    const one = '596886792142323732';
    const two = '596886792276410378';
    const three = '596886792226078761';
    const four = '596887743431180298';
    const five = '596888624239345684';
    const welcomeID = '595107904760184832';
    const r1ID = '595104608171589642';
    const r2ID = '595105034686169109';
    const r3ID = '595105177946554390';
    const r4ID = '595105332477427752';
    const r5ID = '595105438673010689';
    const attID = '595109531252424704';
    const q1ID = '595111925550153738';
  const q2ID = '595112782186151937';
  const q3ID = '595113286949797904';
  const thanksID = '595118197569486878';
  const levelID = '597221346061320262';
  const prodID = '597222994825314305';
  const vocitusID = '686303443555450967';
	
	if(messageReaction.message.id == levelID && messageReaction.emoji.name == `option1`){
		if(messageReaction.message.guild.member(user).roles.find(r => r.id == '595682393017548866')){
    	messageReaction.message.guild.member(user).removeRole(casual).catch(console.error);
    }
  }
  if(messageReaction.message.id == levelID && messageReaction.emoji.name == `option2`){
		if(messageReaction.message.guild.member(user).roles.find(r => r.id == '595682587180138518')){
    	messageReaction.message.guild.member(user).removeRole(enthusiast).catch(console.error);
    }
	}
	if(messageReaction.message.id == levelID && messageReaction.emoji.name == `option3`){
		if(messageReaction.message.guild.member(user).roles.find(r => r.id == '595682636173803546')){
    	messageReaction.message.guild.member(user).removeRole(expert).catch(console.error);
    }
  }
  if(messageReaction.message.id == prodID && messageReaction.emoji.name == `K391`){
    messageReaction.message.guild.member(user).removeRole(producer).catch(console.error);
  }
  if(messageReaction.message.id == vocitusID && messageReaction.emoji.name == `yes`){
    messageReaction.message.guild.member(user).removeRole(vocitus).catch(console.error);
}
});
const Discord = require("discord.js");

module.exports.command = {
  name: "userinfo",
  aliases: ["ui"],
  description: "show user's info",
  usage: "!userinfo [@user]"
}

module.exports.run = async (bot, message, args) => {

  if (message.channel.name != 'bot-commands') {
    let msg = 'Please use this command in <#585620915065454623>';
    message.channel.send(msg).then(msg => msg.delete(5000));
    return;
  }

  let user = message.guild.member(message.mentions.users.first());
  if (!user) return message.channel.send("Could not find user").then(msg => msg.delete(3000));

  let date = user.joinedAt;
  let hr = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
  let min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
  let sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
  let dt = (date.getDate() < 10) ? "0" + date.getDate() : date.getDate();
  let month = (date.getMonth() + 1 < 10) ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let time = hr + ":" + min + ":" + sec + " " + dt + "/" + month + "/" + date.getFullYear();

  //let joinPos = (ID, guild) => {
  //  let arr = guild.members.array();
  //  arr.sort((a, b) => a.joinedAt - b.joinedAt);

  //  for (let i = 0; i < arr.length; i++) {
  //    if (arr[i].id == ID) return i + 1;
  //  }
  //}
  console.log(user.roles.map(r => r.name));

  let serverembed = new Discord.RichEmbed()
    .setDescription(message.mentions.users.first().tag)
    .setColor("#25c9f7")
    .setThumbnail(message.mentions.users.first().avatarURL)
    //.addField("Status:", user.presence.status)
    .addField("User Nickname:", user.nickname)
    //.addField("Join Position:", joinPos(message.mentions.users.first().id, message.guild)) after nickname
    .addField("Joined Server:", time)
    .addField("Roles:", user.roles.filter(r => r.name !== '@everyone').map(r => r).join(" | "))
    .setFooter(`User ID: ${user.id}`)

  return message.channel.send(serverembed);
}
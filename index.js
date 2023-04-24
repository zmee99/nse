const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });

const prefix = "$";//حط برفكس


client.on("message", message => {

  if (message.content.startsWith(prefix + 'help')) {
    const EmbedHelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Help Command')
      .setURL('https://discord.gg/MvNngHe4sX')
      .setAuthor('bc ', 'https://discord.gg/MvNngHe4sX')
      .addFields(
        { name: 'help', value: 'Displays all commands with the importance of the command', inline: false },
        { name: 'bc', value: 'Sends messages to all members without mentioning', inline: false },
        { name: 'mention', value: 'Sends messages to members with the mention', inline: false }
      )
      .setTimestamp()
      .setFooter('bc', '', '');
      message.reply(EmbedHelp);
  }



  if (message.content.startsWith(prefix + 'bc')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("😕 **You do not have the authority to use it**")
    }
    else {
      args = message.content.split(" ").slice(1);
      var MessageBc = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(`${MessageBc}`).then(console.log(`[+] Mensagem com sucesso | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] O membro pode ter DM's desativado ou o Bot Caiu | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] Com sucesso.`)
      message.channel.send("✅ | **Sent to all members**").then(message.delete({ timeout: 15000 }));
    }
  }



  if (message.content.startsWith(prefix + 'mention')) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("😕 **You do not have the authority to use it**")
    }
    else {
      args = message.content.split(" ").slice(1);
      var MessageBcMention = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(`${MessageBcMention}\n${member.user}`).then(console.log(`[+] Mensagem com sucesso mention | ${member.user.username}#${member.user.discriminator}`)).catch(e => console.error(`[-] O membro pode ter DM's desativado ou o Bot Caiu | ${member.user.username}#${member.user.discriminator}`));
      })
      console.log(`[/] Com sucesso.`)
      message.channel.send("✅ | **Sent to all members**").then(message.delete({ timeout: 15000 }));
    }
  }

})

process.on('unhandledRejection', e => {
  console.log(e.message);
});





client.login.(process.env.token);

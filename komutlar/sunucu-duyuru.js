const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:yan:1096417554710417518>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

   let question = args.join(' ');

   let user = message.author.username

    const embedd = new Discord.MessageEmbed()

     .setDescription(`Yazı Yazman Gerek`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));

     const embed = new Discord.MessageEmbed()

       .setColor("#ffffff")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Reis Network', client.user.avatarURL)

       .addField(`**Reis Network | Duyuru**`, `**${question}**`)
   
     message.channel.send(embed).then(function(message) {

       });

     };

     exports.config = {
     name: 'duyuru',
     aliases: ['duyuru-yap']
};


const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Reis Network Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<a:yan:1096417554710417518>  Reis Network botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:yan:1096417554710417518>  \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:yan:1096417554710417518>  \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:yan:1096417554710417518>  \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:yan:1096417554710417518>  \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:yan:1096417554710417518>  \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:yan:1096417554710417518>  \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:yan:1096417554710417518>  \`${prefix}davet\` | Reis Network'yi Sunucunuza Davet Edersiniz \n \<a:yan:1096417554710417518>\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:yan:1096417554710417518>\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}
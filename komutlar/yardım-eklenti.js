const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Reis Network Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:yan:1096417554710417518>  Reis Network botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kayıt Sistemi__`,`<a:yan:1096417554710417518> <a:yan:1096417554710417518> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`<a:yan:1096417554710417518>  \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:yan:1096417554710417518>  \`${prefix}davet\` | Reis Network'yi Sunucunuza Davet Edersiniz\n<a:yan:1096417554710417518> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:yan:1096417554710417518> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
  };
exports.config = {
name: "eklenti",
  aliases: []
}

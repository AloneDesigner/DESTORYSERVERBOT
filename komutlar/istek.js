const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const hata = new Discord.RichEmbed()
  .setTitle("HATA")
  .setDescription("İsteğiniz 10 harfden oluşmalıdır\n**acistek** isteginiz")
  let istek = args.slice(0).join(" ");
  if (istek.length < 10)
    return message.channel.send(hata);
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("İsteğiniz başarıyla iletildi!");
  message.channel.send(embed);
  const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
  .addField("Kullanıcı",`${message.author}`)
.addField("İstediği Kod",`${istek}`)
  .setThumbnail(message.author.avatarURL);
  client.channels.get("744540572265480212").send(embed2); // Kanal ID
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "istek",
  description: "...",
  usage: "istek <kod>"
};

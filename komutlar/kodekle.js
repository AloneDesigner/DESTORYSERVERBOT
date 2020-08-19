const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
exports.run = (client, message, args) => {
if (!message.member.roles.has("743058932960067607")) 
  return message.channel.send("Senin yetkin yokki.")
  let prefix = ayarlar.prefix;
  message.delete(5000)
 const hata = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("HATA | Tüm kısımlar doldurulmalı!")
  .setDescription("**ac!kodekle** <``js,v12,altyapi,html,premium``> <kodAdı> <kodLink>")
  .setFooter("Kod adında boşluk yerine - yazın!")
  let kanal = "" + args[1];
  if (!kanal)
    return message.channel.send(hata)
  .then(message=> message.delete(5000));
  let code = args[2];
  if (!code)
    return message.channel.send(hata)
  .then(message=> message.delete(5000));
  const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      `<a:emoji_70:743267507900776510> **Yeni bir kod eklendi!** <a:emoji_70:743267507900776510> \n\n<a:emoji_73:743297495752245358> **Yetkili Hakkında;**\n<a:emoji_73:743297495752245358> Yetkili Adı • \`${message.author.tag}\`\n<a:emoji_73:743297495752245358> Yetkili ID • \`${message.author.id}\`\n\n<a:emoji_72:743297308937945099> **Kod Hakkında;**\n<a:emoji_72:743297308937945099> Kod Adı • \`${kanal}\`\n<a:emoji_72:743297308937945099> Kategori • \`${args[0]}\``
    )
  .setFooter(`© 2020 Astarius Code`)
    client.channels.get("743144973532397568").send(embed2);
  const paylasildi = new Discord.RichEmbed()
  .setTitle("Kod eklendi!")
  .setColor("GREEN")
  .setDescription(`\`${kanal}\` isimli kod \`${args[0]}\` kategorisinde paylaşıldı!`)
  const kodpaylasildi = new Discord.RichEmbed()

  
  ////////////
  if (args[0] == "js") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "743145773171998871")) {
      message.guild
        .createChannel(`📁・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "743145773171998871"
          )
        })
        .then(c =>
          c.send(new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:emoji_71:743267665677647932> **Kod Hakkında;**\n<a:641041514059005983:743074018592030770> Yetkili • \`${message.author.tag}\`\n<a:641041514059005983:743074018592030770> Yetkili ID • \`${message.author.id}\`\n<a:641041514059005983:743074018592030770> Kod Linki • [Tıkla](${code})`
              )
  .setFooter(`© 2020 Astarius Code`)
                )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////JS SON
  
  
////////////
  if (args[0] == "v12") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "743232005382340629")){
      message.guild
        .createChannel(`🌟・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "743232005382340629"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:emoji_71:743267665677647932> **Kod Hakkında;**\n<a:641041514059005983:743074018592030770> Yetkili • \`${message.author.tag}\`\n<a:641041514059005983:743074018592030770> Yetkili ID • \`${message.author.id}\`\n<a:641041514059005983:743074018592030770> Kod Linki • [Tıkla](${code})`
              )
  .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
/// v12 SON
  
  
  
  
  
  //////////////JS+
  if (args[0] == "js+") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "731319538490015845")) {
      message.guild
        .createChannel(`🔮・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "731319538490015845"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:sunss:732745317761417294> **Kod Hakkında;**\n<a:taac:732744367265284106> Yetkili • \`${message.author.tag}\`\n<a:taac:732744367265284106> Yetkili ID • \`${message.author.id}\`\n<a:taac:732744367265284106> Kod Linki • [Tıkla](${code})`
              )
              .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////JS+ SON

  
  
  
  
  
  
  
  //////////////ALTYAPI
  if (args[0] == "altyapi") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "743058987049680926")) {
      message.guild
        .createChannel(`💻・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "743058987049680926"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" altyapısı paylaşıldı!`)
              .setDescription(
`<a:emoji_71:743267665677647932> **Kod Hakkında;**\n<a:641041514059005983:743074018592030770> Yetkili • \`${message.author.tag}\`\n<a:641041514059005983:743074018592030770> Yetkili ID • \`${message.author.id}\`\n<a:641041514059005983:743074018592030770> Kod Linki • [Tıkla](${code})`
              )
  .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////ALTYAPI SON

  
  
  
  
  //////////HTML
  if (args[0] == "html") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "743232283732869161")) {
      message.guild
        .createChannel(`🌐・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "743232283732869161"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:emoji_71:743267665677647932> **Kod Hakkında;**\n<a:641041514059005983:743074018592030770> Yetkili • \`${message.author.tag}\`\n<a:641041514059005983:743074018592030770> Yetkili ID • \`${message.author.id}\`\n<a:641041514059005983:743074018592030770> Kod Linki • [Tıkla](${code})`
              )
  .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  ///////////HTML SON

  
  
  
  
  
  
  //////////////PREMIUM
  if (args[0] == "premium") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "743232104913043587")) {
      message.guild
        .createChannel(`💎・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "743232104913043587"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:emoji_71:743267665677647932> **Kod Hakkında;**\n<a:641041514059005983:743074018592030770> Yetkili • \`${message.author.tag}\`\n<a:641041514059005983:743074018592030770> Yetkili ID • \`${message.author.id}\`\n<a:641041514059005983:743074018592030770> Kod Linki • [Tıkla](${code})`
              )
  .setFooter(`© 2020 Astarius Code\nDavetleriniz için teşekkür ederiz ❤`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////PREMIUM SON
  
  
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kod-ekle"],
  permLevel: 0
};

exports.help = {
  name: "kodekle"
};
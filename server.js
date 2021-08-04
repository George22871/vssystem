const Discord = require('discord.js');
const client = new Discord.Client();
client.setMaxListeners(500)
const prefix = "vs/"
const http = require("http");
const express = require("express");
const app = express();
const moment = require("moment");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC21r8TeeLX5R4igRQW_JQ7C28WWIyVJSk"); //
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyC21r8TeeLX5R4igRQW_JQ7C28WWIyVJSk"; 
const ytdl = require("ytdl-core");
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require("simple-youtube-api");
const canvas = require("canvas");
const invites = {};
const wait = require('util').promisify(setTimeout);
const math = require('math-expression-evaluator');  
const { RichEmbed } = require('discord.js');
const fs = require("fs");
const convert = require("hh-mm-ss")
const shuruhatik = process.env.PROJECT_BY_SHURUHATIK;
const fetch = require("node-fetch");

client.commands = new Discord.Collection();

app.get("/", (_, r) => r.sendStatus(200));
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://vs-system.glitch.me/`);
}, 4 * 60 * 1000);

let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>//يجب عمل الخطوه فالصورة المتحركة الملحقة مع الرابط
      console.log(`[${++count}] here i pinged ${process.env.URL}`)//كل مره يسوي بنغ للبروجكت بيكتب فاللوق حق البروجكت 
    ),
  300000
);


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'System Managment',  
            type: "STREAMING",
            url: "https://www.twitch.tv/m"
        }
    });
});


client.on("guildMemberDelete", member => {
  const channel = member.guild.channels.find(channel => channel.name === "⌠📌⌡logs")
  if (!channel) return;
 channel.send(`** ${member} has left **`)

 let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.username}`, 'https://cdn.discordapp.com/attachments/740135237383618651/765428879174795354/VS_Clan_Logo_92.png  ')
    .setFooter('©️ 2020 Veterans Squad')
    .setTimestamp()
    .setColor("#bb0000")  
    .setImage(member.user.displayAvatarURL)
  channel.send({embed});
});


client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(channel => channel.name === "「🤝」𝖶elcome")
  if (!channel) return;
 channel.send(`**Welcome ${member} to ${member.guild.name} <:VSLogoemoji:741374640148054047>
You are number  ${member.guild.memberCount}  in the server <a:loading:765444114225299507>
You can verify yourself by writing vs/verify at channel <#750723082192289872> <a:verify_blue:765443920972218388>
You can get yourself roles by reacting at channel <#652518825215918100> <a:dabos:765444594916655126>
Hope you enjoy your time with us <a:hearts1:765444786102075405>
**`)

 let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.username}`, 'https://cdn.discordapp.com/attachments/740135237383618651/765428879174795354/VS_Clan_Logo_92.png  ')
    .setFooter('©️ 2020 Veterans Squad')
    .setTimestamp()
    .setColor("#bb0000")  
    .setImage(member.user.displayAvatarURL)
  channel.send({embed});
});

client.on('message', async message => {
	if (message.content === 'snjoin') {
     message.delete(1000); //Supposed to delete message
    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	}
});


client.on('message', msg => {
    if(msg.content === 'السلام عليكم')
    msg.channel.send(`عَلْيُكّمٌ السَلآْم وٍرٍحَمُةّ الله وٍبُرٍكآتُهْ`)
  });
  
client.on('message', msg => {
    if(msg.content === 'سلام عليكم')
    msg.channel.send(`عَلْيُكّمٌ السَلآْم وٍرٍحَمُةّ الله وٍبُرٍكآتُهْ`)
  });


client.on("message", message => {
  if (message.author.bot) return;
  

  let command = message.content.split(" ")[0];
 

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel.send(
        "**You don't have permissions  :rolling_eyes:**"
      );

    message.channel.send(" " + args.join(" "));
    message.delete();
  }
});

 client.on('message', message => {
    if (message.content.startsWith('vs/vote')) {
       message.delete(1000); //Supposed to delete message
 
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(test);
 
       let rest_of_the_string = message.content.slice('vs/vote'.length); //removes the first part
    let array_of_arguments = rest_of_the_string.split(','); //[title, description, link, image]
     
      const yes = client.emojis.get("565249560952438806");
        const nogif = client.emojis.get("565249560247664669");
        var sondage = new Discord.RichEmbed()
      .setAuthor(`React with ✅ or ❌ :`)
      .setTitle(array_of_arguments[0])
      .setColor("#bb0000")  
      .setDescription(array_of_arguments[1])
      .setImage(array_of_arguments[2])
      .setThumbnail("https://cdn.discordapp.com/icons/604887047492337684/a_66789e05174b4484e4d7e26d9239f4b9.gif")
      .setFooter('©️ Veterans Squad 2020 ')
      .setTimestamp()
        message.channel.send(sondage)
        .then(message => {
            message.react('a:5845_tickgreen:766513353723215882')
            message.react('a:9330_tickred:766513368043094016')
        })
 
       
    }
})

client.on("message", message => {
  if (message.content.startsWith('vs/say')) {
     if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(test);
     message.delete(1000); //Supposed to delete message
    let rest_of_the_string = message.content.slice('vs/say'.length); //removes the first part
    let array_of_arguments = rest_of_the_string.split(','); //[title, description, link, image]

    let embed = new Discord.RichEmbed()
      .setTitle(array_of_arguments[0])
      .setColor("#bb0000")  
      .setDescription(array_of_arguments[1])
      .setImage(array_of_arguments[2])
      .setThumbnail("https://cdn.discordapp.com/icons/604887047492337684/a_66789e05174b4484e4d7e26d9239f4b9.gif")
      .setFooter('©️ Veterans Squad 2020')
      .setTimestamp();

    message.channel.send({ embed });
  
  }
});

client.on("guildBanAdd", (guild, user) => {
const channel = guild.channels.find(channel => channel.name === "「📢」𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗠𝗘𝗡𝗧𝗦")
if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
if (!channel) return;
  channel.send(`${user.username} Was banned  `)
  });



client.on('guildMemberUpdate', async (oldMember, newMember) => {
  const hadRole = oldMember.roles.find(role => role.name === '「💜」Server Boosters');
  const hasRole = newMember.roles.find(role => role.name === '「💜」Server Boosters');

  if (!hadRole && hasRole) {
    newMember.guild.channels.get('757742017148092476').send(`Thanks **${newMember}** For Boosting The Server `);
  }

  // if you want to check which members are boosted, you can check how many have the `Nitro Booster` role:
  const boostedUsers = newMember.guild.members.array().filter(member => member.roles.find(role => role.name === '「💜」Server Boosters'));

  console.log(boostedUsers.length); // how many members are boosted
});


client.on("message", message => {
  if (message.content === prefix + "close") {
    message.delete();
    if (!message.channel.guild)
      return message.reply(" only for servers !!");

    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.reply("You don't have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.chennel.send("**This room was locked :no_entry: **");
      });
  }
  if (message.content === prefix + "open") {
    message.delete();
    if (!message.channel.guild)
      return message.reply(" only for servers !!");

    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.reply("You don't have permission");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send("**This room was unlocked :white_check_mark:**");
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "unmute") {
        message.delete(1000); //Supposed to delete message
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You don't have 'Manage Roles' permission  **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "mute-log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("** 'Muted' role not found  **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You need to mention a member**")
        .catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Description:", "mute/unmute")
      .addField(
        "muted :",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "by",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** Bot don't has permission Manage Roles **")
        .catch(console.error);

    if (message.guild.member(user).removeRole(muteRole.id)) {
      return message
        .channel.send(`**:white_check_mark: ${user} Unmuted.**`)
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .removeRole(muteRole)
        .then(() => {
          return message
            .channel.send(`**:white_check_mark: ${user} Unmuted.**`)
            .catch(console.error);
        });
    }
  }
});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {
        message.delete(1000); //Supposed to delete message
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .reply("** You don't have 'Manage Roles' permission  **")
        .catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find(gg => gg.name === "mute-log");
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find(gg => gg.name === "Muted");
    if (!muteRole)
      return message
        .reply("**  'Muted' role not found **")
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .reply("** You need to mention a member**")
        .catch(console.error);

    const embed = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Description:", "mute/unmute")
      .addField(
        "muted:",
        `${user.username}#${user.discriminator} (${user.id})`
      )
      .addField(
        "By:",
        `${message.author.username}#${message.author.discriminator}`
      );

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .reply("** Bot don't has 'Manage Roles' permission **")
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return message
        .channel.send(`**:white_check_mark:  ${user} Muted**`)
        .catch(console.error);
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message
            .channel.send(`**:white_check_mark:  ${user} Muted**`)
            .catch(console.error);
        });
    }
  }
});



client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("vs/avatar")) {
    message.delete(1000); //Supposed to delete message
message.channel.send(``);
  
  let embed = new Discord.RichEmbed()
    .setImage(user.displayAvatarURL)
  .setURL(user.AvatarURL)
  .setDescription(`**[Avatar Link](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?size=2048)**`)
  .setFooter(`Requested by ${message.author.username}`,`${message.author.displayAvatarURL}`)
  .setAuthor(`${user.username}`, 'https://cdn.discordapp.com/attachments/740135237383618651/765428879174795354/VS_Clan_Logo_92.png  ')
  message.channel.send({embed});
  
}
});


client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Guest"));
});

client.on('message', message => {
  if (message.channel.id === '652518738771312640') {
    message.react('a:607757680748003344:765809861014585354')
    message.react('a:heart2:765810510724595722');
  }

});

client.on('message', message => {
  switch(message.content.toLowerCase()) {
      case 'vs/restart':
          resetBot(message.channel);
          break;

  }
});
function resetBot(channel) {
  channel.send('Resetting time is: 5s').then(rr=>
    {
        rr.edit('Resetting time is: 4s').then(rr=>
          {
            rr.edit('Resetting time is: 3s').then(rr=>
          
            {
                rr.edit('Resetting time is: 2s').then(rr=>
              
                  {
                    rr.edit('Resetting time is: 1s').then(rr=>
                      {
                        rr.delete();
                      })
                  
                  })
                })
              })
            })
    
  .then(msg => client.destroy())
  .then(() => client.login(process.env.SECRET)).then(rr=>
    {
      channel.send('Restarted')
    })
            
}

client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	
	if (command === "ping") {
      message.delete(1000); //Supposed to delete message
    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		message.channel.send(` Time took: ${Date.now() - message.createdTimestamp} ms`);
	} 
});

client.on("message", pixelbot => {
  // itzZa1D - Codes Team.
  if (pixelbot.content.startsWith(prefix + "user")) {
      pixelbot.delete(1000); //Supposed to delete message
    // itzZa1D - Codes Team.
    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {
      // itzZa1D - Codes Team.
      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() // itzZa1D - Codes Team.
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | Use  r Info") // itzZa1D - Codes Team.
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("**✽ Name :**   ", pixelbot.author.username, true)
        .addField("**✽ Tag :**   ", pixelbot.author.discriminator, true)
        .addField("**✽ ID :** ", pixelbot.author.id, true) // itzZa1D - Codes Team.
        .addField(
          "**✽ Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**✽ Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**✽ Total invites :**    ", inviteCount, true)
        .setTimestamp(); // itzZa1D - Codes Team.

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); // itzZa1D - Codes Team.
    });
  }
}); // itzZa1

client.on("message", async message => {
  if (message.content.startsWith(prefix + "info")) {
      message.delete(1000); //Supposed to delete message
    //// وهون الامر طبعا
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
      console.log(inviteCode);
      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
        .addField(
          "**عدد الدعوات للسيرفر**",
          `[ شخص **${Number(inviteCount)}** ]   `
        )
        .addField(
          "**تاريخ انضمامك لسيرفرنا **",
          ` [ منذ  **${daysJoined.toFixed(0)}** يوم ]   `
        )
        .addField(
          "**رابط الدعوة الذي دخلت منه**  ",
          `[ **${
            inviteCode &&
            inviteCode.code &&
            inviteCode.code.includes("discord.gg")
              ? inviteCode.code
              : `https://discord.gg/${inviteCode.code || "vHmbKTE"}`
          }** ]   `
        )
        .setImage("")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
      message.delete(1000); //Supposed to delete message
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:✽** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:✽** Created On**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: ✽**Server Owner**", `**${message.guild.owner}**`, true)
      .addField(
        `✽** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:✽** Channels **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TexT | VoicE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:✽** Region **", ` ${message.guild.region}`, true)
      .setImage("")

      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    message.delete(1000);
    if (message.member.hasPermission("MANAGE_ROLES")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});

client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": عدد الرسائل التي تم مسحها" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": عدد الرسائل التي تم مسحها" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});



client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('vs/kick')) {
     message.delete(1000);
     if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('vs/ban')) {
     message.delete(1000);
     if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
     message.delete(1000);
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();
    
    if (!user) return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Done!");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Done!");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

client.on('message', message => {
if(message.content.startsWith("vs/inrole")){
   if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    let roleName = message.content.split(" ").slice(1).join(" ");

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their 
	

    let membersWithRole = message.guild.members.filter(member => { 
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.user.username;
    })

    let embed = new Discord.RichEmbed({
        "title": `Users with the ${roleName} role`,
        "description": membersWithRole.join("\n"),
        "color": 0xFFFF
    });

    return message.channel.send({embed});
}
});


const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setlogs")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;

  let messageDelete = new Discord.RichEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL)
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL);

  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.RichEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL);

  logChannel.send(messageUpdate);
});

client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleCreate = new Discord.RichEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleCreate);
  });
});
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;

  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let roleDelete = new Discord.RichEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL);

    logChannel.send(roleDelete);
  });
});
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.RichEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.RichEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL);

      logChannel.send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelCreate = new Discord.RichEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelCreate);
  });
});
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    let channelDelete = new Discord.RichEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL);

    logChannel.send(channelDelete);
  });
});
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;

  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newName);
    }
    
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.RichEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
            "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
            "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
            oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL);

      logChannel.send(newTopic);
    }
  });
});

client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let banInfo = new Discord.RichEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(banInfo);
  });
});
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;

  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;

    if (userID === client.user.id) return;

    let unBanInfo = new Discord.RichEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL);

    logChannel.send(unBanInfo);
  });
});

client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL;
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.RichEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

      logChannel.send(updateNickname);
    }
    if (oldMember.roles.size < newMember.roles.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.RichEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleAdded);
    }
    if (oldMember.roles.size > newMember.roles.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.RichEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL)
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);

      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.RichEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL)
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL);

    logChannel.send(newOwner);
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "setby")) {
    let args = message.mentions.channels.first();
    if (!args)
      message.channel.send("** منشن روم . ❌**").then(m => {
        m.delete(1500);
      });
    if (
      !message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send("**ليس لديك صلاحيات . ❌**");
    message.channel.send(
      `**${args}.  | :ballot_box_with_check: |لقد تم شغيل المغادرة هنا**`
    ); //By ItzTexo
    client.on("guildMemberRemove", member => {
      if (member.user.bot) return;
      var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`**الله معاك ✋ **`)
        .addField("**__شكرا لوقتك__**  ", `${member}`)
        .setDescription(`**مع السلامه تشرفنا بك ✋** `)
        .addField("👤   تبقي", `**[ ${member.guild.memberCount} ]**`, true)
        .setColor("RANDOM")
        .setFooter(`نتمنى لكم الاستمتاع`);

      var channel = member.guild.channels.find(gg => gg.name === "mute-log"); //// تعديل اساسي
      if (!channel) return;
      channel.send({ embed: embed });
    });
  }
});

client.on('message', (message) => {
    if (message.content == 'vs/muteall') {
      if (!message.member.hasPermission("MANAGE_ROLES"))  return;
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
        }
     }
});

client.on('message', message => {
  if (message.content === 'vs/muteall') {
    if (!message.member.hasPermission("MANAGE_ROLES"))
    message.delete(1000); //Supposed to delete message
    message.channel.send(`Channel members muted!`);
  }
});

client.on('message', (message) => {
    if (message.content == 'vs/unmuteall') {
       if (!message.member.hasPermission("MANAGE_ROLES"))  return;
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(false)
        }
     }
});

client.on('message', message => {
  if (message.content === 'vs/unmuteall') {
    if (!message.member.hasPermission("MANAGE_ROLES"))
    message.delete(1000); //Supposed to delete message
    message.channel.send(`Channel members unmuted`);
  }
});

client.on('message', message => {
    if (message.content == "vs/جمع") {
        var x = ["212+212=?",
"321+43=?",
"4534+23",
"23+3434=?",
"2311+32=?",
"765+343=?",
"343+1121=?",
"43234+1=?",
"10000000000+2=?",
"232+21=?",
"12+23=?",                 
];
        var x2 = ['424',
        "364",
        "4557",
        "3457",
		"2343",
		"1108",
    "1464",
    "43235",
   "10000000002",
  "253",
  "35",
                  
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يحل جمع : __**${x[x3]}**_
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بحل جمع في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "vs/ضرب") {
        var x = ["9x9=?",
"8x9=?",
"4x4=?",
"2x22=?",
"12x2=?",
"7x7=?",
"5x5=?",
"9x3=?",
"2342432x0=?",
"21321x1=?",
"3x4x5=?",
];
        var x2 = ['81',
        "72",
        "16",
        "42",
		"22",
		"49",
		"25",
		"27",
    "0",
    "21321",
    "60",
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يحل ضرب :  __**${x[x3]}**__
لديك 15 ثانية لحل ضرب`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل  في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "vs/طرح") {
        var x = ["4326-2345=?",
"5822-8547=?",
"543-823=?",
"1500-500=?",
"4322-2768=?",
"5652-1255=?",
"3421-11234=?",
"34545-1233=?",
"23456-54332=?",
"2312-3433=?",
"4321-321=?",
];
        var x2 = ['1981',
        "-2725",
        "-280",
        "1000",
"1554",
"4397",
"-7813",
"33312",
"-30876",
"1121",
"4000",

        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  اول شخص يكتب حل صح :  __**${x[x3]}**__
لديك 15 ثانية لكتابة حل صحيح`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة حل في الوقت المناسب  `);
        })
        })
    }
})


client.on('message', message => {
    if (message.content.startsWith("vs/hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("**```اكتب اسم الشخص الي تبي يتهكر```**");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 20%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 30%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 40%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 50%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 85%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يتم تهكير ').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: تحديث بسيط' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('** ! تمت عمليه التهكير بنجاح **')
           }, 33000)
           });
         }
})


const cuttweet = [
     'سؤال ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'سؤال | أكثر شيء يُسكِت الطفل برأيك؟',
     'سؤال | الحرية لـ ... ؟',
     'سؤال | قناة الكرتون المفضلة في طفولتك؟',
     'سؤال ‏| كلمة للصُداع؟',
     'سؤال ‏| ما الشيء الذي يُفارقك؟',
     'سؤال | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'سؤال ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'سؤال | بعد ١٠ سنين ايش بتكون ؟',
     'سؤال ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏سؤال | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'سؤال | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏سؤال | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏سؤال | وش يفسد الصداقة؟',
     '‏سؤال | شخص لاترفض له طلبا ؟',
     '‏سؤال | كم مره خسرت شخص تحبه؟.',
     '‏سؤال | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏سؤال | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏سؤال | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏سؤال |أقوى كذبة مشت عليك ؟',
     '‏سؤال | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'سؤال | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏سؤال | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏سؤال | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏سؤال | وش محتاج عشان تكون مبسوط ؟',
     '‏سؤال | مطلبك الوحيد الحين ؟',
     '‏سؤال | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("vs/ask")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
	 'صراحه | نفسك فـ ايه ؟',
	 'صراحه | هل تحب فتاه او احببت من قبل ؟',
	 'صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟',
	 'صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟',
	 'صراحه | هل تحب مدرستك ؟',
	 'صراحه | ما الشئ الذي تتمني ان يحصل ؟',
	 'صراحه | هل تحب عائلتك ؟',
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('vs/صراحة')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

const sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
	 'صراحه | نفسك فـ ايه ؟',
	 'صراحه | هل تحب فتاه او احببت من قبل ؟',
	 'صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟',
	 'صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟',
	 'صراحه | هل تحب مدرستك ؟',
	 'صراحه | ما الشئ الذي تتمني ان يحصل ؟',
	 'صراحه | هل تحب عائلتك ؟',
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('vs/صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${sra7a[Math.floor(Math.random() * sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("vs/حكم")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Vetarans Squad' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});

client.on('message', message => {
    if (message.content == "vs/سؤال") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});




client.on('message', message => {
    if (message.content == "vs/فكك") {
        var x = ["محمد",
"مدرسة",
"بيت",
"الله",
"بيت مقدس",
"مهندس",
"ريضيات",
"بسم الله الرحمن الرحيم",
"طماطم",
"سيرفر",
];
        var x2 = ['م ح م د',
        "م د ر س ة",
        "ب ي ت ",
        "ا ل ل ه",
"ب ي ت م ق د س",
"م ه ن د س",
"ر ي ض ي ا ت",
"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م",
"ط م ا ط م",
"س ي ر ف ر",
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`  فكك
 :  __**${x[x3]}**__
لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بتفكيك كلمة في وقت مناسب`);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == "vs/عواصم"){
        var x = ["ما عاصمة **المغرب**",
    "ما عاصمة **افغانستان**",
    "ما عاصمة **الجزائر **",
    "ما عاصمة **الارجنتين",
    "ما عاصمة ** مصر**",
    "ما عاصمة ** استراليا**",
    "ما عاصمة ** البرازيل**",
    "ما عاصمة **قطر  **",
    "ما عاصمة **السعودية  **",
    "ما عاصمة **سوريا  **",
    "ما عاصمة **تركيا  **",
    "ما عاصمة **العراق  **",
    "ما عاصمة **لبنان  **",
    "ما عاصمة **فلسطين  **",
    "ما عاصمة **امريكا  **",
   "ما عاصمة **كندا  **",
   "ما عاصمة **البرازيل  **",
];
        var x2 = ['الرباط',
        "كابل",
        "الجزائر",
      "بوينس ايرس",
"القاهرة",
"كانبرا",
"برازيليا",
"الدوحة",
      "الرياض",
      "دمشق",
      "انقرة",
    "بغداد",
      "بيروت",
    "القدس",
  "وشنطن",
    "اوتاوا",
  "برازيليا",
  
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب عاصمة صح :  __**${x[x3]}**__
لديك 20 ثانية لكتابة عاصمة صحيحة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}لقد قمت بكتابة عاصمة صح في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
var prefix = "-";
var cats = ["http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith('vs/نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

 client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "roll")){
            if(!args) return message.channel.send("يجب كتابه رقم")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });

 client.on('message', message => {
    if (message.content.startsWith("vs/bans")) {
      if (!message.member.hasPermission("ADMINISTRATOR"))
       message.delete(1000); //Supposed to delete message
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} bans  `))
  .catch(console.error);
}
});


client.on('message', message => {
    if (message.content == prefix + "سرعة") {
        var x = ["LioN_Dz",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"بلاد الرافدين",
"ميكانيكي",
"توكا",
"عادل امام",
"عمرو ذياب",
"عمان",
"مسقط",
"بغداد عاصمة العراق",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"احبك دريم",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['LioN_Dz',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        "بلاد الرافدين",
        "ميكانيكي",
        "توكا",
        "عادل امام",
        "عمرو ذياب",
        "عمان",
        "مسقط",
        "بغداد عاصمة العراق",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "احبك دريم",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 8 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 8000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', message => {
    if (message.content == prefix + "سرعه") {
        var x = ["LioN_Dz",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"بلاد الرافدين",
"ميكانيكي",
"توكا",
"عادل امام",
"عمرو ذياب",
"عمان",
"مسقط",
"بغداد عاصمة العراق",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"احبك دريم",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['LioN_Dz',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        "بلاد الرافدين",
        "ميكانيكي",
        "توكا",
        "عادل امام",
        "عمرو ذياب",
        "عمان",
        "مسقط",
        "بغداد عاصمة العراق",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "احبك دريم",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 8 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 8000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', puz => {
    if (puz.content == prefix + "لغز") {
        var x = ["ما هي حاسة الشم عند الثعبان ؟",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشيء الذي اسمه على لونه ؟",
"ما هو الشي الذي كلما زاد نقص ؟",
"ما هي التي تحرق نفسها لتفيد غيرها ؟",
"كله ثقوب و مع ذلك يحفظ الماء ؟",
"ما هو الذي لحمه من الداخل و عظمه من الخارج ؟",
"يستطيع ان يخترق الزجاج من دون كسره .. فما هو ؟",
];
        var x2 = ['اللسان',
		"الابره",
        "الماء",
		"تموز",
		"المسمار",
		"البيضة",
		"العمر",
		"الشمعة",
		"الاسفنج",
		"السلحفاة",
		"الضوء",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`السؤال هو:  __**${x[x3]}**__
لديك 10 ثانية للاجابة`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} لقد قمت بحل اللغز في الوقت المناسب  `);
        })
        })
    }
})

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(channel => channel.name === "logs-report")
  if (!channel) return;

  let embed = new Discord.RichEmbed()
    .setTitle("Action Log")
    .setThumbnail(`https://cdn.discordapp.com/icons/604887047492337684/a_66789e05174b4484e4d7e26d9239f4b9.gif`)
    .setDescription(`${member} (${member.user.tag}) **Joined**`)
    .setFooter('©️ 2020 Veterans Squad')
    .setImage(member.user.displayAvatarURL)
  channel.send({embed});

});

client.on('message', message => {
    if (message.content.startsWith("vs/link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});

 client.on('message', message => {
        if(message.content.startsWith('vs/theroleinfo')) {
let role = message.mentions.roles.first();
          if (!message.member.hasPermission("ADMINISTRATOR"))
if(!role) {
    return message.reply(`Mention Role Kid`);
}
let rolecheck = message.guild.roles.find(r => r.name === role.name);
if(!rolecheck) {
    return message.reply(`i cant find that role!`);
}

let embed = new Discord.RichEmbed()
.setAuthor(message.author.username , message.author.displayavatarURL)
.setTitle(`Role Info ${role.name}`)
.addField("Role ID", role.id)
.addField("Role Name", role.name)
.addField("Role MemberSize", role.members.size)
.addField("Role MentionAble", role.mentionable)
.addField("Role Postion", role.position)
 .setFooter(message.guild.name, message.guild.iconURL)
message.channel.sendEmbed(embed)
}

    })

  client.on("message", message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "vsavatar")) {
      let doma = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL)
      .setImage(message.guild.iconURL)
      .setFooter(`Requested By ${message.author.username}`, message.author.avatarURL)
      message.channel.send(doma)
    } 
  });

client.on('message', alphamsg => {
  if(alphamsg.content === prefix + "allbots") { 
    if (!alphamsg.member.hasPermission("ADMINISTRATOR"))
        alphamsg.delete(1000); //Supposed to delete message
  if(!alphamsg.channel.guild) return;
let alphaf = 1;
const alpha = alphamsg.guild.members.filter(m=>m.user.bot).map(m=>`:small_orange_diamond: ${alphaf++} - <@${m.id}>`);
          alphamsg.channel.send(`**وجدت ${alphamsg.guild.members.filter(m=>m.user.bot).size} بوت
البوتات الموجوده في السيرفر
${alpha.join('n')}
**
`)
}
});

client.on("message", message => {
  let roleembed = new Discord.RichEmbed()
.setDescription(`
أمثله على الأوامر :
-role @mention rolename : لأعطاء رتبة لعضو معين
-role all rolename : لأعطاء رتبة للجميع
-role humans rolename : لأعطاء رتبة للاشخاص فقط
-role bots rolename : لأعطاء رتبة لجميع البوتات`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
var args = message.content.split(' ').slice(1);
var msg = message.content.toLowerCase();
if( !message.guild ) return;
if( !msg.startsWith( prefix + 'addrole' ) ) return;
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(' **__ليس لديك صلاحيات__**');
if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
    if( !args[0] ) return message.channel.sendEmbed(roleembed)
    if( !args[1] ) return message.channel.sendEmbed(roleembed)
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى الكل رتبة**');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البوتات رتبة**');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البشريين رتبة**');
    }  
} else {
    if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
    if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
    }
}
});






var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
 client.on('message', message => {
     var args = message.content.split(" ").slice(1);
 if(message.content.startsWith(prefix + 'لو خيروك')) {
      var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
 }
});

const secreT = [
"**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
"**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
"**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
"**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
"**ان تعالج ألمك بنفسك تلك هى القوة**.", 
"**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
"**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
"**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
"**المناقشات العقيمة لا تنجب افكارا**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


client.on('message', message => {
if (message.content.startsWith("vs/خواطر")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')

.setThumbnail(message.author.avatarURL) 
.addField('لعبه خواطر' ,
`${secreT[Math.floor(Math.random() * secreT.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});


client.on('message', message => {
        if(message.content === prefix + "hide") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('**تـم أخفـاء الشـات**')
   }
  });
  
  
  client.on('message', message => {
        if(message.content === prefix + "show") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('**تـم أظهـار الشـات**')
   }
  });

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='vs/count')
        if (!message.member.hasPermission("ADMINISTRATOR"))
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌍| Members info')
      .addBlankField(true)
      .addField('Mmeber Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

client.on("message", message => {    
    if(message.content.startsWith(prefix + "emoji")) {  
      if (!message.member.hasPermission("ADMINISTRATOR"))
        if(message.author.bot) return;  
        var emojiid =  message.content.split(" ").slice(1).join(" ")   
        console.log(emojiid) 
        if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage  
${prefix}emoji <EmojiID>`); 
        else    
        message.channel.send("This is the emoji that you requested:-",  
          { 
            files: [`https://cdn.discordapp.com/emojis/${emojiid}.gif`]  
          }) 
        }  
})   

client.on("message", message => {    
    if(message.content.startsWith(prefix + "emoji")) {  
      if (!message.member.hasPermission("ADMINISTRATOR"))
        if(message.author.bot) return;  
        var emojiid =  message.content.split(" ").slice(1).join(" ")   
        console.log(emojiid) 
        if(emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid)) return  message.channel.send(`- Usage  
${prefix}emoji <EmojiID>`); 
        else    
        message.channel.send("This is the emoji that you requested:-",  
          { 
            files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]  
          }) 
        }  
})  

client.on('message' , message => {
  var prefix = "vs/"
  
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  
  
  
  let args = message.content.split(" ").slice(1).join(" ");
  
  
  
  client.users.get("455340951473487873").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  
  let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setDescription('📬 Thanks | Your message has been sent to the bot developer')
       .setThumbnail(message.author.avatarURL)
       .setFooter("Veterans Squad | System")
                                                  
  
  message.channel.send(embed);
  
  
  }
      
  });

client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط سيرفرات  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content == 'vs/members') { 
       if (!message.member.hasPermission("ADMINISTRATOR"))
         message.delete();
    const embed = new Discord.RichEmbed()
    .setDescription(`**حالات الاعضاء🔋
:green_heart: اونلاين   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:مشغول       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: خامل      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: اوفلاين   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   الكل  ${message.guild.memberCount}**`)         
         message.channel.send({embed}); 

    }
  });

client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'dm')) {
   if (!msg.member.hasPermission("ADMINISTRATOR"))
   msg.delete(1000); //Supposed to delete message
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.reply(`**يجب تحديد الشخص**`)
      let alphaEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "))

      client.users.get(`${alpha.id}`).send(alphaEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});

client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});

client.on('message', message => {
  if (message.content.startsWith(prefix + 'serverroles')) {

      const Rank = message.guild.roles.map(e => e.toString()).join(" ");

      const RankList = new Discord.RichEmbed()
          .setTitle('➠ Roles.')
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .setDescription(Rank)
          .setFooter(message.guild.name)
      message.channel.send(RankList)
  }
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'extraemojis')) {
      if (!message.member.hasPermission("ADMINISTRATOR"))
   message.delete(1000); //Supposed to delete message
        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
  if (!message.member.hasPermission("MANAGE_ROLES"))
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)
                  message.channel.send({embed:zPeRms});
 
    }
});

client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "sendtorole")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "Server Name :" + "\n" +
              `${message.guild.name}` + "\n" +
              "Sent by :" + "\n" +
              `${message.author.tag}` + "\n" +
              "Message :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });






const shorten = require('isgd');
client.on('message', ninja => {

 if (ninja.content.startsWith(prefix + 'short')) {
   if (!ninja.channel.guild) return;
    ninja.channel
    let args = ninja.content.split(" ").slice(1);
  if (!args[0]) return ninja.channel.send('**Use** '+ prefix +'short <link>')
  if (!args[1]) {
    shorten.shorten(args[0], function(res) {
      if (res.startsWith('Error:')) return ninja.channel.send('**Use** '+ prefix +'short <link>');
      ninja.channel.send(`Short link:  ${res}`);
    })
  } else {
    shorten.custom(args[0], args[1], function(res) {
      if (res.startsWith('Error:')) return ninja.channel.send(`Short link : ${res}`);
      ninja.channel.send(`Short link : ${res}`);
})
}}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'id')) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
    var member = message.guild.member (message.mentions.members.first() || message.author);
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM") 
   .addField(`ID USER : [ ${member.id} ]`,`${member.user}`)
   .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`- Requested By: ${message.author.tag}`)
  message.channel.send({embed});
      }
  });



client.on('guildMemberUpdate', (ninja, ot,) => {
if(ninja.roles.size < ot.roles.size) {
 let role = ot.roles.filter(r => !ninja.roles.has(r.id)).first();
            let embed = new Discord.RichEmbed()
            .setThumbnail(ninja.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(`
**Congratulation you have got a new role!**
 
**✨ Role Name:** ( ${role.name} )
 
**🔗 Server:** ${ot.guild.name}`)
            .setTimestamp()
           .setFooter(`©️ 2020 Veterans Squad`) 
            ot.user.send(embed); 
}
});
/*
 client.on("message", message => {
   if (message.channel.name == "「✅」𝖵erification") {
    if(message.content.startsWith("vs/verify")) {
      let num = Math.floor((Math.random() * 4783) + 10);
    
      message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
        message.channel.awaitMessages(res => res.content == `${num}`, {
          max: 1,
          time: 60000,
          errors: ['time'],
        }).then(collected => {
          message.delete();
          m.delete();
          message.member.removeRole(message.guild.roles.find(c => c.name == "Guest"));
          message.member.addRole(message.guild.roles.find(c => c.name == "「🔰」Recruited"));
          message.member.addRole(message.guild.roles.find(c => c.name == "「VS」New Comers"));
        }).catch(() => {
          m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
});
})
}}
})
*/
client.on ("message", async (Message) => {
    if (!Message.guild ||
        Message.author.bot) return false;
     if (Message.content.startsWith (prefix + "viewrolemembers")) {
        if (!Message.member.hasPermission ("MANAGE_ROLES"))return Message.reply("**You dont have Permissions.**")//مادري ليش هل برمشن بس احسن 
        var role = Message.mentions.roles.first ();
        if (!role) return Message.reply ("**mention the role.**");

        var members = Message.guild.members.filter (m => m.roles.get (role.id));
        if (members.size == 0) return Message.reply ("**There are 0 members have this role.**");
        var embed = new Discord.RichEmbed ()
        .setColor ("BLACK")
        .setTitle (`We have ${members.size} Members have this role on this server`)
        .setDescription (`${members.map(m => "<@"+m.user.id+">").join("\n")}`)
        .setFooter (`Requested By: ${Message.author.tag}`, Message.author.avatarURL)

        Message.channel.send (embed);
    } 
})

client.on('message', message => {
  let args = message.content.split(" ")
  if (args[0].toLowerCase().startsWith(prefix+'showallroles')) {
    let str = "";
     if (!message.member.hasPermission ("MANAGE_ROLES"))
    var role = message.guild.roles.forEach(role => {
      str +=" "+role.name+'\n'
    })
    message.channel.send(`\`\`\`${str}\`\`\``)
  }
})

  
const discord = require('discord.js');
const config = require('./config.json');
const search = require('youtube-search');
const opts = {
    maxResults: 25,
    key: config.YOUTUBE_API,
    type: 'video'
};
client.on('message', async message => {
    if(message.author.bot) return;

    if(message.content.toLowerCase() === 'vs/search') {
        let embed = new Discord.RichEmbed()
            .setColor("#73ffdc")
            .setDescription("Please enter a search query. Remember to narrow down your search.")
            .setTitle("YouTube Search API");
        let embedMsg = await message.channel.send(embed);
        let filter = m => m.author.id === message.author.id;
        let query = await message.channel.awaitMessages(filter, { max: 1 });
        let results = await search(query.first().content, opts).catch(err => console.log(err));
        if(results) {
            let youtubeResults = results.results;
            let i  =0;
            let titles = youtubeResults.map(result => {
                i++;
                return i + ") " + result.title;
            });
            console.log(titles);
            message.channel.send({
                embed: {
                    title: 'Select which song you want by typing the number',
                    description: titles.join("\n")
                }
            }).catch(err => console.log(err));
            
            filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
            let collected = await message.channel.awaitMessages(filter, { maxMatches: 1 });
            let selected = youtubeResults[collected.first().content - 1];

            embed = new Discord.RichEmbed()
                .setTitle(`${selected.title}`)
                .setURL(`${selected.link}`)
                .setDescription(`${selected.description}`)
                .setThumbnail(`${selected.thumbnails.default.url}`);

            message.channel.send(embed);
        }
    }
});

client.on('guildMemberAdd', member => {
   member.send(` 
**
Welcome ${member},  to ${member.guild.name} <:VSLogoemoji:741374640148054047>

-You can verify yourself by going to channel <#750723082192289872> <a:verify_blue:765443920972218388> and use command : vs/verify
-You can get yourself roles by reacting at channel <#652518825215918100>
Hope you enjoy your time <a:hearts1:765444786102075405>
-----------------------------------------------------------------
بإمكانك تفعيل نفسك من خلال الذهاب الى  <#750723082192289872>  بإستخدام الأمر التالي
vs/verify
ومن ثم ادخال الكود الذى سيظهر امامك بعد كتابة الأمر 
وتقدر تاخد رول الألعاب اللى بتلعبها من هنا  <#652518825215918100>  عن طريق الريأكت
اتمنى لك الاستمتاع بوقتك <a:hearts1:765444786102075405> 


**



`);
  let embed = new Discord.RichEmbed()
    .setFooter('©️ 2020 Veterans Squad')
    .setImage('https://cdn.discordapp.com/attachments/740135237383618651/765428879174795354/VS_Clan_Logo_92.png')
  member.send({embed}); 
  
  
});

let warning = JSON.parse(fs.readFileSync('./warning.json' , 'utf8'));
client.on('message',message=>{
if(message.author.bot || message.channel.type == "dm"||!message.channel.guild) return;
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
if(command == 'warn'){if(!message.member.hasPermission('MANAGE_ROLES')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let T = warning[message.guild.id].warns;
let user = message.mentions.users.first();if(!user)return message.channel.send(`**:rolling_eyes: I can't find this member**`)
let reason = message.content.split(" ").slice(2).join(" ");if(!reason) return message.channel.send(`**:rolling_eyes: Please specify a reason.**`)
let W = warning[message.guild.id].warns;
let ID = 0;let leng = 0;
W.forEach(w =>{ID++;
if(w.id !== undefined) leng++;
})
if(leng === 90) return message.channel.send(`** You Can't Give More than \`90\` Warns**, please reset the warn list.`)
T.push({user:user.id,by:message.author.id,reason:reason,time:moment(Date.now()).format('llll'),id:ID+1})
message.channel.send(`**✅ @${user.username} warned!**`);
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)});
user.send(new Discord.RichEmbed().addField('**:warning: You were warned!**',reason)
.setFooter(message.guild.name,message.guild.iconURL).setTimestamp().setColor('#fffe62'));return;}
if(command == 'warnings') {
if(!message.member.hasPermission('MANAGE_ROLES')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]}
let count = 0;let page = message.content.split(" ")[1];if(!page || isNaN(page)) page = 1;if(page > 4) return message.channel.send('**Warnings are only recorded on 4 pages!**')
let embed = new Discord.RichEmbed().setFooter(message.author.username,message.author.avatarURL)
let W = warning[message.guild.id].warns;
W.forEach(w =>{if(!w.id) return;count++;
if(page == 1) {if(count > 24) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 24) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 2`);
}if(page == 2) {if(count <= 24) return null;if(count > 45) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 45) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 3`);
}if(page == 3) {if(count <= 45) return null;if(count > 69) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 69) embed.addField('**:sparkles: More ?**',`${message.content.split(" ")[0]} 4`);
}if(page == 4) {if(count <= 69) return null;if(count > 92) return null
let reason = w.reason;let user = w.user;let ID = w.id;let By = w.by;let time = w.time;
embed.addField(`⏱ ${time}`,`Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
if(count == 64) embed.addField('**FULL**',`** **`);}});
embed.setTitle(`**${count} Warnings** [ ${page}/4 ]`)
message.channel.send(embed)};
if(command == 'removewarn' || command == 'rm') {
if(!message.member.hasPermission('MANAGE_ROLES')) return;
if(!warning[message.guild.id]) warning[message.guild.id] = {warns:[]};
let args = message.content.split(" ")[1];if(!args) return message.channel.send(
`**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`);
let user = message.mentions.members.first();
if(user) {
let C = 0;let a = warning[message.guild.id].warns
a.forEach(w=>{
if(w.user !== user.id) return
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
C++;
})
if(C === 0) return message.channel.send(`**:mag: I can't find the warning that you're looking for.**`)
return message.channel.send('**✅ '+C+' warnings has been removed.**');
};
if(args == 'all') {
let c = 0;let W = warning[message.guild.id].warns;  
W.forEach(w =>{if(w.id !== undefined) c++;})
warning[message.guild.id] = {warns:[]};
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
fs.writeFile("./warning.json", JSON.stringify(warning),(err)=>{if(err)console.error(err)})
return message.channel.send('**✅ '+c+' warnings has been removed.**')
}if(isNaN(args)) return message.channel.send(
    `**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`); 
let W = warning[message.guild.id].warns;
let find = false;
W.forEach(w =>{
if(w.id == args) {
delete w.user;delete w.reason;delete w.id;delete w.by;delete w.time;
find = true;return message.channel.send('**✅ 1 warnings has been removed.**')
}});if(find == false) return message.channel.send(`**:mag: I can't find the warning that you're looking for.**`)}});



client.on('message', message => {
    if(message.content.includes('متخلف')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('عرص')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('معرص')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('خول')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('متناك')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('منيوك')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('احبة')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('احا')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('خخخخخ')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('شرموط')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('شرموطة')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('شرموطه')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});

client.on('message', message => {
    if(message.content.includes('كسمك')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});



client.on('message', message => {
    if(message.content.includes('زانية')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تم حظرك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر حيث يجب عليك احترام نفسك والاخرين  **` , `**ملاحظة  : إن كآن هذآ الحظر عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة ** `)
        .addField(`---------------------------`,`Veterans Squad Staff. `)                             
        .setColor('RED')
        .setFooter('©️ 2020 Veterans Squad')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL)
        
        message.channel.send(embedP);
    }
});



client.on('message', msg=>{
  var channel =  msg.channel.id === "اى دي الروم"
        if (!channel) return false;
  
  let btrolie = msg.content.split(" ").slice('').join(" ")
  if(msg.author.bot)return;
  if(msg.content.startsWith(''))
 {
   msg.delete()
  var embed = new Discord.RichEmbed()
  .setAuthor(msg.author.username)
  .setThumbnail(msg.author.avatarURL)
  .setColor('#030101')//color
  .setDescription(`${btrolie}`)
  msg.channel.sendEmbed(embed);
 }
});

/*client.on('ready', () => {
    setInterval(() => {
        let guild = client.guilds.get('604887047492337684');
        /* At the first filter all guild channels to type = voice, then map their members count and get summ with reduce
        let membersInVoice = guild.channels.filter(channel => channel.type === 'voice').map(c => c.members.size).reduce((a, b) => a + b, 0)
        let VoiceCountChannel = guild.channels.get("775802253138329630");
        VoiceCountChannel.setName(`Voice Online ⇏ 「${membersInVoice}」`);
    }, 1000);

});
*/

client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "removerole") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**ليس لديك صلاحيات**").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('** Done :no_entry:  **').then(msg => {msg.delete(10000)});
    }
    });

const serverStats = {
    guildID: '604887047492337684',
    totalUsersID: '769710361045631006',
};

client.on('guildMemberAdd', member => {
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(` Veterans Members ⇏ ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    if (member.guild.id !== serverStats.guildID) return;
    client.channels.get(serverStats.totalUsersID).setName(` Veterans Members ⇏ ${member.guild.memberCount}`);
});

/**
client.on('message' , roodx=>

{
    if(roodx.author.bot)return;
    var roodxottawa = roodx.content.split(' ').slice('1').join(' ');
    var ottawaroodx = roodx.guild.channels.find('id','739029577954885663');
    if(roodx.content === '$feed')
    {
        var rodx = new Discord.RichEmbed()
        .setTitle('**feedback**')
        .addField(':star: :star: :star: :star: :star: |',` **prefix + feed5**`)
        .addField(':star: :star: :star: :star:  | ',`**prefix + feed4**`)
        .addField(':star: :star: :star: |',`** prefix + feed3**`)
        .addField(':star: :star:  | ',`**prefix + feed2**`)
        .addField(':star:   | ',`**prefix + feed1**`)
        roodx.channel.sendEmbed(rodx)
    
    }   
    if(roodx.content === '$feed5')
    {
        ottawaroodx.send(`**
        FEED BY:<@${roodx.member.user.id}>**
        :star: :star: :star: :star: :star:
        `)
    }
    if(roodx.content === '$feed4')
    {
        ottawaroodx.send(`**
        FEED BY:<@${roodx.member.user.id}>**
        :star: :star: :star: :star: 
        `)
    }
        if(roodx.content === '$feed3')
        {
            ottawaroodx.send(`**
            FEED BY:<@${roodx.member.user.id}>**
            :star: :star: :star:  
            `)
        }
            if(roodx.content === '$feed2')
            {
                ottawaroodx.send(`**
                FEED BY:<@${roodx.member.user.id}>**
                :star: :star: 
                `)
            }
                if(roodx.content === '$feed1')
                {
                    ottawaroodx.send(`**
                    FEED BY:<@${roodx.member.user.id}>**
                    :star: 
                    `)
                }
                }
            
        
    
)
**/



/*
client.on("message", async message => {
if (message.channel.name == "⌠💭⌡𝖢hat•𝖶ith•𝖡ot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.snowflakedev.xyz/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=DEVELOPER_NAME`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});
*/
client.on("message", laith => {
if(laith.content.startsWith(prefix + "slowmode")){
if(!laith.guild.member(laith.author).hasPermission("MANAGE_ROLES")) return laith.channel.send("**للاسف ليس لديك صلاحيات كافيه**")
let time = laith.content.split(" ").slice(1).join("")
if(isNaN(time)) return laith.channel.send("**ارقام فقط**")
if(!time) return laith.channel.send("**يجب عليك تحديد الوقت ارقام**")
laith.channel.setRateLimitPerUser(time);
laith.channel.send("**تم تعين > SlowMode الى هذي القناة > : "+time+"**")
}})

 client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("#9e1c36")
                    .setThumbnail(`https://cdn.discordapp.com/icons/604887047492337684/a_66789e05174b4484e4d7e26d9239f4b9.gif`)
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`Veterans Squad`)
                message.channel.get("756369128394326076").send(yumz)
            }
});




client.on('message',  (message) => {
        if(message.content.startsWith('vs/boom')) {
          message.delete(1000); 
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let bombs = [
    'https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif',
    'https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif',
	'https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif',
    'https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif',
	'https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif',
	'https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif',
    'https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif',
	'https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif',
	'https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif',
    'https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif',
	'https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif',
	'https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif',
    'https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif',
	'https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif',
	'https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif',
    'https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif',
	'https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif',
	'https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif',
    'https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif',
	'https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif',
	'https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif',
    'https://media.giphy.com/media/XathaB5ILqSME/giphy.gif',
	'https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif',
	'https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif',
    'https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif',
	'https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif',
	'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
    'https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif',
    'https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author} لقد تم تطير الجبهه بنجاح  جبهتك طارت ${user}!`,
      image: {
        url: bombs[Math.floor(Math.random() * bombs.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

/*
client.on("message", async message => {
  const request = require("request");

  let args = message.content.split(/[ ]+/);
  let word = args.slice(1).join(" ");
  if (message.content.startsWith(prefix + "corona")) {
    try {
      if (!word)
        return message.reply(
          "Usage: **vs/corona <country>**\nEx: `vs/corona egypt`"
        );

      request(
        {
          json: true,
          url: "https://corona.lmao.ninja/v2/countries/" + word
        },
        (err, res, json) => {
          if (err) {
            message.reply("There was an error!");
          } else {
            let embed = new Discord.RichEmbed()
              .setTitle(`Corona In ${json.country}`)
              .setFooter('©️ 2020 Veterans Squad')
              .setDescription(
                `**Total Cases: **${json.cases}\n**Total Deaths: **${json.deaths}\n**Total Recoverd: **${json.recovered}\n**Today Cases: **${json.todayCases}\n**Today Deaths: **${json.todayDeaths}`
              )
              .setThumbnail(json.countryInfo.flag)
              .setColor("#e32a19");
            message.channel.send(embed);
          }
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});
*/
client.on("message", async message => {

  const request = require("request");
  const { to24Hours, to12Hours } = require("convert-string-time");
  const getTimeDiffAndTimeZone = require("city-country-timezone");

  let args = message.content.split(/[ ]+/);
  let word = args.slice(1).join(" ");
  if (message.content.startsWith(prefix + "time")) {
    try {
      const { timezone } = getTimeDiffAndTimeZone(word);
      if (!timezone)
        return message.reply(
          "I can't find this Location, Try again with Country name or Capital of a country"
        );
      request(
        {
          json: true,
          url:
            "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=" +
            timezone
        },
        (err, res, json) => {
          if (err) {
            message.reply("There was an error!");
          } else {
            var TL = to12Hours(`${json.hours}:${json.minutes}`);
            let embed = new Discord.RichEmbed()
              .setTitle(`Time In ${json.timezone}`)
              .setDescription(
                `**Year: **${json.year}\n**Month: **${json.monthName} | ${json.month}\n**Day: **${json.day}\n**Day of a week: **${json.dayofweek} | ${json.dayofweekName}\n**Time: **Hours: ${json.hours} | Minutes: ${json.minutes} | Seconds: ${json.seconds}\n**Time By 12h: **${TL}`
              )
              .setThumbnail(
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/clock-face-three-oclock_1f552.png"
              )
              .setColor("#e8ed5f");
            message.channel.send(embed);
          }
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});

/*

(err, res, json) => {
          if (err) {
            message.reply("There was an error!");
          }
          catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }

البكجات:-
1- request
2- convert-string-time
3- city-country-timezone
*/

client.on("message", async message => {
  const request = require("request");
  let args = message.content.split(/[ ]+/);
  let word = args.slice(1).join(" ");

  if (message.content.startsWith(prefix + "gif")) {
    try {
      if (!word) return message.reply("You need to give something to search!");

      request(
        {
          url:
            "https://api.tenor.com/v1/search?q=" +
            word +
            "&key=5THPJ661F87H&limit=1",
          json: true
        },
        async (req, res, json) => {
          let embed = new Discord.RichEmbed()
            .setFooter("Request By: " + message.author.username)
            .setImage(json.results[0].media[0].gif.url)
            .setColor("RANDOM");

          message.channel.send(embed);
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});

client.on("message", async message => {
 const getSlug = require("speakingurl").createSlug(options);
  const request = require("request");
  var options = {
    maintainCase: true,
    separator: "%20"
  };


  let args = message.content.split(/[ ]+/);
  let word = args.slice(1).join(" ");

  if (message.content.startsWith(prefix + "lyrics")) {
    try {
      if (!word)
        return message.reply("You need to give a song name to search!");

      let slug = await getSlug(word);

      request(
        {
          json: true,
          url: "https://some-random-api.ml/lyrics/?title=" + slug
        },
        (err, res, json) => {
          if (!json.lyrics)
            return message.reply(
              "I couldn't find anything for your search term!"
            );

          if (json.lyrics.length > 2048)
            return message.reply(
              "Discord didn't let me send that big of a message!"
            );

          let embed = new Discord.RichEmbed()
            .setTitle(json.title)
            .setDescription(json.lyrics)
            .setAuthor(json.author);
          message.channel.send(embed);
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});

client.on("message", async message => {
  const request = require("request");

  if (message.content.startsWith(prefix + "meme")) {
    try {
      request(
        { json: true, url: "https://meme-api.herokuapp.com/gimme/dankmemes" },
        (err, res, json) => {
          if (err) {
            message.reply("There was an error!");
          } else {
            message.channel.send(new Discord.Attachment(json.url));
          }
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});

//البكجات:-
//1- speakingurl
//2- iso-639-1
//3- google-translate-open-api


const translate = require('@k3rn31p4nic/google-translate-api');
client.on('message', async message => {
if(message.author.bot) return;
var args = message.content.split(" ")
if(message.content.startsWith(prefix + 'translate')) {
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send('I do not have the right permission: Embed Links')
            try {
                if (args.length < 2) {
                    return message.reply("Command Usage: `translate <Language> <Text>`")
                }
                if (!args[1]) return message.channel.send('You need to provide a language | Usage: !translate {language} {text}')
                if (!args.slice(2).join(" ")) return message.channel.send('You need to provide a text to translate | Usage: !translate {language} {text}')

                const result = await translate(args.slice(2).join(' '), { to: args[1] });

                const embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                .setTitle(`Translator`)
                    .setDescription(result.text)
                   .setFooter("Powered by: Google Translate | Request By: " + message.author.tag);
                message.channel.send(embed);
            } catch (err) {
                return message.reply(`Oh no, an error occurred: \`${err.message}\`.`)
            }
}
})


/*
client.on("message", async message => {
try {
const translate = require("google-translate-open-api").default;
const ISO = require("iso-639-1");
const slug = require("speakingurl");
  if (message.content.startsWith(prefix + "translate")) {
    
let args = message.content.split(/[ ]+/);
let lang = args[1];
let text = args.slice(2).join(" ");
var slugtr = slug(lang);
var language = ISO.getName(slugtr);
    if (!lang)return message.reply("Usage: `vs/translate <language code> [word]`\nEx: `vs/translate ar hello world`");
    if (!text)return message.reply("Please Write Your word, and try again");
    if (!language) return message.reply("Vaild Language Code");

let loading = await message.channel.send("Translating Your message...").catch(err => message.channel.send(err));
let result = await translate([text], {
      tld: "com",
      to: slugtr,
      format: "text",
      browers: true
    });
let data = result.data[0];

    if (!data)return message.reply("i can't Translate Now, Please try again later");

let embed = new Discord.RichEmbed()
        .setTitle(`Translator`)
        .setDescription(`language: **${language}**\nText: **${data}**`)
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/1200px-Google_Translate_logo.svg.png")
        .setFooter("Powered by: Google Translate | Request By: " + message.author.tag)
        .setColor("#66ccff");
loading.edit(embed);

}} catch (err) {
    message.channel.send(" " + err).catch();}
});
*/
client.on('message', message => { 
    if (message.content.startsWith(`vs/botinfo`)) { 

       const mrcodes = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(`https://media.discordapp.net/attachments/751884702712987808/768942060174311444/eGpfXW1eDJOGz9dXnoqpf7Bve4jlNyt7BjE2AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGf8B2Hm2KghLViEA.png`)
.setColor('RANDOM')
.setTitle(`Info about ${client.user.username}.`)
.addField('**My Ping**' , `${Date.now() - message.createdTimestamp}` + 'MS', true)
.addField('**RAM Usage**', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
.addField('**My Name**' , `[ ${client.user.tag} ]` , true)
.addField('**My ID**' , `[ ${client.user.id} ]` , true)
.addField('**DiscordJS**' , `[ ${Discord.version} ]` , true)
.addField('**NodeJS**' , `[ ${process.version} ]` , true)
.addField('**Arch**' , `[ ${process.arch} ]` , true)
.addField('**Platform**' , `[ ${process.platform} ]` , true)
.addField('**My Prefix**' , `[ ${prefix} ]` , true)
.addField('**My Language**' , `[ Java Script ]` , true)
.setFooter('By | ! ᏚᏁᎥᏢᎬᎡ Ᏸ ᎡᎬᎯ ᎿᎻ™︻デ═一☠')

message.channel.send(mrcodes)
} 
});

var PastebinAPI = require('pastebin-js'),
    pastebin = new PastebinAPI('ajpFWAhE-VEJjoV2G-fVG0IO6vtVpHkZ');
client.on("message", async message => {
if(message.content.startsWith(prefix + 'ps')){
    let args = message.content.split(" ");
          var res = message.content.split(' ').slice(2).join(' ');
      pastebin.createPaste(res, args[1])
    .then(function (data) {
      // paste succesfully created, data contains the id
      console.log(data);
            message.channel.send(data).then(c=> c.react("✔"));
        message.delete();
    })
    .fail(function (err) {
      // Something went wrong
      console.log(err);
    })

    }
})

client.on("message", async message => {
if(message.channel.type === "dm" || message.author.type === "bot") return

    let args = message.content.split(" ")
          let arge = message.content.split(" ").slice(2).join(" ");
    let command = args[0]
  if(command === `${prefix}fake`){
     if (!message.member.hasPermission("MANAGE_ROLES"))  return
      let kişi = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('please mention some one')
    let yazi = args[1]
    if (!yazi) return message.reply('please mention some one')
        
    message.delete()
    message.channel.createWebhook(kişi.username, kişi.avatarURL)
    .then(webhook => webhook.edit(kişi.username, kişi.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(arge)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
  }
  })

client.on("message" , abdullahSH => {
let prefix = "vs/";
let rc = "#" + ((Math.random() * 0xffffff) << 0).toString(16)
  let args = abdullahSH.content.split(" ")
          let arge = abdullahSH.content.split(" ").slice(2).join(" ");
if(abdullahSH.content.startsWith(prefix + "profile")) {
let mention = abdullahSH.mentions.users.first()|| abdullahSH.author || abdullahSH.guild.members.get(args)
let abdullahem = new Discord.RichEmbed()
.setColor(rc)
.setDescription(`** Error🚫 , Please Type Command True Ex: \`${prefix}profile [Mention/ID]\`**`);
if(!mention) return abdullahSH.channel.send(abdullahem);
let abdullahem2 = new Discord.RichEmbed()
.setImage(`https://api.probot.io/profile/${mention.id}`)
.setFooter(mention.username,mention.avatarURL)
.setColor("#3d062f");
abdullahSH.channel.send(abdullahem2);
}
});

client.on("message", async message => {
  const request = require("request");
  const { Attachment } = require("discord.js");
  if (message.content.startsWith(prefix + "cats")) {
    try {
      request(
        { json: true, url: "http://aws.random.cat/meow"},
        (err, res, json) => {
          if (err) {
            message.reply("There was an error!");
          } else {
            message.channel.send(new Attachment(json.file));
          }
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});
const figlet = require('figlet');
client.on('message', message => {
if (message.content.startsWith(prefix + 'draw')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })

}
});

const google = require('google-it'); 
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});

client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // الامر : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **خاصية البحث عن الاعضاء**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**? عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});

const zalgo = require('zalgolize');   

 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "decor") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')

   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
 if (message.content.startsWith(prefix + 'setbotname')) {
   if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  client.user.setUsername(argresult).then
      message.channel.send(`جاري تغير الاسم ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setbotavatar')) {
  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  client.user.setAvatar(argresult);
    message.channel.send(`جاري تغير الصوره :**${argresult}** `);
}
});


client.on('message', message => {
if(message.content.startsWith("vs/فواكه")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});


client.on('message', fkk => {
    if (fkk.content == "vs/من هو") {
        var x = ["المتاح للجميع لا يتاح لي",
"من هو فيليب بوديكين",
"ما هو الكوكب الذي يقارب الأرض في الحجم والكتلة؟",
"من هو صاحب النظرية النسبية؟",
"ما هو برغوث البحر؟",
"من هي أول أم في العالم؟",
"من هو أول من تنشق عنه الأرض؟",
"من هو من أول من بايع أبو بكر الصديق بالخلافة؟",
"من التي أرسل لها الله السلام مع جبريل؟",
"من هو أول خليفة أموي؟",
"من هي اول امرأة قطعت يدها في السرقة؟",
"من هو الصحابي الذي رمى طعامه حتى لا يؤخره عن الجنة؟",
"من هو خامس الخلفاء الراشدين؟",
"ما هي الأرض التي لم تشرق عنها الشمس سوى مرة واحدة",
"من هو أول قاض في الإسلام؟",
"من هي أول شاعرة عربية عاشت في الجاهلية؟",
"من هو الموسيقار البولندي الذي لقب بشاعر البيانو؟",
"ما هي أول صلاة اتجه فيها المسلمون إلى الكعبة؟",
"من أول من أصيب بمرض الجدري؟",
"من مخترع البطارية الكهربائية؟",
"من هو صاحب كتاب ظلال في القرآن؟",
];
        var x2 = ['',
		"مخترع لعبة الحوت الأزرق",
        "الزهرة",
		"الدين الكاشي",
		"نوع كبير من الروبيان",
		"حواء",
		"محمد",
		"عمر بن الخطاب ",
		"السيدة خديجة",
		"معاوية بن أبي سفيان",
		"فاطمة",
		"عمير بن الحمام",
		"عمر بن عبد العزيز",
		"أرض البحر الأحمر",
		"عمر بن الخطاب",
		"جليلة",
		"شوبان",
		"العصر",
		"أيوب عليه السلام",
		"فولتا",
		"قطب",

		
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`╔══════════【۩ *** من هو *** ۩】══════════╗
***${x[x3]}***
=====================================
**__لديك 15 ثانية للاجابة __**
╚══════════════════════════════╝`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} ** اجابه صحيح :white_check_mark: **`);
        })
        })
    }
})// تم اصنع من اقبل : @ᴱˣ » ♥ 土耳其 ♥#8849
	

	client.on('message', message => {
    if (message.content == "vs/امثال") {
        var x = ["أذا ذل رويال فهو ...",
"الإتحاد ...",
"الناس سواسية كأسنان ...",
"ما أشبه الليله",
"البعد ...",
"الماء أهون موجود وأعز ...",
"الهزيمة تحل ...",
"العقل ...",
"البطنة تزيل ...",
"اللبيب بالإشارة ...",
"اخطب لابنتك ولا تخطب ...",
"أعز من الولد ولد ...",
"القرد في عين أمه ...",
"الكتاب يقرأ من ...",
"آخر الحياة ...",
"أكرم نفسك عن كل",
"العز في نواصي",
];
        var x2 = ['ذليل',
        "قوة",
        "المشط",
        "بالبارحة",
        "جفاء",
        "مفقود",
        "العزيمة",
        "زينة",
        "الفطنة",
        "يفهم",
        "لابنك",
        "الولد",
        "غزال",
        "عنوانه",
        "الموت",
        "دنيء",
        "الخيل",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اكمل المثل التآلي :  __**${x[x3]}**__ ؟
    لديك 30 ثآنية للإجآبة `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح بالوقت المناسب  `);
        })
        })
    }
})

const adkar = [

    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',

    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',

    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',

    '**‏اذكار  |  **أستغفر الله .',     

    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',

    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',

    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',

    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',

    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',

    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',

    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',

    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',

    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',

    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',

    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',

    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',

    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',

    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',

    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',

    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',

    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',

    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',

    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',

    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',

    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',

    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',

    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',

    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',

    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',

    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',

    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',

  ]

  client.on('message', message => {


  if (message.author.bot) return;

  if (message.content.startsWith(prefix + 'اذكار')) {

    if(!message.channel.guild) return;

  var client= new Discord.RichEmbed()

  .setTitle("Veterans Squad")

  .setThumbnail(message.author.avatarURL)

  .setColor('RANDOM')

  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)

                 .setTimestamp()

  message.channel.sendEmbed(client);

  message.react("??")

  }

  });



client.on('message',message =>   {
  if(message.channel.type == 'dm') return;
  if(message.content.startsWith(prefix + "talk")) {
     if (!message.member.hasPermission("MANAGE_ROLES"))  return
      var attentions = {};
      attentions[message.guild.id] = { };
      message.channel.send( message.author + ', **Wait , PuP System**').then( (m) =>{
      m.edit( message.author + ', **أرسل أيدي الروم**' )
      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 600000 } ).then ( (m1) => {
      m1 = m1.first();
      attentions[message.guild.id]['id'] = m1.content;
      m1.delete();
m1 = message.guild.channels.get(`${attentions[message.guild.id]['id']}`)
if(!m1) return message.reply(`**الأيدي هذا غير صحيح \`${attentions[message.guild.id]['id']}\`**`);
 
      m.edit(message.author+"**أرسل الرساله المراد توجيهها للروم**")
      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 600000 }).then ( (m2) => {
      m2 = m2.first();
      attentions[message.guild.id]['msg'] = m2.content;
      m2.delete();
      m.delete();
      message.channel.send(`**هل تريد إرسال في روم <#${attentions[message.guild.id]['id']}>
${attentions[message.guild.id]['msg']}**`).then(msge => {
      msge.react('✅').then( r => {
      msge.react('❌')
      const oneFilterBB = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      const threeFilterBB = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
      const oneBY = msge.createReactionCollector(oneFilterBB, {maxMatches : 1,time : 400000,});
      const threeBY = msge.createReactionCollector(threeFilterBB, {maxMatches : 1,time : 400000,});
      oneBY.on('collect', r => {
      msge.delete();
      message.guild.channels.get(`${attentions[message.guild.id]['id']}`).send(`${attentions[message.guild.id]['msg']}`)
      }).catch(RebeL =>{ console.log('`Error`: ' + RebeL)});
          threeBY.on('collect', r => {
      msge.delete();
      })
      })
  })
      });
      });
      });
     
    }
    });


client.on('message', msg =>{
if(msg.content === prefix +"uptime"){
       if (!msg.member.hasPermission("MANAGE_ROLES"))  return
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      const up = new Discord.RichEmbed()
    .setColor("#bb0000")  
      .setThumbnail(client.user.avatarURL)
      .setTitle("**__Uptime :__**")
      .setAuthor(client.user.username,client.user.avatarURL)
      .setFooter('©️ 2020 Veterans Squad')
      .addField('**-**', `**${seconds}**` + ' **seconds**')
      .addField('**-**', `**${minutes}**` + ' **minutes**')
      .addField('**-**', `**${hours}**` + ' **hours**')
      .addField('**-**', `**${days}**` + ' **days**')
      msg.channel.send(up)   

}
});



 
 

 client.on("voiceStateUpdate", function(oldMember, newMember) {
    var ch, newUserChannel, oldUserChannel, voicetext;
    newUserChannel = newMember.voiceChannel;
    oldUserChannel = oldMember.voiceChannel;
    voicetext = "Voice Online ⇏ ";
    ch = client.channels.get("775800740001349642");
    if (newUserChannel && !oldUserChannel) {
      ch.setName(`${voicetext}${newMember.guild.members.filter(function(m) {
        return m.voiceChannel;
      }).size}`);
    }
    if (!newUserChannel && oldUserChannel) {
      return ch.setName(`${voicetext}${newMember.guild.members.filter(function(m) {
        return m.voiceChannel;
      }).size}`);
    }
  });

client.on('message', message =>{
var command = message.content.split(" ")[0];
  if (command === "vs/memberroles"){
        if (!message.member.hasPermission("MANAGE_ROLES"))  return

        let Member =  message.mentions.members.first() || message.member
        var data = []
        Member.roles.forEach(async r => {
            await data.push(`<@&${r.id}>`)
        })
        message.channel.send(
            {
                embed: {
                    title: `Here 's the roles`,
                    description: data.join(' ')
                }
            }
        )
    }
});
client.on('message', message =>{
  var command = message.content.split(" ")[0];
   if (message.channel.name == "「✅」𝖵erification") {
  if (command === "vs/verify") {
      

        function captchaGenerator() {
            var length = 7,
                charset = "abcdefghijklmnopqrstuvwxyz0123456789",
                retVal = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                retVal += charset.charAt(Math.floor(Math.random() * n));
            }
            return retVal;
        }

        let captcha = captchaGenerator()
        console.log(captcha)

        message.channel.send('Your captcha: 「' + captcha + '」 please type your captcha to verify and use the same command to try again if failed. ').then(msg => {

            const filter = m => message.author.id === m.author.id;
            message.channel.awaitMessages(filter, {
                    time: 5 * 60000,
                    max: 1,
                    errors: ['time']
                })
                .then(async messages => {
                    if (messages.first().content === captcha) {
                        let verificationEmbed = new Discord.RichEmbed()
                            .setAuthor(message.author.username, message.author.avatarURL)
                            .setColor("#bb0000")  
                            .setDescription(`<a:GiveawayTime:753044729696092290> **You have been verified to: \`${message.guild.name}\`!**`)
                            .setFooter(message.client.user.username, message.client.user.avatarURL)
                        message.channel.send(`${message.author} has been verified!`)
        
                      message.member.removeRole(message.guild.roles.find(c => c.name == "Guest"));
          message.member.addRole(message.guild.roles.find(c => c.name == "「🔰」Recruited"));
          message.member.addRole(message.guild.roles.find(c => c.name == "「VS」New Comers"));
                      
                    }
              else{
            return message.channel.send(`You have sent a wrong code try vs/verify again.`)
              }
                      })
        })
  }
    }
});





client.on('message', message => {
			var mintionchannel = message.content.split(' ').slice(1);
      if(message.content.startsWith(prefix + 'channel')) {
       
         if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) {
          message.channel.send("You Don't Have A Permissions `MANAGE_ROLES` ");
        } else {
			     var room1 = message.guild.channels.find('name', `${mintionchannel}`);
          if(!room1) {
           message.channel.send( "**Usage :** ```" + "  " + `${prefix}` + 'channel'+ " " + 'ChannelName```' );
            } else {
             
             if (room1.type = "text"){
              var filtertitle = "Channel Last Message : ";
              var filtermessage =  room1.lastMessage; 
             }if (room1.type = "voice"){
              var filtertitle = "Channel Timestamp";
              var filtermessage = room1.createdTimestamp;
             }
              let embed = new Discord.RichEmbed()
              .addField(' Chanel Name : ', room1.name, true)
              .addField(' Channel ID : ',room1.id, true)
              .addField(' Channel CreateAt  : ', room1.createdAt,true)
              .addField(`${filtertitle}`, filtermessage , true)
              .addField(' Channel Type : ', room1.type, true)
               message.channel.sendEmbed(embed);
		    	}
            
          }
     }
    });
/*
client.on('message', message =>{
  if(message.content.startsWith(prefix + 'stats')){
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **لا تملك صلاحية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return message.reply('❌ **البوت لا يمتلك صلاحية**');
  message.guild.createChannel(`👑معلومات السيرفر👌:` , 'category')
  
    message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  
  setInterval(() => {
      time.setName(`${message.guild.memberCount} <== عدد الكل `);
 },1000);
    });

 message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`${message.guild.members.filter(m =>!m.user.bot).size} <==  عدد الاعضاء `);
},1500);
});

message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`Bots ⇏ ${message.guild.members.filter(m=>m.user.bot).size} `);
},2000);
});
}
});
*/
/*
const serverbots = {
    guildIDs: '604887047492337684',
    totalUsersIDs: '776067702544531486',
};

client.on('guildMemberAdd', message => {
    if (message.guild.id !== serverbots.guildIDs) return;
    client.channels.get(serverbots.totalUsersIDs).setName(` Veterans Bots ⇏ ${message.guild.members.filter(m=>m.user.bot).size}`);
});

client.on('guildMemberRemove', message => {
    if (message.guild.id !== serverbots.guildIDs) return;
    client.channels.get(serverbots.totalUsersIDs).setName(` Veterans Bots ⇏ ${message.guild.members.filter(m=>m.user.bot).size}`);
});
*/

client.on("message", async message => {
    if(message.content.startsWith(prefix + "listofbans")) {
        if(!message.guild) return;
                if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**Sorry But You Dont Have Permission** `BAN_MEMBERS`' );
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**${b} | ${bb}**`);
        });
    }
});


const wiki = require("wikipediajs");
const query = require('querystring');
client.on('message', async message => {
   if (message.author.bot || message.channel.type === 'dm') return;
   if (!message.content.startsWith(prefix)) return;
   let cmd = message.content.split(" ")[0].substring(prefix.length);
   if (cmd === 'wiki') {
     
     
         let args = message.content.split(" ").slice(1).join(" ");
       if (!args) return message.channel.send('**What Do You Want To Search?**')
       let i = new Discord.RichEmbed();
       i.setColor("#36393e");
       let o = await message.channel.send(`**• Getting data, Please wait...**`);
       wiki.search(args).then(async (data) => {
           let pages = data.query.pages;
           let values = Object.values(pages)[0];
           i.setThumbnail("https://english.cdn.zeenews.com/sites/default/files/2015/08/16/391299-wikipedia.jpg");
           i.setFooter("Wikipedia", "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/58af0228b8aa8.jpg");
           i.addField('• General', `→ Length: ${values.length}n→ Link: [${values.title}](${values.fullurl})→ Language: ${values.pagelanguage}`);
           await message.channel.send(i);
           await o.delete().catch(e => {});
       });
   }
});




client.on('message', message => {
    if (message.content == "vs/اسئله دينيه") {
        var x = ["اكبر سوره في قران",
"اصغر سوره في قران",
"اول سوره نزلت على محمد (ص)؟",
"ثاني اطول سوره في القران من ناحيت المساحه",
"ثاني اطول سوره في القران من ناحيت ايات",
"هل ذكر اسم نبي محمد في انجيل او تورات ؟؟",
"من الذي هاجر مع نبي محمد الى  يثرب",
"من نام في فراش النبي محمد",
"متى نزل القران على محمد",
"نحن كم سنه هجريه",
"كم عدد ايام عيد الفطر",
"ما هي الصلاة التي يركع فيها المصلي أربع مرات ويسجد أربع مرات؟",
"ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟",
"ماهي السورة التي يطلق عليها عروس القرآن ؟",
"من أول من فتق لسانه بالعربية ؟",
"من أول من استلم الحجر الأسود من الأئمة ؟",

];
        var x2 = ['سورة البقرة',
        "سورة الكوثر",
        "صورة القلم",
        "سورة النساء",
"سورة الشعراء",
"نعم ذكر",
"ابو بكر الصديق",
"علي بن ابي طالب",
"في عمر الربعين سنة",
"نحن 1440",
"ثلاث ايام",
"صلاة الكسوف",
"سورة طه",
"سورة الرحمن",
"النبي اسماعيل",
"ابن الزبير",

        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اسئله دينيه :__**${x[x3]}**__
لديك 30 ثانيه لاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب في الوقت المناسب `);
        })
        })
    }
});

client.on('message', fkk => {
    if (fkk.content == "vs/من سيربح المليون") {
        var x = ["المتاح للجميع لا يتاح لي",
"كــــائن حــى يـستطيع ان يــحمل وزنآ يـفوق وزنـه بـ 50 ضـعفا ؟ ما هو",
"حـــيوان لــسانه اكــبر مـــن جــسمه !مــاهـو؟",
"دولــة يتكون العام فيـها مــن 13 شهر ! مــاهــى؟",
"كــأئـن حــي لــه 5 عــيون ! مــاهـو؟",
"دولـة تـعد الـسمنة فيها مخالفة للقونون ! مـاهـى؟",
"حـــيوان لأبــــشرب الماء ابــدا ! مــاهــو ؟",
"حــيوان مدة الــحمل عــنده 450 يــومــآ! مــاهــو؟",
"دولــة لأتــعاقــب الــسجـين عــند هـروبه من الـسجن ! مــاهــى ؟",
"عــضو فـي جـسم ألأنسان لا يـكبر حجمه منـذ الـولدة ! مــاهــو؟",
"ما أكــبر حــيوان في الـبر و الــبحر ؟",
"مــا أقـدم الـحيوانــات اســتئناسا بـالآْنـسان ؟",
"مــا الــحيوان الــذى له أكبر عـدد من الأســنان؟",
"مــا الـحيوان الأبــكم الــذى ل يــسمع لــه صــوت ؟",
"كم دولة في قارة أمريكا الشمالية؟",
"ما المصطلح الطبي الذي يعني فقدان الذاكرة؟",
"ما الكوكب الذي يقارب الأرض في الحجم والكتلة؟",
"ما أكبر جزيرة بين الجزر التي تشكل اليابان؟",
"ما هو العضو الذي يستخدمه الثعبان في حاسة الشم؟",
"ما هي جنسية الرسام العالمي بيكاسو؟",
"ما هي العاصمة العربية التي يطلق عليها الفيحاء؟",
"ما اسم أبي سيدنا إبراهيم عليه السلام؟",
"من هو عالم الفلك العربي الذي قدر نسبة محيط الدائرة إلى قطرها بـ 3.14؟",
"ما اسم المدينة التي تلقب بـعروس الصحراء",
"ماذا يسمى الفرنسيون القنال الإنجليزي؟",
"من هم أول من استخدم التفريخ الاصطناعي للدواجن؟",
"ما النسبة المئوية للماء في حبة الخيار الواحدة؟",
];
        var x2 = ['',
		"النمل",
        "الحرباء",
		"اثيوبيا",
		"النحل",
		"اليابان",
		"الكنغر البرى",
		"الزرافة",
		"المانيا",
		"العين",
		"الحروف",
		"التمساح",
		"الزرافة",
		"2",
		"أميبيا",
		"الزهرة",
		"هونشو",
		"لسانه",
		"أسباني",
		"دمشق",
		"آزر",
		"غياث الدين الكاشي",
		"تدمر",
		"المانش",
		"المصريون القدماء",
		"96",
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`╔════════【۩ :money_mouth: **__ مــن ســيربـح الــمليون  __** :money_mouth: ۩】════════╗
***${x[x3]}***
=====================================
**__لديك 15 ثانية للاجابة __**
╚══════════════════════════════════════╝`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي **${x2[x3]}**`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} ** اجايه صحيح :white_check_mark: **`);
        })
        })
    }
})// تم اصنع من اقبل : @ᴱˣ » ♥ 土耳其 ♥#8849

client.on('message', fkk => {
    if (fkk.content == "vs/برامج") {
        var x = ["المتاح للجميع لا يتاح لي",
"https://b.top4top.net/p_1164oe5tp1.jpg",
"https://c.top4top.net/p_1164jqp402.png",
"https://d.top4top.net/p_1164kjqt13.jpg",
"https://e.top4top.net/p_1164qljfs4.png",
"https://f.top4top.net/p_1164y0w3x5.jpg",
"https://e.top4top.net/p_1164r89w31.png",
"https://a.top4top.net/p_1164op08s3.jpg",
"https://b.top4top.net/p_11641d5sl4.png",
"https://c.top4top.net/p_1164u1nmr5.jpg",
"https://b.top4top.net/p_1164eph0n1.jpg",
"https://c.top4top.net/p_1164uj2802.jpg",
"https://d.top4top.net/p_116466p0l3.jpg",
"https://e.top4top.net/p_1164vosgi4.jpg",
"https://f.top4top.net/p_11649i6xv5.jpg",
"https://a.top4top.net/p_1164sozlg6.png",
];
        var x2 = ['',
		"فوتوشوب",
		"ديسكورد",
		"برو بوت",
		"فيس بوك",
		"ثعلب النار",
		"فايلزيلا",
		"باندي كام",
		"ميوزكلى",
		"يوتيوب",
		"كلاش واف كلانس",
		"واتس اب",
		"ماسنجر",
		"انستقرام",
		"جوجل",
		"تويتر",
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`╔════════【۩ **__برنامج__** ۩】════════╗

***${x[x3]}***

=====================================

**__لديك 15 ثانية للاجابة __**
╚═════════════════════════════╝`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} اجايه صحيح :white_check_mark: `);
        })
        })
    }
})

client.on('message', function(message) {
	let mohammad = client.channels.get("739029577954885663");
	let gamer = message.content.split(" ");  
	if(message.author.bot) return;
  if(message.content.startsWith("سنايبر")) return mohammad.send("`هناك ناس ذكرت اسمك هل تريد رؤية الرسالة ؟`").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
   let Rembed = new Discord.RichEmbed()
   .setThumbnail(message.author.avatarURL)
   .addField("**# - الرسالة:**",gamer,true)
   .addField("**# -  الشخص:**",message.author.tag,true)
   .addField("**# - الوقت:**",message.createdAt,true)   
   mohammad.send(Rembed)
   
})
reaction2.on("collect", r => {
    mohammad.send("**# - Canceled!**");
});
  });
});

/*
const Colors = ['#fdfbff','#e6e6ec','#fafafb','#1cb992','#161618','#ffffff','#ee4d2e','#a2798f','#8fa279','#798fa2','#79a28c','#00bab4','#b7c7c3','#1ed8c5',
'#ffe09d','#e62272','#bada55','#420dab','#708a8c','#0f4c81','#ffe09d','#4bd4f2','#116bee','#56d916','#dc2502','#19569b',
'#f3f118','#5f6f2e','#b4a8bf','#b2d8ff','#fffbf7','#ffcc5c','#217272','#a996a9','#ef3e61','#fff6df','#dd7cb1','#1197d5','#e2dcd4'];
client.on('message', msg => {
if (msg.content === 'randomcolor' || msg.content ==='RandomColor' || msg.content === 'random') {
   if(msg.author.bot || !msg.guild ) return;
   let rn = Colors[Math.floor(Math.random() * Colors.length)];//by AbdullahSH
    let em = new Discord.RichEmbed()
    .setTitle("Your RandomColor!")
    .setDescription("**" + rn + "**")
    .setColor(rn)
    .setFooter(client.user.username,client.user.displayAvatarURL)        
    msg.channel.send(em)
}
});
*/



client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === prefix + 'addrole2') {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **")
    let args = message.content.split(" ").slice(2).join(" ")
    let user = message.mentions.members.first();
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**')
    
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply('** لا يوجد لدي برمشن Manage Roles **')
     message.delete(1000); //Supposed to delete message
    
      message.guild.member(user).addRole(`${args}`)
     const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(`مبروك ${user} تم اعطائك رتبة <@&${args}>`)
     .setFooter(message.guild. name)
     .setTimestamp()
     .setThumbnail(user.avatarURL)
     message.channel.send(embed)
    }
  
    
  });


client.on("ready", async () => {
  const upchannel = client.channels.get('739029577954885663')
  const upembed = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setTitle("Bot Restart Notification")
  .setDescription("Restarted")
  .setFooter('©️ 2020 Veterans Squad')
  upchannel.send(upembed)
})

client.on("ready", async () => {
   var az = [
    '**سبحان الله العلي العظيم**',
    '**الحمد لله رب العالمين**',
    '**لا تنسى ذكر الله **',
    '**اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. **',
    '**قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. **',
    '**قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ **',
    '** أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْ**',
    '**اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ . **',
    '**رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.  **',
    '** اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك. **',
    '**حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.  **',
    '**بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. **',
    '**اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.  **',
    '**اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.  **',
    '**أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ  **',
    '**لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.  **',
    '** اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.**',
  ]
   setInterval(() => {
    var  azkar = az[Math.floor(Math.random() * az.length)];
  const upchannel = client.channels.get('648706429611409408')
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("[ اذكار ]")
      .setDescription(azkar)
  upchannel.send(embed)
     }, 18000000);
})
/*
client.on("message", message => { 
// الكود منشور لوجه الخير , لا نحلل استخدامه في السبام وما الى ذلك
// اللهم اني بلغت اللهم فشهد
  var az = [
    '**سبحان الله العلي العظيم**',
    '**الحمد لله رب العالمين**',
    '**لا تنسى ذكر الله **',
    '**اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. **',
    '**قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ. **',
    '**قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ **',
    '** أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْ**',
    '**اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ . **',
    '**رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.  **',
    '** اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك. **',
    '**حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.  **',
    '**بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. **',
    '**اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.  **',
    '**اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.  **',
    '**أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ  **',
    '**لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.  **',
    '** اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.**',
  ]
  // مصدر الأذكار موقع
  // https://www.islambook.com/azkar/1/
  // كتابة الكود : AboKhalil
let romname = "「💬」𝖢hat";
var command = message.content.split(" ")[0];
  let args = message.content.split(" ");
  command = args[0];
  if (command === `startazkar`) {
      if (!message.member.hasPermission("MANAGE_ROLES"))  return 
    message.channel.send(`azkar enabled`);      
    setInterval(() => {
    var  azkar = az[Math.floor(Math.random() * az.length)];
      let sendrom = message.guild.channels.find('name', `${romname}`)
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle("[ اذكار ]")
      .setDescription(azkar)
      sendrom.send(embed);
    }, 18000000);
   }
          
});// By AboKhalil

*/
client.on('message', message => { 
if(message.content === prefix + 'corona' || message.content === prefix + 'كورونا') {
	var pages = ['http://www.emro.who.int/images/stories/coronavirus/isolate_ar_lar.png?ua=10','http://www.emro.who.int/images/stories/coronavirus/overall_ar_lar.png?ua=1','http://www.emro.who.int/images/stories/coronavirus/foodsafetychoppingboard_ar_lar.png?ua=1','http://www.emro.who.int/images/stories/coronavirus/handwash_ar_lar.png?ua=1','http://www.emro.who.int/images/stories/coronavirus/coronavirus_drugs.png?ua=1']
	var page = 1;

	message.delete();

	var embed = new Discord.RichEmbed()
	.setColor('AQUA')
  .setTitle("كيف تحمي نفسك والآخرين من المرض : الرسوم التوضيحية")
  .setFooter("vs/corona [اسم البلد] | لمعرفة احصائيات كورونا ")
	.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png')
	.setImage(pages[page-1])

	message.channel.sendEmbed(embed).then(msg => {////shuruhatik

		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))///shuruhatik
		.then(() => msg.react('➡'))////shuruhatik
		.then(() => msg.react('⏭'))//shuruhatik

		var backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			var forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

			var sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			var sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;

			var cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;

		var backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });///shuruhatik
			var forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });///shuruhatik

		var sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			var sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });//shuruhatik

			var cancel = msg.createReactionCollector(cancelFilter, { time: 0 });///shuruhatik

			backwards.on('collect', r => {///shuruhatik
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);///shuruhatik
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;///shuruhatik
				page++;
				embed.setImage(pages[page-1]);//shuruhatik
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {///shuruhatik
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;///shuruhatik
				page = 5; //shuruhatik
				embed.setImage(pages[page-1]);
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);//shuruhatik
				embed.setImage('https://media1.tenor.com/images/3f8b9aec89d8fc5395f3ad3d82f0d697/tenor.gif?itemid=14560182');
				embed.setAuthor(`Menu will close after 7sec`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed).then(msg.delete(7500));////shuruhatik
				})
			})
		})
	}
	});


client.on('message', message => {
if  (message.content.toLowerCase().startsWith(prefix + "corona"))  {
  let country = message.content.toLowerCase().split(" ").slice(1).join(" ");
  corona(country, message);
};
});
function corona(country, message) {
const fetch = require("node-fetch");
	message.delete();
fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then(async data => {
  data = await data.json();
  let corona = new Discord.RichEmbed().setColor("RANDOM")
    .setThumbnail(data.countryInfo.flag)
    .setTitle(`${shuruhatik} : ${data.country}`)
    .addField("`اصابات`", [`**${data.cases}**`] , true)
    .addField("`اموات`", [`**${data.deaths}**`] , true)
    .addField("`معافي`", [`**${data.recovered}**`] , true)
    .addField("`حالات جديدة`", [`**${data.todayCases}**`] , true)
    .addField("`اموات جديدة`", [`**${data.todayDeaths}**`] , true)
    .addField("`معافي اليوم`", [`**${data.todayRecovered}**`] , true)
    .addField("`قارة`", [`**${data.continent}**`] , true)
    .setFooter(`Requested by :${message.author.username}`, message.author.avatarURL);
  message.channel.send(corona);
});
};



client.on('message', msg => { 

if (msg.content.startsWith(`<@!${client.user.id}>`)) { 

 msg.channel.send(`My Prefix ${prefix}`)

} 

}); 


const db = require('quick.db')//@ニロ#3892
client.on("message", niro =>{//@ニロ#3892
  if(niro.content.startsWith(prefix + "credits")){//@ニロ#3892
 let user = niro.mentions.users.first() || niro.author;//@ニロ#3892
    let bal = db.fetch(`money_${user.id}`)//@ニロ#3892
    if (bal === null) bal = 0;//@ニロ#3892
      return niro.channel.send(`:bank: | **${user.username} , your account balance is** \`\`$${bal}\`\`.`)//@ニロ#3892
}});//@ニロ#3892
const ms = require('parse-ms')//@ニロ#3892
client.on("message", async niro =>{//@ニロ#3892
if(niro.content.startsWith(prefix + "daily")){//@ニロ#3892
    let timeout = 86400000/2 //by Ashour
  let amount = Math.floor(Math.random() * 1000) + 1;//@ニロ#3892
    let daily = await db.fetch(`daily_${niro.author.id}`);//@ニロ#3892
    if (daily !== null && timeout - (Date.now() - daily) > 0) {//@ニロ#3892
        let time = ms(timeout - (Date.now() - daily));//@ニロ#3892
        niro.channel.send(`:rolling_eyes: **| ${niro.author.username}, your daily credits refreshes in ${time.hours}h ${time.minutes}m ${time.seconds}s .** `)//@ニロ#3892
    } else {
    niro.channel.send(`:moneybag: **${niro.author.username}, you got :dollar: ${amount} daily credits!**`)//@ニロ#3892
    db.add(`money_${niro.author.id}`, amount)//@ニロ#3892
    db.set(`daily_${niro.author.id}`, Date.now())//@ニロ#3892
    }}});//@ニロ#3892
client.on("message", async niro =>{//@ニロ#3892
  if(niro.content.startsWith(prefix + "transfer")){//@ニロ#3892
    let args = niro.content.split(" ").slice(2); //@ニロ#3892
    let user = niro.mentions.members.first() //@ニロ#3892
    let member = db.fetch(`money_${niro.author.id}`)//@ニロ#3892
    if (!user) {//@ニロ#3892
        return niro.channel.send(`:rolling_eyes: | ** ${niro.author.username}, I Cant Find a User**`)
    }//@ニロ#3892
    if (!args) {
        return niro.channel.send(`:rolling_eyes: | **${niro.author.username}, type the credit you need to transfer!**`)//@ニロ#3892
    }
    if (niro.content.includes('-')) { //@ニロ#3892
      return niro.channel.send(`:rolling_eyes: | **${niro.author.username}, Type a Amount \`Not Negative\`**`)//@ニロ#3892
    }
    if (member < args) {//@ニロ#3892
        return niro.channel.send(`:thinking: ** | ${niro.author.username}, Your balance is not enough for that!**`)//@ニロ#3892
    }
    if(isNaN(args)) 
return niro.channel.send(`:rolling_eyes: Numbers Only`)//@ニロ#3892
    niro.channel.send(`:moneybag: **| ${niro.author.username}, has transferred \`$${args}\` to ${user}**`)//@ニロ#3892
    user.send(`:atm:  |  Transfer Receipt \n\`\`\`You have received $${args} from user ${niro.author.username} (ID: ${user.id})\`\`\``)//@ニロ#3892
    db.add(`money_${user.id}`, args)//@ニロ#3892
    db.subtract(`money_${niro.author.id}`, args)//@ニロ#3892
}});//@ニロ#3892



client.on("message", message => {
 

  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "xo")) {
    let array_of_mentions = message.mentions.users.array();
    let symbols = [":o:", ":heavy_multiplication_x:"];
    var grid_message;

    if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
      let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      let random2 = Math.abs(random1 - 1);
      if (array_of_mentions.length == 1) {
        random1 = 0;
        random2 = 0;
      }
      var player1_id = message.author.id;
      let player2_id = array_of_mentions[random2].id;
      var turn_id = player1_id;
      var symbol = symbols[0];
      let initial_message = `اللعبة بين اللاعبين التاليين <@${player1_id}> and <@${player2_id}>!`;
      if (player1_id == player2_id) {
        initial_message += "\n_(لقد خسرت, العب مع نفسك :joy:)_";
      }
      message.channel
        .send(`Xo ${initial_message}`)
        .then(console.log("Successful tictactoe introduction"))
        .catch(console.error);
      message.channel
        .send(
          ":one::two::three:" +
            "\n" +
            ":four::five::six:" +
            "\n" +
            ":seven::eight::nine:"
        )
        .then(new_message => {
          grid_message = new_message;
        })
        .then(console.log("Successful tictactoe game initialization"))
        .catch(console.error);
      message.channel
        .send("Loading... Please wait for the :ok: reaction.")
        .then(async new_message => {
          await new_message.react("1⃣");
          await new_message.react("2⃣");
          await new_message.react("3⃣");
          await new_message.react("4⃣");
          await new_message.react("5⃣");
          await new_message.react("6⃣");
          await new_message.react("7⃣");
          await new_message.react("8⃣");
          await new_message.react("9⃣");
          await new_message.react("🆗");
          await new_message
            .edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
            .then(new_new_message => {
              require("./xo.js")(
                client,
                message,
                new_new_message,
                player1_id,
                player2_id,
                turn_id,
                symbol,
                symbols,
                grid_message
              );
            })
            .then(
              console.log("Successful tictactoe listeprefix initialization")
            )
            .catch(console.error);
        })
        .then(console.log("Successful tictactoe react initialization"))
        .catch(console.error);
    } else {
      message.channel
        .send(`جرب *xo @uesr`)
        .then(console.log("Successful error reply"))
        .catch(console.error);
    }
  }
});



client.on("message", message => {

  
  if (
    message.content == prefix + "translation" ||
    message.content == prefix + "ترجمه" ||
    message.content == prefix + "ترجمة" 
  ) {
    var x = ["Constantinople","Clever","apple","day","browser","cocked","Tomatoes","Connect","coconut"];
    var x2 = ["القسطنطينيه","ذكي","تفاح","يوم","متصفح","مطبوخ","طماطم","اتصال","ك"];
    var x3 = Math.floor(Math.random() * x.length);
      var emoji = new Discord.RichEmbed()
    .setTitle(`** لديك __10 ثواني__ لكتابة الترجمه**`)
    .addField (`${x[x3]}`)
    message.channel.sendEmbed(emoji).then(msg1 => {
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
          maxMatches: 1,
          time: 20000,
          errors: ["time"]
        });
        r.catch(() => {
          return message.channel
            .send(`:negative_squared_cross_mark:** لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
       الصحيحة هيا __${x2[x3]}__ **`);
        });

        r.then(collected => {
          message.channel.send(
            `${collected.first().author} ** لقد قمت بكتابة الايموجي في الوقت المناسب **`
          );
    
        });
      });
  }
});


client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'cclear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return      message.channel.send('**You Do not have permission** `MANAGE_ROLES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
 
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();
 
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {
 
        }
      }}).then(msg => {msg.delete(3000)});
 
})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var messages = message.content.split(" ").slice(1);
    let args = messages.slice(1);

    if (message.content.startsWith(prefix + "report" || message.content.startsWith(prefix + "Report"))){
        let reportschannel = message.guild.channels.find(channel => channel.name === "「」𝖱eports") //يمكنك تغيير اسم الشات
        if(!reportschannel) return message.channel.send('\`قم باضافة شات reports\`')
        var tag = message.mentions.users.first();
        if(!tag) return message.channel.send('\`منشن العضو\`')
        var reason = args.join(" ");
        if(!reason) return message.channel.send('\`قم بكتابة السبب\`');
        var embed = new Discord.RichEmbed()
        .setColor('RED')
        .setTitle(`NEW REPORT`)
        .setThumbnail(message.author.avatarURL)
        .addField('**REPORTER : **', `**MENTION :** <@${message.author.id}> 
        **ID :** \`${message.author.id}\``, true)
        .addField('**REPORTED : **', `**MENTION :** ${tag} 
        **ID :** \`${tag.id}\``, true)
        .addField('**REASON : **', `\`${reason}\``, true)
        reportschannel.send(embed)
        message.channel.send(`\`لقد تم الابلاغ على الشخص بنجاح\``)
    }
});


client.on('message', Тигр=>
{
    if(Тигр.content.startsWith(prefix + 'botinv'))
    {
        var Тигрembed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setDescription(`
        **THANK YOU FOR CHOOSING OUR BOT 🌹**

        **BOT LINK :**
        https://discord.com/api/oauth2/authorize?client_id=767820204918571009&permissions=8&scope=bot
        **SUPPORT SERVER :**
        https://dsc.gg/veteranssquad
        `)
        .setImage(`https://cdn.discordapp.com/icons/604887047492337684/a_66789e05174b4484e4d7e26d9239f4b9.gif`)
        .setFooter(`Made by ! ᏚᏁᎥᏢᎬᎡ Ᏸ ᎡᎬᎯ ᎿᎻ™︻デ═一☠#8062`)
        Тигр.channel.send(Тигрembed);
    }
  });

/*
let cmds = {
  play: { cmd: "play", a: ["p", "شغل"] },
  skip: { cmd: "skip", a: ["", "تخطى"] },
  stop: { cmd: "stop", a: ["stop"] },
  pause: { cmd: "pause", a: ["ايقاف مؤقت"] },
  resume: { cmd: "resume", a: ["r", "كمل"] },
  volume: { cmd: "volume", a: ["vol", "صوت"] },
  queue: { cmd: "queue", a: ["q", "قائمة"] },
  repeat: { cmd: "repeat", a: ["re", "تكرار"] },
  forceskip: { cmd: "forceskip", a: ["s", "fskip"] },
  skipto: { cmd: "skipto", a: ["st", "اذهب الى"] },
  nowplaying: { cmd: "Nowplaying", a: ["np", "الان"] }
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Object.keys(cmds).forEach(key => {
  var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if (value.a) {
    value.a.forEach(alias => {
      client.aliases.set(alias, command);
    });
  }
});

let active = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  console.log(`on`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

  let cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  let s;

  if (cmd === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        `:no_entry_sign: You must be listening in a voice channel to use that!`
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        `:no_entry_sign: I can't join Your voiceChannel because i don't have ` +
          "`" +
          "`CONNECT`" +
          "`" +
          ` permission!`
      );
    }

    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        `:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` +
          "`" +
          "`SPEAK`" +
          "`" +
          ` permission!`
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(`Added to queue: ${playlist.title}`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(args, 1);

          // eslint-disable-next-line max-depth
          var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("I can't find any thing");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = active.get(msg.guild.id);

      //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

      let hrs =
        video.duration.hours > 0
          ? video.duration.hours > 9
            ? `${video.duration.hours}:`
            : `0${video.duration.hours}:`
          : "";
      let min =
        video.duration.minutes > 9
          ? `${video.duration.minutes}:`
          : `0${video.duration.minutes}:`;
      let sec =
        video.duration.seconds > 9
          ? `${video.duration.seconds}`
          : `0${video.duration.seconds}`;
      let dur = `${hrs}${min}${sec}`;

      let ms = video.durationSeconds * 1000;

      const song = {
        id: video.id,
        title: video.title,
        duration: dur,
        msDur: ms,
        url: `https://www.youtube.com/watch?v=${video.id}`
      };
      if (!serverQueue) {
        const queueConstruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [], ////تعديل غير اساسي
          volume: 100, //// تعديل درجة الصوت الاساسية
          requester: msg.author,
          playing: true,
          repeating: false
        };
        active.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          active.delete(msg.guild.id);
          return msg.channel.send(`I cant join this voice channel`);
        }
      } else {
        serverQueue.songs.push(song);

        if (playlist) return undefined;
        if (!args) return msg.channel.send("no results.");
        else
          return msg.channel
            .send(":watch: Loading... [`" + args + "`]")
            .then(m => {
              setTimeout(() => {
                //:watch: Loading... [let]
                m.edit(
                  `:notes: Added **${song.title}**` +
                    "(` " +
                    song.duration +
                    ")`" +
                    ` to the queue at position ` +
                    `${serverQueue.songs.length}`
                );
              }, 500);
            });
      }
      return undefined;
    }

    function play(guild, song) {
      const serverQueue = active.get(guild.id);

      if (!song) {
        serverQueue.voiceChannel.leave();
        active.delete(guild.id);
        return;
      }
      //console.log(serverQueue.songs);
      if (serverQueue.repeating) {
        console.log("Repeating");
      } else {
        serverQueue.textChannel.send(
          ":notes: Added **" +
            song.title +
            "** (`" +
            song.duration +
            "`) to begin playing."
        );
      }
      const dispatcher = serverQueue.connection
        .playStream(ytdl(song.url))
        .on("end", reason => {
          //if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
          //else console.log(reason);
          if (serverQueue.repeating) return play(guild, serverQueue.songs[0]);
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    }
  } else if (cmd === "stop") {
    if (msg.guild.me.voiceChannel !== msg.member.voiceChannel)
      return msg.channel.send(
        `You must be in ${msg.guild.me.voiceChannel.name}`
      );
    // if (!msg.member.hasPermission("ADMINISTRATOR")) {
    //    msg.react("❌");
    //    return msg.channel.send("You don't have permission `ADMINSTRATOR`");
    //  }
    let queue = active.get(msg.guild.id);
    if (queue.repeating)
      return msg.channel.send(
        "Repeating Mode is on, you can't stop the music, run `" +
          `${prefix}repeat` +
          "` to turn off it."
      );
    queue.songs = [];
    queue.connection.dispatcher.end();
    return msg.channel.send(
      ":notes: The player has stopped and the queue has been cleared."
    );
  } else if (cmd === "skip") {
    let vCh = msg.member.voiceChannel;

    let queue = active.get(msg.guild.id);

    if (!vCh)
      return msg.channel.send(
        "Sorry, but you can't because you are not in voice channel"
      );

    if (!queue) return msg.channel.send("No music playing to skip it");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip it, because repeating mode is on, run " +
          `\`${prefix}forceskip\``
      );

    // let req = vCh.members.size - 1;

    //if (req == 1) {
    msg.channel.send("**:notes: Skipped **" + args);
    return queue.connection.dispatcher.end("Skipping ..");
    // }

    // if (!queue.votes) queue.votes = [];

    // if (queue.votes.includes(msg.member.id))
    //  return msg.say(
    //    `You already voted for skip! ${queue.votes.length}/${req}`
    //  );

    //  queue.votes.push(msg.member.id);

    //  if (queue.votes.length >= req) {
    //     msg.channel.send("**:notes: Skipped **" + args);

    //     delete queue.votes;

    //     return queue.connection.dispatcher.end("Skipping ..");
    //   }
    //
    //  msg.channel.send(
    //  `**You have successfully voted for skip! ${queue.votes.length}/${req}**`
    // );
  } else if (cmd === "pause") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) {
      return msg.channel.send("No music playing to pause.");
    }

    if (!queue.playing)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let disp = queue.connection.dispatcher;

    disp.pause("Pausing..");

    queue.playing = false;

    msg.channel.send(
      ":notes: Paused " + args + ". **Type** `" + prefix + "resume` to unpause!"
    );
  } else if (cmd === "resume") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) return msg.channel.send(":notes: No music paused to resume.");

    if (queue.playing)
      return msg.channel.send(":notes: No music paused to resume.");

    let disp = queue.connection.dispatcher;

    disp.resume("Resuming..");

    queue.playing = true;

    msg.channel.send(":notes: Resumed.");
  } else if (cmd === "volume") {
    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send(
        ":notes: There is no music playing to set volume."
      );

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(":notes: You are not in my voice channel");

    let disp = queue.connection.dispatcher;

    if (isNaN(args[0])) return msg.channel.send(":notes: Numbers only!");

    if (parseInt(args[0]) > 100)
      return msg.channel.send("You can't set the volume more than **100**.");
    //:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
    msg.channel.send(
      ":loud_sound: Volume has been **changed** from (`" +
        queue.volume +
        "`) to (`" +
        args[0] +
        "`)"
    );

    queue.volume = args[0];

    disp.setVolumeLogarithmic(queue.volume / 100);
  } else if (cmd === "queue") {
    let queue = active.get(msg.guild.id);

    if (!queue)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let embed = new Discord.RichEmbed().setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < queue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = Converter.toWords(st[0]);
        let n2 = Converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = Converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`;
    }
    embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`);
    msg.channel.send(embed);
  } else if (cmd === "repeat") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send("There is no music playing to repeat it.");

    if (queue.repeating) {
      queue.repeating = false;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`False`)"
      );
    } else {
      queue.repeating = true;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`True`)"
      );
    }
  } else if (cmd === "forceskip") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (queue.repeating) {
      queue.repeating = false;

      msg.channel.send("ForceSkipped, Repeating mode is on.");

      queue.connection.dispatcher.end("ForceSkipping..");

      queue.repeating = true;
    } else {
      queue.connection.dispatcher.end("ForceSkipping..");

      msg.channel.send("ForceSkipped.");
    }
  } else if (cmd === "skipto") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue.songs || queue.songs < 2)
      return msg.channel.send("There is no music to skip to.");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip, because repeating mode is on, run " +
          `\`${prefix}repeat\` to turn off.`
      );

    if (!args[0] || isNaN(args[0]))
      return msg.channel.send(
        "Please input song number to skip to it, run " +
          prefix +
          `queue` +
          " to see songs numbers."
      );

    let sN = parseInt(args[0]) - 1;

    if (!queue.songs[sN])
      return msg.channel.send("There is no song with this number.");

    let i = 1;

    msg.channel.send(
      `Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`
    );

    while (i < sN) {
      i++;
      queue.songs.shift();
    }

    queue.connection.dispatcher.end("SkippingTo..");
  } else if (cmd === "Nowplaying") {
    let q = active.get(msg.guild.id);

    let now = npMsg(q);

    msg.channel.send(now.mes, now.embed).then(me => {
      setInterval(() => {
        let noww = npMsg(q);
        me.edit(noww.mes, noww.embed);
      }, 5000);
    });

    function npMsg(queue) {
      let m =
        !queue || !queue.songs[0] ? "No music playing." : "Now Playing...";

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor);

      if (!queue || !queue.songs[0]) {
        eb.setTitle("No music playing");
        eb.setDescription(
          "\u23F9 " + bar(-1) + " " + volumeIcon(!queue ? 100 : queue.volume)
        );
      } else if (queue.songs) {
        if (queue.requester) {
          let u = msg.guild.members.get(queue.requester.id);

          if (!u) eb.setAuthor("Unkown (ID:" + queue.requester.id + ")");
          else eb.setAuthor(u.user.tag, u.user.displayAvatarURL);
        }

        if (queue.songs[0]) {
          try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
          } catch (e) {
            eb.setTitle(queue.songs[0].title);
          }
        }
        eb.setDescription(embedFormat(queue));
      }

      return {
        mes: m,
        embed: eb
      };
    }

    function embedFormat(queue) {
      if (!queue || !queue.songs) {
        return "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(100);
      } else if (!queue.playing) {
        return (
          "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(queue.volume)
        );
      } else {
        let progress = queue.connection.dispatcher.time / queue.songs[0].msDur;
        let prog = bar(progress);
        let volIcon = volumeIcon(queue.volume);
        let playIcon = queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6";
        let dura = queue.songs[0].duration;

        return (
          playIcon +
          " " +
          prog +
          " `[" +
          formatTime(queue.connection.dispatcher.time) +
          "/" +
          dura +
          "]`" +
          volIcon
        );
      }
    }

    function formatTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    }

    function bar(precent) {
      var str = "";

      for (var i = 0; i < 12; i++) {
        let pre = precent;
        let res = pre * 12;

        res = parseInt(res);

        if (i == res) {
          str += "\uD83D\uDD18";
        } else {
          str += "▬";
        }
      }

      return str;
    }

    function volumeIcon(volume) {
      if (volume == 0) return "\uD83D\uDD07";
      if (volume < 30) return "\uD83D\uDD08";
      if (volume < 70) return "\uD83D\uDD09";
      return "\uD83D\uDD0A";
    }
  }
});

//// مهم
/// {} عند عمل ريمكس للبوت احذف مايوجد بملفات الجيسون وحط قوسين مثل
//// يجب ان يكون البوت رتبة اقل من رتبة البوتات الموثوقة والكبيرة مثل داينو بوت وبروبوت والاخرى لكي لا يعطيهم باند
//// يجب اعطاء البوت جميع الصلاحيات
//// البوت امن تماما من اي اخطاء في الحماية او حتى في اصل الاكواد
//// تم تجربة البوت اكثر من 3 ايام
//// هذا البوت هو الاصدار الثاني من بوت السيستم من قناة اسامة بلس
//// الاكواد مجمعة من سيرفرات كثير مثل الفا وتوكسك كودز
////شكر خاص لـ سرحان ولوفي ومرتجى على المساعدة لو لله وهم ماكان خلصنا هذا البوت الرهيب وما انسى بارون
*/
client.on('message', message => {
  if(message.content.startsWith(prefix + 'chmove')) {
    let cdo = false;
    if (message.member.hasPermission("MANAGE_ROLES")) cdo = true;
    if(cdo === false) return;
    if (message.member.voiceChannel == null) return message.channel.send(`**You are not in a voice channel**`)
    let args = message.content.split(' ').slice(1).join(' ');
    if(!args) return message.channel.send(`**Enter a voice channel id**`)
    let cando = true;
    let channel = client.channels.get(args)
    if(!channel) cando = false;
    if(channel.type === `text`) cando = false;
    if(cando === false) return message.channel.send(`**That's not a voice channel**`)
    message.guild.members.filter(m=>m.voiceChannelID === args).forEach(async m => {
  await m.setVoiceChannel(message.member.voiceChannelID)
   })
    message.channel.send(`**All users in \`${channel.name}\` has been moved to \`${message.member.voiceChannel.name}\`**`)

   }
     });

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "nitro") {
function randomem() {
let email = '';
const ReBeL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 16; i++) email += ReBeL.charAt(Math.floor(Math.random() * ReBeL.length));
return email;
}

const fadi = randomem();
message.author.send(`P.P.------------------------P.P.
nitro code :    https://discord.gift/${fadi}
                  enjoy :)                        
P.P.------------------------P.P.`).catch(err => {
   if(err == "DiscordAPIError: Cannot send messages to this user") {
      return message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **");
}
});

message.channel.send("**تم الارسال النيترو في الخاص | ☑️ **")
}});



client.login(process.env.SECRET);
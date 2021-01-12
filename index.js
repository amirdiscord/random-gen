const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"; //set your bot prefix here

client.on("ready", async() => {
    client.user.setActivity("CHESS EVENT", {
        type: "PLAYING",
    })
    console.log(`${client.user.tag} is ready`);
});

client.on('message', message => {
    if (message.content === `${prefix}roll`) {
        var rating = Math.floor(Math.random() * 100) + 1;
        message.reply(`شماره رندوم شما: ${rating}`);
    }
});

client.login("Njk1MjAwNTI3NjY2OTA1MTE5.XoWt8Q.mLukhp4wbnNACX0Ip85mZm-JiQQ");
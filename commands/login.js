const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] }); 
let util = require("djs-simple-utils"); /* My package btw */
let superEmbed = require("djs-simple-utils");
const { MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const axios = require("axios");

const Database = require("@replit/database");
let db = new Database();

let { tags }  = require("./config.json");
let { token } = require("./config.json")||process.env.token;

module.exports = {
  name: "login",
  aliases: ["l"],
  description: `Simple login command for ${client.user.tag}`,
  execute: async (client, message) => {
    
   let member = message.author;
   var id;
   var username;
   id = message.author.id;
   id = message.author.username;
   var oauth = Math.floor(Math.random() * 100000) + 1;
   let collection = await db.get(`collection_id`);
   const args = message.content.split(' ').splice(1);
    
     let embed = new Discord.MessageEmbed()
    .setTitle("User Login")
    .setDesription("This is your OAuth2 code. Don't loose it.")
    .addField("OAuth2 Code:", `\`${oauth}\``)
    .setFooter("React to this message to start the verification process.")
    .then((m) => {
      m.react("✅")
    })
     
   member.send(embed)
    
    client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Fetching message failed: ', error);
            return;
        }
    }
    if (!user.bot) {
    member.send("📜 | **Step 1:** \`Send me your OAuth2 code above. You have 1 minute.\`")
        } else {
          member.send(":x: | \`Sorry, but I'm having trouble processing your request. Please try again later.\`")
        }
})
    
    if(message.content.toLowerCase(`${oauth}`)) {
     if (isNaN(args[0])) return member.channel.send(':x: | \`That is not a vaild OAth2 code! Please try again.\`');
     member.send("📜 | **Step 2:** \`What is your name and/or nickname\`")
       client.on("message", async (msg) => {
         if(args[0] === oauth) return false;
         if(args[0] >= oauth) return member.send(`Hello, ${args[0]}`)
         .then((m1) => {
           member.send("✅ | \`Login is complete. You may close this DM\`")
           .then(() => {
             db.set(`collection_${member.id}`, collection + message.author.id);
           })
         })
         
       }) 
    }
   
  }
}

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }); 
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
  execute: async (client, message, args) => {
    
   let member = message.author;
   var id;
   var username;
   id = message.author.id;
   id = message.author.username;
   var oauth = Math.floor(Math.random() * 100000) + 1;
   let collection = await db.get(`collection_id`);
    
     let embed= new Discord.MessageEmbed()
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
    member.send(embed2)
        } else {
          member.send(":x: | \`Sorry, but i'm having trouble processing your request. Please try again later.\`")
        }
    }
})
   
  }
}

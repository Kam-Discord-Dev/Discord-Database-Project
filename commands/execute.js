const Discord = require("discord.js");
let client = new Discord.Client();
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
  name: `${tags}`,
  aliases: ["@execute/test"],
  description: "Super simple execute comamnd for 1 time users",
  execute: async (client, message, msg, args) => {
   
   let member = message.author;
   var id;
   var username;
   id = message.author.id;
   id = message.author.username;
   var oauth = Math.floor(Math.random() * 100000) + 1;
   let collection = await db.get(`collection_id`);

   if(!member.id >= collection) return
   member.send(embed).then(() => {
      member.send(`This is your OAuth2 Code, ${oauth}. Copy and paste the code and send it to me when you login`)
   })
    
   /* db.set(`collection_${member.id}`, collection + message.author.id); */
    
  }    
}

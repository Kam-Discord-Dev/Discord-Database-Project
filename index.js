/* Made by Kam#4599 on Discord */
/* GitHub Repository made on 12/15/2021 */
/* Started code on 12/15/2021 */
/* When you fork this code you must paste your bot token in config.json and env. You must also select Node.JS as the lanuage, node index.js as your starting command, 
remove all comments in config.json, and lastyly, you must install all the packages needed for this code.  (This message is a comment btw) */

const Discord = require("discord.js");
let client = new Discord.Client();
let util = require("djs-simple-utils"); /* My package btw */
let superEmbed = require("djs-simple-utils");
const { MessageEmbed, Collection } = require("discord.js");
const fs = require("fs");
const axios = require("axios");
const express = require('express');
const app = express();
const Database = require("@replit/database");
let db = new Database();

app.get("/", function(req, res) {
  res.send(`${client.user.tag} is running!`)
});
app.listen(3000);

let { prefix } = require("./config.json");
let { tags }  = require("./config.json");
let { token } = require("./config.json")||process.env.token;

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands/')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", async () => {
 console.log(`${client.user.tag} is Running!`);
 console.log(`Current Tags: `+tags);
 console.log(`Prefix: `+prefix);
 console.log(`Token: `+token); /* <<< You may remove this for security reasons <<< */
 /* client.user.setActivity(`${prefix}login | ${prefix}signup`,  { type: 'WATCHING' }, { status: 'dnd' }); */
 client.user.setPresence({
    status: 'dnd',
    activity: {
        name: `${prefix}login | ${prefix}stats`,
        type: 'WATCHING'
    }
});
});

client.on("message", async (message) => {
 if(message.content.startsWith(prefix+tags)) {

let member = message.author;
var id;
id = message.author.id;
var username;
id = message.author.username;

let collection = await db.get(`collection_id`);

if(!member.id >= collection) return

/* db.set(`collection_${member.id}`, collection + message.author.id); */

}
  if(message.content === prefix+"stats" {
     const moment = require('moment'); require("moment-duration-format")
    const duration = moment.duration(client.uptime).format(" D[d], H[h], m[m], s[s]")
    
    let member = message.author;
var id;
id = message.author.id;
var username;
id = message.author.username;

let collection = await db.get(`collection_id`);

if(!member.id >= collection) return
  /* MAKE THIS AFTER YOU DO EXECUTE */
   
    let embed = new Discord.MessageEmbed()
    .setTitle("Stats:")
    .addField(":ping_pong: Ping:", `┕\`${client.ws.ping}ms\``, true)
    .addField(`:clock1: Uptime:`, `┕\`${duration}\``, true)
    .addField(`:file_cabinet: Memory:`, `┕\`135.5mb\``, true)
    .addField(`:homes: Servers:`, `┕\`${client.guilds.cache.size}\``, true)
    .addField(':busts_in_silhouette: Users:', `┕\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}\``,true)
    .addField(":control_knobs: API Latency:", `┕\`${client.ws.ping}ms\``, true)
    .addField(":robot: Version:", "┕`1.0.0`", true)
    .addField(":green_book: Node:", "┕`v12.22.6`",true)
    .addField(":blue_book: Discord.js:", "┕`12.5.3`",true)
    .setFooter(``)
    .setTimestamp()
    
    message.channel.send(embed)
     }
});

client.login(process.env.token||config.token||token);

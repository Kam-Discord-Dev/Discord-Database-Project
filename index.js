/* Made by Kam#4599 on Discord*/
/* GitHub Repository made on 12/15/2021*/
/* Coded on 12/15/2021 */

const discord = require("discord.js");
let { bot, client } = new Discord.Client();

const Database = require("@replit/database");
let db = new Database();

let prefix = require("./config.json");
let tags = require("./config.json");
let token = require("./config.json")||process.env.token;

client.on("ready", async () => {
 console.log(`${client.user.tag} is Running!`);
 console.log(`Prefix: ${prefix}`);
 console.log(`Token: ${token}`); /* 🠐 You may remove this for bot security reasons 🠐 */
})

client.on("message", async (message) => {
 if(message.content.startsWith(prefix+tags)) {

let member = message.author;
var id;
id = message.author.username;

let collection = await db.get(`collection_id`);

if(!member.id >= collection) return

/* db.set(`collection_${member.id}`, collection + message.author.id); */

}
});

client.login(process.env.token||config.token||token);

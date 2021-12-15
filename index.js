/* Made by Kam#4599 on Discord*/
/* GitHub Repository made on 12/15/2021*/
/* Coded on 12/15/2021 */

const discord = require("discord.js");
let { bot, client } = new Discord.Client();

const Database = require("@replit/database");
const db = new Database();

let prefix = require(./config.json)
let tags = require(./config.json)
let token = require(./config.json)||process.env.token

client.on("message", async (message) => {
 if(message.content.startsWith(prefix+tags) {

let member = message.author;
var id;
id = message.author.username;

}
})

client.login(process.env.token||config.token||token)

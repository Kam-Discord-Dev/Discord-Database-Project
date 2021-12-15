/* Made by Kam#4599 on Discord*/
/* GitHub Repository made on 12/15/2021*/
/* Coded on 12/15/2021 */

const Database = require("@replit/database");
const db = new Database();
const Discord = require("discord.js")
let client = new Discord.Client()

async(bot,client,message,args)=>{

let member = message.author;
var id;
id = message.author.username;

db.set(`collection_${member.id}`, collection + message.author.id)

await console.log(`Collection DB Running`)

let collection = await db.get(`collection_id`);

if(!member.id >= collection) return

var count
count = 5

for (var count = 0; count < count; count++) { 
  console.log(count)
}
}

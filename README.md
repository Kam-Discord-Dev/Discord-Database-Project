# Simple Discord.js Database Project

Hi, Welcome to my Discord.js Database project. I'm testing the Replit Database to make a simple first time login and one-time code system, simple Discord leveling system, and a first time welcome message for any command. (Not on Server join. When someone uses a bot command for the first time)

- GitHub link: https://github.com/Kam-Discord-Dev/Discord-Database-Project

# Simple Example Flowchart 

Person joins server 🠒 REPL makes new Database for that person 🠒 Person uses bot command 🠒 Bot sends them 1 time code 🠒 They sign in 🠒 REPL makes a new Database 🠒 Person types message 🠒 Database adds 100 to it 🠒 Person types 10 messages 🠒 Database goes to 1000 and resets 🠒 Person types 20 messages 🠒 Database goes to 2k and resets (every level up is +1000 for the database)

# Database code example

```node.js
const Database = require("@replit/database");
const db = new Database();

let member = message.author;
var id;
id = message.author.username;

let collection = await db.get(`collection_id`);

if(!member.id >= collection) return 
 member.send(/*sign up info and 1 time code*/)

 /* ↓ after sign up is completed ↓ */

 member.send("Sign up verification complete!")
 .then(()=>{

await db.set(`collection_${member.id}`, collection + message.author.id)
})

/* 🠑 Small disclaimer, The code above will not work by its self. It will need many updates to work with all 
the other commands. 🠑 */
```

# Forking

If/when you fork this code you must paste your bot token in config.json and env. You must also select Node.JS as the lanuage, node index.js as your starting command, remove all comments in config.json, and lastyly, you must install all the packages needed for this code. Comments look like this; ```/* and have words in them. */``` 

# Licence

You may use this code (even though it has none of the actual code in it) if you would like. It would be appreciated if you at least gave me (Kamryn and/or Kam#4599) some credit for the code.

const { Client, GatewayIntentBits } = require('discord.js');

require('dotenv').config(); // Loading in .env file

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Creating a client

client.once('ready', (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.login(process.env.TOKEN); // Logging in

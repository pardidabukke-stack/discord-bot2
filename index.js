require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('clientReady', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.webhookId) {
    setTimeout(() => {
      message.delete().catch(console.error);
    }, 3000);
  }
});


client.login(process.env.DISCORD_TOKEN=MTQ1Nzc1MzU2MzUzMDAwMjU1Mg.GGFigK.WkHB8DOM9T7EUZaIZrUk9eb0vy3zw1Bs3XudBM);

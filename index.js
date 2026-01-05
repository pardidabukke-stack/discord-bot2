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
      message.channel.send('yahaha kehapus dan maaf menganggu kenyaman nya, mwah.').then(sentMessage => {
        setTimeout(() => {
          sentMessage.delete().catch(console.error);
        }, 30000);
      }).catch(console.error);
    }, 3000);
  }
});

client.login(process.env.DISCORD_TOKEN);

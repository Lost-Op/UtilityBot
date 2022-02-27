(async () => {
const Discord = require("discord.js");
const config = require("./Root/Storage/Vault/Config");
const path = __dirname;
const emotes = require('./Root/Storage/json/emotes.json')
const colors = require('./Root/Storage/json/colors.json')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_BANS
    ],
    partials: ["CHANNEL"]
});


const logs = require('discord-logs');
logs(client);


exports.client = client;
exports.path = path;
exports.config = config;
exports.emotes = emotes;
exports.colors = colors;
client.commands = {};
client.events = new Discord.Collection();
client.langs = new Discord.Collection();
client.commands.messageCommands = new Discord.Collection();
client.commands.messageCommands.aliases = new Discord.Collection();
client.commands.contextMenus = new Discord.Collection();
client.commands.slashCommands = new Discord.Collection();
client.commands.buttonCommands = new Discord.Collection();
client.commands.selectMenus = new Discord.Collection();
    
const Handler = require(`${path}/Root/Structures/Handlers/Handler`);
await Handler.loadMessageCommands(client, path);
await Handler.loadEvents(client);
await Handler.loadLangs(client);
await client.login(config.token);
await Handler.loadSlashCommands(client, path);
await Handler.loadContextMenus(client, path);
await Handler.loadButtonCommands(client, path);
await Handler.loadSelectMenus(client, path);
})()
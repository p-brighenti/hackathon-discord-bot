'use strict';

const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const zoomAlerts = require('./cron-jobs/zoom-alerts');
const countdown = require('./cron-jobs/countdown');
const client = new Discord.Client();
const COMMANDS = require('./commands/index');
const store = require('./storage/file-storage');
const { fromAC, isCommand } = require('./utils/validator');

client.on('ready', async () => {
    init();
});

client.on('message', async (message) => {
    if (!fromAC(message) || !isCommand(message)) return;

    const command = message.content.split(' ')[0];
    await COMMANDS[command](message);
});

client.login(process.env.BOT_SECRET);

async function init() {
    zoomAlerts.setup(client);
    countdown.setup(client);
    zoomAlerts.dirtyHotfix(client);
    await store.init();
}

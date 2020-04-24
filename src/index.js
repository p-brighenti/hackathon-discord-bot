'use strict';

const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const zoomAlerts = require('./cron-jobs/zoom-alerts');
const countdown = require('./cron-jobs/countdown');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log('Connected');
    zoomAlerts.setup(client);
    countdown.setup(client);
});

client.login(process.env.BOT_SECRET);

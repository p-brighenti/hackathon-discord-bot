const cron = require('node-cron');
const embeder = require('../utils/embeder');
const CHANNELS = require('../enums/channels');
const scheduleConfig = require('../config/schedule');

exports.setup = (client) => {
    const channel = client.channels.cache.get(CHANNELS.GENERAL);

    const countdown = cron.schedule(scheduleConfig.COUNTDOWN, async () => {
        await channel.send(embeder.gifEmbed(gifOfTheDay[new Date().getDate()]));
    });

    countdown.start();
};

const gifOfTheDay = {
    25: '3.gif',
    26: '2.gif',
    27: '1.gif',
    28: '0.gif',
};

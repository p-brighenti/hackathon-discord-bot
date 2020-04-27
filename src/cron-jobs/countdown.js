const cron = require('node-cron');
const embeder = require('../utils/embeder');
const CHANNELS = require('../enums/channels');
const scheduleConfig = require('../config/schedule');

exports.setup = (client) => {
    const channel = client.channels.cache.get(CHANNELS.GENERAL);

    const countdown = cron.schedule(scheduleConfig.COUNTDOWN, async () => {
        const day = new Date().getDate();
        if (day === 28) await client.user.setUsername('Hackathon Buddy');
        await channel.send(embeder.gifEmbed(gifOfTheDay[day]));
    });

    countdown.start();
};

const gifOfTheDay = {
    25: '3.gif',
    26: '2.gif',
    27: '1.gif',
    28: '0.gif',
};

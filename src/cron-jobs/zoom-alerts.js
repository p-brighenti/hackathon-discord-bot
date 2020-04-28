const cron = require('node-cron');
const CHANNELS = require('../enums/channels');
const MESSAGES = require('../enums/messages');
const scheduleConfig = require('../config/schedule');
const startDate = new Date('2020-04-28T09:00:00');

exports.setup = (client) => {
    const channel = client.channels.cache.get(CHANNELS.GENERAL);

    const alert30Before = cron.schedule(
        scheduleConfig.ZOOM_ALERT_30,
        async () => {
            if (hasHackathonStarted()) await channel.send(MESSAGES.THIRTY_MIN);
        }
    );

    const alert10Before = cron.schedule(
        scheduleConfig.ZOOM_ALERT_10,
        async () => {
            if (hasHackathonStarted()) await channel.send(MESSAGES.TEN_MIN);
        }
    );

    alert30Before.start();
    alert10Before.start();
};

exports.dirtyHotfix = (client) => {
    const channel = client.channels.cache.get(CHANNELS.GENERAL);

    const alert30Before = cron.schedule('30 16 28 4 *', async () => {
        if (hasHackathonStarted()) await channel.send(MESSAGES.THIRTY_MIN);
    });

    const alert10Before = cron.schedule('50 16 28 4 *', async () => {
        if (hasHackathonStarted()) await channel.send(MESSAGES.TEN_MIN);
    });

    alert30Before.start();
    alert10Before.start();
};

function hasHackathonStarted() {
    return new Date() > startDate;
}

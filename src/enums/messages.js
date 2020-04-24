const ROLES = require('./roles');

const messages = {
    THIRTY_MIN: `<@&${ROLES.EVERYONE}> 30 mins until the next Zoom meeting!`,
    TEN_MIN: `<@&${ROLES.EVERYONE}> 10 mins until the next Zoom meeting!`,
    TEST: 'Testing cron job',
};

Object.freeze(messages);

module.exports = messages;

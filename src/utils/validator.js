const ROLES = require('../enums/roles');

exports.fromAC = (message) =>
    message.member.roles.cache.some(
        (role) => role.id === ROLES.MASTER_CODERS || role.id === ROLES.DETAILS
    );

exports.isCommand = (message) => message.content.startsWith('&');

exports.validTeamName = (name) => {};

const ROLES = require('../enums/roles');
const TEAMS = require('../enums/teams');

exports.fromAC = (message) =>
    message.member.roles.cache.some(
        (role) => role.id === ROLES.MASTER_CODERS || role.id === ROLES.DETAILS
    );

exports.isCommand = (message) => message.content.startsWith('&');

exports.validTeamName = (name) => {
    console.log(name);
    return !!Object.values(TEAMS).some((teamName) => teamName === name);
};

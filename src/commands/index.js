const COMMAND_NAMES = require('../enums/command-names');
const scoreCommand = require('./increase-score');
const resultsCommand = require('./post-results');

const commands = {
    [COMMAND_NAMES.SCORE]: scoreCommand,
    [COMMAND_NAMES.RESULTS]: resultsCommand,
};

Object.freeze(commands);

module.exports = commands;

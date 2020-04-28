const AsciiTable = require('ascii-table');
const store = require('../storage/file-storage');

module.exports = async (message) => {
    const hackathonTable = new AsciiTable();

    const scores = await store.read();

    const scoreArr = Object.keys(scores).map((teamName) => {
        return { name: teamName, score: scores[teamName] };
    });

    const sortedScores = scoreArr.sort((a, b) => {
        return b.score - a.score;
    });

    const longestTeamName = sortedScores.reduce((acc, name) => {
        return acc > name.length ? acc : name.length;
    }, 0);

    sortedScores.forEach((team, index) => {
        const diff = longestTeamName - team.name.length;
        hackathonTable.addRow([
            index + 1,
            team.name + ' '.repeat(diff),
            `${team.score} points`,
        ]);
    });

    const delimiter = '```';
    const title = '   WILD CHALLENGE SCORES';

    message.channel.send(
        `${delimiter}\n${title}\n${hackathonTable.toString()}${delimiter}`
    );
};

const store = require('../storage/file-store');
const { validTeamName } = require('../utils/validator');

module.exports = async (message) => {
    const currentScores = await store.read();
    let [command, teamName, points] = message.content.split(' ');

    teamName = teamName.toLowerCase();
    points = Number.parseInt(points);

    if (!validTeamName(teamName) || !Number.isInteger(points)) {
        message.channel.send('Usage: &score <team> <points>');
        return;
    }

    const newScores = {
        ...currentScores,
        [teamName]: Number.parseInt(currentScores[teamName]) + points,
    };

    await store.write(newScores);
};

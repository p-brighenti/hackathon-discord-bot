const store = require('../storage/file-storage');
const { validTeamName } = require('../utils/validator');

module.exports = async (client, message) => {
    const currentScores = await store.read();
    let [teamName, points] = message.content.split(' ');

    teamName = teamName.toLowerCase();
    points = Number.parseInt(points);

    if (!validTeamName(teamName) || !Number.isInteger(points)) {
        message.channel.send('Usage: &score <team> <points>');
        return;
    }

    const newScores = {
        ...currentScores,
        [teamName]: currentScores[teamName] + points,
    };

    await store.write(newScores);
};

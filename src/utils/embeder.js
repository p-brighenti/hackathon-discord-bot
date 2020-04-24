const Discord = require('discord.js');
const path = require('path');

exports.gifEmbed = (filename) => {
    return new Discord.MessageEmbed()
        .attachFiles([path.normalize(`${__dirname}/../../assets/${filename}`)])
        .setImage(`attachment://${filename}`);
};

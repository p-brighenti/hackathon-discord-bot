const fs = require('fs').promises;
const { path } = require('../config/store');

exports.init = async () => {
    try {
        await fs.access(path);
    } catch (err) {
        createStore();
    }
};

function createStore() {
    fs.writeFile(path, '', 'utf-8');
}

exports.read = async () => {
    return await JSON.parse(fs.readFile(path, 'utf-8'));
};

exports.write = async (data) => {
    await fs.writeFile(path, JSON.stringify(data), 'utf-8');
};

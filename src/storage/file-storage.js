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
    const initalState = {
        alpha: '0',
        bravo: '0',
        charlie: '0',
    };

    fs.writeFile(path, JSON.stringify(initalState), 'utf-8');
}

exports.read = async () => {
    return JSON.parse(await fs.readFile(path, 'utf-8'));
};

exports.write = async (data) => {
    await fs.writeFile(path, JSON.stringify(data), 'utf-8');
};

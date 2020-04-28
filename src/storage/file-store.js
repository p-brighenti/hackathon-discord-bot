const fs = require('fs').promises;
const { path, encoding } = require('../config/store');

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

    fs.writeFile(path, JSON.stringify(initalState), encoding);
}

exports.read = async () => {
    return JSON.parse(await fs.readFile(path, encoding));
};

exports.write = async (data) => {
    await fs.writeFile(path, JSON.stringify(data), 'utf-8');
};

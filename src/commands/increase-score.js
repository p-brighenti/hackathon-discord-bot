const store = require('../storage/file-storage');

module.exports = async (client, message) => {
    console.log(await store.read());
};

const mongoose = require('mongoose');
const config = require('./config');

const log = console.log.bind(console);
const mongoDB = config.dev.mongodb;

mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', () => {
	log('mongoDB connection error');
});
module.exports = db;

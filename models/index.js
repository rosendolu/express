const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BookModule = require('./BookModule')(Schema);

let schema = {
	BookModule,
};

module.exports = Object.keys(schema).reduce((acc, item) => {
	acc[item] = schema[item];
}, {});

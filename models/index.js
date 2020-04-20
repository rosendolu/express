const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const BookModule = require('./BookModule')(Schema);
const Book = require('./book')(Schema);
const Author = require('./author')(Schema);
const Genre = require('./genre')(Schema);
const BookInstance = require('./bookInstance')(Schema);

let schema = {
	BookModule,
	Book,
	Author,
	Genre,
	BookInstance,
};

module.exports = Object.keys(schema).reduce((acc, item) => {
	acc[item] = schema[item];
}, {});

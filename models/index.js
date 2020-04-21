const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Book = require('./book')(Schema);
const Author = require('./author')(Schema);
const BookInstance = require('./bookInstance')(Schema);
const Genre = require('./genre')(Schema);

let schema = {
	Book,
	Author,
	BookInstance,
	Genre,
};

module.exports = Object.keys(schema).reduce((acc, item) => {
	acc[item] = mongoose.model(item, schema[item]);
	return acc;
}, {});

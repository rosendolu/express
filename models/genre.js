const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenreSchema = new Schema({
	name: { type: String, required: true, maxlength: 100, minlength: 1 },
});
GenreSchema.virtual('url').get(() => {
	return '/catelog/book/' + this._id;
});
module.exports = mongoose.model('Genre', GenreSchema);

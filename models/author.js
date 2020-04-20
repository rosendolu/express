const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
	first_name: { type: String, required: true },
	family_name: { type: String, required: true },
	date_birth: { type: Date },
	date_death: { type: Date },
});

AuthorSchema.virtual('name').get(() => {
	return this.family_name + this.first_name;
});
AuthorSchema.virtual('listSpan').get(() => {
	return (this.date_death.getYear() - this.date_birth.getYear()).toString();
});
AuthorSchema.virtual('url').get(() => {
	return '/catalog/author' + this._id;
});
module.exports = mongoose.model('Author', AuthorSchema);

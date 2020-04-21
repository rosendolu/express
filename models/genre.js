module.exports = (Schema) => {
	const GenreSchema = new Schema({
		name: { type: String, required: true, maxlength: 100, minlength: 1 },
	});
	GenreSchema.virtual('url').get(() => {
		return '/catelog/book/' + this._id;
	});
	return GenreSchema;
};

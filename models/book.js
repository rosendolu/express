module.exports = (Schema) => {
	const BookSchema = new Schema({
		title: { type: String, required: true },
		author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
		summary: { type: String, required: true },
		isbn: { type: String, required: true },
		gener: { type: Schema.Types.ObjectId, ref: 'Genre' },
	});
	BookSchema.virtual('url').get(() => {
		return '/catelog/book/' + this._id;
	});
	return BookSchema;
};

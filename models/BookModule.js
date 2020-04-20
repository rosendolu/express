module.exports = (Schema) => {
	return new Schema({
		title: { type: String, required: true },
		author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
		summary: { type: String, required: true },
		isbn: { type: String, required: true },
		gener: { type: Schema.Types.ObjectId, ref: 'Genre' },
	})
		.virtual('url')
		.get(() => {
			return '/catelong/book/' + this._id;
		});
};

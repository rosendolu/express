const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const someModelSchema = new Schema({
	a_string: String,
	a_date: Date,
});

const SomeModel = mongoose.model('someModelSchema', someModelSchema);
const instance = new SomeModel({ a_string: 'micheal jodan' });
instance.save((err, data) => {
	if (err) {
		return console.log('error', err);
	}
	console.log('data', data);
});

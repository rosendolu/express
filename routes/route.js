const express = require('express');
const router = express.Router();
const index = require('./index')(router);
const users = require('./users')(router);
const catelog = require('./catelog')(router);
module.exports = (app) => {
	app.use('/', index);
	app.use('/catelog', catelog);
	app.use('/users', users);
};

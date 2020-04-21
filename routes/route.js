const express = require('express');
const router = express.Router();
const index = require('./index')(router);
const users = require('./users')(router);

module.exports = (app) => {
	app.use('/', index);
	app.use('/users', users);
};

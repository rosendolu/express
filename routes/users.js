module.exports = (router) => {
	/* GET users listing. */
	router.get('/', function (req, res, next) {
		res.send('respond with a resource');
	});

	router.get('/rules', function (req, res, next) {
		res.render('rules', { title: 'hard to understand ' });
	});
	return router;
};

module.exports = (router) => {
	/* GET users listing. */
	router.all('/', function (req, res, next) {
		res.send('respond with a resource');
	});

	router.all('/rules', function (req, res, next) {
		res.render('rules', { title: 'hard to understand ' });
	});
	return router;
};

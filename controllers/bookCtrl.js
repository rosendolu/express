const { Book, Author, BookInstance, Genre } = require('../models');
// 显示完整的作者列表
const async = require('async');
exports.index = (req, res) => {
	// res.send('home ,index');
	async.parallel(
		{
			book_count(cb) {
				Book.count({}, cb);
			},
			bookInstance_count(cb) {
				BookInstance.count({}, cb);
			},
			author_count(cb) {
				Author.count({}, cb);
			},
			genre_count(cb) {
				Genre.count({}, cb);
			},
		},
		(err, results) => {
			res.render('index', {
				title: 'Local Library Home',
				error: err,
				data: JSON.stringify(results),
			});
		}
	);
};
exports.book_list = (req, res, next) => {
	// res.send('未实现：作者列表');
	Book.find()
		.populate('author')
		.exec(function (err, list_books) {
			if (err) {
				return next(err);
			}
			//Successful, so render
			res.render('index', {
				title: 'Book List',
				data: JSON.stringify(list_books),
			});
		});
};

// 为每位作者显示详细信息的页面
exports.book_detail = (req, res) => {
	res.send('未实现：作者详细信息：' + req.params.id);
};

// 由 GET 显示创建作者的表单
exports.book_create_get = (req, res) => {
	res.send('未实现：作者创建表单的 GET');
};

// 由 POST 处理作者创建操作
exports.book_create_post = (req, res) => {
	res.send('未实现：创建作者的 POST');
};

// 由 GET 显示删除作者的表单
exports.book_delete_get = (req, res) => {
	console.log(req);
	res.send('未实现：作者删除表单的 GET' + JSON.stringify(req.params));
};

// 由 POST 处理作者删除操作
exports.book_delete_post = (req, res) => {
	res.send('未实现：删除作者的 POST');
};

// 由 GET 显示更新作者的表单
exports.book_update_get = (req, res) => {
	res.send('未实现：作者更新表单的 GET');
};

// 由 POST 处理作者更新操作
exports.book_update_post = (req, res) => {
	res.send('未实现：更新作者的 POST');
};
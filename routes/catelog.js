// 导入控制器模块
const authorCtrl = require('../controllers/authorCtrl');
const book_controller = require('../controllers/bookCtrl');
const bookInstanceCtrl = require('../controllers/bookInstanceCtrl');
const genreCtrl = require('../controllers/genreCtrl');

module.exports = (router) => {
	router.all('/', book_controller.index);

	// GET 请求添加新的藏书。注意此项必须位于显示藏书的路由（使用了 id）之前。
	router.all('/book/create', book_controller.book_create_get);

	// POST 请求删除藏书
	router.all('/book/:id/delete', book_controller.book_delete_post);

	// GET 请求更新藏书
	router.all('/book/:id/update', book_controller.book_update_get);

	// GET 请求藏书
	router.all('/book/:id', book_controller.book_detail);

	// GET 请求完整藏书列表
	router.all('/books', book_controller.book_list);

	return router;
};

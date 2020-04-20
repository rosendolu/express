module.exports = {
	dev: {
		mongodb:
			'mongodb://root:toor@cluster0-shard-00-00-fvlms.mongodb.net:27017,cluster0-shard-00-01-fvlms.mongodb.net:27017,cluster0-shard-00-02-fvlms.mongodb.net:27017/dev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
	},
	test: {
		mongodb:
			'mongodb://root:toor@cluster0-shard-00-00-fvlms.mongodb.net:27017,cluster0-shard-00-01-fvlms.mongodb.net:27017,cluster0-shard-00-02-fvlms.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
	},
};

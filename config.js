module.exports = {
	dev: {
		// mongodb:
		// 	'mongodb://root:toor@cluster0-shard-00-00-fvlms.mongodb.net:27017,cluster0-shard-00-01-fvlms.mongodb.net:27017,cluster0-shard-00-02-fvlms.mongodb.net:27017/dev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
		mongodb:
			'mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb',
	},
	test: {
		mongodb:
			'mongodb://root:toor@cluster0-shard-00-00-fvlms.mongodb.net:27017,cluster0-shard-00-01-fvlms.mongodb.net:27017,cluster0-shard-00-02-fvlms.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
	},
};

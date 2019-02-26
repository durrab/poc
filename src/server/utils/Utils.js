var conf = require("config");
var MongoClient = require('mongodb').MongoClient;

var mongodb_url = conf.get("mongodb_config.url")



module.exports = {
    getMongoDb : async () => {
        console.log('mongo db url => '+mongodb_url)
        var db = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        return db;
    }
}
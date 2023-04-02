const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const DBURL = `mongodb://${process.env.MONGODB_HOST}
                        :${process.env.MONGODB_PORT}/
                         ${process.env.MONGODB_DB}`;

const mongoConnect = (callback) => {
    MongoClient.connect(DBURL)
      .then((client) => {
        console.log(`CONNECTED: ${process.env.MONGODB_DB}`.blue.inverse);
        callback();
        _db = client.db();
        const collection = db.collection("products");
        return collection.insertOne({ name: "Apple", price: 2.99 });
      })
      .catch((err) => {
        console.log(err);
      });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
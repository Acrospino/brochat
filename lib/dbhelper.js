var mongodb = require('mongodb')
var server = new mongodb.Server('127.0.0.1', 27017, {});
var db = new mongodb.Db('brochat', server, {w:1});

db.open(function(err) {
    if (err) throw err;
});

exports.mongoInsert = function(collectName,doc) {
    db.collection(collectName, function(err, collectObj) {
        if (err) throw err;
        collectObj.insert(doc, {safe:true}, function(err, docs) {
            if (err) throw err;
            console.log('Document ID is: ' + docs[0]._id);
        });
    });
}

exports.mongoFind = function(collectName, query, callback) {
    db.collection(collectName, function(err, collectObj) {
        if (err) throw err;
        collectObj.find(query, function(err, docs) {
            if (err) throw err;
            docs.toArray(function(err, results) {
                if (err) throw err;
                callback(results);
            });
        });
    });
}

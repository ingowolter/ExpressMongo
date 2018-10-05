const mongoClient = require("mongodb").MongoClient
mongoClient.connect("mongodb://localhost:27017/wordshop", { useNewUrlParser: true })
.then(conn=> global.conn = conn.db("workshop"))
.catch(err=> console.log(err))


conn => global.conn.db("workshop")

function findAll(callback){
    global.conn.collection("curtomers").find({}).toArray(callback)
}

function insert(curtomers, callback){
    global.conn.collection("curtomers").insert(curtomers, callback);
}

const ObjectId = require("mongodb").ObjectID;

function findOne(id, callback){
    global.conn.collection("curtomers").findOne(new ObjectId(id), callback);
}

module.exports = {findAll, insert, findOne}
const mongoClient = require("Mongodb").MongoClient
mongoClient.connect("mondodb://localhost:27017/workshop")
.then(conn => global.conn = conn.db("workshop"))
.catch(err=>console.log(err))
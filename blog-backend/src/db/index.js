const { MongoClient } = require("mongodb")
require('dotenv').config()
let db;
const MONGOURL= process.env.MONGO_URL
async function connectTo(){
  const client= new MongoClient(MONGOURL)
  db=client.db('react-blog-db')
  cb()

}
module.exports={
  db,connectTo
}
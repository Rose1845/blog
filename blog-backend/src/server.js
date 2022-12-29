const express=require('express')

const app=express()

require("dotenv").config();
const mongodb = require("mongodb");

// const cors=require('cors')
app.use(express.json());
require("dotenv").config();
const {MongoClient}= require('mongodb')
//const client = new mongodb.MongoClient(process.env.MONGO_URL);

// app.use(cors({
//     credentials: true,
// }))



const MONGOURL = process.env.MONGO_URL;

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;
  
let db;
const client=new MongoClient(MONGOURL)

await client.connect()

db=client.db('react-blog-db')

//   const article = mongoClient.collection('articles').find({}).toArray(); //.findOne({name})
const article=await db.collection('articles').findOne({name})
if(article){

  res.json({ article });
}else{
  res.sendStatus(404)
}
});
//localhost:5173/articles/learn-node

//PUT /article/learn-node upvote



const PORT = 8000;

let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
   
  },
  {
    name: "learn-node",
    upvotes: 0,
   
  },

  {
    name: "mongodb",
    upvotes: 0,
   
  },
];

//create upvote endpoint

// app.put("/api/articles/:name/upvote", (req, res) => {
//   const { name } = req.params;
//   const article = articlesInfo.find((a) => a.name == name);
//   if (article) {
//     article.upvotes += 1;
//     res.send(
//       `Hurray !! The ${name} article now has  ${article.upvotes} upvotes!!`
//     );
//   } else {
//     res.send("That doesnot exist");
//   }
// });
// rewrite endpoint upvote to use mongodb

app.put("/api/articles/:name/upvote", async(req, res) => {
  const { name } = req.params;
  let db
const client=new MongoClient(MONGOURL)
await client.connect()

db=client.db('react-blog-db')
await db.collection('articles').updateOne({name},{
  $inc:{upvotes:1},
})

const article = await db.collection('articles').findOne({name})
  if (article) {
    res.json(
      article
    );
  } else {
    res.send("That doesnot exist");
  }
});

//comment endpoint

// app.post("/api/articles/:name/comments", (req, res) => {
//   const { name } = req.params;
//   const { postedBy, text } = req.body;
//   const article = articlesInfo.find((a) => a.name === name);
//   if (article) {
//     article.comment.push({ postedBy, text });
//     res.send(article.comment);
//   } else {
//     res.send("Doesnot exist");
//   }
// });

//comments endpoint to use mongodb
app.post("/api/articles/:name/comments", async(req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  let db;
  const client=new mongodb.MongoClient(MONGOURL)
  await client.connect()

 db=client.db('react-blog-db')
  await db.collection('articles').updateOne({name},{
    $push:{comments:{postedBy,text}}
  })
  const article = await db.collection('articles').findOne({name})
  if (article) {
    // article.comments.push({ postedBy, text });
    res.json(article);
  } else {
    res.send("Doesnot exist");
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

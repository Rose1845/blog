const express = require('express')



const app=express()


//localhost:5173/articles/learn-node

//PUT /article/learn-node upvote

app.use(express.json())

const PORT = 5000 
 
let articlesInfo=[
    {
    name:'learn-react',
    upvotes:0
}, {
    name:'learn-node',
    upvotes:0
},

{
    name:'mongodb',
    upvotes:0
}
]

//create upvote endpoint

app.put('/api/articles/:name/upvote',(req,res)=>{
   const {name}=req.params
    const article =articlesInfo.find(a=>a.name == name)
    if(article){
        article.upvotes += 1;
        res.send(`Hurray !! The ${name} article now has  ${article.upvotes} upvotes!!`)
        
    }else{
        res.send('That doesnot exist')
    }
   
})


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
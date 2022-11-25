const express = require('express')

const app=express()

const port = 5000 

app.get('/hello',(req,res)=>{
    res.send('hello ')
})

app.post('',(req,res)=>{
    
    res.status(200).send('Found it!')
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
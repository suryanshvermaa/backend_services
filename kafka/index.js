import express from "express";
const app=express();

app.get('/data',async(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log('server is listenning on port 3000');
})
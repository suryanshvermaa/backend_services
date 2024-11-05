import express from "express";
import axios from "axios";
import client from './client.js';
const app=express();

app.get('/data',async(req,res)=>{
    const data=await client.get('data');
    if(data) res.json(JSON.parse(data));
    else{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(async(data)=>{
            await client.set('data',JSON.stringify(data.data));
            client.expire('data',60*2);
            res.json(data.data);
        }).catch((err)=>{
            res.status(404).json(err.message);
        })
    }
})

app.listen(3000,()=>{
    console.log('server is listenning on port 3000');
    
})
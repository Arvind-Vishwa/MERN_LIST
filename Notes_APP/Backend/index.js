const express=require('express')
const app=express()

app.get('/add',(req,res) =>{
    res.send('file added');
})

app.post('/add',(req,res)=>{
    res.send('sucess');
})

app.listen(8080,()=>{
    console.log(`Server is started`);
});
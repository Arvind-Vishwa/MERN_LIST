const express=require('express')
const app=express()
const cors=require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/add',(req,res) =>{
    
    res.json({
        name:"Arvind"
    });
})

app.post('/add',(req,res)=>{
    let data=req.body.text;
    console.log(data);
    res.send(data);
})

app.delete('/delete',(req,res)=>{
    
    res.send('delete');
})

app.listen(8080,()=>{
    console.log(`Server is started`);
});
const mongoose=require('mongoose');

main().then(()=>{
    console.log("database is connected");
})
.catch((e) =>console.log(e));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Notes');
}





const mongoose=require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/bookManagingApp");
}

main().then(()=>{
    console.log("Database Connected Successfully!");
}).catch((err)=>{
    console.log(err);
})



let bookSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },price:{
        type:Number,
        required:true
    },author:{
        type:String,
        required:true
    },
    available:{
    type:String,
    required:true
}
})

const Book=new mongoose.model("Book",bookSchema);
module.exports=Book;
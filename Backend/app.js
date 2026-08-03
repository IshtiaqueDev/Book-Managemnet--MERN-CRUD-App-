const express=require("express");
const Book=require("./models/books");
const cors=require("cors");
const bookManage=require("./routes/books");
const app=express();
const port=5000;


app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log("Server is Listening...");
    
})

app.use("/",bookManage);
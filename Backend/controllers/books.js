const Book=require("../models/books");

module.exports.getData=async(req,res)=>{
    let response=await Book.find({});
    res.json({data:response});
}


module.exports.AddData=async(req,res)=>{
    let formData=req.body;
    let newBook=new Book(formData);
    let rs=await newBook.save();
    res.json({
        message:"Saved Successfully"
    })
}


module.exports.updateData=async(req,res)=>{
    let {id}=req.params;
    let formData=req.body;
    await Book.findByIdAndUpdate(id,formData);
    res.json({
        message:"Updated Successfully"
    })
}


module.exports.deleteData=async(req,res)=>{
    let {id}=req.params;
    await Book.findByIdAndDelete(id);
    res.json({
        message:"Delete Successfully!"
    })
}
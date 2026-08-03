import { useState } from "react"
import Form from "./Form";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MainPage({allBooks,getData}){
   let {id}=useParams();
   let filteredBook=allBooks.find((el)=>el._id==id);
   
   
   return(
    <>
    {filteredBook&&<Form filteredData={filteredBook} getData={getData}/>}
   </>
)
}
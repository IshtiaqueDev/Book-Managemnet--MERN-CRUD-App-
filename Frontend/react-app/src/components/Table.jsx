import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Table({data,getData}){
   const navigate = useNavigate();
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-11 card m-auto mt-3 bg-white">
                 <table className="table table-hover ">
                <thead>
                    <tr>
                    <td>Book Name:</td>
                    <td>Author:</td>
                    <td>Price:</td>
                    <td>Available:</td>
                    <td>Edit:</td>
                    <td>Delete:</td>
                    </tr>   
                </thead>
                   <tbody>
               {data.map((el) => (
              <tr key={el._id}>
              <td>{el.title}</td>
              <td>{el.author}</td>
              <td>${el.price}</td>
              <td>{el.available}</td>
              <td>
              <a className="btn btn-warning" href={`/${el._id}/edit`} >Edit</a>
              </td>
              <td>
            <button className="btn btn-danger" onClick={async()=>{
              let res=await axios.delete(`http://localhost:5000/${el._id}/delete`);
              getData();
              navigate("/");
            }}>Delete</button>
           </td>
           </tr>
         ))}
</tbody>
            </table>
                </div>
            </div>
        </div>
        </>
    )
}
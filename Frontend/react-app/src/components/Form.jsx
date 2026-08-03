import axios from "axios";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function Form({filteredData,getData}) {
    const initialState = {
    title: "",
    price: "",
    author: "",
    available:"yes",
  };
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidation] = useState(false);

  const navigate = useNavigate();


 useEffect(() => {
    if(filteredData){
        setFormData(filteredData);
      }
    console.log(formData);
}, [filteredData]);



  const handleData = (e) => {
    setFormData((prevData) => ({
      ...prevData,[e.target.name]:e.target.value
    }));
  };


  let addEditedData=async(e)=>{
    e.preventDefault();
  if (!e.currentTarget.checkValidity()) {
    setValidation(true);
    return;
  }
     console.log(formData);
     try{  
      if(filteredData){
        let res= await axios.put(`http://localhost:5000/${filteredData._id}/edit`,formData);
        getData();
        navigate("/");
      } else{
         let res= await axios.post("http://localhost:5000/addBook",formData);
        getData();
         navigate("/");
      }
     
     }catch(err){
        console.log(err);
     }
    setFormData(initialState);
    setValidation(false);
  };


  

  return (
    <div className="card bg-white shadow col-md-9 mt-4 m-auto p-4">
      <form className={`row g-3 ${validated ? "was-validated" :"needs-validation"}`}  noValidate   onSubmit={addEditedData}>
        <div className="col-md-3 col-12">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter Title of Book"
            value={formData.title}
            onChange={handleData}
            required
          />
          <div className="invalid-feedback">Please enter a title.</div>
        </div>

        <div className="col-md-2 col-12">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            placeholder="exp: 100"
            min={0}
            value={formData.price}
            onChange={handleData}
            required
          />
          <div className="invalid-feedback">Please enter a price.</div>
        </div>

        <div className="col-md-4 col-12">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            placeholder="Author of Book"
            value={formData.author}
            onChange={handleData}
            required
          />
          <div className="invalid-feedback">Please enter an author.</div>
        </div>

        <div className="col-md-3 col-12">
          <label htmlFor="availability" className="form-label">
            Available
          </label>
          <select required name="available" 
          id="availability" 
          value={formData.available}
          onChange={handleData}
        className="form-control"  >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="col-12 col-12">
            {filteredData?
            <button className="btn btn-warning col-md-12" type="submit">Edit Data</button>
            :
            <button className="btn btn-success col-md-12" type="submit">
            Submit form
          </button>
            }
        
        </div>
      </form>
    </div>
  );
}
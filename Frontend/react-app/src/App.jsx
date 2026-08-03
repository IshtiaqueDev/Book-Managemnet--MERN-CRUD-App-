import { Route , Routes } from 'react-router-dom'
import EditPage from './components/EditPage'
import Table from './components/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from './components/Form'


function App() {
  let[data,setData]=useState([]);

  const getData=async()=>{
  try{
   let response= await axios.get("http://localhost:5000/");
   console.log(response.data.data);
   setData(response.data.data)
   
   
    }catch(err){
    console.log(err);
  }
}

  useEffect(function sideEffect(){
    getData();
  },[]);

  return (
    <>
    <h1 className='text-center mt-1'>📚 Book Management</h1>
    <Routes>
      <Route path='/' element={<Form getData={getData}/>}></Route>
      <Route path='/:id/edit' element={<EditPage allBooks={data} getData={getData}/>}></Route>
    </Routes>
    <Table data={data} getData={getData}/>
   </>
  )
}

export default App

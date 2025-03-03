import { useState,useEffect } from "react";
import axios from 'axios'
const App = () =>{

  const [data,setData] = useState([])

  useEffect(()=>{
    DataFetch()
  },[])

  const DataFetch = async() =>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return(
    <>
    {
      data.map((item)=>(
        <div key={item.id} style={{border:"5px solid black",margin:"30px",padding:"30px"}}>
          <h2>{item.title}</h2>
          <p>{item.id}</p>
          <p>{item.userId}</p>
          <p>{item.body}</p>
          <p style={{color:item.completed ? "green":"red"}}>{item.completed ? "Done":"Pending"}</p>
        </div>  
      ))
    }
    </>
  )
}


export default App;
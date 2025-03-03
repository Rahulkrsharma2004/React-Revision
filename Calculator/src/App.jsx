import { useState,useEffect } from "react";
import axios from 'axios'
const App = () =>{

  const [data,setData] = useState([])

  useEffect(()=>{
    DataFetch()
  },[])

  const DataFetch = async() =>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return(
    <>
    <h1>Api Data</h1>
    {
      data.map((item)=>(
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>  
      ))
    }
    </>
  )
}


export default App;
import axios from "axios"
import { useEffect, useState } from "react"

const App = () =>{
  
  const [data,setData] = useState([])

  useEffect(()=>{
    dataFetch()
  },[])

  const dataFetch = async() =>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  return(
    <>
     <h1>{data.userId}</h1>
     <p>{data.id}</p>
     <p>{data.title}</p>
    </>
  )
}

export default App
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const App = () =>{

  const [data,setData] = useState([])


  useEffect(()=>{
    FetchData()
  },[])


  const FetchData = async() =>{
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  return(
    <>
    <h1>WELCOME</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

export default App
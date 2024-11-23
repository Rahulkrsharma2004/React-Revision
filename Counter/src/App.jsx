import './App.css'
import {useState} from 'react'

function App() {
  const [count,setCount] = useState(0)

  const decrement = () =>{
    setCount(count-1)
  }
  const increment = () =>{
    setCount(count+1)
  }

  return (
    <>
       <h1>Counter</h1>
        <button onClick={()=>decrement()}>decrement</button>
       <h2>Count:{count}</h2>
       <button onClick={()=>increment()}>Increment</button>
    </>
  )
}

export default App

import "./App.css";
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  const decrement = () => {
    if(count > 0){
      setCount(count-1)
    }
  }
  const increment = () =>{
    setCount(count+1)
  }
  return (
    <>
      <h1>Counter</h1>
      <button onClick={decrement}
      style={{cursor:count==0 ? "not-allowed":"pointer"}}>
        SUB</button>
      <p>{count}</p>
      <button onClick={increment}>ADD</button>
      <button onClick={increment}>ADD</button>
      <button onClick={increment}>ADD</button>

    </>
  );
}

export default App;



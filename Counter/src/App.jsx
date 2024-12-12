import "./App.css";
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <h1>Counter</h1>
      <button></button>
      <p>{count}</p>
      <button></button>
    </>
  );
}

export default App;

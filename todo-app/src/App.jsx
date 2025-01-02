export default function App() {


  const handleLogin = () =>{
    
  }

  return (
    <>
      <h1>WELCOME TO HOME PAGE</h1>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Signup</button>
      </div>
    </>
  );
}

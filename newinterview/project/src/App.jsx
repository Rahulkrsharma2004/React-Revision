import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  // const [selectedUser, setSelectedUser] = useState(null); 

  useEffect(() => {
    DataFetch();
  }, []); 

  // const handleShow = (user) => {
  //   setSelectedUser(user); 
  // };

  const DataFetch = async () => {
    try {
      const res = await axios.get("http://dummyjson.com/users");
      const firstFour = res.data.users.slice(0, 4);
      setData(firstFour);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>DATAFETCH</h1>
      {data.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleShow(item)}>
            <p>{item.id}</p>
          </button>
        </div>
      ))}

      {/* {selectedUser && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <h2>User Details</h2>
          <p><strong>ID:</strong> {selectedUser.id}</p>
          <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
          <p><strong>University:</strong> {selectedUser.university}</p>
        </div>
      )} */}
    </>
  );
};

export default App;

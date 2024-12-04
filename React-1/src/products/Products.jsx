import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [prodata, setProdata] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [filterData, setFilterData] = useState("");

  const fetchData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(data.data);
      setProdata(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //sorting--------------------------------------------------------------

  const handleSort = (order) => {
    let sortedData = [...prodata];
    if (order == "low") {
      sortedData.sort((a, b) => a.id - b.id);
    } else if (order == "high") {
      sortedData.sort((a, b) => b.id - a.id);
    }
    setProdata(sortedData);
    setSortOrder(order);
  };

  
  //filter----------------------------------------------------------------

  const handleFilter = (status) => {
    let filteredData = [...prodata];
    if (status === "true") {
      filteredData = filteredData.filter((product) => product.completed);
    } else if (status === "false") {
      filteredData = filteredData.filter((product) =>!product.completed);
    }
    setProdata(filteredData); 
    setFilterData(status);
  };



  return (
    <>
      <h1>PRODUCTS DATA</h1>
      <h1>PRODUCTS DATA</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">sort with id</option>
            <option value="low">low-high</option>
            <option value="high">high- low</option>
          </select>
        </div>
        <div>
          <select
            value={filterData}
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="">Filter by status</option>
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>
        </div>
      </div>
      <hr />
      {prodata.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {prodata.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td style={{ color: product.completed ? "green" : "red" }}>
                  {product.completed ? "Completed" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default Products;

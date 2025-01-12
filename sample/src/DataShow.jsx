const DataShow = ({ result }) => {
    return (
      <div>
        <h1>Data:</h1>
        <p>{result.id}</p>
        <p>{result.userId}</p>
        <p>{result.title}</p>
        <p>{result.completed ? "complete":"pending"}</p>
      </div>
    );
  };
  
  export default DataShow;
  
const DataShow = ({ result }) => {
    return (
      <div>
        <h1>Data:</h1>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    );
  };
  
  export default DataShow;
  
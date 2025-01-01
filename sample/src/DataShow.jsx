import React from 'react'

const DataShow = ({result}) => {
  return (
    <div>
      <h1>{result.userId}</h1>
      <p>{result.title}</p>
    </div>
  )
}

export default DataShow

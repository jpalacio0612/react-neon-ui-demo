import React from 'react'

export const Table = ({ title, description, data }) => {
  return (
    <div className='table'>
      <h1>{title}</h1>
      <p>{description}</p>
      {data && (
        <div className='table__grid'>
          <h3>Title</h3>
          <h3>Type</h3>
          <h3>Default value</h3>
          <h3>Description</h3>
          {data.map((element) => (
            <>
              <span>{element.title}</span>
              <span>{element.type}</span>
              <span>{element.default}</span>
              <span>{element.Description}</span>
            </>
          ))}
        </div>
      )}
    </div>
  )
}

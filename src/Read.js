import React from 'react'

const Read = ({todos}) => {
  return (
<ul>
    {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
    ))}
</ul>      
  )
}

export default Read;
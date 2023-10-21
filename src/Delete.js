import React, {useState} from 'react'

const Delete = ({deleteTodo}) => {
  const [index, setIndex] = useState("");
  const handleSubmit = () => {
    if(index !== ""){
        deleteTodo(index);
        setIndex("");
    }
  };
    return (
    <div>
        <input type='number' value={index} onChange={(e) => setIndex(e.target.value)} placeholder='Enter task index'/>
        <button onClick={handleSubmit}>Delete Task</button>
    </div>
  )
}

export default Delete

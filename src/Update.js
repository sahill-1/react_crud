import React, {useState} from 'react'

const Update = ({todos, updateTodos}) => {
  const [index, setIndex] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if(index !=="" && text !== ""){
        updateTodos(index, text);
        setIndex("");
        setText("");
    }
  }
    return (
    <div>
      <input type='text' value={index} onChange={(e) => setIndex(e.target.value)} placeholder='Enter task index' />
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Updated Task' />
        <button onClick={handleSubmit}>Update Task</button>
    </div>
  )
}

export default Update

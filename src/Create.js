import React, {useState} from 'react'

const Create = ({addTodo}) => {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        addTodo(text);
        setText("")
    }
  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter a new task'/>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default Create

import React, { useState } from 'react';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const updateTodo = (index, text) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = text;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== parseInt(index));
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Create addTodo={addTodo} />
      <Read todos={todos} />
      <Update todos={todos} updateTodo={updateTodo} />
      <Delete deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

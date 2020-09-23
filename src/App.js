import React, { useState } from 'react';
import './App.scss'
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Thanh Theo ! <3' },
    { id: 2, title: 'Thanh Theo dia huong! <3' },
    { id: 3, title: 'Thanh Theo dia huong <3 <3 <3! <3' },
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id == todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React hooks - TodoList</h1>

      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;

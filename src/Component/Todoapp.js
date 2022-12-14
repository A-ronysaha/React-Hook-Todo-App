import React, { useState , useEffect} from "react";
import Todolist from "./Todolist";
import Todoform from "./Todoform";
const { v4: uuidv4 } = require("uuid");

export default function Todoapp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("Todo")) || 
   [
    { id: 1, task: "Clean the Floor", completed: false },
    { id: 2, task: "Wash Car", completed: false },
    { id: 3, task: "Grow Plant", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  useEffect(()=>{
    window.localStorage.setItem("Todo",JSON.stringify(todos))
  },[todos])
  function addTodo(newTodo) {
    setTodos([...todos, { id: uuidv4(), task: newTodo, completed: false }]);
  }

  function removeTodo(todoId) {
    let updtTodo = todos.filter((t) => t.id !== todoId);
    setTodos(updtTodo);
  }

  function toggleTodo(todoId) {
    let updtTodo = todos.map((t) =>
      t.id === todoId ? { ...t, completed: !t.completed } : t
    );
    setTodos(updtTodo);
  }
  function editTodo(todoId,newTask) {
    let updtTodo = todos.map((t) =>
      t.id === todoId ? { ...t, task: newTask } : t
    );
    setTodos(updtTodo);
  }
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">Todoapp Using HOOK</a>
        </div>
      </nav>
      <h1 className="text-center text-decoration-underline">Todo_List...</h1>
      <div className="offset-1 card w-75 mb-3">
        <div className="card-body">
          <Todolist todoTask={todos} dltTodo={removeTodo} toggle={toggleTodo} edit={editTodo}  />
        </div>
      </div>
      <div className="offset-3 card text-center w-50 my5 mt-5">
        <Todoform addTask={addTodo} />
      </div>
    </div>
  );
}



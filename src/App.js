import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

// import ToDoList from "./ToDoList.jsx";

const App = () => {


  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const[newTask, setNewTask] = useState("");
  const[tasks, setTasks] = useState(initialState);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="appWrapper">
        <div>
          <Header />
        </div>
        <div className="inputContainer">
          <Form
          newTask = {newTask}
          setNewTask = {setNewTask}
          tasks = {tasks}
          setTasks = {setTasks}
          />
        </div>
        <div>
          <TodoList tasks = {tasks} setTasks = {setTasks} />
        </div>
      </div>
    </div>
  );
};
export default App
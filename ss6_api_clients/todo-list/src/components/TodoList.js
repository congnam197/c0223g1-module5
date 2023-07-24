import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { createTask, getTodoList } from "../taskService";

export default function TodoList() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    //DISPLAY TODO LIST
    const getTasks = async () => {
      const data = await getTodoList();
      setTask(data);
    };
    getTasks();
  }, []);
  //CREATE A NEW TASK
  const addNewTask = async () => {
    let title = document.getElementById("task").value;
    if (title !== "") {
      const object = {
        title: title,
      };
      await createTask(object);
      const data = await getTodoList();
      setTask(data);
    }
  };

  return (
    <div className="container">
      <h1>Todo - List</h1>
      <input type="text" name="task" id="task" placeholder="Task"></input>
      <button type="submit" onClick={addNewTask}>
        Submit
      </button>
      <div className="list-task">
        <ul>
          {tasks.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

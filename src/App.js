import React, { useEffect, useState } from "react";

import ToDoTaskList from "./components/ToDoTasks/ToDoTaskList/ToDoTaskList";
import ToDoInput from "./components/ToDoTasks/ToDoInput/ToDoInput";
import "./App.css";

const App = () => {
  const [toDoTasks, setToDoTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks") == null) {
      return
    } else {
      setToDoTasks(JSON.parse(localStorage.getItem("tasks")))
    }
  }, [])

  const updateLocalStorage = (e) => {
    let tasksStringfied = JSON.stringify(e);
    localStorage.setItem("tasks", tasksStringfied);
  };

  const addTaskHandler = (enteredText) => {
    setToDoTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ text: enteredText, id: Math.random().toString() });
      updateLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  const deleteItemHandler = (taskId) => {
    setToDoTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      updateLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No tasks found. Maybe add one?</p>
  );

  if (toDoTasks.length > 0) {
    content = (
      <ToDoTaskList items={toDoTasks} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="task-form">
        <ToDoInput onAddTask={addTaskHandler} />
      </section>
      <section id="tasks">
        {content}
      </section>
    </div>
  );
};

export default App;

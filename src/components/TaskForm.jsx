import React, { useState, useId, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskName, setTaskName] = useState(""); // State to manage task name input
  const id = useId(); // Generates a unique ID for the new task
  const { addTask } = useContext(TaskContext); // Access the addTask function from context

  // Handles form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (taskName.trim() === "") return; // Prevent submission of empty tasks
    const newTask = { id, title: taskName, completed: false }; // Create a new task object
    addTask(newTask); // Add the new task to the global state
    setTaskName(""); // Clear the input field
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskInput">New Task:</label>
      <input
        id="taskInput"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} // Update input state
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
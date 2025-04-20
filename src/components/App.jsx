import React, { useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList"; // Ensure TaskList is included to display tasks

function App() {
  const { tasks, setTasks } = useContext(TaskContext); // Use global context for tasks

  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:6001/tasks')
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return r.json();
      })
      .then(data => setTasks(data)) // Update tasks using context's setTasks function
      .catch(console.error); // Log any errors
  }, [setTasks]); // Only run when setTasks changes

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm /> {/* Form for adding new tasks */}
      <SearchBar /> {/* Search functionality */}
      <TaskList query="" /> {/* TaskList dynamically displays tasks */}
    </div>
  );
}

export default App;
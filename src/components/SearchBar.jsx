import React, { useRef, useContext, useState } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const searchInputRef = useRef(""); // Use useRef to persist search input
  const { tasks } = useContext(TaskContext); // Access global tasks state
  const [filteredTasks, setFilteredTasks] = useState(tasks); // Store filtered tasks

  // Handle search functionality
  const handleSearch = () => {
    const query = searchInputRef.current.value.toLowerCase(); // Get current search query
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(query)
    ); // Filter tasks based on query
    setFilteredTasks(filtered); // Update filtered tasks
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        ref={searchInputRef} // Use useRef to persist input value
        onChange={handleSearch} // Dynamically trigger search on input change
      />
      <TaskList tasks={filteredTasks} /> {/* Pass filtered tasks to TaskList */}
    </div>
  );
}

export default SearchBar;
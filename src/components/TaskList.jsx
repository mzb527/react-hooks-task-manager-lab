import React from "react";

function TaskList({ tasks = [], toggleComplete }) {
  if (!Array.isArray(tasks)) {
    console.error("The 'tasks' prop must be an array.");
    return null;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button
            onClick={() => toggleComplete(task.id)}
            data-testid={task.id}
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
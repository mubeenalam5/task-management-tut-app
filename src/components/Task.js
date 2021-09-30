import React from "react";

export const Task = ({ task, onDelete }) => {
  return (
    <div className="Task-div">
      <h6>{task.title}</h6>
      <p>{task.description}</p>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => onDelete(task)}>
        Delete
      </button>
    </div>
  );
};

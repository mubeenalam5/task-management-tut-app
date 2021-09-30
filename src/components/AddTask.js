import React, { useState } from "react";

export const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) alert("Title and description cant be empty!");
    else {
      props.addTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="container my-3">
      <h5 className="my-3">Add New Task</h5>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Task Description
          </label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-sm btn-outline-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

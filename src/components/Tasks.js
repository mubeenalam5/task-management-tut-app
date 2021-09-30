import React from "react";
import { Task } from "./Task";

export const Tasks = (props) => {
  return (
    <div className="container Tasks-div">
      <h5 className="my-3">Task List</h5>
      {props.tasks.length === 0 ? (
        <div className="Task-div">No tasks to display </div>
      ) : (
        props.tasks.map((task) => {
          return (
            <>
              <Task task={task} key={task.tno} onDelete={props.onDelete} />
              <hr />
            </>
          );
        })
      )}
    </div>
  );
};

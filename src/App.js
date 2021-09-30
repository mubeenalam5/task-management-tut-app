import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Tasks } from "./components/Tasks";
import { About } from "./components/About.js";
import { AddTask } from "./components/AddTask";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTasks;
  if (localStorage.getItem("tasks") === null) initTasks = [];
  else initTasks = JSON.parse(localStorage.getItem("tasks"));

  const onDelete = (task) => {
    console.log("I am over onDelete function", task);
    // cannot use this code for deletion in reactJS
    // let index = tasks.indexOf(task);
    // tasks.splice(index,1);
    setTasks(
      tasks.filter((i) => {
        return i !== task;
      })
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = (title, description) => {
    let tno;
    if (tasks.length === 0) tno = 0;
    else {
      tno = tasks[tasks.length - 1].tno + 1;
    }
    const newtask = {
      tno: tno,
      title: title,
      description: description,
    };
    setTasks([...tasks, newtask]);
    console.log(newtask);
  };

  const [tasks, setTasks] = useState(initTasks);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className="App">
        <Header title="Task Management App" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTask addTask={addTask} />
                  <Tasks tasks={tasks} onDelete={onDelete} />
                </>
              );
            }}></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
